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

export default function ProductComponent({
  product,
}: {
  product: TCompProduct;
}) {
  return (
    <Card className="w-60 h-60 bg-purple-100">
      <CardHeader className="h-10">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description.slice(0, 40)}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="flex flex-row justify-between p-2">
          <p className="font-bold">${product.price}</p>
          <p>${product.amount}</p>
        </div>
      </CardContent>
      <CardAction className="p-4 flex flex-row gap-8">
        <Link
          href={`/product/update/${product.id}`}
          className="p-1 hover:bg-purple-300 hover:transition-all hover:duration-100 hover:scale-110 hover:shadow-inner rounded-md "
        >
          <PencilIcon />
        </Link>
        <Button onClick={async () => await DeleteProduct(product.id)}>
          <DeleteIcon />
        </Button>
      </CardAction>
    </Card>
  );
}
