import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TodoList = ({ Todos, onRemove, onToggle }) => {
  return (
    <FlatList
      data={Todos}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.item,
            item.checked ? styles.checkedItem : styles.uncheckedItem,
          ]}
          onPress={onToggle(item.id)}
          onLongPress={onRemove(item.id)}
        >
          <Text style={styles.itemText}>{item.textValue}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Todos</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
  item: {
    padding: 16,
    borderRadius: 8,
  },
  checkedItem: {
    backgroundColor: 'lightgreen',
  },
  uncheckedItem: {
    backgroundColor: 'lightcoral',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoList;
