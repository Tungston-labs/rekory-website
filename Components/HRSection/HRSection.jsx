"use client";

import { useState } from "react";
import HRCard from "./HRCard";
import { rekoryData } from "../../data/hrSectionData";
import { trackproData } from "../../data/trackproData";
import { BsArrowUpRightCircle } from "react-icons/bs";
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

  const [data, setData] = useState(rekoryData);

  return (
    <Section id="why-rekory">
     <Container $bgColor={data.bgColor}>

        <Top>
          <p>{data.topTag}</p>
          <Heading>
            {data.heading}
          </Heading>

          <SubText>
            {data.subText}
          </SubText>
<ButtonWrap>
  <Btn
    $active={data === rekoryData}
    color="#2341a8"
    onClick={() => setData(rekoryData)}
  >
    REKORY APP <BsArrowUpRightCircle/>
  </Btn>

  <Btn
    $active={data === trackproData}
    color="#BD0D12"
    onClick={() => setData(trackproData)}
  >
    TRACKPOD APP <BsArrowUpRightCircle/>
  </Btn>
</ButtonWrap>

        </Top>

        <Grid>
          {data.cards.map((item) => (
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