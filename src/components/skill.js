import React from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

function Skill() {
  const intermediate = ["Django", "flask", "pytorch", "scikit-learn", "Docker"];
  const intermediateChips = intermediate.map(tech => (
    <Chip label={tech} color="secondary" />
  ));
  const beginner = ["C/C++", "Java", "Javascript", "AWS", "Azure"];
  const beginnerChips = beginner.map(tech => <Chip label={tech} />);
  const products = [
    {
      name: "TorchCRF",
      url: "https://github.com/s14t284/TorchCRF",
      exp: "pytorchによる linear-chain CRF（Conditional Random Fields）実装．"
    },
    {
      name: "miNER",
      url: "https://github.com/Andolab/miNER",
      exp:
        "固有表現抽出の評価のためのpythonモジュール．学習データ中に出現 する/しない 固有表現を区別した性能評価が可能．"
    },
    {
      name: "学習塾シフト管理Webアプリ",
      url: "https://github.com/s14t284/PrivateSchoolWebApp",
      exp: "自身の学習塾バイトのシフト管理Webアプリ．"
    },
    {
      name: "文書分類可視化Webアプリ",
      url: "https://github.com/s14t284/VisualizeClassifier",
      exp:
        "文書分類のための機械学習モデルの学習の推移，推論を可視化するWebアプリ．"
    },
    {
      name: "続報記事ビューアー",
      url: "https://nikkei-intern2018-ios.herokuapp.com/",
      exp:
        "ある話題のニュースの流れを追うことができるWebアプリ（インターンシップで作成）．"
    }
  ];
  const productsList = [];
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    productsList.push(
      <div className="product">
        <li>
          <a href={p["url"]}>{p["name"]}</a>
        </li>
        {p["exp"]}
      </div>
    );
  }
  return (
    <div className="technologies">
      <Typography variant="h5">Technologies</Typography>
      <ul>
        <li>
          <Typography variant="h6">Advanced</Typography>
        </li>
        <Chip label="python" color="primary" />
        <li>
          <Typography variant="h6">Intermediate</Typography>
        </li>
        {intermediateChips}
        <li>
          <Typography variant="h6">Beginner</Typography>
        </li>
        {beginnerChips}
      </ul>
      <Typography variant="h5">Products</Typography>
      <Typography>
        <ul>{productsList}</ul>
      </Typography>
    </div>
  );
}

export default Skill;
