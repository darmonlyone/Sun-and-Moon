/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubActions ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""}` : "",
};

export default nextConfig;
