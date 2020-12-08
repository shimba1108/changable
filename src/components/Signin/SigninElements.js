import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(47, 118, 250, 1) 0%,
    rgba(20, 70, 163, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
    width: 80%;
    margin-left: 3px;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    background-color: lightgray;
  }
`;

export const FormButton = styled(Link)`
  text-decoration: none;
  background: #1e90ff;
  text-align: center;
  padding: 16px 0;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background: #0468ca;
  }
`;

export const Text = styled(Link)`
  margin-top: 24px;
  text-decoration: none;

  text-align: center;
  color: #fff;
  font-size: 14px;

  &:hover {
    color: lightgray;
  }
`;

export const ButtonTo = styled(Link)`
  text-decoration: none;
  text-align: center;
  height: 30px;
  color: "#BB0000";
  border-radius: 50px;
  background: white;
  outline: none;
  border: none;
  cursor: pointer;
  padding-top: 5px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightgray;
  }
`;
