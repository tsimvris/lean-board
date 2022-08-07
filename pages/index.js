import Head from "next/head";
import Header from "../Components/LayoutComponents/Header";
import StyledMain from "../Components/StyledMain";
import StyledCard from "../Components/Card/StyledCard";
import { getAllCards } from "../DB/dwCards";
import StyledEditButton from "../Components/Card/StyledEditButton";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const cards = await getAllCards();
  return {
    props: { cards },
  };
}

export default function Home({ cards }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lean Board</title>
      </Head>
      <Header />
      <StyledMain>
        {cards.map((card) => {
          return (
            <StyledCard key={card.id}>
              Topic :{card.content}
              <br />
              Creator:
              {card.creator}
              <StyledEditButton
                onClick={() => {
                  router.push("/editCard");
                }}
              >
                Edit
              </StyledEditButton>
            </StyledCard>
          );
        })}
      </StyledMain>
    </>
  );
}
