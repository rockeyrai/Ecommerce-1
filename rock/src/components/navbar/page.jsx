'use client'
import {Button,Link,Navbar,  ButtonGroup} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon.jsx";
import { Input} from "@nextui-org/react";

const CustomNavbar=()=> {
  return (
  
      <Navbar  shouldHideOnScroll maxWidth="full" className="flex justify-between h-[70px] bg-black items-center">
        <div className=" rounded bg-cover m-5 flex items-center gap-3 " >
          <img src="/DSCN1806.jpg" className=" rounded-full w-11 h-11" alt="logo"/>
          <h4 className="  text-xl font-bold text-white">Rockey</h4>
        </div>
        <div>
          <ui className='flex list-none gap-4 items-center text-white '>
                 
          <Link className="text-white hover:underline cursor-pointer"> Today's Delas</Link>
          <Link className="text-white hover:underline cursor-pointer "> Register</Link>
          <Link className="text-white hover:underline cursor-pointer"> Customer Service</Link>
          <Link className="text-white hover:underline cursor-pointer"> Sell</Link>
          </ui>
        </div>
        <div className="flex items-center gap-5">
          <div>
          <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
          </div>
          <div>
            <Button radius="full" className="bg-gradient-to-tr m-5 from-pink-500 to-yellow-500 text-white shadow-lg">
              Sign in
            </Button>
          </div>
        </div>
      </Navbar>
  )
}

export default CustomNavbar;
