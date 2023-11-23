const ProductItemPage = ({ 
    params,
} : {
    params: { productId : string }
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
        <h1 className="text-white font-medium text-xl">Product ID: {params.productId}</h1>
    </div>
  )
}

export default ProductItemPage