import { FilmCard } from "~/components/filmCard";
import { LoaderFunction } from "@remix-run/node";
import { useLocation, useLoaderData } from "@remix-run/react";
import { Film } from './index'
import { getItem } from '../../services';

export let loader: LoaderFunction = async ( { params } ) => {
  if (params.filmId) {
    return getItem('films', params.filmId);
  }
}

export default function FilmIdRoute() {
  const { state } = useLocation()
  const film: Film = state ? state.film : useLoaderData()
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", padding: "20px" }}>
      <FilmCard
        film={film}
      />
    </div>
  );
}
