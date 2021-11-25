import { Link, useLoaderData } from 'remix';

type Post = {
  slug: string;
  title: string;
};

export let loader = () => {
  let posts: Post[] = [
    {
      slug: 'my-first-post',
      title: 'My first post',
    },
    {
      slug: 'my-second-post',
      title: 'My second post',
    },
    {
      slug: 'my-third-post',
      title: 'My third post',
    },
  ];

  return posts;
};

export default function Posts() {
  let posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
