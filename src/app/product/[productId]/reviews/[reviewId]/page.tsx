
const ProductReviewPage = ({ 
    params 
} : {
    params: {
        productId: string;
        reviewId: string;
    }
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
        <h1 className="text-white font-medium text-xl my-2">
            Product ID: {params.productId}
        </h1>
        <h1 className="text-blue-200 font-medium text-xl my-2">
            Review ID: {params.reviewId}
        </h1>
    </div>
  )
}

export default ProductReviewPage