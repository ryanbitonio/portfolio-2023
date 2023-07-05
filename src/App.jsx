import "./App.css";
import { useState } from "react";
import { Grid, GridItem, Show, Flex, Box, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  const [courseQuery, setCourseQuery] = useState({});
  return (
    <Grid
      overflow={"hidden"}
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
    >
      <Show above="md">
        <GridItem borderRadius={10} p={6} area="nav" bg="gray.800">
          <Stack h="100%" justify={"center"}>
            <Nav />
          </Stack>
        </GridItem>
        <GridItem
          minH={"75vh"}
          borderRadius={10}
          py={6}
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
        overflowY={"auto"}
        borderRadius={10}
        px={6}
        pt={6}
        area="main"
        bg={{ base: "gray.900", md: "gray.800" }}
      >
        <Stack h="90vh" scroll spacing={20}>
          <Hero />
          <ProjectGrid />
        </Stack>
      </GridItem>
      <GridItem p={6} area="footer" bg="gray.800">
        <Stack h="100%" justify={"center"}>
          <Footer />
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default App;
