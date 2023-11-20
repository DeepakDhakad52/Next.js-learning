'use client'
const DeleteUser = ({ id }) => {
    const deleteUser = async () => {
        let response = await fetch(`http://localhost:3000/api/users/${id}`,{ method: 'delete'});
        response = await response.json();
        if(response.success) {
            alert("User Deleted...")
        } else {
            alert('Something went wrong! User not deleted...')
        }
    }
    // console.log(id);
    return (
        <button onClick={deleteUser}>Delete</button>
    )
}

export default DeleteUser
