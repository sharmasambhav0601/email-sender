"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

export default function SendEmailPage() {
  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const [subject, setSubject] = useState("Java Developer Resume");
  const [message, setMessage] = useState(`Dear Sir/Madam,

I hope you are doing well. My name is Sambhav Sharma, and I am interested in Java Developer opportunities within your organization.

I have attached my resume for your review and would appreciate your consideration for any suitable Java Developer roles.

Thank you for your time.

Best regards,
Sambhav Sharma
LinkedIn: https://www.linkedin.com/in/sambhav-sharma-242774282/
`);

  // 📎 File state
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [sentCount, setSentCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const addEmail = () => {
    const values = emailInput
      .split(",")
      .map((e) => e.trim())
      .filter(
        (e) =>
          e &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) &&
          !emails.includes(e)
      );

    if (values.length) setEmails((prev) => [...prev, ...values]);
    setEmailInput("");
  };

  const removeEmail = (email: string) => {
    setEmails((prev) => prev.filter((e) => e !== email));
  };

  const handleSend = async () => {
    if (!emails.length) {
      alert("Please add at least one email");
      return;
    }

    setLoading(true);
    setSentCount(0);
    setFailedCount(0);
    setTotalCount(emails.length);
    setShowProgress(true);

    const formData = new FormData();
    formData.append("emails", JSON.stringify(emails));
    formData.append("subject", subject);
    formData.append("message", message);

    // 🔁 If user uploaded file → override default
    if (file) {
      formData.append("file", file);
      formData.append("fileName", fileName || file.name);
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (res.status === 401) {
        window.location.href = "/api/oauth/start";
        return;
      }

      const data = await res.json();
      setSentCount(data.sent || emails.length);
      setFailedCount(data.failed || 0);

      setEmails([]);
      setFile(null);
      setFileName("");
    } catch {
      alert("Failed to send emails");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Progress Overlay */}
      {showProgress && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 1300,
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 420, p: 3, borderRadius: 2, bgcolor: "background.paper" }}>
            <Typography variant="h6">Sending Emails</Typography>

            {loading ? (
              <Stack spacing={2} mt={3} alignItems="center">
                <CircularProgress />
                <Typography>
                  Sending {sentCount + failedCount} / {totalCount}
                </Typography>
              </Stack>
            ) : (
              <Box mt={3}>
                <Typography color="success.main">✅ Sent: {sentCount}</Typography>
                <Typography color="error.main">❌ Failed: {failedCount}</Typography>
                <Button fullWidth sx={{ mt: 2 }} onClick={() => setShowProgress(false)}>
                  Close
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      )}

      {/* Centered Form */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 650, width: "100%", p: 4, borderRadius: 2, bgcolor: "background.paper" }}>
          <Typography variant="h5">Send Email</Typography>

          <TextField
            label="Add email & press Enter"
            fullWidth
            margin="normal"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addEmail();
              }
            }}
          />

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {emails.map((email) => (
              <Chip key={email} label={email} onDelete={() => removeEmail(email)} />
            ))}
          </Stack>

          <TextField label="Subject" fullWidth margin="normal" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextField label="Message" fullWidth multiline rows={6} margin="normal" value={message} onChange={(e) => setMessage(e.target.value)} />

          {/* 📎 Resume Upload */}
          <Typography variant="body2" mt={2} color="text.secondary">
            If no file is uploaded, default resume will be used
          </Typography>

          <Button component="label" variant="outlined" sx={{ mt: 1 }}>
            Upload Resume (PDF)
            <input
              hidden
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFile(f);
                  setFileName(f.name);
                }
              }}
            />
          </Button>

          {/* Rename Attachment */}
          {file && (
            <>
              <Typography variant="body2" mt={1}>
                Selected: {file.name}
              </Typography>

              <TextField
                label="Rename attachment"
                fullWidth
                margin="normal"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                helperText="Example: Sambhav_Sharma_Java_Developer.pdf"
              />
            </>
          )}

          <Box mt={3}>
            <Button fullWidth variant="contained" onClick={handleSend} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Send Email"}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}