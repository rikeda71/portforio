import React from 'react';
import Typography from '@material-ui/core/Typography';


function SelfIntro() {
    return (
        <div className="self introduction">
            <Typography variant="h5">
                池田 流弥 / Ryuya Ikeda
                </Typography>
            <Typography>
                <p>香川生まれ香川育ち．固有表現抽出の実応用に関する研究をしています．<br />
                    自然言語処理，機械学習のアプリケーションへの応用に興味があります．</p>
                <br />
            </Typography>
        </div>
    );
}

function Education() {
    return (
        <div className="education">
            <Typography variant="h6">
                学歴
                </Typography>
            <Typography>
                <ul>
                    <li>2018年4月 - 現在 香川大学 工学研究科 信頼性情報システム工学専攻</li>
                    <ul>
                        <li>安藤研究室所属</li>
                    </ul>
                    <li>2016年4月 - 2018年3月 香川大学工学部 電子・情報工学科</li>
                    <li>2011年4月 - 2016年3月 香川高等専門学校 情報工学科</li>
                </ul >
            </Typography>
        </div>
    );
}

function Activity() {
    return (
        <div className="activities">
            <Typography variant="h6">
                諸活動
                </Typography>
            <Typography>
                <ul>
                    <li>
                        2019年1月 - 2月 株式会社日本経済新聞社 インターンシップ
                            <ul><li>自然言語処理による研究開発</li></ul>
                    </li>
                    <li>2018年12月 株式会社任天堂 インターンシップ（ネットワーク開発コース）</li>
                    <li>
                        2018年12月 株式会社サイバーエージェント kubernetes勉強会参加
                            <ul><li>CKAD（Certified Kubernetes Application Developer）模擬試験1位</li></ul>
                    </li>
                    <li>2018年9月 株式会社日本経済新聞社 インターンシップ（Webアプリ開発）</li>
                    <li>2018年8月 NLP若手の会 (YANS) 第13回シンポジウム 参加</li>
                    <li>
                        2014年8月 ソニーデジタルネットワークアプリケーションズ株式会社 インターンシップ
                            <ul><li>（Webアプリへの機能追加）</li></ul>
                    </li>
                </ul>
            </Typography>
        </div>
    );
};

function Awards() {
    return (
        <div className="awards">
            <Typography variant="h6">
                受賞・受賞など
                </Typography>
            <Typography>
                <ul>
                    <li>2019年 香川大学 工学研究科 特待生</li>
                    <li>2018年 香川大学 工学部長賞 受賞</li>
                    <li>2017年 香川大学 工学部 特待生</li>
                    <li>2016年 応用情報技術者試験 合格</li>
                    <li>2014年 基本情報技術者試験 合格</li>
                </ul>
            </Typography>
        </div>
    );
};

function About() {
    return (
        <div className="about">
            <SelfIntro />
            <Education />
            <Activity />
            <Awards />
        </div>
    );
};

export default About