/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // リポジトリ名を指定（例：portfolio）
  // ユーザー名.github.ioリポジトリの場合は空文字列にする
  basePath: '', // リポジトリ名に置き換える
  assetPrefix: '', // リポジトリ名に置き換える
  images: {
    unoptimized: true,
  },
  // 静的HTMLのエクスポート時にtrailingSlashを有効にする
  trailingSlash: true,
}

module.exports = nextConfig