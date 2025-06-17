export const SKILLS = [
  {
    icon: "/tech/next.svg",
    title: "Next.js",
    categories: [
      {
        name: "페이지 및 라우팅 설계",
        items: [
          "App Router의 Segment 기반 라우팅·Nested Layout·서버/클라이언트 컴포넌트 구분 전략 적극 활용",
          "Pages Router의 파일 기반 자동 라우팅과 _app.tsx/_document.tsx 최적화를 통해 유연한 페이지 설계 및 SEO·글로벌 레이아웃 구축 경험",
        ],
      },
      {
        name: "데이터 페칭 및 렌더링 전략",
        items: [
          "CSR/SSR/SSG/ISR 각각의 렌더링 전략을 페이지 특성(SEO 요구, 실시간성, 초기 로드 성능)에 따라 최적 선택 및 적용",
          "getStaticProps, getServerSideProps, getStaticPaths 를 통한 정적/서버사이드 데이터 패칭 구현 경험",
        ],
      },
      {
        name: "최적화 및 배포",
        items: [
          "next/image 컴포넌트로 이미지 자동 최적화 및 레이지 로딩 적용",
          "Webpack Bundle Analyzer로 번들 크기 분석 및 코드 스플리팅 개선",
          "Vercel 배포 파이프라인 설정 및 Github Actions을 통한 자동 빌드·배포 경험",
        ],
      },
    ],
  },
  {
    icon: "/tech/react.svg",
    title: "React",
    categories: [
      {
        name: "다양한 라이브러리 학습 및 활용",
        items: [
          "IntersectionObserver, useInfiniteQuery 를 활용한 무한스크롤 기능 구현",
          "프로젝트의 규모, 복잡도, 팀의 선호도에 따라 Recoil / Zustand / Jotai 비교·분석하여 채택",
          "react-toastify를 활용한 알림 제공, 이후 개인 제작 라이브러리에서 직접 토스트 모달 제작",
          "Zod, React-hook-form을 조합해 폼 데이터의 타입 안정성과 유효성 검사를 실현",
        ],
      },
      {
        name: "성능 최적화 및 메모리 관리",
        items: [
          "각 상황에 알맞는 이미지 최적화 진행 - Lazy/Eager Loading, Preload",
          "코드 스플리팅과 텍스트 Gzip 압축을 통해 네트워크 트래픽 감소 및 로딩 속도 개선",
          "useCallback, useMemo, memo를 적극적으로 활용하여 불필요한 함수 재생성과 컴포넌트 리렌더링을 방지, 메모리 사용량을 최적화",
        ],
      },
      {
        name: "컴포넌트 재사용 및 설계",
        items: [
          "컴포넌트 분리 및 재사용 요구치를 정확히 판단하여, 작고 집중된 컴포넌트 단위로 설계하고, Props와 Composition을 적극 활용해 유연한 UI 개발을 실현",
          "재사용 가능한 컴포넌트 라이브러리를 제작하여, 재사용에 대한 깊은 이해 체득",
        ],
      },
    ],
  },
  {
    icon: "/tech/javascript.svg",
    title: "JavaScript",
    categories: [
      {
        name: "자바스크립트 동작 원리 이해 및 실전 활용",
        items: [
          "비동기 처리(Async/Await, Promise) 원리를 깊이 이해하고, 네트워크 요청 처리 시 에러 핸들링 및 최적의 UX 제공",
          "클로저, this 바인딩, 스코프, 실행 컨텍스트 등 자바스크립트 동작 원리에 대한 깊은 이해 및 프로젝트 실제 적용",
        ],
      },
    ],
  },
  {
    icon: "/tech/typescript.svg",
    title: "TypeScript",
    categories: [
      {
        name: "타입 시스템 기반 안정적 개발 경험",
        items: [
          "TypeScript 기반 정적 타입 시스템 이해 및 활용으로 런타임 오류 사전 방지",
          "제네릭, 유니언/인터섹션 타입을 활용한 유연하고 견고한 타입 설계 경험",
          "기존 JavaScript 코드베이스에 TypeScript 점진적 도입 및 마이그레이션 경험",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    name: "가톨릭대학교 국제학부",
    year: "2017. 03 ~ 2021. 03",
  },
  {
    name: "코드잇 부트캠프 프론트엔드 과정",
    year: "2024. 06 ~ 2024. 12",
  },
  {
    name: "코드잇 프론트엔드 인턴",
    year: "2025. 05 ~ 2025. 06",
  },
  {
    name: "모던 자바스크립트 Deep Dive 스터디",
    year: "2025. 01 ~ 진행 중",
  },
];

export const CERTS = [
  {
    name: "정보처리기사 필기",
    year: "2025. 03",
  },
  {
    name: "컴퓨터 활용 능력 1급",
    year: "2020. 08",
  },
  {
    name: "GTQ 2급",
    year: "2020. 07",
  },
];
