/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // GitHub Actionsからの環境変数GITHUB_REPOSITORYを取得
  // 形式: {owner}/{repo}
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  // 静的HTMLのエクスポート時にtrailingSlashを有効にする
  trailingSlash: true,
}

module.exports = nextConfig