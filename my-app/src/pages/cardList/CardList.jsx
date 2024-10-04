import React, { useEffect, useState } from "react";
import SearchBox from "../../components/common/feature/SearchBox";
import CardItem from "../../components/common/feature/CardItem";

const CardList=()=> {
  const [monstersList, setMonstersList] = useState([]);
  const [newMonstersList, setNewMonstersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonstersList(data);
      setNewMonstersList(data);
    };
    fetchData();
  }, []);

  const searchBox = (p) => {
    const newMonsters = monstersList.filter((monster) => {
      return monster.name.toLowerCase().includes(p.toLowerCase());
    });
    setNewMonstersList(newMonsters);
  };

  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <h1 className="my-10 font-extrabold text-5xl text-violet-950">Monsters Rodolex</h1>
        <SearchBox method={searchBox} />
      </header>
      <main>
        <section className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-10">
          {newMonstersList.map((monster) => {
            return <CardItem key={monster.id} data={monster} />;
          })}
        </section>
      </main>
    </>
  );
}

export default CardList;
