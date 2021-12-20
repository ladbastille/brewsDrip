import styled from "styled-components";

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
  },
  {
    id: 7,
    label: "Caramel",
  },
  {
    id: 8,
    label: "Cane",
  },
  {
    id: 9,
    label: "Fruity",
  },
  {
    id: 10,
    label: "Grapefruit",
  },
  {
    id: 11,
    label: "Floral",
  },
];

const ChipDiv = styled.div`
  background: ${(props) => (props.active ? "#FBD850" : "white")};
  color: #000;
  border-radius: 10px;
  padding: 4px 10px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const ChipContainer = styled.div`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  pointer-events: ${(props) => (props.editable ? "auto" : "none")};
  cursor: ${(props) => (props.editable ? "pointer" : "default")};
`;

const Chip = ({ active, label, handleOnClick }) => {
  return (
    <ChipDiv onClick={handleOnClick} active={active}>
      {label}
    </ChipDiv>
  );
};

const Tags = ({ editable = true, selectedTagIds, setSelectedTagIds }) => {
  const handleTagOnClick = (selectedTagId) => {
    if (selectedTagIds.indexOf(selectedTagId) === -1) {
      const newSelectedTagIds = [].concat(selectedTagIds);
      newSelectedTagIds.push(selectedTagId);
      setSelectedTagIds(newSelectedTagIds);
    } else {
      const newSelectedTagIds = []
        .concat(selectedTagIds)
        .filter((id) => id !== selectedTagId);
      setSelectedTagIds(newSelectedTagIds);
    }
  };

  return (
    <ChipContainer editable={editable}>
      {MOCK_TAGS.map((tag) => (
        <Chip
          key={tag.id}
          id={tag.id}
          active={selectedTagIds.indexOf(tag.id) !== -1}
          label={tag.label}
          handleOnClick={() => handleTagOnClick(tag.id)}
        />
      ))}
    </ChipContainer>
  );
};
export default Tags;
