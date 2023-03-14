import React from "react";
import { getRandomNumFacts, getCustomNumFacts } from "./fetchNumbersFacts";

const fetchCards = async (rangeType, min, max, numQuestions) => {
  let url = import.meta.env.VITE_TRIVIA_ENDPOINT;
  let urlEnd = "?trivia&fragment&json";

  switch (rangeType) {
    case "random":
      url += `random${urlEnd}`;
      const randomCards = await getRandomNumFacts(url, numQuestions);
      if (randomCards.length) {
        return randomCards;
      } else {
        // No cards found
        return [];
      }
      break;
    case "custom":
      url += `${min}..${max}${urlEnd}`;
      console.log(url);
      const customCards = await getCustomNumFacts(url, numQuestions);
      if (customCards.length) {
        return customCards;
      } else {
        // No cards found
        return [];
      }
      break;
  }
};

export default fetchCards;
