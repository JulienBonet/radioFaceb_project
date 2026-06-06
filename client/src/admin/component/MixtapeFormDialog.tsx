// client/src/components/admin/MixtapeFormDialog.tsx
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import { useEffect, useState } from 'react';

import { Controller, useForm, useWatch } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mixtapeSchema, type MixtapeFormValues } from '../../schemas/mixtape.schema';

import type { Mixtape } from '../../types/mixtape';

import { createMixtape, updateMixtape } from '../api/adminMixtapeApi';

import { getAllGenres} from '../api/adminGenreApi';

import type { Genre } from '../../types/genre';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { uploadMixtapeCover } from '../api/upload.api';

import HtmlEditor from './HtmlEditor';

import { toast } from 'sonner';

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  mixtape?: Mixtape | null;
};

const MixtapeFormDialog = ({ open, onClose, onSuccess, mixtape }: Props) => {
  const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL as string;

  const isEdit = !!mixtape;

  const [genres, setGenres] = useState<Genre[]>([]);

  const [loading, setLoading] = useState(false);

  const [uploading, setUploading] = useState(false);
  

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<MixtapeFormValues>({
    resolver: zodResolver(mixtapeSchema),

    defaultValues: {
      title: '',
      cover: '',
      platform: 'mixcloud',
      embed_ref: '',
      genre_id: 1,
      is_published: true,
      presentation: '',
      tracklist: '',
    },
  });

  const cover = useWatch({
    control,
    name: 'cover',
  });

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getAllGenres();

        setGenres(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadGenres();
  }, []);

  useEffect(() => {
    if (!mixtape) {
      reset({
        title: '',
        cover: '',
        platform: 'mixcloud',
        embed_ref: '',
        genre_id: 1,
        is_published: true,
      });
      return;
    }

    reset({
      title: mixtape.title,
      cover: mixtape.cover,
      platform: mixtape.platform,
      embed_ref: mixtape.embed_ref,
      genre_id: mixtape.genre_id,
      is_published: Boolean(mixtape.is_published),
      presentation: mixtape.presentation || '',
      tracklist: mixtape.tracklist || '',
    });
  }, [mixtape, reset]);

  const handleUpload = async (file: File) => {
    try {
      setUploading(true);

      const res = await uploadMixtapeCover(file);

      setValue('cover', res.filename, {
        shouldDirty: true,
        shouldTouch: true,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (values: MixtapeFormValues) => {
    const payload = {
      ...values,
      presentation: values.presentation, // HTML déjà clean ici si tu veux
    };

    try {
      setLoading(true);
      if (isEdit && mixtape) {
        await updateMixtape(mixtape.id, payload);
        toast.success('Mixtape updated');
      } else {
        await createMixtape(payload);
        toast.success('Mixtape created');
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(errors);
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        maxHeight: '90vh',
        overflowY: 'auto',
      }}
    >
      <DialogTitle>{isEdit ? 'Edit Mixtape' : 'Create Mixtape'}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {/* COVER */}

          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {cover && (
              <Box
                component="img"
                src={`${CLOUDINARY_BASE_URL}/radio/mixtapes/${cover}`}
                alt="cover"
                sx={{
                  width: 160,
                  height: 160,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 2,
                }}
              />
            )}

            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload Cover'}

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    handleUpload(file);
                  }
                }}
              />
            </Button>
          </Stack>

          {/* TITLE */}

          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                error={!!errors.title}
                helperText={errors.title?.message}
                fullWidth
              />
            )}
          />

          {/* PLATFORM */}

          <Controller
            name="platform"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Platform"
                fullWidth
                onChange={(e) => field.onChange(e.target.value)}
              >
                <MenuItem value="mixcloud">Mixcloud</MenuItem>

                <MenuItem value="hearthis">HearThis</MenuItem>
              </TextField>
            )}
          />

          {/* EMBED REF */}

          <Controller
            name="embed_ref"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Embed Ref"
                error={!!errors.embed_ref}
                helperText={errors.embed_ref?.message}
                fullWidth
              />
            )}
          />

          {/* GENRE */}

          <Controller
            name="genre_id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Genre"
                fullWidth
                error={!!errors.genre_id}
                helperText={errors.genre_id?.message}
                onChange={(e) => field.onChange(Number(e.target.value))}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          {/* PRESENTATION */}
          <Box>
            <Typography sx={{ mb: 1, pl: 1, fontSize: 'small', fontWeight: 400 }}>
              Presentation
            </Typography>

            <Controller
              name="presentation"
              control={control}
              render={({ field }) => (
                <HtmlEditor value={field.value || ''} onChange={field.onChange} />
              )}
            />
          </Box>

          {/* TRACKLIST */}
          <Box>
            <Typography sx={{ mb: 1, pl: 1, fontSize: 'small', fontWeight: 400 }}>
              Tracklist
            </Typography>
            <Controller
              name="tracklist"
              control={control}
              render={({ field }) => (
                <HtmlEditor value={field.value || ''} onChange={field.onChange} />
              )}
            />
          </Box>

          {/* PUBLISHED */}

          <Controller
            name="is_published"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                label="Published"
                control={
                  <Switch
                    checked={Boolean(field.value)}
                    onChange={(_, checked) => field.onChange(checked)}
                  />
                }
              />
            )}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit(onSubmit)} disabled={loading}>
          {loading ? 'Loading...' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MixtapeFormDialog;
