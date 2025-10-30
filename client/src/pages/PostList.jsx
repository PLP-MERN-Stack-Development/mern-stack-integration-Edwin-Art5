import { useEffect, useState } from "react";
import { postService } from "../services/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts()
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post._id} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
