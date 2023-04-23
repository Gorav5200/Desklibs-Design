import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export default function MultiActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        p: 2,
        borderRadius: 5,
        cursor: "pointer",
        ":hover": {
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        height="150px"
        width="100%"
        sx={{
          borderRadius: "8px",
          background: `linear-gradient(rgb(247, 246, 239), rgb(247, 246, 239)) 0% 0% / 100% , url(/document.jpg)`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          border: "none",
          p: 1,
        }}
      />

      <CardContent>
        <Typography gutterBottom variant="h6">
          Importance of Training and development program
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div className="d-flex gap-3 " style={{ fontSize: "13px" }}>
          <Tooltip title="Total pages" placement="top" arrow>
            <div
              style={{
                background: "#e5f2fe",
                borderRadius: "15px",
                padding: "5px",
                width: "auto",
              }}
            >
              <span
                role="img"
                aria-label="file-text"
                class="anticon anticon-file-text"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="file-text"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path>
                </svg>
              </span>{" "}
              | 33444
            </div>
          </Tooltip>

          <Tooltip title="Total words" placement="top" arrow>
            <div
              style={{
                background: "#e5f2fe",
                borderRadius: "10px",
                padding: "6px",
                width: "auto",
              }}
            >
              <span
                role="img"
                aria-label="file-text"
                class="anticon anticon-file-text"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="file-text"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"></path>
                </svg>
              </span>{" "}
              | 33444
            </div>
          </Tooltip>
          <Tooltip title="Total views" placement="top" arrow>
            <div
              style={{
                background: "#e5f2fe",
                borderRadius: "15px",
                padding: "5px",
                width: "auto",
              }}
            >
              <span
                role="img"
                aria-label="file-text"
                class="anticon anticon-file-text"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="file-text"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
              </span>{" "}
              | 33444
            </div>
          </Tooltip>
        </div>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "var(--button-color)",
            borderRadius: 10,
            height: 38,
            fontFamily: "var(--font-manrop)",
            "&:hover , &:focus": { background: "var(--button-color)" },
          }}
        >
          View Document
        </Button>
      </CardActions>
    </Card>
  );
}
