import React from 'react';

import styled from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

const Arrow = styled.img`
  width: 12px;
  height: 20px;
  margin-right: 10px;
`;

const Text = styled.p``;

const ArrowButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface HeaderNav {
  arrowImage?: string;
  textInfo?: string;
  onClick?: () => void;
}

export const HeaderNav = ({ arrowImage, textInfo, onClick }: HeaderNav) => (
  <Content>
    <ArrowButton onClick={onClick}>
      <Arrow src={arrowImage} />
    </ArrowButton>
    <Text>{textInfo || 'não informado'}</Text>
  </Content>
);
