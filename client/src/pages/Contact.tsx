// client/src/pages/ContactPage.tsx

import { Box } from '@mui/material';
import ContactBlock from '../components/contact/ContactBlock';
import InstagramBlock from '../components/contact/InstagramBlock';

export default function ContactPage() {
  //-------------------------
  // RETURN
  //-------------------------

  return (
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

      <InstagramBlock />
    </Box>
  );
}
