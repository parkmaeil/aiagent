import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Calendar,
  PlayCircle,
  Users,
  ArrowRight,
  Terminal,
  MessageCircle,
  Mail,
  GraduationCap,
  HelpCircle,
  Sparkles,
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

const ItsCodingOfficial = () => {
  const [scrollY, setScrollY] = useState(0);

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
      desc: "MCP, Spring AI 3.0, Agentic Patterns",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "결과물 중심 학습 보장",
      desc: "내 손으로 구동되는 AI 에이전트 완성",
    },
    {
      icon: <Users2 className="w-5 h-5" />,
      title: "평생 커뮤니티 액세스",
      desc: "강의 종료 후에도 지속되는 네트워킹",
    },
  ];

  const learningSystem = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "주 3회 실시간 라이브",
      desc: "Zoom 기반 심화 학습 + 코드 리뷰",
      highlight: "월/화/목 19:00~22:00",
    },
    {
      icon: <PlayCircle className="w-6 h-6" />,
      title: "주 2회 VOD 학습",
      desc: "박매일 강사 인프런 프리미엄 콘텐츠 제공",
      highlight: "수/금 자율 학습",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "매주 과제 수행",
      desc: "실전 프로젝트 단위 미션 완수",
      highlight: "주말 제출",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "1:1 질의응답",
      desc: "카카오 상담 채널 운영",
      highlight: "평균 2시간 내 답변",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Github AI 코드 리뷰",
      desc: "GPT 기반 자동 피드백 시스템",
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
        "Spring AI 3.0 아키텍처",
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
            <div className="w-9 h-9 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-fuchsia-400" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-slate-100">
                IT&apos;S CODING
              </div>
              <div className="text-[10px] text-slate-500 font-semibold tracking-[0.2em] uppercase">
                AI Agent Bootcamp 2026
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <span>5주 완성</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>주 3회 라이브 · 주 2회 VOD</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>선착순 20명</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-100 hover:bg-slate-900/80 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              상담문의
            </a>
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 text-slate-900 text-xs font-bold hover:bg-white transition"
            >
              신청하기
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* HERO */}
        <section className="relative px-6 pt-16 pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700 px-4 py-2">
                <Flame className="w-4 h-4 text-rose-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  국비 6개월 과정을 5주로 압축한 실전 AI Agent 부트캠프
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-50 mb-4">
                5주 만에 완성하는
                <br />
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  AI 에이전트 마스터
                </span>
              </h1>

              <p className="text-sm md:text-base text-slate-400 max-w-xl mb-8 leading-relaxed">
                Spring AI · MCP · RAG · Multi-Agent까지, 현업 중심 커리큘럼으로
                <span className="text-slate-100 font-semibold">
                  {" "}
                  나만의 AI 에이전트 시스템
                </span>
                을 처음부터 배포까지 경험합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 text-slate-900 px-8 py-3 text-sm font-bold shadow-sm hover:bg-white transition"
                >
                  얼리버드 40% 신청하기
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={KAKAO_CHANNEL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-900/70 transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  카카오톡으로 상담하기
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-rose-400" />
                  <span>
                    <span className="text-slate-100 font-semibold">5주</span>{" "}
                    집중 부트캠프
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-violet-400" />
                  <span>
                    선착순{" "}
                    <span className="text-slate-100 font-semibold">20명</span>{" "}
                    소수정예
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-amber-400" />
                  <span>
                    수강생 만족도{" "}
                    <span className="text-slate-100 font-semibold">
                      98%
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* 오른쪽: 일정/카운트다운 카드 */}
            <div className="relative">
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-6 space-y-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">
                      Schedule(교육기간)
                    </div>
                    <div className="text-sm font-semibold text-slate-100">
                      2026.02.23 ~ 2026.03.30
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-300" />
                      <span>월/화/목 라이브</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <PlayCircle className="w-3 h-3 text-slate-300" />
                      <span>수/금 VOD</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
                      Early Bird Deadline(모집 마감)
                    </span>
                    <span className="text-xs text-slate-300">2026.02.10</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-3">
                    <div className="flex gap-4 font-mono text-sm text-slate-100">
                      <TimeUnit label="DAYS" value={timeLeft.days} />
                      <TimeUnit label="HRS" value={timeLeft.hours} />
                      <TimeUnit label="MIN" value={timeLeft.minutes} />
                      <TimeUnit label="SEC" value={timeLeft.seconds} />
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-[11px] text-rose-300 font-semibold">
                      <Zap className="w-3 h-3" />
                      선착순 20명 모집
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-950/70 border border-slate-800 px-4 py-3 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    국비 교육 자부담보다 낮은 가격으로
                    <br />
                    <span className="text-slate-100 font-semibold">
                      5주 완성 AI Agent 포트폴리오
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 line-through">
                      ₩500,000
                    </div>
                    <div className="text-sm font-bold text-slate-50">
                      ₩300,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-4 py-1.5">
                <Flame className="w-4 h-4 text-rose-400" />
                <span className="text-[11px] font-semibold text-slate-300">
                  WHY IT&apos;S CODING
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
                국비 교육과 무엇이 다른가요?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                2026년부터 국비 교육도 자부담 10% 시대,{' '}
                <span className="text-slate-100 font-semibold">
                  5주 집중 실전 부트캠프
                </span>
                로 시간과 비용을 아낄 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {differentiators.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 p-5 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center mb-4 text-fuchsia-300">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-50 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 가격 비교 */}
            <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-4 text-center text-xs">
                <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5">
                  <div className="text-slate-400 mb-1">국비 교육 (6개월)</div>
                  <div className="text-2xl font-black text-slate-100 mb-1">
                    ₩500,000
                  </div>
                  <div className="text-[11px] text-slate-500">
                    자부담 10% 기준
                  </div>
                  <div className="mt-3 text-[11px] text-slate-400">
                    긴 기간 · 관료적 커리큘럼
                  </div>
                </div>
                <div className="relative rounded-2xl bg-slate-900/90 border border-fuchsia-500/60 p-5">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-fuchsia-500 text-[10px] font-bold text-white">
                    BEST
                  </div>
                  <div className="text-fuchsia-300 mb-1">IT&apos;S CODING (5주)</div>
                  <div className="text-2xl md:text-3xl font-black text-slate-50 mb-1">
                    ₩300,000
                  </div>
                  <div className="text-[11px] text-fuchsia-200 mb-2">
                    얼리버드 할인가
                  </div>
                  <div className="text-[11px] text-slate-100 font-semibold">
                    실전 프로젝트 + 포트폴리오
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5">
                  <div className="text-slate-400 mb-1">타 부트캠프 (3개월)</div>
                  <div className="text-2xl font-black text-slate-100 mb-1">
                    ₩2,000,000
                  </div>
                  <div className="text-[11px] text-slate-500">
                    평균 수강료 기준
                  </div>
                  <div className="mt-3 text-[11px] text-slate-400">
                    높은 비용 · 잦은 이탈
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING SYSTEM */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-4 py-1.5">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] font-semibold text-slate-300">
                  LEARNING SYSTEM
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
                어떻게 학습이 진행되나요?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                주 3회 실시간 라이브와 주 2회 VOD를 결합한{" "}
                <span className="text-slate-100 font-semibold">
                  하이브리드 시스템
                </span>
                으로 학습합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {learningSystem.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 p-6 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4 text-cyan-300">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-50 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 border border-slate-700 px-3 py-1.5 text-[11px] text-slate-100 font-medium">
                    <Clock className="w-3 h-3" />
                    {item.highlight}
                  </div>
                </div>
              ))}
            </div>

            {/* VOD 요약 */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-center mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-50">
                    프리미엄 VOD 콘텐츠
                  </h3>
                  <p className="text-xs text-slate-400">
                    박매일 강사 인프런 베스트셀러 강의를 커리큘럼에 맞게 선별 제공
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
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
              <p className="mt-4 text-[11px] text-slate-400 text-center">
                총{" "}
                <span className="text-slate-100 font-semibold">
                  190시간 이상
                </span>
                의 프리미엄 콘텐츠를 부트캠프 커리큘럼에 맞춰 제공합니다.
              </p>
            </div>
          </div>
        </section>

    {/* CURRICULUM (Accordion) */}
<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-4 py-1.5">
        <Code2 className="w-4 h-4 text-fuchsia-400" />
        <span className="text-[11px] font-semibold text-slate-300">
          5 WEEKS CURRICULUM
        </span>
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
        5주간 무엇을 배우나요?
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        주차별 테마 + 실시간 라이브 + VOD 학습
      </p>
    </div>

    <div className="space-y-4">
      {curriculum.map((week, idx) => {
        const weekKey = `week${idx + 1}`;
        const isOpen = openWeeks[weekKey];

        return (
          <div
            key={idx}
            className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-600 transition-all duration-200 overflow-hidden"
          >
            <button
              onClick={() => toggleWeek(weekKey)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-100">
                  {week.icon}
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 mb-0.5">
                    {week.week}
                  </div>
                  <div className="text-sm font-bold text-slate-50">
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
              className={`grid md:grid-cols-2 gap-4 px-6 pb-5 transition-all duration-300 ${
                isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                  <Video className="w-4 h-4 text-cyan-300" />
                  <span>실시간 라이브 (월/화/목)</span>
                </div>
                {week.liveTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-slate-950/70 border border-slate-800 p-3 text-xs text-slate-200 flex gap-2"
                  >
                    <Zap className="w-3 h-3 text-cyan-300 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                  <PlayCircle className="w-4 h-4 text-violet-300" />
                  <span>VOD 학습 (수/금)</span>
                </div>
                {week.lectures.map((lecture, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-slate-950/70 border border-slate-800 p-3 text-xs"
                  >
                    <p className="text-slate-200 font-semibold mb-0.5">
                      {lecture.title}
                    </p>
                    <p className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3" />
                      {lecture.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Week 5 최종 프로젝트 아코디언 (기존 스타일 복원) */}
      <div
        className="group relative rounded-2xl bg-emerald-900/40 border-2 border-emerald-600/60 transition-all duration-200 overflow-hidden shadow-xl hover:border-emerald-500/80"
      >
        <button
          onClick={() => toggleWeek("week5")}
          className="w-full p-6 text-left"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-emerald-300 mb-0.5">
                  Week 5
                </div>
                <h3 className="text-lg font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  최종 프로젝트
                </h3>
                <p className="text-[11px] text-slate-300 mt-1">
                  나만의 AI 에이전트 시스템을 설계하고 배포까지
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
          className={`transition-all duration-300 overflow-hidden ${
            openWeeks.week5
              ? "max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            <div className="pt-4 border-t border-emerald-500/30">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300 mb-2">
                    <Target className="w-4 h-4" />
                    <span>프로젝트 목표</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-50 mb-0.5">
                        실전 AI 에이전트 구축
                      </p>
                      <p className="text-[11px] text-slate-300">
                        사용자 정의 도메인에 맞춘 완전한 시스템
                      </p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-50 mb-0.5">
                        클라우드 배포 실습
                      </p>
                      <p className="text-[11px] text-slate-300">
                        AWS/GCP 기반 프로덕션 환경 구축
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300 mb-2">
                    <Rocket className="w-4 h-4" />
                    <span>최종 결과물</span>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-50 mb-0.5">
                        포트폴리오 완성
                      </p>
                      <p className="text-[11px] text-slate-300">
                        GitHub 레포 + 데모 URL + 기술 문서
                      </p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-50 mb-0.5">
                        실무 적용 가능
                      </p>
                      <p className="text-[11px] text-slate-300">
                        현업에서 바로 활용 가능한 기술 스택
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 커리큘럼 상세 상담 CTA (별도) */}
    <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Rocket className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-bold text-emerald-300">
            커리큘럼 상세 내용
          </span>
        </div>
        <p className="text-sm text-slate-200 mb-6">
          전체 커리큘럼 상세 내용과 맞춤 상담을 원하시면 언제든지 문의해 주세요.
        </p>
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 font-bold hover:from-emerald-600 hover:to-teal-600 transition shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          커리큘럼 상세 상담하기
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</section>


        {/* INSTRUCTOR */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-4 py-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-semibold text-slate-300">
                  INSTRUCTOR
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
                누가 함께하나요?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                20년 이상의 교육 경험을 가진 Spring 기반 백엔드 & AI 에이전트
                전문가입니다.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="relative shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-slate-900 overflow-hidden border border-slate-700">
                    <img src="/park.jpg" alt="박매일 강사" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center">
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-50 mb-1">
                    박매일
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-semibold mb-4">
                    Full Stack / Backend · Spring AI Specialist
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5 text-[11px]">
                    <Badge color="from-cyan-500 to-blue-500" icon={<Zap className="w-3 h-3" />}>
                      패스트캠퍼스 강사
                    </Badge>
                    <Badge color="from-violet-500 to-purple-500" icon={<GraduationCap className="w-3 h-3" />}>
                      인프런 베스트셀러
                    </Badge>
                    <BadgeOutline icon={<Trophy className="w-3 h-3" />}>
                      수강생 만족도 98%
                    </BadgeOutline>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                    실무와 교육 현장을 20년 이상 오가며{" "}
                    <span className="text-slate-50 font-semibold">
                      Java·Spring 기반 백엔드 및 풀스택 교육
                    </span>
                    을 진행해 왔습니다. 최신{" "}
                    <span className="text-cyan-300 font-semibold">
                      Spring AI & Agent
                    </span>{" "}
                    분야를 반영한 실전 커리큘럼을 설계하고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {["Java", "Spring Boot", "Spring AI", "DB", "MVC", "IoT", "Agent"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300"
                        >
                          #{tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-6 text-xs">
                {[
                  "패스트캠퍼스 백엔드 부트캠프 강의",
                  "광주인공지능사관학교 강의",
                  "한국전력공사 In-House 코딩교육",
                  "소프트웨어마이스터고 산학협력교사",
                  "스마트인재개발원 교육부장",
                  "한양대학교 ERICA 온라인 강의",
                  "한국전력공사 외 기업체 다수 강의",
                  "인공지능·정보기술개발 직업능력개발훈련교사",
                ].map((career) => (
                  <div
                    key={career}
                    className="flex items-start gap-2 rounded-xl bg-slate-900/70 border border-slate-800 p-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5" />
                    <p className="text-slate-200">{career}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-300" />
                  <div>
                    <p className="text-[10px] text-slate-400 mb-0.5">Email</p>
                    <p className="text-slate-200 font-semibold">
                      bitcocom@empas.com
                    </p>
                  </div>
                </div>
                <a
                  href={KAKAO_CHANNEL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/50 px-4 py-2 text-[11px] font-semibold text-emerald-100 hover:bg-emerald-500/20 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  교육문의 및 제휴
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-4 py-1.5">
                <Timer className="w-4 h-4 text-indigo-300" />
                <span className="text-[11px] font-semibold text-slate-300">
                  SCHEDULE
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
                수업은 이렇게 진행됩니다
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                매주 월/화/목 라이브 수업, 수/금 VOD 복습으로{" "}
                <span className="text-slate-100 font-semibold">
                  주 5일 학습 루틴
                </span>
                을 만들 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10 text-xs">
              <ScheduleCard
                badge="LIVE"
                title="실시간 라이브"
                titleColor="text-rose-300"
                badgeColor="bg-rose-500"
                borderColor="border-rose-500/40"
                iconColor="text-rose-300"
                day="매주 월 / 화 / 목"
                time="19:00 ~ 22:00 (3시간)"
                detailTitle="시간 구성"
                detailItems={[
                  "1교시: 19:00 ~ 20:00",
                  "2교시: 20:00 ~ 21:00",
                  "3교시: 21:00 ~ 22:00",
                ]}
              />
              <ScheduleCard
                badge="VOD"
                title="VOD 복습"
                titleColor="text-cyan-300"
                badgeColor="bg-cyan-500"
                borderColor="border-cyan-500/40"
                iconColor="text-cyan-300"
                day="매주 수 / 금"
                time="자율 시간 (VOD 시청)"
                detailTitle="학습 내용"
                detailItems={["라이브 복습", "실습 과제 완성", "Q&A 및 피드백"]}
              />
            </div>

            {/* 일일 시간표 */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-50">
                  하루 3시간, 집중도 높은 수업 설계
                </h3>
                <p className="mt-1 text-[11px] text-slate-400">
                  50분 수업과 10분 휴식 리듬으로 끝까지 집중할 수 있도록 구성되어 있습니다.
                </p>
              </div>
              <div className="space-y-4">
                {dailySchedule.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                        {item.isBreak ? (
                          <span className="text-lg">☕</span>
                        ) : (
                          <Clock className="w-5 h-5 text-slate-100" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-50">
                          {item.period}
                        </h4>
                        <p className="text-slate-300">{item.time}</p>
                      </div>
                    </div>
                    {!item.isBreak && (
                      <div className="hidden md:block rounded-full bg-slate-950/70 border border-slate-800 px-3 py-1 text-[11px] text-slate-200">
                        50분 수업
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-slate-950/80 border border-slate-800 p-5 text-xs flex gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/40">
                  <Zap className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-200 mb-1.5">
                    수업 진행 방식
                  </h4>
                  <ul className="space-y-1 text-slate-300">
                    <li>1교시: 이론 강의 + 개념 설명</li>
                    <li>2교시: 실습 + 코드 라이브 코딩</li>
                    <li>3교시: 과제 해설 + Q&A + 미니 프로젝트</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE */}
        <section className="py-16 px-6 bg-slate-950/60 border-y border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-4 py-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-300" />
                <span className="text-[11px] font-semibold text-slate-300">
                  TARGET AUDIENCE
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-50 tracking-tight">
                이런 분들께 특히 추천합니다
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              {[
                "장기간 및 장시간 국비과정에 참여가 어려운 분",
                "직장이나 사업으로 학원 다니기 힘든 분",
                "단일 과정으로 자바 풀 스택 + AI를 함께 배우고 싶은 분",
                "실무에서 바로 쓰는 Spring AI & Agent 흐름을 알고 싶은 분",
                "6~8개월씩 투자하기보다 빠른 로드맵을 원하는 분",
                "자바 기본기는 있지만, 연결 기술이 막막한 분",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-500/15 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-indigo-300" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center text-xs">
              <span className="inline-block rounded-full bg-slate-900 px-6 py-3 border border-slate-800 text-slate-300">
                실제 수강생들이 가장 많이 고민했던 내용들,{" "}
                <span className="text-slate-50 font-semibold">
                  이츠코딩이 함께 해결합니다.
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="register" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-10 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-5 py-2 text-xs text-slate-200 mb-4">
                  <Flame className="w-4 h-4 text-rose-400" />
                  선착순 20명 한정 · 얼리버드 40% 할인
                  <Sparkles className="w-4 h-4 text-violet-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-50 mb-3">
                  지금 신청하면
                </h2>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-lg text-slate-500 line-through">
                    ₩500,000
                  </span>
                  <span className="text-3xl md:text-4xl font-black text-slate-50">
                    ₩300,000
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/40 text-[11px] text-rose-200 font-semibold">
                    -40% OFF
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-300">
                  국비 교육 자부담보다 낮은 가격으로{" "}
                  <span className="text-slate-50 font-semibold">
                    5주 완성 AI Agent 부트캠프
                  </span>
                  를 경험해 보세요.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mb-6 text-xs">
                <CtaStat icon={<Clock className="w-5 h-5 text-fuchsia-300" />}>
                  <span className="font-bold text-slate-50">5주 완성</span>
                  <span className="text-slate-400 text-[11px]">집중 부트캠프</span>
                </CtaStat>
                <CtaStat icon={<Users className="w-5 h-5 text-violet-300" />}>
                  <span className="font-bold text-slate-50">선착순 20명</span>
                  <span className="text-slate-400 text-[11px]">소수정예</span>
                </CtaStat>
                <CtaStat icon={<Trophy className="w-5 h-5 text-cyan-300" />}>
                  <span className="font-bold text-slate-50">만족도 98%</span>
                  <span className="text-slate-400 text-[11px]">검증된 강의</span>
                </CtaStat>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6 text-sm">
                <a
                  href="https://forms.google.com/your-google-form-url"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 text-slate-900 px-6 py-3 font-bold hover:bg-white transition"
                >
                  <Trophy className="w-5 h-5" />
                  얼리버드 신청하기
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={KAKAO_CHANNEL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-100 hover:bg-slate-900/70 transition"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" />
                  카카오톡 상담
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="text-center text-[11px] text-slate-400 space-y-1">
                <p className="flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-fuchsia-400" />
                  신청서 작성 시 안내 메일을 보내드립니다.
                </p>
                <p>문의/제휴는 카카오톡 채널로 연결됩니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto text-center text-xs">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-xl bg-slate-900 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-fuchsia-400" />
            </div>
            <span className="text-sm font-bold text-slate-100">
              IT&apos;S CODING
            </span>
          </div>
          <p className="text-slate-600 text-[11px] mb-4">
            AI Agent Bootcamp 2026
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-emerald-300 transition text-[11px]"
            >
              카카오톡 상담
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:bitcocom@empas.com"
              className="text-slate-500 hover:text-fuchsia-300 transition text-[11px]"
            >
              이메일 문의
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900 text-[10px] text-slate-500 space-y-2">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span>
                사업자(대표) : <strong>이츠코딩(박매일)</strong>
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span>
                사업자번호 : <strong>485-42-01156</strong>
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span>컴퓨터 프로그래밍, 온라인 교육 학원</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1">
                <MapPin size={10} />
                광주 서구 금호동 1110
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <Mail size={10} />
                bitcocom@empas.com
              </span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <Phone size={10} />
                010-7504-1975
              </span>
            </div>
            <p className="mt-6 text-slate-700 tracking-[0.35em] uppercase">
              Copyright ⓒ 2026 IT&apos;S CODING.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// TimeUnit
const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-lg font-bold">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
      {label}
    </span>
  </div>
);

// VodItem
const VodItem = ({ color, title, desc }) => (
  <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-3 flex gap-2 items-start">
    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${color}`} />
    <div>
      <p className="text-slate-200 font-semibold mb-0.5">{title}</p>
      <p className="text-[11px] text-slate-400">{desc}</p>
    </div>
  </div>
);

// Badge
const Badge = ({ color, icon, children }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r ${color} text-white`}
  >
    {icon}
    {children}
  </span>
);

// BadgeOutline
const BadgeOutline = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-700 text-slate-200">
    {icon}
    {children}
  </span>
);

// ScheduleCard
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
    className={`relative rounded-2xl bg-slate-900/80 border ${borderColor} p-6`}
  >
    <div className="absolute top-5 right-5">
      <div className={`px-3 py-1 rounded-full ${badgeColor} text-[10px] font-bold text-white`}>
        {badge}
      </div>
    </div>
    <h3 className={`text-lg font-black mb-4 ${titleColor}`}>{title}</h3>
    <div className="space-y-2 text-slate-300">
      <div className="flex items-center gap-2">
        <Calendar className={`w-4 h-4 ${iconColor}`} />
        <span className="font-semibold">{day}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className={`w-4 h-4 ${iconColor}`} />
        <span className="font-semibold">{time}</span>
      </div>
    </div>
    <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
      <div className="text-[11px] text-slate-400 mb-2">{detailTitle}</div>
      <div className="space-y-1 text-[11px] text-slate-300">
        {detailItems.map((t) => (
          <div key={t}>• {t}</div>
        ))}
      </div>
    </div>
  </div>
);

const CtaStat = ({ icon, children }) => (
  <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 flex flex-col items-center gap-2">
    <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col items-center gap-0.5">
      {children}
    </div>
  </div>
);

export default ItsCodingOfficial;
