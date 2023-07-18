import Lessons from "@/util/lesson.config";
import LessonHeader from "@/components/LessonHeader";
import ClaimBadge from "@/components/ClaimBadge";

const syntax = () => {
  const links: {
    title: string;
    link: string;
    isActive: boolean;
  }[] = [
    {
      title: "Lesson Overview",
      link: "/lessons/cadence-contracts/1",
      isActive: false,
    },
    {
      title: "Building a Contract",
      link: "/lessons/cadence-contracts/2",
      isActive: false,
    },
    {
      title: "Contract Mastery: Events",
      link: "/lessons/cadence-contracts/3",
      isActive: false,
    },
    {
      title: "Contract Mastery: Transactions",
      link: "/lessons/cadence-contracts/4",
      isActive: false,
    },
    {
      title: "Contract Mastery: Built-in Functions",
      link: "/lessons/cadence-contracts/5",
      isActive: false,
    },
    {
      title: "Contract Mastery: Imp Operators",
      link: "/lessons/cadence-contracts/6",
      isActive: false,
    },
    {
      title: "Contract Mastery: NFT Badge",
      link: "/lessons/cadence-contracts/7",
      isActive: true,
    },
  ];

  return (
    <Lessons>
      <LessonHeader menuLink={links} menuTitle="Intro To Cadence" />
      <div className="w-screen h-[80vh] mt-20">
        <ClaimBadge img="https://bafybeiawmqfds6k6vjs6cudio7mpd6xvu4mvcqihzdb7vw7mo2nm3bignq.ipfs.w3s.link/contract-badge.png" />
      </div>
    </Lessons>
  );
};
export default syntax;
