import "./App.css";
import { Grid, GridItem, Show, Flex, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <Grid
      minH="100vh"
      gap={1.5}
      templateAreas={{
        base: `"hero" "main" "footer"`,
        md: `"nav hero" "aside hero" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "0.4fr 1fr",
      }}
    >
      <Show above="md">
        <GridItem p={6} area="nav" bg="gray.800">
          <Nav />
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
      <Show above="md">
        <GridItem p={6} area="aside" bg="gray.800">
          Aside
        </GridItem>
      </Show>
      <GridItem p={6} area="main" bg={{ base: "gray.900", md: "gray.800" }}>
        <ProjectGrid />
      </GridItem>
      <GridItem p={6} area="footer" bg="gray.800">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
