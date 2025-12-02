export interface ResearchPaper {
  title: string;
  period: string;
  conference: string;
  description: string;
  pageLink?: string;
  paperLink?: string;
  codeLink?: string;
  ModelLinks?: { name: string; url: string }[];
  peerReviewed?: boolean;
}

export const researchPapers: ResearchPaper[] = [
  {
    title: "FrameEOL: Semantic Frame Induction using Causal Language Models",
    period: "2025.11",
    conference: "EMNLP 2025 Findings",
    description: ``,
    pageLink: "https://aclanthology.org/2025.findings-emnlp.623/",
    paperLink: "https://aclanthology.org/2025.findings-emnlp.623.pdf",
    codeLink: "https://github.com/SasanoLab/semantic-frame-induction",
    peerReviewed: true,
    ModelLinks: [
    ]
  },
  {
    title: "大規模モデルの蒸留を用いた日本語文埋め込みモデル",
    period: "2024.09",
    conference: "第19回YANSシンポジウム",
    description: ``,
    pageLink: "https://yans.anlp.jp/entry/yans2024program#:~:text=%5BS1%2DP35%5D%20%E5%A4%A7%E8%A6%8F%E6%A8%A1%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E8%92%B8%E7%95%99%E3%82%92%E7%94%A8%E3%81%84%E3%81%9F%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%96%87%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF%E3%83%A2%E3%83%87%E3%83%AB",
    paperLink: "#",
    codeLink: "#",
    peerReviewed: false,
    ModelLinks: [
      { name: "GLuCoSE-base-ja-v2", url: "https://huggingface.co/pkshatech/GLuCoSE-base-ja-v2" },
      { name: "RoSEtta-base-ja", url: "https://huggingface.co/pkshatech/RoSEtta-base-ja" }
    ]
  },
  {
    title: "生成型大規模言語モデルを用いた意味フレーム推定",
    period: "2024.09",
    conference: "第261回自然言語処理研究発表会",
    description: ``,
    pageLink: "https://www.ipsj.or.jp/kenkyukai/event/nl261.html#:~:text=(14)%20%E7%94%9F%E6%88%90%E5%9E%8B%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E7%94%A8%E3%81%84%E3%81%9F%E6%84%8F%E5%91%B3%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E6%8E%A8%E5%AE%9A",
    paperLink: "#",
    codeLink: "#",
    peerReviewed: false,
    ModelLinks: []
  },
  {
    title: "Multilingual Sentence-T5: Scalable Sentence Encoders for Multilingual Applications",
    period: "2024.05",
    conference: "LREC-COLING 2024",
    description: ``,
    pageLink: "https://aclanthology.org/2024.lrec-main.1034/",
    paperLink: "https://aclanthology.org/2024.lrec-main.1034/",
    codeLink: "#",
    peerReviewed: true,
    ModelLinks: [
      { name: "m-ST5", url: "https://huggingface.co/pkshatech/m-ST5" }
    ]
  },
  {
    title: "日本語文埋め込みの文書検索性能と検索補助付き生成での評価",
    period: "2024.03",
    conference: "言語処理学会 第30回年次大会",
    description: ``,
    pageLink: "https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/P6-1.pdf",
    paperLink: "https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/P6-1.pdf",
    codeLink: "#",
    peerReviewed: false,
    ModelLinks: [
    ]
  },
  {
    title: "LoRAを用いた大規模多言語文埋め込みモデルの構築",
    period: "2023.08",
    conference: "NLP若手の会 第18回シンポジウム",
    description: ``,
    pageLink: "https://yans.anlp.jp/entry/yans2023program#:~:text=%5BS5%2DP26%5D%20LoRA%E3%82%92%E7%94%A8%E3%81%84%E3%81%9F%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%A4%9A%E8%A8%80%E8%AA%9E%E6%96%87%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E6%A7%8B%E7%AF%89",
    paperLink: "#",
    codeLink: "#",
    peerReviewed: false,
    ModelLinks: [
    ]
  },
  {
    title: "深層距離学習を用いた日本語動詞の意味フレーム推定",
    period: "2023.03",
    conference: "言語処理学会 第29回年次大会",
    description: ``,
    pageLink: "https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P4-8.pdf",
    paperLink: "https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P4-8.pdf",
    codeLink: "#",
    peerReviewed: false,
    ModelLinks: [
    ]
  },

]; 