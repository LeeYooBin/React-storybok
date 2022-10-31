import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

const Input = styled.input`
  width: 285px;
  height: 45px;
  padding: 0 5px;
  border: solid 1px #000;
  border-radius: 5px;
  font: 500 1rem/1.5rem "open-sans", sans-serif;
  outline: none;
  
  :focus + label,
  :not(:placeholder-shown) + label {
    opacity: 1;
    position: absolute;
    top: -45%;
    left: 1%;
  }
`;

const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: 25%;
  left: 2%;
  opacity: 0.5;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  font: 500 1rem/1.5rem 'open-sans', sans-serif;
  color: #000;
`;

export interface LoginInput {
  text?: string,
};

export const LoginInput = ({ text='Placeholder' }: LoginInput) => (
  <Content>
    <Input placeholder='ﾠﾠ' />
    <Label>{text}</Label>
  </Content>
);
