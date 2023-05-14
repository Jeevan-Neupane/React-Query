import { useState } from "react";
import { useAddSuperHeroData, useGetSuperHero } from "../Hooks/useMutation";

function Mutation() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const changeName = (events) => {
    setName(events.target.value);
  };
  const changeAlterEgo = (events) => {
    setAlterEgo(events.target.value);
  };
  const { mutate } = useAddSuperHeroData();
  const addHero = (events) => {
    events.preventDefault();
    const hero = {
      name,
      alterEgo,
    };
    mutate(hero);

    setName("");
    setAlterEgo("");
  };

  const { data, isLoading } = useGetSuperHero();

  const renderedList = data?.data.map((hero) => {
    return (
      <div className="border p-3 mt-5" key={hero.id}>
        <h2 className="text-3xl">{hero.name}</h2>
        <h2>{hero.alterEgo}</h2>
      </div>
    );
  });

  return (
    <div className="mt-6 mx-5">
      <form onSubmit={addHero} className="flex gap-4">
        <input
          placeholder="name"
          value={name}
          onChange={changeName}
          className="border outline-none p-1"
        />
        <input
          placeholder="alterEgo"
          value={alterEgo}
          onChange={changeAlterEgo}
          className="border outline-none p-1"
        />
        <button onClick={addHero} className="bg-slate-800 text-white px-3 py-1">
          Add
        </button>
      </form>
      <div>{renderedList}</div>
    </div>
  );
}

export default Mutation;
