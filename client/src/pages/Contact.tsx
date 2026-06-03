// client/src/pages/ContactPage.tsx

import { Box } from '@mui/material';
import Seo from '../components/Seo';
import ContactBlock from '../components/contact/ContactBlock';

export default function ContactPage() {
  //-------------------------
  // RETURN
  //-------------------------

  return (
    <>
      <Seo
        title="Radio Face B | Contact"
        description="Formulaire de contact pour écrire à Radio Face B"
      />
      <main>
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
        </Box>
      </main>
    </>
  );
}
