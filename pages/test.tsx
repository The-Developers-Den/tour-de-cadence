import Head from "next/head";
import { useState } from "react";
import * as fcl from "@onflow/fcl";
import { createNFT } from "@/cadence/transactions/createNFT";

fcl.config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "app.detail.title": "My Flow NFT DApp",
});

export default function Home() {
  const [user, setUser] = useState({ loggedIn: null, addr: "" });
  const logIn = () => {
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);
  };
  const createNFT1 = async () => {
    const transactionID = await fcl
      .send([
        fcl.transaction(createNFT),
        fcl.args([
          fcl.arg(
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffc%2FZeus%252C_Digging_For_China.jpg&tbnid=i_KJrLjK30Fk1M&vet=12ahUKEwjKufLJ3JaAAxVryKACHXGLBZEQMygAegUIARDoAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDigging&docid=jfIQoWi1enOOlM&w=1632&h=1232&q=dig&ved=2ahUKEwjKufLJ3JaAAxVryKACHXGLBZEQMygAegUIARDoAQ",
            fcl.t.String,
          ),
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999),
      ])
      .then(fcl.decode);

    console.log(transactionID);
  };

  return (
    <div>
      <Head>
        <title>FCL Quickstart with NextJS</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h2>Current Address : {user && user.addr ? user.addr : ""}</h2>
      <button onClick={() => logIn()}>LogIn</button>
      <button onClick={() => createNFT1()}>Create NFT</button>
    </div>
  );
}
