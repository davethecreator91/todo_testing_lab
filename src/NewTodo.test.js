import { render, screen, fireEvent } from '@testing-library/react';
import NewTodo from './NewTodo';
// import test from 'node:test';

// test('clicking the button displays the new created todo', () => {
//     const NewTodo =  render(<NewTodo />);
//     const button = NewTodo.getByText('New Todo')
//     fireEvent.click(button);


test('renders New Todo', () => {
  render(<NewTodo/>);
  const linkElement2 = screen.getByText(/New Todo/i)
  expect(linkElement2).toBeInTheDocument()
})
//   const linkElement = NewTodo.getByText('New Todo');
  // expect(NewTodo).toBeInTheDocument();
// });
