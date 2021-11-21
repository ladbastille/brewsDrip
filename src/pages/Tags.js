import React, { useState } from "react";

const MOCK_TAGS = [
  {
    id: 1,
    label: "Tea-like",
  },
  {
    id: 2,
    label: "Sour",
  },
  {
    id: 3,
    label: "Sweet",
  },
  {
    id: 4,
    label: "Berry",
  },
  {
    id: 5,
    label: "Citrus",
  },
  {
    id: 6,
    label: "Chocolate",
  },{
    id: 7,
    label: "Caramel",
  },{
    id: 8,
    label: "Cane",
  },{
    id: 9,
    label: "Fruity",
  },{
    id: 10,
    label: "Grapefruit",
  },{
    id: 11,
    label: "Floral",
  },
];

const SELECTED_TAGS = [1, 3, 5];

const Chip = ({ active, label, handleOnClick }) => {
  return (
    <div
      style={{
        background: active ? "#FBD850" : "white",
        color: "#000",
        borderRadius: "10px",
        padding: "4px 10px",
        marginRight: "8px",
        marginBottom: "8px",
      }}
      onClick={handleOnClick}
    >
      {label}
    </div>
  );
};

const Tags = ({ editable = true, selectedTagIds, setSelectedTagIds }) => {
  const handleTagOnClick = (selectedTagId) => {
    if (selectedTagIds.indexOf(selectedTagId) === -1) {
      const newSelectedTagIds = [].concat(
        selectedTagIds
      ); /* [...selectedTagIds] */
      newSelectedTagIds.push(selectedTagId);
      setSelectedTagIds(newSelectedTagIds);
    } else {
      const newSelectedTagIds = []
        .concat(selectedTagIds)
        .filter((id) => id !== selectedTagId);
      setSelectedTagIds(newSelectedTagIds);
    }
  };

  console.log(selectedTagIds);

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        pointerEvents: editable ? "auto" : "none",
        cursor: editable ? "pointer" : "default",
      }}
    >
      {MOCK_TAGS.map((tag) => (
        <Chip
          key={tag.id}
          id={tag.id}
          active={selectedTagIds.indexOf(tag.id) !== -1}
          label={tag.label}
          handleOnClick={() => handleTagOnClick(tag.id)}
        />
      ))}
    </div>
  );
};
export default Tags;
