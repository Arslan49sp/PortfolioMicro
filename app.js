window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav');
  const navLinkMenu = document.querySelectorAll('.nav-link');

  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('is-active')) {
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
      document.body.style.overflowY = 'scroll';
    } else {
      menuBtn.classList.add('is-active');
      mobileMenu.classList.add('is-active');
      document.body.style.overflowY = 'hidden';
    }
  });

  navLinkMenu.forEach((element) => {
    element.addEventListener('click', () => {
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
      document.body.style.overflowY = 'scroll';
    });
  });
});

const portfolioList = [
  {
    id: 1,
    title: 'Online graphics tool for designers',
    techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
    screenshotMobile: 'assets/model.png',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory One',
    techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
    screenshotMobile: '#',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory Two',
    techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
    screenshotMobile: '#',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory Three',
    techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
    screenshotMobile: '#',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory Four',
    techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
    screenshotMobile: '#',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory Five',
    techStack: ['HTML', 'JavaScript', 'Ruby on Rails'],
    screenshotMobile: '#',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    source: '#',
    live: '#',
  },
];

function cardAndModal(project) {
  const techStack = project.techStack
    .map(
      (element) => `<li class="tool_item"><button class="tools_design">${element}</button></li>`,
    )
    .join('');

  return `<div class="project_card">
  <div class="img_holder" style="--image:url('${project.screenshotMobile}')"></div>
  <h2 class="large_title">${project.title}</h2>
  <ul class="tools_flex flex_center">
   ${techStack}
  </ul>
  <button class="btngreen" data-modal="modal${project.id}">See project</button>
</div>
</div>
<dialog id="modal${project.id}">
<div class="modal">
<button class="close_modal_btn" data-modal="modal${project.id}"><i class="fas fa-xmark fa-lg"></i></button>
<div class="modal_image" style="--imageMobile:url('${project.screenshotMobile}')"></div>
<h3 class="modal_title">${project.title}</h3>
<div><ul class="flex_left tools_flex">
  ${techStack}
</ul></div>
<p class="text_left">${project.details}</p>
<div class="modal_btn_container">
<a class="btngreen no_decoration" href=${project.live} target="_blank">
See live <span><i class="fa-duotone fa-arrow-up-left-from-circle fa-rotate-90 fa-xl fa-fw"></i></span>
</a>
<a class="btngreen no_decoration" href=${project.source} target="_blank">
See source <span><i class="fa-brands fa-github fa-xl fa-fw"></i></span>
</a>
</div>
</div>
</dialog>
`;
}

const cards = () => {
  const card = portfolioList.map(cardAndModal);
  return card;
};

document.querySelector('.work_card_container').innerHTML = cards().join('');

const modalButtons = document.querySelectorAll('.btngreen');
const closeButtons = document.querySelectorAll('.close_modal_btn');

if (closeButtons) {
  closeButtons.forEach((element) => {
    const modalId = element.getAttribute('data-modal');
    const modal = document.getElementById(`${modalId}`);

    element.addEventListener('click', () => {
      modal.close();
    });

    modal.addEventListener('close', () => {
      document.body.style.overflowY = 'scroll';
    });
  });
}

if (modalButtons) {
  for (let index = 0; index < modalButtons.length; index += 1) {
    const element = modalButtons[index];
    const modalId = element.getAttribute('data-modal');
    const modal = document.getElementById(`${modalId}`);

    element.addEventListener('click', () => {
      modal.showModal();
      document.body.style.overflowY = 'hidden';
    });
  }
}

/* FORM VALIDATION SECTION */
const userEmail = document.getElementById('email');
const formContact = document.getElementById('contact-form');
const errMsg = document.querySelector('small');

formContact.addEventListener('submit', (e) => {
  const regex = /[A-Z]/;
  if (regex.test(userEmail.value)) {
    errMsg.innerText = 'Please enter only lower case valid email';
    e.preventDefault();
  }
});
