import { Icon } from 'components';
import { woolworths, type Product } from 'lib';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Image, Input, Stack, Text, XStack, YStack } from 'tamagui';
import { debounce, formatMoney } from 'utils';
import { Drawer } from 'expo-router/drawer';

export default function Index (): JSX.Element {
  const [search, setSearch] = React.useState('');
  const [searchedData, setSearchedData] = React.useState<Product[]>([]);

  const searchProducts = React.useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm.length < 3) {
        setSearchedData([]);
        return;
      }

      woolworths.search(searchTerm)
        .then((result) => {
          setSearchedData(result.products);
        })
        .catch((error) => {
          console.error('Error searching', error);
        });
    }, 300),
    []
  );

  const handleSearch = (text: string): void => {
    setSearch(text);
    searchProducts(text);
  };

  return (
    <Stack mx="auto" w="90%" mt="$4">
      <Drawer />

      <XStack jc="space-between">
        <Input
          mt="$4"
          mb="$2"
          w="90%"
          placeholder="Groceries..."
          value={search}
          onChangeText={handleSearch}
        />

        <Stack mt="$2" w="15%" jc="center" ai="center">
          <TouchableOpacity>
            <Icon name="filter" size={24} color="gray" />
          </TouchableOpacity>
        </Stack>
      </XStack>

      <FlatList
        data={searchedData}
        keyExtractor={(item) => item.name ?? ''}
        renderItem={({ item }) => (
          <Stack p="$2" bg="$primary100" w="100%" mt="$2" br="$2">
            <XStack>
              <Image source={{ uri: item.imageLink }} w={75} h={100} />
              <YStack ml="$4" w="80%">
                <Text>{item.name}</Text>
                <Text>{formatMoney(item.priceInCents)}</Text>
              </YStack>
            </XStack>
          </Stack>
        )}
      />
    </Stack>
  );
}
