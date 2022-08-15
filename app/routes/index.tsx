import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { getResources  } from "~/services";
import { ResourceCard } from "~/components/resourceCard";

export let loader: LoaderFunction = async () => {
  return getResources();
}

export default function Index() {
  let resources = useLoaderData();
  let navigate = useNavigate();

  const resourcesArray: string[] = Object.keys(resources);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", padding: "20px" }}>
      <Heading as='h1' size='4xl' noOfLines={1} mb="30px">REMIX WARS</Heading>
      <Grid 
        templateColumns='repeat(3, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={6}
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
