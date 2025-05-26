/ /Fonction pour scroller vers une section avec smooth scroll
function scrollToSection(id) {
  const section = document.getElementById(id);
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Gestionnaire pour filtrer les projets
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Met à jour le bouton actif et attribut aria-checked
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      const filter = btn.dataset.filter;
      projects.forEach(proj => {
        if(filter === 'all' || proj.dataset.category === filter) {
          proj.style.display = 'flex';
        } else {
          proj.style.display = 'none';
        }
      });
    });
  });

  // Formulaire de contact
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = '';
    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!nom || !email || !message) {
      formMessage.textContent = 'Veuillez remplir tous les champs.';
      formMessage.style.color = '#ff4136';
      return;
    }
    // Vérification simple email
    if(!validateEmail(email)) {
      formMessage.textContent = 'Veuillez entrer un email valide.';
      formMessage.style.color = '#ff4136';
      return;
    }
    // Simuler envoi (ici tu peux intégrer un backend)
    formMessage.textContent = 'Envoi en cours...';
    formMessage.style.color = '#00ff99';

    setTimeout(() => {
      formMessage.textContent = 'Merci pour votre message ! Je vous répondrai rapidement.';
      formMessage.style.color = '#00ff99';
      form.reset();
    }, 1500);
  });
});

function validateEmail(email) {
  // Expression régulière simple pour email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


