import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <Grid
      h="100vh"
      templateAreas={{
        base: `"nav" "hero" "main" "footer"`,
        lg: `"nav hero" "aside hero" "aside main" "footer footer"`,
      }}
      templateRows={{
        base: "58px 300px 1fr 54px",
        lg: "163px 193px 1fr 141px",
      }}
      templateColumns={{
        base: "1fr",
        lg: "460px 1fr",
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <GridItem area="hero">
        <Hero />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="dodgerblue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
      <GridItem area="footer" bg="green">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
