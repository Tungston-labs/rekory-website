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
} from "./PrivacyPolicy.style";

import { privacyData } from "../../data/privacyData";

const PrivacyPolicy = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Privacy Policy for Rekory: Your Data, Fully Secured, Never Shared</Title>

                <SubTitle>
                    At Rekory, we value your trust. This Privacy Policy explains how we collect, use,
                    and safeguard your data when you use our Human Resource Management (HRM) app, available on iOS
                    and Android. Our core promise: your data stays private and secure —
                    always stored in our own facilities, never shared with third parties.
                </SubTitle>

                <Card>
                    {privacyData.map((item, index) => (
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

export default PrivacyPolicy;


