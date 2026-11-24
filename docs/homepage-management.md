# 「ホームページ管理」設定手順

## 共有する構成
ChatGPTプロジェクト「ホームページ管理」で仕様、素材、更新方針をまとめる。
実際の更新を行う各Codexチャットには mitsukey-001/mitsukeys-gallery の接続またはローカル作業フォルダーを明示する。
ChatGPTプロジェクトにチャットを入れるだけではローカルリポジトリへのアクセスは付与されない。

ローカルで作業する場合はリポジトリを取得し、プロジェクトのメニューからフォルダーを追加して主フォルダーにする。
ただし現状、ルートにバックスラッシュを含むファイル名があり、Windowsで通常のチェックアウトが失敗する可能性がある。まずLinux環境またはGitHub経由でこれらを整理するPRを作り、内容を比較してから削除・移動する。
各新規チャットは最新mainからWorktreeを選択し、作業専用ブランチを作成する。
GitHub接続経由の場合も作業ごとに専用ブランチ・PRを使い、ビルド確認は実行環境またはPR用Actionsで行う。

## GitHubの推奨保護設定
Settings > Rules > Rulesets でmainを対象に有効なルールを作る。
- Require a pull request before merging
- Block force pushes
- Restrict deletions
- Require conversation resolution before merging
- 管理者やアプリの無制限なbypassを設けない。
- 一人運用では必須承認数を0にし、本人が差分・確認結果を見てマージする。他のレビュー担当者がいる場合は1以上。
- PR用検証Actionsを導入して一度成功させてから、そのチェック名を必須にする。存在しないチェック名は指定しない。
- mainの更新があったらPRを最新状態にして確認する。マージは一件ずつ行う。

Settings > Environments > github-pagesで本番デプロイ可能なブランチをmainに限定する。
Settings > Pagesで現在のSourceと公開元を記録する。移行後の公開方式が決まるまでは切り替えない。
GitHub Pagesは公開元ブランチ方式と独自Actions方式を選べる。PR用チェックはデプロイを行わず、mainのマージ後にだけ本番公開する。

## 確認結果（2026-10-10 JST）
- リポジトリ: public、main、接続権限: pull/push/adminあり。
- main protected=false、取得できたrulesetsは空。未マージPR検索結果は0件。
- ルートAGENTS.mdは存在しなかったため、このPRで共通ルールを追加。
- pages/index.html、pages/games/index.htmlは starlight-secret-garden.mitsukii1220.chatgpt.site へ転送。
- app/page.tsxの本体と静的pages/は別構成。現状のPages用Actionsはapp/をビルドしない。
- 2026-10-10 14:31 JST開始の独自デプロイは失敗。Prepare static websiteでge-mu.dataのENOENT。configure-pages以降は未実行。
- 同時刻のGitHub管理の pages build and deployment は成功。
- 認証なしPages APIは404。これだけではPagesが無効とは判断できない。公開URL、Source、公開元フォルダーは認証済み設定画面で確認が必要。
- npm-publish-github-packages.ymlはrelease向けで、PR検証ではない。Node 20/npm ci/npm testを使うが、package.jsonはNode >=22.13、pnpmロック、testスクリプトなし。別PRで必要性を整理する。
- 本PRは文書のみ。公開先設定、保護設定、マージ、サイト本体の移行は未実施。

## 次に実施する移行PR
1. 実際のPages Sourceと公開URLを認証済み画面で確認する。
2. app/のルーティング、画像、ゲーム、サーバー依存を調査しGitHub Pagesで配信可能な静的構成にする。
3. リポジトリ名を含むURL配下でリンク・資産が正しく動くことを確認する。
4. Unity資産を揃え、展開処理を実際のファイル構成に合わせる。必要なゲームの欠落を単に無視して成功扱いにしない。
5. PR用の静的生成・リンク・必要資産チェックとmain用デプロイを分離する。
6. 転送解除とPages Source変更はユーザーが内容を確認した後、移行と合わせて行う。

## 各チャットの開始指示
「mitsukey-001/mitsukeys-gallery を更新してください。まずAGENTS.mdを読み、最新mainを起点に専用worktree・ブランチで作業してください。変更内容は○○です。適切な確認をしてDraft PRを作成し、マージ・本番公開は私の指示を待ってください。」

## 公式資料
- Projects: https://learn.chatgpt.com/docs/projects
- Worktrees: https://learn.chatgpt.com/docs/environments/git-worktrees
- Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Rulesets: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets
