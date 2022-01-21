import React from "react";

import Avatar from "./Avatar";

const TOTAL_CONTACTS = Array.from({ length: 8 }, (_, index) => index + 1);

export const CONTACTS = TOTAL_CONTACTS.map(id => {
  const even = id % 2 === 0;
  return {
    id,
    name: even ? "Ronald Richards" : "Jacob Jones",
    imageUrl: even
      ? "https://randomuser.me/api/portraits/thumb/men/12.jpg"
      : "",
  };
});

export const COLUMNS = [
  {
    dataIndex: "name",
    key: "name",
    title: "NAME & ROLE",
    render: (_, user) => <Avatar user={user} />,
    width: "30%",
  },
  {
    key: "email",
    title: "EMAIL",
    render: () => "albert@borer.com",
    width: "30%",
  },
  {
    key: "created_at",
    title: "CREATED AT",
    render: () => "Feb 5, 2021",
    width: "30%",
  },
];
