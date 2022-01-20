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
