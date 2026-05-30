// client/src/components/contact/NewsletterBlock.tsx
import { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Stack,
  Paper,
  Button,
  Typography,
  TextField,
  Alert,
  Box,
} from '@mui/material';

export default function NewsletterBlock() {
  const [newsletterForm, setNewsletterForm] = useState({
    name: '',
    email: '',
    website: '', // honeypot
  });

  const [newsletterAccepted, setNewsletterAccepted] = useState(false);

  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const [newsletterError, setNewsletterError] = useState('');

  // -------------------------
  // NEWSLETTER CHANGE
  // -------------------------

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // -------------------------
  // NEWSLETTER SUBMIT
  // -------------------------

  const handleNewsletterSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newsletterLoading) return;

    setNewsletterError('');
    setNewsletterSuccess(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validation email
    if (!emailRegex.test(newsletterForm.email)) {
      setNewsletterError('Email invalide');
      return;
    }

    // checkbox
    if (!newsletterAccepted) {
      setNewsletterError('Veuillez accepter les conditions');

      return;
    }

    // honeypot
    if (newsletterForm.website.trim() !== '') {
      return;
    }

    try {
      setNewsletterLoading(true);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/newsletter`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          ...newsletterForm,
          consent: newsletterAccepted,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur');
      }

      setNewsletterSuccess(true);

      setNewsletterForm({
        name: '',
        email: '',
        website: '',
      });

      setNewsletterAccepted(false);
    } catch (err) {
      console.error(err);

      setNewsletterError('Impossible de s’inscrire à la newsletter');
    } finally {
      setNewsletterLoading(false);
    }
  };

  // -------------------------
  // HELPER
  // -------------------------

  const newsletterTextFieldSx = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color_05)',
      },

      '&:hover fieldset': {
        borderColor: 'var(--color_05)',
      },

      '&.Mui-focused fieldset': {
        borderColor: 'var(--color_02)',
      },
    },

    '& .MuiInputLabel-root': {
      color: 'var(--color_05)',
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: 'var(--color_02)',
    },
  };

  const newletterButtonSx = {
    backgroundColor: 'var(--color_05)',

    '&:hover': {
      backgroundColor: 'var(--color_02)',
    },
  };

  //-------------------------
  // RETURN
  //-------------------------

  return (
    <Paper
      elevation={8}
      sx={{
        p: 4,
        borderRadius: 4,
        width: '90%',
        maxWidth: 900,
        mt: 4,
        
        animation: 'contentFade 0.35s ease',

        '@keyframes contentFade': {
          from: {
            opacity: 0,
            transform: 'translateY(8px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Stack spacing={3}>
        <Typography
          sx={{
            color: 'var(--color_02)',
            fontFamily: 'var(--font_01)',
            fontSize: 'xx-large',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          NEWSLETTER
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font_05)',
            fontSize: 'medium',
            textAlign: 'center',
          }}
        >
          Recevez les actualités et newsletters de Radio Face B.
        </Typography>

        {newsletterSuccess && <Alert severity="success">Inscription enregistrée.</Alert>}

        {newsletterError && <Alert severity="error">{newsletterError}</Alert>}

        <Box component="form" onSubmit={handleNewsletterSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Nom"
              name="name"
              value={newsletterForm.name}
              onChange={handleNewsletterChange}
              disabled={newsletterLoading}
              fullWidth
              required
              sx={newsletterTextFieldSx}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={newsletterForm.email}
              onChange={handleNewsletterChange}
              disabled={newsletterLoading}
              fullWidth
              required
              sx={newsletterTextFieldSx}
            />

            {/* Honeypot anti-bot */}
            <TextField
              name="website"
              value={newsletterForm.website}
              onChange={handleNewsletterChange}
              sx={{
                display: 'none',
              }}
              tabIndex={-1}
              autoComplete="off"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={newsletterAccepted}
                  onChange={(e) => setNewsletterAccepted(e.target.checked)}
                />
              }
              label="Je souhaite recevoir les newsletters et actualités de Radio Face B"
            />

            <Button
              type="submit"
              variant="contained"
              disabled={newsletterLoading}
              sx={newletterButtonSx}
            >
              {newsletterLoading ? 'Inscription...' : 'S’inscrire à la Newsletter'}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
