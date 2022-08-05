import Head from "next/head";
import Header from "../Components/LayoutComponents/Header";
import StyledMain from "../Components/StyledMain";
import StyledCard from "../Components/Card/StyledCard";
import { getAllCards } from "../DB/dwCards";
export async function getStaticProps() {
  const cards = await getAllCards();
  return {
    props: { cards },
  };
}
export default function Home({ cards }) {
  return (
    <>
      <Head>
        <title>Lean Board</title>
      </Head>
      <Header />
      <StyledMain>
        {cards.map((card) => {
          console.log(card);

          return (
            <StyledCard key={card.id}>
              <p>Topic : {card.content}</p>
              <p>Creator:{card.creator} </p>
            </StyledCard>
          );
        })}
      </StyledMain>
    </>
  );
}
