import React from "react";
import styled from "styled-components";

const Content = styled.button`
  width: 100vw;
  height: auto;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  border: 0;
  background: #fff;
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  display: flex;
  width: 100%;
  height: auto;
  text-align: start;
  margin: 0 0 5px 0;
  padding: 0;
  position: relative;
  font-size: 16px;
  font-weight: 550;

  :before {
    content: "";
    display: block;
    width: 9px;
    height: 9px;
    background: #9659FB;
    position: absolute;
    top: 20%;
    left: -1rem;
    border-radius: 50%;
  }
`;

const Text = styled.h3`
  width: 100%;
  text-align: start;
  margin: 0;
  padding: 0;
  display: block;
  font-size: 12px;
  font-weight: 300;
`;

const Arrow = styled.img`
  width: 0.8rem;
  margin: 0;
  padding: 0;
`;

export interface CardEstablishment {
  title?: string,
  name?: string,
  arrowImage?: string,
  onClick: () => void,
};

export const CardEstablishment = ({
  title,
  name,
  arrowImage,
  onClick,
}: CardEstablishment) => {
  return (
    <Content onClick={() => onClick()}>
      <BoxContent>
        <Title>{title || "NÃO INFORMADO"}</Title>
        <Text>{name || "NÃO INFORMADO"}</Text>
      </BoxContent>
      <Arrow src={arrowImage} />
    </Content>
  );
};
