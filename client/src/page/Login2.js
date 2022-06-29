import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducer";
import axios from "axios";

//TODO :
//HS => 로그인작업 찐헁 Api요청을 useEffect로 진행예정
//useNavigate로 홈페이지로 돌아가자  => 로그인완료를 하면 돌아감
//useState ,  리덕스 어케쓰냐...........

function Copyright(props) {
  //export default 추가 ... 이유모름

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © Essence"}
      <Link
        color="inherit"
        href="https://github.com/codestates/beb-04-second-Essence"
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login2() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(true);

  const dispatch = useDispatch();
  const history = useNavigate();

  const login = () => {
    axios
      .post("http://localhost:5000/users/login", {
        // 5000포트에 요청 ! userId, password
        user_id: userId,
        password: password,
      })

      //요청에 대한 응답이 왔다면 실행
      .then((res) => {
        if (res.data.message === "login") {
          dispatch(setUser(res.data.data));
          setSuccessLogin(true);
          console.log("성공");
          window.alert("1 토큰 지급");
          history("/");
        }
      })

      //에러
      .catch((e) => {
        console.log(e);
        setSuccessLogin(false);
      });
  };

  // const handleEnter = (e) => {
  //   if (e.key === "Enter") {
  //     login();
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일주소"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 유지"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                login();
              }}
              //onclick login 함수 실행추가 _효승
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/Signup" href="#" variant="body2">
                  {"계정이 없으신가요? 회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
