import { useMDXComponent } from "next-contentlayer/hooks";

import PostBanner from "./banner";
import PostImage from "./image";
import PostLink from "./link";

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose text-lg text-gray-600 max-w-none prose-lg prose-p:leading-normal prose-headings:text-gray-900 prose-a:text-gray-90 hover:prose-a:underline prose-a:font-normal prose-strong:font-medium prose-strong:text-gray-900 prose-blockquote:italic prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:pl-0 prose-blockquote:border-none prose-h2:scroll-mt-28">
      <Component components={{ ...mdxComponents }} />
    </article>
  );
}
