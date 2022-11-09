import React from 'react';

import styled from 'styled-components';

const Button = styled.button<SaveButton>`
  padding: 6px 12px;
  border: solid 2.5px ${({ color }: SaveButton) => (color ? color : '#000')};
  border-radius: 5px;
  background-color: #fff;
  color: ${({ color }: SaveButton) => (color ? color : '#000')};
  font-weight: 600;
  opacity: 0.9;
  cursor: pointer;
`;

export interface SaveButton {
  text?: string;
  color?: string;
  onClick?: () => void;
}

export const SaveButton = ({
  text = 'Text', 
  color, 
  onClick,
}: SaveButton) => (
  <Button color={color} onClick={onClick}>{text}</Button>
);
