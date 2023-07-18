import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name should contain only letters and spaces",
    }),
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must be 255 characters only" })
    .email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(50, { message: "Subject must be 50 characters only" })
    .regex(/^[A-Za-z0-9\s]+$/, {
      message: "Subject should contain only letters, numbers, and spaces",
    }),
  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters" })
    .max(1000, { message: "Message must be 1000 characters only" }),
});

const ConnectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form autoComplete="off">
      <FormControl pb={4}>
        <Box mb={3}>
          <FormLabel fontSize="3xl" htmlFor="name">
            Name
          </FormLabel>
          <Input
            autoComplete="off"
            fontSize="3xl"
            {...register("name")}
            name="name"
            type="text"
            id="name"
          />
          {errors.name && (
            <Text fontSize="2xl" color="red">
              {errors.name.message}
            </Text>
          )}
        </Box>
        <Box mb={3}>
          <FormLabel fontSize="3xl" htmlFor="email">
            Email
          </FormLabel>
          <Input
            autoComplete="off"
            fontSize="3xl"
            {...register("email")}
            name="email"
            type="text"
            id="email"
          />
          {errors.email && (
            <Text fontSize="2xl" color="red">
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box mb={3}>
          <FormLabel fontSize="3xl" htmlFor="subject">
            Subject
          </FormLabel>
          <Input
            autoComplete="off"
            fontSize="3xl"
            {...register("subject")}
            name="subject"
            type="text"
            id="subject"
          />
          {errors.subject && (
            <Text fontSize="2xl" color="red">
              {errors.subject.message}
            </Text>
          )}
        </Box>
        <Box mb={12}>
          <FormLabel fontSize="3xl" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            autoComplete="off"
            resize="none"
            fontSize="3xl"
            {...register("message")}
            name="message"
            type="text"
            id="message"
            size="sm"
          />
          {errors.message && (
            <Text fontSize="2xl" color="red">
              {errors.message.message}
            </Text>
          )}
        </Box>
        <Button
          isDisabled={!isValid}
          mb={3}
          w="100%"
          fontSize="2xl"
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default ConnectForm;
