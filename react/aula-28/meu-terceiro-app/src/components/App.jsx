import Card from './card/Card'
import pokemons from './pokemons';


function App() {
    return (
        <div>
            {pokemons.map(pokemon => <Card key={pokemon.id} numero={pokemon.numero} nome={pokemon.nome}
                atributo={pokemon.atributo} pokemonImage={pokemon.pokemonImage} />)}
        </div>
    );
}

export default App;