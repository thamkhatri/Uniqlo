type Product = {
    id: string;
    title: string;
    price: number;
    img_url: string;
}
export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <img className="border p-4 rounded" src="/imges/item1.jpg" alt="" />
            <h3>{product.title}</h3>
            <p>Rs{product.price}</p>
            <button>ADD TO CART</button>
        </div>
    )
}