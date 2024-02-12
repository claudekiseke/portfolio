import { Brands } from "@/components/Brands/Brands";
import { FeaturedWork } from "@/components/FeaturedWork/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form/Form";
import { Hero } from "@/components/Hero/Hero";
import { PostCard } from "@/components/PostCard";

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!res.ok) {
    console.log('error');
  }

  return res.json()
}

export default async function Home() {
  const posts = await fetchPosts()

  return (
    <>
      <Hero />
      <main>
        {/* <Brands />
        <FeaturedWork />
        <Form /> */}
      </main>
      <Footer copyrightText='© 2024 Claude Kiseke. All right reserved.' />
    </>
  );
}
