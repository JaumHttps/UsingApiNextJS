export default async function Home() {
  const data = await fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then( (response) => console.log(response));

  return (
    <div>
      <h1>Home Page</h1>
      <p>{}</p>
    </div>
  );
}