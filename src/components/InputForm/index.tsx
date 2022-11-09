import React from 'react';
import styled from 'styled-components';

const Content = styled.div<InputForm>`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  font-family: 'Open Sans', sans-serif;
  position: relative;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 30px;
`;

const Label = styled.label`
  margin-bottom: 1.5vh;
  font-size: 1rem;
  opacity: 0.7;
`;

const Input = styled.input`
  border: none;
  outline: none;
  color: ${({ color }: InputForm) => (color ? color : '#000')};
  font-size: 1rem;
  font-weight: 600;
  width: 100%;

  ::placeholder {
    opacity: 0.35;
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

export interface InputForm {
  title?: string;
  placeholder?: string;
  color?: string;
  type?: string;
  value?: string;
  onChange?: () => void;
}

export const InputForm = ({
  title = 'Título',
  placeholder = 'Placeholder',
  color,
  type,
  value,
  onChange,
}: InputForm) => (
  <Content>
    <Label>{title}</Label>
    <Input placeholder={`“${placeholder}”`} color={color} type={type} value={value} onChange={onChange}/>
  </Content>
);
