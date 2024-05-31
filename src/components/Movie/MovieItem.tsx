import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGE_BASE_URL} from '../../constants';
import {Movie} from '../../models/movie';
import {Styles} from './styles';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: FC<MovieItemProps> = ({movie}) => {
  return (
    <View style={Styles.container}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}
        style={Styles.poster}
      />

      <View style={Styles.details}>
        <Text style={Styles.title}>{movie.title}</Text>
        <Text style={Styles.releaseDate}>{movie.release_date}</Text>
        <Text numberOfLines={3} style={Styles.overview}>
          {movie.overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieItem;
