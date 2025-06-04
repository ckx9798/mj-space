export default function RecentPosts() {
  const BLOG_POST_LIST = [
    {
      post_id: 1,
      post_title: "⚡ 라이브러리 설치만 하지말고 직접 만들어보자",
      post_description:
        "React를 활용한 모달 UI 컴포넌트 제공 라이브러리 제작기",
      created_at: "2025-05-01T12:00:00Z",
      sub_group_name: "React",
      link: "https://velog.io/@ckx9798/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC",
    },
    {
      post_id: 2,
      post_title: "🌍 크롬 확장프로그램 제작기 - 설정부터 저장소 이용",
      post_description:
        "크롬 저장소 활용과 popup 파일을 통해 기존 프로젝트에 연결해보기",
      created_at: "2025-04-25T09:30:00Z",
      sub_group_name: "chrome",
      link: "https://velog.io/@ckx9798/%ED%81%AC%EB%A1%AC-%ED%99%95%EC%9E%A5%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8",
    },
    {
      post_id: 3,
      post_title: "🔨 성능최적화 3단계로 성능점수 100점 도전해보기",
      post_description:
        "코드스플리팅, 텍스트압축, 이미지 최적화를 통한 LightHouse 점수 올리기",
      created_at: "2025-04-20T15:10:00Z",
      sub_group_name: "LightHouse",
      link: "https://velog.io/@ckx9798/series/%EC%84%B1%EB%8A%A5%EC%B5%9C%EC%A0%81%ED%99%94",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {BLOG_POST_LIST.map((blogPost, idx) => (
        <a
          key={`post:${blogPost.post_id}:${idx}`}
          href={blogPost.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer flex-col gap-2 rounded-lg border p-5 transition-colors hover:scale-105 hover:animate-glowPulse"
        >
          <h4 className="my-3 text-base font-medium group-hover:text-indigo-500">
            {blogPost.post_title}
          </h4>
          <p className="mb-2 line-clamp-2 text-xs text-gray-500">
            {blogPost.post_description}
          </p>
          <div className="mt-auto flex items-center gap-3">
            <span className="text-[10px] text-gray-400">
              {new Date(blogPost.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
              {blogPost.sub_group_name}
            </span>
            {Date.now() - new Date(blogPost.created_at).getTime() <
              1000 * 60 * 60 * 24 * 7 && (
              <span className="ml-1 text-[10px] font-bold text-red-500">
                NEW
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
