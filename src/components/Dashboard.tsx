import React from "react";
import { useTheme } from "@mui/material/styles";
import { colorPalette } from "../theme/colors";
import { Charts } from "../components";
import { HeaderProps } from "./types";

const Dashboard: React.FC<HeaderProps> = ({ style }) => {
  const theme = useTheme();

  const currentThemeMode = theme.palette.mode;

  return (
    <div
      className="Dashboard"
      style={{
        backgroundColor: colorPalette[currentThemeMode].background,
        position: "absolute",
        top: "60px", // Space for the header
        bottom: "36px", // Space for the footer
        left: 0,
        right: 0,
        overflowY: "auto",
      }}
    >
      <Charts />
    </div>
  );
};

export default Dashboard;
