import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

type productType = {
  name: string,
  url: string,
  exp: string
}

type chipType = {
  name: string,
  chips: Array<JSX.Element>
}

const products: Array<productType> = [
  {
    name: 'TorchCRF',
    url: 'https://github.com/s14t284/TorchCRF',
    exp: 'pytorchによる linear-chain CRF（Conditional Random Fields）実装．',
  },
  {
    name: 'miNER',
    url: 'https://github.com/Andolab/miNER',
    exp:
        '固有表現抽出の評価のためのpythonモジュール．学習データ中に出現 する/しない 固有表現を区別した性能評価が可能．',
  },
  {
    name: '学習塾シフト管理Webアプリ',
    url: 'https://github.com/s14t284/PrivateSchoolWebApp',
    exp: '自身の学習塾バイトのシフト管理Webアプリ．',
  },
  {
    name: '文書分類可視化Webアプリ',
    url: 'https://github.com/s14t284/VisualizeClassifier',
    exp:
        '文書分類のための機械学習モデルの学習の推移，推論を可視化するWebアプリ．',
  },
  {
    name: '続報記事ビューアー',
    url: 'https://nikkei-intern2018-ios.herokuapp.com/',
    exp:
        'ある話題のニュースの流れを追うことができるWebアプリ（インターンシップで作成）．',
  },
];

const Skill: React.FC = () => {
  const intermediate = ['Django', 'flask', 'pytorch', 'scikit-learn', 'Docker'];
  const intermediateChips = intermediate.map((tech: string) => (
    <Chip label={tech} color="secondary" key={tech}/>
  ));
  const beginner = ['C/C++', 'Java', 'Javascript', 'SpringBoot', 'React', 'AWS', 'Azure'];
  const beginnerChips = beginner.map((tech: string) => <Chip label={tech} key={tech}/>);
  const myProducts: Array<productType> = products;
  const productsList = myProducts.map((p: productType) => {
    return (
      <div className="product" key={p.name}>
        <li><a href={p.url}>{p.name}</a></li>
        {p.exp}
      </div>
    );
  });

  const myChips: Array<chipType> = [
    {name: 'Advanced',
      chips: [<Chip label="python" color="primary" key="python"/>]},
    {name: 'Intermediate', chips: intermediateChips},
    {name: 'Beginner', chips: beginnerChips},
  ];

  return (
    <div className="technologies">
      <Typography variant="h5">Technologies</Typography>
      <ul>
        {myChips.map((chip: chipType) => {
          return (
            <div key={chip.name}>
              <li key={chip.name}>
                <Typography variant="h6">{chip.name}</Typography>
              </li>
              {chip.chips}
            </div>
          );
        })
        }
      </ul>
      <Typography variant="h5">Products</Typography>
      <Typography>
        <ul>{productsList}</ul>
      </Typography>
    </div>
  );
};

export default Skill;
