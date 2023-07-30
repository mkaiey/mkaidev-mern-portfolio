import React from "react";

const SkillCubeFace = ({ img, no }) => {
  return (
    <div className={`skillface face${no}`}>
      <img src={img} alt={`face${no}`} />
    </div>
  );
};

export default SkillCubeFace;
