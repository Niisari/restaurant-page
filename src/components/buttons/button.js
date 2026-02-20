import './button.css'

export const button = (text = "Click me", path = "/") => {
  // We add 'data-path' so the App knows where to navigate
  return `<button type="button" class="button" data-path="${path}">${text}</button>`;
};