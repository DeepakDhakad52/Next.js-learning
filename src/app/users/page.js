import { redirect } from "next/navigation"


const page = async () => {
    redirect('/')
    return (
        <main className=" min-h-screen px-24 py-4">
            <h1 className="text-center text-bold text-5xl">User Page</h1>
        </main>
    )
}

export default page
