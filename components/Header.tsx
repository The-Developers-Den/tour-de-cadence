import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
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
      title: "Why Cadence",
      link: "#cadence",
    },
    {
      title: "About Us",
      link: "#about",
    },
    {
      title: "Contact Us",
      link: "#footer",
    },
  ];
  return (
    <nav
      className={`w-screen px-5 md:px-7 py-3 flex fixed top-5 z-50 font-aber justify-between ${show} transition-transform duration-300`}
    >
      <section className="flex">
        {headers.map((link) => (
          <Link href={link.link} className="mx-5" scroll key={link.title}>
            {link.title}
          </Link>
        ))}
      </section>
      <Link
        href={"/courses"}
        className="uppercase outmine-none border-white/[0.8] border px-5 py-3 transition-transform duration-300 hover:scale-95 cursor-pointer"
      >
        Start exploring
      </Link>
    </nav>
  );
};

export default Header;
