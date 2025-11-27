import CreateProductForm from "../../../components/forms/create-product";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-2xl font-bold ">Create Product</h1>
      <CreateProductForm />
    </div>
  );
}
