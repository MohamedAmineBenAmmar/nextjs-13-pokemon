import PokemonTable from "./PokemonTable";
import { store } from "@/store";

function SSRPokemonTable() {
    // Example of using redux during SSR time to display data that we set in the store
  return (
    <div>
      <PokemonTable pokemons={store.getState().search.startupPokemon} />
    </div>
  );
}

export default SSRPokemonTable;