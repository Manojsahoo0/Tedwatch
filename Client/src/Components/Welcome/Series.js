import Card from 'react-bootstrap/Card';
import * as React from 'react';
import { useState, useEffect } from 'react';
import "./Welcome.css"
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer.js'
import Genres from "./Genres";
import useGenre from "./useGenre";

export default function Series() {

const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  let name = JSON.parse(localStorage.getItem("user")).name;
  
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.REACT_APP_AUTH}`,
      },
    };

    let data = await fetch(
      `https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`,
      options
    );
    let response = await data.json();
    setContent(response.results);
    // setSpinner(false)
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  const handlePrevious = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div style={{ color: "white" }}>
      <Navbar />
      <div className='d-flex genre'>
        <Genres
            className='tag'
            type="tv"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
        />
      </div>
      <div className="trending">
        <div className="text-center">
          <h1>Results</h1>
        </div>
        <br />
        <div className="searchCard">
          {content &&
            content.map((c) => {
              return (
                <Link to={`/welcome/tv/${c.id}`} key={c.id}>
                  {c.backdrop_path && (
                    <Card
                      className="card"
                      data-testid="movie-card"
                      style={{
                        width: "18rem",
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("https://image.tmdb.org/t/p/original${c.backdrop_path}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <Card.Body
                        style={{
                          position: "absolute",
                          bottom: "0",
                          margin: "0 auto",
                        }}
                      >
                        <h6 style={{ color: "white" }}>{c.name || c.title}</h6>
                      </Card.Body>
                    </Card>
                  )}
                </Link>
              );
            })}
          {content && (
            <div className="container d-flex justify-content-evenly">
              <Button
                variant="primary"
                onClick={handlePrevious}
                disabled={page < 2}
              >
                &larr; Previous
              </Button>
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={page === content.total_pages}
              >
                Next &rarr;
              </Button>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer name={name} />
      </div>
    </div>
  );
}
