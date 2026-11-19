window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.ja = {
    badge_manual: "ユーザーマニュアル（2-in-1）",
    back_home: "Webサイトに戻る",
    download_btn: "Gradaly をダウンロード",
    hero_pill: "2-in-1 デスクトップアプリケーション • 完全ユーザーマニュアル v4.6.0",
    hero_title: "Gradaly ユーザーマニュアル",
    hero_subtitle: "より深い採点で、より確かな学びを。Gradalyは2つの独立した教育ワークフローを備えた 2-in-1 アプリケーションです：(1) 教員による「試験・模擬試験モード」（本番形式での形成的模擬試験や公式な定期試験の答案採点）、および (2) 学生がスマートフォンで行う「QR自己評価・演習モード」。ご利用目的に合ったガイドを以下からお選びください：",
    search_placeholder: "すべてのガイドを検索（例：試験、模擬試験、QR演習、採点基準、OCR、APIキー、FAQ）...",
    card_exam_badge: "機能 1 • 教員による答案採点",
    card_exam_chapters: "チャプター E1〜E9",
    card_exam_title: "マニュアル 1：試験・模擬試験モード（教員用）",
    card_exam_desc: "定期試験・中間試験、または学期中に本番形式で実施する形成的模擬試験向け：学生の答案冊子をスキャンし、100%オフラインOCRで名簿と照合、手動またはAI支援・チーム分担で採点し、詳細な注釈付き答案を返却します。",
    card_practice_badge: "機能 2 • 学生による自律型自己評価",
    card_practice_chapters: "チャプター P1〜P5",
    card_practice_title: "マニュアル 2：QR自己評価・演習モード（学生用）",
    card_practice_desc: "演習授業、課題プリント、自主学習シート向け：演習用PDFにQRコードを埋め込み、学生が紙の上で解答を作成してスマートフォンで撮影すると、その場で形成的AIフィードバックを受け取れます。",
    filter_label: "表示切替：",
    filter_exam: "1. 試験ガイド（E1〜E9）",
    filter_practice: "2. QR演習ガイド（P1〜P5）",
    filter_all: "すべてのチャプターを表示",
    filter_hint: "各ガイドはそれぞれ100%単独で完結しています — 両方を読む必要はありません！",
    switch_guide_kicker: "Gradalyのもうひとつのワークフローを見る",
    btn_go_practice: "マニュアル 2 を開く：QR演習モード",
    btn_go_exam: "マニュアル 1 を開く：試験採点モード",
    toc_title: "目次",
    sidebar_exam_mode: "試験モード",
    sidebar_practice_mode: "QR演習モード",
    screenshot_badge: "英語UI画面",
    privacy_box_title: "100%ローカルの学生プライバシー保護",
    privacy_box_text: "履修者名簿、氏名・学籍番号欄の画像、OCR照合結果、およびプロジェクトファイルはすべてお使いのPC内の Documents/Gradaly にローカル保存されます。クラウドポータルやチーム共有リンクにはクライアント側 AES-256-GCM Zero-Knowledge 暗号化が適用されます。",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "マニュアル 1 — 試験・模擬試験モード（教員用）",
            partColor: "indigo",
            partBanner: {
                kicker: "マニュアル 1 • 機能 1：試験・模擬試験の採点",
                title: "教員による試験・模擬試験採点 完全ガイド（100%手動・AI支援・チーム共同採点）",
                desc: "スキャンした学生の答案冊子を評価するための単独完結型ガイドです — 公式な定期試験にも、学期中に本番さながらの条件で実施する形成的模擬試験にも対応します。"
            },
            tag: "試験モード • ステップ 1 — 試験プロジェクトの作成",
            badge: "100%手動 または AI支援",
            shortTitle: "試験プロジェクトの作成",
            title: "試験プロジェクトの作成と 100%手動 vs. AI支援ワークフロー",
            subtitle: "新しい試験プロジェクトを開始（または答案20件付きの試験デモを起動）し、スキャンした答案冊子をPC上で評価します。",
            paragraphs: [
                "<strong>試験プロジェクト（<code>試験</code> / <code>Exam</code> バッジ）とは？</strong> 試験プロジェクトは、教員が学生の紙の答案を回収してPDFにスキャンし、履修クラス全体を採点するあらゆる評価場面に向けて設計されています。<strong>公式な中間試験・期末試験</strong>はもちろん、<strong>学期中に本番の試験条件で実施する形成的模擬試験</strong>にも最適です。期末の本試験は紙のまま手作業で採点したいという場合でも、学期途中の模擬試験に試験モードを活用すれば、すべての学生に本番形式でのきめ細かな個別フィードバックを届けることができます。画面上部には<strong>6つの専用ワークフロータブ</strong>が並びます：<code>1. テンプレートと設問</code>、<code>2. 学生（履修者名簿）</code>、<code>3. 答案</code>、<code>4. 答案照合</code>、<code>5. 採点</code>、<code>6. 集計・統計</code>。",
                "<strong>100%手動モードとAI支援モードの選択：</strong> Gradalyで試験を採点するのに、AIのAPIキーは<strong>必須ではありません</strong>。インストール直後から、高速キーボードショートカット（<code>1〜9</code> キーで評価基準のON/OFF、<code>J</code>/<code>K</code> キーで前後の学生へ移動）、配点変更時のクラス全体へのリアルタイム得点再計算、Markdown &amp; KaTeX 数式対応の講評入力を備えた<strong>100%手動モード</strong>として快適に動作します。さらに必要に応じてAIのAPIキーを設定すれば、最終的な採点判断を常に教員の手に残したまま、<strong>AIルーブリックアシスタント</strong>や<strong>マルチモーダルAI事前採点</strong>をいつでも活用できます。",
                "<strong>ホーム画面（ようこそ画面）</strong>で<strong>新規プロジェクト</strong>をクリックして<strong>試験プロジェクト（スキャン済み答案の採点）</strong>を選択するか、<strong>デモプロジェクトを作成 → 試験デモ</strong>をクリックすると、手書き答案20件と模範解答が収録された物理学試験のサンプルプロジェクトをすぐにお試しいただけます。"
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "ホーム画面：試験プロジェクトにはインディゴ色の「Exam（試験）」バッジが付与され、PC内の Documents/Gradaly にローカル保存されます"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "デモ作成モーダル：「試験デモ（スキャン済み答案の採点）」を選択すると、答案20件付きのオフラインデモが生成されます"
                }
            ],
            callouts: [
                {
                    title: "専用の6タブ試験ワークスペース",
                    desc: "テンプレートと設問 → 履修者名簿 → 答案 → オフラインOCR照合 → 3ペイン採点コンソール → 統計分析＆エクスポート。"
                },
                {
                    title: "100%オフライン＆手動採点にも対応",
                    desc: "キーボードショートカットによる軽快な手動採点にも、AI事前採点と教員による確認・承認を組み合わせたハイブリッド運用にも対応します。"
                },
                {
                    title: "答案20件内蔵の試験デモ",
                    desc: "英語またはフランス語の内蔵試験デモを使えば、スキャンデータを用意することなく全ワークフローを即座に体験できます。"
                },
                {
                    title: "Documents/Gradaly での完全ローカル管理",
                    desc: "すべてのPDF、履修者名簿、採点データは標準フォルダ形式であなたのPC内に保存され、クラウドへの強制保存はありません。"
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "試験モード • ステップ 2 — テンプレート・氏名欄・採点基準",
            badge: "正確な採点の要",
            shortTitle: "テンプレート・氏名欄・評価基準",
            title: "氏名・学籍番号欄、設問領域、配点方式および模範解答の設定",
            subtitle: "白紙の問題用紙PDFをインポートし、オフラインOCR用の氏名・学籍番号欄と、各設問・採点基準（ルーブリック）を定義します。",
            paragraphs: [
                "試験プロジェクトの <strong>1. テンプレートと設問</strong> タブを開き、まず白紙の問題用紙PDF（<code>テンプレート / Canvas</code>）をインポートします。次に、PDFページ上に2種類の矩形領域を描画します：",
                "<strong>1. 学生の氏名・学籍番号欄（<code>ID</code>）の描画：</strong> 左パネルの<strong>学生識別エリア（氏名・学籍番号）</strong>ボタンをクリックし、1ページ目の氏名や学籍番号の記入欄を長方形で囲みます。Gradalyは後ほどすべての答案からこの領域を切り出し、履修者名簿に対する<strong>100%オフラインのOCR自動照合</strong>を実行します。",
                "<strong>2. 各設問領域の描画とAI問題文ソース（<code>学生の答案</code> vs. <code>テンプレート</code>）の選択：</strong> 学生の答案に対してAI採点を実行すると、Gradalyはその設問に設定された矩形領域を切り出し、採点基準とともに選択したVision AIモデルへ送信します。<br>• <strong>単一の結合領域（デフォルト）：</strong> 紙面レイアウト上可能であれば、印刷された問題文と学生の解答欄の両方を1つの長方形で囲んでください。デフォルト設定（<code>AI問題文：学生の答案</code>）では、Gradalyはその矩形領域を<strong>学生自身の答案PDF（<code>copies/copie_XXX.pdf</code>）から直接切り出します</strong>。そのため、学生ごとに異なる数値パラメータが印字されている試験でも、AIはその学生固有の問題数値と解答を正確に読み取ります。<br>• <strong>問題文と解答欄の分離（<code>問題文と解答欄を分離</code>）および <code>AI問題文</code> セレクタ：</strong> 問題文と解答欄が別ページに分かれている場合や、間に別の記述がある場合は、<strong>問題文と解答欄を分離</strong>をクリックして2つの領域（<code>問題文</code> と <code>解答欄</code>）を定義し、問題文側の切り出し元を選択します：<br>&nbsp;&nbsp;– <strong><code>学生の答案</code>（<code>Student Copy</code>）：</strong> 問題文領域と解答欄領域の両方を<strong>各学生の答案PDF</strong>から切り出して縦に結合します（学生ごとに問題数値が異なる個別化試験では必須です）。<br>&nbsp;&nbsp;– <strong><code>テンプレート</code>（<code>Canvas</code>）：</strong> 問題文領域を白紙テンプレート（<code>canvas.pdf</code>）から切り出し、学生の解答欄画像の上部に結合します（問題文が印字されていない別紙の解答用紙を使用する場合に最適です）。",
                "<strong>3. 基本点（<code>Base Score</code>）・満点（<code>Max Score</code>）・上下限クランプ・<code>最大可能点</code> の仕組み：</strong><br>• <strong>得点計算式：</strong> 各設問の<strong>基本点</strong>から出発し、チェックされたすべての評価基準の点数を加算（<code>素点 = 基本点 + Σ チェック済み基準の配点</code>）した上で、<strong>最終得点を必ず <code>0</code> 以上 <code>満点（Max Score）</code> 以下の範囲に収めます（クランプ処理）</strong>。<br>• <strong>純粋な加点方式 または 純粋な減点方式を推奨：</strong> <strong>加点方式</strong>では <code>基本点 = 0</code> とし、正の配点（<code>+1</code>, <code>+1.5</code> 等）のみを設定します。<strong>減点方式</strong>では <code>基本点 = 満点</code> とし、負の減点項目（<code>-0.5</code>, <code>-1</code> 等）のみを設定します。<strong>同一設問内で加点と減点を混在させることは避けてください</strong> — 一貫した方式の方がAIにとっても学生にとっても遥かに明快になります。<br>• <strong><code>最大可能点（Max possible）</code> インジケータ：</strong> <code>基本点 + Σ（正の配点項目）</code> を自動表示するため、評価基準の合計が <code>満点</code> と一致しているかを一目で確認できます。",
                "<strong>4. 下部の採点指示・ロジック欄（<code>AIプロンプト指示</code>）：</strong> 各設問の下部にあるテキスト欄には、例外ケースの扱い（例：前問の計算ミスを引き継いだ場合の部分点ルールや同値な表現の許容など）を記述します。また、問題文が切り出し枠の外にある場合はここに問題文テキストを貼り付けることができます。",
                "<strong>5. 模範解答（<code>⭐ 模範解答 / Solutionnaire</code>）の読み込みと検証：</strong> PDFビューア上部の<strong>問題文（テンプレート）／ 模範解答</strong>切替ボタンを使って、模範解答のPDFをインポートできます。読み込んだ模範解答は「採点」タブの最上部に <strong><code>⭐ 模範解答</code></strong> として固定表示されます。本番採点の前に、ご自身の模範解答がすべての設問で確実に<strong>満点（<code>Max/Max</code>）</strong>を獲得できるかを必ずテストしてください！"
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "試験モード — テンプレートと設問タブ：氏名・学籍番号欄ボタン、基本点／満点／最大可能点、チェック式評価基準、AI採点指示欄、および問題文／模範解答の切替"
                }
            ],
            callouts: [
                {
                    title: "オフラインOCR用の氏名・学籍番号欄",
                    desc: "1ページ目のヘッダー枠を一度囲むだけで、全スキャン答案から該当領域を自動切り出ししローカルで氏名・学籍番号を認識します。"
                },
                {
                    title: "一貫した加点方式または減点方式",
                    desc: "0点から＋配点で積み上げるか、満点から−減点する方式を選択。最終得点は常に [0, 満点] の範囲に収まります。"
                },
                {
                    title: "問題文も枠内に含めるのがベスト",
                    desc: "印刷された問題文と解答欄を一緒に囲むことでAIに十分な文脈が伝わります（または下部の指示欄に問題文を入力します）。"
                },
                {
                    title: "模範解答（⭐）による事前検証",
                    desc: "模範解答PDFを読み込み、ワンクリックですべての設問が満点（Max/Max）と判定されるか事前チェックできます。"
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "試験モード • ステップ 3 — AIルーブリックアシスタント",
            badge: "対話型設計＆キャリブレーション",
            shortTitle: "AIルーブリックアシスタント",
            title: "AIルーブリックアシスタントによる採点基準の共同設計と調整",
            subtitle: "問題文と模範解答PDFから採点基準案を自動生成し、チャット対話や実際の学生答案のスクリーンショット貼り付けで精緻化します。",
            paragraphs: [
                "<strong>テンプレートと設問</strong>タブで任意の設問を選び、<strong>AIで設計・編集</strong>をクリックすると、対話型の<strong>AIルーブリックアシスタント</strong>が開きます。",
                "<strong>1. ルーブリック設計条件の指定：</strong> 設問の<code>満点</code>を指定し、<strong>加点方式</strong>または<strong>減点方式</strong>を選び、目標とする<strong>評価基準の数</strong>（3項目、4項目、5項目、またはAIおまかせ）を選択します。<code>模範解答</code>PDFを読み込んでいる場合は、<em>「模範解答を参照として使用する」</em>にチェックを入れることで、AIが問題文と模範解答の双方を精査して段階的な評価基準を構築します。",
                "<strong>2. チャットでの反復調整＆学生答案スクリーンショットの貼り付け（<code>Cmd+V</code> / <code>Ctrl+V</code>）：</strong> 右側のチャット欄から自然言語で配点や表現の修正を指示できます。さらに効果的な使い方として、実際の学生の手書き解答のスクリーンショットを撮り、<strong>チャット欄に直接ペースト</strong>して<em>「この学生の解法には満点を与えたいので、それに合わせて評価基準と採点指示を調整してください」</em>と伝えることも可能です。",
                "<strong>3. 設問への適用と数件の答案でのキャリブレーション：</strong> <strong>確定して設問に適用</strong>をクリックした後、クラス全体の一括処理を実行する前に、まず「採点」タブで <code>⭐ 模範解答</code> および2〜3件の学生答案に対してテスト採点を行い、基準の妥当性を確認してください。"
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AIルーブリックアシスタント画面：左側に提案された評価基準とPROMPT_TEXT、右側にスクリーンショット貼り付け対応の対話型調整チャット"
                }
            ],
            callouts: [
                {
                    title: "問題文と模範解答の両方を解析",
                    desc: "数学的な導出過程や論理構成に沿った体系的な評価項目と配点バランスを生成します。"
                },
                {
                    title: "実際の学生解答を貼り付け（Cmd+V）",
                    desc: "判断に迷う境界事例の解答スクリーンショットをチャットに貼り付け、基準の記述を柔軟に調整できます。"
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "試験モード • ステップ 4 — 履修者名簿・答案・オフラインOCR",
            badge: "100%ローカル＆オフライン",
            shortTitle: "名簿・答案分割・OCR照合",
            title: "履修者名簿（CSV）、PDF自動分割、および100%オフラインOCR照合",
            subtitle: "受講生リストを読み込み、複合機の一括スキャンPDFを学生別の答案冊子に分割して、クラウド送信ゼロで本人照合を行います。",
            paragraphs: [
                "<strong>2. 学生</strong>タブでは、Moodleや学務システム、Excel等から出力したCSVファイルをインポートします。Gradalyは<strong>学籍番号（ID）</strong>、<strong>姓</strong>、<strong>名</strong>、<strong>メールアドレス</strong>、<strong>クラス／グループ</strong>の各列をマッピングします。",
                "<strong>3. 答案</strong>タブでは、学生ごとの個別PDFファイル、または複合機スキャナで連続読み取りした<strong>複数名分の一括スキャンPDF</strong>をインポートします。1部あたりのページ数（例：学生1人につき4ページ）を指定すると、<code>copie_01.pdf</code>, <code>copie_02.pdf</code>… のように自動分割されます。スキャナが高解像度の重いファイル（<strong>220 DPI超</strong>）を出力していた場合、インポート時に自動検知して<strong>ワンクリックでの200 DPI最適化</strong>を提案します（画質を損なわず容量を最大1/4に削減し、共有やクラウド同期を高速化）。さらにオンデマンドの<strong>ページ整合性検査</strong>を実行すれば、上下逆転（180°）、ページの入れ替わり、ページ欠落を検出しワンクリックでPDFを修復できます。",
                "<strong>4. 答案照合</strong>タブで<strong>自動照合</strong>をクリックすると、各答案の1ページ目から氏名・学籍番号欄を切り出し、<strong>アプリ内蔵のWebAssembly版OCRエンジンをお使いのPC上で100%オフライン実行</strong>して、手書きの氏名や学籍番号と履修者名簿をファジーマッチング（あいまい照合）で最適に紐づけます。切り出し画像と候補を並べて目視確認し、数秒で確定できます。"
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "学生タブ：学籍番号、氏名、メールアドレス、グループを保持するローカル履修者名簿"
                },
                {
                    filePrefix: "05_copies",
                    caption: "答案タブ：一括スキャンPDFの自動分割と各答案冊子のプレビュー・整合性チェック"
                },
                {
                    filePrefix: "06_matching",
                    caption: "答案照合タブ：切り出された手書きの氏名・学籍番号欄と履修者名簿を並べて視覚的に確認"
                }
            ],
            callouts: [
                {
                    title: "厳格なローカル機密保護（クラウドOCR不使用）",
                    desc: "学生の氏名、学籍番号、メールアドレス、ヘッダー画像が外部へ送信されることはありません — OCRはデスクトップアプリ内で100%オフライン実行されます。"
                },
                {
                    title: "未照合フィルタ＆インクリメンタル検索",
                    desc: "「未照合」や「要確認（候補競合）」で絞り込み、判読しづらい手書き文字も即座に手動割り当てできます。"
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "試験モード • ステップ 5 — 採点コンソール",
            badge: "100%手動、標準AI、またはバッチFlex（-50%）",
            shortTitle: "手動採点＆AI支援採点",
            title: "3ペイン採点コンソール：軽快な手動操作、AIキャリブレーション、一括バッチ採点",
            subtitle: "クラス全体を横断して設問単位でスムーズに移動し、3色のステータス表示を活用しながら単一答案での検証や一括AI事前採点を行います。",
            paragraphs: [
                "<strong>5. 採点</strong>タブは連動する3つのペインで構成されています：左側に<strong>学生・答案リスト</strong>（最上部に <code>⭐ 模範解答</code> を固定表示）、中央に<strong>インタラクティブPDFビューア</strong>、右側に<strong>設問・評価基準ワークステーション</strong>が配置されています。",
                "<strong>1. 設問番号サークルと2次元キーボードナビゲーション：</strong> 右上の番号付きサークル（<code>1</code>, <code>2</code>, <code>3</code>...）をクリックするか、<code>←</code> / <code>→</code> キー（または <code>H</code> / <code>L</code>）で設問間を移動します。同じ設問のまま前後の学生へ移動するには <code>↑</code> / <code>↓</code> キー（または <code>K</code> / <code>J</code>）を使い、数字キー <code>1〜9</code> で評価基準 #1〜#9 のON/OFFを切り替え、<code>V</code> キーで手動確認済みにマークできます。いつでも <code>?</code> キーを押す（または上部バーの <code>⌨️</code> アイコンをクリックする）と、キーボードショートカット一覧を表示できます。",
                "<strong>2. 3色のステータスコード：</strong><br>• 🟢 <strong>緑（<code>AI</code>）：</strong> AIによる事前採点が完了した状態（教員による確認待ち）。<br>• 🔵 <strong>青（<code>手動 / Human</code>）：</strong> 教員が手動で採点・修正、または明示的に承認確定した状態。<br>• ⚪ <strong>グレー（<code>未採点</code>）：</strong> まだ採点されていない状態。",
                "<strong>3. 単一答案での検証・AIクエリインスペクタ・クラス一括バッチAI採点：</strong><br>• <strong>単一設問のテスト実行と即時中断（<code>✕ 中断</code>）：</strong> 右下の<strong>この設問のAI採点を再実行</strong>をクリックすると、現在表示中の学生の該当設問だけでルーブリックを試せます。推論モデルの応答に時間がかかる場合は、スピナー横の赤い <strong><code>✕ 中断</code></strong> ボタンで即座に処理をキャンセルできます。<br>• <strong>ライブAIクエリ＆送信画像インスペクタ（<code>👁️ AIクエリ</code>）：</strong> 単一採点ボタンの横にある <strong><code>👁️ AIクエリ</code></strong> をクリックすると、<strong>AIクエリ確認モーダル</strong>が開き、(1) <strong>Visionモデルへ送信される実際の切り出し／結合JPEG画像</strong>と問題文の取得元（<strong>学生の答案</strong>か<strong>白紙テンプレート <code>canvas.pdf</code></strong>か、ワンクリック切替付き）、(2) 完全な<strong>システムプロンプト＆ユーザープロンプト</strong>、(3) <strong>HTTP JSONペイロード構造</strong>（<code>code_execution</code> 等の有効ツールやJSONスキーマを含む）をリアルタイムで確認できます。<br>• <strong>複数答案の一括実行（<code>▶ AI採点</code>）：</strong> 左上の <strong>▶ AI採点</strong> から対象の答案と設問を選択して一括採点を開始します。高速な<strong>⚡ 標準モード</strong>（PDFキャッシュ共有による <code>(答案, 設問)</code> 並列ワーカー実行）と、Gemini・OpenAI・Anthropic の直接APIキー利用時に推奨される<strong>🌿 Flex／非同期バッチモード（APIコスト50%割引）</strong>を選択できます。<br>• <strong>採点時の異常検知オプション（<code>⚠️ 異常</code>）：</strong> AI設定でデフォルト有効となっており、枠外への解答記述、判別困難な取り消し線、判読不能な文字、ページの取り違えなどの視覚的・物理的な異常を採点中に自動検出し、<code>⚠️ 異常</code> フィルタで抽出してワンクリックで確認済みにできます。"
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "採点コンソール全体像：左ペインの学生リスト（⭐ 模範解答、ステータスドット、設問得点＆合計点）、中央の設問領域自動フォーカスPDF、右ペインのルーブリック操作パネル"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "右ペイン下部：AIの採点根拠、学生向けフィードバック（Markdown + KaTeX対応）、上書き保護チェックボックス、および「この設問のAI採点を再実行」"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "AI採点開始モーダル：対象答案・設問、上書き保護ルール、および標準モード vs. 非同期バッチFlexモード（-50%）の選択"
                }
            ],
            callouts: [
                {
                    title: "100%手動でも快適な2次元キーボード操作",
                    desc: "↑/↓（K/J）で答案移動、←/→（H/L）で設問切替、1〜9で基準ON/OFF、Vで承認、Escで入力欄を抜け、?でショートカット一覧を表示します。"
                },
                {
                    title: "推奨のFlexバッチモード（50%割引）",
                    desc: "Gemini、OpenAI、Anthropic の直接APIキーで利用でき、通常の半額コストでクラス全体の非同期AI事前採点を行えます。"
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "試験モード • ステップ 6 — チーム共同採点（Gradaly Pro）",
            badge: "共同共有＆選択的マージ • PRO",
            shortTitle: "チーム共有＆マージ（PRO）",
            title: "共同採点のためのプロジェクト共有と設問別の選択的マージ",
            subtitle: "ローカルの .gradaly アーカイブまたはエンドツーエンド暗号化クラウドリンクを介して、共同担当者やTAと設問分担採点を行えます（Gradaly Pro）。",
            paragraphs: [
                "複数の教員やティーチング・アシスタント（TA）で試験を分担採点する場合、<strong>Gradaly Pro</strong> ではプロジェクト全体または軽量な差分データをローカルの <code>.gradaly</code> アーカイブファイル、あるいは<strong>AES-256-GCM 暗号化クラウドリンク</strong>（有効期間：7日・14日・30日）として安全に共有できます。",
                "受け取った担当者が<strong>インポート／マージ</strong>をクリックすると、Gradalyは問題用紙テンプレートPDFの SHA-256 ハッシュ値を検証し、<strong>新規プロジェクトとしてインポート</strong>するか、既存のローカルプロジェクトへ<strong>設問単位で採点基準や採点結果を選択的にマージ</strong>するか（例：TA1が担当した問1・問2と、TA2が担当した問3・問4を統合）を選べます。マージ実行前には自動バックアップが作成されるため安心です。"
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "プロジェクト共有／エクスポート画面（Gradaly Pro）：共有プリセット、設問別フィルタ、および AES-256 暗号化クラウドリンクの生成"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "インポート／選択的マージ画面（Gradaly Pro）：SHA-256 による同一試験検証と、設問ごとの採点基準・採点結果のマージ設定"
                }
            ],
            callouts: [
                {
                    title: "エンドツーエンド暗号化クラウドリンク",
                    desc: "クライアント側 AES-256-GCM 暗号化により安全にチーム共有できます（復号キー #k=... はサーバーには一切送信されません）。"
                },
                {
                    title: "設問ごとの選択的マージ機能",
                    desc: "ローカルの手動修正を保護しつつ自動バックアップを保存した上で、複数のTAによる採点結果をクリーンに統合します。"
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "試験モード • ステップ 7 — 統計分析と答案返却",
            badge: "Excel • Moodle CSV • 注釈付きPDF • Webポータル",
            shortTitle: "統計・Moodle・PDF・Webポータル",
            title: "クラス統計分析、Moodle出力、注釈付きPDF、および学生用答案閲覧ポータル",
            subtitle: "得点分布を多角的に分析し、Moodleへの成績・個別答案リンクの一括取り込みや、学生一人ひとりへの丁寧なフィードバック返却を行います。",
            paragraphs: [
                "<strong>6. 集計・統計</strong>タブでは、平均値、中央値、標準偏差、最小値／最大値、境界が明確な区間 <code>[a, b[</code> のヒストグラム、および各評価基準の達成率がリアルタイムに算出されます。",
                "採点結果を学生へ返却・出力するには、以下の4つのチャネルを選択できます（無料版では答案1件のテスト出力、Gradaly Proでは履修クラス全員分の出力が可能）：<br>1) <strong>複数シートExcel成績ブック</strong>（全体サマリーシート＋設問別シート、全答案または選択した答案のみ対象）。<br>2) <strong>Moodleエクスポート（評定表CSV ＆ 課題オフライン採点ワークシート）</strong>：<em>Moodle 評定表 → インポート → CSVファイル</em> 用の標準UTF-8 CSVを生成するか、<em>Moodle「課題」</em>からダウンロードしたオフライン採点ワークシートへ（学籍番号またはメールアドレスで自動照合して）直接書き戻せます。換算後の評点（素点、<code>/20</code> 換算、<code>/100</code> 換算）だけでなく、Moodleの<em>フィードバックコメント</em>欄に各学生専用のクリック可能な<strong>暗号化オンライン答案閲覧URL</strong>を自動埋め込みできます！<br>3) <strong>ファイル名形式をカスタマイズ可能な個別注釈付きPDF（ZIP一括または単体出力）</strong>：総括カバーページと学生の手書き答案ページ・設問別ルーブリックシートを統合したPDFを生成します。出力ファイル名は柔軟なプレースホルダ（<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — 例：<code>{nom}_{prenom}_{projet}.pdf</code>）をライブプレビュー付きで自在に設定できます。<br>4) <strong>Zero-Knowledge 学生用答案閲覧Webポータル</strong>：マルチコアCPUパイプラインと10並列HTTP/2ストリームにより暗号化済み答案を高速にオンライン公開・差分同期し、<strong>クラウド直接メール送信（<code>@gradaly.io</code>）</strong>または<strong>差し込みメール出力（ご自身の大学メールアドレスを使った Outlook Web / Microsoft 365、Word + Outlook デスクトップ、Thunderbird からの一括送信）</strong>用のExcel <code>.xlsx</code>／Word <code>.docx</code>／<code>.csv</code> 出力、<strong>Moodle</strong>連携、あるいは教室で手渡しできる<strong>切り取り式QRコードチケット（A4シート）</strong>の印刷で安全に案内できます。"
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "集計・統計タブ（試験モード）：クラスの主要統計指標、得点分布ヒストグラム、評価項目ごとの達成率、およびエクスポートハブ"
                }
            ],
            callouts: [
                {
                    title: "Excel成績表＆注釈付きPDF",
                    desc: "大学公式提出に使える詳細なExcel成績表と、評価基準の内訳・KaTeX数式入り講評を添えた個別答案PDFを生成します。"
                },
                {
                    title: "Moodle CSV出力＆オンライン答案リンク",
                    desc: "評点とクリック可能な個別答案閲覧URLをMoodle（評定表CSVインポートまたは課題のオフライン採点ワークシート）へ直接取り込めます。"
                },
                {
                    title: "暗号化された学生用答案閲覧ポータル",
                    desc: "学生はMoodle、メールのマジックリンク、または個別QRチケットから自身の答案・達成基準・個別講評を確認できます。"
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "試験モード • ステップ 8 — AI設定（任意）",
            badge: "OpenRouter • Gemini • GPT • Claude • ローカル",
            shortTitle: "APIキー設定とAIモデルの選択",
            title: "APIキーの設定と最適なAIモデルの選び方",
            subtitle: "100%手動モードのみでご利用の場合は本章をスキップできます。AIルーブリックアシスタントやAI事前採点を利用するには、設定（⚙️）でAPIキーを登録します。",
            paragraphs: [
                "<strong>採点品質は選択するAIモデルの性能に直結します：</strong> 大学の手書き答案（数学、物理学、工学、経済学、人文・社会科学）を対象とした私たちのベンチマーク検証では、<strong><code>Gemini 3.8 Flash</code></strong>、<strong><code>GPT 5-4 mini</code></strong>、<strong><code>Claude-Sonnet-5.5</code></strong>、および <strong><code>Mistral-Large 4.0</code></strong> で<strong>極めて優れた採点精度</strong>が得られています。科目の特性に合わせてぜひ複数のモデルをお試しください！",
                "<strong>プロバイダ直接キー vs. OpenRouter：</strong> <strong>Google Gemini</strong>、<strong>OpenAI</strong>、または <strong>Anthropic</strong> で直接APIキーを発行する方法（50%割引の非同期<strong>バッチ／Flexモード</strong>が利用可能）のほか、<strong>1つのAPIキー・1つのアカウント残高ですべての主要プロバイダのモデル</strong>（Gemini、GPT、Claude、Mistral、DeepSeek、Qwen、Llama等）を横断利用できる <strong>OpenRouter</strong> も大変便利です。",
                "<strong>上乗せ手数料 0%・独自の「AIクレジット」販売なし：</strong> 単一モデルに縛り付けた上で高額な上乗せマージン付きの「AIクレジットパック」を販売する商用クラウド型サービスとは異なり、GradalyはAI利用に対して<strong>一切の手数料（0%）を上乗せしません</strong>。お支払いは各プロバイダの純粋なトークン原価のみであり、<strong>所属大学が学内LLMサーバーを無償提供している場合や、Ollamaでローカルモデルを実行する場合はトークン費用 0円（0 €）</strong>で運用できます。",
                "<strong>詳細設定 — ネイティブPythonコード実行（<code>code_execution</code> / <code>code_interpreter</code>）：</strong> <em>設定（⚙️）→ 詳細設定</em> から、オプションの<strong>Pythonコード実行</strong>ツール（初期状態はオフ）を有効化できます。これを有効にすると、ルーブリック設計時および答案採点時にAIモデルが安全なサーバー側サンドボックス内（Google Gemini の <code>code_execution</code>、OpenAI <code>/v1/responses</code> の <code>code_interpreter</code>、Anthropic <code>/v1/messages</code> の <code>code_execution_20250825</code>）でPythonコードを記述・実行して検算を行います。数値計算、指数・三角関数、アルゴリズムのトレースなどを含む理系（STEM）試験に特に威力を発揮し、<strong>コード実行対応テスト</strong>ボタンで選択中のモデルの対応状況をワンクリックで確認できます。",
                "<strong>詳細設定 — 拡張AIデバッグモード（<code>.debug/grading/inspect.html</code>）：</strong> <strong>AIデバッグモード</strong>を有効にすると、すべてのAI採点について完全な診断バンドルが <code>.debug/grading/</code> 内に保存されます。単体で開けるビジュアルHTMLレポート（<strong><code>inspect.html</code></strong> および <code>latest_inspect.html</code>）には、AIへ送信された正確な画像、問題文の切り出し元（学生の答案か白紙テンプレートかを示す <code>image_source.json</code>）、システム／ユーザープロンプト（<code>prompt.txt</code>）、HTTP JSONリクエスト全体（<code>request_payload.json</code>）、モデルが実行したPythonコードとそのコンソール出力、そして生のAPIレスポンス（<code>raw_api_response.json</code>）がすべて記録されます。"
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "AI設定モーダル（⚙️）：プロバイダ（Google Gemini、OpenRouter、OpenAI、Anthropic、またはローカル／大学サーバー）とモデルを選択し、接続＆Vision対応をテスト"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter（マルチプロバイダ統合ゲートウェイ）",
                    tag: "1つのキーで全モデル対応",
                    icon: "fas fa-network-wired",
                    desc: "<strong>特長：</strong> 1つのアカウントとAPIキーだけで、<code>Gemini 3.8 Flash</code>、<code>GPT 5-4 mini</code>、<code>Claude-Sonnet-5.5</code>、<code>Mistral-Large 4.0</code> をはじめとする数百種類のモデルを複数の請求アカウント管理なしで切り替えられます（注：OpenRouterでは非同期バッチモードは利用できません）。",
                    steps: [
                        "<strong>openrouter.ai</strong> にアクセスしてサインイン（または無料アカウントを作成）します。",
                        "<strong>Credits</strong> を開き、少額のプリペイド残高（例：5ドルまたは10ドル — 数千ページ分の試験採点に十分です）をチャージします。",
                        "<strong>Keys</strong> → <strong>Create Key</strong> をクリックし、名前に <code>Gradaly</code> と付けて <code>sk-or-v1-...</code> で始まるキーをコピーします。",
                        "Gradalyの<strong>設定（⚙️）</strong>を開き、<strong>OpenRouter</strong> を選択してキーを貼り付け、使用するモデルを選びます。"
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "OpenRouter APIキー管理画面を開く"
                },
                {
                    name: "Google Gemini（Google AI Studio）",
                    tag: "高速＆優れたコスト効率",
                    icon: "fas fa-bolt",
                    desc: "Googleのマルチモーダルモデル <code>Gemini 3.8 Flash</code> や Pro シリーズへ直接アクセスでき、50%割引の非同期バッチモードにもネイティブ対応しています。",
                    steps: [
                        "Googleアカウントで <strong>Google AI Studio</strong>（<code>aistudio.google.com</code>）にサインインします。",
                        "左メニューの <strong>Get API key</strong> をクリックし、<strong>Create API key</strong> を選択します。",
                        "生成されたキー（<code>AIzaSy...</code> で始まる文字列）をコピーします。高いレート上限を利用したい場合は従量課金（Pay-as-you-go）を有効にします。",
                        "Gradalyの<strong>設定（⚙️）</strong>を開き、<strong>Google Gemini</strong> を選択してキーを貼り付けます。"
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Google AI Studio APIキー画面を開く"
                },
                {
                    name: "OpenAI（GPTモデル）",
                    tag: "高い論理・計算検証精度",
                    icon: "fas fa-brain",
                    desc: "<code>GPT 5-4 mini</code> などのOpenAIマルチモーダルモデルへ直接接続でき、段階的な計算過程の検証に強く、50%割引のバッチモードも利用可能です。",
                    steps: [
                        "<strong>platform.openai.com</strong> にサインインします（個人向け ChatGPT Plus サブスクリプションとは別体系です）。",
                        "<strong>Settings → Billing</strong> を開き、少額のプリペイド残高（例：5ドル）をチャージします。",
                        "<strong>Dashboard → API keys</strong> を開き、<strong>+ Create new secret key</strong> をクリックしてキー（<code>sk-proj-...</code>）をコピーします。",
                        "Gradalyの<strong>設定（⚙️）</strong>を開き、<strong>OpenAI</strong> を選択してキーを貼り付け、モデルを選択します。"
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "OpenAI Platform APIキー画面を開く"
                },
                {
                    name: "Anthropic（Claudeモデル）",
                    tag: "数学的証明・記述論述に最適",
                    icon: "fas fa-feather-alt",
                    desc: "手書きの数学的証明の読解や、丁寧でニュアンス豊かな講評文の作成に定評がある <code>Claude-Sonnet-5.5</code> や Opus モデルへ直接アクセスできます。",
                    steps: [
                        "<strong>Anthropic Console</strong>（<code>console.anthropic.com</code>）にサインインします。",
                        "<strong>Settings → Billing</strong> でプリペイドクレジット残高を有効化します。",
                        "<strong>API Keys</strong> で <strong>Create Key</strong> をクリックし、シークレットキー（<code>sk-ant-...</code>）をコピーします。",
                        "Gradalyの<strong>設定（⚙️）</strong>を開き、<strong>Anthropic</strong> を選択してキーを貼り付けます。"
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Anthropic Console APIキー画面を開く"
                }
            ],
            callouts: [
                {
                    title: "大学学内サーバー または 100%ローカル Ollama",
                    desc: "所属大学がOpenAI互換のAIサーバーを提供している場合や、Ollama（<code>http://localhost:11434/v1</code>）でローカルモデルを実行する場合は、設定で「大学／カスタム」または「ローカル」を選べばトークン費用 0円で利用できます。"
                },
                {
                    title: "ワンクリック接続診断",
                    desc: "画面上部バーのAIステータスバッジをいつでもクリックして、APIキーの有効性とモデルの応答を確認できます。"
                },
                {
                    title: "Pythonコード実行サンドボックス（任意）",
                    desc: "詳細設定でPythonコード実行を有効にすると、Gemini・OpenAI・Anthropic 上で高精度な数値検算が可能になり、ワンクリック互換性テストも備えています。"
                },
                {
                    title: "ビジュアルAIクエリ＆デバッグインスペクタ",
                    desc: "採点タブの「👁️ AIクエリ」ボタンまたは .debug/grading/inspect.html から、送信画像・切り出し元・プロンプト・JSONペイロードを完全に検証できます。"
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "よくある質問（FAQ）",
            badge: "アーキテクチャ・プライバシー・ベストプラクティス",
            shortTitle: "よくある質問（FAQ）",
            title: "よくある質問（FAQ）",
            subtitle: "AI採点の内部的な仕組み、形成的模擬試験と公式試験の使い分け、Documents/Gradaly へのローカル保存、APIキーの安全性、Zero-Knowledge クラウド暗号化、およびサポートに関する詳しい回答です。",
            paragraphs: [
                "以下では、Gradalyの「試験・模擬試験モード」に関して多く寄せられる技術的・教育的・プライバシー上の質問にお答えします。"
            ],
            faqs: [
                {
                    q: "GradalyのAI採点は内部でどのように動作していますか？また、AIに送られる問題画像は「学生の答案」と「白紙テンプレート」のどちらから切り出されますか？",
                    a: "<p>学生の答案の特定の設問に対してAI採点を実行すると、Gradalyはその設問に設定された<strong>矩形領域の切り出し画像</strong>を抽出し、評価基準（<code>CRITERIA</code>）および採点指示（<code>PROMPT_TEXT</code>）を含む構造化プロンプトとともに選択したVision AIモデルへ送信します。</p><p><strong>問題文は「学生の答案」と「白紙テンプレート」のどちらから取得されますか？</strong><ul><li><strong>単一の結合領域（デフォルト）：</strong> 設問ごとに1つの領域を描画した場合、Gradalyはその領域全体を<strong>学生自身の答案PDF（<code>copies/copie_XXX.pdf</code>）から直接切り出します</strong>。白紙テンプレート（<code>canvas.pdf</code>）は使用されないため、学生ごとに異なる数値パラメータが印字されている場合でも、AIはその学生固有の数値と解答をそのまま読み取ります。</li><li><strong>分離された領域（<code>問題文と解答欄を分離</code>）および <code>AI問題文</code> オプション：</strong> <em>1. テンプレートと設問</em>タブにある <strong><code>AI問題文：[学生の答案] / [テンプレート]</code></strong> セレクタにより、問題文部分を各<strong>学生の答案</strong>から切り出すか（学生ごとに問題が個別化されている場合に必須）、<strong>白紙テンプレート（<code>canvas.pdf</code>）</strong>から切り出すか（問題文が印字されていない別紙の解答用紙を使う場合に便利）を選択できます。</li></ul></p><p><strong>実際の送信画像とJSONクエリの確認方法：</strong> <em>5. 採点</em>タブで<em>「この設問のAI採点を再実行」</em>の横にある <strong><code>👁️ AIクエリ</code></strong> ボタンをいつでもクリックできます（または<em>設定 → 詳細設定</em>で<em>AIデバッグモード</em>を有効にして <code>.debug/grading/inspect.html</code> を開くことも可能です）。AIに送信される正確なJPEG画像、切り出し元の内訳、システム／ユーザープロンプト、HTTP JSONペイロード構造全体、およびモデルが実行したPythonコードを確認できます。</p>"
                },
                {
                    q: "AI採点はどこまで信頼できますか？また、形成的模擬試験に活用するのが良いのでしょうか？",
                    a: "<p><strong>信頼できる面もありますが、最初から無条件に鵜呑みにすべきではありません！</strong> 初期段階では、作成したルーブリックが厳しすぎたり曖昧だったりする場合や、選択したAIモデルが特定の問題解法や特殊な記法の読み取りを苦手とする場合があります。</p><p><strong>形成的模擬試験 vs. 公式な定期試験：</strong> 多くの大学教員が、期末の公式試験は紙のまま手作業で採点（またはGradalyの100%手動モードで採点）する一方で、<strong>学期途中の形成的模擬試験</strong>にはGradalyのAI事前採点を積極的に活用し、本番さながらの試験条件で学生一人ひとりに充実した個別フィードバックを返却しています。</p><p><strong>教員による目視確認と承認が不可欠です：</strong> <strong>単位認定に関わる総括的評価（定期試験等）</strong>でGradalyを使用する場合は、必ず<strong>AIの出力結果に目を通し、教員自身が手動で確認・確定すること</strong>を強く推奨します。Gradalyはすべての学生の解答とフィードバック項目を迅速にレビュー・修正・承認できるよう専用設計されており、それこそが常に最良の運用方法です。</p><p><strong>学生への透明性と採点に関する質問・異議申し立て：</strong> Gradalyでは注釈付きPDFや学生用Webポータルを通じてどの評価基準が適用されたかを完全に透明化して返却できるため、学生が自身の採点済み答案を確認し、必要に応じて特定の基準の適用について質問・再確認を求められる機会を設けることを強く推奨します。</p>"
                },
                {
                    q: "AIで試験を採点するのにどれくらいの費用がかかりますか？",
                    a: "<p>一律の固定料金があるわけではなく、学生の答案数、設問数、および選択するAIモデルの規模や料金ティアによって変動します（各APIプロバイダが100万入力／出力トークンあたりの正確な単価を公開しています）。</p><p>実際の大学試験での具体的な目安を挙げると、非常に精度の高い <strong><code>Gemini 3.8 Flash</code></strong> を使用した場合、<strong>履修者400名・手書き解答6〜7ページにわたる大学の統計学試験全体を、Flex／バッチモードで合計約5〜7米ドル程度のAPI費用</strong>で事前採点できています（なお、Gradalyはプロバイダのトークン原価に対して上乗せ手数料 0% です）。</p>"
                },
                {
                    q: "すでに ChatGPT Plus（OpenAI）、Claude Pro、または Gemini Advanced の有料サブスクリプションを契約しています。APIキーの代わりにそれを使えないのですか？",
                    a: "<p><strong>1. AIプロバイダ側で完全に別製品として分離されているため：</strong> OpenAI、Anthropic、Google のいずれにおいても、一般消費者向けのチャット月額プラン（月額約20ドルの ChatGPT Plus、Claude Pro、Gemini Advanced）と<strong>開発者向けAPIアクセス</strong>は、請求体系も技術基盤も完全に分離された別サービスです。月額チャットプランはWebブラウザやスマホアプリ上での手動対話のみを対象としており、Gradalyのような外部ソフトウェアからの自動リクエストは技術的に許可されていません（また各社の利用規約でも迂回利用が明確に禁止されています）。</p><p><strong>2. 並列一括採点とより厳格なデータプライバシー保護：</strong> 数十〜数百件の答案を並列処理し、構造化された採点データ（チェック済み評価基準、採点根拠、学生向けフィードバック）を受け取るには、公式API経由での通信が不可欠です。さらに重要な点として、<strong>商用API通信にはより厳格なプライバシー保証が適用されます</strong>。標準設定の一般向けWebチャットとは異なり、商用API経由で送信された解答データは<strong>OpenAI、Google、Anthropic のAIモデル学習には契約上使用されません</strong>。</p><p><strong>3. 月額固定費不要・ごく低廉な従量課金コスト：</strong> APIキーには月額基本料金はかからず、実際に消費したトークン分だけを支払う仕組み（<em>Pay-as-you-go</em>、Gradalyの手数料 0%）であり、通常は<strong>数百名規模のクラス全体の採点でもわずか数ドル程度</strong>で済みます（Google Gemini API にはテスト用の無料枠も用意されています）。1つの残高で複数モデル（OpenAI、Claude、Gemini、Mistral）を使い分けたい場合は <strong>OpenRouter</strong> や所属大学の学内AIサーバーをご利用いただけます。</p>"
                },
                {
                    q: "AIによる試験の一括採点にはどれくらいの処理時間がかかりますか？",
                    a: "<p>処理時間は設問領域の数、答案数、およびAIモデルの推論負荷によって異なります。実運用での目安として、<strong>学生答案400件・設問5問・手書き解答約10ページ規模の試験</strong>であれば、並列モードで通常<strong>約10分程度で試験全体の事前採点が完了</strong>します。</p><p><strong>処理を高速化するヒント：</strong> ご利用のAPIプロバイダのレート制限（1分あたりリクエスト上限）が許す範囲で、<strong>設定（⚙️）</strong>内の<strong>同時並列ワーカー数</strong>を増やすことで全体の処理時間を大幅に短縮できます。</p>"
                },
                {
                    q: "学生の答案をスキャンする際、解像度（DPI）はいくつに設定すべきですか？",
                    a: "<p><strong>文字が鮮明に読める範囲で可能な限り軽量なファイル</strong>にするのが理想であり、人間による閲覧とAI Visionモデルの双方にとって <strong><code>150 DPI</code> 〜 <code>200 DPI</code></strong> が最適なスイートスポットです。</p><p><strong>300 DPI や 600 DPI でスキャンすべきでない理由：</strong> 超高解像度でスキャンしてもAIの採点精度は一切向上しない（Visionモデルは内部で画像をリサイズするため）一方で、PDFのファイルサイズが4倍〜10倍に肥大化し、PDF分割やページめくり、暗号化クラウドへのアップロードが不必要に重くなります。</p><p><strong>カラー設定でのスキャンを推奨：</strong> 極端な白黒2値（1-bitモノクロ）モードではなく、<strong>カラー（150〜200 DPI、標準的なJPEG/PDF圧縮）</strong>でのスキャンをおすすめします。薄い鉛筆の筆跡、学生が図表に使った色ペン、数式の小さな添字などが遥かに忠実に保持されます。</p>"
                },
                {
                    q: "GradalyのプロジェクトファイルはPCのどこに保存されますか？",
                    a: "<p>すべての試験プロジェクトは、お使いのPCの <strong><code>Documents/Gradaly/</code></strong> フォルダ内（macOS/Linux では <code>~/Documents/Gradaly/</code>、Windows では <code>C:\\Users\\ユーザー名\\Documents\\Gradaly\\</code>）に、プロジェクトごとのサブフォルダとしてローカル保存されます。</p><p>各プロジェクトフォルダの中身は、すべて透明性の高い標準フォーマットで構成されています：<ul><li><strong>PDFファイル：</strong> 白紙の問題用紙テンプレート（<code>canvas.pdf</code>）、任意の模範解答（<code>solution.pdf</code>）、および <code>copies/</code> 内の個別答案PDF（<code>copie_01.pdf</code>, <code>copie_02.pdf</code> 等）。</li><li><strong>プレーンテキストJSONファイル：</strong> 設問領域と採点基準（<code>config.json</code>）、氏名・学籍番号・メールアドレスを含む履修者名簿（<code>students.json</code>）、OCRによる学生と答案の紐づけ表（<code>matching.json</code>）、および <code>gradings/</code> 内の各答案の採点・講評データ（<code>copie_01.json</code> 等）。</li></ul></p><p><strong>⚠️ 重要なご注意：</strong> このオープンなフォルダ構成により <code>Documents/Gradaly</code> 全体のバックアップ（Time Machine、Nextcloud、OneDrive 等）は容易に行えますが、<strong>プロジェクトフォルダ内のファイルを手動で直接編集・リネーム・移動することは絶対にお控えください</strong>。内部参照が壊れ、プロジェクトが破損する原因となります。</p>"
                },
                {
                    q: "APIキーはどこに保存されますか？セキュリティ面は安全ですか？",
                    a: "<p>登録したAI APIキー（Gemini、OpenRouter、OpenAI、Anthropic）は、ユーザーのホームディレクトリ直下にある隠し設定ファイル <code>.gradaly_settings.json</code>（macOS/Linux では <code>~/.gradaly_settings.json</code>、Windows では <code>C:\\Users\\ユーザー名\\.gradaly_settings.json</code>）として<strong>お使いのPC内にのみ厳格にローカル保存</strong>されます。</p><p><strong>セキュリティ保証：</strong><ul><li>あなたのAPIキーが<strong>Gradalyのサーバーへ送信されることは一切なく</strong>、また共同担当者へ <strong><code>.gradaly</code> プロジェクトアーカイブをエクスポート・共有する際にも絶対に同梱されません</strong>。</li><li>AIルーブリック設計やAI事前採点を実行する際、お使いのPCは選択したプロバイダ（Google、OpenRouter、OpenAI、Anthropic、または大学サーバー）の公式APIエンドポイントと<strong>暗号化されたHTTPS（TLS 1.3）で直接通信</strong>します。</li><li>APIキーの無効化・再発行や月間利用上限額の設定は、各プロバイダの管理画面からいつでも行えます。</li></ul></p>"
                },
                {
                    q: "試験結果をクラウドで公開したり、クラウド共有リンクを作成したりした場合、データはどこに保存され、誰がアクセスできますか？",
                    a: "<p><strong>学生用Webポータル</strong>への試験公開や<strong>チーム共同採点用クラウド共有リンク</strong>を生成する際、<strong>すべてのファイルはお使いのPC上で <code>AES-256-GCM</code> によって事前に暗号化されてから初めて送信されます</strong>。当社の欧州クラウドストレージ（EU域内ホスティング・有効期限後に自動消去）には、解読不能な暗号化バイナリデータ（<code>.enc</code>）のみが保存されます。</p><p>復号用の秘密鍵（<code>#k=...</code>）は、URLの <code>#</code> 記号以降のフラグメント部分にのみ格納されます。Web標準仕様（RFC 3986）により、Webブラウザは<strong><code>#</code> 以降のURLフラグメントをサーバーへ一切送信しません</strong>。そのため、<strong>Gradalyの開発者であってもクラウド上のファイルを閲覧することは原理的に不可能であり、万一クラウド基盤が侵害されたとしても第三者は何も読み取れません</strong>。復号鍵を持つのは、あなた自身とあなたが個別リンクを送った相手だけです。</p>"
                },
                {
                    q: "なぜGradalyはWebアプリではなくデスクトップアプリなのですか？Gradalyの将来ビジョンは何ですか？",
                    a: "<p>私たちがネイティブ・デスクトップ・アーキテクチャ（macOS、Windows、Linux）を採用した理由は大きく2つあります：</p><p>1) <strong>即時のデータ主権（Data Sovereignty）：</strong> 試験の準備や名簿照合をするためだけに、暗号化されていない履修者名簿や学生の答案スキャンを外部SaaS事業者のデータベースへアップロードする必要が一切ありません。</p><p>2) <strong>長期ビジョン（100%自律的なローカルAI採点）：</strong> AI向けハードウェアとオープンウェイトのマルチモーダルモデルは急速に進化しています。<strong>今後数年以内に、高度な視覚言語モデル（VLM）が教員自身のノートPC上（または学科・研究室のローカルサーバー上）で直接動作する時代が来る</strong>と私たちは確信しています。ローカルエンドポイント（Ollama / vLLM / 学内サーバー）に標準対応したネイティブデスクトップアプリであるGradalyなら、教育者はクラウド依存ゼロ・トークン費用ゼロの<strong>100%自律的なオフライン採点環境</strong>へそのまま移行できます。</p>"
                },
                {
                    q: "従来のWeb型採点プラットフォームやクラウドAI採点サービスとの違いは何ですか？",
                    a: "<p><strong>従来のWebブラウザ型採点プラットフォームとの違い：</strong> ブラウザベースの従来型システムには、ファイル統合不要のリアルタイム同時ブラウザ編集、マークシート（多肢選択式）の高度な処理、解答の自動クラスタリングといった利点があります。しかし一方で、自由記述の手書き論述に対するマルチモーダルAI事前採点や対話型AIルーブリック設計アシスタントは備えておらず、また学生データが外部サーバー上に平文で保管されるためデータ主権の面で制約があります。Gradalyは<strong>100%手動モード</strong>で同様のルーブリック採点ワークフローを実現しつつ、任意のAIルーブリック設計・AI事前採点と100%ローカルのデータ管理を両立しています。</p><p><strong>新興のクラウドAI採点サービスとの違い：</strong> 多くのクラウドAI採点サービスは単一のブラックボックスAIモデルを固定し、独自の「AIクレジットパック」に高い上乗せマージンを課して販売しています。対してGradalyでは<strong>使用するAIモデルを自在に選択でき</strong>（Gemini、GPT、Claude、Mistral、OpenRouter、または無料の大学／ローカルサーバー）、<strong>AI利用に対する上乗せ手数料は 0%</strong> です。</p>"
                },
                {
                    q: "素早い採点と画面移動のためにどのようなキーボードショートカットが使えますか？",
                    a: "<p>Gradalyはマウスに手を触れずにクラス全体の移動と採点を完結できるよう設計されています。いつでも <strong><code>?</code></strong> キーを押す（または上部バーの <strong><code>⌨️</code></strong> アイコンをクリックする）と、アプリ内でショートカット一覧を表示できます：</p><ul><li><strong><code>↑</code> / <code>↓</code>（または <code>K</code> / <code>J</code>）：</strong> 前の答案／次の答案へ移動（<em>学生</em>、<em>答案</em>、<em>答案照合</em>、<em>採点</em>の各タブ共通）。</li><li><strong><code>←</code> / <code>→</code>（または <code>H</code> / <code>L</code>）：</strong> 前の設問／次の設問へ移動（<em>テンプレートと設問</em>および<em>採点</em>タブ）、または前のPDFページ／次のPDFページへ移動（<em>答案</em>タブ）。</li><li><strong><code>Shift + ←</code> / <code>Shift + →</code>（または <code>PageUp</code> / <code>PageDown</code>）：</strong> <em>採点</em>タブ内でアクティブな設問を変えずにPDFページをめくる。</li><li><strong><code>1</code> 〜 <code>9</code>（数字キーまたはテンキー）：</strong> 表示中の設問の評価基準 #1 〜 #9 のチェックをON/OFF切替。</li><li><strong><code>V</code>：</strong> 表示中の設問に対する教員の手動確認（承認）ステータスを切替。</li><li><strong><code>Esc</code>：</strong> テキスト入力欄（フィードバック、採点根拠、検索バー）からフォーカスを抜け、矢印キー・数字キーのショートカットを即座に再有効化。</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>：</strong> 画面の文字サイズを拡大／縮小／リセット。</li></ul>"
                },
                {
                    q: "Moodleへ成績と学生別のオンライン答案閲覧リンクをインポートするにはどうすればよいですか？",
                    a: "<p>Gradalyには専用の <strong>🎓 Moodleエクスポート（CSV）</strong>ツール（<strong>オンラインWebポータル</strong>管理画面およびメインの<strong>エクスポート</strong>画面の両方から起動可能）が搭載されており、Moodleの2つの公式インポート方式に対応しています：</p><p><strong>1. Moodle 評定表（Gradebook）への直接CSVインポート：</strong><ul><li>Gradalyで <strong>1. Moodle 評定表（直接CSV）</strong>を選択し、得点の換算スケール（試験の素点合計、<code>/20</code> 換算、または <code>/100</code> 換算）とフィードバック内容（<code>portal.gradaly.io</code> 上の暗号化答案へのクリック可能な個別リンク＋設問別得点内訳）を指定してUTF-8 CSVファイルを出力します。</li><li>Moodleのコース画面で<strong>評定（Grades）</strong>タブを開き、左上のドロップダウンメニュー（<strong>評定者レポート</strong>）→ <strong>インポート</strong> → <strong>CSVファイル</strong>を選択してCSVをアップロードします。</li><li><em>ユーザの識別方法</em>で <code>IDナンバー</code>（学籍番号）同士（または <code>メールアドレス</code> 同士）を対応付け、<em>評定項目のマッピング</em>で <code>評点（Grade）</code> 列を対象の評定項目（または<em>新しい評定項目</em>）に、<code>フィードバック（Feedback）</code> 列を対応する<strong>フィードバック</strong>欄にマッピングします。</li></ul></p><p><strong>2. Moodle「課題（Assignment）」オフライン採点ワークシートへの自動記入（列マッピング不要）：</strong><ul><li>Moodleの<em>課題</em>の設定で、<em>フィードバックタイプ</em>内の<em>オフライン採点ワークシート</em>と<em>フィードバックコメント</em>を有効にし、<em>すべての提出を表示 → 評定アクション：採点ワークシートをダウンロード</em> からCSVを取得します。</li><li>Gradalyで <strong>2. Moodle課題シートに記入</strong>を選び、そのCSVを指定するだけです。Gradalyが学籍番号またはメールアドレスで全学生を自動照合し、<code>評点</code> 列と <code>フィードバックコメント</code> 列をそのまま埋めたCSVを出力するため、そのままMoodleへ再アップロードできます！</li></ul></p>"
                },
                {
                    q: "自分自身の大学メールアドレス（Outlook Web、Word + Outlook、Thunderbird）から差し込みメール機能で学生に通知を送れますか？",
                    a: "<p><strong>はい、可能です！</strong> オンラインWebポータルの <strong>✉️ メールで通知</strong>ウィンドウを開き、2つ目のタブ <strong>📊 差し込みメール（自分のメールソフト）</strong>に切り替えます。件名と本文（<code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code> などの変数を利用可能）をカスタマイズし、用途に応じた3種類の専用フォーマットで出力できます：<strong>Wordデータソース <code>.docx</code></strong>（Microsoft Word + Outlook 差し込み印刷用）、<strong>Excelブック <code>.xlsx</code></strong>（Microsoft 365 / Power Automate 用の <code>Publipostage</code> テーブル定義済み）、または <strong>UTF-8 <code>.csv</code> ファイル</strong>（Thunderbird用）。</p><p><strong>Gradalyの差し込みメール出力が非常に使いやすい理由：</strong> 個別列（<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>）に加えて、<strong>学生ごとに組み立て済みの完成列</strong>である <code>SUJET_PRET</code>（完成済み件名）、<code>MESSAGE_TEXTE_PRET</code>（完成済みプレーンテキスト本文）、<code>MESSAGE_HTML_PRET</code>（完成済みHTML本文）があらかじめ収録されているため、メール側にそのフィールドを1つ挿入するだけで済むからです：</p><ul><li><strong>💼 Microsoft Word + クラシック Outlook デスクトップ（Windows &amp; Mac）：</strong> Gradalyで <strong>Word用に出力（<code>.docx</code>）</strong>をクリックします。Wordで<em>差し込み文書 → 宛先の選択 → 既存のリストを使用…</em> を開き、出力した <code>.docx</code> を選択します（macOS上の <code>.xlsx</code> とは異なり、ネイティブなWord表形式の <code>.docx</code> はExcel変換の警告ポップアップやサンドボックスエラーを起こさず即座に読み込めます）。差し込みフィールド <code>«MESSAGE_TEXTE_PRET»</code> を挿入し、<em>完了と差し込み → 電子メールメッセージの送信…</em>（宛先：<code>EMAIL</code>）を実行します。</li><li><strong>🌐 Outlook Web（ブラウザ版 Microsoft 365）＋ Power Automate：</strong> <strong>Excelに出力（<code>.xlsx</code>）</strong>をクリックし、大学のOneDriveへアップロードします。Microsoft Power Automate（<code>make.powerautomate.com</code>）で2ステップのインスタントクラウドフローを作成します：<em>Excel Online (Business) → 表内に存在する行を一覧表示</em>（ファイルと <code>Publipostage</code> テーブルを選択）に続けて、<em>Office 365 Outlook → メールの送信 (V2)</em> を追加し、<code>宛先 = EMAIL</code>、<code>件名 = SUJET_PRET</code>、<code>本文 = MESSAGE_HTML_PRET</code> を指定します。少人数クラスや個別の再送信であれば、Gradaly内の学生行（またはExcelシート）にある <strong>Outlook Web</strong> ボタンをクリックするだけで <code>outlook.office.com</code> の作成画面が自動入力状態で開きます！</li><li><strong>🦅 Mozilla Thunderbird（Windows, macOS, Linux）：</strong> 無料アドオン <em>Mail Merge</em> をインストールし、新規メール作成で宛先に <code>{{EMAIL}}</code>、件名に <code>{{SUJET_PRET}}</code>、本文に <code>{{MESSAGE_TEXTE_PRET}}</code> と入力して、出力した <code>.csv</code> ファイルで <em>Mail Merge → CSV</em> を実行します。</li></ul>"
                },
                {
                    q: "機能改善の提案やバグ報告はどこから行えますか？",
                    a: "<p>ご意見・ご感想、新機能のアイデア、不具合のご報告は大歓迎です！GitHubの公式イシュートラッカーから直接ご投稿いただけます：<a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>。</p>"
                }
            ]
        },

        // =========================================================================
        // GUIDE 2: PRACTICE & SELF-ASSESSMENT QR MODE (P1 to P5) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "practice-getting-started",
            guide: "practice",
            stepNumber: "P1",
            partHeader: "マニュアル 2 — QR自己評価・演習モード（学生用）",
            partColor: "teal",
            partBanner: {
                kicker: "マニュアル 2 • 機能 2：形成的QR演習モード",
                title: "印刷可能なQR演習プリントによる学生の自律的自己評価 完全ガイド",
                desc: "100%単独完結型ガイド：QRコードを埋め込んだ演習PDFシートを作成し、学生が紙に解答を書いてスマートフォンで撮影するだけで即座に形成的AIフィードバックを受け取れる環境を構築します（portal.gradaly.io ではAPIキー不要、個人のGeminiキーも任意で利用可能）。"
            },
            tag: "QR演習モード • ステップ 1 — コンセプトとプロジェクト作成",
            badge: "形成的評価 • 学生の自律演習",
            shortTitle: "概要と演習プロジェクトの作成",
            title: "QR演習モードの仕組みと演習プロジェクトの作成",
            subtitle: "答案を1枚も回収せず、教員のAPIキーも一切公開することなく、紙の手書き演習とスマートフォンでの即時AIフィードバックを学生に提供します。",
            paragraphs: [
                "<strong>QR演習モード（<code>演習</code> / <code>Practice</code> バッジ）の教育的な狙い：</strong> 中間試験や期末試験に向けて、学生は演習問題や課題プリント、過去問などを実際に紙の上で手を動かして解く訓練を重ねる必要があります。しかし、毎週何百枚もの演習シートを回収してすべて添削することは現実的に困難です。<strong>QR演習モードは、あらゆるPDF演習プリントを対話型の自己評価チューターへと進化させます：</strong><br>1. <strong>教員</strong>は演習問題のPDFを用意し、評価基準（および任意の<code>模範解答</code>）を設定してPDF上にQRコードを配置し、暗号化された静的Webポータルを公開します。<br>2. <strong>学生</strong>はPDFプリントを印刷（またはタブレット・PC画面に表示）し、数式の展開や論述解答を紙に手書きした上で、<strong>設問のQRコードをスマートフォンで読み取り</strong>、手書きの解答をカメラで撮影すると、<strong>評価基準に沿った形成的AIフィードバックをその場で即座に受け取れます</strong>！",
                "<strong>教員のAPIキーは一切不要・非公開 — 内蔵Gradaly AIリレーまたは任意の学生キー：</strong> 教員が回収した答案にAI採点を実行する試験モードとは異なり、QR演習モードでは<strong>履修者名簿も回収答案も存在せず、公開ポータル内に教員のAPIキーは一切含まれません</strong>。<code>portal.gradaly.io</code> 上に公開した場合、内蔵のGradaly AIリレーにより学生は<strong>APIキーの設定を一切行うことなくその場ですぐに</strong>手書き解答を自己評価できます（18歳未満の生徒を含むすべての学習者に最適です）。また任意で、学生自身のGoogle AI Studio（Gemini）APIキーをスマートフォンのブラウザに登録して利用することも可能です。",
                "<strong>洗練された3タブ構成：</strong> ホーム画面で<strong>新規プロジェクト → 演習プロジェクト（QRコードによる学生の自己評価）</strong>をクリック（または<strong>デモプロジェクトを作成 → 演習デモ</strong>をクリックして英語・フランス語の三角関数演習シートを体験）します。演習プロジェクトは迷わず操作できる<strong>3タブ構成</strong>（<code>1. テンプレートと設問</code>、<code>2. QRコード配置</code>、<code>3. Web公開</code>）で開きます。"
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "ホーム画面：演習プロジェクトにはティール（青緑）色の「Practice（演習）」バッジが付与され、試験プロジェクトと並べて管理できます"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "デモ作成モーダル：「演習デモ（QR自己評価）」を選択すると、すぐに試せるQR演習プリントが開きます"
                }
            ],
            callouts: [
                {
                    title: "紙の記述＋スマートフォンの融合",
                    desc: "学生は紙の上で数式・証明・図表をしっかり手書きする習慣を保ちながら、スマホカメラ経由で即座にAIの個別指導を受けられます。"
                },
                {
                    title: "答案回収ゼロ・履修者名簿ゼロ",
                    desc: "演習プロジェクトには学生名簿タブも答案タブもなく、100%自律的な形成的トレーニングに特化しています。"
                },
                {
                    title: "portal.gradaly.io ならキー設定ゼロ",
                    desc: "portal.gradaly.io 上では事前設定なしで即座にAI自己評価が動作します（任意で個人のGemini APIキーも入力可能）。"
                },
                {
                    title: "すぐに試せる内蔵演習デモ",
                    desc: "ホーム画面から演習デモを起動すると、全10問のQR演習プリントと模範解答の完成例を確認できます。"
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "QR演習モード • ステップ 2 — 演習シート・模範解答・評価基準",
            badge: "100%単独完結型ガイド",
            shortTitle: "演習PDF・模範解答・評価基準",
            title: "演習PDFと模範解答のインポート、および形成的評価基準の設計",
            subtitle: "白紙のPDF上の各演習問題を枠で囲み、模範解答を読み込んで、手動またはAIアシスタントで明確な自己評価基準を作成します。",
            paragraphs: [
                "演習プロジェクトの <strong>1. テンプレートと設問</strong> タブ（上部のシンプルな3タブ構成と、氏名・学籍番号欄が存在しない点に注目してください）では、学生がスマートフォンで撮影した解答写真をAIが評価する際の設問領域と採点基準を定義します：",
                "<strong>1. 白紙の演習PDF（<code>テンプレート</code>）のインポートと各設問の枠指定：</strong> 演習プリントのPDFを読み込み、各問題（<code>Q1</code>, <code>Q2</code>, ...）を長方形で囲みます。<strong>重要：</strong>印刷されている問題文の全文を必ず枠内に含めてください！QR演習モードでは、Gradalyはこの矩形領域を切り出して<strong>学生のスマートフォン画面上部に問題文として表示</strong>するとともに、AIへ正確な視覚的文脈として送信します。",
                "<strong>2. 模範解答PDF（<code>模範解答 / Solutionnaire</code>・任意）のインポート：</strong> PDFビューア上部の<strong>問題文（テンプレート）／ 模範解答</strong>切替を使って、詳しい解法を記した模範解答PDFを読み込めます。白紙プリントと同じページ配置であれば設問枠がそのまま自動適用され、ページ配置が異なる場合は<em>模範解答</em>ビューに切り替えて各設問に対応する解答領域を個別に囲めます。演習モードにおいて模範解答は次の3つの役割を果たします：<br>• <strong>AIルーブリックアシスタント</strong>が正確な評価基準を生成するための参照情報。<br>• 学生の解答写真を評価する際に<strong>AIへ正解の導出過程を伝える基準データ</strong>。<br>• 学生が少なくとも1回手書き解答を撮影・提出した後に、<strong>スマートフォン上で模範解答画像をアンロック表示</strong>する学習教材！",
                "<strong>3. 配点ルールと評価基準の定義（一貫した加点方式または減点方式）：</strong><br>• 得点は <code>得点 = 基本点 + Σ（達成された評価基準の配点）</code> で計算され、<code>0</code> 以上 <code>満点</code> 以下の範囲にクランプされます。<br>• <strong>純粋な加点方式</strong>（<code>基本点 = 0</code>、各ステップに対して <code>+1</code>, <code>+2</code> 等の正の配点）または<strong>純粋な減点方式</strong>（<code>基本点 = 満点</code>、誤りに対する <code>-0.5</code>, <code>-1</code> 等の減点）のいずれかを選び、同一設問内で正負の配点を混在させないようにしてください。<br>• 下部の欄（<strong>AI採点指示／プロンプト</strong>）には教育上のアドバイス方針や必要に応じたテキスト問題文を記入します。",
                "<strong>4. AIルーブリックアシスタント（<code>AIで設計・編集</code>）の活用：</strong> 評価基準リスト上部の<strong>AIで設計・編集</strong>をクリックすると、問題文と模範解答から形成的な評価基準案を自動作成し、チャット対話で自在にブラッシュアップできます。"
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "演習モード — 1. テンプレートと設問タブ：シンプルな3タブヘッダー（テンプレートと設問｜QRコード配置｜Web公開）、設問領域、形成的評価基準、および問題文／模範解答切替"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AIルーブリックアシスタント：問題文と模範解答の両方を活用して形成的な評価基準と採点指示を共同設計"
                }
            ],
            callouts: [
                {
                    title: "スマートフォン画面への問題文表示",
                    desc: "テンプレートPDF上で囲んだ領域が自動的に切り出され、学生のスマートフォン画面上部に問題文として表示されます。"
                },
                {
                    title: "模範解答（Solutionnaire）の二重活用",
                    desc: "AIの評価精度を高めると同時に、学生が1回目の手書き解答を提出した後に段階的に公開することができます。"
                },
                {
                    title: "明快なステップ別評価基準",
                    desc: "段階ごとの明確な加点（または減点）基準により、学生は自分の導出のどこが正しくどこを見直すべきかを一目で把握できます。"
                },
                {
                    title: "AIルーブリックアシスタント搭載",
                    desc: "演習PDFと模範解答から、数秒で質の高い形成的ルーブリックの下書きを作成できます。"
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "QR演習モード • ステップ 3 — QRコード配置と印刷用PDF出力",
            badge: "無料版・Pro版ともに利用可能",
            shortTitle: "QRコード配置＆印刷用PDF",
            title: "PDF上へのQRコード配置と印刷用演習シートのダウンロード",
            subtitle: "全体用QRコード（シート全体）や設問別QRコードを、演習PDFの各問題枠内に自在に配置します。",
            paragraphs: [
                "<strong>2. QRコード配置</strong>タブを開き、演習プリント上のどこに自己評価用QRコードを埋め込むかを設定します：",
                "<strong>1. 全体用QRコード vs. 設問別QRコード：</strong><br>• <strong>全体用QRコード（演習シート全体）：</strong> デフォルトで1ページ目の上部に配置されます。読み取るとモバイルポータルの全設問一覧が開きます。<br>• <strong>設問別QRコード（<code>QR Q1</code>, <code>QR Q2</code>, ...）：</strong> PDF上の各設問の枠内に直接配置されます。学生がスマートフォンのカメラで <code>QR Q1</code> を読み取ると、<strong>設問1の画面が直接開き</strong>（<code>?q=Q1</code>）、すぐに解答写真を撮影できます！",
                "<strong>2. ドラッグ＆ドロップ移動とワンクリック四隅配置：</strong> 左リストの設問をクリックすると該当ページへジャンプします。PDFページ上でQRバッジをマウスで直接ドラッグして数式や図表と重ならない位置へ動かせるほか、<code>右上隅</code>・<code>左上隅</code>・<code>右下隅</code> ボタンで瞬時に整列できます。目のアイコンで個別のQRコードの表示／非表示も切り替えられます。",
                "<strong>3. QRコード埋め込み済み印刷用PDFのダウンロード：</strong> <strong>QRコード付き印刷用PDFをダウンロード</strong>をクリックすると、有効なすべてのQRコードが指定位置に鮮明なベクター形式で刻印されたPDFが生成され、そのまま教室での印刷配布やMoodle等への掲載に使えます。"
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "演習モード — 2. QRコード配置タブ：左側の全体用＆設問別QRリスト、コーナー整列ボタン、および2ページ目（QR Q1 & QR Q2）でのドラッグ＆ドロップ配置"
                }
            ],
            callouts: [
                {
                    title: "設問ごとのダイレクトリンク（?q=Q1）",
                    desc: "設問のQRコードを読み取るだけで該当する問題がスマートフォンで直接開き、メニュー操作なしで取り組めます。"
                },
                {
                    title: "採点基準を更新してもQRコードは永続有効",
                    desc: "プリント印刷後に評価基準を微調整してオンライン公開を更新しても、すでに配布した紙のQRコードは100%そのまま有効です！"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "QR演習モード • ステップ 4 — Webサイト公開（Gradaly Pro）と学生アプリ",
            badge: "Web公開には Gradaly Pro が必要",
            shortTitle: "Webサイト公開（Pro）＆学生体験",
            title: "学生用演習Webサイトの公開（Gradaly Pro）とスマートフォンでの学習体験",
            subtitle: "無料版でプロジェクト作成とQRコード付きPDFの設計が行え、Gradaly Proで学生用演習Webサイトの公開（オンラインまたは .zip）が解放されます。",
            paragraphs: [
                "<strong>3. Web公開</strong>タブでは、モバイルアプリ上の教育的な表示ルールを設定し、学生用演習Webサイトを公開します：",
                "<strong>1. 教育上の表示オプション設定：</strong><br>• <strong>1回目の解答提出前に採点基準を表示する：</strong> 最初から評価のポイントを学生に提示するか、最初の解答写真を提出するまで伏せておくかを選べます。<br>• <strong>AI評価の詳細な採点根拠を表示する：</strong> 形成的フィードバックとあわせて、各基準が達成／未達成と判定された詳しい理由を表示します。<br>• <strong>1回以上解答した後に模範解答（<code>Solutionnaire</code>）を公開する：</strong> 学生が自力で手書き解答を作成して1回目の提出を行うまで、模範解答をロックしておくことができます！",
                "<strong>2. 内蔵スマートフォン・シミュレータでの事前プレビュー：</strong> バナー右上の<strong>学生用アプリをテスト（シミュレータ）</strong>をクリックすると、Gradalyアプリ内でそのままモバイル画面の動作を確認できます。",
                "<strong>3. 学生用演習Webサイトのオンライン公開または静的 <code>.zip</code> 出力（Gradaly Pro）：</strong> 無料版でも演習プロジェクトの作成とQRコード付きPDFの設計が可能であり、<strong>Gradaly Pro</strong> では学生用演習Webサイトの公開機能が利用できます：<strong>portal.gradaly.io にワンクリック公開</strong>（クライアント側 <strong>AES-256-GCM</strong> 暗号化、公開期間は<strong>60日間</strong>・<strong>180日間／1学期</strong>・<strong>365日間／1学年度</strong>から選択可能）をクリックするか、<strong>単体の静的Webサイト（.zip）としてエクスポート</strong>して大学自身のWebサーバーでホスティングできます。",
                "<strong>4. スマートフォン上での学生の学習ステップ：</strong><br>• 学生は手元の紙の演習プリントにあるQRコードを読み取ります。<br>• <code>portal.gradaly.io</code> で公開されている場合、内蔵のGradaly AIリレーにより<strong>APIキーを一切入力することなくその場ですぐに</strong>AI評価を利用できます。また任意で（あるいは単体 <code>.zip</code> サーバーでホストしている場合に）、<strong>個人キー</strong>ボタンをタップして学生自身の <strong>Google AI Studio（Gemini）APIキー</strong>（スマートフォンのブラウザ内にローカル保存）を登録することも可能です。<br>• <strong>解答を撮影する</strong>をタップして紙に書いた手書きの解答を撮影し、<strong>AIで解答を評価する</strong>をタップすると、得点、達成した評価基準、LaTeX数式入りのフィードバック、そしてアンロックされた模範解答がその場で表示されます！",
                "<strong>5. インタラクティブな実動サンプル（印刷用PDF演習シート＆学生用ポータル）：</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">QRコード付き印刷用PDF演習シートを見る（英語デモ）</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">学生用演習ライブポータルを開く（英語デモ）</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "演習モード — 3. Web公開タブ：教育的表示トグル、初回提出後の模範解答アンロック、公開期間（60/180/365日）、および Gradaly Pro ワンクリッククラウド／ZIP公開"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "内蔵の学生用スマートフォン・シミュレータ：学生が紙の解答を撮影して即座に形成的AIフィードバックを受け取るモバイルWebアプリをプレビュー"
                }
            ],
            callouts: [
                {
                    title: "内蔵スマートフォン・シミュレータ（無料）",
                    desc: "公開前にGradalyアプリ内で演習シート、評価基準、モバイルでの学生体験を無料でテストできます。"
                },
                {
                    title: "ワンクリック公開または静的ZIP出力（Gradaly Pro）",
                    desc: "クライアント側 AES-256-GCM 暗号化により portal.gradaly.io（60/180/365日）へ公開、または単体 .zip として出力できます。"
                },
                {
                    title: "内蔵AIリレー または 個人APIキー",
                    desc: "portal.gradaly.io 上ではAPIキー設定ゼロですぐに自己評価でき、任意で無料の個人Geminiキーも利用できます。"
                },
                {
                    title: "自力での解答提出後に模範解答を解放",
                    desc: "学生が紙に書いた最初の手書き解答を撮影・提出して初めて、教員の模範解答が表示される仕組みを設定できます。"
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "よくある質問（FAQ）",
            badge: "暗号化・アクセス権・AIリレー・プライバシー",
            shortTitle: "よくある質問（FAQ）",
            title: "よくある質問（FAQ）",
            subtitle: "演習サイトが暗号化されている理由、アクセス可能な範囲、学生の解答写真やAPIキーの扱い、および教員による利用履歴追跡の有無に関する回答です。",
            paragraphs: [
                "以下では、Gradalyの「QR自己評価・演習モード」に関してよく寄せられる質問にお答えします。"
            ],
            faqs: [
                {
                    q: "なぜ演習Webサイトは暗号化されているのですか？",
                    a: "<p><strong>教員の知的財産（教材著作権）を保護するためです：</strong> Gradalyの運営者を含め、公開リンクを持たない第三者が公開された教材コンテンツ――すなわち教員が作成した演習問題シート、詳細な模範解答（<code>Solutionnaire</code>）、および採点基準や指示プロンプト――にアクセスすることは一切できません。これらはすべて<strong>担当教員の大切な知的財産</strong>だからです。</p><p><code>portal.gradaly.io</code> へデータが1バイトでも送信される前に、Gradalyは演習パッケージ全体を教員のPC上で <strong><code>AES-256-GCM</code></strong> によりローカル暗号化します。復号鍵（<code>#k=...</code>）はURLの <code>#</code> 記号以降のフラグメント（およびQRコード内）にのみ埋め込まれ、Webブラウザからサーバーへは決して送信されません。サーバー上には解読不能な暗号化バイナリデータのみが保持されます。</p>"
                },
                {
                    q: "演習アプリケーションには誰がアクセスできますか？",
                    a: "<p><strong>担当教員が共有したリンクまたはQRコードを手元に持っている人のみ</strong>がアプリケーションにアクセスし、ブラウザ内で演習データを復号できます。</p><p>したがって、教員は印刷用PDFシート（またはリンク）を<strong>履修学生だけに限定して安全に配布</strong>（Moodle等の学内コースページへの掲載や教室での紙配布など）でき、問題や模範解答がインターネット上に一般公開されてしまう心配はありません。なお、アクセス権はリンクまたはQRコードの所持に基づいているため、もしそのリンクやQRコードがクラス外へ転送・共有された場合には受け取った人もアクセス可能になります。</p>"
                },
                {
                    q: "学生はAPIキーを用意する必要がありますか？また、学生が撮影した手書き解答の写真はどう扱われますか？",
                    a: "<p>学生が演習ポータルを利用する方法に応じて2つの動作モードがあり、いずれのモードでも<strong>100%の匿名性と画像データの非保存（ゼロ・ストレージ）</strong>が保証されています：</p><p><strong>1. <code>portal.gradaly.io</code> 上のデフォルトモード（学生のAPIキー不要）：</strong><ul><li>演習プロジェクトが <code>portal.gradaly.io</code> に公開されており、学生が個人APIキーを入力していない場合、評価は<strong>安全な Gradaly AI リレー</strong>を経由して実行されます（アカウント作成不要のため、18歳未満の生徒を含むすべての学生がその場ですぐに利用できます）。</li><li>このモードでは、学生の手書き解答の写真（および設問の評価プロンプト）は Gemini Flash による評価を受けるためだけに <strong>Gradaly リレーサーバーを一時通過</strong>します。</li><li><strong>厳格な非保存保証：</strong> 画像データが<strong>ディスクやクラウドに保存されることは一切なく</strong>、<strong>100%匿名</strong>のまま処理され、AIのフィードバックが学生のスマートフォンへ返却された瞬間に<strong>サーバーのメモリから即座に完全破棄</strong>されます。</li></ul></p><p><strong>2. 個人APIキーモード（<code>portal.gradaly.io</code> での任意利用、または単体 <code>.zip</code> Webサイトでの利用）：</strong><ul><li>学生が<em>個人キー</em>ボタンから自身の Google Gemini APIキーを入力した場合、そのキーは<strong>学生自身の端末のブラウザ内（<code>localStorage</code>）にのみローカル保存</strong>されます（Gradalyサーバーへ送信されることはなく、教員からも一切見えません）。</li><li>個人APIキー使用時は、学生のブラウザが<strong>暗号化されたHTTPSでGoogle公式の Gemini API エンドポイントと直接通信</strong>し、Gradalyサーバーを一切経由しません。</li></ul></p>"
                },
                {
                    q: "どの学生が演習アプリを使ったか、教員側に分かりますか？",
                    a: "<p><strong>いいえ — QR演習モードは100%匿名かつ自律的な学習環境です。</strong> 学生のログイン機能も履修者名簿もなく、利用履歴やスコアが教員側へ送信・記録されることも一切ありません。</p><p>どの学生がQRコードを読み取ったか、何回挑戦したか、何点を取ったかを教員が知ることはありません。この意図的な設計により、成績評価への影響を気にせず<strong>安心して試行錯誤できる形成的学習の場</strong>が生まれ、学生は試験本番に向けて何度でも紙の上で手を動かして理解度を確かめることができます。</p>"
                },
                {
                    q: "QR演習モードにおいて、無料版（非Pro）と Gradaly Pro では何が違いますか？",
                    a: "<p><strong>無料版（Community版）：</strong> 演習プロジェクトの作成、演習PDFおよび模範解答のインポート、形成的評価基準の設計・調整（手動またはAIルーブリックアシスタント）、QRコードの配置、<strong>QRコード埋め込み済み印刷用PDF</strong>のダウンロード、および内蔵<strong>スマートフォン・シミュレータ</strong>での全動作テストまでを無料でご利用いただけます。</p><p><strong>Gradaly Pro：</strong> <strong>学生用演習Webサイトの公開機能</strong>が解放されます — ワンクリックで暗号化された <code>portal.gradaly.io</code> クラウド（60日・180日・365日間）へ公開するか、単体の静的Webサイト（<code>.zip</code>）としてエクスポートして所属大学のWebサーバー等でホストできます。</p>"
                },
                {
                    q: "PDFプリントを印刷・配布した後に採点基準を修正したくなった場合はどうなりますか？",
                    a: "<p><strong>印刷済みのQRコードは100%そのまま有効に使えます！</strong> 各演習プロジェクトは永続的な公開IDと暗号鍵を保持しています。紙のプリントを配布した後に誤植を見つけたり評価基準を改善したりした場合は、<em>3. Web公開</em>タブで<strong>公開内容を更新</strong>をクリックするだけで、学生が同じ紙のQRコードを読み取った際に即座に最新の採点基準が適用されます。</p>"
                }
            ]
        }
    ]
};
