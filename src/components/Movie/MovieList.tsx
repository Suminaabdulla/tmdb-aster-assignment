import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import {Movie} from '../../models/movie';
import {Styles} from './styles';
import MovieItem from './MovieItem';
import EmptyComponent from '../EmptyComponent';

interface MovieListProps {
  moviesList: Movie[];
  loadMoreMovies: () => void;
}

const MovieList: FC<MovieListProps> = ({moviesList, loadMoreMovies}) => {
  const renderItem = ({item}: {item: Movie}) => <MovieItem movie={item} />;

  return (
    <FlatList
      data={moviesList}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id.toString() + index}
      contentContainerStyle={Styles.flatListContent}
      onEndReached={loadMoreMovies}
      onEndReachedThreshold={0.1}
      // eslint-disable-next-line react-native/no-inline-styles
      ListFooterComponent={<View style={{marginVertical: 10}} />}
      ListEmptyComponent={EmptyComponent}
    />
  );
};

export default MovieList;
