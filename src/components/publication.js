import React from "react";
import Typography from "@material-ui/core/Typography";

function Publications() {
  return (
    <div>
      <Typography variant="h6">国際会議（査読あり）</Typography>
      <ul>
        <li>
          <u>Ryuya Ikeda</u> and Kazuaki Ando,{" "}
          <b>
            Extraction of Food Product and Shop Names from Blog Articles using
            Named Entity Recognition
          </b>
          , In Proceedings of the 16th International Conference on the Pacific
          Association for Computational Linguistics (PACLING 2019), 2019
        </li>
        <li>
          <u>Ryuya Ikeda</u> and Kazuaki Ando,{" "}
          <b>
            Extraction of Product and Shop Names of Souvenirs from Blog Articles
            using Conditional Random Fields
          </b>
          , In Proceedings of the Fourth International Conference on Electronics
          and Software Science, pp.101-107, 2018
        </li>
      </ul>
      <Typography variant="h6">査読なし論文</Typography>
      <ul>
        <li>
          <u>池田流弥</u>， 安藤一秋，
          <b>深層学習によるブログ記事からの土産の品名・店名抽出</b>
          ，言語処理学会第25回年次大会講演論文集，P3-4，4pages，2019
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
