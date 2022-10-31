import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: auto
  padding: 20px;
`;

const Label = styled.label`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 7px;
`;

const Input = styled.input`
  width: 100%;
  height: 25px;
  border: 0;
  outline: 0;
  font-size: 14px;
  color: #7640d0;
  font-weight: 550;

  ::-webkit-input-placeholder {
    color: #393335;
    opacity: 50%;
    font-size: 14px;
    font-weight: 400;
  }
`;

export interface InputForm {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
}

export const InputForm = ({
  label, 
  name, 
  value, 
  placeholder
}: InputForm) => (
  <Content>
    <Label>{label}</Label>
    <Input name={name} value={value} type="text" placeholder={placeholder} />
  </Content>
);
