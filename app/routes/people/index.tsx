import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { getResource } from "~/services";
import { ResourceCard } from "~/components/resourceCard";
import { useState } from "react";
import { getIdFromUrl } from '~/utils'

export type Person = {
  id?: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

type PeopleProps = {
  resource: string
}

export let loader: LoaderFunction = async () => {
  return getResource('people');
}

export default function PeopleIndex() {
  let people = useLoaderData();
  let navigate = useNavigate();
  const [displayedList, setDisplayedList] = useState(people.results);

  const handleClick = (event: Event, person: Person) => {
    const filmId = getIdFromUrl(person.url)
    
  } 
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", padding: "20px" }}>
      <Grid 
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={3}
        >
        {displayedList.map((person: Person) => (
          <GridItem>
            {/* <Link to={`${getIdFromUrl(film.url)}`} key={film.url}> */}
              <ResourceCard
                name={person.name}
                image={`https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(person.url)}.jpg`}
              />
            {/* </Link> */}
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
