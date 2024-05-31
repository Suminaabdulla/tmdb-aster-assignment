import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    margin: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 14,
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
  },
  flatListContent: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
