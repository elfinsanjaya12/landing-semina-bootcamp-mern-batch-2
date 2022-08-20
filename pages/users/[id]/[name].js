import React from 'react';
// import { useRouter } from 'next/router';

export default function EditUsers({ user }) {
  // const router = useRouter();

  // console.log(router);
  // console.log(params);

  return (
    <div>
      <ul>
        <li>Name : {user.name}</li>
        <li>Email : {user.email}</li>
        <li>Phone : {user.phone}</li>
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: `${user.id}`, name: `${user.name}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at buzild time
export async function getStaticProps({ params }) {
  // console.log('params >>');
  // console.log(params);
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}/${params.name}`
  );
  const user = await res.json();

  // console.log(user);

  // Pass user data to the page via props
  return { props: { user } };
}
