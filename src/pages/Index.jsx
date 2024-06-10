import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <VStack spacing={8} mt={10}>
        <Heading>To-Do App</Heading>
        <VStack w="100%">
          <Input placeholder="Add a new task" value={inputValue} onChange={handleInputChange} />
          <Button colorScheme="blue" onClick={handleAddTask}>Add Task</Button>
        </VStack>
        <List w="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderRadius="lg">
              {task}
              <ListIcon as={FaTrash} color="red.500" cursor="pointer" onClick={() => handleRemoveTask(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Box as="footer" w="full" p={4} bgColor="red.500" />
    </Container>
  );
};

export default Index;