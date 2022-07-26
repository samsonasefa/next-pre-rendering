export default function NewsList({ articles }) {
  return (
    <>
      <h2>List of articles</h2>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h4>
              {article.id} {article.title} | {article.category}
            </h4>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
