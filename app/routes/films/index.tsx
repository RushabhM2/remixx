import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { getResources  } from "~/services";
import { ResourceCard } from "~/components/resourceCard";

export let loader: LoaderFunction = async () => {
  return getResources();
}

export default function FilmIndex() {
  let resources = useLoaderData();
  let navigate = useNavigate();

  const resourcesArray: string[] = Object.keys(resources);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", padding: "20px" }}>
      <Grid 
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={3}
      >
        {resourcesArray.map((resource: string) => (
          <GridItem>
            <Link to={`${resource}`} key={resource}>
              <ResourceCard
                name={resource}
                image={`https://starwars-visualguide.com/assets/img/categories/${resource == 'people' ? 'character' : resource}.jpg`}
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
