"use client";
import {usePathname} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import Loader from "@/Components/Loader";

const BuyProduct = () => {
    const pathname = usePathname();
    const productId = pathname.split("/").pop(); //gets id from path
    const [productData, setProductData] = useState(null);

    const fetchProductData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5000/products/${productId}`, {
                method: "GET",
            });

            if (!response.ok) {
                new Error(`Ошибка загрузки: ${response.status}`);
            }

            const data = await response.json();
            setProductData(data);
        } catch (error) {
            console.error("Ошибка получения данных продукта:", error);
        }
    }, [productId]);    

    useEffect(() => {
        if (productId) {
            fetchProductData().then((r) => console.log(`Trying to fetch ${productId}: `, r));
        }
    }, [productId, fetchProductData]);

    return (
        <div className="pt-8 gap-4 bg-gradient-to-r from-blue-300 to-pink-500">
            {productData ? (
                <div>
                    <h1>Product Data:</h1>
                    <pre>{JSON.stringify(productData, null, 2)}</pre>
                </div>
            ) : (
                <div className="min-h-screen min-w-full">
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default BuyProduct;
