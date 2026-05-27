// server/src/routes/contactRoute.js

import express from 'express';
import transporter from '../utils/mailer.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
});

router.post('/', contactLimiter, async (req, res) => {
  try {
    const { name, email, message, website } = req.body;

    // honeypot anti-bot
    if (website) {
      return res.status(400).json({
        error: 'Spam détecté',
      });
    }

    // trim
    const cleanName = name?.trim();
    const cleanEmail = email?.trim();
    const cleanMessage = message?.trim();

    // champs requis
    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        error: 'Tous les champs sont requis',
      });
    }

    // regex email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        error: 'Email invalide',
      });
    }

    // taille max message
    if (cleanMessage.length > 5000) {
      return res.status(400).json({
        error: 'Message trop long',
      });
    }

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Contact RadioFaceB - ${cleanName}`,
      replyTo: cleanEmail,

      text: `
        Nom: ${cleanName}
        Email: ${cleanEmail}

        ${cleanMessage}
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
});

export default router;