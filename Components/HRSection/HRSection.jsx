import { hrSectionData } from "../../data/hrSectionData";
import HRCard from "./HRCard";

import {
  Section,
  Container,
  Top,
  Heading,
  SubText,
  ButtonWrap,
  Btn,
  Grid,
} from "./HRSection.styles";

export default function HRSection() {
  return (
    <Section>
      <Container>

        <Top>
          <p>Why Choose Rekory App</p>

          <Heading>
            Ready To Transform Your HR Management?
          </Heading>

          <SubText>
      Power-Packed HR Tools, All in one place say goodbye to scattered sysytems-Rekory brings together everything you need to manage your workforce efficiently: Onboarding, attendance, payroll, leaves, and more.
          </SubText>

          <ButtonWrap>
            <Btn>Rekory App ↗</Btn>
            <Btn>TRACKPRO APP ↗</Btn>
          </ButtonWrap>
        </Top>

        <Grid>
          {hrSectionData.map((item)=>(
            <HRCard
              key={item.id}
              {...item}
            />
          ))}
        </Grid>

      </Container>
    </Section>
  );
}