import Link from 'next/link';

export default function Postlist({ posts }) {
  return (
    <>
      <h2>List of posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`}>
            <h3>
              {post?.id}
              {post?.title}
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const postlist = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await postlist.json();

  return {
    props: {
      posts: data,
    },
  };
}
