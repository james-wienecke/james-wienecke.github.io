import React, {useEffect, useState} from "react";
import {fetchGithub, githubData} from "../../../utils";
import {Box, Heading, Text, Image, Spinner} from "@chakra-ui/react";

const GithubCard = () => {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState<githubData>({} as githubData);

  const drawCard = () => {
    if (loading) {
      return (
        <Spinner size='lg' />
      )
    } else {
      return (
        <Box>
          <Text>Repo: {data.repo.name}</Text>
          <Text>Message: {data.lastCommit.message}</Text>
        </Box>
      )
    }
  }

  useEffect(() => {
    fetchGithub().then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);

  useEffect(() => {
    if (data.user !== undefined) {
      setLoading(false);
    }
  }, [data]);
  return (
    <Box>
      <Heading size={"sm"}>What I've Been Up To:</Heading>
      {drawCard()}
    </Box>
  )
}

export default GithubCard;