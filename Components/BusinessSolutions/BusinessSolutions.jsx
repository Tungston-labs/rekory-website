"use client";

import {
  Wrapper,
  TopText,
  ButtonWrap,
  PrimaryButton,
  SecondaryButton,
  MainGrid,
  FormBox,
  Input,
  TextArea,
  SubmitButton,
  Content,
  MobileImage,
  PhoneImage,
  BottomGrid,
  Card
} from "./BusinessSolutions.styles";

import {
  features,
  bottomCards
} from "../../data/BusinessSolutionsdata";

export default function BusinessSolutions() {
  return (
    <Wrapper>

      <TopText>
        <span>APP Advantages</span>

        <h1>
          Solutions Tailored To Your Business Needs
        </h1>

        <p>
          Power-packed HR tools bringing together
          everything needed to manage your workforce efficiently.
        </p>

        <ButtonWrap>
          <PrimaryButton>
            REKORY APP
          </PrimaryButton>

          <SecondaryButton>
            TRACKPOD APP
          </SecondaryButton>
        </ButtonWrap>
      </TopText>


      <MainGrid>

        <FormBox>
          <Input placeholder="Enter Name"/>

          <Input placeholder="Company"/>

          <Input placeholder="Company Email"/>

          <Input placeholder="Company Size"/>

          <Input placeholder="How Did You Hear About Rekory"/>

          <TextArea
            rows={4}
            placeholder="Message"
          />

          <SubmitButton>
            Send Message
          </SubmitButton>

        </FormBox>


        <Content>

          <h2>
            Rekory HR Management App
          </h2>

          <p>
            Rekory simplifies attendance, payroll,
            reimbursements and workforce operations.
          </p>

          <ul>
            {features.map((item,index)=>(
              <li key={index}>
                ✓ <strong>{item.title}</strong>
                <br/>
                {item.desc}
              </li>
            ))}
          </ul>

        </Content>


        <MobileImage>
          <PhoneImage
            src="/images/mobile.png"
            alt="mobile"
          />
        </MobileImage>

      </MainGrid>


      <BottomGrid>

        {bottomCards.map((item,index)=>(

          <Card key={index}>
            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </Card>

        ))}

      </BottomGrid>

    </Wrapper>
  );
}