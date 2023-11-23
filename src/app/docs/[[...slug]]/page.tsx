
const DocsPage = ({
    params,
} : {
    params : {
        slug : string[];
    };
}) => {
    if (params.slug?.length === 2) {     // http://localhost:3000/docs/course1/chapter1
        return (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
                <h1 className="text-white font-medium text-xl my-2">
                    Course: {params.slug[0]}
                </h1>
                <h1 className="text-blue-200 font-medium text-xl my-2">
                    Chapter: {params.slug[1]}
                </h1>
            </div>
        )
    } else if (params.slug?.length === 1) {      // http://localhost:3000/docs/course1
        return (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
                <h1 className="text-white font-medium text-xl my-2">
                    Course: {params.slug[0]}
                </h1>
            </div>
        )
    }
    // http://localhost:3000/docs OR http://localhost:3000/docs/course1/chapter1/example1....
    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full">
            <h1 className="text-white font-medium text-xl my-2">
                Docs Home Page
            </h1>
        </div>
    )
}

export default DocsPage