import { ISources } from '../../../options';
import './sources.css';

class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const itemName = sourceClone.querySelector('.source__item-name')

            if (itemName) itemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item')
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
            document.querySelector('.sources')?.append(fragment);
        });


    }
}

export default Sources;
