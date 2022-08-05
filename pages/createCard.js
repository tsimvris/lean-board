import Head from "next/head";
import StyledSubmitButton from "../Components/form/StyledSubmit";
import StyledInput from "../Components/form/StyledInputs";
import StyledTextArea from "../Components/form/StyledTextArea";
import StyledForm from "../Components/form/StyledForm";
import StyledCancelButton from "../Components/form/StyledCancelButton";
import Link from "next/link";
import Header from "../Components/LayoutComponents/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create New Card</title>
      </Head>
      <Header />

      <StyledForm>
        <StyledTextArea placeholder="Content" rows={6} cols={30} />

        <StyledInput placeholder="Creator" />
        <Link href="/">
          <StyledSubmitButton>Submit</StyledSubmitButton>
        </Link>
        <Link href="/">
          <StyledCancelButton>Cancel</StyledCancelButton>
        </Link>
      </StyledForm>
    </>
  );
}
