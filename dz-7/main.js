const getNews = async () => response = (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
async function renderNews()

{
    const news = await getNews();
    const newsContainer = document.getElementById('main-info');
    news.map((item) =>
    {
        const newsCard = document.createElement('div');
        const newsImg = document.createElement('img');
        const newsTitle = document.createElement('h2');
        const newsBody = document.createElement('p');
        newsImg.src = 'https://www.fonstola.ru/images/201509/fonstola.ru_199786.jpg';
        newsTitle.innerText = item.title;
        newsBody.innerText = item.body;
        newsCard.append(newsImg, newsTitle, newsBody);
        newsContainer.append(newsCard);
    });
}
renderNews();