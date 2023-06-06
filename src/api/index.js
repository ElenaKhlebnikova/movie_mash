const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjA4MTUzNjMzNzM3MTAwNzM3NzI0ZDQ2N2E5M2QzYSIsInN1YiI6IjY0NzVkMTE4ZGQyNTg5MDEyMDA1ZTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rO_E2ULkrBXLFMvl92-gnZdQHoqGWd0gmkRP4cGi9n0",
  },
};

// you must export using named exports because it's cleaner and hyp
export const fetchMulti = async (value) => {
  // check if include_adult value is fasle or actually false
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${value.queryKey}&include_adult=fasle&language=en-US&page=1`,
    options
  );
  return response.json();
};

export const fetchGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );

  return response.json();
};

export const fetchCastAndCrew = async ({ queryKey }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${queryKey[2]}/${queryKey[1]}/aggregate_credits?language=en-US`,
    options
  );

  return response.json();
};

export const fetchOneMovie = async ({ queryKey }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${queryKey[1]}/${queryKey[0]}?language=en-US`,
    options
  );

  return response.json();
};

export const fetchOnePerson = async ({ queryKey }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${queryKey[1]}?language=en-US`,
    options
  );

  return response.json();
};

export const fetchPersonCredits = async ({ queryKey }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${queryKey[1]}/combined_credits?language=en-US`,
    options
  );

  return response.json();
};
