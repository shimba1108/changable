import React, { useState, useEffect } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  ButtonTo,
} from "./SignupElements";
import { auth, provider } from "../../firebase";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = (event) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };

  const signInWithGoggle = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Changeble</Icon>
          <FormContent>
            <Form>
              <FormH1>アカウント登録画面</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit" to="/" onClick={signUp}>
                アカウント登録
              </FormButton>
              <ButtonTo to="/" onClick={signInWithGoggle}>
                Googleアカウントでログイン
              </ButtonTo>
              <Text to="/signin">すでにアカウントをお持ちの方はこちら</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;
