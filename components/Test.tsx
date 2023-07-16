import React from "react";
import { diffChars } from "diff";

const CodeDifference = ({
  userCode,
  answerCode,
}: {
  userCode: string;
  answerCode: string;
}) => {
  const differences = diffChars(userCode, answerCode);
  console.log(differences);

  const renderDifferences = differences.map((part, index) => {
    const style = part.added ? "added" : part.removed ? "removed" : "unchanged";
    return (
      <span key={index} className={style}>
        {part.value}
      </span>
    );
  });

  return <pre>{renderDifferences}</pre>;
};

export default CodeDifference;
