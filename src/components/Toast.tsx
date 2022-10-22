import React, { FC, useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

interface IState {
  open: boolean;
  handleClose: () => void;
  bodyContent: string;
  modalType: "success" | "error" | "info" | "warning";
  headingContent: string;
}

const colorPallette = {
  error: "#ff0500",
  success: "#41AB56",
  info: "#2078d1",
  warning: "#fc963e",
};

const styles = {
  mainBox: {
    position: "absolute" as "absolute",
    top: "5%",
    right: "2.5%",
    width: "20rem",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: ".75rem",
    borderRadius: "10px",
  },
  stack: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
};

export const Toast: FC<IState> = ({
  open,
  handleClose,
  bodyContent,
  headingContent,
  modalType,
}) => {
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.mainBox}>
        <Box
          sx={{
            borderLeft: `${colorPallette[modalType]} solid 3.5px`,
            borderRadius: "3px",
            paddingLeft: ".5rem",
          }}
        >
          <Stack sx={styles.stack}>
            <Typography
              sx={{
                color: colorPallette[modalType],
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              {headingContent}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{
                  fontSize: "1rem",
                  fontWeight: 900,
                }}
              />
            </IconButton>
          </Stack>

          <Typography>{bodyContent}</Typography>
        </Box>
      </Box>
    </Modal>
  );
};
