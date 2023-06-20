import "./App.css";
import { Grid, GridItem, Show, Hide } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <Grid
      gap={1.5}
      h="100vh"
      templateAreas={{
        base: `"hero" "main" "footer"`,
        md: `"nav hero" "aside hero" "aside main" "footer footer"`,
      }}
      templateRows={{
        base: "450px 1fr 54px",
        md: "163px 153px 1fr 141px",
        lg: "163px 193px 1fr 141px",
      }}
      templateColumns={{
        base: "1fr",
        md: "0.4fr 1fr",
      }}
    >
      <Show above="md">
        <GridItem area="nav" bg="gray.800">
          <Nav />
        </GridItem>
      </Show>
      <GridItem
        marginBottom="-1.5"
        area="hero"
        bg={{ md: "gradient.xl_primary", base: "gradient.base_primary" }}
      >
        <Hero />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" bg="gray.800">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="gray.800">
        Main
      </GridItem>
      <GridItem area="footer" bg="gray.800">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
