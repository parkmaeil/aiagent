import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Calendar,
  PlayCircle,
  Users,
  ArrowRight,
  Terminal,
  BookOpen,
  ListChecks,
  MessageCircle,
  Mail,
  GraduationCap,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  Zap,
  Star,
  Award,
  Code2,
  Rocket,
  ChevronDown,
  ChevronRight,
  Video,
  MessageSquare,
  FileText,
  GitBranch,
  Cloud,
  Bot,
  Clock,
  Target,
  TrendingUp,
  Shield,
  Flame,
  Trophy,
  Users2,
  Lightbulb,
  MapPin,
  Phone,
  Timer,
} from "lucide-react";

const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_xccHmG";

// 2. 캐러셀 컴포넌트를 만듭니다.
const HeroBillboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const billboardItems = [
    {
      badge: "국비 6개월 과정을 5주로 압축한 비대면 부트캠프",
      badgeIcon: <Flame className="w-4 h-4 text-rose-400 animate-pulse" />,
      titleLine1: "1️⃣ 5주 만에 완성하는",
      titleLine2: "AI 에이전트 부트캠프",
      titleLine3: "Spring AI와 MCP로 구축하는 현업 수준의 지능형 시스템", // 추가된 세부 설명
      gradient: "from-fuchsia-400 via-violet-400 to-cyan-400"
    },
    {
      badge: "현업 실무형 Multi-Agent 오케스트레이션",
      badgeIcon: <Sparkles className="w-4 h-4 text-amber-400" />,
      titleLine1: "2️⃣ Spring AI로 구축하는",
      titleLine2: "지능형 에이전트 시스템",
      titleLine3: "복잡한 비즈니스 로직을 스스로 해결하는 멀티 에이전트 설계",
      gradient: "from-emerald-400 via-teal-400 to-cyan-400"
    },
    {
      badge: "Anthropic MCP 프로토콜 완벽 가이드",
      badgeIcon: <Rocket className="w-4 h-4 text-blue-400" />,
      titleLine1: "3️⃣ 차세대 AI 표준",
      titleLine2: "MCP 마스터 클래스",
      titleLine3: "모든 AI 도구를 하나로 연결하는 새로운 인터페이스 표준 학습",
      gradient: "from-blue-400 via-indigo-400 to-violet-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % billboardItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [billboardItems.length]);

return (
    // [수정] 세 줄이 되었으므로 높이를 h-[200px] md:h-[280px]로 넉넉하게 늘려줍니다.
    <div className="relative w-full overflow-hidden h-[170px] md:h-[250px] flex flex-col items-center">
      {billboardItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full transition-all duration-1000 ease-in-out flex flex-col items-center
            ${index === currentIndex 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}
          `}
        >
          {/* 1. 상단 배지 */}
          <div className="flex justify-center w-full mb-4 md:mb-6">
            <div className="flex items-center justify-center gap-2 w-full max-w-xl rounded-full bg-white/5 border border-white/10 px-5 py-1.5 shadow-lg backdrop-blur-sm">
              {item.badgeIcon}
              <span className="text-[11px] md:text-xs font-semibold text-slate-200">{item.badge}</span>
            </div>
          </div>

          {/* 2. 메인 제목 */}
          <h1 className="text-[22px] md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-50 leading-tight text-center">
            {item.titleLine1} <br />
            <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent animate-gradient`}>
              {item.titleLine2}
            </span>
          </h1>

          {/* 3. [NEW] 세부 설명 라인 */}
          <p className="mt-3 md:mt-5 text-[13px] md:text-base text-slate-400 font-medium max-w-md md:max-w-xl mx-auto leading-relaxed">
            {item.titleLine3}
          </p>
        </div>
      ))}
      
      {/* 인디케이터 바: 텍스트가 길어진 만큼 아래쪽 여백을 조금 더 줍니다. */}
      <div className="absolute bottom-3 flex gap-1.5">
        {billboardItems.map((_, i) => (
          <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-indigo-500' : 'w-1.5 bg-white/10'}`} />
        ))}
      </div>
    </div>
  );
};

const ItsCodingOfficial = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showCareers, setShowCareers] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [openWeeks, setOpenWeeks] = useState({
    week1: false,
    week2: false,
    week3: false,
    week4: false,
    week5: false,
  });


const instructorReviewImages = [
  { id: 1, src: '/reviews/review1.png', alt: '인프런 1' },
  { id: 2, src: '/reviews/review2.png', alt: '인프런 2' },
  { id: 3, src: '/reviews/review3.png', alt: '패스트캠퍼스 1' },
  { id: 4, src: '/reviews/review4.png', alt: '패스트캠퍼스 2' },
  { id: 5, src: '/reviews/review5.png', alt: 'Spring AI' },
];

  const toggleWeek = (weekKey) => {
    setOpenWeeks((prev) => ({
      ...prev,
      [weekKey]: !prev[weekKey],
    }));
  };

 useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);

  const targetDate = new Date("2026-02-10T23:59:59").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(timer);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }
  }, 1000);

  // === 수강평 캐러셀 자동 슬라이드 추가 ===
  if (instructorReviewImages.length > 0) {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % instructorReviewImages.length);
    }, 5000); // 5초마다 다음 이미지

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
      clearInterval(reviewInterval); // 추가
    };
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearInterval(timer);
  };
}, []);

  const differentiators = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "국비교육 대비 80% 시간단축",
      desc: "5주 집중으로 6개월 커리큘럼 압축",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Spring AI 최신 트렌드 반영",
      desc: "Spring AI 1.1.3, Agentic Patterns, MCP",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "결과물 중심 학습 보장",
      desc: "내 손으로 구동되는 AI 에이전트 완성",
    },
    {
      icon: <Users2 className="w-5 h-5" />,
      title: "지속적인 커뮤니티 지원",
      desc: "강의 종료 후에도 지속되는 네트워킹",
    },
  ];

  const learningSystem = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "주 3회 실시간 Zoom 라이브",
    desc: "개념 설명, 실시간 코딩, 코드 리뷰로 핵심 본질을 다집니다.",
    highlight: "월/화/목 19:00~22:00",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "수요일 LAB: 미션 수행 데이",
    desc: "RAG/MCP/에이전트 구현 과제를 스스로 풀어보며 코딩 근육을 기릅니다.",
    highlight: "수요일 자율 LAB",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "금요일 COACH: 1:1 맞춤 진단",
    desc: "수행한 과제를 바탕으로 개인별 약점을 진단하고, 필요한 경우에만 VOD를 처방합니다.",
    highlight: "금요일 1:1/소그룹 코칭",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "상시 Q&A & 카카오 채널",
    desc: "질문은 언제든지 남기고, 라이브나 코칭 시간에 집중 피드백을 받습니다.",
    highlight: "평균 2시간 내 응답",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Github AI 코드 리뷰",
    desc: "GPT 기반 자동 피드백으로 제출 즉시 코드 품질을 점검합니다.",
    highlight: "제출 즉시 분석",
  },
];

  const curriculum = [
    {
      week: "Week 1",
      theme: "AI 에이전트 기초 & Spring AI 입문",
      icon: <Lightbulb className="w-6 h-6" />,
      lectures: [
        {
          title: "나도! 스프링으로 인공지능을 할 수 있다(인프1탄)",
          duration: "14시간 46분",
        },
        {
          title: "Spring AI 실전: 프리미엄 예약 AI 에이전트 개발",
          duration: "7시간 37분",
        },
      ],
      liveTopics: [
        "LLM & Tool Calling 원리",
        "Spring AI 1.1.3 아키텍처",
        "첫 AI 에이전트 빌드",
      ],
    },
    {
      week: "Week 2",
      theme: "Multi AI 에이전트 & MCP 마스터",
      icon: <Zap className="w-6 h-6" />,
      lectures: [
        {
          title: "Spring AI 실전: Multi AI 에이전트 시스템 개발",
          duration: "7시간 51분",
        },
        {
          title: "카카오 PlayMCP와 Spring AI가 만나는 실전 에이전트",
          duration: "6시간 15분",
        },
      ],
      liveTopics: [
        "MCP Protocol 완벽 이해",
        "다중 에이전트 오케스트레이션",
        "카카오 API 연동",
      ],
    },
    {
      week: "Week 3",
      theme: "RAG 시스템 & 벡터 DB 최적화",
      icon: <Sparkles className="w-6 h-6" />,
      lectures: [
        {
          title: "PZM기반 실무중심 백엔드 부트캠프",
          duration: "59시간 46분 (선별)",
        },
        {
          title: "생각하는 데이터베이스 모델링",
          duration: "17시간 17분",
        },
      ],
      liveTopics: [
        "PGVector 설치 및 설정",
        "임베딩 최적화 전략",
        "고성능 검색 쿼리",
      ],
    },
    {
      week: "Week 4",
      theme: "실전! YouTube 영상 분석 AI 에이전트 구축",
      icon: <Rocket className="w-6 h-6" />,
      lectures: [
        {
          title: "나만의 24시간 코드 리뷰어 & 자동 채점 에이전트",
          duration: "7시간 14분",
        },
        {
          title: "MVC 프레임워크는 내 손에 [나프 시리즈]",
          duration: "54시간 (선별)",
        },
      ],
      liveTopics: [
        "엔드투엔드 프로젝트 설계",
        "배포 및 모니터링",
        "포트폴리오 완성",
      ],
    },
  ];

  const detailedCurriculum = [
  {
    week: "Week 1",
    title: "AI 에이전트 기초 & Spring AI 입문",
    summary:
      "LLM 기본 원리부터 Spring AI 환경 설정, Tool Calling까지 익히고 첫 번째 에이전트를 구현합니다.",
    items: [
      "LLM 기초와 프롬프트 엔지니어링: 토큰, 컨텍스트 윈도우, Zero-shot/Few-shot 및 프롬프트 템플릿.",
      "AI Agent의 이해: 단순 LLM vs 에이전트, 인지 → 계획 → 행동 → 관찰 루프.",
      "Spring AI 1.1.3 아키텍처: ChatModel, EmbeddingModel, VectorStore, PSA 개념 이해.",
      "Spring AI 환경 설정: Spring Boot 프로젝트, OpenAI/Claude API 연동, ChatClient Fluent API.",
      "Tool Calling 원리: Function Calling 메커니즘, JSON 스키마 설계 포인트.",
      "실습: 날씨 API 등 간단한 도구를 호출하는 첫 번째 AI 에이전트 구현."
    ]
  },
  {
    week: "Week 2",
    title: "Multi AI 에이전트 & MCP 마스터",
    summary:
      "멀티 에이전트 협업 패턴과 MCP 프로토콜을 활용해 카카오 API 연동 에이전트를 설계합니다.",
    items: [
      "단일 에이전트의 한계: 복잡한 작업에서의 한계와 멀티 에이전트의 필요성.",
      "멀티 에이전트 오케스트레이션 패턴: Router, Supervisor/Worker, Handoff 패턴.",
      "Spring AI 멀티 에이전트 구현: 상태 공유, 에이전트 간 메시지 라우팅 전략.",
      "MCP 완벽 이해: MCP Client/Server 역할, 통신 구조와 확장성.",
      "Spring AI와 MCP 통합: 로컬 리소스·외부 서비스 표준화 연결.",
      "실습: 카카오 API 연동 전문 에이전트와 슈퍼바이저 에이전트 구조 구현."
    ]
  },
  {
    week: "Week 3",
    title: "RAG 시스템 & 벡터 DB 최적화",
    summary:
      "RAG 파이프라인 전체 흐름을 이해하고, PGVector 기반 고성능 검색 시스템을 구축합니다.",
    items: [
      "RAG 파이프라인 분석: Ingestion → Retrieval → Generation 단계별 고려사항.",
      "데이터 전처리: PDF/Web 로더, 문맥을 살리는 청킹 전략 실습.",
      "Vector DB 구축 (PGVector): Docker 기반 PostgreSQL + PGVector 설치 및 Spring Data 연동.",
      "임베딩 모델 최적화: 텍스트 벡터화 원리와 한글 특화 임베딩 모델 선택.",
      "고급 검색 전략 1: 단순 유사도 검색의 한계와 메타데이터 필터링.",
      "고급 검색 전략 2 & 실습: 키워드+시맨틱 하이브리드 검색 및 RAG Q&A 시스템 완성."
    ]
  },
  {
    week: "Week 4",
    title: "실전! YouTube 영상 분석 AI 에이전트 구축",
    summary:
      "YouTube 자막을 활용한 비정형 데이터 분석 에이전트를 설계·구현하고 배포 기초까지 경험합니다.",
    items: [
      "E2E 프로젝트 설계: YouTube URL → 분석 리포트 워크플로우 정의.",
      "비정형 데이터 처리: 자막(Transcript) 추출 라이브러리와 텍스트 정제 파이프라인.",
      "장문 요약 전략: Map-Reduce, Refine 등 Long Context 처리 기법.",
      "구조화된 출력: JSON 포맷으로 안정적인 Structured Output를 받기 위한 프롬프트·Spring AI 활용.",
      "컨테이너화: Dockerfile 작성 및 Spring Boot 애플리케이션 이미지 빌드.",
      "클라우드 배포 기초: AWS/GCP 컨테이너 배포와 기본 로그 모니터링."
    ]
  },
  {
    week: "Week 5",
    title: "최종 프로젝트 (설계부터 배포까지)",
    summary:
      "나만의 도메인에 특화된 AI 에이전트를 기획·구현·배포하고 포트폴리오까지 완성합니다.",
    items: [
      "프로젝트 기획 및 멘토링: 문제 정의, 도메인 선정, 도구(API)·데이터셋 확정.",
      "시스템 아키텍처 설계: RAG 필요 여부, 멀티 에이전트 패턴 적용 판단 및 문서화.",
      "핵심 기능 개발: 에이전트 로직, 도구 연동, 예외 처리 구현 중심 Sprint.",
      "프로덕션 환경 심화: 클라우드 DB 연결, 환경 변수·보안 설정, CI/CD 기초.",
      "테스트 및 튜닝: 시나리오 기반 테스트, 프롬프트 최적화, 응답 속도 개선.",
      "포트폴리오 완성: GitHub README, 실행 가이드, 데모 영상 및 최종 발표."
    ]
  }
];

  const dailySchedule = [
    {
      period: "1교시",
      time: "19:00 ~ 19:50",
      isBreak: false,
    },
    {
      period: "휴식",
      time: "10분",
      isBreak: true,
    },
    {
      period: "2교시",
      time: "20:00 ~ 20:50",
      isBreak: false,
    },
    {
      period: "휴식",
      time: "10분",
      isBreak: true,
    },
    {
      period: "3교시",
      time: "21:00 ~ 21:50",
      isBreak: false,
    },
  ];

  return (
 <div className="min-h-screen bg-[#050816] text-slate-50 font-sans antialiased selection:bg-fuchsia-500/30 overflow-x-hidden">
  {/* NAV */}
  <nav
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50
        ? "bg-[#050816]/90 backdrop-blur-xl border-b border-slate-800/80"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-transform hover:rotate-12">
          <Code2 className="w-4 h-4 text-[#050816]" />
        </div>
        <div>
          <div className="text-sm font-bold tracking-tight text-emerald-400">
            IT'S CODING
          </div>
          <div className="text-[11px] text-slate-500 font-semibold tracking-[0.2em] uppercase">
            AI Agent Bootcamp
          </div>
        </div>
      </div>

      {/* 👇 중앙 통계: VOD → LAB/COACH로 변경 */}
      <div className="hidden md:flex items-center gap-2 text-[12px] text-slate-400">
        <span>5주 완성</span>
        <span className="h-1 w-1 rounded-full bg-slate-600" />
        <span>주 3회 라이브 · LAB+COACH</span>
        <span className="h-1 w-1 rounded-full bg-slate-600" />
        <span>선착순 20명</span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FEE500] bg-[#FEE500] text-[12px] font-semibold text-black shadow-sm hover:shadow-md hover:translate-y-[-1px] transition"
        >
          <MessageCircle className="w-4 h-4" />
          카카오톡 상담
        </a>
        <a
          href="https://forms.gle/t7bKt7AQXpP9aoSp7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[12px] font-bold hover:shadow-lg hover:shadow-emerald-500/50 hover:translate-y-[-1px] transition"
        >
          신청하기
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  </nav>

<main className="pt-18">
<section className="relative px-6 pt-10 pb-10 overflow-hidden">
  {/* 배경 레이어 (기존 동일) */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
    <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
  </div>
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

  {/* 그리드 설정: lg 미만일 때는 자동으로 1열(세로 쌓임), lg 이상일 때만 2열 배치 */}
  <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
    
    {/* 1. 왼쪽 콘텐츠 영역 */}
    <div className="flex flex-col items-center justify-center w-full animate-fadeIn text-center">
      <div className="w-full mb-6">
        <HeroBillboard />
      </div>

      <div className="mb-6 relative inline-block group mx-auto">
        <div className="relative z-10 bg-slate-950/50 backdrop-blur-md border border-emerald-500/30 text-emerald-100 px-8 py-3.5 rounded-[2rem] font-bold text-base md:text-xl shadow-2xl">
          <span className="text-teal-400">모집중</span> 코칭형 AI 에이전트 부트캠프
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-4 h-4 bg-[#0a0a0f] border-l border-t border-emerald-500/30 rotate-45 z-0" />
      </div>

      <p className="text-[15px] md:text-base text-slate-400 max-w-xl mb-7 leading-relaxed mx-auto">
        Spring AI · RAG · MCP · Multi-Agent 실전 프로젝트를{" "}
        <span className="text-slate-100 font-semibold italic">라이브 + LAB + 1:1 코칭</span>
        으로 배포까지 완성합니다. 기존 VOD 학습자도 환영합니다!
      </p>

      {/* CTA 버튼 그룹 */}
      <div className="flex flex-col sm:flex-row gap-4 mb-5 w-full justify-center items-center">
        <a
          href="https://forms.gle/t7bKt7AQXpP9aoSp7"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-emerald-600 text-white px-10 py-4 text-base font-black shadow-xl shadow-emerald-500/20 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300"
        >
          얼리버드 40% 신청하기
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-white/5 border border-white/10 text-slate-300 px-10 py-4 text-base font-bold hover:bg-white/10 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 text-[#FEE500]" />
          카카오톡 실시간 상담
        </a>
      </div>

      {/* 하단 통계 태그 */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-emerald-400" />
          <span><span className="text-slate-100 font-semibold">5주</span> 코칭 부트캠프</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-3 h-3 text-violet-400" />
          <span>선착순 <span className="text-slate-100 font-semibold">20명</span> 소수정예</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 text-amber-400" />
          <span>수강생 만족도 <span className="text-slate-100 font-semibold">98%</span></span>
        </div>
      </div>
    </div>

    {/* 2. 오른쪽 일정 카드 (수정됨: hidden lg:block 제거) */}
    <div className="relative animate-fadeIn w-full max-w-xl mx-auto" style={{animationDelay: '0.2s'}}>
      <div className="rounded-3xl bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 border border-slate-700/50 p-8 md:p-10 space-y-8 shadow-2xl backdrop-blur-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
        
        {/* 교육 기간 */}
        <div className="space-y-4 pb-6 border-b border-slate-800/50 text-center lg:text-left">
          <div className="space-y-1">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 font-semibold bg-slate-900/50 px-3 py-1 rounded-lg inline-block">
              교육기간
            </div>
            <div className="text-lg md:text-xl font-black text-slate-50 tracking-wide">
              2026.02.23 ~ 2026.03.30
            </div>
          </div>
          
          {/* 스케줄 태그: 모바일 대응을 위해 flex-wrap 추가 */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 text-slate-50 font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer">
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-bold">월/화/목 LIVE</span>
            </div>
            <div className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/50 text-slate-50 font-semibold shadow-lg hover:shadow-xl hover:shadow-violet-500/25 hover:scale-105 transition-all cursor-pointer">
              <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold">수/금 LAB+COACH</span>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent my-2" />

        {/* 카운트다운 영역 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.25em] text-slate-400 font-semibold bg-slate-900/50 px-3 py-1 rounded-lg inline-block">
              Early Bird 마감
            </span>
            <span className="text-sm font-bold text-slate-300">2026.02.10</span>
          </div>
          
          <div className="relative rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-violet-500/15 border-2 border-emerald-500/40 p-6 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-slate-200">얼리버드 남은시간</span>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/40 to-teal-500/40 border border-emerald-500/50 text-sm font-bold text-emerald-200 shadow-lg animate-pulse">
                <Zap className="w-4 h-4" />
                선착순 20명
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <TimeUnit label="DAYS" value={timeLeft.days} />
              <TimeUnit label="HRS" value={timeLeft.hours} />
              <TimeUnit label="MIN" value={timeLeft.minutes} />
              <TimeUnit label="SEC" value={timeLeft.seconds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* WHY SECTION - 코칭형 부트캠프 차별화 */}
<section className="py-16 px-6 relative overflow-hidden">
  {/* 배경: 코칭 전문성 테마로 emerald */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-indigo-500/5" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
  
  <div className="max-w-6xl mx-auto relative">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 px-4 py-1.5 shadow-lg">
        <GraduationCap className="w-4 h-4 text-emerald-400" />
        <span className="text-[12px] font-semibold text-slate-300">
          WHY 코칭형 부트캠프
        </span>
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
        국비교육과 완전히 다른 차별화
      </h2>
      <p className="mt-2 text-base text-slate-400">
        2026년 국비 자부담 10% 시대,{" "}
        <span className="text-slate-100 font-semibold">
          5주 1:1 코칭 부트캠프
        </span>
        로 시간·비용·효과 모두 획득합니다.
      </p>
      {/* 👇 핵심 메시지 추가 */}
      <p className="mt-3 text-lg font-semibold text-slate-200 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl p-4 mx-auto max-w-2xl backdrop-blur-sm border border-emerald-500/30 shadow-lg">
        💡 <span className="text-emerald-300 font-black">지식 전달이 아닌</span>{" "}
        <span className="text-slate-100 font-black">문제 해결 능력과 코딩 근육</span>을 만드는 과정
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {differentiators.map((item, i) => (
        <div
          key={i}
          className="group rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 hover:border-emerald-500/50 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            {item.icon}
          </div>
          <h3 className="text-sm font-bold text-slate-50 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* 가격 비교: 코칭 가치 강조 */}
    <div className="rounded-3xl bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90 border border-slate-800 p-6 md:p-8 shadow-2xl">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-slate-700 transition-all duration-200">
          <div className="text-sm text-slate-400 mb-2">
            국비 교육 (6개월)
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-100 mb-1">
            ₩500,000
          </div>
          <div className="text-xs text-slate-500 mb-3">
            자부담 10% 기준
          </div>
          <div className="text-xs text-slate-400">
            📚 지식 전달 중심 <br />
            긴 기간 · 이론 위주
          </div>
        </div>
        <div className="relative rounded-2xl bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-cyan-900/40 border-2 border-emerald-500/60 p-6 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold text-white shadow-lg animate-pulse">
            코칭 BEST VALUE
          </div>
          <div className="text-sm font-semibold text-emerald-300 mb-2">
            IT'S CODING (5주)
          </div>
          <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent mb-2">
            ₩300,000
          </div>
          <div className="text-sm text-emerald-200 mb-3 font-medium">
            얼리버드 할인가(VAT10%)
          </div>
          <div className="text-sm text-slate-100 font-bold">
            🛠️ 문제 해결 + 코딩 근육 <br />
            1:1 코칭 + 실전 프로젝트
          </div>
        </div>
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-slate-700 transition-all duration-200">
          <div className="text-sm text-slate-400 mb-2">
            타 유료 부트캠프 (3개월)
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-100 mb-1">
            ₩2,000,000
          </div>
          <div className="text-xs text-slate-500 mb-3">
            평균 수강료 기준
          </div>
          <div className="text-xs text-slate-400">
            👥 대규모 강의 <br />
            높은 비용 · 이탈률 높음
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* LEARNING SYSTEM - 사이버펑크 그리드 배경 */}
        <section className="py-16 px-6 relative overflow-hidden">
          {/* Cyber Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
          
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 px-4 py-1.5 shadow-lg">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-[12px] font-semibold text-slate-300">
                  LEARNING SYSTEM
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
                어떻게 학습이 진행되나요?
              </h2>
<p className="mt-2 text-base text-slate-400">
  주 3회 라이브, 수요일 LAB, 금요일 COACH 세션을 결합한{" "}
  <span className="text-slate-100 font-semibold">
    코칭형 부트캠프
   </span>
  로 학습합니다.
</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {learningSystem.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 hover:border-cyan-500/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-300 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-50 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 px-4 py-2 text-sm text-slate-100 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {item.highlight}
                  </div>
                </div>
              ))}
            </div>

            {/* VOD 요약 */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-950/95 via-violet-950/20 to-slate-950/95 border border-violet-500/30 p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 md:items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 border-2 border-violet-500/50 flex items-center justify-center shadow-lg">
                  <PlayCircle className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-50">
                    프리미엄 VOD 콘텐츠
                  </h3>
                  <p className="text-sm text-slate-400">
                    박매일 강사 인프런 베스트셀러 강의를 커리큘럼에 맞게 선별 제공
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <VodItem
                  color="text-violet-300"
                  title="Spring AI 실전 시리즈 (4개 강의)"
                  desc="총 29시간 37분 분량"
                />
                <VodItem
                  color="text-cyan-300"
                  title="PZM 백엔드 부트캠프 (선별)"
                  desc="59시간 46분 중 핵심만"
                />
                <VodItem
                  color="text-pink-300"
                  title="MVC 프레임워크 나프 시리즈"
                  desc="54시간 23분 중 핵심만"
                />
                <VodItem
                  color="text-amber-300"
                  title="DB 모델링 + Java TPC"
                  desc="49시간 41분 중 핵심만"
                />
              </div>
              
              <p className="mt-6 text-sm text-slate-400 text-center">
                총{" "}
                <span className="text-slate-100 font-bold text-lg">190시간 이상</span>
                의 프리미엄 콘텐츠 중,{" "}
                <span className="text-slate-100 font-semibold">코칭 결과에 따라 필요한 파트만</span>
                을 선별적으로 제공해 드립니다.
                <br />
                (과정 수강 중 + 종료 후 3개월까지 학습 가능한 방식으로 안내합니다)
              </p>
            </div>
          </div>
        </section>

 {/* CURRICULUM - 코칭형 부트캠프 커리큘럼 */}
<section className="py-13 px-6 relative overflow-hidden">
  {/* 배경 효과 */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 via-50% to-violet-500/5" />
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />

  <div className="max-w-6xl mx-auto relative">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-violet-500/20 border border-emerald-500/40 px-4 py-1.5 shadow-lg">
        <Code2 className="w-4 h-4 text-emerald-400" />
        <span className="text-[12px] font-semibold text-slate-300">
          5 WEEKS COACHING BOOTCAMP
        </span>
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
        5주간 어떤 여정을 걷나요?
      </h2>
      <p className="mt-2 text-base text-slate-400">
        라이브 + LAB 미션 + 1:1 코칭으로 <span className="text-slate-100 font-semibold">문제 해결 능력</span>을 키우고,{" "}
        <span className="text-slate-100 font-semibold">개인 맞춤 VOD 처방</span>을 받습니다.
      </p>
    </div>

    <div className="space-y-4">
      {curriculum.map((week, idx) => {
        const weekKey = `week${idx + 1}`;
        const isOpen = openWeeks[weekKey];

        const detail = detailedCurriculum.find(
          (d) => d.week === week.week
        );

        return (
          <div
            key={idx}
            className="group rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <button
              onClick={() => toggleWeek(weekKey)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-violet-500/20 border border-emerald-500/30 flex items-center justify-center text-slate-100 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {week.icon}
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">
                    {week.week}
                  </div>
                  <div className="text-base font-bold text-slate-50">
                    {week.theme}
                  </div>
                </div>
              </div>
              <div
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </div>
            </button>

            <div
              className={`space-y-6 px-6 pb-8 transition-all duration-500 ${
                isOpen
                  ? "max-h-[1600px] md:max-h-[1200px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {/* 1️⃣ 라이브 세션 */}
              <div className="border-t border-slate-800 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Video className="w-4 h-4 text-emerald-300" />
                  <span>라이브 세션 (월/화/목)</span>
                </div>
                {week.liveTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-gradient-to-br from-slate-950/90 to-emerald-950/20 border border-slate-800 hover:border-emerald-500/30 p-4 text-sm text-slate-200 flex gap-2 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
                  >
                    <Zap className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                    <span className="flex-1">{topic}</span>
                  </div>
                ))}
              </div>

              {/* 2️⃣ LAB & COACH 세션 */}
              <div className="border-t border-slate-800 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>LAB + COACH (수/금)</span>
                </div>
                {week.lectures.map((lecture, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-gradient-to-br from-slate-950/90 to-violet-950/20 border border-slate-800 hover:border-emerald-500/30 p-4 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
                  >
                    <p className="text-sm font-semibold text-slate-200 mb-1">{lecture.title}</p>
                    <p className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {lecture.duration}
                    </p>
                  </div>
                ))}
              </div>

              {/* 3️⃣ 상세 커리큘럼 */}
              {detail && (
                <div className="border-t border-slate-800 pt-5 space-y-4">
                  {/* 데스크톱: 좌우 2열 */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="rounded-xl bg-gradient-to-br from-emerald-950/90 to-slate-900/80 border border-emerald-500/40 ring-1 ring-emerald-500/20 p-4 space-y-2 shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                          <BookOpen className="w-4 h-4" />
                          <span>학습 목표</span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">{detail.summary}</p>
                      </div>
                    </div>
                    <div>
                      <div className="rounded-xl bg-gradient-to-br from-emerald-950/90 to-slate-900/80 border border-emerald-500/40 ring-1 ring-emerald-500/20 p-4 shadow-sm hover:shadow-md hover:shadow-emerald-500/15 transition-all">
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-2">
                          <ListChecks className="w-4 h-4" />
                          <span>{detail.title} 상세 내용</span>
                        </div>
                        <ul className="mt-1 space-y-1.5 text-[12px] text-slate-200 leading-relaxed">
                          {detail.items.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex-shrink-0 shadow-sm" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 모바일: 통합 1열 */}
                  <div className="md:hidden space-y-4">
                    <div className="rounded-xl bg-gradient-to-br from-emerald-950/90 to-slate-900/80 border border-emerald-500/40 ring-1 ring-emerald-500/20 p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300 mb-3">
                        <BookOpen className="w-4 h-4" />
                        <span>{detail.title}</span>
                      </div>
                      <p className="text-sm text-slate-200 mb-4 leading-relaxed">{detail.summary}</p>
                      <div className="space-y-2">
                        {detail.items.map((item, i) => (
                          <div key={i} className="flex gap-3 pl-1">
                            <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex-shrink-0 shadow-sm" />
                            <span className="text-sm text-slate-200">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Week 5 최종 프로젝트 - 코칭 강조 */}
      <div className="group relative rounded-2xl bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-cyan-900/40 border-2 border-emerald-500/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20">
        <button onClick={() => toggleWeek("week5")} className="w-full p-7 text-left">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-emerald-300 mb-1">Week 5</div>
                <h3 className="text-xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  최종 프로젝트
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  1:1 코칭으로 완성하는 나만의 AI 에이전트 시스템
                </p>
              </div>
            </div>
            <div
              className={`transition-transform duration-200 ${
                openWeeks.week5 ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="w-6 h-6 text-emerald-300 group-hover:text-emerald-200" />
            </div>
          </div>
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            openWeeks.week5 
              ? "max-h-[1600px] md:max-h-[1200px] opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-7 pb-7">
            <div className="pt-5 border-t border-emerald-500/30">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-emerald-300 mb-3">
                    <Target className="w-4 h-4" />
                    <span>프로젝트 목표</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border border-emerald-500/30 flex items-start gap-3 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-50 mb-1">
                        실전 AI 에이전트 완성
                      </p>
                      <p className="text-sm text-slate-300">
                        1:1 코칭으로 나만의 도메인 특화 시스템 구축
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/30 flex items-start gap-3 hover:bg-teal-500/20 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-50 mb-1">
                        클라우드 배포
                      </p>
                      <p className="text-sm text-slate-300">
                        AWS/GCP 프로덕션 환경 실습
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-emerald-300 mb-3">
                    <Rocket className="w-4 h-4" />
                    <span>최종 결과물</span>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/30 flex items-start gap-3 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-50 mb-1">
                        포트폴리오 완성
                      </p>
                      <p className="text-sm text-slate-300">
                        GitHub + 데모 URL + 기술 문서
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border border-emerald-500/30 flex items-start gap-3 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-50 mb-1">
                        실무 즉시 적용 가능
                      </p>
                      <p className="text-sm text-slate-300">
                        현업에서 바로 쓸 수 있는 기술 스택
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 5 상세 커리큘럼 */}
              <div className="mt-6 rounded-xl bg-gradient-to-br from-emerald-950/60 to-violet-950/50 border border-emerald-500/50 ring-1 ring-emerald-500/30 p-4 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200 mb-2">
                  <ListChecks className="w-4 h-4" />
                  <span>Week 5 1:1 코칭 프로젝트</span>
                </div>
                <ul className="space-y-1.5 text-[12px] text-emerald-50/95 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>프로젝트 기획 멘토링: 도메인 선정, 문제 정의, 기술 스택 확정</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>시스템 설계: RAG/멀티 에이전트 아키텍처 문서화 + 코드 리뷰</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>핵심 기능 개발 Sprint: 에이전트 로직 + 도구 연동 완성</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>프로덕션 환경: 클라우드 DB, 보안, CI/CD 실습</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>테스트 & 튜닝: 성능 최적화 + 1:1 디버깅 코칭</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>포트폴리오 완성: GitHub README + 데모 영상 + 취업용 문서화</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 커리큘럼 맞춤 상담 CTA */}
    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 border border-emerald-500/40 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-5">
          <Rocket className="w-6 h-6 text-emerald-400" />
          <span className="text-base font-bold text-emerald-300">
            커리큘럼 맞춤 상담
          </span>
        </div>
        <p className="text-base text-slate-200 mb-6 leading-relaxed">
          기존 VOD 학습 경험에 따른 맞춤 커리큘럼 상담을 원하시면 언제든 문의해 주세요.
        </p>
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-10 py-4 font-bold text-base hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transform"
        >
          <MessageCircle className="w-5 h-5" />
          지금 상담하기
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
</section>

{/* INSTRUCTOR - 모든 내용 복구 및 IT'S CODING 브랜딩 버전 */}
<section className="py-16 px-6 relative overflow-hidden">
  {/* 배경 효과: 브랜드 컬러인 에메랄드로 변경 */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
  
  <div className="max-w-5xl mx-auto relative">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 px-4 py-1.5 shadow-lg">
        <Award className="w-4 h-4 text-emerald-400" />
        <span className="text-[12px] font-semibold text-slate-300">
          INSTRUCTOR
        </span>
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
        누가 함께하나요?
      </h2>
      <p className="mt-2 text-base text-slate-400">
        20년 이상의 교육 경험을 가진 Spring 기반 백엔드 & AI 에이전트 전문가입니다.
      </p>
    </div>

    {/* 메인 프로필 카드 */}
    <div className="rounded-3xl bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 border border-slate-800 p-8 md:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-5">
        <div className="relative shrink-0 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00c897] via-emerald-300 to-teal-300 rounded-3xl blur opacity-25 group-hover:opacity-5 transition duration-300"></div>
                   <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-slate-900 overflow-hidden border border-slate-700">
                   <img src="/park.jpg" alt="박매일 강사" />
                  </div>
          <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-slate-950 flex items-center justify-center shadow-lg">
            <Star className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-slate-50 mb-1">박매일(이츠코딩 대표)</h4>
          <p className="text-sm md:text-base text-slate-400 font-semibold mb-4">
            Backend · Spring AI Specialist
          </p>
          <div className="flex flex-wrap gap-2 mb-5 text-sm">
            <Badge color="from-emerald-500 to-teal-500" icon={<Zap className="w-3 h-3" />}>
              패스트캠퍼스 강사
            </Badge>
            <Badge color="from-violet-500 to-purple-500" icon={<GraduationCap className="w-3 h-3" />}>
              인프런 베스트셀러
            </Badge>
            <BadgeOutline icon={<Trophy className="w-3 h-3" />}>
              수강생 만족도 98%
            </BadgeOutline>
          </div>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
            실무와 교육 현장을 20년 이상 오가며{" "}
            <span className="text-slate-50 font-semibold">
              Java·Spring 기반 백엔드 및 풀스택 교육
            </span>
            을 진행해 왔습니다. 최신{" "}
            <span className="text-emerald-400 font-semibold">
              Spring AI & Agent
            </span>{" "}
            분야를 반영한 커리큘럼을 설계하고 있습니다.
          </p>
        </div>
      </div>

      {/* 이츠코딩 소개 섹션 */}
      <div className="mt-2 mb-2 py-5 border-t border-slate-800/50 text-center">
        <div className="space-y-5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00c897] to-[#009e77] flex items-center justify-center shadow-lg shadow-[#00c897]/20 transition-transform hover:rotate-12 duration-500">
              <Code2 className="w-6 h-6 text-[#050816]" />
            </div>
            <div className="text-[10px] text-[#00c897] font-black tracking-[0.4em] uppercase">IT'S CODING</div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-black text-slate-50 tracking-tight leading-tight">
              영향력 있는 개발자가 <br className="md:hidden" />
              <span className="bg-gradient-to-r from-[#00c897] to-emerald-400 bg-clip-text text-transparent">
                세상을 바꾼다
              </span>
            </h3>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
              코딩은 단순한 기술이 아니라 세상을 바꾸는 가장 강력한 언어입니다. <br className="hidden md:block" />
              IT'S CODING은 그 언어에 AI라는 지능을 더해 당신의 영향력을 완성합니다.
            </p>
          </div>

          <div className="inline-flex items-center justify-center gap-3 md:gap-8 px-8 py-4 rounded-[2rem] bg-white/[0.03] border border-white/5 shadow-inner">
            <div className="flex items-center gap-2 group/val">
              <span className="text-[#00c897] font-black text-lg md:text-xl">&lt;</span>
              <span className="text-slate-200 font-bold text-sm md:text-base group-hover/val:text-[#00c897] transition-colors">본질</span>
              <span className="hidden sm:inline text-slate-500 text-[10px] uppercase tracking-widest font-medium">Opening</span>
            </div>
            <div className="text-slate-800 font-thin text-xl">|</div>
            <div className="flex items-center gap-2 group/val">
              <span className="text-[#00c897] font-black text-lg md:text-xl">/</span>
              <span className="text-slate-200 font-bold text-sm md:text-base group-hover/val:text-[#00c897] transition-colors">지능</span>
              <span className="hidden sm:inline text-slate-500 text-[10px] uppercase tracking-widest font-medium">Intelligence</span>
            </div>
            <div className="text-slate-800 font-thin text-xl">|</div>
            <div className="flex items-center gap-2 group/val">
              <span className="text-[#00c897] font-black text-lg md:text-xl">&gt;</span>
              <span className="text-slate-200 font-bold text-sm md:text-base group-hover/val:text-[#00c897] transition-colors">성장</span>
              <span className="hidden sm:inline text-slate-500 text-[10px] uppercase tracking-widest font-medium">Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* 경력 아코디언 */}
      <div className="mb-6">
        <div 
          className="group rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 p-5 cursor-pointer hover:shadow-xl hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-200 hover:-translate-y-1"
          onClick={() => setShowCareers(!showCareers)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-50 mb-1">강사 경력(20년)</h4>
                <p className="text-sm text-slate-400">주요 강의 이력</p>
              </div>
            </div>
            <ChevronDown className={`w-6 h-6 text-emerald-400 transition-transform duration-200 group-hover:text-emerald-300 ${showCareers ? 'rotate-180' : ''}`} />
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showCareers ? 'max-h-[700px] md:max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-3 p-2">
            {[
              "패스트캠퍼스 백엔드 부트캠프 강의",
              "광주인공지능사관학교 강의",
              "한국전력공사 In-House 코딩교육",
              "소프트웨어마이스터고 산학협력교사",
              "스마트인재개발원 교육부장",
              "한양대학교 ERICA 온라인 강의",
              "한국전력공사 외 기업체 다수 강의",
              "인공지능·정보기술개발 직업능력개발훈련교사",
            ].map((career, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl bg-gradient-to-br from-slate-900/80 to-emerald-900/20 border border-slate-800/50 p-4 hover:bg-slate-900/90 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 group-hover:text-emerald-300 transition-colors" />
                <p className="text-sm text-slate-200 leading-relaxed">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 온라인 콘텐츠 - 누락되었던 부분 복구 */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 mb-6 hover:shadow-xl hover:shadow-violet-500/20 transition-all">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center shadow-lg">
            <PlayCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-black text-slate-50">온라인 교육 콘텐츠</h4>
            <p className="text-sm text-slate-400">베스트셀러 강의 총정리</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.inflearn.com/search?s=%EB%B0%95%EB%A7%A4%EC%9D%BC"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-xl bg-gradient-to-br from-slate-900/90 to-violet-900/20 border border-slate-800/50 hover:bg-white/5 hover:border-violet-500/40 transition-all cursor-pointer shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
          >
            <p className="text-base font-bold text-slate-200 mb-2 group-hover:text-violet-400 transition-colors">
              인프런
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Java, DB, MVC, Spring, Spring AI & Agent, IoT
            </p>
          </a>
          <a
            href="https://fastcampus.co.kr/search?keyword=%EB%B0%95%EB%A7%A4%EC%9D%BC"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-xl bg-gradient-to-br from-slate-900/90 to-violet-900/20 border border-slate-800/50 hover:bg-white/5 hover:border-violet-500/40 transition-all cursor-pointer shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
          >
            <p className="text-base font-bold text-slate-200 mb-2 group-hover:text-violet-400 transition-colors">
              패스트캠퍼스
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Java, Spring Boot
            </p>
          </a>
        </div>
      </div>

      {/* 연락처 및 제휴 문의 - 누락되었던 부분 복구 */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-900/20 border border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-sm text-slate-400 mb-1">Email</p>
            <p className="text-base font-semibold text-slate-200">
              <a href="mailto:bitcocom@empas.com" className="hover:text-emerald-400 transition-all duration-200">
                bitcocom@empas.com
              </a>
            </p>
          </div>
        </div>
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 px-6 py-3 text-sm font-bold text-emerald-200 hover:bg-emerald-500/30 hover:text-emerald-50 hover:border-emerald-500/60 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          문의 및 제휴
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>

    {/* === 수강평 이미지 캐러셀 영역 === */}
    <div className="mt-14 pt-12 border-t border-emerald-500/20">
      <div className="flex flex-col items-center mb-3">
        <div className="inline-flex items-center gap-2 mb-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 px-4 py-1.5 shadow-md">
          <Star className="w-4 h-4 text-emerald-300" />
          <span className="text-xs font-semibold text-slate-200">실제 수강평</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-1 rounded-full border border-white/5">
          <span className="text-[10px] font-black text-emerald-500 tracking-widest uppercase">Page</span>
          <span className="text-xs font-mono font-bold text-slate-400">
            {currentReviewIndex + 1} <span className="opacity-30">/</span> {instructorReviewImages.length}
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-5xl h-[220px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] 
                      bg-[#0d0d15] border-2 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
        {instructorReviewImages.map((review, index) => (
          <img
            key={review.id}
            src={review.src}
            alt={review.alt}
            className={`absolute inset-0 w-full h-full object-contain p-4 md:p-12 transition-all duration-[1200ms] ${index === currentReviewIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 blur-sm z-0'}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-20" />
        <button onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + instructorReviewImages.length) % instructorReviewImages.length)} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black/50 hover:bg-emerald-500 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl text-white hover:scale-110 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100">
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>
        <button onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % instructorReviewImages.length)} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black/50 hover:bg-emerald-500 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl text-white hover:scale-110 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100">
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 z-30">
          {instructorReviewImages.map((_, index) => (
            <button key={index} onClick={() => setCurrentReviewIndex(index)} className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${index === currentReviewIndex ? 'w-6 md:w-10 bg-emerald-400' : 'w-1.5 md:w-2.5 bg-white/20'}`} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-[10px] md:text-sm text-slate-400 leading-relaxed uppercase tracking-tighter font-medium">
        실제 진행 강의들의 찐 수강생 후기입니다. <span className="text-emerald-300 font-bold ml-1">98% 만족도 기록 중</span>
      </p>
    </div>
  </div>
</section>


{/* SCHEDULE - 코칭형 부트캠프 시간표 */}
<section className="py-10 px-6 relative overflow-hidden">
  {/* 배경 */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-indigo-500/5" />
  
  <div className="max-w-6xl mx-auto relative">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 border border-emerald-500/40 px-4 py-1.5 shadow-lg">
        <Timer className="w-4 h-4 text-emerald-300" />
        <span className="text-[12px] font-semibold text-slate-300">
          SCHEDULE
        </span>
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
        부트캠프는 이렇게 진행됩니다
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        주 3회 라이브 + 수요일 LAB + 금요일 1:1 COACH로{" "}
        <span className="text-slate-100 font-semibold">
          문제 해결 능력과 코딩 근육
        </span>
        을 만듭니다.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <ScheduleCard
        badge="LIVE"
        title="실시간 Zoom 라이브"
        titleColor="text-rose-300"
        badgeColor="bg-gradient-to-r from-rose-500 to-pink-500"
        borderColor="border-rose-500/40"
        iconColor="text-rose-300"
        day="매주 월 / 화 / 목"
        time="19:00 ~ 22:00 (3시간)"
        detailTitle="진행 내용"
        detailItems={[
          "1교시: 핵심 개념 & 실습 코딩",
          "2교시: 코드 리뷰 & Q&A", 
          "3교시: 다음 미션 안내",
        ]}
      />
      <ScheduleCard
        badge="LAB+COACH"
        title="미션 & 1:1 코칭"
        titleColor="text-emerald-300"
        badgeColor="bg-gradient-to-r from-emerald-500 to-teal-500"
        borderColor="border-emerald-500/40"
        iconColor="text-emerald-300"
        day="매주 수(오후) / 금(오후)"
        time="자율 LAB + 1:1 코칭(자율)"
        detailTitle="구체 일정"
        detailItems={[
          "수요일: LAB 미션 수행 (RAG/MCP 구현)",
          "금요일: 1:1 진단 코칭 + VOD 처방",
          "과제 제출: 매주 토요일까지",
        ]}
      />
    </div>

    {/* 일일 시간표 */}
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-50">
          라이브 수업: 하루 3시간 집중 설계
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          50분 수업 + 10분 휴식 리듬으로 끝까지 몰입할 수 있도록 구성했습니다.
        </p>
      </div>
      <div className="space-y-4">
        {dailySchedule.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-900/20 border border-slate-800 hover:border-emerald-500/30 p-5 flex items-center justify-between text-sm transition-all hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
                {item.isBreak ? (
                  <span className="text-lg">☕</span>
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                )}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-50">
                  {item.period}
                </h4>
                <p className="text-slate-300">{item.time}</p>
              </div>
            </div>
            {!item.isBreak && (
              <div className="hidden md:block rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 px-3 py-1 text-[12px] text-slate-200">
                실습 중심
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-indigo-900/30 border border-emerald-500/30 p-5 text-sm flex gap-3 shadow-lg">
        <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 border border-emerald-500/40">
          <Zap className="w-5 h-5 text-emerald-300" />
        </div>
        <div>
          <h4 className="text-base font-bold text-emerald-200 mb-1.5">
            주간 학습 사이클
          </h4>
          <ul className="space-y-1 text-slate-300 list-disc list-inside text-sm">
            <li><span className="font-semibold text-emerald-200">월~목</span>: 라이브 + LAB 준비</li>
            <li><span className="font-semibold text-emerald-200">수요일</span>: 핵심 미션 실습 (코딩 근육)</li>
            <li><span className="font-semibold text-emerald-200">금요일</span>: 1:1 코칭 + 개인별 VOD 처방</li>
            <li><span className="font-semibold text-emerald-200">토요일</span>: 과제 제출 → AI 자동 리뷰</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TARGET AUDIENCE - IT'S CODING 브랜드 최적화 버전 */}
<section className="py-15 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950/60 via-emerald-950/10 to-slate-950/60 border-y border-slate-900">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
  
  <div className="max-w-5xl mx-auto relative">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-[#00c897]/40 px-6 py-2 mb-6 shadow-lg">
        <HelpCircle className="w-5 h-5 text-[#00c897]" />
        <span className="text-sm font-bold text-slate-200 tracking-wider">
          TARGET AUDIENCE
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-slate-50 tracking-tight mb-6">
        이런 분들께<br className="md:hidden"/> <span className="bg-gradient-to-r from-[#00c897] to-emerald-400 bg-clip-text text-transparent">특히 추천</span>
      </h2>
      <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        수강생들의 고민을,<span className="text-slate-100 font-bold bg-[#00c897]/20 px-3 py-1 rounded-full border border-[#00c897]/30">이츠코딩</span>과 함께 해결합니다.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          icon: "⏰",
          title: "효율을 찾는 바쁜 직장인",
          desc: [
            "6개월 이상의 국비 과정이 부담스러운 분",
            "현업과 학습을 병행할 '압축 로드맵'이 필요한 분"
          ],
          label: "< 본질 Opening"
        },
        {
          icon: "💡", 
          title: "VOD 학습의 한계를 느끼는 분", 
          desc: [
            "강의는 들었지만 내 프로젝트 적용은 막막한 분", 
            "전문가의 1:1 코드 리뷰와 피드백이 절실한 분"
          ],
          label: "/ 지능 Intelligence"
        },
        {
          icon: "🚀",
          title: "실전 AI 역량을 원하는 개발자",
          desc: [
            "단순 코딩을 넘어 AI 에이전트 설계를 원하는 분",
            "MCP와 Spring AI를 실무 수준으로 구현하고 싶은 분"
          ],
          label: "> 성장 Growth"
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="group relative rounded-[2rem] bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-slate-950/95 border border-slate-800/50 hover:border-[#00c897]/50 p-8 hover:shadow-2xl hover:shadow-[#00c897]/10 transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm"
        >
          {/* 상단 기호 라벨 */}
          <div className="text-[10px] font-black text-[#00c897]/50 uppercase tracking-[0.2em] mb-4 group-hover:text-[#00c897] transition-colors">
            {item.label}
          </div>
          
          {/* 아이콘 영역 */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-emerald-500/10 border border-[#00c897]/30 flex items-center justify-center mb-6 shadow-xl group-hover:bg-[#00c897] group-hover:scale-110 transition-all duration-500">
            <span className="text-3xl group-hover:brightness-125">{item.icon}</span>
          </div>
          
          {/* 내용 영역 */}
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-black text-slate-50 tracking-tight">
              {item.title}
            </h3>
            <div className="space-y-3">
              {item.desc.map((line, lineIdx) => (
                <div key={lineIdx} className="flex gap-2">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00c897]/40 shrink-0" />
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* CTA - IT'S CODING 브랜드 동기화 버전 */}
<section id="register" className="py-15 px-6 relative overflow-hidden">
  {/* 배경 그라데이션: 브랜드 컬러인 민트/에메랄드 톤으로 변경 */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#00c897]/5 via-emerald-500/5 to-teal-500/5" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
  
  <div className="max-w-4xl mx-auto relative">
    <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 border-2 border-[#00c897]/30 p-10 md:p-12 shadow-2xl hover:shadow-[#00c897]/20 transition-all duration-300">
      
      <div className="text-center mb-10">
        {/* 상단 배지: 선착순 및 할인 강조 */}
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-[#00c897]/40 px-6 py-2 text-sm text-emerald-100 mb-6 shadow-lg backdrop-blur-sm">
          <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
          <span className="font-bold">선착순 20명 한정 · 얼리버드 40% 혜택</span>
          <Sparkles className="w-4 h-4 text-emerald-300" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-50 mb-4 tracking-tight">
          당신의 영향력을 완성할 <br className="md:hidden" /> 마지막 기회
        </h2>
        
        {/* 가격 정보: 민트 그라데이션 적용 */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-xl text-slate-500 line-through decoration-rose-500/50">₩500,000</span>
          <div className="flex flex-col items-start">
            <span className="text-3xl md:text-3xl font-black bg-gradient-to-r from-[#00c897] to-emerald-400 bg-clip-text text-transparent">
              ₩300,000
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/40 text-[12px] text-rose-400 font-bold animate-bounce">
            -40% OFF
          </span>
        </div>

        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          일반 강의와는 차원이 다른 <span className="text-[#00c897] font-bold">1:1 밀착 코칭</span> 시스템<br className="hidden md:block" />
          5주 뒤, 스스로 생각하고 비즈니스를 해결하는 <span className="text-slate-50 font-semibold italic">AI Agent</span>를 소유하세요.
        </p>
      </div>

      {/* 핵심 수치 카드: 가독성 보강 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00c897]/30 transition-colors">
          <Clock className="w-6 h-6 text-[#00c897] mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-slate-50">5주 완성</span>
          <span className="text-slate-500 text-xs">고밀도 하이브리드 캠프</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00c897]/30 transition-colors">
          <Users className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-slate-50">선착순 20명</span>
          <span className="text-slate-500 text-xs">1:1 맞춤형 코칭 관리</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-[#00c897]/30 transition-colors">
          <Trophy className="w-6 h-6 text-teal-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-slate-50">만족도 98%</span>
          <span className="text-slate-500 text-xs">검증된 현업 실무 커리큘럼</span>
        </div>
      </div>

      {/* 버튼 영역: 민트 테마와 카카오 노란색의 조화 */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <a
          href="https://forms.gle/t7bKt7AQXpP9aoSp7"
          target="_blank"
          rel="noreferrer"
          className="group flex-[1.5] inline-flex items-center justify-center gap-3 rounded-2xl bg-[#00c897] hover:bg-[#00e0a9] text-[#050816] px-8 py-5 text-lg font-black shadow-xl shadow-[#00c897]/20 hover:shadow-[#00c897]/40 hover:-translate-y-1 transition-all duration-300"
        >
          신청하기
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#FEE500] hover:bg-[#ffeb3b] text-[#3C1E1E] px-8 py-5 text-lg font-black shadow-xl shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 fill-[#3C1E1E]" />
          상담하기
        </a>
      </div>

      <div className="text-center text-xs md:text-sm text-slate-500 space-y-2">
        <p className="flex items-center justify-center gap-1.5 font-medium"> 
          <Sparkles className="w-3 h-3 text-[#00c897]" />
          신청서 작성 완료 시 24시간 이내에 개별 안내 메일을 발송해 드립니다.
        </p>
        <p>기업 교육 및 단체 수강 문의는 카카오톡 채널을 이용해 주세요.</p>
      </div>
    </div>
  </div>
</section>

      </main>

      {/* FOOTER */}
      <footer className="py-7 px-6 border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
{/* flex-col로 세로 정렬하고, gap-1로 요소 사이 간격을 좁게 줍니다 */}
<div className="flex flex-col items-center justify-center text-center mb-4 gap-0">
  
  {/* 1. 로고 이미지 (불필요한 감싸는 div 제거) */}
  <img
    src="/logo2.png"
    alt="이츠코딩 로고"
    className="h-28 w-auto object-contain" // h-40은 매우 큽니다. 필요시 h-24 등으로 조절하세요.
  />

  {/* 2. 하단 텍스트 */}
  <p className="text-slate-500 text-[11px] tracking-widest -mt-9 relative z-10">
  AI AGENT BOOTCAMP 2026
</p>
  
</div>

          <div className="flex items-center justify-center gap-5 mb-6 text-sm">
            <a
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-emerald-300 transition-all duration-200 flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              카카오톡 상담
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:bitcocom@empas.com"
              className="text-slate-300 hover:text-fuchsia-300 transition-all duration-200 flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              이메일 문의
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900 text-xs text-slate-500 space-y-2">
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              <span>
                사업자(대표) : 이츠코딩(박매일)
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span>
                사업자번호 : <span>485-42-01156</span>
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span>컴퓨터 프로그래밍, 온라인 교육 학원</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-slate-500" />
                광주 서구 금호동 1110
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span className="flex items-center gap-1.5">
                <Mail size={12} className="text-slate-500" />
                <a
                  href="mailto:bitcocom@empas.com"
                  className="text-slate-400 hover:text-emerald-300 transition"
                >
                  bitcocom@empas.com
                </a>
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span className="flex items-center gap-1.5">
                <Phone size={12} className="text-slate-500" />
                010-7504-1975
              </span>
            </div>

            <p className="mt-5 text-slate-600 tracking-[0.25em] uppercase text-[11px] font-semibold">
              Copyright ⓒ 2022 IT&apos;S CODING.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS 애니메이션 */}
   {/* CSS 애니메이션 */}
<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
`}</style>

    </div>
  );
};

// Component definitions
const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-xl p-3 border border-slate-800/50">
    <span className="text-2xl font-black bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 mt-1">
      {label}
    </span>
  </div>
);

const VodItem = ({ color, title, desc }) => (
  <div className="rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-violet-500/30 p-4 flex gap-3 items-start group hover:shadow-lg hover:shadow-violet-500/10 transition-all">
    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
    <div className="min-w-0">
      <p className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-slate-100">
        {title}
      </p>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  </div>
);

const Badge = ({ color, icon, children }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r ${color} text-white shadow-md hover:shadow-lg transition-all`}
  >
    {icon}
    {children}
  </span>
);

const BadgeOutline = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:border-amber-500/50 transition-all">
    {icon}
    {children}
  </span>
);

const ScheduleCard = ({
  badge,
  title,
  titleColor,
  badgeColor,
  borderColor,
  iconColor,
  day,
  time,
  detailTitle,
  detailItems,
}) => (
  <div
    className={`relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border ${borderColor} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
  >
    <div className="absolute top-5 right-5">
      <div className={`px-3 py-1 rounded-full ${badgeColor} text-sm font-bold text-white shadow-lg`}>
        {badge}
      </div>
    </div>
    <h3 className={`text-lg font-black mb-4 ${titleColor}`}>{title}</h3>
    <div className="space-y-2 text-slate-300">
      <div className="flex items-center gap-2">
        <Calendar className={`w-4 h-4 ${iconColor}`} />
        <span className="font-semibold text-sm">{day}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className={`w-4 h-4 ${iconColor}`} />
        <span className="font-semibold text-sm">{time}</span>
      </div>
    </div>
    <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-slate-950/90 to-slate-900/50 border border-slate-800">
      <div className="text-sm text-slate-400 mb-2 font-medium">{detailTitle}</div>
      <div className="space-y-1 text-sm text-slate-300 leading-relaxed">
        {detailItems.map((t, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CtaStat = ({ icon, children }) => (
  <div className="rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-fuchsia-500/30 p-4 flex flex-col items-center gap-2 hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all">
    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col items-center gap-0.5">
      {children}
    </div>
  </div>
);

export default ItsCodingOfficial;