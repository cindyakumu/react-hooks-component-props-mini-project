import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Blog</h1>
      </header>
      <aside>
        <p>About this blog</p>
      </aside>
      <main>
        <article>
          <h2>First Post</h2>
          <p>Content of the first post</p>
        </article>
      </main>
    </div>
  );
}

export default App;

