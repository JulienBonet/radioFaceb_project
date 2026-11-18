import bcrypt from 'bcrypt';
import db from '../db/db.js';
import { execSync } from 'node:child_process';
import { createInterface } from 'node:readline';

const SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 12;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function askPassword() {
  return new Promise((resolve, reject) => {
    let password = '';

    const restoreTerminal = () => {
      process.stdin.removeAllListeners('data');
      process.stdin.setRawMode(false);
      process.stdin.pause();
      execSync('stty echo', { stdio: 'inherit' });
    };

    try {
      execSync('stty -echo', { stdio: 'inherit' });
      rl.close();

      process.stdout.write('Mot de passe : ');
      process.stdin.setRawMode(true);
      process.stdin.setEncoding('utf8');
      process.stdin.resume();

      const onData = (char) => {
        if (char === '\u0003') {
          restoreTerminal();
          process.stdout.write('\n');
          reject(new Error('Saisie interrompue.'));
          return;
        }

        if (char === '\r' || char === '\n') {
          restoreTerminal();
          process.stdout.write('\n');
          resolve(password);
          return;
        }

        if (char === '\u007f' || char === '\b') {
          password = password.slice(0, -1);
          return;
        }

        password += char;
      };

      process.stdin.on('data', onData);
    } catch (error) {
      try {
        execSync('stty echo', { stdio: 'inherit' });
      } catch {
        // Le terminal peut déjà être rétabli.
      }

      reject(error);
    }
  });
}

try {
  const name = (await ask('Nom du compte administrateur : ')).trim();
  const password = await askPassword();

  if (!name) {
    throw new Error('Le nom du compte est obligatoire.');
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new Error(
      `Le mot de passe doit contenir au moins ${MIN_PASSWORD_LENGTH} caractères.`
    );
  }

  const hash = await bcrypt.hash(password, SALT_ROUNDS);

  await db.query(
    `INSERT INTO user (name, password, is_admin)
     VALUES (?, ?, 1)
     ON DUPLICATE KEY UPDATE password = VALUES(password), is_admin = 1`,
    [name, hash]
  );

  console.log(`Administrateur « ${name} » prêt.`);
} catch (err) {
  console.error('Opération impossible :', err.message);
  process.exitCode = 1;
} finally {
  process.stdin.pause();
  await db.end();
}
