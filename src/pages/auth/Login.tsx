import React, { FC, useState } from "react";

import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { styles } from "./authStyles";
import { URI } from "../../extras/URI";

import { Toast } from "../../components/Toast";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import Person2Icon from "@mui/icons-material/Person2";

import { IState, ILogUser } from "./auth";

const loginUser = async (user) => {
  try {
    const response = await axios({
      method: "post",
      url: `${URI}user/login`,
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    throw new Error("error");
  }
};

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [toastError, setErrorToast] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [toastValues, setToastValues] = useState<IState>({
    bodyContent: "",
    modalType: "error",
    headingContent: "",
  });

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: (successData) => {
      localStorage.setItem("user", JSON.stringify(successData?.data.token));
      navigate("/home");
    },
    onError: () => {
      setErrorToast(true);
      setOpen(true);
      setToastValues({
        ...toastValues,
        bodyContent: "Login unsuccessful. Try again",
        modalType: "error",
        headingContent: "Oops!!",
      });
    },
  });

  let navigate = useNavigate();

  const [items, setItems] = useState<ILogUser>({
    userName: "",
    password: "",
  });

  const toggleVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleClose = (): void => {
    setOpen(false);
    setErrorToast(false);
  };

  const onSubmit = () => {
    mutate(items);
    setItems({
      userName: "",
      password: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems({ ...items, [e.target.id]: e.target.value });
  };

  return (
    <Stack sx={styles.background}>
      <Stack sx={styles.innerBox}>
        <Typography sx={styles.welcomeText}>WELCOME</Typography>
        <Typography sx={styles.labelText}>Enter your username</Typography>
        <TextField
          variant="outlined"
          placeholder="Username"
          sx={styles.inputField}
          onChange={handleChange}
          id="userName"
          value={items.userName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.iconStyle}>
                <Person2Icon />
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={styles.labelText}>Enter your password</Typography>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.iconStyle}>
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton sx={styles.iconStyle} onClick={toggleVisibility}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
          variant="outlined"
          placeholder="Password"
          id="password"
          value={items.password}
          onChange={handleChange}
          sx={styles.inputField}
          type={!showPassword ? "text" : "password"}
        />
        {isLoading ? (
          <LoadingButton
            loading
            style={{ marginTop: "2rem" }}
            sx={styles.button}
          >
            Submit
          </LoadingButton>
        ) : (
          <Button
            style={{ marginTop: "2rem" }}
            sx={styles.button}
            onClick={onSubmit}
          >
            Log in
          </Button>
        )}
        <Typography sx={styles.dontText}>
          Don't have an account?{" "}
          <span style={styles.dontSpan} onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </Typography>
      </Stack>
      {toastError && open ? (
        <Toast open={open} handleClose={handleClose} {...toastValues} />
      ) : null}
    </Stack>
  );
};

export default Login;
