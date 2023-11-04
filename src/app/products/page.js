async function productList() {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;
}
async function page() {
    let products = await productList();

  return (
    <main className=" min-h-screen px-24 py-4">
      <h1 className="text-center text-bold text-5xl">Product List</h1> <br />
      {
        products.map((item) => <h3 key={item.title}>Name : {item.title}</h3>)
      }
      
    </main>
  )
}

export default page
