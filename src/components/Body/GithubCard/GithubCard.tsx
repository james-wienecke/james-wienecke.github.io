import React, {useEffect, useState} from "react";
import {fetchGithub} from "../../utils";
import {Box, Heading, Text, Image} from "@chakra-ui/react";

interface githubData {
  user: {
    name: string;
    url: string;
    pic: string;
  },
  repo: {
    name: string;
    url: string;
  },
  lastCommit: {
    message: string;
  },
}

const GithubCard = () => {
  const [ loading, setLoading ] = useState(true);
  const drawCard = () => {
    if (loading) {
      return (
        
      )
    } else {
      return (
        <Box>
          <Text>Repo: {}</Text>
        </Box>
      )
    }
  }

  useEffect(() => {

  });
  return (
    <Box>
      <Heading size={"sm"}>What I've Been Up To:</Heading>
      {drawCard()}
    </Box>
  )
}