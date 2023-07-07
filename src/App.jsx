import { Grid, GridItem, Show, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProjectGrid from "./components/ProjectGrid";

function App() {
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
        <GridItem borderRadius={10} p={6} area="nav" bg="gray.800">
          <Stack h="100%" justify="center">
            <Nav />
          </Stack>
        </GridItem>
        <GridItem
          minH="70vh"
          borderRadius={10}
          pt={6}
          pl={6}
          area="aside"
          bg="gray.800"
        >
          <Aside
            onSearch={searchText =>
              setCourseQuery({ ...courseQuery, searchText })
            }
          />
        </GridItem>
      </Show>
      <GridItem
        overflowY="auto"
        borderRadius={10}
        area="main"
        bg={{ base: "gray.900", md: "gray.800" }}
      >
        <Stack spacing={7}>
          <Box
            bg="linear-gradient(180deg, rgba(131, 131, 131, 0.8) -7.68%, rgba(44, 85, 72, 0) 117.6%)"
            px={6}
            py={6}
          >
            <Hero />
          </Box>
          <Box px={6}>
            <ProjectGrid />
          </Box>
        </Stack>
      </GridItem>
      <GridItem h="10vh" mt={-1.5} p={6} area="footer" bg="gray.900">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
