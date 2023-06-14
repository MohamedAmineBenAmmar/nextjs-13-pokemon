import SearchInput from "@/components/SearchInput";
import Providers from "@/components/Provider";
import Preloader from "@/components/Preloader";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/search");
  const data = await res.json();

  // Example of using redux during SSR time to set data coming from the api call to the store
  store.dispatch(setStartupPokemon(data)); // This will set the data to the store (server side)
  // ||
  // ||
  // \/
  // We will do the same thing but in the client side (client side in the Preloadr component)
  return (
    <main>
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
