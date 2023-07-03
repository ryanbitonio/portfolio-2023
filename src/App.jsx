import "./App.css";
import { useState } from "react";
import { Grid, GridItem, Show, Flex, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  const [courseQuery, setCourseQuery] = useState({});
  return (
    <Grid
      gap={1.5}
      templateAreas={{
        base: `"hero" "main" "footer"`,
        md: `"nav hero" "aside hero" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "0.3fr 1fr",
      }}
    >
      <Show above="md">
        <GridItem p={6} area="nav" bg="gray.800">
          <Nav />
        </GridItem>
      </Show>
      <Show above="md">
        <GridItem py={6} pl={6} area="aside" bg="gray.800">
          <Aside
            onSearch={searchText =>
              setCourseQuery({ ...courseQuery, searchText })
            }
          />
        </GridItem>
      </Show>
      <GridItem
        p={6}
        marginBottom="-1.5"
        area="hero"
        bg={{ md: "gradient.xl_primary", base: "gradient.base_primary" }}
      >
        <Hero />
      </GridItem>
      <GridItem p={6} area="main" bg={{ base: "gray.900", md: "gray.800" }}>
        <ProjectGrid />
      </GridItem>
      <GridItem p={6} area="footer" bg="gray.800">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
