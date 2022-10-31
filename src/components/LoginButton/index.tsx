import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  background-color: #9659fb;
  color: #fff;
  padding: 15px 125px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export interface LoginButton {
  text?: string;
  onClick: () => void;
}

export const LoginButton = ({ text, onClick } : LoginButton) => (
  <Button onClick={() => onClick()}>{text}</Button>
);
