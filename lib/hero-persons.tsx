export type HeroPersonType = {
    id: number,
    title: string,
    category: string,
    text: string,
    imageUrl: string,
    imageAlt: string,
}

export const HERO_PERSONS: HeroPersonType[] = [
  {
    id: 0,
    title: 'Do you need to test your Idea?',
    category: 'Writing',
    imageUrl: '/hero_person-1.jpg',
    imageAlt: '',
    text: 'MVP in 3M',
  },
  {
    id: 1,
    title: 'Leverage Gen AI',
    category: 'Writing',
    imageUrl: '/hero_person-2.jpg',
    imageAlt: '',
    text: 'Agentic Workflows',
  },
  {
    id: 2,
    title: 'Want a Remote Team?',
    category: 'Business',
    imageUrl: '/hero_person-3.jpg',
    imageAlt: '',
    text: 'Hire Talents',
  },
];
