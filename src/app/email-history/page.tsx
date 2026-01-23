"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type EmailLog = {
  _id: string;
  to: string;
  subject: string;
  attachmentName: string;
  status: "SENT" | "FAILED";
  createdAt: string;
};

export default function EmailHistoryPage() {
  const [rows, setRows] = useState<EmailLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/email-logs")
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "to", headerName: "To", flex: 1, minWidth: 200 },
    { field: "subject", headerName: "Subject", flex: 1, minWidth: 200 },
    {
      field: "attachmentName",
      headerName: "Attachment",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "SENT" ? "success" : "error"}
          size="small"
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Sent At",
      width: 180,
      renderCell: (params) => {
        const date = params.value ? new Date(params.value) : null;
        return date && !isNaN(date.getTime())
          ? date.toLocaleString()
          : "-";
      },
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" mb={2}>
        Email History
      </Typography>

      {loading ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : rows.length === 0 ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
          }}
        >
          No email history found.
        </Box>
      ) : (
        <Box sx={{ flex: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row._id}
            pageSizeOptions={[10, 25, 50]}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}