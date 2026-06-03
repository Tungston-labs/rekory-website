import Image from "next/image";
import { Card, IconBox, Title, Description } from "./Features.styles";

export default function FeatureCard({
  icon,
  title,
  desc
}) {
  return (
    <Card>
      <IconBox>
        {icon ? (
          <Image
            src={icon}
            alt={title}
            width={70}
            height={70}
          />
        ) : null}
      </IconBox>

      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Card>
  );
}
