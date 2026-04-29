export type EmissionConfig = {
  name: string;
  background_color: string;
  image: string;
  schedule: string;
};

export const EMISSIONS: Record<string, EmissionConfig> = {
  GROOVE_WAKE_UP: {
    name: 'GROOVE WAKE UP',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVE_WAKE_UP.jpg',
    schedule: '06h30 - 09h30',
  },

  MORNING_CHILL: {
    name: 'MORNING CHILL',
    background_color: 'var(--color_02)',
    image: '/images/emissions/MORNING_CHILL.jpg',
    schedule: '06h30 - 09h30',
  },

  GROOVY_LUNCH: {
    name: 'GROOVY LUNCH',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVY_LUNCH.jpg',
    schedule: '11h30 - 13h30',
  },

  NAP_CHILL: {
    name: 'NAP CHILL',
    background_color: 'var(--color_02)',
    image: '/images/emissions/NAP_CHILL.jpg',
    schedule: '13h30 - 15h30',
  },

  GROOVY_EVENING: {
    name: 'GROOVY EVENING',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVY_EVENING.jpg',
    schedule: '15h30 - 20h30',
  },

  GROOVE_PARTY: {
    name: 'GROOVE PARTY',
    background_color: 'var(--color_03)',
    image: '/images/emissions/GROOVE_PARTY.jpg',
    schedule: '20h30 - 22h30',
  },

  TROPIK_GROOVE: {
    name: 'TROPIK GROOVE',
    background_color: 'var(--color_03)',
    image: '/images/emissions/TROPIK_GROOVE.jpg',
    schedule: '20h30 - 22h30',
  },

  WOLF_HOUR: {
    name: 'WOLF HOUR',
    background_color: 'var(--color_04)',
    image: '/images/emissions/WOLF_HOUR_01.jpg',
    schedule: '22h30 - 00h30',
  },

  SLEEPY_NIGHT: {
    name: 'SLEEPY NIGHT',
    background_color: 'var(--color_02)',
    image: '/images/emissions/SLEEPY_NIGHT_01.jpg',
    schedule: '22h30 - 00h30',
  },

  DEFAULT: {
    name: 'Radio Face B',
    background_color: '#ff6b00',
    image: '/images/emissions/default.jpg',
    schedule: '',
  },
};
