import {screen, render} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import Home from './page'


test('demo test', () => {
    render(<Home></Home>)

    expect(screen.getByText(/hello world/i)).toBeVisible();
})

test('There should be a button that says "press me"', () => {
    render(<Home></Home>)


    expect(screen.getByRole('button',{name: /press me/i})).toBeVisible();
})

test('There should be a button that says "press me"', async () => {
    render(<Home></Home>)

    await userEvent.click(screen.getByRole('button',{name: /press me/i}));

    expect(screen.getByText(/welcome to webdev club/i)).toBeVisible();
})