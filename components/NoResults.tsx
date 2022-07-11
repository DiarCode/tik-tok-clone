import React from "react";

interface NoResultsProps {
  text: string;
}

const NoResults = ({ text }: NoResultsProps) => {
  return <div>{text}</div>;
};

export default NoResults;
