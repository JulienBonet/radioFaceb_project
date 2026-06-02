// client/src/config/emissions.ts

export type EmissionConfig = {
  name: string;
  background_color: string;
  image: string;
  schedule: string;
  needsLightShadow: boolean;
  description?: string;
  styles: string;
};

export const EMISSIONS: Record<string, EmissionConfig> = {
  GROOVE_WAKE_UP: {
    name: 'GROOVE WAKE UP',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVE_WAKE_UP.jpg',
    schedule: '06h30 - 09h30',
    needsLightShadow: false,
    description: 'Radio Face B groove ton réveil. Le meilleur petit dej pour tes oreilles',
    styles: '• 80s • 90s • soul • funk • R&B • pop • rock • disco • reggae • world •',
  },

  MORNING_CHILL: {
    name: 'MORNING CHILL',
    background_color: 'var(--color_02)',
    image: '/images/emissions/MORNING_CHILL.jpg',
    schedule: '09h30 - 11h30',
    needsLightShadow: false,
    description: "Sur Face B, c'est easy & chill en matinée. On groove tranquille, aucune raison de forcer",
    styles: '• blues • jazz • gospel • reggae • dub • downtempo • soul • funk • hiphop • folk •',
  },

  GROOVY_LUNCH: {
    name: 'GROOVY LUNCH',
    background_color: 'linear-gradient(90deg, var(--color_03), var(--color_01))',
    image: '/images/emissions/GROOVY_LUNCH.jpg',
    schedule: '11h30 - 13h30',
    needsLightShadow: false,
    description: 'Les Dejs sont énergiques sur Face B. On groove dynamique et épicé',
    styles: '• soul • funk • R&B • hiphop • rock • pop • reggae • electro • afro • latino •',
  },

  NAP_CHILL: {
    name: 'NAP CHILL',
    background_color: 'linear-gradient(10deg, var(--color_02), var(--color_06))',
    image: '/images/emissions/NAP_CHILL.jpg',
    schedule: '13h30 - 15h30',
    needsLightShadow: false,
    description: "La sieste c'est sacré. Deux heures de temps calme après le déjeuner, c'est un minimum sur Radio Face B.",
    styles: '• soul • jazz • dub • downtempo • reggae • folk • world • musique classique •',
  },

  GROOVY_EVENING: {
    name: 'GROOVY EVENING',
    background_color: 'var(--color_01)',
    image: '/images/emissions/GROOVY_EVENING.jpg',
    schedule: '15h30 - 20h30',
    needsLightShadow: false,
    description: "Tout les aprés-midi, le groove prend d'assaut Radio Face B",
    styles: '• hiphop • funk • soul • rock • pop • afro • reggae • latino • folk • electro •',
  },

  GROOVE_PARTY: {
    name: 'GROOVE PARTY',
    background_color: 'var(--color_03)',
    image: '/images/emissions/GROOVE_PARTY.jpg',
    schedule: '20h30 - 22h30',
    needsLightShadow: false,
    description: 'En soirée, la groove party de Radio Face B fait danser ton parquet',
    styles: '• disco • house • funk • soul • rock • hiphop • ragga • afro • latino •',
  },

  TROPIK_GROOVE: {
    name: 'TROPIK GROOVE',
    background_color: 'var(--color_03)',
    image: '/images/emissions/TROPIK_GROOVE.jpg',
    schedule: '20h30 - 22h30',
    needsLightShadow: false,
    description: 'Une tempête de grooves venue des tropiques endiable tes soirées de Radio Face B',
    styles: '• salsa • rumba • cumbia • samba • biguine • afro • ragga • oriental •',
  },

  WOLF_HOUR: {
    name: 'WOLF HOUR',
    background_color: 'var(--color_04)',
    image: '/images/emissions/WOLF_HOUR_01.jpg',
    schedule: '22h30 - 00h30',
    needsLightShadow: true,
    description: 'En 2eme partie de soirée, les vibes hurlent en meute dans la cave de Radio Face B',
    styles: '• techno • electro • hiphop • dub • rock • cold wave • punk • soul • funk •',
  },

  SLEEPY_NIGHT: {
    name: 'SLEEPY NIGHT',
    background_color: 'var(--color_06)',
    image: '/images/emissions/SLEEPY_NIGHT_04.jpg',
    schedule: '00h30 - 06h30',
    needsLightShadow: true,
    description: 'Un groove doux pour un sommeil paisible',
    styles: '• downtempo • soul • jazz • dub • reggae • folk • world • musique classique •',
  },

  WEEKEND_SATURDAY: {
    name: 'GROOV|WEEKEND',
    background_color: 'linear-gradient(90deg, var(--color_02), var(--color_01))',
    image: '/images/emissions/WEEK_END_Upside_Down.jpg',
    schedule: '09h30 - 20h30',
    needsLightShadow: false,
    styles: 'Face B passe tout son GrOOve au shaker et vous le sert upside down',
  },

  SATURDAY_PARTY: {
    name: 'BIG PARTY',
    background_color: 'var(--color_03)',
    image: '/images/emissions/Saturday_Big_Party.jpg',
    schedule: '20h30 - 01h30',
    needsLightShadow: false,
    description: '',
    styles: '• disco • house • funk • soul • rock • hiphop • ragga • salsa • rumba • cumbia • samba • afro • ragga • oriental •',
  },

  SATURDAY_WOLF_HOUR: {
    name: 'WOLF HOUR',
    background_color: 'var(--color_04)',
    image: '/images/emissions/WOLF_HOUR_01.jpg',
    schedule: '01h30 - 03h30',
    needsLightShadow: false,
    description: 'Au coeur de la nuit, les grooves se font loups et toutes les vibes sont grisent',
    styles: '• techno • electro • minimale • hiphop • jungle • dub • rock • cold wave • dark wave • punk • soul • funk •',
  },

  SLEEPY_NIGHT_SATURDAY: {
    name: 'SLEEPY NIGHT',
    background_color: 'var(--color_06)',
    image: '/images/emissions/SLEEPY_NIGHT_01.jpg',
    schedule: '03h30 - 06h30',
    needsLightShadow: true,
    description: 'Un groove doux pour terminer ta nuit',
    styles: '• downtempo • soul • jazz • dub • reggae • folk • world • musique classique •',
  },

  WEEKEND_SUNDAY: {
    name: 'GROOVY SUNDAY',
    background_color: 'linear-gradient(90deg, var(--color_02), var(--color_01))',
    image: '/images/emissions/EASY_SUNDAY.jpg',
    schedule: '09h30 - 20h30',
    needsLightShadow: false,
    styles: 'Face B passe tout son GrOOve au shaker et vous le sert upside down',
  },

  DEFAULT: {
    name: 'RADIO FACE B',
    background_color: 'var(--color_05)',
    image: '/images/emissions/logo-FACEB-default.jpg',
    schedule: '❤️ DU GROOVE ET DU LOVE',
    needsLightShadow: false,
    styles: 'Groove, Chill & unexpected',
  },
};
