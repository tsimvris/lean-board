import Head from "next/head";
import Header from "../Components/LayoutComponents/Header";
import StyledMain from "../Components/StyledMain";
import StyledCard from "../Components/Card/StyledCard";
import { getAllCards } from "../DB/dwCards";
import StyledEditButton from "../Components/Card/StyledEditButton";
import { useState } from "react";

export async function getServerSideProps() {
  const cards = await getAllCards();
  return {
    props: { cards },
  };
}

export default function Home({ cards }) {
  const [editMode, setEditMode] = useState(false);
  const [cardse, setCards] = useState(...cards);
  function toggleEditMode() {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }
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
              <p>Topic : {card.content}</p>
              <p>Creator:{card.creator} </p>
              <StyledEditButton
                onClick={() => {
                  toggleEditMode();
                }}
              >
                {editMode ? "edit" : "save"}
              </StyledEditButton>
            </StyledCard>
          );
        })}
      </StyledMain>
    </>
  );
}
