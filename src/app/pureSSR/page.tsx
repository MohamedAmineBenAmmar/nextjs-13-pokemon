import SSRPokemonTable from "@/components/SSRPokemonTable"

import { store } from "@/store"
import { setStartupPokemon } from "@/store/searchSlice"

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/search")
  const data = await res.json()
  // Example of using redux during SSR time to set data coming from the api call to the store
  store.dispatch(setStartupPokemon(data))

  return (
    <main>
      <SSRPokemonTable />
    </main>
  )
}
