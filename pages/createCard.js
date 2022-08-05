import Head from "next/head";
import Layout from "../src/Components/Layout";
import StyledSubmitButton from "../src/Components/form/StyledSubmit";
import StyledInput from "../src/Components/form/StyledInputs";
import StyledTextArea from "../src/Components/form/StyledTextArea";
import StyledForm from "../src/Components/form/StyledForm";
import StyledCancelButton from "../src/Components/form/StyledCancelButton";
import Link from "next/link";

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
        <Link href="/">
          <StyledCancelButton>Cancel</StyledCancelButton>
        </Link>
      </StyledForm>
    </>
  );
}
