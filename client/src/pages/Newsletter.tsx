import { Box } from '@mui/material';
import NewsLetterBlock from '../components/contact/NewsletterBlock';
import InstagramBlock from '../components/contact/InstagramBlock'

export default function ContactPage() {



  //-------------------------
  // RETURN
  //-------------------------

  return (
      <Box
        sx={{
          px: 3,
          pb: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <NewsLetterBlock />

        <InstagramBlock />
      </Box>
  );
}
