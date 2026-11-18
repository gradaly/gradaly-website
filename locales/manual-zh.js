window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.zh = {
    badge_manual: "用户手册（二合一）",
    back_home: "返回官网首页",
    download_btn: "下载 Gradaly",
    hero_pill: "二合一桌面应用程序 • 完整用户手册 v4.5.0",
    hero_title: "Gradaly 用户手册",
    hero_subtitle: "精于评阅，重在育人。Gradaly 是一款集两大独立教学工作流于一体的二合一桌面软件：（1）面向教师的“考试与模拟测验评阅模式”（适用于学期中真实考场条件下的过程性模拟测验或期末正式考试），以及（2）面向学生的智能手机端“二维码自主练习与自评模式”。请在下方选择与您的教学场景对应的指南：",
    search_placeholder: "在全部手册中搜索（例如：考试、模拟测验、二维码练习、评分细则、OCR、API 密钥、常见问题）……",
    card_exam_badge: "产品 1 • 教师端答卷评阅",
    card_exam_chapters: "章节 E1–E9",
    card_exam_title: "手册 1：考试与模拟测验模式（教师使用）",
    card_exam_desc: "适用于期末正式考试、期中测验或学期中真实考场条件下的过程性模拟测验：扫描学生答卷、通过本地 OCR 100% 离线匹配学生身份、支持人工/AI 辅助/助教团队协作评阅，并向学生归还带详细批注的答卷。",
    card_practice_badge: "产品 2 • 学生端自主自评",
    card_practice_chapters: "章节 P1–P5",
    card_practice_title: "手册 2：二维码自主练习与自评模式（学生使用）",
    card_practice_desc: "适用于习题课、课后作业与自主复习讲义：在 PDF 习题讲义上嵌入二维码，让学生在纸面上作答后用智能手机扫码拍照，立即获取过程性 AI 诊断反馈（在 portal.gradaly.io 上无需密钥，亦可使用个人 Gemini API 密钥）。",
    filter_label: "显示内容：",
    filter_exam: "1. 考试评阅指南（E1–E9）",
    filter_practice: "2. 二维码练习指南（P1–P5）",
    filter_all: "显示全部章节",
    filter_hint: "每份手册均 100% 独立完整——按需阅读对应手册即可！",
    switch_guide_kicker: "探索 Gradaly 的第二种教学工作流",
    btn_go_practice: "打开手册 2：二维码自主练习模式",
    btn_go_exam: "打开手册 1：考试评阅模式",
    toc_title: "目录导航",
    sidebar_exam_mode: "考试模式",
    sidebar_practice_mode: "二维码练习",
    screenshot_badge: "英文界面示意图",
    privacy_box_title: "100% 本地学生隐私保护",
    privacy_box_text: "学生名单、身份识别区截图、OCR 匹配结果及项目文件均存储在您电脑本地的 Documents/Gradaly 目录下。在线门户与团队共享链接均采用客户端 AES-256-GCM Zero-Knowledge（零知识）端到端加密。",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "手册 1 — 考试与模拟测验模式（教师端）",
            partColor: "indigo",
            partBanner: {
                kicker: "手册 1 • 产品 1：考试与模拟测验评阅",
                title: "教师端考试与模拟测验评阅完整指南（支持 100% 人工、AI 辅助及团队协作模式）",
                desc: "面向扫描版学生答卷评阅的独立完整指南——无论是期末正式考试，还是学期中在真实考场环境下开展的过程性模拟测验，均可从容应对。"
            },
            tag: "考试模式 • 第 1 步 — 创建考试项目",
            badge: "支持 100% 人工或 AI 辅助",
            shortTitle: "创建考试项目",
            title: "创建考试项目及 100% 人工评阅 vs. AI 辅助工作流",
            subtitle: "新建考试项目（或启动内置 20 份答卷的考试演示项目），在您的本地电脑上高效评阅扫描版学生答卷。",
            paragraphs: [
                "<strong>什么是考试项目（带有 <code>Exam</code> 徽标）？</strong> 考试项目专为教师统一收取纸质答卷、扫描为 PDF 并对全班进行评阅的教学评价场景而设计——既涵盖<strong>期中与期末正式考试</strong>，也十分适合<strong>学期中在真实考场条件下组织的过程性模拟测验</strong>。即便您在期末正式考试中更习惯纸质手改，考试模式依然是开展期中模拟考、在真实应试环境下为每位学生提供详尽个性化反馈的理想工具。顶部导航栏提供 <strong>6 个专属工作流标签页</strong>：<code>1. 试卷模板与题目</code>、<code>2. 学生名单</code>、<code>3. 答卷管理</code>、<code>4. 答卷匹配</code>、<code>5. 评阅工作台</code> 以及 <code>6. 统计与导出</code>。",
                "<strong>100% 人工评阅模式或 AI 辅助模式：</strong> 在 Gradaly 中评阅试卷<strong>并非必须</strong>配置 AI API 密钥。软件开箱即支持<strong>100% 人工评阅模式</strong>，配备高速键盘快捷键（按数字键 <code>1–9</code> 勾选或取消评分项，按 <code>J</code>/<code>K</code> 键切换上下份学生答卷）、调整评分项分值后全班成绩自动动态重算，以及支持 Markdown 与 KaTeX 数学公式的丰富评语。当您需要时，随时可连接 AI API 密钥以启用 <strong>AI 评分细则助手</strong>与<strong>多模态 AI 预评阅</strong>，同时始终由教师保留最终人工复核与裁定权。",
                "在<strong>欢迎界面</strong>中，点击<strong>新建项目</strong>并选择<strong>考试项目（扫描答卷评阅）</strong>；或者点击<strong>创建演示项目 → 考试演示</strong>，直接体验包含 20 份手写学生答卷与完整参考答案的大学物理考试示例项目。"
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "欢迎界面：考试项目以靛蓝色“Exam”徽标标识，所有文件均保存在本地 Documents/Gradaly 目录中"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "创建演示项目弹窗：选择“考试演示项目”，一键生成含 20 份答卷的完整离线示例"
                }
            ],
            callouts: [
                {
                    title: "专属六标签页考试工作区",
                    desc: "试卷模板与题目 → 学生名单 → 答卷管理 → 离线 OCR 匹配 → 三栏评阅工作台 → 全班统计与导出。"
                },
                {
                    title: "支持 100% 离线纯人工评阅",
                    desc: "既可用键盘快捷键纯手工高速评阅，也可采用“AI 预评阅 + 教师人工复核”的协同模式。"
                },
                {
                    title: "内置 20 份答卷演示项目",
                    desc: "无需扫描任何文件，即可利用内置的英语或法语考试演示项目完整体验全流程。"
                },
                {
                    title: "100% 本地存储于 Documents/Gradaly",
                    desc: "所有 PDF 答卷、学生名单和评分记录均以透明文件夹形式保存在本机——零强制云存储。"
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "考试模式 • 第 2 步 — 试卷模板、身份识别区与评分细则",
            badge: "精准评阅的核心基础",
            shortTitle: "试卷模板、身份区与评分项",
            title: "框选学生身份识别区、题目作答区、计分规则与参考答案",
            subtitle: "导入空白试卷 PDF，框选卷头学生信息区用于离线 OCR 识别，并定义各道题目及其细粒度评分标准。",
            paragraphs: [
                "在考试项目的 <strong>1. 试卷模板与题目</strong> 标签页中，首先导入空白标准试卷 PDF（<code>Canvas</code>）。随后，您将在 PDF 页面上绘制两类矩形区域：",
                "<strong>1. 绘制学生身份识别区（<code>ID</code>）：</strong> 点击左侧面板中的<strong>学生身份识别区（姓名 / 学号）</strong>按钮，在第 1 页学生填写姓名与学号的卷头位置绘制矩形框。后续 Gradaly 将在每份答卷的相同位置自动裁剪该区域，与您的学生名单进行 <strong>100% 本地离线 OCR 匹配</strong>。",
                "<strong>2. 绘制各题作答区并选择 AI 题干来源（<code>学生答卷</code> vs. <code>空白试卷模板</code>）：</strong> 当您对某份学生答卷触发 AI 评阅时，Gradaly 会裁剪您为该题绘制的矩形区域图像，连同评分细则一并发送给所选的多模态视觉大模型。<br>• <strong>单一合并区域（默认推荐）：</strong> 只要试卷排版允许，请将印刷题干与学生作答框一并框选在同一个矩形框内。默认设置下（<code>AI 题干来源：学生答卷</code>），Gradaly 会<strong>直接从该学生的答卷（<code>copies/copie_XXX.pdf</code>）</strong>中裁剪整个区域——因此如果每位学生的试卷上印有不同的个性化数值参数，AI 将准确读取该学生专属的题目参数与手写解答。<br>• <strong>分离题干与作答区（<code>分离题干 / 作答区</code>）及 <code>AI 题干来源</code> 选择器：</strong> 若题干与作答框位于不同页面或中间隔有其他内容，可点击<strong>分离题干 / 作答区</strong>分别绘制两个矩形（<code>题干区</code> 与 <code>答卷作答区</code>），并指定题干部分从何处裁剪：<br>&nbsp;&nbsp;– <strong><code>学生答卷</code>（<code>Copie étudiant</code>）：</strong> 题干区与作答区均从<strong>每位学生自己的答卷</strong>上裁剪并纵向拼接（当试卷存在一人一卷随机参数或个性化题目时必不可少）。<br>&nbsp;&nbsp;– <strong><code>空白试卷模板</code>（<code>Canevas</code>）：</strong> 题干区从空白标准卷（<code>canvas.pdf</code>）裁剪并拼接在学生作答区上方（适用于学生在不含题干的独立答题纸上作答的场景）。",
                "<strong>3. 理解基础分（<code>Note de base</code>）、满分上限（<code>Score max</code>）、上下限截断与 <code>最高可得（Max possible）</code>：</strong><br>• <strong>计分公式：</strong> Gradaly 从题目的<strong>基础分</strong>出发，累加所有已勾选评分项的分值（<code>原始分 = 基础分 + Σ 已勾选评分项</code>），并将该题最终得分<strong>严格限制在 <code>0</code> 到 <code>满分上限（Max Score）</code> 之间</strong>。<br>• <strong>纯加分制或纯扣分制原则：</strong> 采用<strong>纯加分制</strong>时，请设 <code>基础分 = 0</code> 且仅使用正分评分项（<code>+1</code>、<code>+1.5</code>）；采用<strong>纯扣分制（减分制）</strong>时，请设 <code>基础分 = 满分上限</code> 且仅使用负分扣分项（<code>-0.5</code>、<code>-1</code>）。<strong>请避免在同一道题中混用正分项与负分项</strong>——纯粹的计分逻辑对 AI 模型与学生查卷而言都更加清晰无歧义。<br>• <strong><code>最高可得（Max possible）</code> 校验提示：</strong> 实时显示 <code>基础分 + Σ（正分评分项）</code>，帮助您一眼发现各评分项权重之和是否与题目满分一致。",
                "<strong>4. 底部通用评阅指令框（<code>评阅说明与逻辑 / AI 提示词</code>）：</strong> 利用每道题底部的文本框说明特殊情形的处理原则（例如：前步计算错误但后续推导逻辑正确的连带给分/ECF、等价数学表达式认可等）；若裁剪框内未包含印刷题干，亦可直接在此粘贴纯文本题干。",
                "<strong>5. 导入并测试您的参考答案（<code>Solutionnaire</code> / <code>⭐ 参考答案</code>）：</strong> 使用 PDF 阅读器顶部的 <strong>题干（空白卷）/ 参考答案</strong> 切换开关导入您的标准解答 PDF。导入后，它将固定显示在“评阅工作台”学生列表最顶部（标为 <strong><code>⭐ 参考答案</code></strong>）：在正式批改前，请务必测试并确认您自己的参考答案在每一道题上均能获得<strong>满分（<code>Max/Max</code>）</strong>！"
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "考试模式 — 试卷模板与题目标签页：学生身份识别区按钮、基础分/满分/最高可得提示、可勾选评分项、底部 AI 评阅指令及题干/参考答案切换开关"
                }
            ],
            callouts: [
                {
                    title: "离线 OCR 学生身份识别区",
                    desc: "只需在第 1 页框选一次卷头区域，Gradaly 即可自动裁剪全部扫描答卷并在本地识别姓名与学号。"
                },
                {
                    title: "纯加分制或纯扣分制评分细则",
                    desc: "从 0 分起加分，或从满分起扣分。单题最终得分始终自动截断在 [0, 满分上限] 区间内。"
                },
                {
                    title: "将题干一并纳入识别框",
                    desc: "建议将印刷题干与学生作答框框选在一起（或在底部评阅指令栏粘贴题干文本），为 AI 提供完整上下文。"
                },
                {
                    title: "参考答案（⭐）满分自检",
                    desc: "导入标准答案 PDF 并一键测试，确保您的评分细则在标准答案上准确给出满分（Max/Max）。"
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "考试模式 • 第 3 步 — AI 评分细则助手",
            badge: "交互式对话与样本校准",
            shortTitle: "AI 评分细则助手",
            title: "借助 AI 评分细则助手协同设计与校准评分标准",
            subtitle: "基于试卷题干与参考答案 PDF 自动生成或优化评分细则，支持多轮对话微调及直接粘贴真实学生答卷截图进行校准。",
            paragraphs: [
                "在<strong>试卷模板与题目</strong>标签页的任意题目上，点击<strong>使用 AI 设计 / 修改</strong>（<code>Concevoir / Modifier avec l'IA</code>），即可打开交互式 <strong>AI 评分细则助手</strong>。",
                "<strong>1. 配置评分细则偏好：</strong> 设定该题的<code>目标满分</code>，选择<strong>加分制（Additive）</strong>或<strong>扣分制（Subtractive）</strong>计分策略，并指定期望的<strong>评分项数量</strong>（3 项、4 项、5 项或由 AI 自动决定）。若您已加载<code>参考答案</code> PDF，请勾选<em>“使用参考答案作为基准”</em>，以便 AI 同时审阅题目要求与您的标准解题步骤。",
                "<strong>2. 在对话模式下迭代优化并粘贴学生答卷截图（<code>Cmd+V</code> / <code>Ctrl+V</code>）：</strong> 在右侧聊天栏中用自然语言要求调整分值或拆分步骤。更实用的是：您可以截取某份真实学生的手写作答片段，<strong>直接粘贴到对话框中</strong>并输入指令，例如：<em>“我认为这位学生的另一种解法同样严密且应得满分，请据此调整评分项表述和评阅说明。”</em>",
                "<strong>3. 应用并在少量答卷上先行校准：</strong> 点击<strong>确认并应用到当前题目</strong>，随后在启动全班批量预评阅之前，先在“评阅工作台”中对 <code>⭐ 参考答案</code> 及 2–3 份学生答卷进行试评校准。"
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AI 评分细则助手弹窗：左侧展示建议的评分项与 AI 评阅指令（PROMPT_TEXT），右侧提供支持粘贴截图的交互式微调对话框"
                }
            ],
            callouts: [
                {
                    title: "同时读取试卷模板与参考答案",
                    desc: "生成的结构化评分项及分值分配与您的数学推导步骤或核心概念完全契合。"
                },
                {
                    title: "直接粘贴真实学生答卷（Cmd+V）",
                    desc: "将典型临界答卷或特殊解法截图粘贴至对话中，自动完善评分标准对边界情况的覆盖。"
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "考试模式 • 第 4 步 — 学生名单、答卷导入与离线 OCR",
            badge: "100% 本地离线运行",
            shortTitle: "学生名单、答卷与 OCR 匹配",
            title: "学生名单导入（CSV）、PDF 自动切分与 100% 本地离线 OCR 身份匹配",
            subtitle: "导入选课名单，将复印机批量扫描的合集 PDF 切分为单人答卷，并在零云端上传的前提下完成本地身份关联。",
            paragraphs: [
                "在 <strong>2. 学生名单</strong> 标签页中，从教务系统导出的 CSV 或表格文件（Moodle、Canvas 等）导入班级名单。Gradaly 支持映射<strong>学号（Matricule / ID）</strong>、<strong>姓氏</strong>、<strong>名字</strong>、<strong>电子邮箱</strong>和<strong>班级/分组</strong>。",
                "在 <strong>3. 答卷管理</strong> 标签页中，既可直接导入已按人分开的多份 PDF，也可导入高速扫描仪生成的<strong>单份多学生合集扫描 PDF</strong>。只需指定每份答卷的固定页数（例如每位学生 4 页），软件便会自动切分为 <code>copie_01.pdf</code>、<code>copie_02.pdf</code> 等独立文件。若扫描仪生成了体积庞大的高分辨率文件（<strong>&gt; 220 DPI</strong>），Gradaly 会在导入时自动检测并提供<strong>一键原生降采样优化至 200 DPI</strong>（可将项目体积缩减高达 4 倍，大幅提升协作分享与云端同步速度）。此外，您还可以按需运行<strong>答卷页面完整性核查</strong>，自动检测上下颠倒（180°）、页序错乱或漏扫缺页，并支持一键修复 PDF 页面。",
                "在 <strong>4. 答卷匹配</strong> 标签页中，点击<strong>运行自动 OCR 匹配</strong>。Gradaly 会自动裁剪每份答卷第 1 页的学生身份识别区，<strong>在您的电脑本地 100% 离线运行内置 OCR 识别引擎</strong>，并结合全局最优指派算法（匈牙利算法）与模糊匹配将手写姓名/学号关联至学生名单。您可以在左右对照视图中数秒内完成核对与确认。"
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "学生名单标签页：保存在本地的选课名单（含学号、姓名、邮箱及分组信息）"
                },
                {
                    filePrefix: "05_copies",
                    caption: "答卷管理标签页：自动切分合集扫描 PDF 并检查各份答卷的页面完整性"
                },
                {
                    filePrefix: "06_matching",
                    caption: "答卷匹配标签页：将裁剪出的手写卷头图像与学生名单进行直观的并排核对确认"
                }
            ],
            callouts: [
                {
                    title: "严格本地隐私（零云端 OCR）",
                    desc: "学生姓名、学号、邮箱及卷头截图绝不离开您的本地电脑——OCR 识别全程在桌面应用内离线完成。"
                },
                {
                    title: "未匹配筛选与即时搜索",
                    desc: "按“待匹配”或“模糊候选”快速筛选，数秒内人工确认字迹潦草的答卷归属。"
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "考试模式 • 第 5 步 — 评阅工作台",
            badge: "100% 人工、标准 AI 或异步批处理（立省 50%）",
            shortTitle: "人工与 AI 辅助评阅",
            title: "三栏式评阅工作台：键盘极速批改、单卷校准与批量预评阅",
            subtitle: "按题纵向浏览全班答卷，掌握三色评阅状态码，先在单份答卷上校准，再一键启动全班异步批处理预评阅。",
            paragraphs: [
                "<strong>5. 评阅工作台</strong> 采用三栏同步联动布局：左侧为<strong>学生与答卷列表</strong>（顶部固定显示 <code>⭐ 参考答案</code>），中间为<strong>交互式 PDF 答卷视图</strong>（自动聚焦当前题目区域），右侧为<strong>题目评分细则与评语工作区</strong>。",
                "<strong>1. 题号圆钮与二维全键盘导航：</strong> 点击右上角的题号圆钮（<code>1</code>、<code>2</code>、<code>3</code>……）或按键盘 <code>←</code> / <code>→</code>（或 <code>H</code> / <code>L</code>）即可快速切换题目；按 <code>↑</code> / <code>↓</code>（或 <code>K</code> / <code>J</code>）在同一道题下快速切换不同学生的答卷；按数字键 <code>1–9</code> 直接勾选或取消第 1 至第 9 个评分项；按 <code>V</code> 键标记为人工已复核；随时按 <code>?</code> 键（或点击顶部栏的 <code>⌨️</code> 图标）即可调出内置键盘快捷键速查表。",
                "<strong>2. 三色评阅状态指示灯：</strong><br>• 🟢 <strong>绿色（<code>AI</code>）：</strong> 已由 AI 完成预评阅（等待教师人工复核）。<br>• 🔵 <strong>蓝色（<code>人工</code>）：</strong> 已由教师人工评阅、修改或明确复核确认。<br>• ⚪ <strong>灰色（<code>待评阅</code>）：</strong> 尚未评阅。",
                "<strong>3. 单份答卷试评校准、AI 请求透视检查器与全班批量 AI 预评阅：</strong><br>• <strong>单题试评与即时中断（<code>✕ 停止</code>）：</strong> 点击右下角的<strong>对此题重新运行 AI 评阅</strong>，可仅针对当前学生测试评分细则效果；若推理模型耗时较长，点击加载图标旁的红色 <strong><code>✕ 停止</code>（<code>Interrompre</code>）</strong>按钮即可立即中止请求。<br>• <strong>实时 AI 请求与图像检查器（<code>👁️ AI 请求</code> / <code>Requête IA</code>）：</strong> 点击单题评阅按钮旁的 <strong><code>👁️ AI 请求</code></strong> 按钮即可打开交互式 <strong>AI 请求检查器弹窗</strong>，实时查看：（1）发送给视觉大模型的<strong>精确裁剪/拼接 JPEG 图像</strong>，以及题干部分究竟取自<strong>学生答卷</strong>还是<strong>空白试卷模板（<code>canvas.pdf</code>）</strong>（并提供一键切换开关）；（2）完整的 <strong>System Prompt 与 User Prompt</strong>；以及（3）<strong>完整的 HTTP JSON 请求载荷结构</strong>（含已启用的 <code>code_execution</code> 工具及严格的 JSON 输出模式）。<br>• <strong>多份答卷批量启动（<code>▶ AI 评阅</code>）：</strong> 点击左上角的 <strong>▶ AI 评阅</strong> 即可批量评阅选定答卷与题目。支持选择 <strong>⚡ 标准实时模式</strong>（基于题目级 <code>(答卷, 题目)</code> 并行工作线程与共享 PDF 缓存）或 <strong>🌿 Flex / 异步批处理模式（享 50% 费用折扣）</strong>——在使用 Google Gemini、OpenAI 或 Anthropic 官方直连密钥评阅全班答卷时强烈推荐。<br>• <strong>可选作答异常自动检测（<code>⚠️ 异常</code>）：</strong> 在 AI 设置中默认开启，评阅时 AI 会同步标记物理或视觉层面的异常情况（不直接扣分，例如：答案写在框外/见背面、大面积涂改字迹难辨、页码错位翻面，或疑似提示词注入），方便您一键筛选 <code>⚠️ 异常</code> 并在复核后解除提醒。"
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "评阅工作台总览：左侧学生列表（含 ⭐ 参考答案、三色状态点、单题得分与总分）、中间自动聚焦题目框的 PDF 视图、右侧评分细则工作区"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "右侧面板下部：AI 评阅依据、学生评语（支持 Markdown + KaTeX 公式）、防覆盖保护复选框以及“对此题重新运行 AI 评阅”按钮"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "启动 AI 批量评阅弹窗：选择目标答卷、评阅题目、防覆盖保护策略，以及标准并行模式 vs. Flex 异步批处理模式（-50%）"
                }
            ],
            callouts: [
                {
                    title: "100% 人工二维全键盘极速批改",
                    desc: "↑/↓（K/J）切换答卷，←/→（H/L）切换题目，1–9 勾选评分项，V 键确认复核，Esc 退出文本框，按 ? 键查看快捷键指南。"
                },
                {
                    title: "推荐 Flex 异步批处理模式（立省 50%）",
                    desc: "支持 Gemini、OpenAI 与 Anthropic 官方直连 API 密钥，以半价成本在云端后台完成全班答卷预评阅。"
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "考试模式 • 第 6 步 — 团队协作评阅（Gradaly Pro）",
            badge: "协作共享与选择性合并 • PRO",
            shortTitle: "团队共享与合并（PRO）",
            title: "课程组协作项目共享与按题选择性合并",
            subtitle: "通过本地 .gradaly 归档包或端到端加密云链接，在多位授课教师或助教之间轻松分配评阅任务（Gradaly Pro）。",
            paragraphs: [
                "当多位教师或助教共同评阅同一门考试时，<strong>Gradaly Pro</strong> 支持通过本地 <code>.gradaly</code> 归档文件或 <strong>AES-256-GCM 端到端加密云端链接</strong>（可选 7、14 或 30 天有效期）分享完整项目或轻量级评阅数据包。",
                "同事收到后点击<strong>导入 / 合并</strong>，Gradaly 会自动校验空白试卷模板 PDF 的 SHA-256 哈希指纹，既支持将其导入为<strong>全新独立项目</strong>，也支持<strong>按题目选择性合并评分细则与评阅结果</strong>（例如将助教 A 批改的第 1–2 题与助教 B 批改的第 3–4 题无缝汇总），并在每次合并前自动创建安全备份。"
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "分享 / 导出项目弹窗（Gradaly Pro）：提供多种协作共享预设、按题目筛选开关以及客户端 AES-256 加密云链接生成"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "导入 / 选择性合并弹窗（Gradaly Pro）：SHA-256 试卷模板一致性校验及按题勾选合并评分细则/评阅记录"
                }
            ],
            callouts: [
                {
                    title: "端到端加密云端共享链接",
                    desc: "采用客户端 AES-256-GCM 加密在教学团队间安全传递项目（解密密钥 #k=... 永不发送至服务器）。"
                },
                {
                    title: "按题目精细化选择性合并",
                    desc: "干净利落地汇总多位助教的分题批改成果，内置冲突保护策略并在合并前自动备份原项目。"
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "考试模式 • 第 7 步 — 统计分析与成绩反馈归还",
            badge: "Excel • Moodle CSV • 批注版 PDF • 在线门户",
            shortTitle: "统计、Moodle、PDF 与查卷门户",
            title: "全班学情统计、Moodle 成绩同步、批注版 PDF 与学生在线查卷门户",
            subtitle: "全面掌握全班分数分布，将成绩与个人加密查卷链接直接导入 Moodle，向每位学生归还详尽的诊断性反馈。",
            paragraphs: [
                "<strong>6. 统计与导出</strong> 标签页实时计算全班统计指标：平均分、中位数、标准差、最高/最低分、边界清晰的左闭右开区间直方图 <code>[a, b[</code>，以及每道题各评分项的详细达成率。",
                "向学生归还评阅结果时（免费版支持导出 1 份完整测试答卷预览；Gradaly Pro 解锁全班批量导出），您可以任选以下四种互补渠道：<br>1) <strong>多工作表 Excel 成绩册</strong>（总分汇总表 + 每道题独立明细工作表，支持导出全班或勾选子集）。<br>2) <strong>Moodle 专属导出（成绩册 CSV 与作业离线评分表回填）</strong>：一键生成适用于 <em>Moodle 成绩册 → 导入 → CSV 文件</em> 的标准 UTF-8 CSV，或自动匹配并原地回填从 <em>Moodle 作业（Assignment）</em> 下载的离线评分表（支持按学号或邮箱自动匹配），同时写入折算成绩（原始总分、<code>/20</code> 或 <code>/100</code>）并在 Moodle 的“反馈评语”栏自动嵌入每位学生可点击的<strong>个人加密在线查卷链接</strong>！<br>3) <strong>个人批注版 PDF 答卷（ZIP 归档包或单份导出，支持自定义文件名模板）</strong>：将评分汇总封面页与带有答题框及逐题评分明细的学生手写原卷合并生成矢量 PDF，并支持通过灵活占位符自定义导出文件名格式（<code>{nom}</code>、<code>{prenom}</code>、<code>{id}</code>、<code>{projet}</code>、<code>{copie}</code>、<code>{groupe}</code> —— 例如 <code>{nom}_{prenom}_{projet}.pdf</code>），提供实时文件名预览。<br>4) <strong>Zero-Knowledge 零知识加密学生在线查卷门户</strong>：利用多核 CPU 并行加密流水线与 10 路 HTTP/2 并发传输将加密答卷高速发布并同步至云端；随后既可通过<strong>官方云邮件直发（<code>@gradaly.io</code>）</strong>通知学生，也可通过<strong>邮件合并导出（<code>Publipostage</code> —— 使用您自己的高校教工邮箱，配合 Outlook 网页版 / Microsoft 365、Word + Outlook 桌面版或 Thunderbird）</strong>导出开箱即用的 <code>.docx</code>、<code>.xlsx</code> 或 <code>.csv</code> 数据源发送通知，还可直接同步至 <strong>Moodle</strong>，或打印<strong>可裁剪的个人二维码查卷凭条</strong>在课堂上发放。"
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "统计与导出标签页（考试模式）：全班核心统计指标、成绩分布直方图、各评分项达成率及多格式导出中心"
                }
            ],
            callouts: [
                {
                    title: "Excel 成绩册与批注版 PDF 答卷",
                    desc: "导出符合高校教务规范的成绩册，以及包含逐项得分明细与 KaTeX 数学公式渲染的学生个人批注版 PDF。"
                },
                {
                    title: "Moodle CSV 导出与在线查卷链接",
                    desc: "将成绩与可点击的个人加密查卷网址一键导入 Moodle（支持成绩册 CSV 直接导入或作业离线评分表自动回填）。"
                },
                {
                    title: "加密学生在线查卷门户",
                    desc: "学生可通过 Moodle、专属邮件链接或纸质二维码凭条在浏览器本地解密查看原卷、已勾选评分项及详细评语。"
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "考试模式 • 第 8 步 — AI 模型与密钥配置（可选）",
            badge: "OpenRouter • Gemini • GPT • Claude • 本地部署",
            shortTitle: "API 密钥配置与模型选型",
            title: "配置 API 密钥与选择合适的 AI 大模型",
            subtitle: "若您仅使用 100% 人工评阅模式，可跳过本章。如需启用 AI 评分细则助手与 AI 预评阅，请在设置（⚙️）中配置您的 API 密钥。",
            paragraphs: [
                "<strong>评阅质量直接取决于您所选择的 AI 模型能力：</strong> 在我们对高校手写试卷（高等数学、大学物理、工程学、经济学、人文社科）的基准评测中，<strong><code>Gemini 3.8 Flash</code></strong>、<strong><code>GPT 5-4 mini</code></strong>、<strong><code>Claude-Sonnet-5.5</code></strong> 以及 <strong><code>Mistral-Large 4.0</code></strong> 均展现出<strong>极为出色的评阅准确度</strong>——欢迎结合您的学科特点测试对比不同模型！",
                "<strong>官方直连 API 密钥 vs. OpenRouter 聚合网关：</strong> 您既可以直接在 <strong>Google Gemini</strong>、<strong>OpenAI</strong> 或 <strong>Anthropic</strong> 官方平台创建 API 密钥（优势在于可使用享 5 折优惠的异步 <strong>Batch / Flex 批处理模式</strong>），也可以选择 <strong>OpenRouter</strong>——其独特优势在于<strong>仅需一个统一账户和一把 API 密钥，即可无缝调用所有主流厂商的模型</strong>（Gemini、GPT、Claude、Mistral、DeepSeek、Qwen、Llama 等）。",
                "<strong>0% 平台加价，拒绝捆绑高价“AI 积分包”：</strong> 不同于将教师绑定在单一黑盒模型并高价转售专属“AI 点数包”的商业云平台，Gradaly 对 AI 调用<strong>收取零差价（0% 加成）</strong>。您仅按模型厂商公开的原始 Token 价格按量付费——<strong>若您所在高校提供免费的校内大模型接口，或通过 Ollama 在本地运行开源视觉模型，Token 成本更是低至 0 元</strong>。",
                "<strong>高级设置 —— 原生 Python 代码执行沙盒（<code>code_execution</code> / <code>code_interpreter</code>）：</strong> 在<em>设置（⚙️）→ 高级设置</em>中，您可以按需开启可选的 <strong>Python 代码执行（计算与验算）</strong>工具（默认关闭）。开启后，大模型在设计评分细则和评阅答卷时均可自动编写并在云端安全沙盒中运行 Python 代码进行精确数值验算（支持 Google Gemini 的 <code>code_execution</code>、OpenAI <code>/v1/responses</code> 的 <code>code_interpreter</code> 以及 Anthropic <code>/v1/messages</code> 的 <code>code_execution_20250825</code>）——非常适合涉及复杂数值计算、矩阵运算、指数/三角函数或算法跟踪的理工科考试。界面内置<strong>测试当前模型是否支持代码执行</strong>按钮，可一键验证模型沙盒可用性。",
                "<strong>高级设置 —— 增强型 AI 调试模式（<code>.debug/grading/inspect.html</code>）：</strong> 开启 <strong>AI 调试模式</strong>后，每次 AI 评阅都会在项目目录下的 <code>.debug/grading/</code> 文件夹中保存完整的诊断数据包，其中包括一份独立可视化的 HTML 检查报告（<strong><code>inspect.html</code></strong> 与 <code>latest_inspect.html</code>），直观展示发送给 AI 的精确裁剪图片、题干源自学生答卷还是空白模板（<code>image_source.json</code>）、完整的 System 与 User 提示词（<code>prompt.txt</code>）、HTTP JSON 请求体（<code>request_payload.json</code>）、模型执行的 Python 验算代码及终端输出，以及 API 原始响应（<code>raw_api_response.json</code>）。"
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "AI 设置弹窗（⚙️）：选择模型提供商（Google Gemini、OpenRouter、OpenAI、Anthropic 或高校/本地自定义服务器）、指定视觉模型并一键测试连接"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter（多厂商统一网关）",
                    tag: "一把密钥畅用全系模型",
                    icon: "fas fa-network-wired",
                    desc: "<strong>核心优势：</strong> 只需注册一个账户并生成一把 API 密钥，即可自由测试 <code>Gemini 3.8 Flash</code>、<code>GPT 5-4 mini</code>、<code>Claude-Sonnet-5.5</code>、<code>Mistral-Large 4.0</code> 等数百款模型，无需分别管理多家账单（注：OpenRouter 暂不支持异步 Batch 批处理模式）。",
                    steps: [
                        "访问 <strong>openrouter.ai</strong> 并登录（或免费注册账号）。",
                        "打开 <strong>Credits</strong> 页面，充值少量预付余额（例如 $5 或 $10，即可满足数千页试卷的评阅需求）。",
                        "进入 <strong>Keys</strong> 页面 → 点击 <strong>Create Key</strong>，命名为 <code>Gradaly</code>，复制以 <code>sk-or-v1-...</code> 开头的密钥。",
                        "在 Gradaly 中打开<strong>设置（⚙️）</strong>，选择 <strong>OpenRouter</strong>，粘贴密钥并选择目标模型。"
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "打开 OpenRouter API 密钥控制台"
                },
                {
                    name: "Google Gemini（Google AI Studio）",
                    tag: "高速且极具性价比",
                    icon: "fas fa-bolt",
                    desc: "官方直连 Google 多模态模型 <code>Gemini 3.8 Flash</code> 与 Pro 系列，原生支持享 5 折优惠的异步 Batch 批处理模式。",
                    steps: [
                        "使用 Google 账号登录 <strong>Google AI Studio</strong>（<code>aistudio.google.com</code>）。",
                        "点击左侧菜单中的 <strong>Get API key</strong>，然后点击 <strong>Create API key</strong>。",
                        "复制生成的密钥（以 <code>AIzaSy...</code> 开头）。如需更高并发速率上限，可按需绑定按量付费（Pay-as-you-go）结算账户。",
                        "在 Gradaly 中打开<strong>设置（⚙️）</strong>，选择 <strong>Google Gemini</strong> 并粘贴您的密钥。"
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "打开 Google AI Studio API 密钥页面"
                },
                {
                    name: "OpenAI（GPT 系列模型）",
                    tag: "严密的逻辑与计算核验",
                    icon: "fas fa-brain",
                    desc: "官方直连 OpenAI 多模态模型（如 <code>GPT 5-4 mini</code>），擅长逐步核验推导计算过程，并支持 5 折异步批处理模式。",
                    steps: [
                        "登录 <strong>platform.openai.com</strong> 开发者平台（注：与个人网页版 ChatGPT Plus 会员相互独立）。",
                        "前往 <strong>Settings → Billing</strong> 充值少量预付额度（例如 $5）。",
                        "打开 <strong>Dashboard → API keys</strong>，点击 <strong>+ Create new secret key</strong> 并复制生成的密钥（<code>sk-proj-...</code>）。",
                        "在 Gradaly 中打开<strong>设置（⚙️）</strong>，选择 <strong>OpenAI</strong>，粘贴密钥并选定模型。"
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "打开 OpenAI Platform API 密钥页面"
                },
                {
                    name: "Anthropic（Claude 系列模型）",
                    tag: "数学证明与细腻评语",
                    icon: "fas fa-feather-alt",
                    desc: "官方直连 Anthropic 的 <code>Claude-Sonnet-5.5</code> 与 Opus 模型，在审阅手写数学证明及撰写严谨详尽的学术反馈方面表现卓越。",
                    steps: [
                        "登录 <strong>Anthropic Console</strong>（<code>console.anthropic.com</code>）。",
                        "在 <strong>Settings → Billing</strong> 中激活预付费额度。",
                        "进入 <strong>API Keys</strong> 页面，点击 <strong>Create Key</strong> 并复制私钥（<code>sk-ant-...</code>）。",
                        "在 Gradaly 中打开<strong>设置（⚙️）</strong>，选择 <strong>Anthropic</strong> 并粘贴密钥。"
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "打开 Anthropic Console API 密钥页面"
                }
            ],
            callouts: [
                {
                    title: "高校私有服务器或 100% 本地 Ollama",
                    desc: "若贵校提供兼容 OpenAI 接口标准的校内算力服务，或您通过 Ollama 在本机运行视觉模型（<code>http://localhost:11434/v1</code>），可在设置中选择“高校 / 本地自定义服务器”，实现零 Token 费用。"
                },
                {
                    title: "一键连接与视觉支持诊断",
                    desc: "随时点击顶部栏的 AI 状态徽标，即可检测 API 密钥有效性与模型多模态图像解析响应状态。"
                },
                {
                    title: "Python 代码执行验算沙盒（可选）",
                    desc: "在高级设置中开启原生 Python 代码执行，支持 Gemini、OpenAI 与 Anthropic 进行高精度数值验算，并提供一键模型兼容性测试。"
                },
                {
                    title: "可视化 AI 请求与调试检查器",
                    desc: "在评阅页点击“👁️ AI 请求”或打开 .debug/grading/inspect.html，即可透明核查裁剪原图、题干来源、提示词及完整 JSON 请求结构。"
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "常见问题解答（FAQ）",
            badge: "技术原理、数据隐私与最佳实践",
            shortTitle: "常见问题解答",
            title: "常见问题解答（FAQ）",
            subtitle: "围绕 AI 评阅底层原理、过程性模拟测验与正式考试的应用策略、Documents/Gradaly 本地存储机制、API 密钥安全、Zero-Knowledge 零知识云端加密以及技术支持的详细解答。",
            paragraphs: [
                "以下为您集中解答关于 Gradaly“考试与模拟测验模式”在技术架构、教学方法及数据隐私方面最受关注的问题。"
            ],
            faqs: [
                {
                    q: "Gradaly 的 AI 评阅在底层是如何工作的？发送给 AI 的题目图像究竟取自学生的答卷还是空白试卷模板？",
                    a: "<p>当您请求 AI 评阅某位学生答卷上的某道题时，Gradaly 会提取您为该题绘制的<strong>矩形区域裁剪图像</strong>，连同包含评分细则各评分项（<code>CRITERIA</code>）与通用评阅指令（<code>PROMPT_TEXT</code>）的结构化提示词，一并发送给您选定的多模态视觉大模型。</p><p><strong>题干图像究竟取自学生答卷还是空白试卷模板？</strong><ul><li><strong>单一合并区域（默认设置）：</strong> 当您为每道题绘制单个矩形框时，Gradaly 会<strong>完全从该学生的答卷（<code>copies/copie_XXX.pdf</code>）中裁剪该区域</strong>，不使用空白试卷模板（<code>canvas.pdf</code>）。因此，若每位学生的试卷上印有不同的个性化数值参数，AI 看到的就是该学生卷面上的真实参数与作答内容。</li><li><strong>分离区域（<code>分离题干 / 作答区</code>）与 <code>AI 题干来源</code> 选项：</strong> 在 <em>1. 试卷模板与题目</em> 标签页中，通过 <strong><code>AI 题干来源：[学生答卷] / [空白试卷模板]</code></strong> 选择器，您可以指定题干部分是从每份<strong>学生答卷</strong>裁剪（一人一卷个性化试题时必选），还是从<strong>空白试卷模板（<code>canvas.pdf</code>）</strong>裁剪并拼接在作答区上方（适用于学生在不含题干的独立答题纸上作答的情形）。</li></ul></p><p><strong>随时透视核查发送的原图与 JSON 请求：</strong> 在 <em>5. 评阅工作台</em> 中，随时点击“对此题重新运行 AI 评阅”按钮旁的 <strong><code>👁️ AI 请求</code>（<code>Requête IA</code>）</strong>按钮（或在<em>设置 → 高级设置</em>中开启 <em>AI 调试模式</em>并打开 <code>.debug/grading/inspect.html</code>），即可直观查看发送给 AI 的精确 JPEG 图像、图像来源构成、System 与 User 提示词、完整的 HTTP JSON 请求体，以及模型所执行的任何 Python 代码。</p>"
                },
                {
                    q: "我是否可以直接信任 AI 的评阅结果？还是更适合将其用于过程性模拟测验？",
                    a: "<p><strong>既可以信赖，又绝不能在一开始盲目轻信！</strong> 在初始阶段，您设定的评分细则可能过于严苛或存在表述歧义，或者所选 AI 模型可能在特定复杂推导或罕见数学记号上出现误读。</p><p><strong>过程性模拟测验 vs. 期末正式考试：</strong> 许多高校教师在期末正式考试中习惯采用纸质手改（或使用 Gradaly 的 100% 人工评阅模式），同时非常乐意在<strong>学期中的过程性模拟测验</strong>中启用 Gradaly 的 AI 预评阅，从而在真实应试环境下为全班学生提供详尽、个性化的诊断反馈。</p><p><strong>人工复核与确认不可或缺：</strong> 每当将 Gradaly 用于<strong>终结性评价或高利害正式考试</strong>时，我们强烈建议您<strong>逐题审阅 AI 的预评阅结果并进行人工复核确认</strong>。Gradaly 的交互界面专为高效人工审阅、微调与一键确认而设计——坚持教师人工把关始终是最佳学术实践。</p><p><strong>面向学生的评分透明度与成绩申诉机制：</strong> 得益于 Gradaly（通过批注版 PDF 或学生在线查卷门户）向学生完整公开各项评分标准的勾选情况，我们也强烈建议向学生开放查卷复议渠道，允许学生针对特定评分项的适用情况提出合理申诉。</p>"
                },
                {
                    q: "使用 AI 评阅一场考试大约需要多少费用？",
                    a: "<p>AI 评阅没有固定单一价格，具体费用取决于多项因素：学生答卷份数、题目数量，以及您所选 AI 模型的规模与计费档位（各 API 提供商均按每百万输入/输出 Token 公开透明计价）。</p><p>以真实的高校考试为例给出参考基准：使用表现极为出色的 <strong><code>Gemini 3.8 Flash</code></strong> 模型，在异步批处理（Batch / Flex）模式下评阅<strong>全班 400 名学生、每人 6 至 7 页手写解答</strong>的大学统计学试卷，<strong>API 总费用仅约 5 至 7 美元</strong>（且需谨记：Gradaly 在模型厂商原始 Token 单价之上收取 0% 平台差价）。</p>"
                },
                {
                    q: "我已经付费订阅了 ChatGPT Plus（OpenAI）、Claude Pro 或 Gemini Advanced 个人会员——为什么不能直接用会员账号代替 API 密钥？",
                    a: "<p><strong>1. 模型厂商旗下两套完全独立的产品体系：</strong> 在 OpenAI、Anthropic 和 Google 的产品架构中，面向普通消费者的网页端聊天会员（约 $20/月的 ChatGPT Plus、Claude Pro、Gemini Advanced）与面向软件集成的<strong>开发者 API 接口</strong>属于两套完全独立的计费与授权系统。个人聊天会员仅限在官方网页或手机 App 中手动对话，在技术上不允许像 Gradaly 这样的第三方桌面软件发起自动化请求（且各厂商服务条款严禁绕过限制调用网页接口）。</p><p><strong>2. 高并发批量评阅与更严格的数据隐私保障：</strong> 若要并行预评阅数十乃至数百份答卷，并稳定获取结构化评分数据（勾选的评分项、评阅依据与学生评语），Gradaly 必须通过官方标准 API 通信。更重要的是，<strong>商业 API 通道享有更严格的数据隐私承诺</strong>：与默认设置下的消费者网页聊天不同，通过官方商业 API 发送的答卷片段<strong>在合同条款上明确不会被 OpenAI、Google 或 Anthropic 用于训练其大模型</strong>。</p><p><strong>3. 极低的按量付费成本（无需额外包月订阅）：</strong> API 密钥无需按月缴纳固定月费——您只需按实际消耗的 Token 数量结算（<em>按量付费 Pay-as-you-go</em>，且 Gradaly 零加价），评阅<strong>数百名学生的整场考试通常仅需几美元</strong>（Google 甚至为 Gemini API 提供免费测试额度）。若您希望用一个账户统一调用多家模型（OpenAI、Claude、Gemini、Mistral），只需使用 <strong>OpenRouter</strong> 或接入贵校提供的校内大模型服务器即可。</p>"
                },
                {
                    q: "使用 AI 评阅整场考试大约需要多长时间？",
                    a: "<p>处理耗时取决于题目框选区域数量、答卷总份数以及模型推理任务的复杂程度。在实际使用中，对于一场包含 <strong>400 份学生答卷、5 道大题、约十页手写内容</strong>的考试，采用弹性并行模式通常<strong>仅需约 10 分钟即可完成整场考试的预评阅</strong>。</p><p><strong>加速小贴士：</strong> 只要您的 API 账户速率配额（Rate Limit）允许，不妨在<strong>设置（⚙️）</strong>中适当调高<strong>并行工作线程数（Workers）</strong>，增加并发数可显著缩短整体等待时间。</p>"
                },
                {
                    q: "扫描学生纸质答卷时，应当选择多少分辨率（DPI）？",
                    a: "<p>核心原则是在<strong>保持字迹清晰可辨的前提下尽量减小文件体积</strong>：无论对于教师肉眼审阅还是 AI 视觉模型，<strong><code>150 DPI</code> 至 <code>200 DPI</code></strong> 都是最理想的黄金分辨率区间。</p><p><strong>为什么不建议使用 300 或 600 DPI 扫描：</strong> 超高分辨率扫描对提升 AI 评阅准确率毫无帮助（视觉大模型在内部处理前本就会缩放图像），反而会使 PDF 文件体积膨胀 4 至 10 倍，导致切分答卷、翻页浏览及加密云同步出现不必要的延迟。</p><p><strong>建议保留彩色扫描：</strong> 我们推荐使用<strong>彩色模式（150–200 DPI，开启标准 JPEG/PDF 压缩）</strong>，而非高对比度的纯黑白二值（1-bit）模式。彩色扫描能够更真实地保留较浅的铅笔字迹、学生在作图中使用的彩色笔迹以及细小的数学上下标。</p>"
                },
                {
                    q: "Gradaly 的项目文件存储在本地电脑的什么位置？",
                    a: "<p>您的所有项目均保存在本地电脑的 <strong><code>Documents/Gradaly/</code></strong> 文件夹下（例如 macOS/Linux 上的 <code>~/Documents/Gradaly/</code>，或 Windows 上的 <code>C:\\Users\\您的用户名\\Documents\\Gradaly\\</code>），每个项目对应一个独立子文件夹。</p><p>在每个项目文件夹内部，所有数据均采用开放、透明的标准格式存储：<ul><li><strong>PDF 文件：</strong> 空白标准试卷模板（<code>canvas.pdf</code>）、可选的参考答案（<code>solution.pdf</code>），以及存放在 <code>copies/</code> 目录下的各份学生答卷（<code>copie_01.pdf</code>、<code>copie_02.pdf</code> 等）。</li><li><strong>纯文本 JSON 文件：</strong> 题目框选坐标与评分细则配置（<code>config.json</code>）、包含姓名/学号/邮箱的学生名单（<code>students.json</code>）、OCR 答卷与学生匹配映射表（<code>matching.json</code>），以及存放在 <code>gradings/</code> 目录下的每份答卷评阅记录与评语（<code>copie_01.json</code> 等）。</li></ul></p><p><strong>⚠️ 重要提示：</strong> 开放的目录结构非常便于您通过 Time Machine、Nextcloud、OneDrive 等工具定期备份整个 <code>Documents/Gradaly</code> 文件夹；但<strong>我们强烈建议不要在资源管理器中手动编辑、重命名或移动项目子文件夹内部的文件</strong>，以免破坏内部引用导致项目损坏。</p>"
                },
                {
                    q: "我的 API 密钥保存在哪里？安全性如何？",
                    a: "<p>您的 AI API 密钥（Gemini、OpenRouter、OpenAI、Anthropic）<strong>严格仅保存在您本人电脑的本地磁盘上</strong>，位于用户主目录下的隐藏配置文件 <code>.gradaly_settings.json</code> 中（macOS/Linux 为 <code>~/.gradaly_settings.json</code>，Windows 为 <code>C:\\Users\\您的用户名\\.gradaly_settings.json</code>）。</p><p><strong>多重安全保障：</strong><ul><li>您的 API 密钥<strong>绝不会发送至任何 Gradaly 服务器</strong>，并且在您向同事导出或分享 <strong><code>.gradaly</code> 项目归档包时也绝不会被打包在内</strong>。</li><li>当您触发 AI 评分细则设计或 AI 预评阅时，您的电脑通过<strong>加密 HTTPS（TLS 1.3）直连</strong>您所选模型提供商（Google、OpenRouter、OpenAI、Anthropic 或高校私有服务器）的官方 API 端点。</li><li>您随时可以在模型提供商的后台控制台中撤销、轮换密钥或设置每月消费限额。</li></ul></p>"
                },
                {
                    q: "当我将考试发布到云端查卷门户或生成云端协作链接时，数据存储在哪里？谁有权限访问？",
                    a: "<p>当您将考试发布至<strong>学生在线查卷门户</strong>或生成<strong>团队协作加密云链接</strong>时，<strong>每一个文件在离开您的电脑之前，都会先在本机使用 <code>AES-256-GCM</code> 算法完成本地加密</strong>。上传至我们位于欧盟境内的云存储服务器（设有自动到期销毁机制）的仅仅是完全无法解读的加密二进制数据块（<code>.enc</code>）。</p><p>解密所需的唯一私钥（<code>#k=...</code>）仅嵌在网址 <code>#</code> 号之后的 URL 片段（Fragment）中。根据万维网标准规范（RFC 3986），浏览器在发起请求时<strong>绝不会将 <code>#</code> 号之后的片段传输给服务器</strong>。因此，<strong>即便是 Gradaly 的开发者也永远无法读取您在云端存储的任何答卷内容；即便云存储平台遭遇极端外部攻击，攻击者也无法窥见分毫信息</strong>——因为云端存储的一切皆为密文，唯有您本人（以及收到您分发的专属链接的师生）掌握解密密钥。</p>"
                },
                {
                    q: "为什么 Gradaly 选择做成原生桌面应用而非纯网页工具？Gradaly 的长期愿景是什么？",
                    a: "<p>我们之所以坚持采用跨平台原生桌面架构（macOS、Windows、Linux），源于两个根本原因：</p><p>1) <strong>即刻掌控的数据主权：</strong> 您无需仅仅为了切分试卷或匹配学号，就被迫将未加密的学生实名名单和全班原始答卷上传到第三方商业 SaaS 数据库。</p><p>2) <strong>面向未来的长期愿景（100% 自主的本地端侧大模型）：</strong> 终端 AI 算力硬件与开源权重（Open-Weights）多模态大模型正在飞速演进。<strong>Gradaly 的愿景是：在未来几年内，具备卓越手写数学与逻辑分析能力的视觉语言模型将直接运行在教师个人的笔记本电脑上</strong>（或院系本地机房服务器中）。正因为 Gradaly 是原生支持本地推理接口（Ollama / vLLM / 校内算力）的桌面软件，教育工作者将实现 <strong>100% 技术自主</strong>——完全离线评阅试卷，零云端依赖、零 Token 成本。</p>"
                },
                {
                    q: "Gradaly 与传统在线阅卷网页平台或商业云端 AI 批改工具有何区别？",
                    a: "<p><strong>与传统在线阅卷网页平台相比：</strong> 基于浏览器的传统阅卷平台在特定工作流上确有优势——例如无需合并文件的多人浏览器实时同屏批改、针对涂卡选择题的深度支持以及答案自动聚类等。但这类平台通常不具备针对开放式手写推导过程的多模态 AI 预评阅能力，不提供协同设计评分细则的 AI 助手，且要求将学生实名数据与答卷明文托管在第三方云服务器上。Gradaly 既可在 <strong>100% 人工模式</strong>下提供同样严谨的结构化评分细则批改工作流，又额外赋予您可选的 AI 评分细则共创、AI 预评阅以及 100% 本地数据控制权。</p><p><strong>与新兴商业云端 AI 批改平台相比：</strong> 此类平台往往强制锁定单一黑盒模型，并通过售卖封闭的“AI 批改点数包”赚取高额溢价。而 Gradaly 赋予您<strong>完全的模型选择自由</strong>（Gemini、GPT、Claude、Mistral、OpenRouter 或免费的校内/本地服务器），且对 AI 调用<strong>坚持 0% 平台加价</strong>。</p>"
                },
                {
                    q: "有哪些键盘快捷键可用于高速评阅与界面导航？",
                    a: "<p>Gradaly 经过精心的人体工学设计，让您无需触碰鼠标即可完成全班答卷的浏览与批改。随时按键盘上的 <strong><code>?</code></strong> 键（或点击顶部栏的 <strong><code>⌨️</code></strong> 图标）即可打开软件内置快捷键速查表：</p><ul><li><strong><code>↑</code> / <code>↓</code>（或 <code>K</code> / <code>J</code>）：</strong> 切换上一份 / 下一份学生答卷（在<em>学生名单</em>、<em>答卷管理</em>、<em>答卷匹配</em>与<em>评阅工作台</em>标签页中通用）。</li><li><strong><code>←</code> / <code>→</code>（或 <code>H</code> / <code>L</code>）：</strong> 切换上一题 / 下一题（在<em>试卷模板与题目</em>及<em>评阅工作台</em>中），或切换 PDF 上一页 / 下一页（在<em>答卷管理</em>中）。</li><li><strong><code>Shift + ←</code> / <code>Shift + →</code>（或 <code>PageUp</code> / <code>PageDown</code>）：</strong> 在<em>评阅工作台</em>内保持当前题目不变，单独翻阅学生 PDF 答卷的前后页。</li><li><strong>数字键 <code>1</code> 至 <code>9</code>（主键盘或数字小键盘）：</strong> 直接勾选 / 取消当前题目的第 1 至第 9 个评分项。</li><li><strong><code>V</code>：</strong> 切换当前题目的教师人工复核确认状态。</li><li><strong><code>Esc</code>：</strong> 退出任何文本输入框（学生评语、评阅依据或搜索栏），立即恢复方向键与数字键快捷操作。</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>：</strong> 放大 / 缩小 / 重置软件界面文字字号。</li></ul>"
                },
                {
                    q: "如何将考试成绩和学生个人查卷链接导入 Moodle？",
                    a: "<p>Gradaly 内置了专属的 <strong>🎓 Moodle 导出（CSV）</strong>工具（可从<strong>在线查卷门户</strong>窗口或主<strong>导出</strong>中心打开），完整支持 Moodle 官方的两种成绩导入工作流：</p><p><strong>1. 直接导入 Moodle 成绩册（Gradebook CSV）：</strong><ul><li>在 Gradaly 中选择 <strong>1. Moodle 成绩册（直接导出 CSV）</strong>，设定分制折算方式（试卷原始总分、折算为 <code>/20</code> 或折算为 <code>/100</code>）以及反馈栏内容（嵌入指向 <code>portal.gradaly.io</code> 上该生加密答卷的可点击链接 + 分题得分明细），导出 UTF-8 CSV 文件。</li><li>进入您的 Moodle 课程，打开<strong>成绩（Grades）</strong>页面，点击左上角下拉菜单（<strong>评分者报告 / Grader report</strong>）→ <strong>导入（Import）</strong> → <strong>CSV 文件</strong>，上传导出的 CSV。</li><li>在<em>用户识别映射（Identify user by）</em>中，将 <code>ID 号（ID number / 学号）</code> 映射到 <code>ID number</code>（或将<code>电子邮箱</code>映射到 <code>Email address</code>）；在<em>成绩项映射（Grade item mappings）</em>中，将 <code>成绩（Grade）</code> 列映射到目标成绩项（或新建成绩项），并将 <code>反馈（Feedback）</code> 列映射到对应的<strong>反馈评语（Feedbacks）</strong>字段即可。</li></ul></p><p><strong>2. 自动回填 Moodle 作业离线评分表（零字段映射配置）：</strong><ul><li>在您的 Moodle <em>作业（Assignment）</em>设置中，在<em>反馈类型</em>下勾选启用<em>离线评分工作表（Offline grading worksheet）</em>和<em>反馈评论（Feedback comments）</em>，随后前往<em>查看所有提交 → 评分操作：下载评分工作表</em>下载空白 CSV。</li><li>在 Gradaly 中选择 <strong>2. 自动回填 Moodle 作业评分表</strong>并选中刚才下载的 CSV：Gradaly 会自动按学号或邮箱匹配全部学生，原地填好<code>成绩</code>与<code>反馈评论</code>列，保存后直接传回 Moodle 即可一键发布！</li></ul></p>"
                },
                {
                    q: "我可以使用自己的大学教工邮箱（Outlook 网页版、Word + Outlook 桌面版、Thunderbird）通过“邮件合并”向学生群发查卷通知吗？",
                    a: "<p><strong>完全可以！</strong> 在在线查卷门户的 <strong>✉️ 邮件通知学生</strong> 窗口中，切换到第二个标签页：<strong>📊 邮件合并（使用我的邮件客户端）</strong>。您可以自由定制邮件主题与正文（支持插入可选动态变量，如 <code>{prenom}</code>、<code>{nom}</code>、<code>{matricule}</code>、<code>{note}</code>、<code>{max}</code>、<code>{lien}</code>），并导出为 3 种专用数据源格式：<strong>Word 数据源文档 <code>.docx</code></strong>（适用于 Microsoft Word + Outlook 邮件合并）、<strong>Excel 工作簿 <code>.xlsx</code></strong>（内置名为 <code>Publipostage</code> 的标准 Excel 表格对象，适用于 Microsoft 365 / Power Automate），或 <strong>UTF-8 <code>.csv</code> 文件</strong>（适用于 Thunderbird）。</p><p><strong>为什么 Gradaly 的邮件合并导出格外省心？</strong> 因为导出的文件中不仅包含各个独立字段列（<code>EMAIL</code>、<code>PRENOM</code>、<code>NOM</code>、<code>MATRICULE</code>、<code>NOTE</code>、<code>MAX</code>、<code>NOTE_SUR_MAX</code>、<code>LIEN_COPIE</code>），还<strong>预先为每位学生拼装好了可直接发送的成品列</strong>：<code>SUJET_PRET</code>（成品邮件主题）、<code>MESSAGE_TEXTE_PRET</code>（完整纯文本邮件正文）以及 <code>MESSAGE_HTML_PRET</code>（完整排版 HTML 邮件正文）。您在邮件合并工具中只需插入这一个现成字段即可：</p><ul><li><strong>💼 Microsoft Word + 经典版 Outlook 桌面客户端（Windows 与 Mac）：</strong> 在 Gradaly 中点击<strong>导出 Word 数据源（<code>.docx</code>）</strong>。打开 Word 新建空白文档，依次点击<em>邮件 → 选择收件人 → 使用现有列表…</em>并选中导出的 <code>.docx</code> 文件（相比在 macOS 上易触发旧版转换器安全弹窗或沙盒报错的 <code>.xlsx</code>，原生 Word <code>.docx</code> 表格可直接无障碍读取）。插入合并域 <code>«MESSAGE_TEXTE_PRET»</code>，再点击<em>完成并合并 → 发送电子邮件…</em>（收件人选 <code>EMAIL</code>）即可通过您的校内 Outlook 账号群发。</li><li><strong>🌐 Outlook 网页版（浏览器端 Microsoft 365）配合 Power Automate：</strong> 点击<strong>导出为 Excel（<code>.xlsx</code>）</strong>并将文件上传至您的校园 OneDrive。打开 Microsoft Power Automate（<code>make.powerautomate.com</code>）创建一个仅含 2 个步骤的即时云端流：第一步添加 <em>Excel Online (Business) → 列出表中存在的行</em>（指向该文件及 <code>Publipostage</code> 表），第二步添加 <em>Office 365 Outlook → 发送电子邮件 (V2)</em>，动态填入 <code>收件人 = EMAIL</code>、<code>主题 = SUJET_PRET</code>、<code>正文 = MESSAGE_HTML_PRET</code>。若班级人数较少或需单独补发，您也可以直接在 Gradaly 学生列表（或 Excel 表）中点击任意学生右侧的 <strong>Outlook Web</strong> 按钮，在浏览器 <code>outlook.office.com</code> 中一键打开预填好的发信窗口！</li><li><strong>🦅 Mozilla Thunderbird（Windows、macOS、Linux）：</strong> 安装免费的 <em>Mail Merge</em> 扩展插件后，新建邮件并在收件人栏填入 <code>{{EMAIL}}</code>、主题栏填入 <code>{{SUJET_PRET}}</code>、正文填入 <code>{{MESSAGE_TEXTE_PRET}}</code>，随后点击 <em>Mail Merge → CSV</em> 选择导出的 <code>.csv</code> 文件即可批量发出。</li></ul>"
                },
                {
                    q: "我可以在哪里提交功能建议或反馈软件问题（Bug）？",
                    a: "<p>我们非常欢迎您的每一条教学建议、新功能构想与问题反馈！您可以直接在我们的 GitHub Issue 页面新建反馈：<a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>。</p>"
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
            partHeader: "手册 2 — 二维码自主练习与自评模式（学生端）",
            partColor: "teal",
            partBanner: {
                kicker: "手册 2 • 产品 2：过程性二维码自主练习模式",
                title: "基于可打印二维码习题讲义的学生自主自评完整指南",
                desc: "100% 独立完整的操作指南：设计内嵌二维码的 PDF 习题讲义，让学生在纸上推演作答后用智能手机扫码拍照，即时获得过程性 AI 诊断反馈（在 portal.gradaly.io 上零密钥配置，亦可选填个人 Gemini 密钥）。"
            },
            tag: "二维码自主练习模式 • 第 1 步 — 核心理念与项目创建",
            badge: "过程性评价 • 学生自主训练",
            shortTitle: "核心理念与创建练习项目",
            title: "二维码自主练习模式的工作原理与项目创建",
            subtitle: "无需收取一份作业，也无需暴露教师的 API 密钥，即可为学生提供不限次数的纸面手写训练与手机端即时 AI 辅导。",
            paragraphs: [
                "<strong>二维码自主练习模式（带有 <code>Practice</code> 徽标）的教学初衷：</strong> 在期中或期末考试前，学生亟需在纸面上亲手推演习题（习题课、课后作业、复习讲义、历年真题）。然而，授课教师很难每周收集并逐一人工批改数百份日常练习。<strong>二维码自主练习模式能将任意一份 PDF 习题讲义转化为交互式智能自评导师：</strong><br>1. <strong>教师端：</strong> 准备好 PDF 习题讲义，制定各题评分标准（及可选的<code>参考答案</code>），在 PDF 页面上排布二维码，并一键发布为端到端加密的静态练习网站。<br>2. <strong>学生端：</strong> 打印该 PDF 习题讲义（或在平板/电脑屏幕上看题），在草稿纸或讲义空白处手写数学推导或论述解答，<strong>用智能手机扫描题目旁的二维码</strong>，拍下自己的手写作答照片，即可<strong>立即获得逐项对应的过程性 AI 诊断反馈</strong>！",
                "<strong>零教师密钥暴露 —— 内置 Gradaly AI 中继或学生个人密钥可选：</strong> 与教师统一收集答卷并调用自身密钥批改的“考试模式”不同，在练习模式下，<strong>发布的门户中不包含任何学生名单、不留存任何学生答卷，也绝不包含教师本人的 API 密钥</strong>。当发布在 <code>portal.gradaly.io</code> 上时，得益于内置的 Gradaly AI 安全中继服务，学生<strong>无需注册账号或配置任何 API 密钥即可开箱即用</strong>（对包括未满 18 周岁本科新生在内的全体学生均极为友好）；此外，学生也可选择在手机浏览器中填入自己的个人 Google AI Studio（Gemini）API 密钥。",
                "<strong>清爽直观的三标签页界面：</strong> 在欢迎界面点击<strong>新建项目 → 练习项目（二维码学生自评）</strong>（或点击<strong>创建演示项目 → 练习演示</strong>，直接体验完整的三角函数二维码习题讲义示例）。练习项目采用极简的<strong>三标签页工作区</strong>：<code>1. 试卷模板与题目</code>、<code>2. 二维码排布</code> 与 <code>3. 网站发布</code>。"
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "欢迎界面：练习项目以青绿色“Practice”徽标清晰标识，与您的考试项目并列管理"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "创建演示项目弹窗：选择“练习演示项目（二维码自评）”，一键打开可直接扫码体验的习题讲义示例"
                }
            ],
            callouts: [
                {
                    title: "纸面手写 + 智能手机拍照工作流",
                    desc: "学生延续最真实的纸笔数学推导、证明与作图习惯，同时通过手机摄像头获得即时 AI 诊断辅导。"
                },
                {
                    title: "零收发作业、零学生名单负担",
                    desc: "练习项目不设学生名单与答卷管理标签页——100% 专注于无压力的课下自主过程性训练。"
                },
                {
                    title: "portal.gradaly.io 零密钥开箱即用",
                    desc: "学生在 portal.gradaly.io 上无需配置密钥即可直接获取 AI 评阅反馈（亦支持选填个人 Gemini 密钥）。"
                },
                {
                    title: "内置完整二维码练习演示",
                    desc: "从欢迎界面启动练习演示项目，即可查看包含 10 道习题与参考答案的完整二维码讲义配置。"
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "二维码自主练习模式 • 第 2 步 — 习题讲义、参考答案与评分标准",
            badge: "100% 独立完整指南",
            shortTitle: "习题 PDF、参考答案与评分项",
            title: "导入习题 PDF、参考答案并设计过程性评分标准",
            subtitle: "在空白习题 PDF 上框选各道练习题，加载参考答案，手工或借助 AI 助手制定清晰的自评标准。",
            paragraphs: [
                "在练习项目的 <strong>1. 试卷模板与题目</strong> 标签页中（留意顶部精简的三标签页导航栏，且无需绘制学生身份识别区），您将定义在评估学生手机拍照解答时用于指导 AI 的习题范围与评分细则：",
                "<strong>1. 导入空白习题 PDF（<code>Canvas</code>）并框选每道练习题：</strong> 导入您的 PDF 习题讲义，围绕每道练习题（<code>Q1</code>、<code>Q2</code>……）绘制矩形框。<strong>重要提示：</strong>请务必将完整的印刷题干包含在矩形框内！在练习模式下，Gradaly 会裁剪这一矩形区域，既用于在<strong>学生智能手机屏幕顶部清晰展示当前题干</strong>，也作为官方题干参考单独发送给 AI 视觉模型。",
                "<strong>2. 导入可选的参考答案 PDF（<code>Solutionnaire</code>）：</strong> 使用 PDF 阅读器顶部的 <strong>题干（空白卷）/ 参考答案</strong> 切换开关导入包含完整解题过程的标准答案 PDF。若参考答案与空白讲义版式一致，题目框会自动对齐复用；若排版页码不同，只需切换到<em>参考答案</em>视图为每道题单独框选对应的解答区域即可。在练习模式下，参考答案发挥三重关键作用：<br>• <strong>辅助 AI 评分细则助手</strong>自动拆解准确的步骤分。<br>• 在评估学生手写照片时<strong>为 AI 提供权威的标准数学推导基准</strong>。<br>• 在学生至少提交一次手写作答尝试后，<strong>在学生手机端自动解锁展示高清参考答案</strong>！",
                "<strong>3. 制定计分规则与评分项（纯加分制或纯扣分制）：</strong><br>• Gradaly 按公式 <code>得分 = 基础分 + Σ（达成的评分项）</code> 计算单题得分，并自动限制在 <code>0</code> 至 <code>满分上限</code> 之间。<br>• 请选择<strong>纯加分制</strong>（<code>基础分 = 0</code>，按关键解题步骤设置正分项 <code>+1</code>、<code>+2</code>）或<strong>纯扣分制</strong>（<code>基础分 = 满分上限</code>，设置负分扣分项 <code>-0.5</code>、<code>-1</code>），避免在同一题中混用正负分。<br>• 利用底部文本框（<strong>通用评阅说明 / AI 提示词</strong>）补充教学引导提示，或在需要时粘贴纯文本题干。",
                "<strong>4. 善用 AI 评分细则助手（<code>使用 AI 设计 / 修改</code>）：</strong> 点击评分项列表上方的<strong>使用 AI 设计 / 修改</strong>，即可让 AI 结合习题题干与参考答案自动起草过程性评分标准，并支持通过对话交互精细打磨。"
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "练习模式 — 1. 试卷模板与题目标签页：简洁的三标签页顶栏（试卷模板与题目 | 二维码排布 | 网站发布）、习题框选区、过程性评分项及题干/参考答案切换开关"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AI 评分细则助手：结合习题题干与参考答案协同设计结构化的过程性自评标准"
                }
            ],
            callouts: [
                {
                    title: "手机端自动展示裁剪题干",
                    desc: "您在空白讲义 PDF 上框选的区域会自动裁剪并显示在学生手机界面顶部，方便随时对照题意。"
                },
                {
                    title: "参考答案（Solutionnaire）双重赋能",
                    desc: "既在后台保障 AI 批改严谨性，又可在学生提交首次手写尝试后作为标准解析自动解锁。"
                },
                {
                    title: "分步清晰的纯加分或纯扣分项",
                    desc: "条理分明的步骤化评分项能帮助学生准确判断自己推导过程中的亮点与薄弱环节。"
                },
                {
                    title: "内置 AI 评分细则助手",
                    desc: "根据习题 PDF 与参考答案，数秒内自动生成一套高质量的过程性评分细则。"
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "二维码自主练习模式 • 第 3 步 — 二维码排布与可打印 PDF",
            badge: "免费版与 Pro 版均包含",
            shortTitle: "二维码排布与可打印 PDF",
            title: "在 PDF 讲义上排布二维码并下载可打印习题卷",
            subtitle: "在 PDF 习题讲义上灵活放置全局总二维码（整份讲义）和/或嵌入每道题目框内的分题二维码。",
            paragraphs: [
                "打开 <strong>2. 二维码排布</strong> 标签页，自由定制自评二维码在习题讲义上的呈现位置：",
                "<strong>1. 全局总二维码 vs. 分题独立二维码：</strong><br>• <strong>全局总二维码（整份习题讲义）：</strong> 默认置于第 1 页右上方，学生扫码后进入手机端门户的完整习题目录。<br>• <strong>分题独立二维码（<code>QR Q1</code>、<code>QR Q2</code>……）：</strong> 直接嵌入 PDF 上每道题目的矩形框内。当学生用手机相机扫描 <code>QR Q1</code> 时，手机网页会<strong>直接跳转到第 1 题作答页</strong>（<code>?q=Q1</code>），即扫即拍！",
                "<strong>2. 鼠标自由拖拽与一键角落吸附对齐：</strong> 点击左侧列表中的任意题目即可跳转到对应页面。您可以直接在 PDF 页面上用鼠标拖动任意二维码徽标，确保绝不遮挡数学公式或几何图形；也可直接点击 <code>右上角</code>、<code>左上角</code> 或 <code>右下角</code> 快捷定位按钮，或点击眼睛图标单独开启/隐藏某个二维码。",
                "<strong>3. 下载内嵌二维码的可打印 PDF 讲义：</strong> 点击<strong>下载带二维码的可打印 PDF 讲义</strong>。Gradaly 会生成高清矢量 PDF，将所有启用的二维码按最小安全物理尺寸精准压印在指定位置，可直接打印课堂分发或上传至 Moodle / 课程网站。"
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "练习模式 — 2. 二维码排布标签页：左侧显示全局与分题二维码开关及角落吸附按钮，右侧在第 2 页上实时拖拽调整 QR Q1 与 QR Q2 的位置"
                }
            ],
            callouts: [
                {
                    title: "分题直达深层链接（?q=Q1）",
                    desc: "扫描某道题框内的专属二维码即可在手机上直达该题界面，无需二次查找翻页。"
                },
                {
                    title: "修改评分细则后已印二维码永久有效",
                    desc: "即使讲义印发后您微调了评分项并更新在线发布，学生手中已打印的纸质二维码依然 100% 有效！"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "二维码自主练习模式 • 第 4 步 — 网站发布（Gradaly Pro）与学生端体验",
            badge: "在线发布需 Gradaly Pro",
            shortTitle: "网站发布（Pro）与学生端体验",
            title: "发布学生端自主练习网站（Gradaly Pro）及手机端自评体验",
            subtitle: "免费版支持创建项目、设计带二维码的 PDF 并在内置模拟器中测试；Gradaly Pro 解锁学生端练习网站的正式发布（云端托管或导出 .zip）。",
            paragraphs: [
                "在 <strong>3. 网站发布</strong> 标签页中，您可以精细配置移动端应用的教学反馈策略，并一键发布学生端自主练习网站：",
                "<strong>1. 教学可见性策略选项：</strong><br>• <strong>在第 1 次尝试前显示评分细则各评分项：</strong> 可选择让学生在动笔前看到各得分点要求，或在提交首张手写照片前暂时隐藏评分项以锻炼独立思考。<br>• <strong>显示详细的 AI 评阅分析依据：</strong> 在过程性反馈评语之外，一并展示逐个评分项判定得分或未得分的具体原因。<br>• <strong>在至少完成一次作答尝试后解锁参考答案（<code>Solutionnaire</code>）：</strong> 在学生拍照提交首次真实手写尝试之前锁定标准答案，杜绝“未思考先看答案”！",
                "<strong>2. 在内置智能手机模拟器中免费预览测试：</strong> 点击顶部横幅右侧的<strong>测试学生端网页应用（模拟器）</strong>，即可在 Gradaly 桌面端内完整模拟预览手机端交互效果。",
                "<strong>3. 在线发布学生练习网站或导出静态 <code>.zip</code> 包（Gradaly Pro）：</strong> 免费版支持完整创建练习项目并生成带二维码的 PDF 讲义；升级至 <strong>Gradaly Pro</strong> 后即可正式发布学生练习网站：点击<strong>一键发布至 portal.gradaly.io</strong>（客户端本地完成 <strong>AES-256-GCM</strong> 加密，支持选择 <strong>60 天</strong>、<strong>180 天 / 1 学期</strong> 或 <strong>365 天 / 1 学年</strong> 在线有效期），或点击<strong>导出为独立静态网站包（.zip）</strong>部署到贵校自有 Web 服务器。",
                "<strong>4. 学生智能手机端自评全流程体验：</strong><br>• 学生用手机相机扫描纸质习题讲义上的二维码。<br>• 当托管于 <code>portal.gradaly.io</code> 时，依托内置 Gradaly AI 安全中继，AI 评阅<strong>无需输入任何 API 密钥即可立即使用</strong>。如有需要——或当网站以独立 <code>.zip</code> 包部署在校内服务器时——学生也可轻触<strong>个人密钥</strong>按钮粘贴自己的免费 <strong>Google AI Studio（Gemini）API 密钥</strong>（仅保存在学生本人手机浏览器本地）。<br>• 学生点击<strong>拍摄我的手写解答</strong>，对准纸面推导过程拍照并点击<strong>使用 AI 评估我的解答</strong>，数秒内即可查看得分、已达成评分项、LaTeX 数学公式评语以及自动解锁的参考答案！",
                "<strong>5. 在线实景交互演示（可打印二维码 PDF 讲义与学生端门户）：</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">查看带二维码的可打印 PDF 习题讲义（英语演示）</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">打开实时学生端自主练习门户（英语演示）</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "练习模式 — 3. 网站发布标签页：教学可见性开关、首次尝试后解锁参考答案、保留期限选择（60/180/365 天）以及 Gradaly Pro 一键云发布 / ZIP 导出"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "内置学生智能手机模拟器：直接预览学生拍摄纸面解答并即时获取过程性 AI 诊断反馈的移动端界面"
                }
            ],
            callouts: [
                {
                    title: "内置智能手机模拟器（免费开放）",
                    desc: "在正式发布前，可在 Gradaly 软件内免费完整测试习题显示、评分标准与学生手机端交互流程。"
                },
                {
                    title: "一键云托管或导出静态 ZIP（Gradaly Pro）",
                    desc: "采用客户端 AES-256-GCM 加密一键发布至 portal.gradaly.io（60/180/365 天），或导出独立 .zip 包。"
                },
                {
                    title: "内置 AI 中继或学生个人密钥",
                    desc: "在 portal.gradaly.io 上学生零密钥配置即可直接自评，亦支持选填个人免费 Gemini 密钥。"
                },
                {
                    title: "先动笔作答、后解锁参考答案",
                    desc: "学生必须先拍照提交一次纸面手写解答，系统才会向其展示教师上传的参考答案。"
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "常见问题解答（FAQ）",
            badge: "加密机制、访问权限、AI 中继与隐私保护",
            shortTitle: "常见问题解答",
            title: "常见问题解答（FAQ）",
            subtitle: "详细解答练习网站为何加密、谁可以访问、学生手写照片与 API 密钥如何处理，以及教师是否会追踪学生练习记录等常见问题。",
            paragraphs: [
                "以下为您解答关于 Gradaly“二维码自主练习与自评模式”最常见的核心疑问。"
            ],
            faqs: [
                {
                    q: "为什么要对发布的练习网站进行加密？",
                    a: "<p><strong>为了严格保护授课教师的教学知识产权：</strong> 无论是 Gradaly 平台方还是任何外部第三方，都无权查看或获取您发布的课程材料——包括您精心编写的习题讲义、详尽的参考答案（<code>Solutionnaire</code>），以及您制定的评分细则与评阅指令。上述全部内容均属于<strong>授课教师的专属知识产权</strong>。</p><p>在任何字节上传至 <code>portal.gradaly.io</code> 之前，Gradaly 都会先在教师本地电脑上使用 <strong><code>AES-256-GCM</code></strong> 算法将整套练习数据包加密。解密密钥（<code>#k=...</code>）仅嵌入在网址与二维码 <code>#</code> 号之后的 URL 片段中，浏览器绝不会将其发送至服务器，服务器端仅托管无法读取的密文块。</p>"
                },
                {
                    q: "谁有权限访问我发布的练习应用？",
                    a: "<p><strong>仅有持有教师主动分享的专属链接或二维码的人员</strong>能够访问该应用并在本地浏览器中解密习题内容。</p><p>因此，教师可以<strong>在完全保密的前提下向本班学生分发</strong>可打印的 PDF 习题讲义或练习链接（例如上传至校内封闭的 Moodle/Canvas 课程页面，或在课堂上发放纸质讲义），习题与参考答案绝不会在互联网上被公开检索。当然，由于访问权限基于持有链接或二维码，若学生将该链接或二维码转发给班外人员，持有者同样可以打开练习页面。</p>"
                },
                {
                    q: "学生需要准备 API 密钥吗？学生拍摄的手写作答照片会如何处理？",
                    a: "<p>根据学生使用练习门户的方式，系统支持两种运行模式——且两种模式均严格保障 <strong>100% 匿名性与零图像存储</strong>：</p><p><strong>1. <code>portal.gradaly.io</code> 默认模式（学生无需任何 API 密钥）：</strong><ul><li>当练习项目发布在 <code>portal.gradaly.io</code> 上且学生未填写个人 API 密钥时，评估请求将通过<strong>安全的 Gradaly AI 中继服务</strong>完成（让包括未满 18 周岁学生在内的所有学习者无需注册任何账号即可立即使用）。</li><li>在此模式下，学生手写作答照片（连同该题的评阅提示词）<strong>仅在内存中短暂经由 Gradaly 中继服务器转发</strong>至 Gemini Flash 进行评估。</li><li><strong>严格的零存储承诺：</strong> 学生上传的照片<strong>绝不写入硬盘或云端数据库</strong>，全程保持 <strong>100% 匿名</strong>，且一旦将 AI 诊断反馈返回至学生手机，图像数据即刻<strong>从服务器内存中彻底销毁</strong>。</li></ul></p><p><strong>2. 个人 API 密钥模式（在 <code>portal.gradaly.io</code> 上可选，或在独立 <code>.zip</code> 静态网站上使用）：</strong><ul><li>若学生点击<em>个人密钥</em>按钮填入自己的 Google Gemini API 密钥，该密钥将<strong>严格仅保存在学生本人手机浏览器的本地存储（<code>localStorage</code>）中</strong>（绝不发送给任何 Gradaly 服务器，教师也完全不可见）。</li><li>使用个人 API 密钥时，学生的手机浏览器通过<strong>加密 HTTPS 直接与 Google 官方 Gemini API 端点通信</strong>，完全不经过 Gradaly 服务器。</li></ul></p>"
                },
                {
                    q: "教师能否看到哪些学生使用了练习应用或查看学生的自评分数？",
                    a: "<p><strong>不能——二维码自主练习模式采用 100% 匿名与自主设计。</strong> 系统中没有学生登录环节、不关联学生名单，也不会向教师端回传任何使用统计或成绩记录。</p><p>教师不会知道哪位学生扫描了二维码、尝试了多少次或获得了多少分。这一刻意为之的设计旨在营造一个<strong>安全、零心理负担的过程性学习空间</strong>，鼓励学生在正式考试前自由地在纸上试错、反复推演并坦然检验自己的真实掌握程度。</p>"
                },
                {
                    q: "在二维码自主练习模式下，免费版（非 Pro）与 Gradaly Pro 分别支持哪些功能？",
                    a: "<p><strong>免费版（非 Pro）：</strong> 支持创建练习项目、导入习题 PDF 与参考答案、制定和校准过程性评分标准（手工或使用 AI 评分细则助手）、排布二维码位置、下载<strong>内嵌二维码的可打印 PDF 习题讲义</strong>，并在内置的<strong>智能手机模拟器</strong>中完整测试全流程。</p><p><strong>Gradaly Pro：</strong> 解锁<strong>学生端自主练习网站的正式发布功能</strong>——既可一键加密发布至 <code>portal.gradaly.io</code> 云端（可选 60、180 或 365 天），也可导出为独立静态 <code>.zip</code> 网站包部署在您所在高校的自有服务器上。</p>"
                },
                {
                    q: "如果我已经打印或向学生分发了纸质 PDF 讲义，事后调整了评分细则怎么办？",
                    a: "<p><strong>学生手中已打印的纸质二维码依然 100% 有效！</strong> 每个练习项目都拥有持久固定的发布标识符与加密密钥。若您在发放纸质讲义后发现某题表述有笔误或希望优化某个评分项权重，只需在 Gradaly 的 <em>3. 网站发布</em> 标签页中点击<strong>更新在线发布</strong>：学生扫描原先同一张纸上的二维码，即可立即享受到更新后的评分细则。</p>"
                }
            ]
        }
    ]
};
