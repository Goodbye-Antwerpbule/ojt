# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

TypeScript + React + react-router-domで構築されたMarkdownビューアーアプリケーション。
Markdownファイルを読み込み、美しくレンダリングして表示する。

## 技術スタック

- **React 18**: UIライブラリ
- **TypeScript**: 型安全な開発
- **Vite**: ビルドツール・開発サーバー
- **React Router DOM**: クライアントサイドルーティング
- **react-markdown**: Markdownレンダリング
- **remark-gfm**: GitHub Flavored Markdownサポート

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（通常はポート5173）
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# ESLintによるコードチェック
npm run lint
```

## プロジェクト構造

```
ojt/
├── public/
│   └── docs/              # Markdownファイルを配置
│       ├── home.md
│       ├── sample.md
│       └── about.md
├── src/
│   ├── components/
│   │   ├── MarkdownViewer.tsx      # Markdownレンダリングコンポーネント
│   │   └── MarkdownViewer.css
│   ├── App.tsx                      # メインアプリケーション・ルーティング定義
│   ├── App.css
│   ├── main.tsx                     # エントリーポイント
│   └── index.css                    # グローバルスタイル
├── index.html                       # HTMLテンプレート
├── vite.config.ts                   # Vite設定
├── tsconfig.json                    # TypeScript設定
└── package.json
```

## アーキテクチャ

### ルーティング

- `App.tsx`でReact Routerを使用してルーティングを定義
- 各ルートは異なるMarkdownファイルを表示する`MarkdownViewer`コンポーネントをレンダリング
- サイドバーナビゲーションで各ページ間を移動

### Markdownレンダリング

- `MarkdownViewer`コンポーネントが`fetch`でMarkdownファイルを取得
- `react-markdown`と`remark-gfm`を使用してMarkdownをHTMLに変換
- CSSでMarkdown要素をスタイリング（コードブロック、テーブル、見出しなど）

### スタイリング

- CSS Modules不使用、通常のCSSファイルを使用
- ダークモード/ライトモード対応（`prefers-color-scheme`メディアクエリ）
- レスポンシブデザイン対応

## 新しいページの追加方法

1. `public/docs/`に新しい`.md`ファイルを作成
2. `src/App.tsx`にルートを追加:
   ```tsx
   <Route path="/new-page" element={<MarkdownViewer filePath="/docs/new-page.md" />} />
   ```
3. サイドバーにリンクを追加:
   ```tsx
   <li><Link to="/new-page">ページ名</Link></li>
   ```

## 重要な注意事項

- Markdownファイルは`public/docs/`ディレクトリに配置（ビルド時に静的ファイルとして配信）
- ファイルパスは`/docs/`から始まる（publicディレクトリがルートになる）
- `react-markdown`は安全なHTMLのみをレンダリング（XSS対策済み）
