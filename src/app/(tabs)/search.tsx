import { woolworths, type Product } from 'lib';
import React from 'react';
import { FlatList } from 'react-native';
import { Input, Stack, Text } from 'tamagui';
import { formatMoney } from 'utils';

export default function Search (): JSX.Element {
  const [search, setSearch] = React.useState('');
  const [searchedData, setSearchedData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    if (search.length < 3) {
      setSearchedData([]);
      return;
    }

    woolworths.search(search)
      .then((result) => {
        setSearchedData(result.products);
      })
      .catch((error) => {
        console.error('Error searching', error);
      });
  }, [search]);

  return (
    <Stack ai='center'>
      <Stack w='90%' mt='$4'>
        <Input
          mt='$4'
          placeholder='Groceries...'
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={searchedData}
          keyExtractor={item => (item.name ?? '')}
          renderItem={({ item }) => (
            <Stack p='$2' bg='white' w="100%" mt='$2' br='$2'>
              <Text>{item.name}</Text>
              <Text>{formatMoney(item.priceInCents)}</Text>
            </Stack>
          )}
        />
      </Stack>
    </Stack>
  );
}
