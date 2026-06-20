import { Box } from '@mui/material';
import Seo from '../components/Seo';
import NewsLetterBlock from '../components/contact/NewsletterBlock';
import InstagramBlock from '../components/contact/InstagramBlock';

export default function ContactPage() {



  //-------------------------
  // RETURN
  //-------------------------

  return (
        <>
          <Seo
            title="Radio Face B | S'incrire à la Newsletter"
            description="Restez informer de nos actualités en vous inscrivant à la newsletter de Radio Face B"
          />
          <main>
      <Box
        sx={{
          px: 3,
          mx:2,
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
      </main>
      </>
  );
}
