import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: "/old-route",
                destination: "/new-route",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',  // Разрешаем только этот домен
                pathname: '/**',       // Разрешаем все изображения на этом домене
            },
        ],
    },
    experimental: {
        optimizeCss: true,  // Включаем оптимизацию CSS
    },
};

export default nextConfig;
