import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TProduct } from "@repo/types/dist/types/product";

export default function ProductComponent({ product }: { product: TProduct }) {
  return (
    <Card className="w-52 h-52 bg-purple-100 p-4">
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
    </Card>
  );
}
