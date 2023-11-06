import Product from "./Product";

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
                products.map((item) =>
                    <div className="flex justify-between my-2">
                        <h3 key={item.title}>Name : {item.title}</h3>
                        <Product title={item.title} price={item.price} />
                    </div>)
            }

        </main>
    )
}

export const generateMetadata = () => {
    return {
        title : 'Product List',
        description: 'This is Product List'
    }
}

export default page
