import React, { ReactNode } from "react";
import "./content-container.css";

interface ContentContainerProps {
  children: ReactNode;
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  filter: "drop-shadow(0 0 2.5em black)",
  backgroundColor: "rgb(235, 240, 235)",
  margin: "64px 64px 64px 64px",
  padding: "64px",
  borderRadius: "25px",
  boxSizing: "border-box",
};

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div style={containerStyle}>{children}</div>;
}
