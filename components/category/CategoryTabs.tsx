"use client";

type Category = "women" | "men" | "beauty";

type Props = {
    active: Category;
    onChange: (category: Category) => void;
};

export default function CategoryTabs({ active, onChange }: Props) {
    const categories: Category[] = ["women", "men", "beauty"];

    return (
        <div className="flex gap-6 mb-6">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`capitalize font-medium pb-2 border-b-2 ${active === cat
                            ? "border-black text-black"
                            : "border-transparent text-gray-500"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
