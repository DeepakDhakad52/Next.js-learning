/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
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
=======
    images : {
        domains:['upload.wikimedia.org']
    }
}
>>>>>>> d12923f880099393ee370e83053059bfff1c8338

module.exports = nextConfig
