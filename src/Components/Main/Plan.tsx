import React from "react";

interface PlansProps {
    Title: string;
    benefits: string[];
}

const Plans: React.FC<PlansProps> = ({ Title, benefits }) => {
    return (
        <form>
            <label>{Title}</label>
            <ul>
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </form>
    );
};

export default Plans;
