import express, { Express,Request, Response } from 'express'; 
import { connectDB } from './db';
import { Todo, ITodo } from './models/todo';
import dotenv from 'dotenv';

const app :Express= express();

app.use(express.json()); 

// Connect to MongoDB
connectDB();

// Get all todos
app.get('/todos', async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);  // Log error for debugging
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

// Create a new todo
app.post('/todos', async (req: Request, res: Response) => {
  
 

  try {
    const newTodo = new Todo({
      title:req.body.title,
      completed: false  // Default value if not provided
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);  // Log error for debugging
    res.status(500).json({ message: 'Error creating todo' });
  }
});


// // Get a specific todo by ID
// app.get('/todos/:id', async (req: Request, res: Response) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) {
//       return res.status(404).json({ message: 'Todo not found' });
//     }
//     res.json(todo);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching todo' });
//   }
// });

// // Update a todo by ID
// app.put('/todos/:id', async (req: Request, res: Response) => {
//   const { title, completed } = req.body;
//
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) {
//       return res.status(404).json({ message: 'Todo not found' });
//     }
//
//     if (title !== undefined) todo.title = title;
//     if (completed !== undefined) todo.completed = completed;
//
//     await todo.save();
//     res.json(todo);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error updating todo' });
//   }
// });

// // Delete a todo by ID
// app.delete('/todos/:id', async (req: Request, res: Response) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) {
//       return res.status(404).json({ message: 'Todo not found' });
//     }
//
//     await todo.remove();
//     res.status(204).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error deleting todo' });
//   }
// });

const PORT = process.env.PORT || 3002;;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
