import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import Signup from "./Signup";
import { Alert, AlertIcon } from "@chakra-ui/react";

import Auth from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <VStack>
      <Box
        w="100%"
        h="calc(100vh)"
        bgGradient="linear( blue.200, green.300, cyan.600)"
      >
        <Box
          bg="#086F83"
          w={[300, 400, 500]}
          borderWidth="1rem"
          borderRadius="md"
          borderColor="#086F83"
          display="block"
          marginLeft="auto"
          marginRight="auto"
          marginTop="1.25rem"
        >
          <Text color="white">Login</Text>
          <Box>
            {data ? (
              <Text color="white" fontSize="1rem">
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </Text>
            ) : (
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  bg="white"
                  focusBorderColor="white"
                />
                <br></br>
                <br></br>
                <InputGroup size="md">
                  <Input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type={show ? "text" : "password"}
                    value={formState.password}
                    onChange={handleChange}
                    bg="white"
                    focusBorderColor="white"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <br></br>
                <Button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
                <br></br>
                <br></br>
              </FormControl>
            )}

            {error && (
              <Alert status="error">
                <AlertIcon />
                {error.message}
              </Alert>
            )}
          </Box>
          <Signup />
        </Box>
      </Box>
    </VStack>
  );
};

export default Login;
