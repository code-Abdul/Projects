import React, { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EvilIcons } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import moment from "moment";

const TodoInput = ({ onSubmitTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <View style={{ marginVertical: 20 }}>
      <Input
        label="Name"
        style={styles.textStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="name"
        value={todoName}
        onChangeText={setTodoName}
      ></Input>

      <Input
        label="Description"
        style={styles.textStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="description"
        value={todoDescription}
        onChangeText={setTodoDescription}
      ></Input>

      <TouchableOpacity onPress={() => setShow(true)}>
        <View style={styles.container}>
          <TextInput
            style={styles.textStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={moment(date).format("L")}
            editable={false}
          />

          <EvilIcons name="calendar" style={styles.iconStyle} />
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          placeholder="select date"
          onChange={(e, d) => {
            setShow(false);
            setDate(new Date(d));
          }}
        />
      )}
      <Button
        title="Add todo"
        onPress={() => {
          onSubmitTodo(todoName, todoDescription, date);
          Keyboard.dismiss();
          setTodoDescription("");
          setTodoName("");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
    justifyContent: "flex-start"
  },
  iconStyle: {
    fontSize: 55
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    height: 45,
    width: 200,
    padding: 5
  }
});

export default TodoInput;
