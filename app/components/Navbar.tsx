import Link from 'next/link'
import React from 'react'

const menu = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ];

export const Navbar = () => {
  return (
    <nav className="bg-zinc-900 rounded-2xl px-8 py-[18px] sm:px-4 sm:fixed sm:bottom-0 sm:left-0 sm:w-full sm:rounded-none sm:z-40">
    <ul className="flex items-center gap-11 sm:justify-between sm:gap-0 text-white/70 ">
      {menu.map((item) => (
        <li
          key={item.label}
          className={"hover:text-white hover:font-bold"}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
  )
}
