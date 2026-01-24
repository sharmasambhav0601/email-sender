"use client";

import { Box, Button, Typography, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
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
          maxWidth: 600,
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
          Email Sender Dashboard 📧
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Secure internal tool to send bulk emails, manage attachments,
          and track delivery history — protected by password access.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/send-email")}
          >
            Send Emails
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push("/email-history")}
          >
            View History
          </Button>

          <Button
            variant="text"
            size="large"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}