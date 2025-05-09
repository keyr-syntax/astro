const BACKEND_API = "https://test-subdomain.keyrunasir.com";

const fetchallblogs = async () => {
  try {
    const data = await fetch(`${BACKEND_API}/api/blog/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    if (response.success === true) {
      setBlogcontent(response.post);
    } else if (response.success === false) {
      setBlogcontent([]);
    }
  } catch (error) {
    console.log("Error while fetching all blogs", error);
  }
};

//Dynamic routing: to={`/readblog/${blog.id}`}