// client/src/pages/admin/AdminMixtapes.tsx
import { Box, Button, Chip, IconButton, Stack, Typography } from '@mui/material';

import { DataGrid, type GridColDef } from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useEffect, useState } from 'react';

import { deleteMixtape, getAllMixtapes } from '../../api/mixtape.api';

import type { Mixtape } from '../../api/mixtape.api';

import MixtapeFormDialog from '../../components/admin/MixtapeFormDialog';

import { toast } from 'sonner';

const AdminMixtapesPage = () => {
  const [mixtapes, setMixtapes] = useState<Mixtape[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const [selectedMixtape, setSelectedMixtape] = useState<Mixtape | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getAllMixtapes();

      setMixtapes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('Êtes-vous sûr ?');

    if (!confirmed) return;

    try {
      await deleteMixtape(id);

      setMixtapes((prev) => prev.filter((mixtape) => mixtape.id !== id));

      toast.success('Mixtape deleted');
    } catch (err) {
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
    },

    {
      field: 'title',
      headerName: 'Titre',
      flex: 1,
    },

    {
      field: 'genre_name',
      headerName: 'Genre',
      width: 160,

      renderCell: (params) => (
        <Chip
          label={params.row.genre_name}
          sx={{
            backgroundColor: params.row.genre_color,
            color: 'white',
            fontWeight: 700,
          }}
        />
      ),
    },

    {
      field: 'created_at',
      headerName: 'Créé le',
      width: 180,
    },

    {
      field: 'is_published',
      headerName: 'Publié',
      width: 120,

      renderCell: (params) => (params.value ? '✅' : '❌'),
    },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 140,

      sortable: false,

      renderCell: (params) => (
        <Stack direction="row">
          <IconButton
            onClick={() => {
              setSelectedMixtape(params.row);

              setOpenDialog(true);
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4">Admin Mixtapes</Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedMixtape(null);
            setOpenDialog(true);
          }}
        >
          Create Mixtape
        </Button>
      </Stack>

      <Box
        sx={{
          height: 700,
          backgroundColor: 'white',
        }}
      >
        <DataGrid rows={mixtapes} columns={columns} loading={loading} disableRowSelectionOnClick />
      </Box>

      <MixtapeFormDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSuccess={fetchData}
        mixtape={selectedMixtape}
      />
    </Box>
  );
};

export default AdminMixtapesPage;
