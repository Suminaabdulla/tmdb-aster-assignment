// src/store/slices/movieSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API_KEY, MOVIE_API_URL} from '../../constants/apiConstants';
import {POPULAR_MOVIES_API_URL} from '../../constants/apiEndPoints';
import {Movie} from '../../models/movie';

interface InitialState {
  movies: Movie[];
  loading: boolean;
  error?: string;
  totalPages: number;
}

const initialState: InitialState = {
  movies: [],
  loading: false,
  error: '',
  totalPages: 0,
};

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async (page: number) => {
    const response = await fetch(
      `${POPULAR_MOVIES_API_URL}?api_key=${API_KEY}&page=${page}`,
    );
    const data = await response.json();

    return {results: data.results, totalPages: data.total_pages};
  },
);

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({query, page}: {query: string; page: number}) => {
    const response = await fetch(
      `${MOVIE_API_URL}?api_key=${API_KEY}&query=${encodeURIComponent(
        query,
      )}&page=${page}`,
    );
    const data = await response.json();
    return {results: data.results, totalPages: data.total_pages};
  },
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovies.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.movies = [];
      })
      .addCase(searchMovies.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.movies = [];
      });
  },
});

export default movieSlice.reducer;
