import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

type LessonHeaderProps = {
  menuTitle: string;
  menuLink: {
    title: string;
    link: string;
    isActive: boolean;
  }[];
};

const LessonHeader = ({ menuTitle, menuLink }: LessonHeaderProps) => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  const headers: { title: string; link: string }[] = [
    {
      title: "Ask Question",
      link: "#speakers",
    },
  ];
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav
      className={`w-screen py-5 bg-white/[0.5] px-5 fixed top-0 flex z-50 font-aber justify-between ${show} transition-transform duration-300`}
    >
      <RiMenu2Fill
        className="text-xl relative cursor-pointer"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />

      <div
        className={` flex flex-col p-5 fixed top-12 bg-[#414141] w-[40vw] h-[80vh] transition-transform duration-300 ${
          showMenu ? "translate-x-2" : "-translate-x-full -left-10"
        }`}
      >
        <section className="flex justify-between mb-4">
          <h2 className="text-2xl">{menuTitle}</h2>
          <RiCloseFill
            size={24}
            className="text-xl relative cursor-pointer"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </section>
        <ol className="overflow-y-scroll flex flex-col font-raleway text-lg overflow-x-hidden ">
          {menuLink.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className={` ${
                link.isActive ? "text-[#628ff7]" : ""
              } hover:translate-x-2 transition-transform duration-300 border-t py-3`}
            >
              {link.title}
            </Link>
          ))}
        </ol>
      </div>

      <Link
        className="uppercase outline-none cursor-pointer text-xl"
        href={"/"}
      >
        Tour de Cadance
      </Link>
      <section className="flex">
        {headers.map((link) => (
          <Link href={link.link} className="mx-5" scroll key={link.title}>
            {link.title}
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default LessonHeader;
