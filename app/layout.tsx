export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <h1>Shop</h1>
      <div className="felx gap-4">
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>

      </div>
    </nav>
  )
}