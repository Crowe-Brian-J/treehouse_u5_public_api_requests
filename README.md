# Public API Requests

A web app that fetches random employee data from the [Random User Generator API](https://randomuser.me/) and displays 12 employees in a searchable gallery. Users can view employee details in a modal with navigation between employees.

---

## Features

- Fetches 12 random employees from the US
- Search bar to filter employees by name
- Click any employee card to view full details in a modal
- Modal navigation with previous/next buttons
- Edge case handling (buttons disabled at first/last employee)

---

## Technologies

- HTML
- CSS
- JavaScript (ES6+)
- Random User Generator API

---

## How to Run

1. Clone or download this repository  
2. Open `index.html` in your browser  

---

## Exceeds Expectations

1. Add Search Functionality
  &nbsp; - Search Bar added at top-right of page
  &nbsp; - Followed Search Markup in index.html

2. Add Modal Toggle Functionality
  &nbsp; - Modal Button Container added below Modal Container
    &nbsp; &nbsp; - Previous and Next Buttons
      &nbsp; &nbsp; &nbsp; - Previous disabled at index 0
      &nbsp; &nbsp; &nbsp; - Next disabled at index 11
  &nbsp; - Followed Modal Button Container Markup in index.html

3. Add Custom Styling - styles.css
  &nbsp; - Change at least one of the following CSS styles
    &nbsp; &nbsp; [X]. Color
    &nbsp; &nbsp; [X]. Background Color
    &nbsp; &nbsp; [X]. Font
    &nbsp; &nbsp; [X]. Box or Text Shadows
  &nbsp; - Document Your Style Changes (here and in project submission notes)

    &nbsp; 1. Updates 
      &nbsp; &nbsp; - Font to "Inter" (ln 17)
      &nbsp; &nbsp; - Search Input padding, border, and border radius (lns 38-40)
      &nbsp; &nbsp; - Search Submit border and border radius (lns 54 & 55)
      &nbsp; &nbsp; - Search Icon Background Color on active, hover, and focus (ln 60)
      &nbsp; &nbsp; - Card border radius and transition (lns 93 & 96)
      &nbsp; &nbsp; - Modal border radius (ln 153)
      &nbsp; &nbsp; - Modal Button Container border radius (ln 202)
      &nbsp; &nbsp; - Modal Button Container Buttons padding, border radius, and transition (lns 213, 215, & 216)
    &nbsp; 2. Adds
      &nbsp; &nbsp; - H3 Card Name Color (ln 79)
      &nbsp; &nbsp; - Card Box Shadow (ln 95)
      &nbsp; &nbsp; - Card Hover Transform (lns 121-125)
      &nbsp; &nbsp; - Modal Box Shadow & Animation (lns 155 & 156)
      &nbsp; &nbsp; - Modal Button Container Buttons (when not disabled)
    &nbsp; 3. Removals
      &nbsp; &nbsp; - Search Icon Border on active, hover, and focus (ln 60)
      &nbsp; &nbsp; - Modal Transition (ln 156)