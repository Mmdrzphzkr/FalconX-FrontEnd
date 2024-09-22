"use client";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
  // GraphQL query to fetch BlogPosts
  const GET_SITENAME_NAME = gql`
    query MyQuery {
      siteName {
        displayText
        name
        createdUtc
      }
    }
  `;

  // Use Apollo Client to fetch data
  const { loading, error, data } = useQuery(GET_SITENAME_NAME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.siteName.map((item) => (
          <div key={item.contentItemId}>
            <div>
              {item.displayText} : ({item.name})
            </div>
            <div>Created On : {item.createdUtc}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
