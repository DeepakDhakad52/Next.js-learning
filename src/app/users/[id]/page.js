async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data[0];
}

async function UserID({ params }) {
    // console.log(params.id);
    let user = await getUser(params.id);
    // console.log(user);
    return (
        <main className=" min-h-screen px-24 py-4">
            <h1 className="text-center text-bold text-5xl">User Details</h1>
            <table className="text-center mx-auto my-8">
                <tr>
                    <th className="text-center">Username</th>
                    <th className="text-center">Age</th>
                    <th className="text-center">City</th>
                    <th className="text-center">Email</th>
                </tr>
                <tr>
                    <td className="text-center">{user.fullName}</td>
                    <td className="text-center">{user.age}</td>
                    <td className="text-center">{user.city}</td>
                    <td className="text-center">{user.email}</td>
                </tr>
            </table>
        </main>
    )
}

export default UserID
