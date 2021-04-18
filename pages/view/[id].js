import axios from "axios";
import Item from "../../src/components/Item";
import Head from "next/head";

export default function Post({ item, name }) {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
}

//SSR (node.js 환경)
//getServerSideProps는 브라우저 환경이 아님 서버에서 동작
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
