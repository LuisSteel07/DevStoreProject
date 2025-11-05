import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { DeleteIcon, PencilIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DeleteProduct } from "@/src/lib/api/delete-product";
import { TCompProduct } from "@/src/types/TCompProduct";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function ProductComponent({
  product,
}: {
  product: TCompProduct;
}) {
  return (
    <Card className="w-60 h-60 bg-purple-100 p-4">
      <CardHeader className="">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description.slice(0, 40)}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="flex flex-row justify-between p-2">
          <p className="font-bold">${product.price}</p>
          <p>${product.amount}</p>
        </div>
      </CardContent>
      <CardAction className="ml-4 flex flex-row gap-8">
        <Tooltip>
          <TooltipTrigger>
            <Link href={`/product/update/${product.id}`}>
              <Button>
                <PencilIcon />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit the product</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button onClick={async () => await DeleteProduct(product.id)}>
              <DeleteIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete the product</p>
          </TooltipContent>
        </Tooltip>
      </CardAction>
    </Card>
  );
}
