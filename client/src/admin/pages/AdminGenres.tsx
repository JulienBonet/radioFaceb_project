// client/src/admin/pages/AdminGenres.tsx
import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import {
  DataGrid,
  type GridColDef,
} from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  useEffect,
  useState,
} from 'react';

import type { Genre } from '../../types/genre';

import {
  getAllGenres,
  deleteGenre,
} from '../../admin/api/adminGenreApi';

import GenreFormDialog from '../../admin/component/GenreFormDialog';

import { toast } from 'sonner';

export default function AdminGenres() {
  const [genres, setGenres] =
    useState<Genre[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [openDialog, setOpenDialog] =
    useState(false);

  const [
    selectedGenre,
    setSelectedGenre,
  ] = useState<Genre | null>(
    null
  );

  const fetchData = async () => {
    try {
      const data =
        await getAllGenres();

      setGenres(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  const load = async () => {
    await fetchData();
  };

  void load();
}, []);

  const handleDelete = async (
    id: number
  ) => {
    const confirmed =
      window.confirm(
        'Êtes-vous sûr ?'
      );

    if (!confirmed) return;

    try {
      await deleteGenre(id);

      setGenres((prev) =>
        prev.filter(
          (genre) =>
            genre.id !== id
        )
      );

      toast.success(
        'Genre deleted'
      );
    } catch (err) {
      console.error(err);

      toast.error(
        'Delete failed'
      );
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },

    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },

    {
      field: 'color',
      headerName: 'Color',
      width: 180,

      renderCell: (params) => (
        <Chip
          label={params.value}
          sx={{
            backgroundColor:
              params.value,
            color: 'white',
            fontWeight: 700,
          }}
        />
      ),
    },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 140,
      sortable: false,

      renderCell: (params) => (
        <Stack
          direction="row"
        >
          <IconButton
            onClick={() => {
              setSelectedGenre(
                params.row
              );

              setOpenDialog(
                true
              );
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() =>
              handleDelete(
                params.row.id
              )
            }
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          justifyContent:
            'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily:
              'var(--font_05)',
            fontSize:
              'xx-large',
            fontWeight:
              'bold',
          }}
        >
          Admin Genres
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedGenre(
              null
            );

            setOpenDialog(
              true
            );
          }}
        >
          Create Genre
        </Button>
      </Stack>

      <Box
        sx={{
          height: '80vh',
          backgroundColor:
            'white',
        }}
      >
        <DataGrid
          rows={genres}
          columns={columns}
          loading={loading}
          disableRowSelectionOnClick
        />
      </Box>

      <GenreFormDialog
        open={openDialog}
        onClose={() =>
          setOpenDialog(false)
        }
        onSuccess={fetchData}
        genre={selectedGenre}
      />
    </Box>
  );
}