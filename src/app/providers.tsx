"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

const THEME_KEY = "site_theme"; // 🔑 localStorage key

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // ✅ Load theme from localStorage (default: dark)
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as
      | "light"
      | "dark"
      | null;

    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  // ✅ Persist theme on change
  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#1976d2", contrastText: "#ffffff" },
                background: { default: "#f4f6f8", paper: "#ffffff" },
                text: { primary: "#1f2937", secondary: "#4b5563" },
                divider: "#e5e7eb",
              }
            : {
                primary: { main: "#90caf9" },
                background: { default: "#121212", paper: "#1e1e1e" },
                text: { primary: "#e5e7eb", secondary: "#9ca3af" },
                divider: "#2a2a2a",
              }),
        },
        shape: { borderRadius: 8 },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Floating Controls */}
      <Box
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1300,
          bgcolor: "background.paper",
          borderRadius: 999,
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 20px rgba(0,0,0,0.12)",
          px: 1,
          py: 0.5,
          backdropFilter: "blur(6px)",
        }}
      >
        <Stack direction="row" spacing={0.5}>
          {/* Home */}
          <IconButton onClick={() => router.push("/")} color="primary">
            <HomeIcon />
          </IconButton>

          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} color="primary">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Stack>
      </Box>

      {children}
    </ThemeProvider>
  );
}