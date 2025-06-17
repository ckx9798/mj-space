/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // .md 파일 (선택사항)
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    // ✅ .glb, .gltf, .png 등 처리 - Webpack 5 기본 방식 사용
    config.module.rules.push({
      test: /\.(glb|gltf|png|jpe?g|gif|webp)$/,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;
