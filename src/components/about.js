import React from "react";
import Typography from "@material-ui/core/Typography";

function SelfIntro() {
  return (
    <div className="self introduction">
      <Typography variant="h5">池田 流弥 / Ryuya Ikeda</Typography>
      <Typography>
        <p>
          香川生まれ香川育ち．情報抽出の実応用に関する研究をしています．
          <br />
          自然言語処理，機械学習のアプリケーションへの応用に興味があります．
        </p>
        <br />
      </Typography>
    </div>
  );
}

function Education() {
  const career = [
    "2020年3月 - 情報系某社（予定）",
    "2018年4月 - 2020年3月 香川大学 工学研究科 信頼性情報システム工学専攻",
    "2016年4月 - 2018年3月 香川大学工学部 電子・情報工学科",
    "2011年4月 - 2016年3月 香川高等専門学校 情報工学科"
  ];
  return (
    <div className="education">
      <Typography variant="h6">経歴</Typography>
      <Typography>
        <ul>
          {career.map(c => (
            <li>{c}</li>
          ))}
        </ul>
      </Typography>
    </div>
  );
}

function Activity() {
  const internships = [
    "2019年1月 - 2月 株式会社日本経済新聞社 インターンシップ",
    "2018年12月 任天堂株式会社 1dayインターンシップ（ネットワーク開発コース）",
    "2018年12月 株式会社サイバーエージェント 2dayインターンシップ（kubernetes勉強会）",
    "2018年9月 株式会社日本経済新聞社 3dayインターンシップ",
    "2018年8月 NLP若手の会 (YANS) 第13回シンポジウム 参加",
    "2014年8月 ソニーデジタルネットワークアプリケーションズ株式会社 インターンシップ"
  ];
  return (
    <div className="activities">
      <Typography variant="h6">諸活動</Typography>
      <Typography>
        <ul>
          {internships.map(internship => (
            <li>{internship}</li>
          ))}
        </ul>
      </Typography>
    </div>
  );
}

function Awards() {
  const awards = [
    "2019年 香川大学 工学研究科 特待生",
    "2018年 香川大学 工学部長賞 受賞",
    "2017年 香川大学 工学部 特待生",
    "2016年 応用情報技術者試験 合格",
    "2014年 基本情報技術者試験 合格"
  ];
  return (
    <div className="awards">
      <Typography variant="h6">受賞・資格など</Typography>
      <Typography>
        <ul>
          {awards.map(award => (
            <li>{award}</li>
          ))}
        </ul>
      </Typography>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <SelfIntro />
      <Education />
      <Activity />
      <Awards />
    </div>
  );
}

export default About;
