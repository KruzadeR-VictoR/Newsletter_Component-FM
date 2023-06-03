import { useContext } from "react";
import { newsletterContext } from "./Route";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import listIcon from "./assets/icon-list.svg";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const { email } = useContext(newsletterContext);
  const navigate = useNavigate();
  return (
    <>
      <Flex
        bg={"CharcoalGrey"}
        minH={"100vh"}
        justify={["auto", "center"]}
        align={["auto", "center"]}
      >
        <Flex
          direction={"column"}
          justify={"space-between"}
          bg={"White"}
          w={["100%", "30rem"]}
          h={["100vh", "30rem"]}
          p={["12", "3rem"]}
          py={"12"}
          rounded={["0", "2rem"]}
        >
          <Flex flex="1" direction={"column"} justify={"center"} gap={"5"}>
            <img src={listIcon} alt="icon" width={"65"} height={"65"} />
            <Heading
              fontSize={"2.5rem"}
              fontWeight={"bold"}
              lineHeight={"1.1"}
              mt={"3"}
            >
              Thanks for Subscribing!
            </Heading>
            <Text>
              A confirmation email has been sent to{" "}
              <Text as="span" fontWeight={"bold"}>
                {email}
              </Text>
              . Please open it and click the button inside to confirm your
              subscription.
            </Text>
          </Flex>
          <Button
            w="full"
            mt="6"
            p={"7"}
            fontWeight={"bold"}
            bg={"DarkSlateGrey"}
            color={"White"}
            onClick={() => navigate("/")}
          >
            Dismiss message
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Thanks;
