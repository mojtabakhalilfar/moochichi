// "use client";
// import React, { useEffect, useState } from "react";
// import BlogInBlogs from "./BlogInBlogs";
// import { TBlogs } from "@/types/Type";
// import axios from "axios";


// const Blogs = () => {

    
//     const[allArticles , setAllArticles]=useState<TBlogs[]>()
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(8);
//     const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//     useEffect(()=>{
//                 axios("http://localhost:8000/blogs").then((result)=>{
//         setAllArticles(result.data)
//         console.log(allArticles)
//     })
//     },[])

//     // const allArticles: TBlogs[] = [
//     //     { id: 1, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 2, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
//     //     { id: 3, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
//     //     { id: 4, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 5, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
//     //     { id: 6, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
//     //     { id: 7, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 8, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
//     //     { id: 9, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 17, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 10, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
//     //     { id: 11, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
//     //     { id: 12, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 13, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
//     //     { id: 14, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
//     //     { id: 15, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
//     //     { id: 16, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
//     // ]

//     useEffect(() => {
//         const handleResize = () => {
//             const mobile = window.innerWidth < 768;
//             setItemsPerPage(mobile ? 4 : 8);
//             setCurrentPage(1); // ریست هنگام تغییر سایز
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const totalPages = Math.ceil(allArticles.length / itemsPerPage);

//     const visibleArticles = allArticles.slice(0, currentPage * itemsPerPage);

//     const handleShowMore = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage((prev) => prev + 1);
//         }
//     };

//     const handleShowLess = () => {
//         if (currentPage > 1) {
//             setCurrentPage((prev) => prev - 1);
//         }
//     };

//     const handleShowSelected = (page: number) => {
//         setCurrentPage(page);
//     };

//     return (
//         <div className="flex flex-col items-start w-full">
//             <h2 className="text-2xl font-bold text-[#100e0c] my-4">تازه ترین مقاله</h2>
//             <div className="w-full">
//                 <div className="flex flex-col sm:grid grid-cols-4 gap-4 w-full">
//                     {visibleArticles.slice(
//                         isMobile ? 0 : (currentPage - 1) * itemsPerPage,
//                         isMobile ? visibleArticles.length : currentPage * itemsPerPage
//                     ).map((item) => (
//                         <BlogInBlogs
//                             alt={item.title}
//                             id={item.id}
//                             src={item.image}
//                             tags={item.tags}
//                             title={item.title}
//                             key={item.id}
//                         />
//                     ))}
//                 </div>

//                 {/* موبایل: دکمه مشاهده بیشتر */}
//                 {isMobile && currentPage < totalPages && (
//                     <div className="flex items-center justify-center w-full mt-4">
//                         <button
//                             onClick={handleShowMore}
//                             className="w-[179px] h-11 rounded-[43px] bg-[#ff6687] font-semibold text-[16px] text-white"
//                         >
//                             مشاهده بیشتر
//                         </button>
//                     </div>
//                 )}

//                 {/* دسکتاپ: صفحه بندی */}
//                 {!isMobile && (
//                     <div className="hidden sm:flex flex-row-reverse justify-center space-x-2 space-x-reverse w-full my-4">
//                         <button
//                             onClick={handleShowLess}
//                             className="w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center"
//                         >
//                             <img
//                                 className="w-4 h-4"
//                                 src="/assets/icons/arrow-left.png"
//                                 alt=""
//                             />
//                         </button>
//                         {Array.from({ length: totalPages }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handleShowSelected(index + 1)}
//                                 className={`w-10 h-10 rounded-[40px] opacity-30 border flex items-center justify-center 
//                 ${index + 1 === currentPage
//                                         ? "border-[#ff6687] bg-[#e0aab5] text-[#ff6687]"
//                                         : "border-[#100e0c]"
//                                     }`}
//                             >
//                                 <span className="w-4 h-4">{index + 1}</span>
//                             </button>
//                         ))}
//                         <button
//                             onClick={handleShowMore}
//                             className="w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center"
//                         >
//                             <img
//                                 className="w-4 h-4 rotate-180"
//                                 src="/assets/icons/arrow-left.png"
//                                 alt=""
//                             />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Blogs;

"use client";
import React, { useEffect, useState } from "react";
import BlogInBlogs from "./BlogInBlogs";
import { TBlogs } from "@/types/Type";
import axios from "axios";

const Blogs = () => {
    const [allArticles, setAllArticles] = useState<TBlogs[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [isMobile, setIsMobile] = useState(false);

    // گرفتن داده‌ها از سرور فقط یک بار
    useEffect(() => {
        axios.get("http://localhost:8000/blogs")
            .then((result) => {
                setAllArticles(result.data);
            })
            .catch((err) => {
                console.error("خطا در گرفتن داده‌ها:", err);
            });
    }, []);

    // کنترل اندازه صفحه و تعیین تعداد آیتم‌ها
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setItemsPerPage(mobile ? 4 : 8);
            setIsMobile(mobile);
            setCurrentPage(1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(allArticles.length / itemsPerPage);
    const visibleArticles = allArticles.slice(0, currentPage * itemsPerPage);

    const handleShowMore = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handleShowLess = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleShowSelected = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl font-bold text-[#100e0c] my-4">تازه ترین مقاله</h2>
            <div className="w-full">
                <div className="flex flex-col sm:grid grid-cols-4 gap-4 w-full">
                    {visibleArticles.slice(
                        isMobile ? 0 : (currentPage - 1) * itemsPerPage,
                        isMobile ? visibleArticles.length : currentPage * itemsPerPage
                    ).map((item) => (
                        <BlogInBlogs
                            alt={item.title}
                            id={item.id}
                            src={item.image}
                            tags={item.tags}
                            title={item.title}
                            key={item.id}
                        />
                    ))}
                </div>

                {/* موبایل: دکمه مشاهده بیشتر */}
                {isMobile && currentPage < totalPages && (
                    <div className="flex items-center justify-center w-full mt-4">
                        <button
                            onClick={handleShowMore}
                            className="w-[179px] h-11 rounded-[43px] bg-[#ff6687] font-semibold text-[16px] text-white"
                        >
                            مشاهده بیشتر
                        </button>
                    </div>
                )}

                {/* دسکتاپ: صفحه‌بندی */}
                {!isMobile && (
                    <div className="hidden sm:flex flex-row-reverse justify-center space-x-2 space-x-reverse w-full my-4">
                        <button
                            onClick={handleShowLess}
                            className="w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center"
                        >
                            <img className="w-4 h-4" src="/assets/icons/arrow-left.png" alt="" />
                        </button>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleShowSelected(index + 1)}
                                className={`w-10 h-10 rounded-[40px] opacity-30 border flex items-center justify-center 
                                ${index + 1 === currentPage
                                        ? "border-[#ff6687] bg-[#e0aab5] text-[#ff6687]"
                                        : "border-[#100e0c]"
                                    }`}
                            >
                                <span className="w-4 h-4">{index + 1}</span>
                            </button>
                        ))}
                        <button
                            onClick={handleShowMore}
                            className="w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center"
                        >
                            <img className="w-4 h-4 rotate-180" src="/assets/icons/arrow-left.png" alt="" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
