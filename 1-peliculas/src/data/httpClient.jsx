const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzUxNjRiOGQzNmE3OWJjZGEwYzUyOWY0NTQ2NzEwNyIsInN1YiI6IjY0MjljMzA0YjM5ZTM1MDA3N2NjNDkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14y3RkpQtIgXgQkmP2HOMS-5B5c0uk1kGKNzqMltJrU",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
