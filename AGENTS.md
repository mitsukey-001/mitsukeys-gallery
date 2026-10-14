# ホームページ管理

## 対象と目的
- 正本: https://github.com/mitsukey-001/mitsukeys-gallery
- 既定ブランチ: main
- ユーザー指定のプロジェクト名: ホームページ管理
- 目標: ホームページ本体を GitHub Pages で公開する。
- プロジェクト内の各チャットから同じリポジトリを扱う。各チャットの会話を自動共有される前提にせず、このファイルとPRを引き継ぎ情報にする。

## 作業ルール
1. 開始時にリポジトリ、ブランチ、未コミット変更、最新のmain、関連PRを確認する。
2. 変更ごとに最新のmainを起点とする独立したworktreeと codex/<作業名> ブランチを使う。同じ作業フォルダー・ブランチを複数チャットで同時編集しない。
3. mainへ直接pushしない。force push、履歴の書き換え、他の作業の破棄をしない。
4. 変更範囲を絞り、適切な確認を行い、Draft PRを作る。PR本文には変更理由、確認結果、公開への影響、未確認事項を書く。
5. PR作成まで進め、マージと本番公開はユーザーの明示指示を待つ。
6. 他のPRがマージされたら最新mainを取り込み、競合を解消して再確認する。PRは順番にマージする。
7. 公開成功はデプロイ結果と公開URLで確認する。PRの成功やコードの更新だけで公開完了と報告しない。
8. 共通運用と構成の変更はリポジトリ内の文書に残す。秘密情報をコミットしない。

## 公開構成の注意点（2026-10-10確認）
- app/ はNext/React・Vinextのソース。pages/ のトップとゲームページはchatgpt.siteへ転送している。
- .github/workflows/pages.yml はpages/とpublic/games/を配布する。app/の変更だけではこの経路の画面は更新されない。
- 独自PagesワークフローはUnity展開処理で public/games/prototype/Build/ge-mu.data がないため失敗している。
- GitHub管理の pages build and deployment は同日に成功している。実際のPages Source・公開元フォルダーはSettings > Pagesで確認する。
- 名前にバックスラッシュを含む pages\\index.html 等のファイルがルートにもある。通常の pages/index.html と混同しない。Windowsチェックアウト対応を確認する。
- GitHub Pages本体公開への移行は、サイト機能とゲーム資産を確認して別PRで実施する。古い静的ページの復元や転送解除だけで移行完了としない。
