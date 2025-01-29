"use client"
import React, {useCallback, useEffect, useState} from "react";
import AnimatedBackground from "@/Components/AnimatedBackground";
import Menu from "@/Components/Menu";
import CopyRights from "@/Components/CopyRights";

const shortcuts = {
    API_URL: "https://your-api-url.com", // Укажите свой API URL
    getPosts: "/getPosts",
};

const ForU: React.FC = () => {
    const [posts, setPosts] = useState<string[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const limit = 16;

    // Обернул fetchPosts в useCallback
    const fetchPosts = useCallback(async () => {
        const userid = localStorage.getItem("userid");
        if (!userid) {
            console.warn("User ID is missing");
            return;
        }

        try {
            const response = await fetch(
                `${shortcuts.API_URL}${shortcuts.getPosts}?userid=${userid}&limit=${limit}&page=${page}`,
                { method: "GET" }
            );

            if (!response.ok) {
                console.error("Error fetching posts:", response.status);
                return;
            }

            const data = await response.json();
            if (data.length < limit) setHasMore(false);
            setPosts(prevPosts => [...prevPosts, ...data]);
        } catch (error) {
            console.error("Error during fetching posts:", error);
        }
    }, [page, limit]);

    useEffect(() => {
        fetchPosts().then(r => console.log(r + "error"));
    }, [fetchPosts]);

    const loadMorePosts = () => {
        if (hasMore) setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <Menu />
            <AnimatedBackground />
            <div className="pt-8">
                <div>
                    {posts.length > 0 ? (
                        posts.map((post, index) => <div key={index}>{post}</div>)
                    ) : (
                        <p>Нет доступных постов</p>
                    )}
                </div>
                {hasMore && (
                    <button
                        onClick={loadMorePosts}
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                    >
                        Загрузить ещё
                    </button>
                )}
                <CopyRights />
            </div>
        </>
    );
};

export default ForU;
