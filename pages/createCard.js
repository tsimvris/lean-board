// Import Styled Components
import Header from "../Components/LayoutComponents/Header";
import StyledSubmitButton from "../Components/form/StyledSubmit";
import StyledInput from "../Components/form/StyledInputs";
import StyledTextArea from "../Components/form/StyledTextArea";
import StyledForm from "../Components/form/StyledForm";
import StyledCancelButton from "../Components/form/StyledCancelButton";
// Import Dependecies and Libraries
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const [content, setContent] = useState("");
  const [creator, setCreator] = useState("");

  const router = useRouter();
  async function formSubmit(event) {
    event.preventDefault();
    router.push("/");
    const response = await fetch("./api/card/create", {
      method: "POST",
      body: JSON.stringify({
        content: content,
        creator: creator,
      }),
    });
  }
  return (
    <>
      <Head>
        <title>Create New Card</title>
      </Head>
      <Header />

      <StyledForm onSubmit={formSubmit}>
        <StyledTextArea
          placeholder="Content"
          rows={6}
          cols={30}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <StyledInput
          placeholder="Creator"
          value={creator}
          onChange={(event) => {
            setCreator(event.target.value);
          }}
        />
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        <Link href="/">
          <StyledCancelButton>Cancel</StyledCancelButton>
        </Link>
      </StyledForm>
    </>
  );
}
