import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import type { EntryCollection } from "contentful";
import BlogCard from "~/components/BlogCard";

import { getEntries } from "~/service/contentful";
import { calcReadingTime } from "~/util/calcReadingTime";

export const onGet: RequestHandler<EntryCollection<BlogData>> = async () => {
  return await getEntries<BlogData>();
};

export const BlogCards = component$<{ posts: EntryCollection<BlogData> }>(
  ({ posts }) => (
    <section class="mx-auto max-w-[65ch] my-10">
      <h1 class="text-3xl font-bold">Blog</h1>
      <hr class="my-5" />
      {posts.items.map((post) => (
        <a href={`/blog/${post.sys.id}`} key={post.sys.id}>
          <BlogCard
            title={post.fields.title}
            description={post.fields.description}
            publishedDate={post.sys.createdAt}
            readingTime={calcReadingTime(post.fields.content)}
          />
        </a>
      ))}
    </section>
  )
);

export default component$(() => {
  const resource = useEndpoint<EntryCollection<BlogData>>();

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(posts) => <BlogCards posts={posts} />}
    />
  );
});