import Link from "next/link";
import React, { useEffect, useState } from "react";

const CourseHeader = () => {
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
      title: "About us",
      link: "#speakers",
    },
    {
      title: "Sponsors",
      link: "#sponsors",
    },
  ];
  return (
    <nav
      className={`w-screen px-5 md:px-7 py-3 flex fixed top-5 z-50 font-aber justify-between ${show} transition-transform duration-300`}
    >
      <Link className="uppercase outline-none cursor-pointer" href={"/"}>
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

export default CourseHeader;
