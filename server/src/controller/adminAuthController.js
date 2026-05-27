// server/src/controller/adminAuthController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../../db/db.js';

export const loginAdmin = async (req, res) => {
  try {
    const { name, password } = req.body;

    const [users] = await db.query(
      'SELECT * FROM user WHERE name = ? AND is_admin = 1',
      [name]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = users[0];

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = jwt.sign(
      { id: user.id, is_admin: user.is_admin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        is_admin: user.is_admin,
      },
    });
  } catch (err) {
    console.error('LOGIN ERROR:', err);
    res.status(500).json({
      message: 'Server error',
      error: err.message,
    });
  }
};
