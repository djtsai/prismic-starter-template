import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Head from "next/head"

import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";

const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      <Head>
        <title>{props.data.meta_title}</title>
        <meta name='description' content={props.data.meta_description} />
      </Head>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'home-page',
  queryType: 'single',
})

export default Page;
