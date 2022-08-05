import Head from "next/head";
import Header from "../Components/LayoutComponents/Header";
import StyledMain from "../Components/StyledMain";
import StyledCard from "../Components/Card/StyledCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lean Board</title>
      </Head>
      <Header />
      <StyledMain>
        <StyledCard>
          <p>Topic : </p>
          <p>Creator: </p>
        </StyledCard>
      </StyledMain>
    </>
  );
}
