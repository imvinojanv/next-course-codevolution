import { Metadata } from "next";

type ItemProps = {
  params: { 
    productId : string;
  }
}

/////// Export Dynamic generateMetadata function

// export const generateMetadata = ({ params }: ItemProps): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   }
// }

export const generateMetadata = async ({ 
  params 
}: ItemProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  }
}

const ProductItemPage = ({ 
  params,
} : ItemProps ) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
        <h1 className="text-white font-medium text-xl">Product ID: {params.productId}</h1>
    </div>
  )
}

export default ProductItemPage