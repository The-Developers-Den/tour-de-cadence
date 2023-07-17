import { useState } from "react";
import * as fcl from "@onflow/fcl";
import { createNFT } from "@/cadence/transactions/createNFT";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

fcl.config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "app.detail.title": "My Flow NFT DApp",
});

type ClaimBadgeProps = {
  img: string;
};

const ClaimBadge = ({ img }: ClaimBadgeProps) => {
  const [user, setUser] = useState({ loggedIn: null, addr: "" });
  const logIn = () => {
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);
  };
  const [txnId, setTxnId] = useState("");

  const handleCreateNFT = async () => {
    toast.loading("Minting NFT...", {
      id: "loading",
    });
    const transactionID = await fcl
      .send([
        fcl.transaction(createNFT),
        fcl.args([fcl.arg(img, fcl.t.String)]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999),
      ])
      .then(fcl.decode);
    toast.dismiss("loading");
    toast.success("NFT Minted Successfully");
    setTxnId(transactionID);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="font-aber_bold text-4xl mb-5">
        Collect your Course Completion NFT
      </h2>
      <Image
        src={img}
        alt="nft"
        width={1000}
        height={1000}
        className="rounded-xl w-[15vw] my-3"
      />
      {user && user.addr ? (
        <button
          onClick={handleCreateNFT}
          className="bg-[#0f192a] my-2 rounded-xl text-xl p-2 border-[#28192a] border-2 font-aber_bold transition-transform duration-300 hover:scale-95 w-fit flex justify-center items-center"
        >
          Create NFT
        </button>
      ) : (
        <button
          onClick={logIn}
          className="bg-[#0f192a] my-2 rounded-xl text-xl p-2 border-[#28192a] border-2 font-aber_bold transition-transform duration-300 hover:scale-95 w-fit flex justify-center items-center"
        >
          Login
        </button>
      )}
      <h2 className="font-raleway my-2 ">
        {user && user.addr ? "Current Address : " + user.addr : ""}
      </h2>
      <Link
        className="font-raleway my-2 cursor-pointer"
        href={"https://testnet.flowscan.org/transaction/" + txnId}
      >
        {txnId && "Transaction ID : " + txnId}
      </Link>
    </div>
  );
};

export default ClaimBadge;
