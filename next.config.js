/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'nlw-spacetime-server-production.up.railway.app'],//mudar meu ip para o ip do deploy
  }
}

module.exports = nextConfig