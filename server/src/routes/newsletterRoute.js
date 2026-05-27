// server/src/routes/newsletterRoute.js

import express from 'express';
import rateLimit from 'express-rate-limit';

import transporter from '../utils/mailer.js';

const router = express.Router();

// -------------------------
// RATE LIMIT
// -------------------------

const newsletterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
});

// -------------------------
// NEWSLETTER
// -------------------------

router.post(
  '/',
  newsletterLimiter,

  async (req, res) => {
    try {
      const {
        name,
        email,
        consent,
        website,
      } = req.body;

      // honeypot anti-bot
      if (website) {
        return res.status(400).json({
          error: 'Spam détecté',
        });
      }

      // trim
      const cleanName = name?.trim();

      const cleanEmail = email?.trim();

      // champs requis
      if (!cleanName || !cleanEmail) {
        return res.status(400).json({
          error: 'Tous les champs sont requis',
        });
      }

      // consentement
      if (!consent) {
        return res.status(400).json({
          error:
            'Veuillez accepter les conditions',
        });
      }

      // regex email
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(cleanEmail)) {
        return res.status(400).json({
          error: 'Email invalide',
        });
      }

      // taille max nom
      if (cleanName.length > 100) {
        return res.status(400).json({
          error: 'Nom trop long',
        });
      }

      // -------------------------
      // SEND MAIL
      // -------------------------

      await transporter.sendMail({
        from: process.env.MAIL_USER,

        to: process.env.MAIL_USER,

        subject:
          'Nouvelle inscription newsletter',

        text: `
Nouvelle inscription newsletter Radio Face B

Nom : ${cleanName}

Email : ${cleanEmail}

Je souhaite recevoir les newsletters et actualités de Radio Face B.
        `,
      });

      return res.json({
        success: true,
      });
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        error: 'Erreur serveur',
      });
    }
  }
);

export default router;