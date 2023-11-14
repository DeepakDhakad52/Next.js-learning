import Link from "next/link";

export async function getUsers() {
    let data = await fetch('http://localhost:3000/api/users');
    data = data.json();
    return data;
}

export default async function Users() {
    let userList = await getUsers();
    // console.log(userList);
    return (
        <main className=" min-h-screen px-24 py-4">
            <h1 className="text-center text-bold text-5xl mt-5">User List</h1>
            <table className="text-center mx-auto my-8">
                <tr>
                    <th className="text-center">Username</th>
                    <th className="text-center">Age</th>
                    <th className="text-center">City</th>
                    <th className="text-center">Email</th>
                    <th className="text-center"></th>
                </tr>
                {
                    userList.map(user =>
                        <tr key={user.id}>
                            <td className="text-center"><Link href={`http://localhost:3000/users/${user.id}`}>{user.fullName}</Link></td>
                            <td className="text-center">{user.age}</td>
                            <td className="text-center">{user.city}</td>
                            <td className="text-center">{user.email}</td>
                            <td className="text-center"><Link href={`/users/${user.id}/update`}>Edit</Link></td>
                        </tr>
                    )
                }
            </table>

        </main>
    )
}

