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
    <nav className="flex flex-row justify-between items-center p-4 bg-purple-800">
      <h1 className="text-2xl text-white font-bold">Administrator</h1>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Product</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Products Methods</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex flex-col gap-2 justify-start">
                <Link
                  href={"/product/insert"}
                  className="flex flex-row gap-2 items-center"
                >
                  <IconNewSection />
                  <p>Create Product</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="flex flex-row gap-2 items-center">
                  <IconViewfinder />
                  <p>View All</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
