import React from 'react';

import styled from 'styled-components';

const Button = styled.button<LoginButton>`
  background-color: ${({ backgroundColor }: LoginButton) =>
    backgroundColor ? backgroundColor : '#000'};
  color: ${({ color }: LoginButton) => (color ? color : '#fff')};
  padding: 15px 125px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export interface LoginButton {
  text?: string;
  backgroundColor?: string;
  color?: string;
}

export const LoginButton = ({
  text = 'Text',
  backgroundColor,
  color,
}: LoginButton) => (
  <Button color={color} backgroundColor={backgroundColor}>
    {text}
  </Button>
);
