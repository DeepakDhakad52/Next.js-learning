'use client'
import React from "react"

const AddUser = () => {

    const [fullName, setFullName] = React.useState('');
    const [city, setCity] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleOnSubmit =  async () => {
        // console.log(fullName, email, city, age);

        const userData = { fullName, email, city, age };
        let response = await fetch('http://localhost:3000/api/users',{
            method: "Post",
            body: JSON.stringify(userData)
        });
        response = await response.json();
        // console.log(response);

        // console.log(userData);

        if(response.success){
            alert('User Added Successfully...');
        } else {
            alert('Something went Wrong.... User is not Added')
        }

        setAge('');
        setCity('');
        setEmail('');
        setFullName('');
    }

    return (
        <div className="flex justify-center align-center flex-col">
            <h1 className="text-center my-8 text-5xl">Add User</h1>
            <div className="mx-auto">

                <label htmlFor="name">Name: </label>
                <input className="mx-auto p-4 my-2 outline-0" type="text" name="fullName" id="fullName" placeholder="Enter your full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)} />

                <label htmlFor="email">Email: </label>
                <input className="mx-auto p-4 my-2 outline-0" type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                <label htmlFor="age">Age: </label>
                <input className="mx-auto p-4 my-2 outline-0" type="number" name="age" id="age" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)} />

                <label htmlFor="city">City: </label>
                <input className="mx-auto p-4 my-2 outline-0" type="text" name="city" id="city" placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)} />

            </div>
            <button className="my-8 bg-slate-600 p-4 w-[20%] mx-auto rounded-md text-white" onClick={handleOnSubmit}>Add User</button>
        </div>
    )
}

export default AddUser
