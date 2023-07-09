import { Grid, GridItem, Show, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import Aside from "./Aside";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import ProjectGrid from "./ProjectGrid";

const Home = ({
  color,
  secondaryColor,
  tertiaryColor,
  bg,
  secondaryBg,
  tertiaryBg,
  heroBg,
  navColor,
}) => {
  const [courseQuery, setCourseQuery] = useState({});

  return (
    <Grid
      bg={bg}
      color={color}
      overflow="hidden"
      h="100vh"
      gap={2}
      templateAreas={{
        base: ` "main" "footer"`,
        md: `"nav main" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "0.3fr 1fr",
      }}
      templateRows={{
        base: "1fr",
        md: "auto 1fr auto",
      }}
    >
      <Show above="md">
        <GridItem borderRadius={10} p={6} area="nav" bg={secondaryBg}>
          <Stack h="100%" justify="center">
            <Nav
              tertiaryColor={tertiaryColor}
              navColor={navColor}
              spacing={3}
            />
          </Stack>
        </GridItem>
        <GridItem
          minH="70vh"
          borderRadius={10}
          pt={6}
          pl={6}
          area="aside"
          bg={secondaryBg}
        >
          <Aside
            secondaryBg={secondaryBg}
            tertiaryBg={tertiaryBg}
            secondaryColor={secondaryColor}
            onSearch={searchText =>
              setCourseQuery({ ...courseQuery, searchText })
            }
          />
        </GridItem>
      </Show>
      <GridItem overflowY="auto" borderRadius={10} area="main" bg={secondaryBg}>
        <Stack>
          <Box p={6} bg={heroBg}>
            <Hero tertiaryColor={tertiaryColor} />
          </Box>
          <Box p={6}>
            <ProjectGrid color={color} secondaryColor={secondaryColor} />
          </Box>
        </Stack>
      </GridItem>
      <GridItem h="10vh" mt={-1.5} p={6} area="footer" bg={bg}>
        <Footer color={color} secondaryColor={secondaryColor} />
      </GridItem>
    </Grid>
  );
};

export default Home;
