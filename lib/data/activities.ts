export interface Internship {
  company: string;
  period: string;
  description: string;
}

export interface Activity {
  title: string;
  items: Array<{
    name: string;
    detail: string;
    url?: string;
  }>;
  icon: string;
}

export const internships: Internship[] = [
  {
    company: "メディアドゥ MediaDo Tech Internship",
    period: "2022年9月 - 2022年9月",
    description: `ハッカソン1位`
  },
  {
    company: "楽天 二子玉川夏の陣2022 新規プロトタイプ開発",
    period: "2022年8月 - 2022年8月",
    description: `ハッカソン3位`
  },
  {
    company: "野村総合研究所 ITソリューションコース ",
    period: "2022年8月 - 2022年8月",
    description: ``
  },
  {
    company: "NAVITIME JAPAN",
    period: "2022年8月 - 2022年8月",
    description: ``
  },
  {
    company: "PKSHA Technology",
    period: "2023年1月 - 2024年3月",
    description: ``
  },
];

export const activities: Activity[] = [
  {
    title: "コミュニティ運営",
    icon: "Users",
    items: [
      {
        name: "YANS運営委員",
        detail: "2024年〜",
      }
    ]
  },
  {
    title: "受賞歴",
    icon: "Award",
    items: [
      {
        name: "YANS 第18回シンポジウム 若手奨励賞",
        detail: "2023年8月 LoRAを用いた大規模多言語文埋め込みモデルの構築",
      },
    ]
  },
  {
    title: "登壇",
    icon: "Mic",
    items: [
      {
        name: "知識強化型言語モデルLUKEミートアップ",
        detail: "2025年1月 GLuCoSE v2について",
        url: "https://uzabase-tech.connpass.com/event/342098/"
      },
      {
        name: "NLP2025 参加報告会 presented by Money Forward Lab",
        detail: "2025年4月 頑張ります",
        url: "https://moneyforward.connpass.com/event/344276/"
      },
    ]
  },
  {
    title: "資格",
    icon: "GraduationCap",
    items: [
      {
        name: "応用情報技術者試験 合格",
        detail: "2021年6月"
      },
      {
        name: "TOEIC xxx点",
        detail: "頑張ります"
      },
    ]
  },
  {
    title: "輪講資料",
    icon: "BookOpen",
    items: [
      {
        name: "SIMLM: Pre-training with Representation Bottleneck for Dense Passage Retrieval",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-simlm-pre-training-with-representation-bottleneck-for-dense-passage-retrieval"
      },
      {
        name: "ReAct: Synergizing Reasoning and Acting in Language Models / Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
        detail:"",
        url: "https://speakerdeck.com/yano0/tree-of-thoughts-deliberate-problem-solving-with-large-language-models"
      },
      {
        name: "Zero-shot Cross-lingual Semantic Parsing",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-zero-shot-cross-lingual-semantic-parsing"
      },
      {
        name: "From Zero to Hero: On the Limitations of Zero-Shot Language Transfer with Multilingual Transformers",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-from-zero-to-hero-on-the-limitations-of-zero-shot-language-transfer-with-multilingual-transformers"
      }
    ]
  }
]; 