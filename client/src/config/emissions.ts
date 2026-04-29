export type EmissionConfig = {
  name: string;
  color: string;
  gradient: string;
  image: string;
  schedule: string;
};

export const EMISSIONS: Record<string, EmissionConfig> = {
  GROOVE_WAKE_UP: {
    name: 'GROOVE WAKE UP',
    color: 'var(--color_01)',
    gradient: 'linear-gradient(135deg, var(--color_01), #000)',
    image: '/images/emissions/GROOVE_WAKE_UP.jpg',
    schedule: '06h30 - 09h30',
  },

  MORNING_CHILL: {
    name: 'MORNING CHILL',
    color: 'var(--color_02)',
    gradient: 'linear-gradient(135deg, var(--color_02), #000)',
    image: '/images/emissions/MORNING_CHILL.jpg',
    schedule: '06h30 - 09h30',
  },

  GROOVY_LUNCH: {
    name: 'GROOVY LUNCH',
    color: 'var(--color_01)',
    gradient: 'linear-gradient(135deg, var(--color_01), #000)',
    image: '/images/emissions/GROOVY_LUNCH.jpg',
    schedule: '11h30 - 13h30',
  },

  NAP_CHILL: {
    name: 'NAP CHILL',
    color: 'var(--color_02)',
    gradient: 'linear-gradient(135deg, var(--color_02), #000)',
    image: '/images/emissions/NAP_CHILL.jpg',
    schedule: '13h30 - 15h30',
  },

  GROOVY_EVENING: {
    name: 'GROOVY EVENING',
    color: 'var(--color_01)',
    gradient: 'linear-gradient(135deg, var(--color_01), #000)',
    image: '/images/emissions/GROOVY_EVENING.jpg',
    schedule: '15h30 - 20h30',
  },

  GROOVE_PARTY: {
    name: 'GROOVE PARTY',
    color: 'var(--color_03)',
    gradient: 'linear-gradient(135deg, var(--color_03), #000)',
    image: '/images/emissions/GROOVE_PARTY.jpg',
    schedule: '20h30 - 22h30',
  },

  TROPIK_GROOVE: {
    name: 'TROPIK GROOVE',
    color: 'var(--color_03)',
    gradient: 'linear-gradient(135deg, var(--color_03), #000)',
    image: '/images/emissions/TROPIK_GROOVE.jpg',
    schedule: '20h30 - 22h30',
  },

  WOLF_HOUR: {
    name: 'WOLF HOUR',
    color: 'var(--color_04)',
    gradient: 'linear-gradient(135deg, var(--color_04), #000)',
    image: '/images/emissions/WOLF_HOUR_01.jpg',
    schedule: '22h30 - 00h30',
  },

    SLEEPY_NIGHT: {
    name: 'SLEEPY NIGHT',
    color: 'var(--color_02)',
    gradient: 'linear-gradient(135deg, var(--color_02), #000)',
    image: '/images/emissions/SLEEPY_NIGHT_01.jpg',
    schedule: '22h30 - 00h30',
  },


  DEFAULT: {
    name: 'Radio Face B',
    color: '#ff6b00',
    gradient: 'linear-gradient(135deg, #ff6b00, #1a1a1a)',
    image: '/images/emissions/default.jpg',
    schedule: '',
  },
};
