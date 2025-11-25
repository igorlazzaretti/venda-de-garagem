// 1. Lista com os nomes dos arquivos das fotos (exatamente como estão na pasta assets)
const listaDeFotos = [
  "DSC00739.JPG",
  "DSC00735.JPG",
  "DSC00717.JPG",
  "DSC00718.JPG",
  "DSC00719.JPG",
  "DSC00728.JPG",
  "DSC00729.JPG",
  "DSC00730.JPG",
  "DSC00731.JPG",
  "DSC00732.JPG",
  "DSC00734.JPG",
  "DSC00737.JPG",
];

// 2. Seleciona o elemento onde as fotos serão inseridas
const containerFotos = document.getElementById('grade-fotos');

// 3. Função para criar o HTML de cada foto
// Usamos o .map para transformar a lista de nomes em lista de HTML
// E o .join('') para juntar tudo em um texto só
const htmlFotos = listaDeFotos.map(foto => `
  <div class="flex flex-col gap-3 max-w-[560px]">
    <div class="w-full bg-center bg-no-repeat aspect-[3/5] bg-cover rounded-lg"
        style="background-image: url('./assets/${foto}');">
    </div>
  </div>
`).join('');

// 4. Insere o HTML gerado dentro do container
containerFotos.innerHTML = htmlFotos;