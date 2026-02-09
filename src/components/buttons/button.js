import './button.css'

export const button = (text = "Click me") => {
  return `<button type="button" class="button">${text}</button>`;
};