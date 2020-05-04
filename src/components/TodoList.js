import React from "react";
import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";
import { CheckBox, Text } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TodoList = ({ todos, onComplete, onDelete }) => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View>
        <Text h4>{item.todo}</Text>
        <Text>{item.todoDescription}</Text>
        <Text>Due Date: {item.dueDate}</Text>
        {item.completed && <Text>Completed Date: {item.cDate}</Text>}
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CheckBox
          checked={item.completed}
          onIconPress={() => onComplete(item.index)}
        />
        <TouchableOpacity onPress={() => onDelete(item.index)}>
          <AntDesign name="delete" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={todos}
        keyExtractor={todo => todo.index}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginTop: 10,
    padding: 5,
    justifyContent: "space-between"
  },
  iconStyle: {
    fontSize: 30,
    marginTop: 10,
    marginRight: 10
  }
});

export default TodoList;
