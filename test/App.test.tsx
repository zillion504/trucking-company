/*
@jest-environment jsdom
*/

import { render, screen } from "@testing-library/react"
import App from "App"

test("renders company name", () => {
  render(<App />)
  const linkElement = screen.getByText(/Roadrunner Logistics/i)
  expect(linkElement).toBeInTheDocument()
})
