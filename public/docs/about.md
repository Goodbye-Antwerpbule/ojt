# このサイトについて

## 技術スタック

このMarkdown Viewerは以下の技術を使用して構築されています：

### フロントエンド

- **React 18**: UIライブラリ
- **TypeScript**: 型安全な開発
- **Vite**: 高速なビルドツール
- **React Router DOM**: クライアントサイドルーティング

### Markdownレンダリング

- **react-markdown**: ReactでMarkdownをレンダリング
- **remark-gfm**: GitHub Flavored Markdownのサポート

## プロジェクト構造

```
ojt/
├── public/
│   └── docs/          # Markdownファイル
├── src/
│   ├── components/    # Reactコンポーネント
│   ├── App.tsx        # メインアプリケーション
│   ├── main.tsx       # エントリーポイント
│   └── *.css          # スタイル
├── index.html
├── package.json
└── vite.config.ts
```

## 開発

### 開発サーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
