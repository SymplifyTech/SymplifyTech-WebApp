export type CategoryType = {
    id: number,
    name: string,
    duration: string,
    imageUrl: string,
}

export const CATEGORIES: CategoryType[] = [
  {
    id: 0, name: 'Gen AI', duration: 'Add an X-Factor to your product', imageUrl: 'categories_01.jpg',
  },
  {
    id: 1, name: 'Cloud', duration: 'AWS, GCP, Azure and other', imageUrl: 'categories_02.jpg',
  },
  {
    id: 2, name: 'MVP', duration: 'Test your idea in 3 months', imageUrl: 'categories_03.jpg',
  },
  {
    id: 3, name: 'Staff Augmentation', duration: 'Hire talented Candidates', imageUrl: 'categories_04.jpg',
  },
];
