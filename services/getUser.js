export default async function getUser() {
    let result = await fetch('https:jsonplaceholder.typicode.com/users');
    return result.json();
}