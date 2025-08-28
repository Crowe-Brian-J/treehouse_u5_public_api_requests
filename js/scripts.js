/* ----- Global Variables ----- */
const gallery = document.getElementById('gallery')
let employees = [] // Store fetched employee data
let modalIndex = 0 // Track which employee is currently displayed in modal

/* ----- Fetch 12 Random Users ----- */
const fetchEmployees = () => {
  fetch('https://randomuser.me/api/?results=12&nat=us')
    .then((response) => response.json())
    .then((data) => {
      employees = data.results
      displayEmployees(employees)
    })
    .catch((error) => console.error('Error fetching data:', error))
}

/* ----- Display Employees in Gallery ----- */
const displayEmployees = (employeeList) => {
  employeeList.forEach((employee, index) => {
    const employeeHTML = `
      <div class="card" data-index="${index}">
        <div class="card-img-container">
          <img class="card-img" src="${employee.picture.medium}" alt="profile picture">
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

/* ----- Open Modal ----- */
const openModal = (e) => {
  modalIndex = parseInt(e.currentTarget.getAttribute('data-index'))
  const employee = employees[modalIndex]

  document.body.insertAdjacentHTML('beforeend', modalHTML)

  const closeBtn = document.getElementById('modal-close-btn')
  // Close Modal
  closeBtn.addEventListener('click', () => {
    document.querySelector('.modal-container').remove()
  })
}

/* ----- Initialize ----- */
fetchEmployees()
