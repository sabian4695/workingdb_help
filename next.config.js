  /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1tntvpcrzvon2.cloudfront.net',
            port: '',
            pathname: '/static-assets/images/**',
          },
        ],
      },
  }
  
  module.exports = nextConfig