import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Link from "next/link";

type LessonHeaderProps = {
  links: {
    title: string;
    link: string;
    isActive: boolean;
  }[];
};
const LessonHeading = ({ links }: LessonHeaderProps) => {
  const heading = links.find((link) => {
    if (link.isActive) {
      return link;
    }
  });
  return (
    <div className="text-4xl font-bold font-aber_bold text-white flex justify-between">
      {heading && links.indexOf(heading) === 0 ? (
        <div className="bg-white/[0.4] my-auto mr-4">
          <GrFormPrevious className="text-white" />
        </div>
      ) : (
        <Link
          href={links[links.indexOf(heading!) - 1].link}
          className="bg-white my-auto mr-4"
        >
          <GrFormPrevious className="text-white" />
        </Link>
      )}

      {heading && (
        <h2 className="text-4xl font-bold font-aber_bold text-white">
          {heading.title}
        </h2>
      )}
      {heading && links.indexOf(heading) === links.length - 1 ? (
        <div className="bg-white/[0.4] my-auto mr-4">
          <GrFormNext className="text-white" />
        </div>
      ) : (
        <Link
          href={links[links.indexOf(heading!) + 1].link}
          className="bg-white my-auto ml-4 cursor-pointer"
        >
          <GrFormNext className="text-white" />
        </Link>
      )}
    </div>
  );
};

export default LessonHeading;
