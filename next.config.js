/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source:'/users',
                destination:'/',
                permanent: false
            },
            {
                source:'/users/:userId',
                destination:'/',
                permanent: false
            },
            {
                source:'/admin',
                destination:'/',
                permanent: false
            }
        ]
    }
}                   

// Redirection using config file


module.exports = nextConfig
