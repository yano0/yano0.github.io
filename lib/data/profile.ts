export interface ProfileData {
  name: string;
  tagline: string;
  affiliation: string;
  email: string;
  profileImage: string;
  socialLinks: {
    github?: string;
    x?: string;
    linkedin?: string;
    other?: Array<{
      name: string;
      url: string;
      icon?: string;
    }>;
  };
}

export const profileData: ProfileData = {
  name: "矢野 千紘",
  tagline: "意味理解と埋め込み表現に興味があります",
  affiliation: "株式会社PKSHA Technology 機械学習エンジニア",
  email: "yanonay3[at]gmail.com", // 実際のメールアドレスに変更してください
  profileImage: "/icon_real.jpg", // 実際のプロフィール画像のパスに変更してください
  socialLinks: {
    github: "https://github.com/yano0",
    x: "https://x.com/yano0_c",
    linkedin: "https://www.linkedin.com/in/yano0", // 実際のLinkedInユーザー名に変更してください
    other: [
      {
        name: "ブログ",
        url: "https://yano0.github.io/yano0.blog/",
        icon: "Newspaper",
      },
    ],
  }
}; 