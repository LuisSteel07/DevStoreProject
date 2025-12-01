import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { IconNewSection, IconViewfinder } from "@tabler/icons-react";

export const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-4 bg-indigo-800">
      <h1 className="text-2xl text-white font-bold">DevStore</h1>
      <div className="flex justify-evenly items-center gap-8 ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Account</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Account Methods</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/"} className="flex flex-row gap-2 items-center">
                  <IconNewSection />
                  <p>Sign in</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="flex flex-row gap-2 items-center">
                  <IconViewfinder />
                  <p>Sign up</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
