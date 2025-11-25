// 1. Lista com os nomes dos arquivos das fotos (exatamente como estão na pasta assets)
const listaDeFotos = [
  "DSC00739.webp",
  "DSC00735.webp",
  "DSC00717.webp",
  "DSC00718.webp",
  "DSC00719.webp",
  "DSC00728.webp",
  "DSC00729.webp",
  "DSC00730.webp",
  "DSC00731.webp",
  "DSC00732.webp",
  "DSC00734.webp",
  "DSC00737.webp",
];

// 2. Seleciona o elemento onde as fotos serão inseridas
document.addEventListener('DOMContentLoaded', () => {
  // 2. Seleciona o elemento onde as fotos serão inseridas
  const containerFotos = document.getElementById('grade-fotos');

  // 3. Função para criar o HTML de cada foto
  // Usamos o .map para transformar a lista de nomes em lista de HTML
  // E o .join('') para juntar tudo em um texto só
  const htmlFotos = listaDeFotos.map(foto => `
    <div class="flex flex-col gap-3 max-w-[560px]">
      <div class="photo-item w-full bg-center bg-no-repeat aspect-[3/5] bg-cover rounded-lg cursor-pointer transition-transform duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          role="button" tabindex="0" data-foto="${foto}"
          style="background-image: url('./assets/${foto}');">
      </div>
    </div>
  `).join('');

  // 4. Insere o HTML gerado dentro do container
  containerFotos.innerHTML = htmlFotos;

  // --- Modal behavior ---
  const modalOverlay = document.getElementById('modal-overlay');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  function openModalWithFile(filename) {
    if (!modalImg || !modalOverlay) return;
    modalImg.src = `./assets/${filename}`;
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('flex');
    modalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modalImg || !modalOverlay) return;
    modalOverlay.classList.remove('flex');
    modalOverlay.classList.add('hidden');
    modalOverlay.setAttribute('aria-hidden', 'true');
    // remove src to stop any high-res rendering/network usage
    modalImg.removeAttribute('src');
  }

  // Attach listeners to each photo item
  document.querySelectorAll('.photo-item').forEach(el => {
    el.addEventListener('click', () => openModalWithFile(el.dataset.foto));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModalWithFile(el.dataset.foto);
      }
    });
  });

  // Close interactions
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('show')) closeModal();
  });
});