import { Chip } from '@mui/material';
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjRlNjI5YzIyZjFmMTU3MTgwNTZiMDAxMWQxMGMzNiIsInN1YiI6IjY0Y2E0OTg2MGI3NGU5MDE0ZDgwMWZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jfr2UDbJJuqd0g7igrWqn8l-wyFFZRQF5GoJMA5B3w'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options)
        .then(response => response.json())
        .then(response => setGenres(response.genres))
        .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          
          style={{ margin: 3,color:"white"}}
          label={genre.name}
          key={genre.id}
          clickable
          color='primary'
          size="large"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres&&genres.map((genre) => (
        <Chip
          style={{ margin: 4,color:"white",backgroundColor:"#0096FF"}}
          label={genre.name}
          key={genre.id}
          
          clickable
          size="large"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
