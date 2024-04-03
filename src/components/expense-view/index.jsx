import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function ExpenseView({ type, data }) {
  return (
    <Box
      flex={1}
      w={"full"}
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.map((item, index) => (
        <Flex
          key={index}
          bg={type === "income" ? "red.50" : "blue.50"}
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "income" ? "red.100" : "blue.100"}
          p={"4"}
          borderRadius={"8"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text ml={"3"} fontWeight="bold" color={"gray.600"}>
              {item.description}
            </Text>
            <Text>{item.amount}</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
}
ExpenseView.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
};
