# watchMe - Movie App

watchMe is a movie app built with React that allows users to search for movies, view popular movies, and get movie details. It leverages the power of TheMovieDB API to fetch movie data.

![watchMe Preview](./src/assets/head-bg.svg)

## Features

- Search for movies by title
- View popular movies
- Get detailed information about a movie
- Watch movies through the app (Note: Streaming functionality not implemented)

## Technologies Used

- React
- Axios
- Framer Motion
- react-bootstrap
- Animate.css

## Getting Started

To get started with the watchMe app, follow these steps:

1. Clone the repository: `git clone https://github.com/Gozkybrain/watcheMe`
2. Install the dependencies: `npm install`
3. Obtain an API key from TheMovieDB API: [https://www.themoviedb.org/](https://www.themoviedb.org/)
4. Replace the placeholder API key in the code with your own API key. (See instructions in the code files)
5. Start the development server: `npm start`
6. Open the app in your browser: [http://localhost:3000](http://localhost:3000)

## Project Structure

The project structure is organized as follows:

- `src/`
  - `assets/` - Contains static assets like images and stylesheets
  - `components/`
    - `Navigation.js` - Renders the navigation links and app logo.
    - `SearchBar.js` - Provides a search input field to search for movies.
    - `MovieCard.js` - Displays a movie thumbnail, title, and year.
    - `MovieDetails.js` - Displays detailed information about a movie (description, actors, watch button).
    - `InfiniteScroll.js` - Implements the infinite scroll functionality for popular movies.
    - `SearchResult.js` - Renders the search results based on the user's query.
    - `VideoModal.js` - Displays a modal with an embedded YouTube video.
  - `services/` - Contains functions for making API requests
  - `App.js` - Entry point of the application
  - `index.js` - Renders the app into the DOM

## Navigation Component

The `Navigation` component is responsible for rendering the navigation links and app logo in the app's header. It utilizes the `react-bootstrap` library for styling and responsiveness.

The navigation links include options to navigate to the "Recently Added" section, "Upcoming" section, "Developer Profile," and "Documentation." The "Developer Profile" link directs users to the developer's profile page on [https://www.gozkybrain.com.ng/gee-brain/](https://www.gozkybrain.com.ng/gee-brain/). The "Documentation" link redirects users to the project's GitHub repository [https://github.com/Gozkybrain/watcheMe](https://github.com/Gozkybrain/watcheMe).

The `Navigation` component also includes a search form for users to search for movies by title. The search functionality is implemented in the `SearchBar` component.

## Search Functionality

The watchMe app provides a search feature that allows users to search for movies by their title. Here's how the search functionality works:

1. Enter a movie title in the search bar.
2. Press the "Search" button or hit Enter to initiate the search.
3. The app will fetch the search results from the TheMovieDB API using the Axios library.
4. The search results will be displayed on the screen, showing the movie titles and other relevant information.
5. Clicking on a movie from the search results will show more detailed information about that movie.

The search functionality is implemented in the `SearchBar` component. It makes an API request to TheMovieDB API and updates the search results in the `SearchResult` component.

## Popular Movies and Infinite Scroll

The watchMe app also provides a section to view popular movies. The popular movies are fetched from TheMovieDB API and displayed using the `InfiniteScroll` component.

The `InfiniteScroll` component implements the infinite scroll functionality, allowing users to scroll through an ever-growing list of popular movies. As the user scrolls, more movies are automatically loaded and appended to the list.

## Movie Details and Video Modal

When a user clicks on a movie thumbnail or title in the search results or popular movies, the app displays more detailed information about that movie using the `MovieDetails` component. The `MovieDetails` component shows the movie description, actors, and a button to watch the movie.

The `VideoModal` component displays a modal with an embedded YouTube video. It allows users to watch movies through the app, although the streaming functionality is not implemented in this version.

## Roadmap

Here's a step-by-step guide to building the watchMe app:

1. **Project Setup**: Set up a new React project with the necessary dependencies like React, Axios, Framer Motion, and react-bootstrap.
2. **Create Necessary Components**: Create the required components, including Navigation, SearchBar, MovieCard, MovieDetails, InfiniteScroll, SearchResult, and VideoModal.
3. **API Integration for Search**: Implement API integration for the search functionality. Use the API to fetch movie data based on the user's search query.
4. **Fetch and Display Popular Movies**: Utilize the API to fetch the most popular movies. Display them using the InfiniteScroll component.
5. **Movie Detail Modal**: Create a modal component to display detailed information about a movie when a user clicks on a movie thumbnail or title.
6. **Video Modal**: Implement the VideoModal component to display an embedded YouTube video when a user clicks on the watch button in MovieDetails.
7. **Styling**: Style the components to achieve the desired UI/UX. Use CSS or a styling library like styled-components.
8. **Testing and Debugging**: Test the app thoroughly and fix any bugs or issues that arise during testing.
9. **Deployment**: Deploy the app to a hosting service such as Netlify or Heroku to make it accessible to others.

## Resources

Here are some resources that might be helpful for building the watchMe app:

- [React documentation](https://reactjs.org/docs)
- [Axios documentation](https://axios-http.com/docs/intro)
- [Framer Motion documentation](https://www.framer.com/api/motion/)
- [react-bootstrap documentation](https://react-bootstrap.github.io/)
- [Animate.css](https://animate.style/)


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


