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
      link: "/lessons/cadence-oops/1",
      isActive: false,
    },

    {
      title: "Cadence OOPs Mastery: Access Control",
      link: "/lessons/cadence-oops/2",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: Interface",
      link: "/lessons/cadence-oops/3",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: Enumerations",
      link: "/lessons/cadence-oops/4",
      isActive: false,
    },
    {
      title: "Cadence OOPs Mastery: References",
      link: "/lessons/cadence-oops/5",
      isActive: false,
    },
    {
      title: "Cadence Contract: NFT Badge",
      link: "/lessons/cadence-oops/6",
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
