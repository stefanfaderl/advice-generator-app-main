import { getAdvice, adviceApiQuery } from "./advice.service";

const h1Tag = document.querySelector<HTMLHeadingElement>('h1');
const pTag = document.querySelector<HTMLParagraphElement>('p');
const img = document.querySelector<HTMLImageElement>('img');
const diceBtn = document.querySelector('button');

diceBtn?.addEventListener('click', e => {
    updateAdvice();
});

(async function () {
    try {
        const advice = await getAdvice(adviceApiQuery);
        if (h1Tag) h1Tag.innerText = `#${advice.slip.id}`;
        if (pTag) pTag.innerText = `"${advice.slip.advice}"`;
    } catch (error) {
        console.error(error);
    }
})();

async function updateAdvice() {
    try {
        if (h1Tag) h1Tag.innerText = ``;
        if (pTag) pTag.innerText = ``;
    } catch (error) {
        console.error(error);
    }
};


