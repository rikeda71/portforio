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

function Publications() {
  // TODO: 査読なしの論文に関するコードの修正
  const referedPapers = [
    {
      title:
        "Extraction of Food Product and Shop Names from Blog Articles using Named Entity Recognition",
      authors: ["Ryuya Ikeda", "Kazuaki Ando"],
      proc:
        "In Proceedings of the 16th International Conference on the Pacific Association for Computational Linguistics (PACLING 2019)",
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
  return (
    <div>
      <Typography variant="h6">国際会議（査読あり）</Typography>
      <ul>{referedPaperList}</ul>
      <Typography variant="h6">査読なし論文</Typography>
      <ul>
        <li>
          <u>池田流弥</u>， 安藤一秋，
          <b>シズルワードを利用した土産レビュー文抽出の検討</b>
          ，言語処理学会第26回年次大会講演論文集，P6-30，2020（掲載予定）
        </li>
        <li>
          <u>池田流弥</u>， 安藤一秋，
          <b>固有表現抽出によるブログテキストからの品名・店名抽出</b>
          ，情報処理学会，自然言語処理研究会，NL243-5，8pages，2019
        </li>
        <li>
          <u>池田流弥</u>， 安藤一秋，
          <b>深層学習によるブログ記事からの土産の品名・店名抽出</b>
          ，言語処理学会第25回年次大会講演論文集，P3-4，pp. 526-529，2019
        </li>
        <li>
          <u>池田流弥</u>，安藤一秋，
          <b>CRFによるブログ記事からの土産の品名・店名抽出法のための素性検討</b>
          ，第17回情報科学技術フォーラム講演論文集，第2分冊，pp. 151-152，2018
        </li>
        <li>
          <u>池田流弥</u>，安藤一秋，<b>ブログ記事からの土産の品名・店名抽出</b>
          ，人工知能学会第32回全国大会講演論文集，1E3-02，4pages，2018
        </li>
        <li>
          <u>池田流弥</u>，長尾哲志，安藤一秋，
          <b>CRF を用いたブログ記事からの品名・店名抽出</b>
          ，情報処理学会第80回全国大会論文集，pp.433-434，2018
        </li>
        <li>
          <u>池田流弥</u>，長尾哲志，安藤一秋，
          <b>ブログ記事からの品名・店名抽出手法の検討</b>
          ，平成29年度電気関係学会四国支部連合大会講演論文集，p.225，2017
        </li>
        <li>
          <u>池田流弥</u>，長尾哲志，安藤一秋，
          <b>土産情報データベース構築のための品名・店名抽出手法の検討”</b>
          ，平成29年電気学会電子・情報・システム部門大会講演論文集，pp.1092-1096，2017
        </li>
      </ul>
    </div>
  );
}

export default Publications;
