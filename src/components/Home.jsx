import { Grid, GridItem, Show, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import Aside from "./Aside";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import ProjectGrid from "./ProjectGrid";

const Home = ({ bg, mainBg, footerBg, cardBg, cardHover, color }) => {
  const [courseQuery, setCourseQuery] = useState({});
  return (
    <Grid
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
        <GridItem borderRadius={10} p={6} area="nav" bg={mainBg}>
          <Stack h="100%" justify="center">
            <Nav color={color} spacing={3} />
          </Stack>
        </GridItem>
        <GridItem
          minH="70vh"
          borderRadius={10}
          pt={6}
          pl={6}
          area="aside"
          bg={mainBg}
        >
          <Aside
            onSearch={searchText =>
              setCourseQuery({ ...courseQuery, searchText })
            }
          />
        </GridItem>
      </Show>
      <GridItem overflowY="auto" borderRadius={10} area="main" bg={mainBg}>
        <Stack spacing={7}>
          <Box bg={mainBg} p={6}>
            <Hero />
          </Box>
          <Box px={6}>
            <ProjectGrid />
          </Box>
        </Stack>
      </GridItem>
      <GridItem h="10vh" mt={-1.5} p={6} area="footer" bg={footerBg}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Home;
