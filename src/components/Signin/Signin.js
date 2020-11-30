import React, { useState } from "react";
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
} from "./SigninElements";
import { auth, provider } from "../../firebase";
import { Link } from "react-router-dom";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signIn = (event) => {
    // event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
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
              <FormH1>ログイン画面</FormH1>
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

              <FormButton type="submit" to="/" onClick={signIn}>
                ログイン
              </FormButton>
              <ButtonTo to="/" onClick={signInWithGoggle}>
                Googleアカウントでログイン
              </ButtonTo>

              <Text to="/signup">まだアカウントをお持ちでない方はこちら</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
