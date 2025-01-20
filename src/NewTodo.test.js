import { render, screen, fireEvent } from '@testing-library/react';
import NewTodo from './NewTodo';

test('clicking the button displays the new created todo', () => {
    const NewTodo =  render(<NewTodo />);
    const button = NewTodo.getByText('New Todo')
    fireEvent.click(button);

//   const linkElement = NewTodo.getByText('New Todo');
  expect(NewTodo).toBeInTheDocument();
});
