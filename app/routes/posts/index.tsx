import { Link, useLoaderData } from 'remix';

export let loader = () => {
  return [
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
};

export default function Posts() {
  let posts = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
