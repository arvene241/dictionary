import { useState } from "react";
import axios from "axios";

const cleanData = (oldData) => {
  const data = oldData[0];

  const word = data.word ? data.word : "";
  const phonetic = data.phonetic ? data.phonetic : "";
  const audioSearch = data.phonetics.find((d) => d.audio);
  const audio = audioSearch ? audioSearch.audio : "";
  const link = data.sourceUrls.length ? data.sourceUrls[0] : "";
  const meanings = data.meanings.length ? data.meanings : [];
  const synonyms = data.meanings[0].synonyms.length
    ? data.meanings[0].synonyms
    : [];
  const antonyms = data.meanings[0].antonyms.length
    ? data.meanings[0].antonyms
    : [];

  return {
    valid: true,
    word,
    phonetic,
    audio,
    link,
    meanings,
    synonyms,
    antonyms,
  };
};

const useGetData = () => {
  const [word, setWord] = useState({
    valid: true,
    word: "",
    phonetic: "",
    audio: "",
    link: "",
    meanings: [],
    synonyms: [],
    antonyms: [],
  });

  const getData = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      await axios
        .get(url)
        .then((data) => {
          const newData = cleanData(data.data);
          setWord(newData);
        })
        .catch((error) =>
          setWord((prev) => {
            return { ...prev, valid: false };
          })
        );
    } catch (error) {
      setWord((prev) => {
        return { ...prev, valid: false };
      });
    }
  };

  return [word, getData];
};

export default useGetData;
