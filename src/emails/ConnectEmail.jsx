import {
  Body,
  Container,
  Heading,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

export default function ConnectEmail({ name, email, subject, message }) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded-xl mt-8 mx-auto p-[20px]">
            <Section>
              <Heading className="mb-0 text-2xl">Connect</Heading>
              <Text className="text-gray-400 m-0">{subject}</Text>
            </Section>
            <Section>
              <Text className=" mb-0 font-bold text-2xl">{name}</Text>
              <Text className="m-0 text-gray-400 ">{email}</Text>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
