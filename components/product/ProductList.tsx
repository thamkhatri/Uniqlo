import ProductCard from "./ ProductCard";

interface Product {
    id: string;
    title: string;
    price: number;
    img_url: string;

}
interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="grid grid-cols-3 gap-6">
            {products.map((p) => (<ProductCard key={p.id} product={p} />))}
        </div>
    )

}