import React from "react";
import axios from "axios";

const getRandomNumFacts = async (url, numQuestions) => {
  try {
    const apiCalls = [];
    for (let i = 0; i < numQuestions; i++) {
      apiCalls.push(axios.get(url));
    }
    const responses = await Promise.all(apiCalls);
    const newCards = responses.map((response) => {
      const data = response.data;
      return { text: data.text, number: data.number };
    });
    return newCards;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getCustomNumFacts = async (url, numQuestions) => {
  try {
    const newCards = [];
    const response = await axios.get(url);
    const data = response.data;

    for (const [number, text] of Object.entries(data)) {
      newCards.push({ text, number });
      if (newCards.length >= numQuestions) break;
    }

    return newCards;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getRandomNumFacts, getCustomNumFacts };
