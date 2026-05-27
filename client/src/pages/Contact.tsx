// client/src/pages/ContactPage.tsx

import { Box, Stack} from '@mui/material';
import RainbowBg from '../assets/images/rainbow_background.jpg';
import ContactBlock from '../components/contact/ContactBlock'
import NewsLetterBlock from '../components/contact/NewsletterBlock';
import InstagramBlock from '../components/contact/InstagramBlock'

export default function ContactPage() {



  //-------------------------
  // RETURN
  //-------------------------

  return (
    <Stack
      sx={{
        width: '100%',
        backgroundImage: `url(${RainbowBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          px: 3,
          pt: 4,
          pb: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >

        <ContactBlock />

        <NewsLetterBlock />

        <InstagramBlock />
      </Box>
    </Stack>
  );
}
