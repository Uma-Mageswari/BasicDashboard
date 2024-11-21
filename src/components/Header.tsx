import React from "react";
import {
  AppBar,
  Box,
  Drawer,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { colorPalette } from "../theme/colors";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from "@mui/material/styles";
import { useThemeContext } from "../contexts/ThemeContext";
import { HeaderProps } from "./types";


const Header: React.FC<HeaderProps & { onLogout: () => void }> = ({ style, onLogout }) => {
  const theme = useTheme();
  const { theme: currentTheme, toggleTheme } = useThemeContext();

  const currentThemeMode = theme.palette.mode;

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>Hi Admin!!</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: colorPalette[currentTheme].navBar }}
      style={style}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Sample Dashboard
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ mr: 1 }}>
            {currentThemeMode === "light" ? "Light Theme" : "Dark Theme"}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={currentThemeMode === "dark"}
                onChange={toggleTheme}
              />
            }
            label=""
          />
        </div>
        <IconButton
          color="inherit"
          aria-label="LogoutIcon"
          onClick={onLogout}
          sx={{ fill: colorPalette[currentTheme].navBar }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
