import Footer from "./Footer";
import Invalid from "./Invalid";
import Meaning from "./Meaning";
import Nonyms from "./Nonyms";
import WordHeader from "./WordHeader";

const Dictionary = ({ data }) => {
  return (
    <main className="h-full">
      {data.valid ? (
        <>
          <WordHeader
            word={data.word}
            phonetic={data.phonetic}
            audioLink={data.audio}
          />
          {data.meanings.map((item) => {
            return (
              <Meaning
                key={item.partOfSpeech}
                partOfSpeech={item.partOfSpeech}
                definitions={item.definitions}
              />
            );
          })}
          <Nonyms data={data.synonyms} title="Synonyms" />
          <Nonyms data={data.antonyms} title="Antonyms" />
          <Footer link={data.link} />
        </>
      ) : (
        <Invalid />
      )}
    </main>
  );
};

export default Dictionary;
