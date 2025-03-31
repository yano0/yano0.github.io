export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export const educationItems: EducationItem[] = [
  {
    institution: "名古屋大学大学院",
    degree: "情報学研究科 博士後期課程",
    period: "2025年4月 - 現在",
    description: ""
  },
  {
    institution: "株式会社PKSHA Technology",
    degree: "機械学習エンジニア",
    period: "2024年4月 - 2025年3月",
    description: ""
  },
  {
    institution: "名古屋大学大学院",
    degree: "情報学研究科 博士前期課程",
    period: "2022年4月 - 2024年3月",
    description: ""
  },
  {
    institution: "名古屋工業大学",
    degree: "工学部 情報工学科",
    period: "2018年4月 - 2022年3月",
    description: ""
  }
]; 