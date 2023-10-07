import { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App
