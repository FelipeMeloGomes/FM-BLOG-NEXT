import CardPost from "@/components/cardPost";
import Error from "@/components/error";
import FeaturedPost from "@/components/featuredPost";
import Header from "@/components/header";
import Loading from "@/components/loading";
import { GET_ALL_POSTS, usePosts } from "@/hooks/usePosts";
import { client } from "@/lib/apollo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { HomeProps } from "./types";

export default function Home({ initialPosts }: HomeProps) {
  const { posts = initialPosts, loading, error } = usePosts();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <Head>
        <title>FMTech - Seu blog de tecnologia</title>
        <meta
          name="description"
          content="Fique por dentro das novidades do mundo da tecnologia com o FMTech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4">
        <Header />

        {posts && posts.length > 0 && (
          <>
            <FeaturedPost post={posts[0]} />
            <div className="flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12">
              {posts.slice(1).map((post) => (
                <CardPost
                  key={post.id}
                  title={post.title}
                  author={post.author.name}
                  createdAt={post.createdAt}
                  subtitle={post.subtitle}
                  urlImage={post.coverImage.url}
                  slug={post.slug}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: GET_ALL_POSTS });
  return {
    props: {
      initialPosts: data.posts,
    },
  };
};
