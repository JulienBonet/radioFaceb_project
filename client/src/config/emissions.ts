// client/src/config/emissions.ts

export type EmissionConfig = {
  name: string;
  background_color: string;
  image: string;
  schedule: string;
  needsLightShadow: boolean;
};

export const EMISSIONS: Record<string, EmissionConfig> = {
  GROOVE_WAKE_UP: {
    name: 'GROOVE WAKE UP',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVE_WAKE_UP.jpg',
    schedule: '06h30 - 09h30',
    needsLightShadow: false,
  },

  MORNING_CHILL: {
    name: 'MORNING CHILL',
    background_color: 'var(--color_02)',
    image: '/images/emissions/MORNING_CHILL.jpg',
    schedule: '06h30 - 09h30',
    needsLightShadow: false,
  },

  GROOVY_LUNCH: {
    name: 'GROOVY LUNCH',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVY_LUNCH.jpg',
    schedule: '11h30 - 13h30',
    needsLightShadow: false,
  },

  NAP_CHILL: {
    name: 'NAP CHILL',
    background_color: 'var(--color_02)',
    image: '/images/emissions/NAP_CHILL.jpg',
    schedule: '13h30 - 15h30',
    needsLightShadow: false,
  },

  GROOVY_EVENING: {
    name: 'GROOVY EVENING',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVY_EVENING.jpg',
    schedule: '15h30 - 20h30',
    needsLightShadow: false,
  },

  GROOVE_PARTY: {
    name: 'GROOVE PARTY',
    background_color: 'var(--color_03)',
    image: '/images/emissions/GROOVE_PARTY.jpg',
    schedule: '20h30 - 22h30',
    needsLightShadow: false,
  },

  TROPIK_GROOVE: {
    name: 'TROPIK GROOVE',
    background_color: 'var(--color_03)',
    image: '/images/emissions/TROPIK_GROOVE.jpg',
    schedule: '20h30 - 22h30',
    needsLightShadow: false,
  },

  WOLF_HOUR: {
    name: 'WOLF HOUR',
    background_color: 'var(--color_04)',
    image: '/images/emissions/WOLF_HOUR_01.jpg',
    schedule: '22h30 - 00h30',
    needsLightShadow: true,
  },

  SLEEPY_NIGHT: {
    name: 'SLEEPY NIGHT',
    background_color: 'var(--color_02)',
    image: '/images/emissions/SLEEPY_NIGHT_01.jpg',
    schedule: '00h30 - 06h30',
    needsLightShadow: true,
  },

  WEEKEND_SATURDAY: {
    name: 'WEEK END UPSIDE DOWN',
    background_color: 'var(--color_01)',
    image: '/images/emissions/WEEK_END_Upside_Down.jpg',
    schedule: '09h30 - 20h30',
    needsLightShadow: false,
  },

  SATURDAY_PARTY: {
    name: 'ZE BIG PARTY',
    background_color: 'var(--color_03)',
    image: '/images/emissions/Saturday_Big_Party.jpg',
    schedule: '20h30 - 01h30',
    needsLightShadow: false,
  },

  SATURDAY_WOLF_HOUR: {
    name: 'WOLF HOUR',
    background_color: 'var(--color_04)',
    image: '/images/emissions/WOLF_HOUR_01.jpg',
    schedule: '01h30 - 03h30',
    needsLightShadow: false,
  },

  SLEEPY_NIGHT_SATURDAY: {
    name: 'SLEEPY NIGHT',
    background_color: 'var(--color_02)',
    image: '/images/emissions/SLEEPY_NIGHT_01.jpg',
    schedule: '03h30 - 06h30',
    needsLightShadow: true,
  },

  WEEKEND_SUNDAY: {
    name: 'EASY SUNDAY',
    background_color: 'var(--color_01)',
    image: '/images/emissions/WEEK_END_Upside_Down.jpg',
    schedule: '09h30 - 20h30',
    needsLightShadow: false,
  },

  DEFAULT: {
    name: 'RADIO FACE B',
    background_color: 'var(--color_05)',
    image: '/images/emissions/logo-FACEB-default.jpg',
    schedule: '❤️ DU GROOVE ET DU LOVE',
    needsLightShadow: false,
  },
};
