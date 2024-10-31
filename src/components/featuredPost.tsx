import { Post } from "@/pages/types";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="w-full h-full flex gap-4 lg:gap-8 flex-col sm:flex-row items-center justify-center mt-12 hover:brightness-75 transition-all"
    >
      <div className="flex flex-1 w-full h-full min-h-[240px] md:min-h-[334px] relative rounded-2xl overflow-hidden">
        <Image
          src={post.coverImage.url}
          alt={`Imagem de capa do post: ${post.title}`}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-1 h-full flex-col gap-3 lg:gap-6">
        <h1 className="font-bold text-3xl md:text-[40px] text-blue-600">
          {post.title}
        </h1>
        <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">
          {post.subtitle}
        </p>
        <div>
          <p className="font-bold text-zinc-900 text-sm md:text-base">
            {post.author.name}
          </p>
          <p className="text-zinc-600 text-xs md:text-sm">{post.createdAt}</p>
        </div>
      </div>
    </Link>
  );
}
