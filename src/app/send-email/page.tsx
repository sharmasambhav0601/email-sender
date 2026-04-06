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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import { defaultEmailTemplate } from "@/data/data";

export default function SendEmailPage() {
  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState<string[]>([]);

  const [subject, setSubject] = useState(
  defaultEmailTemplate.subject
);

const [message, setMessage] = useState(
  defaultEmailTemplate.message
);

  // 📎 Attachment
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Progress
  const [sentCount, setSentCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  // Preview
  const [showPreview, setShowPreview] = useState(false);

  // ➕ Add email(s)
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

    if (values.length) {
      setEmails((prev) => [...prev, ...values]);
    }
    setEmailInput("");
  };

  const removeEmail = (email: string) => {
    setEmails((prev) => prev.filter((e) => e !== email));
  };

  // 🚀 Send Email
  const handleSend = async () => {
    if (!emails.length) {
      setError("Please add at least one email address");
      return;
    }

    setLoading(true);
    setError("");
    setSentCount(0);
    setFailedCount(0);
    setTotalCount(emails.length);
    setShowProgress(true);
    setShowPreview(false);

    const formData = new FormData();
    formData.append("emails", JSON.stringify(emails));
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("htmlMessage", defaultEmailTemplate.htmlMessage);

    if (file) {
      formData.append("file", file);
      formData.append("fileName", fileName || file.name);
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send emails");
      }

      const data = await res.json();
      setSentCount(data.sent || 0);
      setFailedCount(data.failed || 0);

      setEmails([]);
      setFile(null);
      setFileName("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 📊 Progress Overlay */}
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

      {/* 🧾 Email Preview Dialog */}
      <Dialog open={showPreview} onClose={() => setShowPreview(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Email Preview</DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle2">Recipients</Typography>
          <Typography variant="body2" color="text.secondary">
            {emails.join(", ")}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2">Subject</Typography>
          <Typography>{subject}</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2">Message</Typography>
          <Typography whiteSpace="pre-line">{message}</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2">Attachment</Typography>
          <Typography>
            {fileName || "Sambhav_Java_FS_Resume.pdf (default)"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPreview(false)}>Edit</Button>
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      {/* 📬 Main Form */}
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
            label="Add email(s) & press Enter"
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

          {file && (
            <TextField
              label="Rename attachment"
              fullWidth
              margin="normal"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          )}

          <Stack direction="row" spacing={2} mt={3}>
            <Button fullWidth variant="outlined" onClick={() => setShowPreview(true)} disabled={!emails.length}>
              Preview
            </Button>
            <Button fullWidth variant="contained" onClick={() => setShowPreview(true)} disabled={!emails.length || loading}>
              Send
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* ❌ Error Snackbar */}
      <Snackbar open={!!error} autoHideDuration={4000} onClose={() => setError("")}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </>
  );
}
