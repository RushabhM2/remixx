import { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { getResource } from "~/services";
import { ResourceCard } from "~/components/resourceCard";
import { useState } from "react";
import { getIdFromUrl } from '~/utils'

export type Film = {
  id?: string
  title: string
  episode_id: string
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}

type FilmProps = {
  resource: string
}

export let loader: LoaderFunction = async () => {
  return getResource('films');
}

export default function FilmIndex() {
  let films = useLoaderData();
  let navigate = useNavigate();
  const [displayedList, setDisplayedList] = useState(films.results);
  const [displayedFilm, setFilm] = useState<Film | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, film: Film) => {
    console.log('click event', film.title)
    const filmId = getIdFromUrl(film.url)
    setFilm(film)
    console.log('navigation')
    navigate(`${filmId}`, { state: { film } });
    console.log('navigated')
  } 
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", padding: "20px" }}>
      <Grid 
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={3}
      >
        {displayedList.map((film: Film) => (
          <GridItem
            onClick={(e: React.MouseEvent<HTMLDivElement>)=>{handleClick(e, film)}}
            key={film.url}
          >
            {/* <Link to={`${getIdFromUrl(film.url)}`} key={film.url}> */}
              <ResourceCard
                name={film.title}
                image={`https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(film.url)}.jpg`}
              />
            {/* </Link> */}
          </GridItem>
        ))}
      </Grid>
      <Outlet context={displayedFilm}/>
      <p>displayedFilm: {displayedFilm ? displayedFilm['title'] : 'none selected'}</p>
    </div>
  );
}
