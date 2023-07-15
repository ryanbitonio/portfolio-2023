import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(16, { message: "Name must be 16 characters long" }),
  email: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(16, { message: "Email must be 16 characters long" }),
  subject: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(16, { message: "Subject must be 16 characters long" }),
});

const ConnectForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl pb={4}>
        <Box mb={3}>
          <FormLabel fontSize="3xl" htmlFor="name">
            Name
          </FormLabel>
          <Input
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
        <Box mb={12}>
          <FormLabel fontSize="3xl" htmlFor="subject">
            Subject
          </FormLabel>
          <Input
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
        <Button w="100%" fontSize="2xl" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default ConnectForm;
