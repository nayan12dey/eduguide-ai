"use client";

import React, { useState, useEffect } from "react";
import {
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { Sun, Moon, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar({ isLoggedIn = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loggedOutRoutes = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
  ];

  const loggedInRoutes = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Progress", path: "/progress" },
    { name: "Add Item", path: "/add" },
    { name: "Manage Items", path: "/manage" },
  ];

  const routes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  return (
    /* বাইরের হেডারটি এখন সবসময় সম্পূর্ণ ট্রান্সপারেন্ট থাকবে */
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* গ্লাস মরফিজম ইফেক্টটি এখন শুধুমাত্র এই নববারের বডির ভেতরেই সীমাবদ্ধ থাকবে */}
        <div
          className={`relative flex h-14 items-center justify-between rounded-full border px-6 transition-all duration-500 ${scrolled
              ? "bg-slate-950/65 border-slate-700/50 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.08)]"
              : "bg-slate-900/40 border-slate-800/40 backdrop-blur-xl shadow-sm"
            }`}
        >

          {/* Internal Premium Glow System */}
          <div className="absolute inset-0 -z-10 rounded-full opacity-70 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]" />

          {/* Left Block: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-[1px] transition-all duration-500 group-hover:border-indigo-500/50 shadow-md">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-indigo-500/20 to-teal-500/20 blur-sm transition-opacity duration-500" />
                <Sparkles className="w-4 h-4 text-teal-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <span className="font-bold text-white tracking-tight text-lg transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-teal-400">
                EduGuide
              </span>
            </Link>
          </div>

          {/* Central Block: Sliding Nav Links */}
          <nav className="hidden md:flex items-center gap-0.5 bg-slate-950/50 border border-slate-800/50 rounded-full p-1.5 relative">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onMouseEnter={() => setHoveredPath(route.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 select-none ${isActive ? "text-teal-400" : "text-slate-400 hover:text-white"
                    }`}
                >
                  {hoveredPath === route.path && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-slate-800/40 border border-slate-700/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {isActive && !hoveredPath && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-slate-800/60 border border-slate-700/40 rounded-full -z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {route.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Block: Actions */}
          <div className="flex items-center gap-3.5">
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsDark(!isDark)}
              className="text-slate-400 hover:text-white rounded-full hover:bg-slate-800/40 transition-all border border-transparent hover:border-slate-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </Button>

            {isLoggedIn ? (
              <Dropdown placement="bottom-end" className="bg-slate-950 text-slate-200 border border-slate-800/80 backdrop-blur-2xl rounded-2xl p-1">
                <DropdownTrigger>
                  <button className="flex items-center justify-center rounded-full p-[1px] border border-slate-800 bg-slate-900 hover:border-indigo-500/60 transition-all duration-300 focus:outline-none shadow-md">
                    <Avatar
                      className="w-7 h-7"
                      name="User Profile"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Configurations" variant="flat" className="p-1">
                  <DropdownItem key="profile" className="h-14 gap-2 text-slate-200 bg-slate-900/30 rounded-xl border border-slate-900/40 mb-1">
                    <p className="font-medium text-[10px] text-slate-500 uppercase tracking-wider">Identity</p>
                    <p className="font-semibold text-teal-400 text-xs truncate">developer@eduguide.ai</p>
                  </DropdownItem>
                  <DropdownItem key="settings" className="text-slate-300 hover:bg-slate-900 rounded-xl text-xs font-medium">My Settings</DropdownItem>
                  <DropdownItem key="logout" color="danger" className="text-red-400 hover:bg-red-500/10 rounded-xl text-xs font-medium">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                as={Link}
                href="/login"
                className="bg-white text-slate-950 hover:bg-slate-100 font-bold rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hidden sm:inline-flex px-5 h-9 text-xs tracking-wide border-0"
              >
                <span className="flex items-center justify-center h-full w-full">
                  Get Started
                </span>
              </Button>
            )}

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center justify-center w-8 h-8 md:hidden text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-4 h-[1.5px] bg-current rounded-full transition-transform duration-300 ${isMenuOpen ? "transform rotate-45 translate-y-[3.5px]" : "-translate-y-0.5"}`} />
              <span className={`block w-4 h-[1.5px] bg-current rounded-full my-0.5 transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-4 h-[1.5px] bg-current rounded-full transition-transform duration-300 ${isMenuOpen ? "transform -rotate-45 -translate-y-[3.5px]" : "translate-y-0.5"}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Glassmorphic Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 z-50 p-3 bg-slate-950/85 border border-slate-800/80 rounded-2xl backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex flex-col gap-1">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`block px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${isActive
                      ? "text-teal-400 bg-slate-900/80 border-slate-800 shadow-inner"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/30 border-transparent"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              );
            })}
            {!isLoggedIn && (
              <Button
                as={Link}
                href="/login"
                className="w-full mt-2 bg-white text-slate-950 font-bold rounded-xl h-10 text-xs shadow-md border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center h-full w-full">
                  Get Started
                </span>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;