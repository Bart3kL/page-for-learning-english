/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.istockphoto.com',
      'www.etutor.pl',
      'i.pinimg.com',
      'i.ytimg.com',
      'lingtip.pl',
      'static.wixstatic.com',
    ],
  },
};

module.exports = nextConfig;
