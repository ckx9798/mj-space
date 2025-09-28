## 🌍 프로젝트 개요

평소 유튜브, 인스타그램, 틱톡에서 유용하거나 재밌는 숏폼 콘텐츠를 자주 시청하는데,

> "아 그거 어디서 봤더라…" 하며 여러 플랫폼의 저장소를 찾아다니는 것이 불편해서 직접 숏폼 저장 서비스를 개발했습니다.

크롬 익스텐션을 통해 저장하고 싶은 영상에서 한 번의 클릭으로 개인 구글 계정에 연동하여 자동 저장됩니다. iframe 기반으로 영상을 렌더링하여 여러 영상을 페이지 이동 없이 재생할 수 있도록 설계했습니다.

이를 통해 누구나 **기억하고 싶은 콘텐츠를 쉽게 저장**하고, 찾지 않아도 한 페이지에서 다시 꺼내볼 수 있는 공간이 되었으면 좋겠습니다.

---

## 🎬 프로젝트 주요 기능

### 1️⃣ 숏폼 영상 즉시 저장 및 통합 재생

크롬 익스텐션 버튼 클릭 한 번으로 세가지 다른 플랫폼(유튜브/인스타그램/틱톡)의 숏폼 영상을 즉시 저장하고, 저장된 숏폼을 플랫폼과 무관하게 한 페이지에서 확인 및 재생할 수 있습니다. 또한 숏폼을 크게 보거나 삭제하는 기능도 제공합니다.

- 빠르고 직관적인 사용성
- 로그인 없이도 사용 가능한 높은 접근성
- 구글 계정 연동을 통한 다른 PC에서의 공유 기능

<video src="/savelinks/addLink.webm" controls loop muted width="800" style="border-radius: 14px;"></video>
<video src="/savelinks/manage.webm" controls loop muted width="800" style="border-radius: 14px;"></video>

<br/>

### 2️⃣ Google Gemini API 기반 실시간 Q&A

저장된 링크에 대해 Gemini API를 활용하여 실시간 질문과 답변이 가능합니다.
예를 들어 "화담숲은 서울에서 가는데 얼마나 걸려?"와 같은 질문을 통해 콘텐츠와 관련된 추가 정보를 얻을 수 있습니다.

- AI 기반 스마트한 정보 탐색
- 단순 저장을 넘어선 콘텐츠 이해도 향상

<video src="/savelinks/gemini.webm" controls loop muted width="800" style="border-radius: 14px;"></video>

<br/>

### 3️⃣ 회원가입 및 로그인을 통한 확장 기능

로그인 시 모바일과 연동 가능한 기능, 링크별 즐겨찾기 기능, 간단한 메모 기능을 추가로 제공합니다.

- 멀티 디바이스 연동으로 확장된 사용성
- 개인화된 콘텐츠 관리

<video src="/savelinks/login.webm" controls loop muted width="800" style="border-radius: 14px;"></video>

---

## 🚀 기술적 도전과 성과

### 🎈 성능 최적화를 통한 Lighthouse 98점 달성

초기 **LCP 7초에서 1.1초**로 대폭 개선하여 Lighthouse 성능 점수를 58점에서 98점으로 향상시켰습니다.

백엔드 서버의 응답 속도가 느린 환경에서도 최적의 사용자 경험을 제공하기 위해 코드 스플리팅 및 레이지 로딩을 활용해 LCP를 개선했습니다. 또한 gzip 텍스트 압축 및 React Query의 캐싱 기능을 적용하여 불필요한 네트워크 트래픽을 줄였습니다.

**적용 기술**

- 코드 스플리팅 및 레이지 로딩
- gzip 텍스트 압축
- 이미지 WebP 변환
- React Query 캐싱

<img src="/savelinks/성능.webp" width="800"></img>

### 🎈 Axios Instance + Interceptor를 통한 코드 구조화

초기에는 각 페이지마다 API 요청 및 응답 처리를 반복적으로 작성해야 하는 비효율이 있었습니다. 이를 개선하기 위해 Axios 인스턴스와 인터셉터를 활용하여 공통 요청/응답 로직을 중앙에서 통합 관리하도록 구조를 재설계했습니다.

공통 요청/응답 로직을 인터셉터로 처리하여 토큰 갱신, 오류 핸들링, 로딩 처리 등을 일원화했습니다. 그 결과 코드의 중복을 줄이고 유지보수성을 높이는 동시에 에러 처리와 토큰 갱신 등 공통 기능을 일관되게 적용할 수 있었습니다.

<img src="/savelinks/인터셉터.webp" width="800"></img>

### 🎈 도메인 구매 및 적용을 통한 접근성 향상

직접 도메인을 구매하고 서비스에 적용하면서 도메인 연결 및 배포 설정에 대한 실전 경험을 쌓을 수 있었습니다. 이를 통해 서비스 신뢰도와 접근성을 동시에 향상시켰고, 실제 사용자들이 더 직관적으로 접근할 수 있는 환경을 제공했습니다.

<img src="/savelinks/도메인.webp" width="800"></img>

---

## 🌐 사용자 중심의 서비스 개발

### 🎈 크롬 익스텐션으로의 마이그레이션

기존 프로젝트는 단순한 링크 저장 기능에 머물러 있어 실제 사용자에게 충분한 매력을 전달하기 어려웠습니다. 서비스의 완성은 사용자 피드백에서 비롯된다고 생각하여, 접근성과 실용성을 높이기 위해 크롬 익스텐션 형태로 서비스를 리빌딩했습니다.

Chrome Storage API를 활용하여 브라우저 간 데이터 소통 방식을 학습했고, 이를 통해 사용자가 손쉽게 접근할 수 있는 구조로 서비스를 설계했습니다. 덕분에 다양한 국가의 사용자가 쉽게 설치하고 활용할 수 있는 환경을 마련할 수 있었습니다.

### 🎈 유저확보를 위한 다양한 커뮤니티에 홍보

Reddit, 슬랙 그룹, 개발자 커뮤니티 등 다양한 플랫폼에 프로젝트를 직접 홍보하여 실제 사용자들을 확보했습니다. 사용자들이 남긴 피드백을 바탕으로 기능을 다듬고 서비스의 방향성을 점검할 수 있었으며, 이를 통해 제품의 완성도를 더욱 높일 수 있었습니다.

<img src="/savelinks/홍보.webp" width="800"></img>

---

## 📺 소개영상

<!-- <iframe width="760" height="600" src="https://www.youtube.com/embed/mNhZGJaDQV0?si=f4BOu08g7PC58oG8"" frameborder="0" allowfullscreen style="border-radius: 14px;"></iframe> -->

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 14px;">
  <iframe 
    src="https://www.youtube.com/embed/mNhZGJaDQV0?si=f4BOu08g7PC58oG8" 
    frameborder="0" 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 14px;">
  </iframe>
</div>

<br/>
