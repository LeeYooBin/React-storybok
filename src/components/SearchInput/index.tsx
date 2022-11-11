import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
  margin: 29px 0;
  padding: 15px 40px 13px 35px;
  width: 100%;
  border-radius: 20px;
  border: none;
  background: #ccced3;
  opacity: 0.8;
  outline: none;
  font-weight: 600;
  font-size: 1rem;
`;

const Label = styled.label`
  position: relative;
  width: 90%;
`;

const ArrowIcon = styled.img`
  width: 10px;
`;

const MicIcon = styled.img`
  width: 15px;
`;

const Button = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
`;

const ExitButton = styled(Button)`
  top: 41.5%;
  left: 3%;
`;

const MicButton = styled(Button)`
  top: 39%;
  left: 92%;
`;

export interface SearchInput {
  value?: string;
  placeholder?: string;
  ArrowImage?: string;
  MicImage?: string;
  onChange?: () => void;
  handleExit?: () => void;
  handleMicrophone?: () => void;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder,
  handleExit,
  ArrowImage,
  MicImage,
  handleMicrophone
}: SearchInput) => (
  <Label>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    <ExitButton type="button" onClick={handleExit}>
      <ArrowIcon src={ArrowImage} alt="Voltar" />
    </ExitButton>
    <MicButton type="button" onClick={handleMicrophone}>
      <MicIcon src={MicImage} alt="Microfone" />
    </MicButton>
  </Label>
);
