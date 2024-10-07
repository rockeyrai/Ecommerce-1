"use client";
import { useState, useEffect } from "react";
import {
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
  Input,
  Dropdown,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import { TiShoppingCart } from "react-icons/ti";

export default function CustomNavbar() {
  const [showSubNav, setShowSubNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, hide sub navbar
      setShowSubNav(false);
    } else {
      // If scrolling up, show sub navbar
      setShowSubNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Fixed Main Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#AEE1EC] flex items-center h-16 justify-between px-5 z-50">
        <div className="flex gap-20 justify-center items-center">
          <div className="flex justify-center items-center gap-1">
            <Link href="http://localhost:3000/">
              <img
                className="w-10 h-10"
                src="../ice-berg.png"
                alt="FrozeUP logo"
              />
            </Link>
            <h1 className="text-2xl font-bold">
              <Link className="text-black" href="http://localhost:3000/">
                {" "}
                FrozeUP
              </Link>
            </h1>
          </div>
        </div>
        <Input
          className="lg:w-96 "
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <div className="flex justify-center items-center gap-2 mr-5">
          <TiShoppingCart className="mx-2 h-9 rounded w-9 p-1 hover:bg-orange-500" />
          <Button
            className="bg-black text-white"
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
          >
            Sign in
          </Button>
        </div>
      </div>

      {/* Sub Navbar (hide on scroll down) */}
      {showSubNav && (
        <div className=" border-t-1 border-gray-200 bg-[#AEE1EC] fixed top-16 left-0 w-full  shadow z-40 transition-transform duration-300">
          <div className="flex justify-start font-bold ml-40 items-center text-[11px] h-6 gap-2">
            <Dropdown>
              <DropdownTrigger>
                <p
                  className="text-[11px] hover:underline hover:cursor-pointer w-auto bg-transparent"
                  disableRipple
                >
                  Category
                </p>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => alert(key)}
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <p
              onClick={() => alert("new offer ")}
              className="hover:underline hover:cursor-pointer"
              disableRipple
            >
              New Offer
            </p>
            <p className="hover:underline hover:cursor-pointer" disableRipple>
              Help & Support
            </p>
          </div>
        </div>
      )}

      {/* Content below navbar */}
      <div className="h-[88px] w-full bg-[#AEE1EC]">
        {/* Your page content goes here */}
      </div>
    </div>
  );
}
