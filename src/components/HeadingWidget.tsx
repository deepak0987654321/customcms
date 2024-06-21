import React from "react";

interface HeadingWidgetProps {
  text: string;
}

export const HeadingWidget: React.FC<HeadingWidgetProps> = ({ text }) => {
  return <h1 className="heading">{text}</h1>;
};
