const TOTAL_NOTES = Array.from({ length: 4 }, (_, index) => index + 1);

export const NOTES_DATA = TOTAL_NOTES.map(id => ({
  id,
  title: "How to claim the warranty?",
  description:
    '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
  tag: "Getting Started",
  action: "Created",
  time: "2 hours ago",
  img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
}));

export const ASSIGNED_CONTACT_OPTIONS = [
  {
    label: "User One",
    value: "1",
  },
  {
    label: "User Two",
    value: "2",
  },
  {
    label: "User Three",
    value: "3",
  },
  {
    label: "User Four",
    value: "4",
  },
];

export const TAGS_OPTIONS = [
  {
    label: "Getting Started",
    value: "category1",
  },
  {
    label: "Onboarding",
    value: "category2",
  },
  {
    label: "User Flow",
    value: "category3",
  },
  {
    label: "UX",
    value: "category4",
  },
  {
    label: "Bugs",
    value: "category5",
  },
  {
    label: "V2",
    value: "category6",
  },
];
