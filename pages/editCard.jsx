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
  const [content, setContent] = useState(content);
  const [creator, setCreator] = useState(creator);

  const router = useRouter();
  async function formSubmit(event) {
    event.preventDefault();
    const response = await fetch("./api/card/create", {
      method: "PUT",
      body: JSON.stringify({
        content: content,
        creator: creator,
        editMode: true,
      }),
    });
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Edit Card</title>
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
        <StyledSubmitButton type="submit">Save</StyledSubmitButton>
        <Link href="/">
          <StyledCancelButton>Cancel</StyledCancelButton>
        </Link>
      </StyledForm>
    </>
  );
}
