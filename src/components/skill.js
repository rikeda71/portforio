import React from "react";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

class Skill extends React.Component {
  render() {
    const intermediate = [
      "C/C++",
      "Django",
      "flask",
      "pytorch",
      "scikit-learn",
      "docker"
    ];
    const intermediate_chips = intermediate.map(tech => (
      <Chip label={tech} color="secondary" />
    ));
    const beginner = [
      "Java",
      "C#",
      "Javascript",
      "Ruby",
      "Ruby on Rails",
      "AWS",
      "Azure"
    ];
    const beginner_chips = beginner.map(tech => <Chip label={tech} />);
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
          {intermediate_chips}
          <li>
            <Typography variant="h6">Beginner</Typography>
          </li>
          {beginner_chips}
        </ul>
        <Typography variant="h5">Products</Typography>
        <Typography>
          <ul>
            <li>
              <a href="https://github.com/s14t284/TorchCRF">TorchCRF</a>
            </li>
            pytorchによる linear-chain CRF（Conditional Random Fields）実装．
            <li>
              <a href="https://github.com/Andolab/miNER">miNER</a>
            </li>
            固有表現抽出の評価のためのpythonモジュール．IOB2，BIOES，BIOULラベリングスキームに対応．
            <br />
            学習データ中に出現する /
            出現しない固有表現を区別して抽出性能の評価が可能．
            <li>
              <a href="https://github.com/s14t284/PrivateSchoolWebApp">
                学習塾シフト管理Webアプリ
              </a>
            </li>
            自身の学習塾バイトのシフト管理Webアプリ．
            <li>
              <a href="https://github.com/s14t284/VisualizeClassifier">
                文書分類可視化Webアプリ
              </a>
            </li>
            文書分類のための機械学習モデルの学習の推移，推論を可視化するWebアプリ．
          </ul>
        </Typography>
      </div>
    );
  }
}

export default Skill;
