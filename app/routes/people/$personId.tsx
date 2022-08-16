import { PersonCard } from "~/components/personCard";
import { Person } from './index'

type PersonProps = {
  person: Person
}

export default function FilmIdRoute({person}: PersonProps) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", padding: "20px" }}>      
      <PersonCard
        person={person}
      />
    </div>
  );
}
