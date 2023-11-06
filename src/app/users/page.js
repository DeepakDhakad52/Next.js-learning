
const userList = async () => {
    let data = await fetch('https://dummyjson.com/users');
    data = await data.json();
    return data.users;
}

const Users = async () => {
    let users = await userList();
    // console.log(users);

    return (
        <main className=" min-h-screen px-24 py-4">
            <h1 className="text-center text-bold text-5xl">User List</h1> <br />
            {
                users.map((user) => <h3 key={user.id} >User Name : {user.firstName}</h3> )
            }
        </main>
    )
}

export default Users
