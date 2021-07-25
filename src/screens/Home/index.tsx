import React from 'react';
import { Text, View } from 'react-native';

// Components
import { Appointment } from '../../components/Appointment';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';

import { styles } from './style';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ListDivider } from '../../components/ListDivider';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/05 as 20:31h',
      description: 'Hoje  e dia de jogar um CSZIn',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Grand Chase',
        icon: null,
        owner: false,
      },
      category: '1',
      date: '22/05 as 20:31h',
      description: 'Hoje  e dia de jogar um CSZIn',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Tota: 2" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
