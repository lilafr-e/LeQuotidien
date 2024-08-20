// api key: 7d3c83d8-2e9d-430f-a1b3-2982d2174cbb
const placeholderImage = 'https://placehold.co/400x300?text=No+Image+Available';


document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    let category = '';

    // Detectar si estamos en la página principal (index.html)
    if (path === '/' || path.includes('index.html')) {
        category = 'news'; // o 'general', dependiendo de lo que quieras mostrar
    } else {
        // Extraer la categoría de la URL
        const pathParts = path.split('/');
        const pageName = pathParts[pathParts.length - 1];
        category = pageName.replace('.html', '');
    }

    console.log('Categoría obtenida de la URL:', category);

    const apiKey = '7d3c83d8-2e9d-430f-a1b3-2982d2174cbb';
    const apiUrl = `https://content.guardianapis.com/search?section=${category}&api-key=${apiKey}&show-fields=thumbnail&show-elements`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.response.results;
        const articleContainer = document.getElementById('articles-container');

        if (articles.length === 0) {
            return;
        }

        articles.forEach(article => {
            const textToTranslate = article.webTitle;

            // Filtrar artículos que contengan "Corrections" o "Clarifications" en el título
            if (
                textToTranslate.includes("Correction") ||
                textToTranslate.includes("For the record")||
                textToTranslate.includes("Clarification")
            ) {
                return; // Saltar este artículo
            }

            const deeplApiKey = 'a0c9d828-efa0-47d7-beb1-6a5c6f37e5d3:fx';
            const translateUrl = `https://api-free.deepl.com/v2/translate`;

            const imageUrl = article.fields && article.fields.thumbnail ? article.fields.thumbnail : placeholderImage;

            fetch(translateUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    auth_key: deeplApiKey,
                    text: textToTranslate,
                    target_lang: 'ES'
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la traducción');
                }
                return response.json();
            })
            .then(translationData => {
                let translatedTitle;
                if (translationData.translations && translationData.translations.length > 0) {
                    translatedTitle = translationData.translations[0].text;
                } else {
                    // Si no hay traducciones disponible, usar el título original
                    translatedTitle = textToTranslate;
                }

                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <a href="${article.webUrl}" target="_blank">
                        <div class="img-article">
                            <img src="${imageUrl}" alt="${translatedTitle}">
                            <div class="img-information">
                                <p class="datepost">
                                    <time datetime="${new Date(article.webPublicationDate).toISOString().split('T')[0]}">
                                        ${new Date(article.webPublicationDate).toLocaleDateString()}
                                    </time>
                                </p>
                                <p class="category">${article.sectionName}</p>
                            </div>
                        </div>
                        <section class="section-information">
                            <h2 class="article-title">${translatedTitle}</h2>
                        </section>
                        <hr>
                    </a>
                `;
                articleContainer.appendChild(articleElement);
            })
            .catch(error => {
                console.error('Cuota de DeepL agotada, imposible traducir');
                // Mostrar el artículo en su idioma original si hay un error en la traducción
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <a href="${article.webUrl}" target="_blank">
                        <div class="img-article">
                            <img src="${imageUrl}" alt="${textToTranslate}">
                            <div class="img-information">
                                <p class="datepost">
                                    <time datetime="${new Date(article.webPublicationDate).toISOString().split('T')[0]}">
                                        ${new Date(article.webPublicationDate).toLocaleDateString()}
                                    </time>
                                </p>
                                <p class="category">${article.sectionName}</p>
                            </div>
                        </div>
                        <section class="section-information">
                            <h2 class="article-title">${textToTranslate}</h2>
                        </section>
                        <hr>
                    </a>
                `;
                articleContainer.appendChild(articleElement);
            });
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

});