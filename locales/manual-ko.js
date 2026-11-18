window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.ko = {
    badge_manual: "사용자 매뉴얼 (2-in-1)",
    back_home: "웹사이트로 돌아가기",
    download_btn: "Gradaly 다운로드",
    hero_pill: "2-in-1 데스크톱 애플리케이션 • 전체 사용자 매뉴얼 v4.5.0",
    hero_title: "Gradaly 사용자 매뉴얼",
    hero_subtitle: "더 정교한 채점으로, 더 깊이 있는 배움을. Gradaly는 두 가지 독립적인 교육 워크플로를 제공하는 2-in-1 애플리케이션입니다. (1) 교수자에 의한 시험 및 모의고사 채점(실전과 동일한 환경의 학기 중 형성적 모의고사 또는 정규 시험용), (2) 학생이 스마트폰으로 수행하는 QR 자율 연습 및 자기평가. 아래에서 목적에 맞는 매뉴얼을 선택하세요:",
    search_placeholder: "전체 가이드 검색 (예: 시험, 모의고사, QR 연습, 채점 기준표, 루브릭, OCR, API 키, FAQ)...",
    card_exam_badge: "제품 1 • 교수자 채점용",
    card_exam_chapters: "챕터 E1–E9",
    card_exam_title: "매뉴얼 1: 시험 및 모의고사 모드 (교수자용)",
    card_exam_desc: "정규 중간·기말고사 또는 학기 중 실전 환경의 형성적 모의고사용: 학생 답안지를 스캔하고, 100% 오프라인 OCR로 학번·성명을 매칭하며, 수동 또는 AI·팀 협업으로 채점한 뒤 주석 포함 답안지를 반환합니다.",
    card_practice_badge: "제품 2 • 학생 자기평가용",
    card_practice_chapters: "챕터 P1–P5",
    card_practice_title: "매뉴얼 2: QR 자율 연습 및 자기평가 모드 (학생용)",
    card_practice_desc: "연습문제집, 튜토리얼 및 자율 학습지용: 연습문제 PDF에 QR 코드를 배치하여 학생이 종이에 직접 푼 뒤 스마트폰으로 스캔하고 즉각적인 형성적 AI 피드백을 받을 수 있도록 지원합니다.",
    filter_label: "표시 범위:",
    filter_exam: "1. 시험 가이드 (E1–E9)",
    filter_practice: "2. QR 연습 가이드 (P1–P5)",
    filter_all: "전체 챕터 보기",
    filter_hint: "각 가이드는 100% 독립적으로 구성되어 있으므로 필요한 가이드만 읽으셔도 충분합니다!",
    switch_guide_kicker: "Gradaly의 두 번째 워크플로 살펴보기",
    btn_go_practice: "매뉴얼 2 열기: QR 연습 모드",
    btn_go_exam: "매뉴얼 1 열기: 시험 채점 모드",
    toc_title: "목차",
    sidebar_exam_mode: "시험 모드",
    sidebar_practice_mode: "QR 연습",
    screenshot_badge: "영문 인터페이스",
    privacy_box_title: "100% 로컬 학생 개인정보 보호",
    privacy_box_text: "수강생 명단, 식별 영역, OCR 매칭 결과 및 프로젝트 파일은 컴퓨터의 Documents/Gradaly 폴더에 로컬로 저장됩니다. 클라우드 포털과 팀 공유 링크에는 클라이언트 측 AES-256-GCM Zero-Knowledge 암호화가 적용됩니다.",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "매뉴얼 1 — 시험 및 모의고사 모드 (교수자용)",
            partColor: "indigo",
            partBanner: {
                kicker: "매뉴얼 1 • 제품 1: 시험 및 모의고사 채점",
                title: "교수자용 시험 및 모의고사 채점 완벽 가이드 (100% 수동, AI 보조 및 팀 협업 모드)",
                desc: "정규 시험부터 학기 중 실전 환경의 형성적 모의고사까지, 스캔된 학생 답안지를 평가하기 위한 독립형 완벽 가이드입니다."
            },
            tag: "시험 모드 • 1단계 — 시험 프로젝트 생성",
            badge: "100% 수동 또는 AI 보조 채점",
            shortTitle: "시험 프로젝트 생성하기",
            title: "시험 프로젝트 생성 및 100% 수동 vs. AI 보조 워크플로",
            subtitle: "새로운 시험 프로젝트를 생성(또는 20부 답안지가 포함된 시험 데모 실행)하여 컴퓨터에서 스캔된 학생 답안지를 평가하세요.",
            paragraphs: [
                "<strong>시험 프로젝트(<code>Exam</code> 배지)란 무엇인가요?</strong> 시험 프로젝트는 교수자가 학생들의 지필 답안지를 수거하여 PDF로 스캔한 뒤 수강생 전체를 평가하는 모든 상황을 위해 설계되었습니다. 여기에는 <strong>정규 중간·기말고사</strong>뿐만 아니라 실전 시험 환경에서 치르는 <strong>학기 중 형성적 모의고사</strong>가 포함됩니다. 기말고사를 종이에 직접 수기로 채점하는 방식을 선호하시더라도, 학기 중 모의고사에 시험 모드를 활용하면 실전과 동일한 조건에서 모든 학생에게 세밀한 개별 피드백을 제공할 수 있습니다. 상단 바에는 <strong>6개의 전용 워크플로 탭</strong>이 제공됩니다: <code>1. 캔버스 및 문항</code>, <code>2. 수강생</code>, <code>3. 답안지</code>, <code>4. 매칭</code>, <code>5. 채점</code>, <code>6. 요약 및 통계</code>.",
                "<strong>100% 수동 모드 또는 AI 보조 모드:</strong> Gradaly에서 시험을 채점하기 위해 AI API 키가 <strong>필수인 것은 아닙니다</strong>. 설치 즉시 <strong>100% 수동 모드</strong>로 작동하며, 빠른 키보드 단축키(<code>1–9</code>로 채점 항목 체크/해제, <code>J</code>/<code>K</code>로 학생 간 이동), 채점 항목 배점 변경 시 전체 수강생 점수 실시간 재계산, 풍부한 Markdown 및 KaTeX 수식 피드백을 모두 사용할 수 있습니다. 원할 때 언제든 AI API 키를 연결하면 최종 결정권을 교수자가 온전히 유지하면서도 <strong>AI 루브릭 어시스턴트</strong>와 <strong>멀티모달 AI 사전 채점</strong> 기능을 활성화할 수 있습니다.",
                "<strong>시작 화면(Welcome Screen)</strong>에서 <strong>새 프로젝트(New project)</strong>를 클릭하고 <strong>시험 프로젝트(Exam Project — 교수자 채점용)</strong>를 선택하거나, <strong>데모 프로젝트 생성 → 시험 프로젝트</strong>를 클릭하여 20부의 손글씨 학생 답안지와 모범 답안이 완비된 물리학 시험 예제를 즉시 살펴보세요."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "시작 화면: 시험 프로젝트는 남색 'Exam' 배지로 구분되며 로컬 컴퓨터의 Documents/Gradaly 폴더에 저장됩니다"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "데모 생성 모달: '시험 프로젝트(교수자 채점용)'를 선택하면 채점 완료된 답안지 20부가 포함된 오프라인 데모가 생성됩니다"
                }
            ],
            callouts: [
                {
                    title: "전용 6탭 시험 평가 작업 공간",
                    desc: "캔버스 및 문항 → 수강생 → 답안지 → 오프라인 OCR 매칭 → 3분할 채점 콘솔 → 전체 수강생 통계 및 내보내기."
                },
                {
                    title: "100% 오프라인 및 수동 채점 완벽 지원",
                    desc: "키보드 단축키로 고속 수동 채점을 수행하거나, AI 사전 채점 후 교수자가 직접 검토·확정할 수 있습니다."
                },
                {
                    title: "20부 답안지 내장 시험 데모",
                    desc: "별도의 스캔 작업 없이도 내장된 영어·프랑스어 시험 데모를 통해 전체 평가 워크플로를 즉시 체험할 수 있습니다."
                },
                {
                    title: "Documents/Gradaly 내 100% 로컬 파일 보관",
                    desc: "모든 PDF, 수강생 명단 및 채점 데이터는 강제 클라우드 업로드 없이 내 컴퓨터의 일반 폴더에 안전하게 보관됩니다."
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "시험 모드 • 2단계 — 캔버스, 식별 영역 및 채점 기준표",
            badge: "정확한 채점을 위한 핵심 단계",
            shortTitle: "캔버스, 식별 영역 및 채점 항목",
            title: "학생 식별 영역, 문항 영역, 배점 방식 및 모범 답안 설정",
            subtitle: "빈 시험지 PDF를 불러오고, 오프라인 OCR을 위한 학생 식별란을 지정한 뒤 문항과 채점 기준표(루브릭)를 설계하세요.",
            paragraphs: [
                "시험 프로젝트의 <strong>1. 캔버스 및 문항(Canvas &amp; Questions)</strong> 탭에서 먼저 빈 시험지 PDF(<code>캔버스</code>)를 불러옵니다. 그런 다음 PDF 페이지 위에 두 종류의 직사각형 영역을 드래그하여 지정합니다:",
                "<strong>1. 학생 식별 영역(<code>ID</code>) 지정:</strong> 왼쪽 패널에서 <strong>학생 식별 영역(성명 / 학번)</strong> 버튼을 클릭하고, 1페이지에서 학생이 이름과 학번을 적는 상단 기재란에 직사각형을 그립니다. 이후 Gradaly가 모든 스캔 답안지에서 이 영역만 정확히 잘라내어 수강생 명단과 대조하는 <strong>100% 오프라인 OCR 자동 매칭</strong>을 수행합니다.",
                "<strong>2. 문항별 영역 지정 및 AI 문제 지문 출처 선택(<code>학생 답안지</code> vs. <code>캔버스</code>):</strong> 학생 답안지에 대해 AI 채점을 실행하면 Gradaly는 해당 문항에 지정된 직사각형 영역을 이미지로 잘라내어 채점 항목과 함께 비전(Vision) AI 모델에 전달합니다.<br>• <strong>단일 통합 영역(기본값):</strong> 레이아웃이 허용하는 한 인쇄된 문제 지문과 학생의 답안 작성란을 하나의 직사각형 안에 함께 포함하세요. 기본 설정(<code>AI 지문 출처: 학생 답안지</code>)에서는 Gradaly가 해당 영역을 <strong>학생 본인의 답안지(<code>copies/copie_XXX.pdf</code>)에서 직접 잘라냅니다</strong>. 따라서 학생마다 개별화된 수치나 파라미터가 인쇄된 시험지라도 AI가 해당 학생 고유의 문제 조건과 풀이를 정확히 함께 판독합니다.<br>• <strong>지문과 답안 영역 분리(<code>Dissocier énoncé / réponse</code>) 및 <code>AI 지문 출처</code> 선택기:</strong> 문제 지문과 답안 작성란이 서로 다른 페이지에 있거나 다른 내용으로 떨어져 있는 경우, <strong>지문 / 답안 영역 분리</strong>를 클릭하여 두 개의 영역(<code>문제 지문</code> 및 <code>답안지 답안란</code>)을 각각 지정하고 문제 지문 이미지를 어디서 가져올지 선택할 수 있습니다:<br>&nbsp;&nbsp;– <strong><code>학생 답안지</code> (<code>Student Copy</code>):</strong> 지문 영역과 답안 영역을 모두 <strong>각 학생 본인의 답안지</strong>에서 잘라내어 상하로 이어 붙입니다(학생별로 문제 수치나 조건이 다른 개별화 시험지에 필수).<br>&nbsp;&nbsp;– <strong><code>캔버스</code> (<code>Canvas</code>):</strong> 지문 영역은 빈 시험지 원본(<code>canvas.pdf</code>)에서 잘라내고 그 아래에 학생의 답안 영역을 이어 붙입니다(문제지가 인쇄되지 않은 별도 답안지에 작성하는 시험에 이상적).",
                "<strong>3. 기본 점수(<code>Base Score</code>), 배점 한도(<code>Max Score</code>), 점수 상·하한 보정(Clamping) 및 <code>최대 가능 점수</code> 이해하기:</strong><br>• <strong>점수 산출 공식:</strong> Gradaly는 문항의 <strong>기본 점수</strong>에서 시작하여 체크된 모든 채점 항목의 점수를 합산(<code>원점수 = 기본 점수 + Σ 체크된 항목 점수</code>)한 뒤, 최종 문항 점수를 <strong><code>0</code>점 이상 <code>배점 한도(Max Score)</code> 이하 범위로 자동 보정(Clamping)</strong>합니다.<br>• <strong>순수 가산형 또는 순수 감산형 방식 권장:</strong> <strong>가산형(Additive) 루브릭</strong>은 <code>기본 점수 = 0</code>으로 설정하고 양수 채점 항목(<code>+1</code>, <code>+1.5</code> 등)만 사용합니다. <strong>감산형(Diminutive / Subtractive) 루브릭</strong>은 <code>기본 점수 = 배점 한도(Max Score)</code>로 설정하고 감점 항목(<code>-0.5</code>, <code>-1</code> 등)만 사용합니다. <strong>한 문항 안에서 가점과 감점을 혼합하지 마세요</strong> — 단일 방식이 AI 판독과 학생의 이해 모두에 훨씬 명확합니다.<br>• <strong><code>최대 가능 점수(Max possible)</code> 보조 표시:</strong> <code>기본 점수 + Σ (양수 항목 배점)</code>을 실시간으로 계산하여 채점 항목의 합이 문항 배점 한도(<code>Max Score</code>)와 일치하는지 한눈에 확인할 수 있게 해줍니다.",
                "<strong>4. 하단 공통 채점 지침 입력란(<code>채점 지침 및 논리 / AI 프롬프트</code>):</strong> 각 문항 하단의 텍스트 상자에 예외 사례 처리 기준(예: 앞 단계 계산 실수에 대한 후속 풀이 부분 점수 인정, 동치 수식 허용 등)을 명시하세요. 만약 인쇄된 문제 지문이 잘라낸 영역 밖에 있다면 여기에 텍스트로 문제 지문을 붙여넣으세요.",
                "<strong>5. 모범 답안(<code>Solutionnaire</code> / <code>⭐ 모범 답안</code>) 불러오기 및 검증:</strong> PDF 뷰어 상단의 <strong>문제지(캔버스) / 모범 답안</strong> 전환 버튼을 사용하여 작성된 모범 답안 PDF를 불러오세요. 채점 탭 최상단에 <strong><code>⭐ 모범 답안</code></strong>으로 고정 표시되며, 본인의 모범 답안이 모든 문항에서 <strong>만점(<code>Max/Max</code>)</strong>을 받는지 클릭 한 번으로 반드시 사전 점검하시기 바랍니다!"
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "시험 모드 — 캔버스 및 문항 탭: 학생 식별 영역 버튼, 기본/최대/최대 가능 점수, 체크형 채점 항목, 하단 AI 채점 지침 및 문제지/모범 답안 전환 토글"
                }
            ],
            callouts: [
                {
                    title: "오프라인 OCR용 학생 식별 영역",
                    desc: "1페이지의 상단 인적사항 기재란을 한 번만 지정하면 모든 스캔 답안지에서 해당 영역을 추출하여 로컬 성명·학번 인식을 수행합니다."
                },
                {
                    title: "순수 가산형 또는 감산형 루브릭",
                    desc: "0점에서 시작해 +점수를 더하거나, 만점에서 시작해 −감점을 적용하세요. 최종 문항 점수는 항상 [0, 배점 한도] 구간으로 보정됩니다."
                },
                {
                    title: "문항 영역 안에 문제 지문 포함",
                    desc: "인쇄된 문제 지문과 학생 답안 작성란을 함께 감싸도록 지정하세요(또는 하단 지침란에 문제 텍스트를 입력)."
                },
                {
                    title: "모범 답안(⭐) 정합성 사전 점검",
                    desc: "모범 답안 PDF를 불러온 뒤 모든 문항에서 만점(Max/Max)을 획득하는지 원클릭으로 검증하세요."
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "시험 모드 • 3단계 — AI 루브릭 어시스턴트",
            badge: "대화형 설계 및 보정",
            shortTitle: "AI 루브릭 어시스턴트",
            title: "AI 루브릭 어시스턴트와 함께 채점 기준표 공동 설계 및 보정하기",
            subtitle: "문제 지문과 모범 답안 PDF를 바탕으로 채점 기준표 초안을 자동 생성하고, 채팅과 실제 학생 답안 스크린샷 붙여넣기로 정교하게 다듬으세요.",
            paragraphs: [
                "<strong>캔버스 및 문항</strong> 탭의 어느 문항에서든 <strong>AI로 설계 / 수정(Design / Edit with AI)</strong> 버튼을 클릭하면 대화형 <strong>AI 루브릭 어시스턴트</strong>가 열립니다.",
                "<strong>1. 루브릭 설계 옵션 설정:</strong> 문항의 <code>배점 한도(Max Score)</code>를 지정하고, <strong>가산형(Additive)</strong> 또는 <strong>감산형(Subtractive)</strong> 방식과 원하는 <strong>채점 항목 개수</strong>(3개, 4개, 5개 또는 자율)를 선택합니다. <code>모범 답안</code> PDF를 불러온 상태라면 <em>\"모범 답안의 풀이를 기준 자료로 사용\"</em>에 체크하여 AI가 문제 지문과 모범 풀이를 함께 분석하도록 설정하세요.",
                "<strong>2. 채팅 모드 반복 수정 및 학생 답안 스크린샷 붙여넣기(<code>Cmd+V</code> / <code>Ctrl+V</code>):</strong> 오른쪽 채팅 창에서 자연어로 제안된 채점 항목을 세밀하게 조정하세요. 더 나아가 실제 학생의 손글씨 답안 일부를 캡처하여 <strong>채팅 창에 바로 붙여넣고</strong> 다음과 같이 지시할 수도 있습니다: <em>\"이 학생의 풀이 방식도 만점을 받을 자격이 있다고 생각합니다. 이에 맞춰 채점 항목과 채점 지침을 보완해 주세요.\"</em>",
                "<strong>3. 문항에 적용 및 소수 답안지 사전 보정:</strong> <strong>확인 및 문항에 적용</strong>을 클릭한 뒤, 전체 수강생 일괄 채점을 실행하기 전에 채점 탭에서 <code>⭐ 모범 답안</code>과 학생 답안지 2~3부를 먼저 테스트하여 기준표를 보정하세요."
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AI 루브릭 어시스턴트 모달: 왼쪽에는 제안된 채점 항목 및 PROMPT_TEXT, 오른쪽에는 스크린샷 붙여넣기를 지원하는 대화형 수정 채팅"
                }
            ],
            callouts: [
                {
                    title: "문제지와 모범 답안 동시 분석",
                    desc: "교수자의 수학적 유도 과정이나 핵심 개념 전개에 정확히 부합하는 체계적인 채점 항목과 배점을 생성합니다."
                },
                {
                    title: "실제 학생 답안 붙여넣기 (Cmd+V)",
                    desc: "경계선에 있는 예외적인 학생 손글씨 답안을 채팅에 붙여넣어 채점 기준 설명을 자동으로 정교화할 수 있습니다."
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "시험 모드 • 4단계 — 수강생 명단, 답안지 및 오프라인 OCR",
            badge: "100% 로컬 및 오프라인",
            shortTitle: "수강생 명단, 답안지 및 OCR 매칭",
            title: "수강생 명단(CSV), 대량 PDF 분할 및 100% 오프라인 OCR 매칭",
            subtitle: "클라우드 업로드 없이 로컬 컴퓨터에서 공식 수강생 명단을 불러오고, 대량 스캔 PDF를 개별 답안지로 분할한 뒤 학번·성명을 매칭하세요.",
            paragraphs: [
                "<strong>2. 수강생(Students)</strong> 탭에서 학사 시스템이나 LMS(Moodle, Canvas 등)에서 내보낸 CSV 또는 Excel 파일로 수강생 명단을 불러옵니다. Gradaly는 <strong>학번(Matricule / ID)</strong>, <strong>성(Last Name)</strong>, <strong>이름(First Name)</strong>, <strong>이메일(Email)</strong> 및 <strong>분반(Group)</strong> 열을 매핑합니다.",
                "<strong>3. 답안지(Copies)</strong> 탭에서는 개별 학생 PDF 파일들을 불러오거나, 복합기 스캐너에서 생성된 <strong>단일 통합 대량 스캔 PDF</strong>를 불러옵니다. 답안지 1부당 페이지 수(예: 학생당 4페이지)를 지정하면 <code>copie_01.pdf</code>, <code>copie_02.pdf</code> 등으로 자동 분할됩니다. 스캐너가 고해상도 대용량 파일(<strong>&gt; 220 DPI</strong>)을 생성한 경우 가져오기 단계에서 이를 자동 감지하여 <strong>200 DPI 원클릭 네이티브 최적화</strong>를 제안합니다(프로젝트 용량을 최대 1/4로 줄여 팀 공유 및 클라우드 동기화 속도 향상). 또한 <strong>답안지 페이지 무결성 검사</strong>를 실행하여 상하 반전(180°), 페이지 순서 뒤바뀜, 누락 페이지를 찾아내고 클릭 한 번으로 PDF를 복구할 수 있습니다.",
                "<strong>4. 매칭(Matching)</strong> 탭에서 <strong>자동 OCR 매칭 실행</strong>을 클릭하세요. Gradaly는 각 답안지 1페이지에서 학생 식별 영역을 잘라낸 뒤 <strong>컴퓨터 내부에 내장된 오프라인 OCR 엔진을 100% 로컬로 구동</strong>하여 손글씨 성명·학번을 판독하고 퍼지 매칭(fuzzy matching)으로 수강생 명단과 최적 연결합니다. 나란히 배치된 화면에서 몇 초 만에 시각적으로 확인하고 확정할 수 있습니다."
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "수강생 탭: 학번, 성명, 이메일, 분반 정보를 담고 있는 로컬 수강생 명단"
                },
                {
                    filePrefix: "05_copies",
                    caption: "답안지 탭: 통합 스캔 PDF 분할 및 개별 시험 답안지 미리보기"
                },
                {
                    filePrefix: "06_matching",
                    caption: "매칭 탭: 잘라낸 손글씨 학생 식별 영역 이미지와 수강생 명단을 나란히 대조하며 시각적으로 검증"
                }
            ],
            callouts: [
                {
                    title: "철저한 로컬 개인정보 보호 (클라우드 전송 제로)",
                    desc: "학생 성명, 학번, 이메일 및 상단 인적사항 이미지는 컴퓨터 밖으로 절대 나가지 않으며 데스크톱 앱 내부에서 100% 오프라인으로 처리됩니다."
                },
                {
                    title: "미매칭 필터 및 즉시 검색",
                    desc: "'미매칭' 또는 '모호한 매칭' 필터를 사용해 흘려 쓴 손글씨 답안지도 몇 초 안에 손쉽게 지정할 수 있습니다."
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "시험 모드 • 5단계 — 채점 콘솔",
            badge: "100% 수동, 표준 AI 또는 Batch Flex (-50%)",
            shortTitle: "수동 및 AI 보조 채점",
            title: "3분할 채점 콘솔: 고속 수동 채점, AI 사전 보정 및 Batch 모드",
            subtitle: "수강생 전체의 답안을 문항별로 탐색하고, 3색 채점 상태 코드를 이해하며, 개별 답안 보정 후 일괄 Batch AI 사전 채점을 실행하세요.",
            paragraphs: [
                "<strong>5. 채점(Grading)</strong> 탭은 유기적으로 연동되는 3개의 패널로 구성됩니다: 왼쪽의 <strong>수강생 목록</strong>(최상단에 <code>⭐ 모범 답안</code> 고정), 중앙의 <strong>대화형 PDF 뷰어</strong>, 그리고 오른쪽의 <strong>문항 및 채점 기준표 워크스테이션</strong>입니다.",
                "<strong>1. 문항 번호 원형 버튼 및 2차원 키보드 탐색:</strong> 오른쪽 상단의 문항 번호 원형 버튼(<code>1</code>, <code>2</code>, <code>3</code>...)을 클릭하거나 <code>←</code> / <code>→</code>(또는 <code>H</code> / <code>L</code>) 키를 눌러 문항 간에 이동하세요. 같은 문항에서 <code>↑</code> / <code>↓</code>(또는 <code>K</code> / <code>J</code>) 키로 이전·다음 학생으로 이동하고, 숫자 키 <code>1–9</code>로 1~9번 채점 항목을 체크/해제하며, <code>V</code> 키로 수동 검증을 확정합니다. 언제든지 <code>?</code> 키(또는 상단 바의 <code>⌨️</code> 아이콘)를 누르면 내장 키보드 단축키 안내표를 확인할 수 있습니다.",
                "<strong>2. 3색 상태 표시 코드:</strong><br>• 🟢 <strong>초록색(<code>AI</code>):</strong> AI가 사전 채점을 완료한 상태(교수자의 검토 대기 중).<br>• 🔵 <strong>파란색(<code>Human</code>):</strong> 교수자가 직접 채점했거나 수정·명시적으로 검증 확정한 상태.<br>• ⚪ <strong>회색(<code>To grade</code>):</strong> 아직 채점되지 않은 상태.",
                "<strong>3. 단일 답안 보정, AI 쿼리 검사기 및 전체 수강생 일괄 Batch AI 실행:</strong><br>• <strong>단일 문항 보정 및 즉시 중단(<code>✕ 중단</code>):</strong> 오른쪽 하단의 <strong>이 문항에 대해 AI 다시 실행</strong>을 클릭하면 현재 선택된 학생 답안지에 대해서만 루브릭을 테스트합니다. 추론 모델의 응답이 길어질 경우 로딩 아이콘 옆의 빨간색 <strong><code>✕ 중단</code>(<code>Interrompre</code>)</strong> 버튼을 클릭하여 평가를 즉시 취소할 수 있습니다.<br>• <strong>실시간 AI 쿼리 및 이미지 검사기(<code>👁️ AI 쿼리</code> / <code>Requête IA</code>):</strong> 단일 문항 평가 버튼 옆의 <strong><code>👁️ AI 쿼리</code></strong> 버튼을 클릭하면 대화형 <strong>AI 쿼리 검사 모달</strong>이 열립니다. 여기서 실시간으로 다음 세 가지를 투명하게 확인할 수 있습니다: (1) 비전 모델로 전송되는 <strong>정확한 잘라내기/결합 JPEG 이미지</strong>와 문제 지문 부분의 출처가 <strong>학생 답안지</strong>인지 <strong>빈 캔버스(<code>canvas.pdf</code>)</strong>인지 여부(원클릭 전환 토글 포함), (2) 전체 <strong>시스템 프롬프트 및 사용자 프롬프트</strong>, (3) <strong>실제 HTTP JSON 페이로드 구조</strong>(<code>code_execution</code> 등 활성화된 도구와 엄격한 JSON 응답 스키마 포함).<br>• <strong>다중 답안지 일괄 실행(<code>▶ AI 채점</code>):</strong> 왼쪽 상단의 <strong>▶ AI 채점</strong>을 클릭하여 선택한 답안지와 문항을 일괄 평가합니다. <strong>⚡ 표준 모드</strong>(PDF 캐시를 공유하는 문항 단위 <code>(답안지, 문항)</code> 병렬 워커)와 <strong>🌿 Flex / 비동기 Batch 모드(비용 50% 할인)</strong> 중 선택할 수 있으며, 전체 수강생 채점 시에는 직접 발급받은 Gemini, OpenAI 또는 Anthropic 키를 사용한 Flex 모드를 권장합니다.<br>• <strong>선택형 답안 이상 징후 감지(<code>⚠️ 이상 징후</code>):</strong> AI 설정에서 기본 활성화된 이 기능은 채점 도중 물리적·시각적 이상 징후(지정 영역 밖 답안 작성, 심한 취소선/모호한 수정, 판독 불가 필체, 페이지 뒤바뀜 등)를 점수에 영향을 주지 않고 자동으로 표시해 주므로 <code>⚠️ 이상 징후</code> 필터로 모아 원클릭으로 확인·해제할 수 있습니다."
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "채점 콘솔 전체 화면: 왼쪽 학생 목록(⭐ 모범 답안, 상태 점, 문항 점수 및 총점), 해당 문항 영역에 자동 초점 맞춰진 중앙 PDF, 오른쪽 루브릭 워크스테이션"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "오른쪽 패널 하단: AI 채점 근거, 학생용 피드백(Markdown + KaTeX), 덮어쓰기 보호 체크박스 및 '이 문항에 대해 AI 다시 실행'"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "AI 채점 시작 모달: 대상 답안지, 문항, 덮어쓰기 보호 규칙 및 표준 vs. Flex 비동기 Batch 모드(-50%) 선택"
                }
            ],
            callouts: [
                {
                    title: "100% 수동 채점을 위한 2차원 키보드 속도",
                    desc: "↑/↓(K/J)로 답안지 이동, ←/→(H/L)로 문항 전환, 1–9로 채점 항목 토글, V로 검증 확정, Esc로 입력란 빠져나오기, ?로 단축키 가이드를 확인하세요."
                },
                {
                    title: "추천 Flex Batch 모드 (-50% 할인)",
                    desc: "Google Gemini, OpenAI, Anthropic 직접 API 키 사용 시 50% 할인된 요금으로 수강생 전체의 비동기 사전 채점을 지원합니다."
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "시험 모드 • 6단계 — 팀 공동 채점 (Gradaly Pro)",
            badge: "협업 공유 및 선택 병합 • PRO",
            shortTitle: "팀 공유 및 병합 (PRO)",
            title: "협업 프로젝트 공유 및 문항별 선택 병합",
            subtitle: ".gradaly 아카이브 파일 또는 종단간 암호화 클라우드 링크를 통해 동료 교수진·조교(TA)와 시험 문항을 분담하여 채점하세요 (Gradaly Pro).",
            paragraphs: [
                "동료 교수나 조교진과 시험을 분담하여 채점할 때, <strong>Gradaly Pro</strong>를 사용하면 로컬 <code>.gradaly</code> 아카이브 파일이나 <strong>AES-256-GCM 암호화 클라우드 링크</strong>(유효기간 7일, 14일 또는 30일)를 통해 전체 프로젝트 또는 가벼운 일부 데이터만 안전하게 공유할 수 있습니다.",
                "동료가 <strong>가져오기 / 병합(Import / Merge)</strong>을 클릭하면 Gradaly는 시험 캔버스 PDF의 SHA-256 해시 지문을 검증한 뒤, 아카이브를 <strong>새 독립 프로젝트</strong>로 가져오거나 <strong>문항 단위로 채점 기준표 및 채점 결과를 선택 병합</strong>(예: 조교 1의 Q1–Q2 채점본과 조교 2의 Q3–Q4 채점본 병합)할 수 있도록 지원하며, 병합 전 자동 백업을 생성합니다."
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "프로젝트 공유 / 내보내기 모달 (Gradaly Pro): 공유 프리셋, 문항별 필터 및 AES-256 암호화 클라우드 링크 생성"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "가져오기 / 선택 병합 모달 (Gradaly Pro): SHA-256 캔버스 일치 검증 및 문항별 루브릭·채점 결과 선택 병합"
                }
            ],
            callouts: [
                {
                    title: "종단간 암호화 클라우드 링크",
                    desc: "클라이언트 측 AES-256-GCM 암호화로 채점팀 간 프로젝트를 안전하게 공유합니다(복호화 키 #k=...는 서버로 전송되지 않음)."
                },
                {
                    title: "문항 단위 정밀 선택 병합",
                    desc: "수동 수정 내역을 보호하고 자동 백업을 남기면서 여러 조교의 채점 결과를 깔끔하게 하나로 통합합니다."
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "시험 모드 • 7단계 — 통계 분석 및 결과 반환",
            badge: "Excel • Moodle CSV • 주석 PDF • 웹 포털",
            shortTitle: "통계, Moodle, PDF 및 웹 포털",
            title: "수강생 통계 분석, Moodle 내보내기, 주석 PDF 및 학생 답안 열람 포털",
            subtitle: "점수 분포를 분석하고, 성적과 개인별 답안 열람 링크를 Moodle로 가져오며, 학생들에게 풍부한 개별 피드백을 반환하세요.",
            paragraphs: [
                "<strong>6. 요약 및 통계(Summary)</strong> 탭에서는 평균, 중앙값, 표준편차, 최솟값/최댓값, 경계가 명확한 구간 히스토그램 <code>[a, b[</code>, 그리고 채점 항목별 달성률을 실시간으로 산출합니다.",
                "채점이 완료된 시험 결과를 학생에게 반환할 때는 다음 네 가지 채널 중 선택할 수 있습니다(무료 버전에서는 1부 미리보기 제공, Gradaly Pro에서 전체 수강생 지원):<br>1) <strong>다중 시트 Excel 성적표</strong>: 전체 요약 시트 + 문항별 전용 시트(전체 답안지 또는 선택한 일부 답안지 대상).<br>2) <strong>Moodle 내보내기(성적부 CSV 및 과제 채점 워크시트)</strong>: <em>Moodle 성적부 → 가져오기 → CSV 파일</em>용 표준 UTF-8 CSV를 생성하거나, <em>Moodle 과제(Assignment)</em>에서 다운로드한 오프라인 채점 워크시트를 학번·이메일 기준으로 자동 매칭하여 환산 점수(원점수, <code>/20</code> 또는 <code>/100</code>)와 클릭 가능한 <strong>개인별 암호화 답안 열람 URL</strong>을 Moodle <em>피드백</em> 열에 자동으로 채워 넣습니다!<br>3) <strong>사용자 지정 파일명 형식을 지원하는 개별 주석 PDF(ZIP 또는 단일 파일)</strong>: 요약 표지와 학생의 손글씨 답안 페이지를 결합하며, 유연한 변수(<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — 예: <code>{nom}_{prenom}_{projet}.pdf</code>)와 실시간 미리보기로 PDF 파일명 규칙을 자유롭게 지정할 수 있습니다.<br>4) <strong>Zero-Knowledge 학생 답안 열람 웹 포털</strong>: 멀티코어 CPU 파이프라인과 10개의 병렬 HTTP/2 스트림을 통해 암호화된 채점 답안지를 초고속으로 온라인 게시·동기화하고, <strong>직접 클라우드 이메일 발송(<code>@gradaly.io</code>)</strong> 또는 <strong>메일 머지 내보내기(<code>Publipostage</code> — Outlook Web / Microsoft 365, Word + Outlook 데스크톱, Thunderbird에서 교수자 본인의 대학 이메일 주소로 발송)</strong>용 Excel <code>.xlsx</code> 테이블·<code>.csv</code> 파일, <strong>Moodle 직접 연동</strong>, 혹은 강의실 배부용 <strong>절취형 개별 QR 확인증 인쇄</strong>로 안내할 수 있습니다."
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "요약 및 통계 탭 (시험 모드): 수강생 핵심 지표, 점수 분포 히스토그램, 채점 항목별 달성률 및 내보내기 허브"
                }
            ],
            callouts: [
                {
                    title: "Excel 성적표 및 주석 포함 PDF",
                    desc: "세부 채점 항목 내역과 KaTeX 수식이 깔끔하게 렌더링된 공식 대학 성적표 및 개별 PDF 답안지를 내보냅니다."
                },
                {
                    title: "Moodle CSV 내보내기 및 온라인 답안 링크",
                    desc: "성적과 클릭 가능한 개인별 답안 열람 URL을 Moodle(성적부 CSV 가져오기 또는 과제 오프라인 채점 워크시트)에 바로 반영합니다."
                },
                {
                    title: "암호화된 학생 답안 열람 포털",
                    desc: "학생은 Moodle, 이메일 매직 링크 또는 개별 QR 확인증을 통해 본인의 채점 답안지, 체크된 항목 및 맞춤 피드백을 열람합니다."
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "시험 모드 • 8단계 — AI 환경 설정 (선택 사항)",
            badge: "OpenRouter • Gemini • GPT • Claude • 로컬 서버",
            shortTitle: "API 키 설정 및 AI 모델 선택",
            title: "API 키 설정 및 과목에 맞는 최적의 AI 모델 선택하기",
            subtitle: "Gradaly를 100% 수동 모드로만 사용하신다면 이 챕터는 건너뛰셔도 됩니다. AI 루브릭 어시스턴트와 AI 사전 채점을 사용하려면 설정(⚙️)에서 API 키를 등록하세요.",
            paragraphs: [
                "<strong>채점 품질은 선택한 AI 모델의 성능에 직접적으로 좌우됩니다:</strong> 대학 수기 답안지(수학, 물리학, 공학, 경제학, 인문·사회과학)를 대상으로 한 자체 벤치마크에서 <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong>, <strong><code>Mistral-Large 4.0</code></strong> 모델이 <strong>매우 뛰어난 성능</strong>을 보였습니다. 담당 과목의 특성에 맞춰 여러 모델을 직접 비교해 보세요!",
                "<strong>제공업체 직접 키 vs. OpenRouter:</strong> <strong>Google Gemini</strong>, <strong>OpenAI</strong>, <strong>Anthropic</strong>에서 직접 API 키를 발급받으면 50% 할인된 비동기 <strong>Batch / Flex 모드</strong>를 사용할 수 있으며, <strong>OpenRouter</strong>를 선택하면 <strong>단 하나의 API 키와 통합 잔액으로 모든 제공업체의 모델</strong>(Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama 등)을 자유롭게 전환하며 사용할 수 있다는 장점이 있습니다.",
                "<strong>수수료 0% 및 독점 'AI 크레딧' 강매 없음:</strong> 단일 모델만 강제하고 자체 'AI 크레딧 패키지'에 높은 마진을 붙여 재판매하는 상용 클라우드 플랫폼과 달리, Gradaly는 AI 사용량에 대해 <strong>어떠한 중개 수수료(0%)도 부과하지 않습니다</strong>. 사용한 토큰만큼 제공업체 원가 그대로 지불하며, <strong>소속 대학에서 무료 기관용 LLM 서버를 제공하거나 Ollama로 로컬 모델을 구동하는 경우 비용은 0 €입니다</strong>.",
                "<strong>고급 설정 — 네이티브 Python 코드 실행(<code>code_execution</code> / <code>code_interpreter</code>):</strong> <em>설정(⚙️) → 고급 설정</em>에서 선택 사항인 <strong>Python 코드 실행</strong> 도구를 활성화할 수 있습니다(기본값은 비활성). 활성화하면 루브릭 설계 및 답안 평가 과정에서 AI 모델이 보안 서버 샌드박스(Google Gemini의 <code>code_execution</code>, OpenAI <code>/v1/responses</code>의 <code>code_interpreter</code>, Anthropic <code>/v1/messages</code>의 <code>code_execution_20250825</code>) 안에서 직접 Python 코드를 작성·실행하여 수치 계산, 지수·삼각함수, 알고리즘 추적을 정밀 검증합니다. 내장된 <strong>모델의 코드 실행 지원 여부 테스트</strong> 버튼으로 선택한 모델이 실제로 샌드박스를 호출하는지 클릭 한 번으로 확인할 수 있습니다.",
                "<strong>고급 설정 — 향상된 AI 디버그 모드(<code>.debug/grading/inspect.html</code>):</strong> <strong>AI 디버그 모드</strong>를 켜면 모든 AI 평가마다 <code>.debug/grading/</code> 폴더 안에 전체 진단 번들이 저장됩니다. 여기에는 독립 실행형 시각 HTML 보고서(<strong><code>inspect.html</code></strong> 및 <code>latest_inspect.html</code>)가 포함되어 AI에 전송된 정확한 이미지, 지문 출처가 학생 답안지인지 빈 캔버스인지 여부(<code>image_source.json</code>), 시스템·사용자 프롬프트(<code>prompt.txt</code>), 전체 HTTP JSON 요청 구조(<code>request_payload.json</code>), 모델이 실행한 Python 코드와 콘솔 출력, 그리고 원본 API 응답(<code>raw_api_response.json</code>)을 한눈에 볼 수 있습니다."
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "AI 설정 모달 (⚙️): 제공업체(Google Gemini, OpenRouter, OpenAI, Anthropic 또는 로컬/대학 서버)와 모델을 선택하고 연결 및 비전 지원을 테스트합니다"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter (다중 제공업체 통합 게이트웨이)",
                    tag: "키 하나로 모든 모델 사용",
                    icon: "fas fa-network-wired",
                    desc: "<strong>핵심 장점:</strong> 하나의 계정과 단일 API 키만으로 여러 결제 계정을 따로 관리할 필요 없이 <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> 등 수백 종의 모델을 테스트할 수 있습니다(단, OpenRouter에서는 비동기 Batch 모드가 지원되지 않습니다).",
                    steps: [
                        "<strong>openrouter.ai</strong>에 접속하여 로그인(또는 무료 계정 생성)합니다.",
                        "<strong>Credits</strong> 메뉴에서 소액의 선불 잔액(예: $5 또는 $10 — 수천 페이지의 시험지 채점 가능)을 충전합니다.",
                        "<strong>Keys</strong> → <strong>Create Key</strong>를 클릭하고 이름을 <code>Gradaly</code>로 지정한 뒤 <code>sk-or-v1-...</code>로 시작하는 키를 복사합니다.",
                        "Gradaly의 <strong>설정(⚙️)</strong>을 열고 <strong>OpenRouter</strong>를 선택한 후 키를 붙여넣고 원하는 모델을 선택합니다."
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "OpenRouter API 키 콘솔 열기"
                },
                {
                    name: "Google Gemini (Google AI Studio)",
                    tag: "빠른 속도와 뛰어난 경제성",
                    icon: "fas fa-bolt",
                    desc: "Google의 멀티모달 <code>Gemini 3.8 Flash</code> 및 Pro 모델에 직접 연결하며, 50% 할인된 비동기 Batch 모드를 기본 지원합니다.",
                    steps: [
                        "Google 계정으로 <strong>Google AI Studio</strong>(<code>aistudio.google.com</code>)에 로그인합니다.",
                        "왼쪽 메뉴에서 <strong>Get API key</strong>를 클릭한 다음 <strong>Create API key</strong>를 클릭합니다.",
                        "생성된 키(<code>AIzaSy...</code>로 시작)를 복사합니다. 높은 호출 한도가 필요한 경우 종량제(Pay-as-you-go) 결제를 연결하세요.",
                        "Gradaly의 <strong>설정(⚙️)</strong>을 열고 <strong>Google Gemini</strong>를 선택한 뒤 키를 붙여넣습니다."
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Google AI Studio API 키 열기"
                },
                {
                    name: "OpenAI (GPT 모델)",
                    tag: "높은 논리적 정밀도",
                    icon: "fas fa-brain",
                    desc: "단계별 수식 전개 점검에 탁월한 <code>GPT 5-4 mini</code> 등 OpenAI 멀티모달 모델에 직접 연결하며, 50% 할인 Batch 모드를 지원합니다.",
                    steps: [
                        "<strong>platform.openai.com</strong>에 로그인합니다(일반 소비자용 ChatGPT Plus 구독과는 별개의 개발자 플랫폼입니다).",
                        "<strong>Settings → Billing</strong>으로 이동하여 소액의 선불 크레딧(예: $5)을 충전합니다.",
                        "<strong>Dashboard → API keys</strong>에서 <strong>+ Create new secret key</strong>를 클릭하고 생성된 키(<code>sk-proj-...</code>)를 복사합니다.",
                        "Gradaly의 <strong>설정(⚙️)</strong>을 열고 <strong>OpenAI</strong>를 선택한 뒤 키를 붙여넣고 모델을 선택합니다."
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "OpenAI 플랫폼 API 키 열기"
                },
                {
                    name: "Anthropic (Claude 모델)",
                    tag: "수리 증명 및 섬세한 서술형 평가",
                    icon: "fas fa-feather-alt",
                    desc: "손글씨 수학 증명 분석과 깊이 있는 교육적 피드백 작성으로 정평이 난 Anthropic의 <code>Claude-Sonnet-5.5</code> 및 Opus 모델에 직접 연결합니다.",
                    steps: [
                        "<strong>Anthropic Console</strong>(<code>console.anthropic.com</code>)에 로그인합니다.",
                        "<strong>Settings → Billing</strong>에서 선불 크레딧 잔액을 활성화합니다.",
                        "<strong>API Keys</strong> 메뉴에서 <strong>Create Key</strong>를 클릭하고 시크릿 키(<code>sk-ant-...</code>)를 복사합니다.",
                        "Gradaly의 <strong>설정(⚙️)</strong>을 열고 <strong>Anthropic</strong>을 선택한 뒤 키를 붙여넣습니다."
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Anthropic 콘솔 API 키 열기"
                }
            ],
            callouts: [
                {
                    title: "대학 기관 서버 또는 100% 로컬 Ollama",
                    desc: "소속 대학에서 OpenAI 호환 AI 서버를 제공하거나 Ollama(<code>http://localhost:11434/v1</code>)로 로컬 모델을 실행하는 경우 설정에서 '대학 / 로컬 서버'를 선택하여 토큰 비용 0 €로 이용할 수 있습니다."
                },
                {
                    title: "원클릭 연결 상태 진단",
                    desc: "언제든지 상단 바의 AI 상태 배지를 클릭하여 API 키 유효성과 모델 응답 상태를 즉시 점검할 수 있습니다."
                },
                {
                    title: "Python 코드 실행 샌드박스 (선택 사항)",
                    desc: "고급 설정에서 네이티브 Python 코드 실행을 켜면 Gemini, OpenAI, Anthropic에서 고정밀 수치 검증이 가능하며 원클릭 모델 호환성 테스트를 제공합니다."
                },
                {
                    title: "시각적 AI 쿼리 및 디버그 검사기",
                    desc: "채점 탭의 '👁️ AI 쿼리'를 클릭하거나 .debug/grading/inspect.html을 열어 잘라낸 이미지, 캔버스 vs. 답안지 출처, 프롬프트 및 JSON 페이로드를 확인하세요."
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "자주 묻는 질문 (FAQ)",
            badge: "아키텍처, 개인정보 보호 및 활용 가이드",
            shortTitle: "자주 묻는 질문 (FAQ)",
            title: "자주 묻는 질문 (FAQ)",
            subtitle: "AI 채점의 내부 작동 원리, 형성적 모의고사 vs. 정규 시험 활용법, Documents/Gradaly 로컬 파일 구조, API 키 보안, Zero-Knowledge 클라우드 암호화 및 기술 지원에 관한 상세 답변입니다.",
            paragraphs: [
                "아래에서 Gradaly의 시험 및 모의고사 모드와 관련하여 가장 자주 문의하시는 기술적·교육적·개인정보 보호 질문에 대한 상세 답변을 확인하실 수 있습니다."
            ],
            faqs: [
                {
                    q: "Gradaly의 AI 채점은 내부적으로 어떻게 작동하며, 문제 이미지는 학생 답안지에서 가져오나요 아니면 빈 캔버스에서 가져오나요?",
                    a: "<p>학생 답안지의 특정 문항에 대해 AI 채점을 요청하면, Gradaly는 해당 문항에 교수자가 지정한 <strong>직사각형 영역의 잘라낸 이미지</strong>를 추출하여 채점 항목(<code>CRITERIA</code>) 및 공통 채점 지침(<code>PROMPT_TEXT</code>)이 담긴 구조화된 프롬프트와 함께 선택한 비전(Vision) AI 모델로 전송합니다.</p><p><strong>문제 지문은 학생 답안지에서 오나요, 빈 캔버스에서 오나요?</strong><ul><li><strong>단일 통합 영역(기본값):</strong> 문항당 하나의 영역만 지정한 경우, Gradaly는 해당 영역 전체를 <strong>전적으로 학생 본인의 답안지(<code>copies/copie_XXX.pdf</code>)에서 잘라냅니다</strong>. 빈 캔버스(<code>canvas.pdf</code>)는 사용되지 않으므로 학생마다 답안지에 인쇄된 수치가 서로 다르더라도 AI는 해당 학생 고유의 수치와 풀이를 정확히 판독합니다.</li><li><strong>지문·답안 분리 영역(<code>Dissocier énoncé / réponse</code>) 및 <code>AI 지문 출처</code> 옵션:</strong> <em>1. 캔버스 및 문항</em> 탭의 <strong><code>AI 지문 출처: [학생 답안지] / [캔버스]</code></strong> 선택기를 통해 문제 지문 영역을 각 <strong>학생 답안지</strong>에서 가져올지(개별화된 시험지에 필수), 아니면 <strong>빈 캔버스(<code>canvas.pdf</code>)</strong>에서 가져와 학생 답안 위에 이어 붙일지(문제가 인쇄되지 않은 별도 답안지 사용 시 유용) 직접 지정할 수 있습니다.</li></ul></p><p><strong>전송 이미지 및 JSON 쿼리 직접 확인하기:</strong> 언제든지 <em>5. 채점</em> 탭에서 <em>이 문항에 대해 AI 다시 실행</em> 옆의 <strong><code>👁️ AI 쿼리</code>(<code>Requête IA</code>)</strong> 버튼을 클릭하거나(또는 <em>설정 → 고급 설정</em>에서 <em>AI 디버그 모드</em>를 켜고 <code>.debug/grading/inspect.html</code> 열기), AI에 전송되는 실제 JPEG 이미지, 이미지 출처 내역, 시스템·사용자 프롬프트, 전체 HTTP JSON 페이로드 구조 및 모델이 실행한 Python 코드를 투명하게 점검할 수 있습니다.</p>"
                },
                {
                    q: "AI 채점 결과를 신뢰해도 될까요? 아니면 형성적 모의고사에 먼저 활용하는 것이 좋을까요?",
                    a: "<p><strong>신뢰할 수 있지만, 처음부터 무조건 맹신해서는 안 됩니다!</strong> 초기 루브릭이 지나치게 엄격하거나 모호하게 작성되었을 수도 있고, 선택한 AI 모델이 특정 고난도 문제 풀이에서 혼동을 겪거나 생소한 수기 표기법을 잘못 읽을 수도 있기 때문입니다.</p><p><strong>형성적 모의고사 vs. 정규 시험:</strong> 많은 교수님들이 최종 기말고사는 종이 위에서 직접 수기로 채점(또는 Gradaly의 100% 수동 모드 사용)하시는 반면, <strong>학기 중 형성적 모의고사</strong>에는 Gradaly의 AI 사전 채점을 적극 활용하여 실전과 동일한 환경에서 학생들에게 풍부한 개별 피드백을 제공하고 계십니다.</p><p><strong>교수자의 검토 및 수동 확정은 필수입니다:</strong> 성적에 반영되는 <strong>총괄평가나 고부담 정규 시험</strong>에 Gradaly를 사용할 때는 반드시 <strong>AI의 사전 채점 결과를 교수자가 직접 읽고 수동으로 검증·확정</strong>하실 것을 강력히 권장합니다. Gradaly는 모든 학생의 답안과 피드백을 교수자가 빠르고 정밀하게 검토·수정·확정할 수 있도록 설계되어 있습니다.</p><p><strong>투명한 결과 공개 및 이의신청 절차:</strong> 주석 PDF나 학생용 웹 포털을 통해 각 답안지에 적용된 채점 항목이 투명하게 공개되므로, 학생들이 본인의 채점 답안지를 열람하고 필요한 경우 특정 채점 항목 적용에 대해 정식으로 이의신청(성적 정정 요청)할 수 있는 기회를 부여하는 것이 바람직합니다.</p>"
                },
                {
                    q: "AI로 시험 한 번을 채점하는 데 비용이 얼마나 드나요?",
                    a: "<p>고정된 단일 요금은 없으며, 학생 답안지 수, 문항 수, 그리고 선택한 AI 모델의 크기와 가격 등급에 따라 달라집니다(각 API 제공업체는 100만 입력/출력 토큰당 정확한 단가를 공개하고 있습니다).</p><p>실제 대학 시험 기준의 구체적인 예시를 들면, 자체 테스트에서 매우 뛰어난 성능을 보인 <strong><code>Gemini 3.8 Flash</code></strong> 모델을 사용하여 <strong>학생 400명 분량의 6~7페이지 손글씨 대학 통계학 시험지를 Flex/Batch 모드로 전체 채점했을 때 총 API 비용은 약 $5~$7 수준</strong>이었습니다(Gradaly는 제공업체의 토큰 원가에 0%의 수수료도 붙이지 않습니다).</p>"
                },
                {
                    q: "이미 ChatGPT Plus(OpenAI), Claude Pro 또는 Gemini Advanced 유료 구독 중인데, 왜 API 키를 별도로 사용해야 하나요?",
                    a: "<p><strong>1. AI 제공업체의 완전히 분리된 두 가지 상품 체계:</strong> OpenAI, Anthropic, Google에서 일반 소비자용 채팅 구독(월 $20 내외의 ChatGPT Plus, Claude Pro, Gemini Advanced)과 <strong>개발자용 API 접근 권한</strong>은 완전히 별개의 과금 시스템으로 운영됩니다. 소비자용 구독은 웹·모바일 채팅 화면에서의 수동 대화만 허용하며, Gradaly 같은 외부 소프트웨어가 자동화된 요청을 보내는 것을 기술적·약관상 엄격히 제한합니다.</p><p><strong>2. 대규모 병렬 채점 및 한층 강화된 데이터 보호:</strong> 수십~수백 부의 답안지를 병렬로 사전 채점하고 정형화된 채점 데이터(체크된 채점 항목, 교수자용 채점 근거, 학생용 피드백)를 수신하려면 공식 개발자 API를 통해 통신해야 합니다. 또한 <strong>상용 API 트래픽에는 훨씬 엄격한 개인정보 보호 약관이 적용</strong>되어, 기본 소비자용 웹 채팅과 달리 상용 API로 전송된 시험 답안 데이터는 <strong>OpenAI, Google, Anthropic의 AI 모델 학습에 계약상 사용되지 않습니다</strong>.</p><p><strong>3. 매우 저렴한 종량제 비용(추가 월간 구독료 없음):</strong> API 키는 매달 고정 구독료를 낼 필요가 없으며 실제 사용한 토큰만큼만 지불하는 종량제(<em>pay-as-you-go</em>, Gradaly 수수료 0%) 방식입니다. 보통 <strong>수백 명 규모의 수강생 전체를 채점하는 데 단 몇 달러</strong>면 충분하며(Google Gemini API는 테스트용 무료 할당량도 제공), 모든 모델(OpenAI, Claude, Gemini, Mistral)을 하나의 충전 잔액으로 통합 관리하고 싶다면 <strong>OpenRouter</strong>나 소속 대학의 기관용 AI 서버를 이용하실 수 있습니다.</p>"
                },
                {
                    q: "AI로 시험 전체를 채점하는 데 시간이 얼마나 걸리나요?",
                    a: "<p>소요 시간은 문항 영역 개수, 답안지 매수, 그리고 AI 모델의 추론 복잡도에 따라 달라집니다. 실제 운영 기준으로 <strong>학생 답안지 400부, 5개 문항, 약 10페이지 분량의 손글씨 답안</strong>으로 구성된 시험의 경우 유연 병렬 모드에서 보통 <strong>약 10분 내외에 시험 전체의 사전 채점이 완료</strong>됩니다.</p><p><strong>처리 속도 향상 팁:</strong> <strong>설정(⚙️)</strong>에서 <strong>동시 병렬 워커(스레드) 수</strong>를 늘려 보세요. API 제공업체의 분당 호출 한도(rate limit)가 허용하는 범위 내에서 병렬 워커 수를 높이면 전체 채점 시간이 크게 단축됩니다.</p>"
                },
                {
                    q: "학생 답안지를 스캔할 때 권장 해상도(DPI)는 얼마인가요?",
                    a: "<p><strong>글씨를 선명하게 읽을 수 있는 범위 내에서 가능한 한 가벼운 파일</strong>로 스캔하는 것이 핵심입니다: 교수자의 육안 검토와 AI 비전 모델 판독 모두에 가장 이상적인 해상도는 <strong><code>150 DPI</code> ~ <code>200 DPI</code></strong>입니다.</p><p><strong>300 DPI나 600 DPI 고해상도 스캔을 피해야 하는 이유:</strong> 지나치게 높은 해상도로 스캔해도 AI 채점 정확도는 전혀 높아지지 않는 반면(비전 모델은 내부적으로 이미지를 리사이징하여 처리함), PDF 파일 용량만 4배~10배 커져 PDF 분할, 페이지 넘김 및 암호화 클라우드 업로드 속도를 불필요하게 저하시킵니다.</p><p><strong>컬러 스캔 권장:</strong> 거친 흑백(1비트 이진화) 모드 대신 <strong>컬러 모드(150–200 DPI, 표준 JPEG/PDF 압축)</strong>로 스캔하시길 권장합니다. 흐릿한 연필 자국, 도표에 학생이 사용한 색볼펜 표시, 미세한 수학 첨자 등을 훨씬 충실하게 보존할 수 있습니다.</p>"
                },
                {
                    q: "내 컴퓨터에서 Gradaly 파일들은 어디에 저장되나요?",
                    a: "<p>모든 시험 프로젝트는 컴퓨터의 <strong><code>Documents/Gradaly/</code></strong> 폴더(예: macOS/Linux의 <code>~/Documents/Gradaly/</code> 또는 Windows의 <code>C:\\Users\\사용자이름\\Documents\\Gradaly\\</code>) 안에 프로젝트별 하위 폴더로 로컬 저장됩니다.</p><p>각 프로젝트 폴더 내부에는 모든 데이터가 표준화되고 투명한 형식으로 보관됩니다:<ul><li><strong>PDF 파일:</strong> 빈 시험지 원본(<code>canvas.pdf</code>), 선택 사항인 모범 답안(<code>solution.pdf</code>), 그리고 <code>copies/</code> 폴더 안의 개별 학생 답안지(<code>copie_01.pdf</code>, <code>copie_02.pdf</code> 등).</li><li><strong>일반 텍스트 JSON 파일:</strong> 문항 영역 및 채점 기준표(<code>config.json</code>), 성명·학번·이메일이 담긴 수강생 명단(<code>students.json</code>), OCR 기반 학생-답안지 연결 표(<code>matching.json</code>), 그리고 <code>gradings/</code> 폴더 안의 답안지별 평가 결과 및 피드백(<code>copie_01.json</code> 등).</li></ul></p><p><strong>⚠️ 중요 안내:</strong> 이러한 개방형 폴더 구조 덕분에 Time Machine, Nextcloud, OneDrive 등으로 <code>Documents/Gradaly</code> 폴더를 손쉽게 백업할 수 있지만, <strong>프로젝트 폴더 내부의 파일을 탐색기에서 임의로 직접 수정하거나 이름을 바꾸거나 이동하지 마세요</strong>. 수동으로 변경할 경우 내부 참조가 깨져 프로젝트가 손상될 수 있습니다.</p>"
                },
                {
                    q: "내 API 키는 어디에 저장되며 보안상 안전한가요?",
                    a: "<p>등록하신 AI API 키(Gemini, OpenRouter, OpenAI, Anthropic)는 사용자 홈 디렉터리 내의 숨김 설정 파일인 <code>.gradaly_settings.json</code>(macOS/Linux의 <code>~/.gradaly_settings.json</code> 또는 Windows의 <code>C:\\Users\\사용자이름\\.gradaly_settings.json</code>)에 <strong>오직 로컬 컴퓨터 내부에만 저장</strong>됩니다.</p><p><strong>보안 보장 원칙:</strong><ul><li>사용자의 API 키는 <strong>어떠한 Gradaly 서버로도 절대 전송되지 않으며</strong>, 동료와 <strong><code>.gradaly</code> 프로젝트 아카이브를 내보내거나 공유할 때도 절대 포함되지 않습니다</strong>.</li><li>AI 루브릭 설계나 AI 사전 채점을 실행하면 컴퓨터가 선택한 제공업체(Google, OpenRouter, OpenAI, Anthropic 또는 대학 서버)의 공식 API 엔드포인트와 <strong>암호화된 HTTPS(TLS 1.3)로 직접 통신</strong>합니다.</li><li>언제든지 각 제공업체 대시보드에서 API 키를 폐기·재발급하거나 월간 사용 금액 한도를 설정할 수 있습니다.</li></ul></p>"
                },
                {
                    q: "클라우드에 시험 결과를 게시하거나 클라우드 공유 링크를 생성하면 데이터는 어디에 저장되며 누가 접근할 수 있나요?",
                    a: "<p><strong>학생용 웹 포털</strong>에 시험을 게시하거나 <strong>협업용 클라우드 공유 링크</strong>를 생성할 때, <strong>단 1바이트라도 컴퓨터 밖으로 전송되기 전에 로컬 컴퓨터에서 <code>AES-256-GCM</code> 알고리즘으로 모든 파일이 먼저 암호화</strong>됩니다. 유럽(EU) 내에 호스팅되는 클라우드 스토리지에는 내용을 전혀 읽을 수 없는 암호화 바이너리 조각(<code>.enc</code>)만 업로드되며 만료 시 자동 파기됩니다.</p><p>비밀 복호화 키(<code>#k=...</code>)는 URL의 <code>#</code> 기호 뒤 프래그먼트 영역에만 포함됩니다. 웹 표준(RFC 3986)에 따라 브라우저는 <strong><code>#</code> 뒤의 URL 프래그먼트를 서버로 절대 전송하지 않습니다</strong>. 따라서 <strong>Gradaly 개발진을 포함해 그 누구도 클라우드에 저장된 파일을 열람할 수 없으며, 설령 클라우드 서버가 침해되더라도 공격자는 아무런 내용도 볼 수 없습니다</strong>. 오직 교수자 본인과 교수자로부터 웹 링크를 전달받은 수신자만이 복호화 키를 보유하기 때문입니다.</p>"
                },
                {
                    q: "왜 Gradaly는 웹 도구가 아닌 데스크톱 애플리케이션으로 설계되었나요? Gradaly의 장기 비전은 무엇인가요?",
                    a: "<p>네이티브 데스크톱 아키텍처(macOS, Windows, Linux)를 채택한 데에는 두 가지 근본적인 이유가 있습니다:</p><p>1) <strong>즉각적인 데이터 주권 보장:</strong> 시험지를 정리하고 학번을 매칭하기 위해 암호화되지 않은 수강생 명단이나 답안지 스캔본을 제3자 SaaS 데이터베이스에 업로드할 필요가 전혀 없습니다.</p><p>2) <strong>장기 비전(100% 자립형 로컬 AI 채점):</strong> AI 하드웨어 가속기와 오픈 웨이트(open-weights) 멀티모달 모델은 놀라운 속도로 발전하고 있습니다. <strong>Gradaly의 비전은 향후 몇 년 안에 고성능 비전-언어 모델이 교수자의 노트북이나 학과 로컬 서버에서 직접 구동되는 것</strong>입니다. Gradaly는 이미 로컬 엔드포인트(Ollama / vLLM / 기관 서버)를 기본 지원하는 네이티브 앱이므로, 교육자는 클라우드 의존도 제로·토큰 비용 제로의 <strong>100% 완전 자립형 오프라인 채점 환경</strong>으로 자연스럽게 이행할 수 있습니다.</p>"
                },
                {
                    q: "기존 웹 기반 채점 플랫폼이나 최신 클라우드 AI 채점 서비스와는 어떤 차이가 있나요?",
                    a: "<p><strong>기존 웹 기반 채점 플랫폼과의 비교:</strong> 브라우저 기반 채점 플랫폼은 파일 병합 없는 동시 실시간 웹 협업, 객관식 OMR 마킹 시트 처리, 답안 자동 군집화 등 특정 워크플로에서 분명한 강점을 지닙니다. 그러나 서술형·수리형 손글씨 풀이를 위한 멀티모달 AI 사전 채점이나 대화형 AI 루브릭 설계 어시스턴트를 제공하지 않으며, 학생 데이터가 외부 서버에 평문으로 저장되어 데이터 통제권이 제한됩니다. Gradaly는 동일한 핵심 루브릭 채점 워크플로를 <strong>100% 수동 모드</strong>로 지원하면서, 선택형 AI 루브릭 설계·AI 사전 채점 및 100% 로컬 데이터 통제권을 함께 제공합니다.</p><p><strong>최신 클라우드 AI 채점 서비스와의 비교:</strong> 대다수 클라우드 AI 채점 서비스는 단일 블랙박스 AI 모델을 강제하고 독점 'AI 크레딧 패키지'에 높은 마진을 붙여 판매합니다. 반면 Gradaly는 <strong>AI 모델 선택권을 교수자에게 온전히 부여</strong>(Gemini, GPT, Claude, Mistral, OpenRouter 또는 무료 대학·로컬 서버)하며 <strong>AI 사용료에 수수료 0% 원칙</strong>을 지킵니다.</p>"
                },
                {
                    q: "빠른 채점과 화면 이동을 위해 어떤 키보드 단축키를 사용할 수 있나요?",
                    a: "<p>Gradaly는 마우스를 잡지 않고도 수강생 전체의 답안지를 탐색하고 채점할 수 있도록 설계되었습니다. 언제든지 <strong><code>?</code></strong> 키를 누르거나 상단 바의 <strong><code>⌨️</code></strong> 아이콘을 클릭하면 앱 내 단축키 안내 창이 열립니다:</p><ul><li><strong><code>↑</code> / <code>↓</code>(또는 <code>K</code> / <code>J</code>):</strong> 이전 / 다음 학생 답안지 이동(<em>수강생</em>, <em>답안지</em>, <em>매칭</em>, <em>채점</em> 탭 공통 작동).</li><li><strong><code>←</code> / <code>→</code>(또는 <code>H</code> / <code>L</code>):</strong> 이전 / 다음 문항 이동(<em>캔버스 및 문항</em>, <em>채점</em> 탭) 또는 이전 / 다음 PDF 페이지 이동(<em>답안지</em> 탭).</li><li><strong><code>Shift + ←</code> / <code>Shift + →</code>(또는 <code>PageUp</code> / <code>PageDown</code>):</strong> <em>채점</em> 탭에서 현재 문항을 유지한 채 PDF 페이지만 넘기기.</li><li><strong><code>1</code> ~ <code>9</code>(상단 숫자열 또는 숫자패드):</strong> 현재 문항의 1번~9번 채점 항목 체크 / 체크 해제.</li><li><strong><code>V</code>:</strong> 현재 문항에 대한 교수자 수동 검증 확정 / 해제 토글.</li><li><strong><code>Esc</code>:</strong> 텍스트 입력란(피드백, 채점 근거, 검색창)에서 포커스를 빠져나와 방향키·숫자 단축키 즉시 재활성화.</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>:</strong> 인터페이스 글자 크기 확대 / 축소 / 기본값 복원.</li></ul>"
                },
                {
                    q: "성적과 학생별 온라인 답안 열람 링크를 Moodle로 어떻게 가져오나요?",
                    a: "<p>Gradaly에는 <strong>온라인 웹 포털</strong> 창과 메인 <strong>내보내기(Export)</strong> 허브 양쪽에서 접근 가능한 전용 <strong>🎓 Moodle 내보내기(CSV)</strong> 도구가 내장되어 있으며, Moodle의 두 가지 공식 가져오기 방식을 모두 지원합니다:</p><p><strong>1. Moodle 성적부(Gradebook) 직접 CSV 가져오기:</strong><ul><li>Gradaly에서 <strong>1. Moodle 성적부(직접 CSV)</strong>를 선택하고, 점수 척도(시험 원점수 총점, <code>/20</code> 또는 <code>/100</code> 환산)와 피드백 구성 항목(<code>portal.gradaly.io</code>의 암호화 답안지로 연결되는 클릭 가능한 개인 링크 + 문항별 득점 요약)을 지정한 뒤 UTF-8 CSV 파일을 내보냅니다.</li><li>Moodle 강좌에서 <strong>성적(Grades)</strong> 탭을 열고 왼쪽 상단 드롭다운 메뉴(<strong>채점자 보고서 / Grader report</strong>) → <strong>가져오기(Import)</strong> → <strong>CSV 파일</strong>을 선택한 후 CSV를 업로드합니다.</li><li><em>사용자 식별 기준(Identify user by)</em>에서 <code>ID 번호(학번)</code>를 <code>ID 번호</code>에 매핑합니다(또는 <code>이메일 주소</code>를 <code>이메일 주소</code>에 매핑). <em>성적 항목 매핑(Grade item mappings)</em>에서 <code>성적(Grade)</code> 열을 대상 평가 항목(또는 <em>새 성적 항목</em>)에 연결하고, <code>피드백(Feedback)</code> 열을 해당 항목의 <strong>피드백(Feedbacks)</strong> 필드에 연결합니다.</li></ul></p><p><strong>2. Moodle 과제(Assignment) 오프라인 채점 워크시트 자동 완성(열 매핑 불필요):</strong><ul><li>Moodle <em>과제</em> 설정의 <em>피드백 유형</em>에서 <em>오프라인 채점 워크시트</em>와 <em>피드백 코멘트</em>를 활성화한 뒤, <em>모든 제출물 보기 → 채점 작업: 채점 워크시트 다운로드</em>에서 CSV 파일을 내려받습니다.</li><li>Gradaly에서 <strong>2. Moodle 과제 채점 워크시트 완성하기</strong>를 선택하고 해당 CSV 파일을 지정하면, 학번 또는 이메일로 모든 수강생을 자동 매칭하여 원본 파일 구조 그대로 <code>성적</code> 열과 <code>피드백 코멘트</code> 열을 채워 주므로 Moodle에 곧바로 다시 업로드하기만 하면 됩니다!</li></ul></p>"
                },
                {
                    q: "메일 머지(Mail Merge)를 사용해 내 대학 이메일 주소(Outlook Web, Word + Outlook, Thunderbird)로 학생 안내 메일을 직접 발송할 수 있나요?",
                    a: "<p><strong>네, 가능합니다!</strong> 온라인 웹 포털의 <strong>✉️ 이메일 알림 발송</strong> 창에서 두 번째 탭인 <strong>📊 메일 머지(내 이메일 클라이언트)</strong>로 전환하세요. 제목과 본문을 자유롭게 편집(<code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code> 등의 선택형 변수 활용 가능)한 뒤 세 가지 전용 형식으로 내보낼 수 있습니다: <strong>Word 데이터 원본 <code>.docx</code></strong>(Microsoft Word + Outlook 메일 머지용), <strong>Excel <code>.xlsx</code> 통합 문서</strong>(Microsoft 365 / Power Automate용 <code>Publipostage</code> 정식 테이블 포함), 또는 <strong>UTF-8 <code>.csv</code> 파일</strong>(Thunderbird용).</p><p><strong>Gradaly의 메일 머지 내보내기가 특히 편리한 이유:</strong> 개별 데이터 열(<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>)뿐만 아니라, <strong>학생별로 즉시 발송 가능하도록 사전 조립된 완성형 열</strong>인 <code>SUJET_PRET</code>(완성된 제목), <code>MESSAGE_TEXTE_PRET</code>(완성된 일반 텍스트 본문), <code>MESSAGE_HTML_PRET</code>(완성된 HTML 본문)가 함께 포함되기 때문입니다. 메일 머지 도구에 이 필드 하나만 삽입하면 충분합니다:</p><ul><li><strong>💼 Microsoft Word + 클래식 Outlook 데스크톱(Windows 및 Mac):</strong> Gradaly에서 <strong>Word용 내보내기(<code>.docx</code>)</strong>를 클릭합니다. Word에서 <em>편지(Mailings) → 받는 사람 선택 → 기존 목록 사용…</em>을 열고 내보낸 <code>.docx</code> 파일을 선택합니다(macOS에서 <code>.xlsx</code>와 달리 네이티브 Word <code>.docx</code> 표는 구형 Excel 변환기 보안 팝업이나 샌드박스 오류 없이 즉시 열립니다). 병합 필드 <code>«MESSAGE_TEXTE_PRET»</code>를 삽입한 후 <em>완료 및 병합 → 전자 메일 메시지 보내기…</em>(받는 사람: <code>EMAIL</code>)를 클릭하세요.</li><li><strong>🌐 Outlook Web(브라우저용 Microsoft 365) + Power Automate:</strong> <strong>Excel로 내보내기(<code>.xlsx</code>)</strong>를 클릭하고 대학 OneDrive에 업로드합니다. Microsoft Power Automate(<code>make.powerautomate.com</code>)에서 2단계 인스턴트 클라우드 흐름을 생성합니다: <em>Excel Online (Business) → 테이블에 있는 행 나열</em>(해당 파일과 <code>Publipostage</code> 테이블 선택) 후 <em>Office 365 Outlook → 메일 보내기 (V2)</em>에서 <code>받는 사람 = EMAIL</code>, <code>제목 = SUJET_PRET</code>, <code>본문 = MESSAGE_HTML_PRET</code>를 지정합니다. 소규모 분반이나 개별 재발송 시에는 Gradaly 학생 목록에서 <strong>Outlook Web</strong> 버튼을 직접 클릭해 <code>outlook.office.com</code> 작성 창을 바로 열 수도 있습니다!</li><li><strong>🦅 Mozilla Thunderbird(Windows, macOS, Linux):</strong> 무료 <em>Mail Merge</em> 부가기능을 설치한 뒤 새 메일 작성 창에서 받는 사람에 <code>{{EMAIL}}</code>, 제목에 <code>{{SUJET_PRET}}</code>, 본문에 <code>{{MESSAGE_TEXTE_PRET}}</code>를 입력하고 내보낸 <code>.csv</code> 파일로 <em>Mail Merge → CSV</em>를 실행하세요.</li></ul>"
                },
                {
                    q: "기능 제안이나 버그 제보는 어디에 남길 수 있나요?",
                    a: "<p>사용 중 느끼신 모든 의견, 새로운 기능 제안, 버그 제보를 환영합니다! 공식 GitHub 이슈 트래커에서 언제든지 직접 이슈를 등록해 주세요: <a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>.</p>"
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
            partHeader: "매뉴얼 2 — QR 자율 연습 및 자기평가 모드 (학생용)",
            partColor: "teal",
            partBanner: {
                kicker: "매뉴얼 2 • 제품 2: 형성적 QR 연습 모드",
                title: "인쇄형 QR 연습문제지를 활용한 학생 자율 자기평가 완벽 가이드",
                desc: "100% 독립형 가이드: QR 코드가 삽입된 PDF 연습문제지를 제작하여 학생이 종이에 직접 풀고, 스마트폰으로 스캔하여 즉각적인 형성적 AI 피드백을 받도록 구성하세요(portal.gradaly.io에서는 별도 API 키 불필요, 개인 Gemini 키 선택 사용 가능)."
            },
            tag: "QR 연습 모드 • 1단계 — 핵심 개념 및 프로젝트 생성",
            badge: "형성평가 • 학생 자율 학습",
            shortTitle: "개념 이해 및 연습 프로젝트 생성",
            title: "QR 연습 모드의 작동 원리 및 연습 프로젝트 생성하기",
            subtitle: "답안지를 단 한 장도 수거하거나 교수자 API 키를 노출하지 않고, 학생들에게 종이 풀이 기반의 무제한 자율 학습과 즉각적인 스마트폰 AI 피드백을 제공하세요.",
            paragraphs: [
                "<strong>QR 연습 모드(<code>Practice</code> 배지)의 교육적 목표:</strong> 중간·기말고사를 앞두고 학생들은 종이 위에 직접 손으로 수식을 전개하고 글을 써 보며 연습해야 합니다(연습 세션, 문제집, 과제, 기출문제 풀이 등). 그러나 교수자가 매주 수백 장의 연습 답안지를 거두어 일일이 첨삭하기란 현실적으로 어렵습니다. <strong>QR 연습 모드는 어떤 PDF 연습문제지든 대화형 자기평가 AI 튜터로 전환해 줍니다:</strong><br>1. <strong>교수자</strong>는 연습문제 PDF를 불러와 채점 항목(및 선택 사항인 <code>모범 답안</code>)을 설정하고, PDF 위에 QR 코드를 배치한 뒤 암호화된 정적 웹 포털을 게시합니다.<br>2. <strong>학생</strong>은 PDF 연습문제지를 인쇄(또는 태블릿·모니터에 표시)하여 종이 위에 직접 수식 유도나 서술형 답안을 작성한 뒤, <strong>스마트폰으로 해당 문항의 QR 코드를 스캔</strong>하고 손글씨 풀이를 촬영하여 <strong>채점 항목별 즉각적인 형성적 AI 피드백</strong>을 받습니다!",
                "<strong>교수자 API 키 노출 제로 — 내장 Gradaly AI 릴레이 또는 학생 개인 키 선택 사용:</strong> 교수자가 수거된 답안지에 대해 AI 채점을 실행하는 시험 모드와 달리, 연습 모드에서 게시되는 포털에는 <strong>수강생 명단도, 스캔 답안지도, 교수자의 API 키도 전혀 포함되지 않습니다</strong>. <code>portal.gradaly.io</code>에 게시하면 내장된 Gradaly AI 릴레이 덕분에 학생(만 18세 미만 미성년 학생 포함)이 <strong>별도의 API 키 발급이나 설정 없이 즉시</strong> 손글씨 답안을 평가받을 수 있으며, 원할 경우 스마트폰 브라우저에 본인의 Google AI Studio(Gemini) API 키를 선택적으로 입력해 사용할 수도 있습니다.",
                "<strong>간결한 전용 3탭 인터페이스:</strong> 시작 화면에서 <strong>새 프로젝트 → 연습 프로젝트(학생 자기평가용)</strong>를 클릭하거나, <strong>데모 프로젝트 생성 → 연습 프로젝트(QR 자기평가)</strong>를 클릭하여 완성된 삼각함수 연습문제지 데모(영어·프랑스어)를 살펴보세요. 연습 프로젝트는 깔끔한 <strong>3탭 작업 공간</strong>으로 열립니다: <code>1. 캔버스 및 문항</code>, <code>2. QR 코드 배치</code>, <code>3. 웹 게시</code>."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "시작 화면: 연습 프로젝트는 시험 프로젝트 옆에 청록색 'Practice' 배지로 명확히 구분됩니다"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "데모 생성 모달: '연습 프로젝트(QR 자기평가)'를 선택하면 즉시 테스트 가능한 QR 연습문제지가 열립니다"
                }
            ],
            callouts: [
                {
                    title: "종이 풀이 + 스마트폰 결합 워크플로",
                    desc: "학생들은 종이 위에 실제 손글씨로 수식과 증명, 도표를 작성하는 학습 습관을 유지하면서 스마트폰 카메라로 즉각적인 AI 튜터링을 받습니다."
                },
                {
                    title: "답안지 수거 불필요, 수강생 명단 불필요",
                    desc: "연습 프로젝트에는 수강생 명단이나 답안지 탭이 없으며 100% 학생의 자율적인 형성평가 훈련에 집중합니다."
                },
                {
                    title: "portal.gradaly.io에서 키 설정 불필요",
                    desc: "학생들은 portal.gradaly.io에서 별도 설정 없이 즉시 AI 평가를 이용하거나, 선택적으로 개인 Gemini API 키를 입력할 수 있습니다."
                },
                {
                    title: "즉시 실행 가능한 내장 연습 데모",
                    desc: "시작 화면에서 내장 연습 데모를 실행하여 10문항으로 구성된 완성형 QR 연습문제지와 모범 답안을 바로 확인해 보세요."
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "QR 연습 모드 • 2단계 — 연습문제지, 모범 답안 및 루브릭",
            badge: "100% 독립형 가이드",
            shortTitle: "연습지 PDF, 모범 답안 및 채점 항목",
            title: "연습문제 PDF 및 모범 답안 불러오기와 형성적 채점 항목 설계",
            subtitle: "빈 PDF에서 각 연습문제를 구획하고, 모범 답안(Solutionnaire)을 불러온 뒤 수동으로 또는 AI 어시스턴트와 함께 명확한 자기평가 기준을 구축하세요.",
            paragraphs: [
                "연습 프로젝트의 <strong>1. 캔버스 및 문항(Canvas &amp; Questions)</strong> 탭(상단의 간결한 3탭 헤더와 학생 식별 영역이 생략된 구성을 확인하세요)에서는 학생이 스마트폰으로 촬영한 답안을 AI가 평가할 때 기준이 될 연습문제와 채점 항목을 정의합니다:",
                "<strong>1. 빈 연습문제 PDF(<code>캔버스</code>) 불러오기 및 문항별 영역 지정:</strong> 연습문제지 PDF를 불러온 뒤 각 문항(<code>Q1</code>, <code>Q2</code>, ...) 둘레에 직사각형 영역을 그립니다. <strong>중요:</strong> 반드시 인쇄된 문제 지문 전체가 직사각형 안에 포함되도록 지정하세요! 연습 모드에서는 Gradaly가 이 영역을 정확히 잘라내어 <strong>학생의 스마트폰 화면 상단에 문제 지문으로 표시</strong>하고 AI에게 완전한 시각적 문맥을 제공합니다.",
                "<strong>2. 선택 사항인 모범 답안 PDF(<code>모범 답안 / Solutionnaire</code>) 불러오기:</strong> PDF 뷰어 상단의 <strong>문제지(캔버스) / 모범 답안</strong> 전환 토글을 사용하여 상세 풀이가 적힌 모범 답안 PDF를 불러옵니다. 모범 답안 PDF의 페이지 레이아웃이 빈 연습문제지와 동일하면 문항 영역이 자동으로 정렬되며, 레이아웃이 다른 경우 <em>모범 답안</em> 보기에서 문항별로 전용 영역을 직접 그릴 수 있습니다. 연습 모드에서 모범 답안은 세 가지 핵심 역할을 수행합니다:<br>• <strong>AI 루브릭 어시스턴트</strong>가 정확한 채점 항목을 생성하도록 지원.<br>• 학생의 풀이 사진을 평가할 때 <strong>AI에게 수학적·논리적 정답 기준(ground-truth) 제공</strong>.<br>• 학생이 손글씨 풀이를 최소 1회 제출한 이후 <strong>스마트폰 화면에서 시각적 모범 답안 잠금 해제</strong>!",
                "<strong>3. 점수 산출 규칙 및 채점 항목 정의(순수 가산형 또는 순수 감산형):</strong><br>• Gradaly는 <code>점수 = 기본 점수 + Σ (달성된 채점 항목)</code> 공식을 계산하며, 결과를 <code>0</code>점과 <code>배점 한도(Max Score)</code> 사이로 제한합니다.<br>• 올바른 풀이 단계마다 점수를 부여하는 <strong>순수 가산형 루브릭</strong>(<code>기본 점수 = 0</code>, 양수 항목 <code>+1</code>, <code>+2</code> 등) 또는 감점 요인을 차감하는 <strong>순수 감산형 루브릭</strong>(<code>기본 점수 = 배점 한도</code>, 음수 항목 <code>-0.5</code>, <code>-1</code> 등) 중 하나를 선택하세요. 한 문항에 양수와 음수 배점을 혼합하지 않는 것이 좋습니다.<br>• 하단 입력란(<strong>공통 AI 채점 지침 / 프롬프트</strong>)에는 교육적 피드백 지침을 적거나 필요한 경우 문제 텍스트를 붙여넣으세요.",
                "<strong>4. AI 루브릭 어시스턴트 활용(<code>AI로 설계 / 수정</code>):</strong> 채점 항목 목록 위의 <strong>AI로 설계 / 수정</strong>을 클릭하면 문제 지문과 모범 답안을 바탕으로 형성적 루브릭 초안을 자동 작성하고 채팅 모드로 손쉽게 다듬을 수 있습니다."
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "QR 연습 모드 — 1. 캔버스 및 문항 탭: 간결한 3탭 헤더(캔버스 및 문항 | QR 코드 배치 | 웹 게시), 문항 영역, 형성적 채점 항목 및 문제지/모범 답안 전환 토글"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "AI 루브릭 어시스턴트: 연습문제 지문과 모범 답안을 함께 활용하여 형성적 채점 항목과 채점 지침을 공동 설계"
                }
            ],
            callouts: [
                {
                    title: "스마트폰에 문제 지문 자동 표시",
                    desc: "캔버스 PDF에서 지정한 문항 영역은 자동으로 잘려 학생의 스마트폰 화면 상단에 깔끔하게 표시됩니다."
                },
                {
                    title: "모범 답안(Solutionnaire) 연동",
                    desc: "AI 평가 시 정확한 기준점이 되며, 학생이 첫 번째 손글씨 풀이를 제출한 뒤 자동으로 공개되도록 설정할 수 있습니다."
                },
                {
                    title: "순수 가산형 또는 감산형 채점 항목",
                    desc: "명확한 단계별 채점 항목을 통해 학생은 자신의 풀이 과정에서 어느 단계가 올바르고 어디를 보완해야 하는지 정확히 파악합니다."
                },
                {
                    title: "AI 루브릭 어시스턴트 기본 포함",
                    desc: "연습문제 PDF와 모범 답안으로부터 단 몇 초 만에 완성도 높은 형성적 채점 기준표를 생성합니다."
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "QR 연습 모드 • 3단계 — QR 코드 배치 및 인쇄용 PDF",
            badge: "무료 버전 및 Pro 모두 지원",
            shortTitle: "QR 코드 배치 및 인쇄용 PDF",
            title: "PDF 위에 QR 코드 위치 지정 및 인쇄용 연습문제지 다운로드",
            subtitle: "전체 시트용 일반 QR 코드와 각 연습문제 상자 내부의 문항별 QR 코드를 PDF 위에 자유롭게 배치하세요.",
            paragraphs: [
                "<strong>2. QR 코드 배치(QR Code Placement)</strong> 탭을 열어 연습문제지 위 어디에 자기평가용 QR 코드를 인쇄할지 지정합니다:",
                "<strong>1. 전체용 일반 QR 코드 vs. 문항별 QR 코드:</strong><br>• <strong>전체용 일반 QR 코드(전체 연습지):</strong> 기본적으로 1페이지 상단에 배치됩니다. 스캔하면 전체 연습문제 목록이 담긴 모바일 포털 홈이 열립니다.<br>• <strong>문항별 QR 코드(<code>QR Q1</code>, <code>QR Q2</code>, ...):</strong> PDF의 각 문항 영역 내부에 직접 삽입됩니다. 학생이 스마트폰 카메라로 <code>QR Q1</code>을 스캔하면 스마트폰 화면이 <strong>곧바로 1번 문항(<code>?q=Q1</code>)으로 직행</strong>하여 즉시 답안 사진을 촬영할 수 있습니다!",
                "<strong>2. 대화형 드래그 앤 드롭 및 원클릭 모서리 정렬:</strong> 왼쪽 목록에서 문항을 클릭하면 해당 페이지로 이동합니다. 마우스로 PDF 페이지 위의 QR 배지를 직접 드래그하여 수식이나 도표를 가리지 않는 위치로 옮기거나, <code>우측 상단 모서리</code>, <code>좌측 상단 모서리</code>, <code>우측 하단 모서리</code> 버튼을 클릭해 정렬하세요. 눈 모양 아이콘으로 개별 QR 코드 표시 여부를 켜고 끌 수 있습니다.",
                "<strong>3. QR 코드가 삽입된 인쇄용 PDF 다운로드:</strong> <strong>QR 코드 포함 인쇄용 PDF 다운로드</strong>를 클릭하세요. 활성화된 모든 QR 코드가 지정된 정확한 위치에 선명한 벡터 그래픽으로 각인된 PDF가 생성되며, 수업 유인물로 인쇄하거나 Moodle/Canvas에 바로 게시할 수 있습니다."
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "QR 연습 모드 — 2. QR 코드 배치 탭: 왼쪽의 전체용·문항별 QR 목록, 모서리 자동 정렬 버튼, 그리고 2페이지 위에서의 드래그 앤 드롭 배치(QR Q1 및 QR Q2)"
                }
            ],
            callouts: [
                {
                    title: "문항별 다이렉트 딥링크 (?q=Q1)",
                    desc: "문항의 QR 코드를 스캔하면 별도의 메뉴 탐색 없이 학생의 스마트폰에서 해당 연습문제가 즉시 열립니다."
                },
                {
                    title: "루브릭 수정 후에도 영구 유지되는 QR 코드",
                    desc: "인쇄·배포 후 채점 항목을 다듬어 온라인 게시물을 업데이트하더라도 이미 인쇄된 종이 QR 코드는 100% 그대로 유효합니다!"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "QR 연습 모드 • 4단계 — 웹사이트 게시(Gradaly Pro) 및 학생용 앱",
            badge: "웹 게시는 Gradaly Pro 필요",
            shortTitle: "웹사이트 게시(Pro) 및 학생용 앱",
            title: "학생용 자율 연습 웹사이트 게시(Gradaly Pro) 및 학생 학습 경험",
            subtitle: "무료 버전에서는 프로젝트 생성과 QR 코드 PDF 디자인을 지원하며, Gradaly Pro에서는 학생용 연습 웹사이트 게시(온라인 또는 .zip)가 잠금 해제됩니다.",
            paragraphs: [
                "<strong>3. 웹 게시(Web Publication)</strong> 탭에서는 모바일 앱의 교육적 표시 규칙을 설정하고 학생용 자율 연습 웹사이트를 게시합니다:",
                "<strong>1. 교육적 공개 범위 옵션:</strong><br>• <strong>1회차 시도 전에 채점 기준표 항목 미리 표시:</strong> 학생이 처음부터 요구되는 풀이 단계를 보고 풀게 할지, 첫 답안 사진을 제출할 때까지 채점 항목을 숨길지 선택합니다.<br>• <strong>상세 AI 평가 근거 표시:</strong> 형성적 피드백과 함께 각 채점 항목이 왜 인정되었거나 인정되지 않았는지 상세 분석을 함께 보여줍니다.<br>• <strong>최소 1회 시도 후 모범 답안(<code>Solutionnaire</code>) 공개:</strong> 학생이 본인의 손글씨 풀이를 먼저 촬영해 제출하기 전까지는 모범 답안을 잠가 두어 자기주도적 문제 해결을 유도합니다!",
                "<strong>2. 내장 스마트폰 시뮬레이터로 미리보기:</strong> 배너 우측 상단의 <strong>학생용 웹 앱 테스트(시뮬레이터)</strong>를 클릭하면 Gradaly 안에서 모바일 화면과 전체 동작을 미리 체험할 수 있습니다.",
                "<strong>3. 학생용 연습 웹사이트 온라인 게시 또는 정적 <code>.zip</code> 내보내기(Gradaly Pro):</strong> 무료 버전에서도 연습 프로젝트 생성과 QR 코드 PDF 디자인을 자유롭게 수행할 수 있으며, <strong>Gradaly Pro</strong>를 활성화하면 학생용 연습 웹사이트를 실제로 배포할 수 있습니다. <strong>portal.gradaly.io에 원클릭 게시</strong>(클라이언트 측 <strong>AES-256-GCM</strong> 암호화 적용, 보관 기간 <strong>60일</strong>, <strong>180일 / 1학기</strong>, <strong>365일 / 1학년도</strong> 중 선택)를 클릭하거나, <strong>독립 실행형 정적 웹사이트(.zip)로 내보내기</strong>를 클릭하여 대학 자체 웹 서버에 호스팅하세요.",
                "<strong>4. 스마트폰에서의 단계별 학생 학습 경험:</strong><br>• 학생이 종이 연습문제지의 QR 코드를 스마트폰으로 스캔합니다.<br>• <code>portal.gradaly.io</code>에 호스팅된 경우(내장 Gradaly AI 릴레이 사용), <strong>어떠한 API 키도 입력할 필요 없이 즉시</strong> AI 평가가 작동합니다. 선택적으로(또는 대학 자체 서버에 <code>.zip</code>으로 호스팅된 경우) 학생이 <strong>개인 키(Personal Key)</strong> 버튼을 눌러 본인의 <strong>Google AI Studio(Gemini) API 키</strong>를 입력할 수도 있습니다(스마트폰 브라우저 내부에만 로컬 저장).<br>• 학생이 <strong>내 풀이 사진 찍기</strong>를 눌러 종이에 쓴 손글씨 답안을 촬영한 뒤 <strong>AI로 내 답안 평가하기</strong>를 탭하면 점수, 달성된 채점 항목, LaTeX 수식 피드백 및 잠금 해제된 모범 답안을 즉시 확인합니다!",
                "<strong>5. 실시간 대화형 예제(인쇄용 PDF 연습문제지 및 학생 포털):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">QR 코드가 삽입된 인쇄용 PDF 연습문제지 보기 (영어 데모)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">실시간 학생 연습 포털 열기 (영어 데모)</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "QR 연습 모드 — 3. 웹 게시 탭: 교육적 표시 토글, 1회 시도 후 모범 답안 잠금 해제, 게시 유지 기간(60/180/365일) 및 Gradaly Pro 원클릭 클라우드/ZIP 게시"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "내장 학생용 스마트폰 시뮬레이터: 학생이 손글씨 답안을 촬영하고 즉각적인 형성적 AI 피드백을 받는 모바일 웹 앱 미리보기"
                }
            ],
            callouts: [
                {
                    title: "내장 스마트폰 시뮬레이터 (무료)",
                    desc: "실제 게시 전에 Gradaly 내부에서 연습문제지, 채점 항목 및 모바일 학생 화면을 무료로 완벽히 테스트할 수 있습니다."
                },
                {
                    title: "원클릭 클라우드 또는 정적 ZIP (Gradaly Pro)",
                    desc: "클라이언트 측 AES-256-GCM 암호화로 portal.gradaly.io에 게시(60/180/365일)하거나 독립 실행형 .zip으로 내보냅니다."
                },
                {
                    title: "내장 AI 릴레이 또는 개인 API 키",
                    desc: "portal.gradaly.io에서는 별도 API 키 없이 즉시 자기평가가 가능하며, 선택적으로 무료 개인 Gemini 키를 입력할 수도 있습니다."
                },
                {
                    title: "풀이 시도 후 모범 답안 잠금 해제",
                    desc: "학생이 종이에 직접 작성한 첫 풀이를 촬영해 제출해야만 교수자의 모범 답안이 공개됩니다."
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "자주 묻는 질문 (FAQ)",
            badge: "암호화, 접근 권한, AI 릴레이 및 개인정보 보호",
            shortTitle: "자주 묻는 질문 (FAQ)",
            title: "자주 묻는 질문 (FAQ)",
            subtitle: "연습 웹사이트가 암호화되는 이유, 접근 가능 대상, 학생 답안 사진과 API 키의 처리 방식, 그리고 교수자의 학생 이용 추적 여부에 대한 자주 묻는 질문과 답변입니다.",
            paragraphs: [
                "아래에서 Gradaly의 QR 자율 연습 및 자기평가 모드에 관해 가장 자주 묻는 질문과 답변을 확인하세요."
            ],
            faqs: [
                {
                    q: "연습 웹사이트는 왜 암호화되나요?",
                    a: "<p><strong>교수자의 지식재산권을 철저히 보호하기 위해서입니다:</strong> Gradaly를 포함한 외부의 그 누구도 게시된 콘텐츠 — 즉 교수자가 출제한 연습문제지, 직접 작성한 모범 답안(<code>Solutionnaire</code>), 채점 기준표 및 지침 — 를 열람할 수 없습니다. 이 모든 교육 자료는 전적으로 <strong>교수자의 고유한 지식재산</strong>입니다.</p><p><code>portal.gradaly.io</code>에 단 1바이트라도 업로드되기 전에, Gradaly는 교수자의 로컬 컴퓨터에서 전체 연습 패키지를 <strong><code>AES-256-GCM</code></strong>으로 먼저 암호화합니다. 복호화 키(<code>#k=...</code>)는 오직 URL의 <code>#</code> 기호 뒤 프래그먼트(및 QR 코드 내부)에만 담기며 웹 브라우저는 이를 서버로 절대 전송하지 않습니다. 서버는 해독 불가능한 암호화 바이너리 파일만 호스팅합니다.</p>"
                },
                {
                    q: "연습 애플리케이션에는 누가 접근할 수 있나요?",
                    a: "<p><strong>교수자가 링크 또는 QR 코드를 공유하기로 결정한 대상(해당 링크나 QR 코드를 소지한 사람)만</strong> 애플리케이션에 접근하여 자신의 브라우저에서 연습문제를 복호화할 수 있습니다.</p><p>따라서 교수자는 연습문제나 모범 답안이 인터넷 검색에 공개될 걱정 없이 인쇄된 PDF 연습문제지(또는 링크)를 <strong>수강생들에게만 안전하고 비공개적으로 배포</strong>할 수 있습니다(예: Moodle/Canvas 내부 강의실 게시판 업로드 또는 오프라인 수업 중 유인물 배부). 물론 접근 권한이 링크·QR 코드 소지 여부에 기반하므로, 해당 링크나 QR 코드가 외부로 공유되면 전달받은 외부인도 열람할 수 있게 됩니다.</p>"
                },
                {
                    q: "학생에게 API 키가 필요한가요? 그리고 학생이 촬영한 손글씨 답안 사진은 어떻게 처리되나요?",
                    a: "<p>학생이 연습 포털을 이용하는 방식에 따라 두 가지 모드로 작동하며, 두 모드 모두 <strong>100% 익명성과 이미지 미저장 원칙</strong>을 보장합니다:</p><p><strong>1. <code>portal.gradaly.io</code>의 기본 모드(학생 API 키 불필요):</strong><ul><li>연습 프로젝트가 <code>portal.gradaly.io</code>에 게시되어 있고 학생이 별도의 개인 API 키를 입력하지 않은 경우, 평가는 <strong>보안 Gradaly AI 릴레이</strong>를 통해 처리됩니다(따라서 만 18세 미만 미성년자를 포함한 모든 학생이 계정 생성 없이 즉시 이용할 수 있습니다).</li><li>이 모드에서는 학생이 촬영한 손글씨 답안 사진(및 해당 문항의 평가 프롬프트)이 Gemini Flash 평가를 수행하기 위한 목적으로만 <strong>Gradaly 릴레이 서버를 일시 경유</strong>합니다.</li><li><strong>철저한 미저장 보장:</strong> 답안 이미지는 <strong>디스크나 클라우드에 절대 저장되지 않으며</strong>, <strong>100% 익명 상태</strong>를 유지하고, AI 피드백이 학생의 스마트폰으로 반환되는 즉시 <strong>서버 메모리에서 영구 파기</strong>됩니다.</li></ul></p><p><strong>2. 개인 API 키 모드(<code>portal.gradaly.io</code>에서 선택 사용 또는 독립 실행형 <code>.zip</code> 웹사이트):</strong><ul><li>학생이 <em>개인 키(Personal Key)</em> 버튼을 통해 본인의 Google Gemini API 키를 직접 입력하면, 해당 키는 <strong>학생 본인 기기의 브라우저 <code>localStorage</code> 내부에만 로컬로 저장</strong>됩니다(Gradaly 서버로 절대 전송되지 않으며 교수자에게도 보이지 않음).</li><li>개인 API 키를 사용할 때는 학생의 브라우저가 Gradaly 서버를 전혀 거치지 않고 <strong>암호화된 HTTPS를 통해 Google의 공식 Gemini API 엔드포인트와 직접 통신</strong>합니다.</li></ul></p>"
                },
                {
                    q: "학생이 연습 애플리케이션을 사용했는지 교수자가 알 수 있나요?",
                    a: "<p><strong>아니요 — QR 연습 모드는 100% 익명이며 자율적으로 운영됩니다.</strong> 학생 로그인 절차도, 수강생 명단도 없으며, 사용 기록이나 점수가 교수자에게 전송·보고되지 않습니다.</p><p>교수자는 어느 학생이 QR 코드를 스캔했는지, 몇 번을 시도했는지, 몇 점을 받았는지 알 수 없습니다. 이러한 의도적인 설계는 학생들이 평가에 대한 심리적 부담 없이 종이 위에서 마음껏 시도하고 실수하며 시험 전까지 스스로 이해도를 점검할 수 있는 <strong>안전하고 비심판적인 형성평가 학습 환경</strong>을 조성합니다.</p>"
                },
                {
                    q: "QR 연습 모드에서 무료(비-Pro) 버전과 Gradaly Pro 버전의 차이는 무엇인가요?",
                    a: "<p><strong>무료(비-Pro) 버전:</strong> 연습 프로젝트 생성, 연습문제 PDF 및 모범 답안 불러오기, 수동 또는 AI 루브릭 어시스턴트를 통한 형성적 채점 항목 설계·보정, QR 코드 배치, <strong>QR 코드가 삽입된 인쇄용 PDF 다운로드</strong>, 그리고 내장 <strong>스마트폰 시뮬레이터</strong>를 통한 전체 워크플로 테스트까지 모두 무료로 이용할 수 있습니다.</p><p><strong>Gradaly Pro:</strong> 암호화된 <code>portal.gradaly.io</code> 클라우드에 원클릭으로 게시(60일, 180일 또는 365일)하거나 대학 자체 서버 호스팅용 독립 실행형 정적 <code>.zip</code> 웹사이트로 내보내는 <strong>학생용 자율 연습 웹사이트 게시 기능</strong>이 잠금 해제됩니다.</p>"
                },
                {
                    q: "PDF 연습문제지를 이미 인쇄하거나 배포한 뒤에 채점 기준표를 수정하면 어떻게 되나요?",
                    a: "<p><strong>이미 인쇄된 종이 QR 코드는 100% 그대로 유효합니다!</strong> 각 연습 프로젝트는 고유한 영구 게시 식별자와 암호화 키를 유지합니다. 유인물을 배부한 뒤 오탈자를 발견하거나 채점 항목을 더 정교하게 다듬고 싶다면 Gradaly에서 수정한 후 <em>3. 웹 게시</em> 탭에서 <strong>기존 게시물 업데이트</strong> 버튼만 클릭하세요. 학생들은 기존 종이 연습문제지의 동일한 QR 코드를 스캔하여 즉시 업데이트된 최신 루브릭으로 피드백을 받을 수 있습니다.</p>"
                }
            ]
        }
    ]
};
