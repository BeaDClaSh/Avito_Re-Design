"use client";

import React, {useEffect, useState} from "react";
import AnimatedBackground from "@/Components/AnimatedBackground";
import Menu from "@/Components/Menu";
import BackTable from "@/Components/Item/BackTable/comp-446";
import SplitText from "@/Components/SplitText";
import ItemDetails from "@/Components/Item/Item Details/ItemDetails";

interface ItemData {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
    sellerId: string;
    localisation: string;
    status: "new" | "old" | "good";
}

interface ItemPageProps {
    params: {
        itemId: string;
    };
}

const shortcuts = {
    API_URL: "https://example.com/api",
    GetItems: "/items/get/",
};

const Loader = () => {
    return (
        <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
        </div>
    );
};

const ItemPage: React.FC<ItemPageProps> = ({ params }) => {
    const { itemId } = params;
    const [itemData, setItemData] = useState<ItemData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGetItem = async (itemId: string) => {
        try {
            const response = await fetch(`${shortcuts.API_URL}${shortcuts.GetItems}${itemId}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data: ItemData = await response.json();
            setItemData(data);
        } catch (err) {
            console.error("Failed to fetch data:", err);
            setError("Unable to fetch data.");
        }
    };

    useEffect(() => {
        handleGetItem(itemId);
    }, [itemId]);

    return (
        <>
            <AnimatedBackground />
            <Menu />
            <div className="grid pt-16 sm:pt-20 md:pt-20">
                <div className="flex">
                    <BackTable />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 grid-rows-2 md:grid-rows-1 lg:grid-rows-1 md:h-full lg:h-full">
                    <div className="text-gray-600 text-2xl">
                        <h1>
                            Buy {itemData ? <SplitText text={itemData.name} /> : <Loader />}
                        </h1>
                    </div>
                    <div>
                        {error && <SplitText className="text-2xl text-red-600" text={error} />}

                        {itemData ? (
                            <ItemDetails ItemData={itemData} />
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemPage;
