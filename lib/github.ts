export async function fetchPinnedRepos() {
const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query: `{
            user(login: \"AviRahimov\") {
                pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                        ... on Repository {
                            name
                            description
                            url
                            homepageUrl
                            languages(first: 3) {
                                nodes { name }
                            }
                        }
                    }
                }
            }
        }`
    })
});
  const json = await response.json();
  return json.data.user.pinnedItems.nodes;
}