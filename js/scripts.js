/* ----- Global Variables ----- */
const gallery = document.getElementById('gallery')
const searchContainer = document.querySelector('.search-container')
let employees = [] // Store fetched employee data
let filteredEmployees = [] // Store filtered fetched employee data
let modalIndex = 0 // Track which employee is currently displayed in modal

/* ----- Add Search Form ----- */
const addSearchForm = () => {
  const searchHTML = `
    <form action="#" method="get">
      <input type="search" id="search-input" class="search-input" placeholder="Search...">
      <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
  `
  searchContainer.insertAdjacentHTML('beforeend', searchHTML)

  const searchInput = document.getElementById('search-input')
  searchInput.addEventListener('keyup', () => {
    filterEmployees(searchInput.value)
  })
}

/* ----- Fetch 12 Random Users ----- */
const fetchEmployees = () => {
  fetch('https://randomuser.me/api/?results=12&nat=us')
    .then((response) => response.json())
    .then((data) => {
      employees = data.results
      displayEmployees(employees)
      addSearchForm()
    })
    .catch((err) => console.error('Error fetching data:', err))
}

/* ----- Display Employees in Gallery ----- */
const displayEmployees = (employeeList) => {
  // Clear old gallery
  gallery.innerHTML = ''
  filteredEmployees = employeeList // Keep track of what's displayed
  employeeList.forEach((employee, index) => {
    const employeeHTML = `
      <div class="card" data-index="${index}">
        <div class="card-img-container">
          <img class="card-img" src="${employee.picture.medium}" alt="profile picture ${employee.name.first} ${employee.name.last}">
        </div>
        <div class="card-info-container">
          <h3 class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
          <p class="card-text">${employee.email}</p>
          <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
        </div>
      </div>
    `
    gallery.insertAdjacentHTML('beforeend', employeeHTML)
  })

  // Add click listeners to open modal
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => card.addEventListener('click', openModal))
}

/* ----- Filter Employees by Name ----- */
const filterEmployees = (searchTerm) => {
  const filtered = employees.filter((employee) =>
    `${employee.name.first} ${employee.name.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  displayEmployees(filtered)
}

/* ----- Generate Modal HTML ----- */
const generateModalHTML = (employee) => {
  const dob = new Date(employee.dob.date)
  const birthday = `${dob.getMonth() + 1}/${dob.getDate()}/${dob.getFullYear()}`

  const modalHTML = `
    <div class="modal-container">
      <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
          <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
          <h3 class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
          <p class="modal-text">${employee.email}</p>
          <p class="modal-text cap">${employee.location.city}</p>
          <hr>
          <p class="modal-text">${employee.cell}</p>
          <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.state} ${employee.location.postcode}</p>
          <p class="modal-text">Birthday: ${birthday}</p>
        </div>
      </div>
      <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
      </div>
    </div>
  `

  return modalHTML
}

/* ----- Attach Modal Listeners (DRY) ----- */
const attachModalListeners = () => {
  const modalContainer = document.querySelector('.modal-container')
  const closeBtn = document.getElementById('modal-close-btn')
  const prevBtn = document.getElementById('modal-prev')
  const nextBtn = document.getElementById('modal-next')

  // Remove any existing ESC key listener to avoid duplicates
  document.removeEventListener('keydown', attachModalListeners.escHandler)

  // Close modal on 'X' button
  closeBtn.addEventListener('click', () =>
    document.querySelector('.modal-container').remove()
  )

  // Close modal on 'ESC' key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      document.querySelector('.modal-container')?.remove() // Only if modal container present
      document.removeEventListener('keydown', escHandler) // Remove listner after closing
    }
  }
  document.addEventListener('keydown', escHandler)

  // Close modal if clicking outside modal or button container
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      // Only trigger if the click is directly on overlay
      modalContainer.remove()
      document.removeEventListener('keydown', escHandler)
    }
  })

  // Hide Prev Button on First Employee
  if (modalIndex === 0) {
    prevBtn.disabled = true
    prevBtn.style.opacity = 0.5
    prevBtn.style.cursor = 'not-allowed'
  } else {
    prevBtn.disabled = false
    prevBtn.style.opacity = 1
    prevBtn.style.cursor = 'pointer'
    prevBtn.addEventListener('click', () => navigateModal(-1))
  }

  // Hide Next Button on Last Employee
  if (modalIndex === filteredEmployees.length - 1) {
    nextBtn.disabled = true
    nextBtn.style.opacity = 0.5
    nextBtn.style.cursor = 'not-allowed'
  } else {
    nextBtn.disabled = false
    nextBtn.style.opacity = 1
    nextBtn.style.cursor = 'pointer'
    nextBtn.addEventListener('click', () => navigateModal(1))
  }
}

/* ----- Show Modal (DRY) ----- */
const showModal = (index) => {
  modalIndex = index

  document.querySelector('.modal-container')?.remove() // Remove Old Modal (if it exists)
  document.body.insertAdjacentHTML(
    'beforeend',
    generateModalHTML(filteredEmployees[index]) // Use filteredEmployees to fix error
  )
  attachModalListeners()
}

/* ----- Open Modal ----- */
const openModal = (e) => {
  modalIndex = parseInt(e.currentTarget.getAttribute('data-index'))
  showModal(modalIndex)
}

/* ----- Navigate Modal ----- */
const navigateModal = (direction) => {
  let newIndex = modalIndex + direction

  // Keep index within bounds
  if (newIndex < 0) newIndex = 0
  if (newIndex >= filteredEmployees.length)
    newIndex = filteredEmployees.length - 1

  showModal(newIndex)
}

/* ----- Initialize ----- */
fetchEmployees()
