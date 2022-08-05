import Head from "next/head";
import Layout from "../src/Components/Layout";
import StyledSubmitButton from "../src/Components/form/StyledSubmit";
import StyledInput from "../src/Components/form/StyledInputs";
import StyledTextArea from "../src/Components/form/StyledTextArea";
import StyledForm from "../src/Components/form/StyledForm";
import StyledCancelButton from "../src/Components/form/StyledCancelButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create New Card</title>
      </Head>
      <Layout />
      <br />
      <br />
      <br />
      <br />

      <StyledForm>
        <StyledTextArea placeholder="Content" />

        <StyledInput placeholder="Creator" />
        <StyledSubmitButton>Submit</StyledSubmitButton>
        <StyledCancelButton>Cancel</StyledCancelButton>
      </StyledForm>
    </>
  );
}
