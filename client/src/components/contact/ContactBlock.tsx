import { useState } from 'react';
import { Box, Button, Paper, Stack, TextField, Typography, Alert } from '@mui/material';

export default function ContactBlock() {
     const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        website: '', // honeypot
      });
    
      const [loading, setLoading] = useState(false);
    
      const [success, setSuccess] = useState(false);
    
      const [error, setError] = useState('');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    
      //-------------------------
      // SUBMIT
      //-------------------------
      const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (loading) return;
    
        setError('');
        setSuccess(false);
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // validation email
        if (!emailRegex.test(form.email)) {
          setError('Email invalide');
          return;
        }
    
        // honeypot
        if (form.website.trim() !== '') {
          return;
        }
    
        try {
          setLoading(true);
    
          const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
    
            body: JSON.stringify(form),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.error || 'Erreur');
          }
    
          setSuccess(true);
    
          setForm({
            name: '',
            email: '',
            message: '',
            website: '',
          });
        } catch (err) {
          console.error(err);
    
          setError('Impossible d’envoyer le message');
        } finally {
          setLoading(false);
        }
      };

      // -------------------------
  // HELPER
  // -------------------------

  const ContactTextFieldSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--color_05)',
    },

    '&:hover fieldset': {
      borderColor: 'var(--color_05)',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'var(--color_01)',
    },
  },

  '& .MuiInputLabel-root': {
    color: 'var(--color_05)',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: 'var(--color_01)',
  },
};

  const contactButtonSx = {
    backgroundColor: 'var(--color_05)',
    fontweight: 'bold',

    '&:hover': {
      backgroundColor: 'var(--color_01)',
    },
  };
  //-------------------------
  // RETURN
  //------------------------- 

    return(
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            width: '90%',
            maxWidth: 900,
          }}
        >
          <Stack spacing={3}>
            <Typography
              sx={{
                color: 'var(--color_05)',
                fontFamily: 'var(--font_01)',
                fontSize: 'xx-large',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Contact
            </Typography>

            <Typography
              sx={{
                fontFamily: 'var(--font_05)',
                fontSize: 'medium',
                textAlign: 'center',
              }}
            >
              Une question, une suggestion, un mot d'amour ou un problème technique ?
            </Typography>

            {success && <Alert severity="success">Message envoyé.</Alert>}

            {error && <Alert severity="error">{error}</Alert>}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label="Nom"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  fullWidth
                  required
                  sx={ContactTextFieldSx}
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  fullWidth
                  required
                  sx={ContactTextFieldSx}
                />

                <TextField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  multiline
                  rows={6}
                  fullWidth
                  required
                  sx={ContactTextFieldSx}
                />

                {/* Honeypot anti-bot */}
                <TextField
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  sx={{
                    display: 'none',
                  }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Button type="submit" variant="contained" disabled={loading} sx={contactButtonSx}>
                  {loading ? 'Envoi...' : 'Envoyer'}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>
    )

}