import React, { useEffect, useState } from "react";
import { fetchGithub, githubData } from "../../../utils";
import {
  Box,
  Heading,
  Text,
  Image,
  Spinner,
  Flex,
  Link,
} from "@chakra-ui/react";

const GithubCard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<githubData>({} as githubData);

  const drawCard = () => {
    if (loading) {
      return <Spinner size="lg" />;
    } else {
      return (
        <Box>
          <Link
            href={`https://github.com/${data.user.name}`}
            aria-label={`Link to ${data.user.name}'s Github user page.`}
          >
            <Flex align={"center"}>
              <Image
                src={data.user.pic}
                alt={`${data.user.name}'s Github profile picture.`}
                borderRadius={"full"}
                boxSize={"50px"}
                mr={4}
              />
              <Heading size={"md"}>{data.user.name}</Heading>
            </Flex>
          </Link>
          <Link href={`https://github.com/${data.repo.name}`}>
            <Box>
              <Heading size={"sm"}>Repository: {data.repo.name}</Heading>
              <Text>Commit: {data.lastCommit.message}</Text>
            </Box>
          </Link>
        </Box>
      );
    }
  };

  useEffect(() => {
    fetchGithub().then((response) => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    if (data.user !== undefined) {
      setLoading(false);
    }
  }, [data]);
  return <Box>{drawCard()}</Box>;
};

export default GithubCard;
