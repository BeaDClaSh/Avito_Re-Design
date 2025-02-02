"use client";
import React, {useCallback, useEffect, useState} from "react";
import Link from "next/link";

const API_CONFIG = {
    BASE_URL: "https://jsonplaceholder.typicode.com",
    ENDPOINTS: {
        POSTS: "/posts",
    },
    PAGINATION: {
        LIMIT: 10,
    },
};

interface Post {
    id: number;
    title: string;
    body: string;
}

const ForU: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.POSTS}?_page=${page}&_limit=${API_CONFIG.PAGINATION.LIMIT}`
            );

            if (!response.ok) {
               new Error("Error during load posts");
            }

            const data: Post[] = await response.json();

            setPosts((prevPosts) => {
                const newPosts = data.filter(
                    (newPost) => !prevPosts.some((prevPost) => prevPost.id === newPost.id)
                );
                return [...prevPosts, ...newPosts];
            });

            setHasMore(data.length === API_CONFIG.PAGINATION.LIMIT);
        } catch (error) {
            setError("Unavailable load posts");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchPosts().catch((error) => {
            console.error("Fetch error:", error);
        });
    }, [fetchPosts]);

    const loadMorePosts = () => {
        if (hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <>
            <div className="pt-16 z-10">
                <div className="text-gray-400">
                    <p className="pl-4 text-2xl">Recommendations:</p>
                </div>
                <div className="space-y-4 z-50">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div
                                key={post.id}
                                className="p-4 bg-white rounded-lg shadow-md"
                            >
                                <h2 className="text-xl font-bold">{post.title}</h2>
                                <p className="text-gray-600">{post.body}</p>
                                <div className="flex text-blue-700 justify-end">
                                    <Link
                                        href={`/Item/${post.id}`}
                                        className="relative z-10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        See details
                                    </Link>                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No available posts</p>
                    )}
                </div>

                {hasMore && (
                    <button
                        onClick={loadMorePosts}
                        disabled={isLoading}
                        className={`mt-4 p-2 px-6 ${
                            isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                        } text-white rounded-lg transition-all duration-200 shadow-md ${
                            !isLoading && "hover:shadow-lg"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative z-20`}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/>
                                Загрузка...
                            </div>
                        ) : (
                            "Загрузить ещё"
                        )}
                    </button>
                )}

                {error && (
                    <p className="text-red-500 mt-4 p-4 bg-red-100 rounded-lg">
                        {error}
                    </p>
                )}
            </div>
        </>
    );
};

export default ForU;