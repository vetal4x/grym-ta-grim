/* Hamburger */

const header = document.querySelector('.header');
const hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('open');
  document.body.classList.toggle('lock');
});

/*  Close Mobile Menu after click on anchor links */

document.querySelectorAll('.mobile-menu__navigation-item').forEach(item => {
  item.addEventListener('click', () => {
    header.classList.remove('open');
    document.body.classList.remove('lock');
  });
});

/*  Ticket Modal */

const ticketModal = document.getElementById("ticketModal");
const ticketModalClose = document.getElementById("ticketModalClose");
const ticketForm = document.getElementById("ticketForm");

// Order ticket button

const ticketButtons = document.querySelectorAll(".events__line-button");

// Open Modal Window and compensate for scrollbar width

function openModal() {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = scrollBarWidth + "px";
  ticketModal.classList.add("ticket-modal--active");
}

// Close Modal Window

function closeModal() {
  ticketModal.classList.remove("ticket-modal--active");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

// Open Modal Window by click on button

ticketButtons.forEach(btn => {
  btn.addEventListener("click", openModal);
});

// Close Modal Window by Click on close button

ticketModalClose.addEventListener("click", closeModal);

// Close Modal Window by Click on background

ticketModal.querySelector(".ticket-modal__overlay").addEventListener("click", closeModal);

// Submit

ticketForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = ticketForm.querySelector("#ticketName").value;
  const email = ticketForm.querySelector("#ticketEmail").value;
  const message = ticketForm.querySelector("#ticketMessage").value;

  alert(`Дякуємо, ${name}! Ваше повідомлення успішно відправлено.`);

  ticketForm.reset();
  closeModal();
});


/* Contacts form */

const contactsForm = document.querySelector(".contacts__form");

if (contactsForm) {
  contactsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactsForm.querySelector("#name").value;

    alert(`Дякуємо, ${name}! Ваше повідомлення успішно відправлено.`);

    contactsForm.reset();
  });
}
