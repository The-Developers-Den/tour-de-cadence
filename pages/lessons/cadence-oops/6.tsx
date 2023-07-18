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
      title: "Cadence OOPs Mastery: NFT Badge",
      link: "/lessons/cadence-oops/6",
      isActive: true,
    },
  ];

  return (
    <Lessons>
      <LessonHeader menuLink={links} menuTitle="Intro To Cadence" />
      <div className="w-screen h-[80vh] mt-20">
        <ClaimBadge img="https://bafybeiaw3kj5bv2zpafea7sapqwcgiuukdmfd5tnf6ec66pyjuf7xyuuwu.ipfs.w3s.link/oop-badge.png" />
      </div>
    </Lessons>
  );
};
export default syntax;
