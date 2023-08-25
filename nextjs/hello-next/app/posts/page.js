// Static metadata

// export const metadata = {
//   title: 'Home',
// };

// OUTPUT: 
/*
<head>
  <title>Home</title>
</head>
*/

//---------------------------------

// Dynamic Metadata

export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);

  return { title: product.title };
};

const page = () => {
  return (
    <div>POSTS</div>
  );
};

export default page;
