import React from "react";
import { readBuilderProgram } from "typescript";
import { FreeholdLogo } from "./freehold";
import { colors, Flex, PaddedButton, Text } from "./reusables.styles";

function App() {
  return (
    <Flex dir="column" gap={8} align="center">
      <Flex justify="space-between" align="center" width="98%">
        <Flex gap={1} align="center">
          <FreeholdLogo />
          <Text color={colors.blue} weight={500} size={30}>
            freehold
          </Text>
        </Flex>
        <PaddedButton color={colors.pink}>Connect Wallet</PaddedButton>
      </Flex>
      <Flex dir="column" gap={1.5} align="center" margin="auto">
        <Text color={colors.blue} weight={100} size={40}>
          Lightweight Decentralized Sharing.
        </Text>
        <Text color={colors.blue} weight={300} size={16} width="50%">
          The app uses{" "}
          <span style={{ fontWeight: "400", color: `rgb(${colors.pink})` }}>
            IPFS
          </span>
          ,{" "}
          <span style={{ fontWeight: "400", color: `rgb(${colors.pink})` }}>
            web3.storage
          </span>
          , and your browser's{" "}
          <span style={{ fontWeight: "400", color: `rgb(${colors.pink})` }}>
            localStorage
          </span>{" "}
          to spin up a lightweight work and share tool.
        </Text>
        <Flex dir="row" gap={1}>
          <PaddedButton color={colors.blue}>Work As 0x</PaddedButton>
          <PaddedButton color={colors.grey}>Work As Anon</PaddedButton>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
