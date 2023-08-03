import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import AppContext from "./AppContext";
import Aside from "./Aside";
import Connect from "./Connect";
import ExperienceGrid from "./ExperienceGrid";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import ProjectGrid from "./ProjectGrid";

const Home = () => {
  const [courseQuery, setCourseQuery] = useState({});
  const { bg, secondaryBg, color, heroBg } = useContext(AppContext);

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
            <Nav spacing={3} />
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
            onSearch={searchText =>
              setCourseQuery({ ...courseQuery, searchText })
            }
          />
        </GridItem>
      </Show>
      <GridItem overflowY="auto" borderRadius={10} area="main" bg={secondaryBg}>
        <Stack>
          <Box p={6} bg={heroBg}>
            <Hero />
          </Box>
          <Box px={6} py={10}>
            <ProjectGrid title="Featured Projects Today" />
            <Box py={10}>
              <ExperienceGrid title="Your Past Experiences" />
            </Box>
            <Box>
              <Connect />
            </Box>
          </Box>
        </Stack>
      </GridItem>
      <GridItem h="10vh" mt={-1.5} p={6} area="footer" bg={bg}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Home;
