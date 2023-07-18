import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  title: string;
  description: { info: string }[];
  image: string;
  link: string;
  btnText: string;
};

const CourseCard = ({
  title,
  description,
  image,
  link,
  btnText,
}: CourseCardProps) => {
  return (
    <div className="group bg-[url(/noise.png)] relative rounded-xl z-20 w-[22vw] min-h-[40vh] hover:scale-95 transition-transform duration-300 border cursor-pointer">
      <section className="bg-white rounded-xl w-full h-full absolute -bottom-2 -right-2 -z-10 group-hover:-bottom-1 group-hover:-right-1 transition-transform duration-700" />
      <section className="bg-[#020614] rounded-xl w-full h-full absolute top-0 -z-10" />
      <div className="flex flex-col p-3 py-5 text-center justify-center items-center">
        <Image
          src={image}
          alt="icon"
          width={500}
          height={500}
          className="bg-white w-20 rounded-2xl p-2 mx-auto text-red-200"
        />
        <h2 className="font-aber mt-4 text-lg ">{title}</h2>
        <ul className="text-left my-3 pl-4">
          {description.map((desc) => (
            <li className="font-raleway list-disc" key={desc.info}>
              {desc.info}
            </li>
          ))}
        </ul>
        <Link
          className="bg-white outline-none text-black p-2 min-w-fit w-[50%] mx-auto my-2 hover:scale-95 transition-transform duration-300 "
          href={link}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
