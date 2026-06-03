"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Wrapper,
  Container,
  TopText,
  Heading,
  Description,
  ButtonWrap,
  TabButton,
  GridContainer,
  LeftSection,
  FormBox,
  Input,
  TextArea,
  SendButton,
  CenterSection,
  Title,
  Paragraph,
  FeatureList,
  FeatureItem,
  RightSection,
  PhoneImage,
  BottomCards,
  Card,
  Icon,
  CardTitle,
  CardText,
  Toast,
} from "./BusinessSolutions.styles";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { appData } from "../../data/BusinessSolutionsdata";

export default function AppAdvantages() {
  const [activeTab, setActiveTab] = useState("REKORY APP");

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    companySize: "",
    hearAbout: "",
    message: "",
  });

  const currentData =
    activeTab === "TRACKPOD APP"
      ? appData.trackpod
      : appData.rekory;

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (message, type = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({ message, type });

    toastTimerRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appType: activeTab,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showToast("Message sent successfully!");

        setFormData({
          name: "",
          company: "",
          email: "",
          companySize: "",
          hearAbout: "",
          message: "",
        });
      } else {
        showToast(data.message || "Failed to send message", "error");
      }
    } catch (error) {
      console.error(error);
      showToast("Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper id="app-advantages">
      {toast && (
        <Toast
          role="status"
          aria-live="polite"
          $type={toast.type}
        >
          {toast.message}
        </Toast>
      )}

      <Container>
        <TopText>APP Advantages</TopText>

        <Heading>
          Solutions Tailored To Your Business Needs
        </Heading>

        <Description>
          Power-Packed HR Tools, All in one place say goodbye to
          scattered systems-Rekory brings together everything you need
          to manage your workforce efficiently: Onboarding,
          attendance, payroll, leaves, and more.
        </Description>

        <ButtonWrap>
          <TabButton
            $active={activeTab === "REKORY APP"}
            onClick={() => setActiveTab("REKORY APP")}
          >
            REKORY APP
          </TabButton>

          <TabButton
            $active={activeTab === "TRACKPOD APP"}
            $isRed={true}
            onClick={() => setActiveTab("TRACKPOD APP")}
          >
            TRACKPOD APP
          </TabButton>
        </ButtonWrap>

        <GridContainer>
          {/* FORM */}
          <LeftSection>
            <FormBox
              as="form"
              onSubmit={handleSubmit}
              $isRed={activeTab === "TRACKPOD APP"}
            >
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Name"
                required
                autoComplete="off"
              />

              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                placeholder="Company"
                   autoComplete="off"
              />

              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Company Email"
                required
                   autoComplete="off"
              />

              <Input
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                type="text"
                placeholder="Company Size"
                   autoComplete="off"
              />

              <Input
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                type="text"
                placeholder={`How Did You Hear About ${activeTab}`}
                   autoComplete="off"
              />

              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Message"
                   autoComplete="off"
              />

              <SendButton
                type="submit"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Sending..." : "Send Message"}

                <span>{loading ? "" : <BsArrowUpRightCircle/>}</span>
              </SendButton>
            </FormBox>
          </LeftSection>

          {/* CENTER CONTENT */}
          <CenterSection>
            <Title>{currentData.title}</Title>

            <Paragraph>
              {currentData.description}
            </Paragraph>

            <FeatureList>
              {currentData.features.map((item, index) => (
                <FeatureItem key={index}>
                  <span>✓</span>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </FeatureItem>
              ))}
            </FeatureList>
          </CenterSection>

          {/* BOTTOM CARDS */}
          <BottomCards>
            {currentData.cards.map((card, index) => (
              <Card key={index}>
                <Icon>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                  />
                </Icon>

                <CardTitle>
                  {card.title}
                </CardTitle>

                <CardText>
                  {card.text}
                </CardText>
              </Card>
            ))}
          </BottomCards>

          {/* PHONE IMAGE */}
          <RightSection>
            <PhoneImage 
              key={currentData.image}
            >
              <Image
                src={currentData.image}
                alt={currentData.title}
                fill
              />
            </PhoneImage>
          </RightSection>
        </GridContainer>
      </Container>
    </Wrapper>
  );
}
