'use client'

import React from "react";

const Update = ({ params }) => {

  let id = params.id;
  // console.log(id);

  const [fullName, setFullName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');

  const updateUser = async () => {
    // console.log(fullName, email, city, age);

    const userData = { fullName, email, city, age };

    let result = await fetch('http://localhost:3000/api/users/'+id,{
      method: "Put",
      body: JSON.stringify(userData)
    });
    result = await result.json();
    // console.log(result);

    if (result.success) {
      alert('User Details Updated....')
    } else {
      alert('Something went wrong... User not updated?')
    }

    setAge('');
    setCity('');
    setEmail('');
    setFullName('');
  }

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch('http://localhost:3000/api/users/' + id);
    data = await data.json();

    // console.log(data[0]);

    setFullName(data[0].fullName);
    setEmail(data[0].email);
    setAge(data[0].age);
    setCity(data[0].city);
  }

  return (
    <div className="flex justify-center align-center flex-col">
      <h1 className="text-center my-8 text-5xl">Update User Details</h1>
      <div className="mx-auto">

        <label htmlFor="name">Name: </label>
        <input className="mx-auto p-4 my-2 outline-0" type="text" name="fullName" id="fullName" placeholder="Enter your full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <label htmlFor="email">Email: </label>
        <input className="mx-auto p-4 my-2 outline-0" type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="age">Age: </label>
        <input className="mx-auto p-4 my-2 outline-0" type="number" name="age" id="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="city">City: </label>
        <input className="mx-auto p-4 my-2 outline-0" type="text" name="city" id="city" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />

      </div>
      <button className="my-8 bg-slate-600 p-4 w-[20%] mx-auto rounded-md text-white" onClick={updateUser}>Update User</button>
    </div>
  )
}

export default Update
