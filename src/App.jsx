import "./App.css";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import illustrationMobile from "./assets/illustration-sign-up-mobile.svg";
import illustrationDesktop from "./assets/illustration-sign-up-desktop.svg";
import listIcon from "./assets/icon-list.svg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { newsletterContext } from "./Route";

function App() {
  const { email, setEmail } = useContext(newsletterContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isError, setisError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      console.log("success");
      setisError(false);
      navigate("/Thanks-for-subscribing");
    } else {
      console.log("failed");
      setisError(true);
    }
    // console.log(email);
  };

  onresize = () => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        justify={"center"}
        align={"center"}
        bg={"CharcoalGrey"}
      >
        <Box padding={["0", "5"]} bg={"White"} rounded={"2rem"}>
          <Flex
            as="main"
            direction={["column", "row-reverse"]}
            maxW={"55rem"}
            // maxH={"40rem"}
            bg={"White"}
          >
            {/* image  */}
            <Box>
              <img
                src={
                  screenWidth >= "750"
                    ? illustrationDesktop
                    : illustrationMobile
                }
                alt="img"
                width="100%"
                height="100%"
              />
            </Box>
            <Flex
              flex={"1"}
              basis={"50%"}
              direction={"column"}
              p={["6", "10"]}
              pt={["8", "0"]}
              justify={"center"}
            >
              <Heading fontSize={"2.5rem"}>Stay updated!</Heading>
              <Text mt={"5"}>
                Join 60,000+ product managers receiving monthly updates on:
              </Text>
              <Stack direction={"column"} mt={"6"} mb={"2.5rem"}>
                {/* list-1  */}
                <Flex align={"start"} gap={4}>
                  <img src={listIcon} alt="icon" width={"20"} height={"20"} />
                  <Text color={"DarkSlateGrey"}>
                    Product discovery and building what matters
                  </Text>
                </Flex>
                {/* list-2  */}
                <Flex align={"start"} gap={4}>
                  <img src={listIcon} alt="icon" width={"20"} height={"20"} />
                  <Text color={"DarkSlateGrey"}>
                    Measuring to ensure updates are a success
                  </Text>
                </Flex>
                {/* list-3  */}
                <Flex align={"start"} gap={4}>
                  <img src={listIcon} alt="icon" width={"20"} height={"20"} />
                  <Text color={"DarkSlateGrey"} fontWeight={""}>
                    And much more!
                  </Text>
                </Flex>
              </Stack>
              {/* Email form  */}
              <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl isInvalid={isError}>
                  <Flex justify={"space-between"} align={"center"} mb={"2"}>
                    <FormLabel
                      fontSize={".8rem"}
                      fontWeight={"bold"}
                      color={"CharcoalGrey"}
                      m={"0"}
                    >
                      Email address
                    </FormLabel>
                    {isError && (
                      <FormErrorMessage
                        fontSize={".8rem"}
                        fontWeight={"bold"}
                        color={"Tomato"}
                      >
                        Valid email required
                      </FormErrorMessage>
                    )}
                  </Flex>
                  {/* input Field  */}
                  <Input
                    type="text"
                    placeholder="email@company.com"
                    px={"3"}
                    py={"7"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    focusBorderColor="Grey"
                    errorBorderColor="Tomato"
                    _placeholder={{ color: "Grey" }}
                    sx={
                      isError
                        ? { bgColor: "hsla(4, 100%, 67%,.2)" }
                        : { border: "1px solid Grey" }
                    }
                  />
                </FormControl>
                {/* submit Button  */}
                <Button
                  type="submit"
                  w="full"
                  mt="6"
                  p={"7"}
                  fontWeight={"bold"}
                  bg={"DarkSlateGrey"}
                  color={"White"}
                >
                  Subscribe to monthly newsletter
                </Button>
              </form>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default App;
