'use client'

import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  props?: Record<string, unknown>
  children: ReactNode
  to?: string
}

const MenuItem = ({ children, to = "/", ...rest }: Props) => {
  return (
    <Link href={to}>
      <Text
        display="block"
        px={3}
        py={2}
        borderRadius="md"
        fontWeight="semibold"
        color="gray.700"
        transition="all 0.2s ease"
        _hover={{ color: "primary.500", bg: "gray.100" }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = () => {
  return (
    <Box
      display={{ base: "block", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 0, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/leaderboard">Leaderboard</MenuItem>
        <MenuItem to="/">Quizzes</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      px={6}
      py={4}
      bg="white"
      color="black"
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      {...props}
    >
      {children}
    </Flex>
  );
};

export const NavBar = (props: Record<string, unknown>) => {
  return (
    <NavBarContainer {...props}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="primary.500"
        letterSpacing="tight"
      >
        Quiz Season
      </Text>
      <MenuLinks />
    </NavBarContainer>
  );
};