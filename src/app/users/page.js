import Link from "next/link";
import getUser from "../../../services/getUser"

const page = async () => {
    const getUserList = getUser();
    const users = await getUserList;
    return (
        <main className=" min-h-screen px-24 py-4">
            <h1 className="text-center text-bold text-5xl">User List</h1>
            {
                users.map(user =>
                    <h2 key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h2>)
            }
        </main>
    )
}

export default page
