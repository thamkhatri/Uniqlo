"use client";

export default function CategoryPage({
    category,
    title,
}: {
    category: "women" | "men" | "beauty";
    title: string;
}) {
    return <div>{title}</div>;
}
