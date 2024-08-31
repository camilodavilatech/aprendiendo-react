import { useEffect, useState } from "react";
import Card from "../Card";

export default function RickAndMorty() {
  // const {key} = {key: value}
  // const [a, ...res] = [2, 3, 4]
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    console.log("useEffect");
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <div className="container">
        {data.results.length === 0 ? (
          <p>no hay datos</p>
        ) : (
          data.results.map((data) => <Card key={data.id} {...data} />)
        )}
      </div>
    </main>
  );
}
