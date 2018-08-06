# Try using the VuePress!!

チュートリアルに沿って、本ブログをGitHub Pagesに
デプロイするまでの流れをメモしておきます。

## 1. install VuePress

VuePressをグローバルにインストールします。  
`-D`を使ってprojectごとにインストールしてもOK!!

```
npm install -g vuepress
```

## 2. create Package.json

無くてもいいかな？とは思いますが、package.jsonをプロジェクト直下に作成します。  
内容は以下のとおりです。

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 3. create Config File

以下のディレクトリ構成を用いて、作業を進めます。(チュートリアル通り)

```
.
├─ docs
│  ├─ README.md
│  ├─ vue
│     └─ 20180806_tryVuePress.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

肝心のConfigFile

```
module.exports = {
	base: '/mucholog/', // Base URLの変更（これ書かないとGitHubPagesで正常に動きません）
	title: 'Mucho Log...',
	description: 'mucho\'s blog',
	head: [　// 各ページのhead設定
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
	],
    themeConfig: { // テーマ設定
	    sidebar: [ // サイドバーの設定
            {
                title: 'MyBlog',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: 'Vue',
                collapsable: true,
                children: [
                    'vue/20180806_tryVuePress'
                ]
            }
        ],
        lastUpdated: 'Last Updated'
    }
};
```

## 4. run

ローカルでの動作確認をしてみます。  
2で設定したscriptを叩いてみます。

```
npm run docs:dev
```

おそらく、[http://localhost:8080/](http://localhost:8080/)で表示確認ができるはずです。  
ちなみに、ホットリロードに対応しているため変更内容が都度ページに反映されます。  
この記事を書いてるときも、隣のブラウザにどんどん反映されてってます！

## 5. build

ビルドしてみます。

```
npm run docs:build
```

.vuepressフォルダの中にdistが出力されます。


## 6. deploy

distの内容をgithubのリポジトリにPushします。  
その際、Pagesの設定を変えておきます。  
[https://{ユーザ名}.github.io/{リポジトリ名}/](https://daikinakamura.github.io/mucholog/)にアクセスします。  

見れましたか！？（反映には少し時間がかかります。）

## 7. memo...

* sidebarを作るのが面倒（自動化したい）
* blogサポートを待ったほうが良かったかも感
* 頑張って続けてみる
