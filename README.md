# Netflix Clone

- **Checkout branch "React-View" for frontend only Netflix Clone with React Redux**

---

## Quick Links

[Demo](#demo)

- [Live Site Demo](#live-site-demo)

[Tech Stack](#tech-stack)

[Implementation Hightlights](#Implementation-Hightlights)

- [User Stories](#user-stories)
- [Current Plans for Expansion](#current-plans-for-expansion)
- [Future Plans for Expansion](#future-plans-for-expansion)

[Getting Started](#getting-started)

- [Netflix Clone](#netflix-clone)
  - [Quick Links](#quick-links)
  - [Demo](#demo)
    - [Live Site Demo](#live-site-demo)
  - [Tech Stack](#tech-stack)
  - [Implementation Highlights](#implementation-highlights)
    - [User Stories](#user-stories)
    - [Future Plans for Expansion](#future-plans-for-expansion)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
      - [Tools \& Versions](#tools--versions)
    - [Serving Application](#serving-application)
      - [Tedwatch Server](#tedwatch-server)
      - [Tedwatch Client](#tedwatch-client)
  - [Deployment](#deployment)
  - [Author](#author)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

[Deployment](#deployment)

[Author](#author)

[Acknowledgments](#acknowledgments)

---

## Demo

### Live Site Demo

Demo: [Link](https://tedwatch.onrender.com)


---

## Tech Stack

- [React](https://github.com/facebook/react) . [TMDB](https://www.themoviedb.org/)
  - web client & client data management
- [Node.js](https://github.com/nodejs) ∙ [Expressjs](https://github.com/expressjs/express)
  - web server & services in service oriented architecure
- [MongoDb](https://www.mongodb.com/)
  - persisted database for users

---

## Implementation Highlights

- single page application web client with Vanilla Javascript and React.
- service oriented architecure backend
- REST for client server communication, JSON for inter service communication
- scrape raw movie data from TMDB
- provides processed TMDB movies data with our movie service API
- MongoDb for user's database

### User Stories

- users can register and log in to their account
- landing page has collections of movies and series which are popular
- users can search for movies or series
- users can browse search result by pages
- users can select and view details of any movie or series
- users can add their review and rating in the movie/series details page
- users can add or remove movie/series to his/her watchlist


### Future Plans for Expansion

- Optimize the app
- Add recommendation system features for all users?
- Add payment gateway like Razorpay?
- scrape and stream videos for movies and series?

---

## Getting Started

### Prerequisites

**!important** .env file is required for setting up environment variables for this project  
 an example of .env file is located at root directory

#### Tools & Versions

| Tools         | Versions |
| ------------- | -------- |
| react         | 18.2.0   |
| npm           | 6.1.0    |
| nodejs        | 10.7.0   |
| express       | 4.18.2   |
| mongoose      | 7.4.2    |


### Serving Application

#### Tedwatch Server

- install dependencies & start Server

```terminal
cd Server
npm install
npm start
```

Application will be serving on http://localhost:8000

#### Tedwatch Client

- install dependencies & start application

```terminal
cd Client
npm install
npm start
```

Application will be serving on http://localhost:3000

---

## Deployment

- This app is already deployed on Renderer

---

## Author

- Manoj Kumar Sahoo

---

## License

This project is licensed under the Manoj Sahoo

---

## Acknowledgments

- No

---