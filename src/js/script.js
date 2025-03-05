// Primeira opção fechada com os outros 
// function toggleAccordion(index) {
//     const content = document.getElementById(`content-${index}`);
//     const icon = document.getElementById(`icon-${index}`);

//     // Alternar a classe hidden para mostrar ou esconder o conteúdo
//     content.classList.toggle("hidden");
//     content.classList.toggle("animate-fadeIn");

//     // Rotacionar o ícone
//     icon.classList.toggle("rotate-180");
// }

// function toggleAccordion(index) {
//     const content = document.getElementById(`content-${index}`);
//     const button = document.querySelector(`button[onclick="toggleAccordion(${index})"]`);
//     const icon = document.getElementById(`icon-${index}`);

//     // Fecha todos os outros accordions antes de abrir um novo
//     document.querySelectorAll("[id^='content-']").forEach((item, idx) => {
//         const i = idx + 1;
//         const otherIcon = document.getElementById(`icon-${i}`);
//         const otherButton = document.querySelector(`button[onclick="toggleAccordion(${i})"]`);

//         if (i !== index) {
//             item.classList.add("hidden");
//             otherIcon.src = "src/assets/icons/chevron-down-gray.svg"; // Ícone padrão
//             otherIcon.classList.remove("rotate-180"); // Reseta rotação
//             otherButton.classList.remove("text-gray-900");
//             otherButton.classList.add("text-gray-500");
//         }
//     });

//     // Alternar visibilidade do conteúdo
//     const isOpen = !content.classList.contains("hidden");
//     content.classList.toggle("hidden");

//     if (isOpen) {
//         // Fechar: título cinza, ícone original e resetar rotação
//         button.classList.remove("text-gray-900");
//         button.classList.add("text-gray-500");
//         icon.src = "src/assets/icons/chevron-down-gray.svg";
//         icon.classList.remove("rotate-180");
//     } else {
//         // Abrir: título preto, ícone escuro e girar ícone
//         button.classList.remove("text-gray-500");
//         button.classList.add("text-gray-900");
//         icon.src = "src/assets/icons/chevron-down-black.svg"; // Ícone escuro
//         icon.classList.add("rotate-180");
//     }
// }

// Primeira opção sempre aberta
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const button = document.querySelector(`button[onclick="toggleAccordion(${index})"]`);
    const icon = document.getElementById(`icon-${index}`);

    // Fecha todos os outros accordions antes de abrir um novo
    document.querySelectorAll("[id^='content-']").forEach((item, idx) => {
        const i = idx + 1;
        const otherIcon = document.getElementById(`icon-${i}`);
        const otherButton = document.querySelector(`button[onclick="toggleAccordion(${i})"]`);

        if (i !== index) {
            item.classList.add("hidden");
            otherIcon.src = "src/assets/icons/chevron-down-gray.svg"; // Ícone padrão
            otherIcon.classList.remove("rotate-180"); // Resetar rotação
            otherButton.classList.remove("text-gray-900");
            otherButton.classList.add("text-gray-500");
        }
    });

    // Alternar visibilidade do conteúdo
    const isOpen = !content.classList.contains("hidden");
    content.classList.toggle("hidden");

    if (isOpen) {
        // Fechar: título cinza, ícone original e resetar rotação
        button.classList.remove("text-gray-900");
        button.classList.add("text-gray-500");
        icon.src = "src/assets/icons/chevron-down-gray.svg";
        icon.classList.remove("rotate-180");
    } else {
        // Abrir: título preto, ícone escuro e girar ícone
        button.classList.remove("text-gray-500");
        button.classList.add("text-gray-900");
        icon.src = "src/assets/icons/chevron-down-black.svg"; // Ícone escuro
        icon.classList.add("rotate-180");
    }
}

// Abrir automaticamente o primeiro accordion ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    toggleAccordion(1); // Abrir o primeiro item
});