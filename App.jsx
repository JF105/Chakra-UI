import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "./resources/images/banner-desktop.jpg";
function App() {
  return (
    <Box
      h="40vh"
      bg="gray"
      bgImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        Justify="center"
        h="100%"
        bg="rgb(0 0 0 / 50%)"
        p={['0 10%', null, '0 20%']}
      >
        <Heading
          variant='banner'
        >
          Domina El Terreno
        </Heading>
        <Stack
         direction={{ base:'column',m:'row' }}
         spacing="40px"
         mt="30px"
         w={[ '100%', null,'auto']}
         >
         
          <Button
            variant="outline"
            size="lg"
            
          >
            Ver detalles
          </Button>
          <Button
            variant="outline"
            size="lg"
            
          >
            Ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
