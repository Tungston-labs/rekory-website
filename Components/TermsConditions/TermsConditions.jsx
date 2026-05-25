"use client";

import React from "react";
import {
  Wrapper,
  Container,
  Title,
  SubTitle,
  Card,
  Item,
  Icon,
  Content,
  ItemTitle,
  Description,
} from "./TermsConditions.styles";

import { termsData } from "../../data/termsData";

const TermsConditions = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Terms & Conditions – Rekory HRM App</Title>

        <SubTitle>
          These Terms govern your use of the Rekory HRM app and ensure a
          smooth, secure, and transparent HR management experience for your
          organization.
        </SubTitle>

        <Card>
          {termsData.map((item, index) => (
            <Item key={index}>
              <Icon>✓</Icon>

              <Content>
                <ItemTitle>{item.title}</ItemTitle>

                <Description>{item.description}</Description>

                {item.extra && (
                  <Description>{item.extra}</Description>
                )}
              </Content>
            </Item>
          ))}
        </Card>
      </Container>
    </Wrapper>
  );
};

export default TermsConditions;