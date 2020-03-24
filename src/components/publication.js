import React from "react";
import Typography from "@material-ui/core/Typography";

function _formatAuthor(author) {
  if (author.match(/Ryuya Ikeda/) || author.match(/池田 流弥/)) {
    return (
      <span>
        <u>{author}</u>,{" "}
      </span>
    );
  } else {
    return <span>{author},</span>;
  }
}

function ReferedPapers() {
  const referedPapers = [
    {
      title:
        "Extraction of Food Product and Shop Names from Blog Articles using Named Entity Recognition",
      authors: ["Ryuya Ikeda", "Kazuaki Ando"],
      proc:
        "In Proceedings of the 16th International Conference on the Pacific Association for Computational Linguistics (PACLING 2019), 14 pages",
      year: 2019
    },
    {
      title:
        "Extraction of Product and Shop Names of Souvenirs from Blog Articles using Conditional Random Fields",
      authors: ["Ryuya Ikeda", "Kazuaki Ando"],
      proc:
        "In Proceedings of the Fourth International Conference on Electronics and Software Science, pp.101-107",
      year: 2018
    }
  ];
  const referedPaperList = [];
  for (let i = 0; i < referedPapers.length; i++) {
    let p = referedPapers[i];
    let formattedAuthor = p["authors"].map(_formatAuthor);
    referedPaperList.push(
      <div>
        <li>
          {formattedAuthor} <b>{p["title"]}</b>, {p["proc"]}, {p["year"]}
        </li>
      </div>
    );
  }
  return referedPaperList;
}

function Proceedings() {
  const proceedings = [
    {
      title: "シズルワードを利用した土産レビュー文抽出の検討",
      authors: ["池田流弥", "安藤一秋"],
      proc: "言語処理学会第26回年次大会講演論文集, P6-30, pp.1431-1434",
      year: 2020
    },
    {
      title: "固有表現抽出によるブログテキストからの品名・店名抽出",
      authors: ["池田流弥", "安藤一秋"],
      proc: "情報処理学会, 自然言語処理研究会, NL243-5, 8pages",
      year: 2019
    },
    {
      title: "深層学習によるブログ記事からの土産の品名・店名抽出",
      authors: ["池田流弥", "安藤一秋"],
      proc: "言語処理学会第25回年次大会講演論文集, P3-4, pp. 526-529",
      year: 2019
    },
    {
      title: "CRFによるブログ記事からの土産の品名・店名抽出法のための素性検討",
      authors: ["池田流弥", "安藤一秋"],
      proc: "第17回情報科学技術フォーラム講演論文集, 第2分冊, pp. 151-152",
      year: 2018
    },
    {
      title: "ブログ記事からの土産の品名・店名抽出",
      authors: ["池田流弥", "安藤一秋"],
      proc: "人工知能学会第32回全国大会講演論文集, 1E3-02, 4pages",
      year: 2018
    },
    {
      title: "CRF を用いたブログ記事からの品名・店名抽出",
      authors: ["池田流弥", "長尾哲志", "安藤一秋"],
      proc: "情報処理学会第80回全国大会論文集, pp.433-434",
      year: 2018
    },
    {
      title: "ブログ記事からの品名・店名抽出手法の検討",
      authors: ["池田流弥", "長尾哲志", "安藤一秋"],
      proc: "平成29年度電気関係学会四国支部連合大会講演論文集, p.225",
      year: 2017
    },
    {
      title: "土産情報データベース構築のための品名・店名抽出手法の検討",
      authors: ["池田流弥", "長尾哲志", "安藤一秋"],
      proc:
        "平成29年電気学会電子・情報・システム部門大会講演論文集, pp.1092-1096",
      year: 2017
    }
  ];
  const proceedingList = [];
  for (let i = 0; i < proceedings.length; i++) {
    let p = proceedings[i];
    let formattedAuthor = p["authors"].map(_formatAuthor);
    proceedingList.push(
      <div>
        <li>
          {formattedAuthor} <b>{p["title"]}</b>, {p["proc"]}, {p["year"]}
        </li>
      </div>
    );
  }
  return proceedingList;
}

function Publications() {
  // TODO: 査読なしの論文に関するコードの修正
  return (
    <div>
      <Typography variant="h6">国際会議（査読あり）</Typography>
      <ul>{ReferedPapers()}</ul>
      <Typography variant="h6">査読なし論文</Typography>
      <ul>{Proceedings()}</ul>
    </div>
  );
}

export default Publications;
