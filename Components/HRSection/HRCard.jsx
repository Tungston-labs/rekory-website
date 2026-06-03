import Image from "next/image";

import {
  Card,
  SmallTag,
  Title,
  Description,
  List,
  ImageWrap,
} from "./HRSection.styles";

export default function HRCard({
  tag,
  title,
  description,
  points,
  image
}) {
  return (
    <Card>

      <SmallTag>{tag}</SmallTag>

      <Title>{title}</Title>

      {description && (
        <Description>
          {description}
        </Description>
      )}

     {points && (
          <List>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </List>
        )}

      {image && (
        <ImageWrap>
        <Image
  src={image}
  alt={title}
  width={760}
  height={340}
/>
        </ImageWrap>
      )}

    </Card>
  );
}
