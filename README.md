# studio_wolf

スタジオ狼（STUDIO WOLF）の公式サイト — https://studio-wolf.site

## 概要

コスプレイヤーによる、コスプレイヤーのための撮影スタジオ「スタジオ狼（STUDIO WOLF）」の公式ウェブサイトです。

もとは Vue 3 の SPA でしたが、返却HTMLが空シェルで検索エンジン・SNS・地図のクローラに中身が読まれていなかったため、**Astro による静的サイト**へ再構築しました（JSを実行しなくても料金・説明・写真のaltが読める状態）。

## 技術スタック

- Astro 5（静的生成）
- @astrojs/sitemap
- HTML/CSS/JavaScript

## 開発環境のセットアップ

### 必要な環境
- Node.js 20 以上
- npm

### インストール
```sh
npm install
```

### 開発サーバーの起動
```sh
npm run dev
```

### 本番ビルド
```sh
npm run build   # dist/ に静的出力
npm run preview # ビルド結果の確認
```

## ディレクトリ構成

```
src/
├── data/
│   ├── pricing.json   # 料金の唯一の情報源（表示・構造化データが参照）
│   └── site.json      # 店名・住所・アクセス・各種リンク（NAP一致のためここで一元管理）
├── layouts/
│   └── BaseLayout.astro  # title / description / OGP / Twitter Card / canonical
└── pages/
    ├── index.astro    # トップページ（ABOUT・PRICE・RESERVE・ACCESS・ギャラリー）
    └── tokusho.astro  # 特定商取引法に基づく表記
```

**料金を変更するときは `src/data/pricing.json` だけを編集してください。** 表示テーブルと JSON-LD の両方がこのファイルを参照しています。店名・住所・リンクの変更は `src/data/site.json` です。

現行の料金は「スタジオ狼再生戦略提言レポート」5-2 の改定案（2026-07-18）に準拠しています。補足資料『料金プラン改定ドラフト』および『開発プロンプト_サイト再構築.txt』の時間貸し1,900/2,800円案は撤回済みのため採用していません。

## 機能

- レスポンシブデザイン
- ヒーロースライドショー
- 料金表（HTMLテキスト・画像埋め込みではない）
- LINE予約導線＋インスタベース掲載リンク
- Google Maps 連携
- SEO: 構造化データ（PhotographyBusiness / OfferCatalog）・OGP・canonical・sitemap.xml・robots.txt

## デプロイ

本番は静的ファイル配信（nginx）: `/var/www/studio-wolf.site/`

```sh
npm run build
rsync -av --delete dist/ prod-server-deploy:/var/www/studio-wolf.site/
```

## ライセンス

このプロジェクトは商用利用可能です。
