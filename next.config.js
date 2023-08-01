/** @type {import('next').NextConfig} */
module.exports = {
    images: {
    //   formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'iseea.onrender.com',
          port: '',
          pathname: '/uploads/**',
        },
      ],
    },
  }