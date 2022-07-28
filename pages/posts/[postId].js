export default function PostDetail({ post }) {
  return (
    <>
      <h2>Post detail </h2>
      <h3>Post title : {post?.title}</h3>
      <h3>Post detail : {post?.body}</h3>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log("context", context);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
