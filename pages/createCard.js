import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../src/Components/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create New Card</title>
      </Head>
      <Layout />
    </>
  );
}
