// client/src/pages/Mixtapes.tsx
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import {
  Box,
  Stack,
  Divider,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useMixtapes } from '../hooks/useMixtapes';
import MixtapeGrid from '../components/mixtapes/MixtapeGrid';
import MixtapeRow from '../components/mixtapes/MixtapeRow';
import Seo from '../components/Seo';

export default function Mixtapes() {
  const { mixtapes, loading, error } = useMixtapes();
  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const genres = useMemo(() => {
    const list = mixtapes.map((m) => m.genre_name);
    return ['ALL', ...Array.from(new Set(list))];
  }, [mixtapes]);

  const filteredMixtapes = useMemo(() => {
    const query = search.toLowerCase();

    return mixtapes.filter((m) => {
      const matchGenre = selectedGenre === 'ALL' || m.genre_name === selectedGenre;

      const matchSearch =
        m.title.toLowerCase().includes(query) ||
        (m.presentation ?? '').toLowerCase().includes(query) ||
        m.genre_name.toLowerCase().includes(query) ||
        (m.tracklist ?? '').toLowerCase().includes(query);

      return matchGenre && matchSearch;
    });
  }, [mixtapes, selectedGenre, search]);

  const mixtapesByGenre = useMemo(() => {
    const map: Record<string, typeof filteredMixtapes> = {};

    filteredMixtapes.forEach((m) => {
      if (!map[m.genre_name]) {
        map[m.genre_name] = [];
      }
      map[m.genre_name].push(m);
    });

    return map;
  }, [filteredMixtapes]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSelect = (id: number) => {
    navigate(`/mixtapes/${id}`);
  };

  const ITEM_HEIGHT = 35;

  return (
    <>
      <Seo
        title="Radio Face B | Mixtapes"
        description="Retrouvez toutes les Mixtapes by BIG JuLius en écoute sur Radio Face B"
        image="/images/Radio_Face_B_Mixtape.jpg"
      />
      <main>
        <Box>
          <Stack
            direction="row"
            sx={{
              backgroundColor: 'var(--color_05)',
              position: 'sticky',
              top: 60,
              zIndex: 1300,
              px: 2,
              py: 1,
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {/* GENRES */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Stack
                direction="row"
                sx={{
                  flex: 1,
                  height: ITEM_HEIGHT,
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  '&::-webkit-scrollbar': { display: 'none' },
                  alignItems: 'center',
                }}
              >
                {genres.map((g, index) => {
                  const isActive = selectedGenre === g;

                  return (
                    <Box
                      key={g}
                      onClick={() => setSelectedGenre(g)}
                      sx={{
                        flexShrink: 0,
                        minWidth: 90,
                        px: 2,
                        py: 1,
                        textAlign: 'center',
                        fontFamily: 'var(--font_04)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        cursor: 'pointer',

                        color: isActive ? 'var(--color_05)' : '#fff',
                        backgroundColor: isActive ? '#fff' : 'transparent',
                        borderRadius: 1,

                        // ⭐ animation cascade
                        animation: 'fadeSlide 0.4s ease-out',
                        animationFillMode: 'both',
                        animationDelay: `${index * 40}ms`,

                        transition: '0.2s',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    >
                      {g}
                    </Box>
                  );
                })}
              </Stack>
            </Box>
            {/* SEARCH */}
            <Box sx={{ flex: { md: '0 0 280px' }, width: '100%' }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search mixtapes..."
                value={search}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearch(value);

                  if (value.length > 0) {
                    setSelectedGenre('ALL');
                  }
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  height: ITEM_HEIGHT,
                  '& .MuiOutlinedInput-root': {
                    height: ITEM_HEIGHT,

                    '& fieldset': {
                      borderColor: 'transparent', // normal
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // ❌ plus de bleu
                    },
                  },

                  animation: 'fadeSlide 0.4s ease-out',
                  animationFillMode: 'both',
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: search && (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setSearch('')}>
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Stack>

          <Stack sx={{ alignItems: 'center', width: '100%' }}>
            <Stack
              sx={{
                backgroundColor: 'white',
                width: { xs: '80%', md: '100%' },
                maxWidth: '900px',
                mt: 3,
                mb: '120px',
                mx: 'auto',
                p: 3,
                borderRadius: '10px',
                boxShadow: 6,

                animation: 'contentFade 0.35s ease',

                '@keyframes contentFade': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(8px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  color: 'var(--color_05)',
                  fontFamily: 'var(--font_01)',
                  fontSize: 'x-large',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                MIXTAPES
              </Typography>
              <Divider sx={{ my: 2 }} />
              {filteredMixtapes.length === 0 ? (
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: 4,
                    fontFamily: 'var(--font_05)',
                    color: 'gray',
                  }}
                >
                  No mixtapes found 🎧
                </Typography>
              ) : (
                <>
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    {/* ALL */}
                    <MixtapeRow title="ALL" mixtapes={filteredMixtapes} onSelect={handleSelect} />

                    {/* PAR GENRE */}
                    {Object.entries(mixtapesByGenre).map(([genre, list]) => (
                      <MixtapeRow
                        key={genre}
                        title={genre}
                        mixtapes={list}
                        onSelect={handleSelect}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <MixtapeGrid mixtapes={filteredMixtapes} onSelect={handleSelect} />
                  </Box>
                </>
              )}
            </Stack>
          </Stack>
        </Box>
      </main>
    </>
  );
}
