import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";

// This component is a server component by default in the app directory
const Home = async () => {
  // Fetch data on the server
  const res = await fetch("https://dummyjson.com/products/?limit=8", {
    // Make sure to use cache options to control caching in SSR
    cache: "no-store", // or "force-cache" if you want to cache it
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div>
      <Hero />
      <Products data={data} our={"Our Products"} />
    </div>
  );
};

export default Home;
