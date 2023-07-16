import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

const LessonHeader = () => {
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
  return (
    <nav
      className={`w-screen py-5 bg-white/[0.5] px-5 fixed top-0 flex z-50 font-aber justify-between ${show} transition-transform duration-300`}
    >
      <RiMenu2Fill className="text-xl" />
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
