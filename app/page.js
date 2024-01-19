import { Box, Heading, Text, Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Box padding="4" maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading mb="6">Your Name</Heading>
        <Text fontSize="xl">About Me</Text>
        <Text mt="4">
          Brief introduction about yourself...
        </Text>

        {/* Additional sections like Education, Work Experience, etc. */}
      </Box>
    </Container>
  );
}
