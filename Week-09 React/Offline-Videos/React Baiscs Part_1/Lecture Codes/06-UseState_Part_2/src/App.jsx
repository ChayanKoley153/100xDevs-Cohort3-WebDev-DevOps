import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.title}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Chayan Koley",
        subtitle: "2000 followers",
        time: "12m ago",
        image:
          "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png",
        description: "Heyy Everyone!",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
