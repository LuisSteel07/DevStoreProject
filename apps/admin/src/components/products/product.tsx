import { TProduct } from "@repo/types/dist/types/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ProductComponent({ product }: { product: TProduct }) {
  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between p-2">
          <p className="font-bold">${product.price}</p>
          <p>${product.amount}</p>
        </div>
      </CardContent>
    </Card>
  );
}
