import { Advice } from "./Advice";

const adviceApiQuery: string = 'https://api.adviceslip.com/advice';

const getAdvice = async (url: string): Promise<Advice> => {
    const data = await fetch(url);
    return await data.json();
};

export { getAdvice, adviceApiQuery }