import React, {FC, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({onSubmit}) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSubmit(query);
    Keyboard.dismiss();
  };

  const clearSearch = () => {
    setQuery('');
    onSubmit('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a movie"
        value={query}
        onChangeText={value => setQuery(value)}
        onSubmitEditing={handleSearch}
      />
      {query ? (
        <TouchableOpacity onPress={clearSearch}>
          <MaterialIcons
            name={'clear'}
            size={18}
            color={colors.gray}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={handleSearch}>
        <AntDesign
          name={'search1'}
          size={18}
          color={colors.gray}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 0.5,
    color: colors.gray,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});
