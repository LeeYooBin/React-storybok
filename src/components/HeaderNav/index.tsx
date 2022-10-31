import React from "react";

import styled from "styled-components";

const Content = styled.div`
    widrh: 100vw;
    height: auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
`;

const Arrow = styled.img`
  width: 12px;
  height: 20px;
  margin-right: 10px;
`

const Text = styled.p`

`

export interface HeaderNav {
  arrowImage?: string,
  textInfo?: string,
};

export const HeaderNav = ({arrowImage, textInfo} : HeaderNav) => {
    return(
        <Content>
          <Arrow src={arrowImage} />
          <Text>{textInfo || "não informado"}</Text>
        </Content>
    );
};