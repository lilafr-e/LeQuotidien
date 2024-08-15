const articlesData = [
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Tecnología",
        imgAlt: "Imagen sobre tecnología",
        datetime: "2024-08-14",
        date: "14 de Agosto de 2024",
        category: "Tecnología",
        title: "Innovaciones en Inteligencia Artificial",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Ciencia",
        imgAlt: "Imagen sobre ciencia",
        datetime: "2024-08-15",
        date: "15 de Agosto de 2024",
        category: "Ciencia",
        title: "Descubrimientos Recientes en Física Cuántica",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Salud",
        imgAlt: "Imagen sobre salud",
        datetime: "2024-08-16",
        date: "16 de Agosto de 2024",
        category: "Salud",
        title: "Avances en Medicina Preventiva",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Deportes",
        imgAlt: "Imagen sobre deportes",
        datetime: "2024-08-17",
        date: "17 de Agosto de 2024",
        category: "Deportes",
        title: "Resultados de los Juegos Olímpicos",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Economía",
        imgAlt: "Imagen sobre economía",
        datetime: "2024-08-18",
        date: "18 de Agosto de 2024",
        category: "Economía",
        title: "Tendencias en el Mercado Global",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Cultura",
        imgAlt: "Imagen sobre cultura",
        datetime: "2024-08-19",
        date: "19 de Agosto de 2024",
        category: "Cultura",
        title: "Eventos Culturales Destacados del Año",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Política",
        imgAlt: "Imagen sobre política",
        datetime: "2024-08-20",
        date: "20 de Agosto de 2024",
        category: "Política",
        title: "Desarrollo de Políticas Internacionales",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Medioambiente",
        imgAlt: "Imagen sobre medio ambiente",
        datetime: "2024-08-21",
        date: "21 de Agosto de 2024",
        category: "Medioambiente",
        title: "Iniciativas para la Conservación del Planeta",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Entretenimiento",
        imgAlt: "Imagen sobre entretenimiento",
        datetime: "2024-08-22",
        date: "22 de Agosto de 2024",
        category: "Entretenimiento",
        title: "Nuevas Tendencias en el Mundo del Cine",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Educación",
        imgAlt: "Imagen sobre educación",
        datetime: "2024-08-23",
        date: "23 de Agosto de 2024",
        category: "Educación",
        title: "Reformas en el Sistema Educativo",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Turismo",
        imgAlt: "Imagen sobre turismo",
        datetime: "2024-08-24",
        date: "24 de Agosto de 2024",
        category: "Turismo",
        title: "Destinos Populares para el Otoño",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Tecnología",
        imgAlt: "Imagen sobre tecnología",
        datetime: "2024-08-25",
        date: "25 de Agosto de 2024",
        category: "Tecnología",
        title: "Impacto de la Tecnología en la Vida Diaria",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Historia",
        imgAlt: "Imagen sobre historia",
        datetime: "2024-08-26",
        date: "26 de Agosto de 2024",
        category: "Historia",
        title: "Eventos Históricos que Definieron el Siglo XX",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Sociedad",
        imgAlt: "Imagen sobre sociedad",
        datetime: "2024-08-27",
        date: "27 de Agosto de 2024",
        category: "Sociedad",
        title: "Cambios en la Estructura Social Contemporánea",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Salud",
        imgAlt: "Imagen sobre salud",
        datetime: "2024-08-28",
        date: "28 de Agosto de 2024",
        category: "Salud",
        title: "Investigaciones en Enfermedades Crónicas",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    },
    {
        imgSrc: "https://via.placeholder.com/400x300?text=Economía",
        imgAlt: "Imagen sobre economía",
        datetime: "2024-08-29",
        date: "29 de Agosto de 2024",
        category: "Economía",
        title: "Previsiones Económicas para el Próximo Año",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas maiores nemo facere reprehenderit numquam."
    }
];


function createArticle(article) {
    return `
        <a href="#">
            <article>
                <div class="img-article">
                    <img src="${article.imgSrc}" alt="${article.imgAlt}" srcset="">
                    <div class="img-information">
                        <p class="datepost">
                            <time datetime="${article.datetime}">${article.date}</time>
                        </p>
                        <p class="category">${article.category}</p>
                    </div>
                </div>
                <section class="section-information">
                    <h2 class="article-title">${article.title}</h2>
                    <p>${article.content}</p>
                </section>
            </article>
        </a>
    `;
}

function displayArticles() {
    const container = document.getElementById('articles-container');
    container.innerHTML = articlesData.map(createArticle).join('');
}

document.addEventListener('DOMContentLoaded', displayArticles);
