import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(API_URL)
    .then(res => {
      console.log(res.data);
      setList(res.data);
    })
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* Head 태그로 페이지 타이틀을 수정할 수 있다. */}
      <Head>
        <title>HOME | 전민재</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  )
}
