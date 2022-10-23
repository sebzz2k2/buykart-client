import React, { FC, useEffect, useState } from "react";

import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Toast } from "../../components/Toast";

import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { styles } from "./authStyles";
import { URI } from "../../extras/URI";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import Person2Icon from "@mui/icons-material/Person2";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { IState, IUser } from "./auth";

const registerUser = async (user) => {
  try {
    const response = await axios({
      method: "post",
      url: `${URI}user/register`,
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const Signup: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [toastError, setErrorToast] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [toastValues, setToastValues] = useState<IState>({
    bodyContent: "",
    modalType: "error",
    headingContent: "",
  });
  const [items, setItems] = useState<IUser>({
    userName: "",
    email: "",
    password: "",
    isUser: true,
  });

  const { mutate, isLoading } = useMutation(registerUser, {
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

  const handleClose = (): void => {
    setOpen(false);
    setErrorToast(false);
  };

  const toggleVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems({ ...items, [e.target.id]: e.target.value });
  };

  const validateEmail = (email: string): RegExpMatchArray | null => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = (): void => {
    if (items.userName === "" || items.email === "" || items.password === "") {
      setErrorToast(true);
      setOpen(true);
      setToastValues({
        ...toastValues,
        bodyContent: "Please enter all fields to continue",
        modalType: "error",
        headingContent: "Oops!!",
      });
      return;
    }
    if (validateEmail(items.email) === null) {
      setErrorToast(true);
      setOpen(true);
      setToastValues({
        ...toastValues,
        bodyContent: "Please enter a valid email",
        modalType: "error",
        headingContent: "Invalid email",
      });
      return;
    }
    if (items.password.length <= 7) {
      console.log(items.password.length);
      setErrorToast(true);
      setOpen(true);
      setToastValues({
        ...toastValues,
        bodyContent: "Password is too short",
        modalType: "error",
        headingContent: "Renter password",
      });
      return;
    }

    mutate(items);
    setItems({
      userName: "",
      email: "",
      password: "",
      isUser: true,
    });
  };

  return (
    <Stack sx={styles.background}>
      <Stack sx={styles.innerBox}>
        <Typography sx={styles.welcomeText}>SIGN UP</Typography>
        <Typography sx={styles.labelText}>Enter your username</Typography>
        <TextField
          variant="outlined"
          placeholder="Username"
          sx={styles.inputField}
          id="userName"
          onChange={handleChange}
          value={items.userName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.iconStyle}>
                <Person2Icon />
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={styles.labelText}>Enter your email</Typography>
        <TextField
          variant="outlined"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          sx={styles.inputField}
          value={items.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={styles.iconStyle}>
                <AlternateEmailIcon />
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
          sx={styles.inputField}
          id="password"
          value={items.password}
          onChange={handleChange}
          type={!showPassword ? "text" : "password"}
          helperText="Password must contain atleast eight characters"
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
            Create new account
          </Button>
        )}
        <Typography sx={styles.dontText}>
          Already have an account?{" "}
          <span style={styles.dontSpan} onClick={() => navigate("/login")}>
            Login in
          </span>
        </Typography>
      </Stack>
      {toastError && open ? (
        <Toast open={open} handleClose={handleClose} {...toastValues} />
      ) : null}
    </Stack>
  );
};

export default Signup;
