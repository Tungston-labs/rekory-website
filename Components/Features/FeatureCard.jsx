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
            width={24}
            height={24}
          />
        ) : null}
      </IconBox>

      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Card>
  );
}
