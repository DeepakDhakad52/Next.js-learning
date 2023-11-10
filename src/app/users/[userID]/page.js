import getUser from "../../../../services/getUser"

const page = async (props) => {

    const getUserList = getUser();
    const users = await getUserList;
    const currentID = props.params.userID;
    const userData = users[currentID - 1];
    // console.log(userData);

    return (
        <main className=" min-h-screen px-24 py-4">
            <h1 className="text-center text-bold text-5xl">User Details Page</h1>
            <h4>ID : {userData.id}</h4>
            <h4>Name : {userData.name}</h4>
            <h4>Website : {userData.website}</h4>
        </main>
    )
}

export async function generateStaticParams(){
    const getUserList = getUser();
    const users = await getUserList;
    return users.map(user=>{
        userID: user.id.toString()
    })
}

export default page
