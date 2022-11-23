import React from 'react';
import styled from 'styled-components';

const Content = styled.button`
  width: 100%;
  height: auto;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  border: 0;
  background: #ffffff;
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Title = styled.h3`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: start;
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 1rem;
  font-weight: 550;

  :before {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    background: #9659fb;
    border-radius: 50%;
    margin-right: 8px;
    margin-top: -3px;
  }
`;

const Text = styled.h3`
  width: 100%;
  text-align: start;
  margin: 0;
  padding: 0;
  display: block;
  font-weight: 300;
  font-size: 0.7rem;
`;

const Arrow = styled.img`
  width: 10px;
  margin: 0;
  padding: 0;
`;

const InfoButton = styled.button`
  width: auto;
  height: auto;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface CardEstablishment {
  title?: string;
  name?: string;
  arrowImage?: string;
}

export const CardEstablishment = ({
  title,
  name,
  arrowImage,
}: CardEstablishment) => (
  <Content>
    <BoxContent>
      <Title>{title || 'NÃO INFORMADO'}</Title>
      <Text>{name || 'NÃO INFORMADO'}</Text>
    </BoxContent>
    <InfoButton>
      <Arrow src={arrowImage} />
    </InfoButton>
  </Content>
);
