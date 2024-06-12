import { Box, Heading, SimpleGrid, Text, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the new features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>
        Welcome to E-Shop
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <Heading as="h3" size="md" mt={4}>
              {product.name}
            </Heading>
            <Text mt={2}>{product.description}</Text>
            <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500" mt={4} display="block">
              View Details
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;