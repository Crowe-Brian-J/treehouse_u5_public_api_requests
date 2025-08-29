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
  - Search Bar added at top-right of page
  - Followed Search Markup in index.html

2. Add Modal Toggle Functionality
  - Modal Button Container added below Modal Container
    - Previous and Next Buttons
    - Previous disabled at index 0
    - Next disabled at index 11
  - Followed Modal Button Container Markup in index.html

3. Add Custom Styling - styles.css
  - Change at least one of the following CSS styles
    [X]. Color
    [X]. Background Color
    [X]. Font
    [X]. Box or Text Shadows
  - Document Your Style Changes (here and in project submission notes)

    1. Updates 
      - Font to "Inter" (ln 17)
      - Search Input padding, border, and border radius (lns 38-40)
      - Search Submit border and border radius (lns 54 & 55)
      - Search Icon Background Color on active, hover, and focus (ln 60)
      - Card border radius and transition (lns 93 & 96)
      - Modal border radius (ln 153)
      - Modal Button Container border radius (ln 202)
      - Modal Button Container Buttons padding, border radius, and transition (lns 213, 215, & 216)
    2. Adds
      - H3 Card Name Color (ln 79)
      - Card Box Shadow (ln 95)
      - Card Hover Transform (lns 121-125)
      - Modal Box Shadow & Animation (lns 155 & 156)
      - Modal Button Container Buttons (when not disabled)
    3. Removals
      - Search Icon Border on active, hover, and focus (ln 60)
      - Modal Transition (ln 156)