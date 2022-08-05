import Head from "next/head";
import Layout from "../Components/Layout";
import StyledSubmitButton from "../Components/form/StyledSubmit";
import StyledInput from "../Components/form/StyledInputs";
import StyledTextArea from "../Components/form/StyledTextArea";
import StyledForm from "../Components/form/StyledForm";
import StyledCancelButton from "../Components/form/StyledCancelButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create New Card</title>
      </Head>
      <Layout />

      <StyledForm>
        <StyledTextArea placeholder="Content" rows={6} cols={30} />

        <StyledInput placeholder="Creator" />
        <StyledSubmitButton>Submit</StyledSubmitButton>
        <Link href="/">
          <StyledCancelButton>Cancel</StyledCancelButton>
        </Link>
      </StyledForm>
    </>
  );
}
