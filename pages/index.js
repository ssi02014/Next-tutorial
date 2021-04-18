import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>HOME | 전민재</title>
        <meta name="description" content="전민재 Next.js 홈입니다." />
      </Head>

      {isLoading ? (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <div>
          {/* Head 태그로 페이지 타이틀을 수정할 수 있다. */}
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </div>
      )}
    </>
  );
}
