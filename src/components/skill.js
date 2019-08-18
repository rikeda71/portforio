import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

class Skill extends React.Component {

    render() {
        const intermediate = ["C/C++", "Django", "flask", "pytorch", "scikit-learn", "docker"];
        const intermediate_chips = intermediate.map((tech) =>
            <Chip label={tech} color="secondary" />
        );
        const beginner = ["Java", "C#", "Ruby", "Ruby on Rails", "AWS", "Azure"];
        const beginner_chips = beginner.map((tech) =>
            <Chip label={tech} />
        );
        return (
            <div className='technologies'>
                <Typography variant="h5">
                    Technologies
                </Typography>
                <ul>
                    <li>
                        <Typography variant="h6">
                            Advanced
                        </Typography>
                    </li>
                    <Chip label="python" color="primary" />
                    <li>
                        <Typography variant="h6">
                            Intermediate
                        </Typography>
                    </li>
                    {intermediate_chips}
                    <li>
                        <Typography variant="h6">
                            Beginner
                        </Typography>
                    </li>
                    {beginner_chips}
                </ul>
                <Typography variant="h5">
                    Products
                </Typography>
                <Typography>
                    <ul>
                        <li>
                            <a href="https://github.com/s14t284/TorchCRF">TorchCRF</a>
                        </li>
                        CRF(Conditional Random Fields)のpytorch1.0実装．pytorchの公式でCRFの実装がないため作成．
                        <li>
                            <a href="https://github.com/Andolab/miNER">miNER</a>
                        </li>
                        固有表現抽出の評価のためのpythonモジュール．IOB2，BIOES，BIOULラベリングスキームに対応．
                        既知の固有表現（学習データ中に含まれている固有表現）を用意しておくことにより，学習データ中に含まれている/含まれていないを区別して抽出性能の評価が可能．
                        <li>
                            <a href="https://github.com/s14t284/PrivateSchoolWebApp">学習塾シフト管理Webアプリ</a>
                        </li>
                        自身の学習塾バイトのシフト管理Webアプリ．他の学習塾で似たようなアプリが用意されていたため，自分の塾でも使いたいと思い開発．
                        <li>
                            <a href="https://github.com/s14t284/VisualizeClassifier">文書分類可視化Webアプリ</a>
                        </li>
                        文書分類のための機械学習モデルの学習の推移，推論の結果を可視化するためのアプリケーション．
                    </ul >
                </Typography >

            </div >
        );
    };
}

export default Skill;