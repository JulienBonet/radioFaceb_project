// client/src/admin/component/GenreFormDialog.tsx
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';

import { useEffect, useState } from 'react';

import {
  createGenre,
  updateGenre,
} from '../api/adminGenreApi';

import type { Genre } from '../../types/genre';

import { toast } from 'sonner';

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  genre?: Genre | null;
};

export default function GenreFormDialog({
  open,
  onClose,
  onSuccess,
  genre,
}: Props) {
  const isEdit = Boolean(genre);

  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (!genre) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName('');
      setColor('#000000');
      return;
    }

    setName(genre.name);
    setColor(genre.color);
  }, [genre]);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        name,
        color,
      };

      if (isEdit && genre) {
        await updateGenre(
          genre.id,
          payload
        );

        toast.success(
          'Genre updated'
        );
      } else {
        await createGenre(payload);

        toast.success(
          'Genre created'
        );
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);

      toast.error(
        'Operation failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        {isEdit
          ? 'Edit Genre'
          : 'Create Genre'}
      </DialogTitle>

      <DialogContent>
        <Stack
          spacing={2}
          sx={{ mt: 1 }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            fullWidth
          />

          <TextField
            label="Color"
            type="color"
            value={color}
            onChange={(e) =>
              setColor(e.target.value)
            }
            fullWidth
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading
            ? 'Loading...'
            : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}