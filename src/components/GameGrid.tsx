import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { useEffect, useState } from 'react';


export default function GameGrid() {
  // const {games, error, isLoading} = useGames();
  ;
  const [games,setGames] = useState<any>()
  console.log(games);
useEffect(()=>{
useGames(setGames)
},[])
    
  return (
    <>
      {/* {error && <Text>{error}</Text>} */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {games ? games?.map((game: any) => (
          <GameCard key={game.id} game={game} />
        )):
          Array(6)
            .fill(1)
            .map((_, index) => <GameCardSkeleton key={index} />)}
      </SimpleGrid>
    </>
  );
}
