export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "自然言語処理ライブラリ",
    description: "日本語テキスト処理のための軽量なライブラリを開発しました。形態素解析、固有表現抽出、感情分析などの機能を提供します。",
    technologies: ["Python", "PyTorch", "Transformers", "MeCab"],
    imageUrl: "/placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    year: "2023"
  },
  {
    title: "研究データ可視化ツール",
    description: "研究データを効率的に可視化するためのウェブアプリケーションを開発しました。複雑なデータセットを直感的に理解できるインタラクティブな可視化を提供します。",
    technologies: ["React", "D3.js", "TypeScript", "Node.js"],
    imageUrl: "/placeholder.jpg",
    projectUrl: "https://example.com/project2",
    githubUrl: "https://github.com/yourusername/project2",
    year: "2022"
  },
  {
    title: "機械学習モデル評価フレームワーク",
    description: "様々な機械学習モデルのパフォーマンスを一貫した方法で評価するためのフレームワークを開発しました。複数のメトリクスと視覚化ツールを提供します。",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    imageUrl: "/placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project3",
    year: "2021"
  }
]; 