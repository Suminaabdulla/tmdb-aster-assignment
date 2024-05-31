import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import SearchBar from '../../components/SearchBar';
import {fetchPopularMovies, searchMovies} from '../../store/slices/movieSlice';
import {Movie} from '../../models/movie';
import {useAppDispatch, useAppSelector} from '../../hooks/useApiService';
import {Styles} from './styles';
import MovieList from '../../components/Movie/MovieList';

const MovieListing = () => {
  const dispatch = useAppDispatch();
  const {movies, loading, error, totalPages} = useAppSelector(
    state => state.movies,
  );
  const [moviesList, setMovieList] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const getMovies = useCallback(
    () => dispatch(fetchPopularMovies(page)),
    [dispatch, page],
  );

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    if (page > 1) {
      setMovieList([...moviesList, ...movies]);
    } else if (page === 1) {
      setMovieList(movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, movies, search]);

  const handleSearch = (query: string) => {
    setSearch(query);
    setPage(1);
    if (query) {
      dispatch(searchMovies({query, page: 1}));
    } else {
      getMovies();
    }
  };

  const loadMoreMovies = () => {
    if (page < totalPages) {
      setPage(page + 1);
      getMovies();
    }
  };

  return (
    <View style={Styles.container}>
      <SearchBar onSubmit={handleSearch} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={Styles.loadingIndicator}
        />
      ) : error ? (
        <Text style={Styles.errorText}>Error: {error}</Text>
      ) : (
        <MovieList moviesList={moviesList} loadMoreMovies={loadMoreMovies} />
      )}
    </View>
  );
};

export default MovieListing;
