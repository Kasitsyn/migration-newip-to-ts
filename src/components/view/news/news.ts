import { IArticle } from './../../../options';
import './news.css';

class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;
            if (newsClone) {
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo')
                if (metaPhoto) metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

                const metaAuthor = newsClone.querySelector('.news__meta-author')
                if (metaAuthor) metaAuthor.textContent = item.author || item.source.name;

                const metaDate = newsClone.querySelector('.news__meta-date')
                if (metaDate) metaDate.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                const descTitle = newsClone.querySelector('.news__description-title')
                if (descTitle) descTitle.textContent = item.title;

                const decsSource = newsClone.querySelector('.news__description-source')
                if (decsSource) decsSource.textContent = item.source.name;

                const descContent = newsClone.querySelector('.news__description-content')
                if (descContent) descContent.textContent = item.description;

                const readMore = newsClone.querySelector('.news__read-more a')
                if (readMore) readMore.setAttribute('href', item.url);

                fragment.append(newsClone);
            }

        });

        const newsElem = document.querySelector('.news')
        if (newsElem) {
            newsElem.innerHTML = ''
            newsElem.appendChild(fragment);
        }

    }
}
export default News;
