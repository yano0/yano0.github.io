export interface Internship {
  company: string;
  period: string;
  description: string;
  blogUrl?: string;
}

export interface Activity {
  title: string;
  items: Array<{
    name: string;
    detail: string;
    url?: string;
    category?: string;
  }>;
  icon: string;
  fullWidth?: boolean;
  note?: string;
}

// 同じカテゴリの項目が隣接している前提で、データの並び順どおりにまとめる
export function groupActivityItems(items: Activity["items"]) {
  const groups: Array<{ category?: string; items: Activity["items"] }> = [];
  for (const item of items) {
    const current = groups[groups.length - 1];
    if (current && current.category === item.category) {
      current.items.push(item);
    } else {
      groups.push({ category: item.category, items: [item] });
    }
  }
  return groups;
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
  {
    company: "株式会社レトリバ",
    period: "2025年8月 - 2025年9月",
    description: `テキスト埋め込みモデルの蒸留に関する調査`,
    blogUrl: "https://zenn.dev/retrieva_tech/articles/c0a7fc6fe35fb4"
  },
  {
    company: "SB Intuitions株式会社",
    period: "2026年4月 - ",
    description: `日本語エージェントベンチマーク「J-tau telecom」の公開`,
    blogUrl: "https://www.sbintuitions.co.jp/blog/entry/2026/06/19/100154"
  },
];

export const activities: Activity[] = [
  {
    title: "コミュニティ運営",
    icon: "Users",
    items: [
      {
        name: "YANS運営委員",
        detail: "2024年度〜2025年度",
      },
      {
        name: "最先端NLP勉強会 運営",
        detail: "2026年度〜",
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
        detail: "2025年4月 NLP聴講参加報告",
        url: "https://speakerdeck.com/yano0/nlp2025can-jia-bao-gao"
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
    fullWidth: true,
    note: "*カテゴリはClaude Opus 5による",
    items: [
      {
        category: "文埋め込み・文書検索",
        name: "Decoding Dense Embeddings: Sparse Autoencoders for Interpreting and Discretizing Dense Retrieval",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-decoding-dense-embeddings-sparse-autoencoders-for-interpreting-and-discretizing-dense-retrieval"
      },
      {
        category: "文埋め込み・文書検索",
        name: "Length-Induced Embedding Collapse in PLM-based Models",
        detail:"",
        url: "https://speakerdeck.com/yano0/length-induced-embedding-collapse-in-plm-based-models"
      },
      {
        category: "文埋め込み・文書検索",
        name: "SimLM: Pre-training with Representation Bottleneck for Dense Passage Retrieval",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-simlm-pre-training-with-representation-bottleneck-for-dense-passage-retrieval"
      },
      {
        category: "大規模言語モデルの分析",
        name: "How much can language models memorize?",
        detail:"",
        url: "https://speakerdeck.com/yano0/rinkou-shiryou-how-much-can-language-models-memorize"
      },
      {
        category: "大規模言語モデルの分析",
        name: "How Do Large Language Models Acquire Factual Knowledge During Pretraining?",
        detail:"",
        url: "https://speakerdeck.com/yano0/how-do-large-language-models-acquire-factual-knowledge-during-pretraining"
      },
      {
        category: "推論・ツール利用",
        name: "Lost in Execution: On the Multilingual Robustness of Tool Calling in Large Language Models",
        detail:"",
        url: "https://speakerdeck.com/yano0/rinkou-shiryou-lost-in-execution-on-the-multilingual-robustness-of-tool-calling-in-large-language-models"
      },
      {
        category: "推論・ツール利用",
        name: "ReAct: Synergizing Reasoning and Acting in Language Models / Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
        detail:"",
        url: "https://speakerdeck.com/yano0/tree-of-thoughts-deliberate-problem-solving-with-large-language-models"
      },
      {
        category: "多言語・言語転移",
        name: "Zero-shot Cross-lingual Semantic Parsing",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-zero-shot-cross-lingual-semantic-parsing"
      },
      {
        category: "多言語・言語転移",
        name: "From Zero to Hero: On the Limitations of Zero-Shot Language Transfer with Multilingual Transformers",
        detail:"",
        url: "https://speakerdeck.com/yano0/lun-jiang-zi-liao-from-zero-to-hero-on-the-limitations-of-zero-shot-language-transfer-with-multilingual-transformers"
      }
    ]
  }
]; 