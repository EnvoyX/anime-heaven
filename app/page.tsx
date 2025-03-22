import LoadMore from "../components/LoadMore";
import { fetchAnime } from "@/lib/action";

async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="md:-my-16 -my-0 md:p-16 p-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 md:gap-5">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
