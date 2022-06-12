import { Advice } from "./Advice";

const adviceApiQuery: string = 'https://api.adviceslip.com/advice';

const getAdvice = async (url: string): Promise<Advice> => {
    const data = await fetch(url, {cache: "no-store"});
    return await data.json();
};

export { getAdvice, adviceApiQuery }