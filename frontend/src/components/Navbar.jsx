import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
          textTransform={"uppercase"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaRegPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "dark" ? (
              <MdOutlineDarkMode size={20}/>
            ) : (
              <MdOutlineLightMode size={20}/>
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
