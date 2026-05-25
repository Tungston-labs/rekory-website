import Image from "next/image";
import {
  Card,
  SmallTag,
  Title,
  Description,
  List,
  ImageWrap,
} from "./HRSection.styles";

export default function HRCard(item) {
  return (
    <Card>
      <SmallTag>{item.tag}</SmallTag>

      <Title>{item.title}</Title>

      {item.description && (
        <Description>{item.description}</Description>
      )}

      {item.points && (
        <List>
          {item.points.map((point, index) => (
            <li key={index}>✓ {point}</li>
          ))}
        </List>
      )}

      {item.image && (
        <ImageWrap>
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={300}
          />
        </ImageWrap>
      )}
    </Card>
  );
}