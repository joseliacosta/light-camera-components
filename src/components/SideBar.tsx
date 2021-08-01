import { Button } from "./Button";
import { GenreResponseProps } from '../App'

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenre: number;
  changeGenreSelection: (selectedGenre: number) => void;
}

export function SideBar(props: SideBarProps) {
  const { genres, selectedGenre, changeGenreSelection } = props
  return <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => changeGenreSelection(genre.id)}
          selected={selectedGenre === genre.id} />
      ))}
    </div>

  </nav>;
}