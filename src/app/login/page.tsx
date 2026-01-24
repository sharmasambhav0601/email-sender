"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!password) return;

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: password.trim(), // ✅ trim ONLY here
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid password");
      }

      // ✅ Soft redirect (keeps cookies intact)
      router.replace("/");
    } catch {
      setError("Incorrect password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
          p: 4,
          borderRadius: 3,
          bgcolor: "background.paper",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 12px 30px rgba(0,0,0,0.6)"
              : theme.shadows[4],
        }}
      >
        <Typography variant="h4" gutterBottom>
          Secure Login 🔐
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Enter the password to access the Email Sender Dashboard
        </Typography>

        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            type="password"
            label="Password"
            fullWidth
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                e.preventDefault();
                handleLogin();
              }
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
            disabled={loading || password.length === 0} // ✅ FIXED
          >
            {loading ? (
              <CircularProgress size={22} color="inherit" />
            ) : (
              "Login"
            )}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}