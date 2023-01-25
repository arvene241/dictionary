import Footer from "./Footer";
import Invalid from "./Invalid";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
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
          <Synonyms data={data.synonyms} />
          {data.meanings.map((item) => {
            return (
              <Meaning
                key={item.partOfSpeech}
                partOfSpeech={item.partOfSpeech}
                definitions={item.definitions}
              />
            );
          })}
          <Footer link={data.link} />
          {console.log(data)}
        </>
      ) : (
        <Invalid />
      )}
    </main>
  );
};

export default Dictionary;
