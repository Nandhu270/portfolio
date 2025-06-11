import { IconCloudComponent } from "./IconCloudComponent";

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "chatbot",
  "c",
  "git",
  "refinedgithub",
  "cplusplus",
  "bootstrap",
  "springboot",
  "python",
  "mongodb",
  "mysql",
  "tailwindcss",
  "reactbootstrap",
  "hibernate",
  "apachetomcat",
  "eclipseide",
  "openai",
  "codechef",
  "leetcode",
  "typescript",
  "django",
  "figma",
  "flutter",
  "reactrouter",
  "ejs",
  "googlechrome",
  "mongoosedotws",
];

export function IconCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden text-3xl">
      <IconCloudComponent images={images} />
    </div>
  );
}
