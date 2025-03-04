/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pagesのリポジトリ名がユーザー名と異なる場合は、basePath設定が必要
  // 例: リポジトリ名が「portfolio」の場合
  // basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig