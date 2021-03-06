# π» Next-tutorial
### Next.js Tutorial μ μ₯μ

<br />

<!-- ## π₯ App View -->
<!-- ### πΊ Stack Navigation
<p align='center'>
    <img src='https://user-images.githubusercontent.com/64779472/114034632-50637880-98b9-11eb-98d8-a2111e389a09.PNG' width="400" height="730">
</p> -->

<!-- <br /> -->

## π¨π»βπ» Next.js Start
π Next.js: https://nextjs.org/

<br />

### π Install
- create-next-appμΌλ‘ μ€μΉνλ©΄ λ€μκ³Ό κ°μ κΈ°λ₯μ΄ μλ€.
    1. μ»΄νμΌκ³Ό λ²λ€λ§μ΄ μλμΌλ‘ λλ€.(webpack, babel)
    2. μλ λ¦¬νλ μ¬ κΈ°λ₯μΌλ‘ μμ νλ©΄ νλ©΄μ λ°λ‘ λ°μλλ€.
    3. μλ²μ¬μ΄λ λ λλ§μ΄ μ§μλλ€.
    4. μ€νν± νμΌ(μ μ  νμΌ)μ μ§μνλ€.

<br />

```javascript
    //Install
    1. npx create-next-app
    2. yarn create next-app
```

<br />

### π Start
- dev (dev νκ²½)
- build, start (production νκ²½)

```json
//package.json
    {
        "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
        },
    }
```
<br />


## π¨π»βπ» Next.js Routing
- λ³λ€λ₯Έ μ€μ μμ΄ pages ν΄λμμ jsνμΌμ λ§λ€λ©΄ μλμΌλ‘ Routing λλ€.
- Next.jsλ [] λ¬Έλ²μΌλ‘ λμ  urlμ λ§λ€ μ μλ€.

<br />

```javascript
    //pages/view/[id].js
    import {useRouter} from 'next/router';

    export default function About() {
        const router = useRouter();

        return <div>ID: {router.query.id}</div>
    }
```

<br />

- μμ²λΌ μμ±νκ³  localhost:3000/view/123μΌλ‘ μ μμ ID: 123μ΄ μΆλ ₯λ¨μ νμΈ ν  μ μμ΅λλ€.
- router.query.idμ κ°μ URL(localhost:3000/view/123)μ 123μ΄λ€.
- λ§μ½ νμΌ μ΄λ¦μ΄ [title].jsμλ€λ©΄ router.query.title μ΄λ€.

<br />

## π¨π»βπ» _app.js
- λ μ΄μμμ λ§λλ €λ©΄ _app.jsλ₯Ό μ΄μ©ν΄μΌ νλ€.
- _app.js
    1. νμ΄μ§ μ ν μ λ μ΄μμμ μ μ§ν  μ μλ€.
    2. νμ΄μ§ μ νμ μνκ°μ μ μ§ν  μ μλ€.
    3. componentDidCatchλ₯Ό μ΄μ©ν΄μ μ»€μ€ν μλ¬ νΈλ€λ§μ ν  μ μλ€.
    4. μΆκ°μ μΈ λ°μ΄ν°λ₯Ό νμ΄μ§λ‘ μ£Όμμν€λκ² κ°λ₯νλ€.
    5. κΈλ‘λ² CSSλ₯Ό μ΄κ³³μ μ μΈνλ€.

<br />

```javascript
//propsλμ΄μ¨ Componentλ νμ¬ pageλ₯Ό μλ―Έ μ¦, νμ΄μ§ μ νμ μ΄ Componentκ° λ³νν¨
//pagePropsλ λ°μ΄ν°ν¨μΉ­ λ©μλλ₯Ό ν΅ν΄ λ―Έλ¦¬ κ°μ Έμ¨ μ΄κΈ° κ°μ²΄
    function MyApp({ Component, pageProps }) {
        return <Component {...pageProps} />
    }
```

<br />

## π¨π»βπ» _document.js
- nextμμ μ κ³΅νλ documentλ₯Ό custom ν  μ μλ€.
- next.jsλ λ§ν¬μ μ μλ₯Ό κ±΄λλ°κΈ° λλ¬Έμ μ΄ νμΌμ μμ±ν΄μ custom ν΄μ£Όμ΄μΌ νλ€. (μ¦, htmlνκ·Έ, headνκ·Έ, body νκ·Έ)

<br />

```javascript
    import Document, { Html, Head, Main, NextScript } from 'next/document'

    class MyDocument extends Document {

        render() {
            return (
            <Html lang="ko">
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
            )
        }
    }

    export default MyDocument
```

<br />

- _documentμμμ Headμ next/headμ Head νκ·Έμ λ€λ₯΄λ€.
```javascript
    //pages/index.js
    import Head from 'next/head'

    export default function Home() {
        return (
            <div>
            {/* Head νκ·Έλ‘ νμ΄μ§ νμ΄νμ μμ ν  μ μλ€. */}
                <Head>
                    <title>HOME | μ λ―Όμ¬</title>
                </Head>
            (...)
        )
    }
```


## π¨π»βπ» public ν΄λ
- public ν΄λλ μ μ  νμΌμ μ μ₯, μ κ³΅ν  μ μλ ν΄λμ΄λ€.
```
    <img src="/images/profile.png" alt="logo"/> μμΌλ‘ νΈμΆν  μ μλ€.
```

<br />

## π¨π»βπ» Next.js λͺ¨λ  νμ΄μ§ μ¬μ  λ λλ§ (Pre-rendering)
- pre-renderingμ΄λ, κΈ°λ³Έμ μΌλ‘ λͺ¨λ  νμ΄μ§ pre-render μ¦, μ¬μ μ HTML νμΌλ€μ λ§λ λ€λ μλ―Έμ΄λ€.
- λ μ’μ νΌν¬λ¨Όμ€, κ²μμμ§μ΅μ ν(SEO)
    1. μ μ  μμ±
    2. Server Side Rendering (SSR)
- μ μ  μμ±κ³Ό SSRμ μ°¨μ΄μ μ μΈμ  html νμΌμ μμ±νλκ° μ΄λ€.

<br />

### π μ μ  μμ±(Static Genration)
- nextμμλ λ§μΌν νμ΄μ§, λΈλ‘κ·Έ κ²μλ¬Ό, μ ν λͺ©λ‘, λμλ§ κ³Ό λ¬Έμ λ±κ³Ό κ°μ νμ΄μ§μ μ μ  μμ±μ μ¬μ©νλΌκ³  κΆκ³ 
- νλ‘μ νΈκ° λΉλνλ μμ μ htmlνμΌλ€μ΄ μμ±
- λͺ¨λ  μμ²­μ μ¬μ¬μ©
- μ μ  μμ±λ νμ΄μ§λ€μ CDNμ μΊμ
- getStaticPrors / getStaticPaths

<br />

### π SSR
- λ§€ μμ²­λ§λ€ htmlμ μμ±
- ν­μ μ΅μ  μν μ μ§λ₯Ό ν΄μΌ νλ κ²½μ° SSRμ μ¬μ©
- κ΄λ¦¬μ νμ΄μ§, λΆμ μ°¨νΈ λ±μ νμ΄μ§μ μ¬μ©
- getServerSideProps

<br />

```js
    //view/[id].js
    //getServerSideProps return κ°μΈ itemμ Postμ propsλ‘ λ°μμ¬ μ μλ€.
    export default function Post({ item }) {
        return (
            <>
                {item && (
                    <Item item={item} />
                )}
            </>
        );
    };

    //getServerSideProps
    //context propsλ νλ§λ¦¬ν°, μμ²­, μλ΅ μΏΌλ¦¬κ° λ΄κ²¨μ Έ μ¨λ€.
    export async function getServerSideProps(context) {
        const id = context.params.id;
        const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
        const res = await axios.get(apiUrl);
        const data = res.data;

        return {
            props: {
                item:data,
            }
        }
    };
```

<br />

## π¨π»βπ» Page μ΄λ: Link, router
- Pageλ₯Ό μ΄λν  λ Linkλ routerλ₯Ό μ¬μ©νλ€.
- aνκ·Έλ location.hrefλ₯Ό μ¬μ©ν΄λ λμ§λ§ μ΄λ, νμ΄μ§κ° μλ‘ κ³ μΉ¨λλ―λ‘ SPAμ μ₯μ μ΄ μ¬λΌμ§λ μ¬μ©νμ§ μλκ² μ’λ€.

<br />

### π Link
```js
    //import 
    import Link from "next/link";

    //Link μ»΄ν¬λνΈ
    <Grid.Column key={id}>
        <Link href={`/view/${item.id}`}>
            <a>
            (...)
            </a>
        </Link>
    </Grid.Column>
```

<br />

### π router
```js
    //import 
    import { useRouter } from "next/router";

    //router μμ±
    const router = useRouter();

    //router.pushλ₯Ό ν΅ν΄ μΉνμ΄μ§ μ΄λ
    const goLink = (e, data) => {
        if (data.name === "home") {
            router.push("/");
        } else if (data.name === "about") {
            router.push("/about");
        }
    };
```

<br />

## π¨π»βπ» Error Page
### π 404Page
- 404.js νμΌμ λ§λ€μ΄ 404 νμ΄μ§λ₯Ό κ΄λ¦¬ν  μ μλ€.

<br />

```js
    //404.js
    import React from "react";
    import { Icon } from "semantic-ui-react";

    const Error404 = () => {
        return (
            <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
                <Icon name="warning circle" color="red" />
                404Page: ν΄λΉ νμ΄μ§λ₯Ό μ°Ύμ μ μμ΅λλ€.
            </div>
        );
    };

    export default Error404;

```

<br />

### π Sever Error Page
- _error.js νμΌμ λ§λ€μ΄ μλ¬ νμ΄μ§λ₯Ό κ΄λ¦¬ν  μ μλ€. (500error λ±)
- μ¬κΈ°μ 404pageλ κ΄λ¦¬ν  μ μμ§λ§ 404Pageλ staticμΌλ‘ μ κ³΅νλκ² μ’κΈ° λλ¬Έμ 404.js νμΌμ λ§λ€μ΄ κ΄λ¦¬νλ€.

<br />

```js
    //_error.js
    import React from "react";

    const Error = ({ statusCode }) => {
        return (
            <div>
                {statusCode
                ? `An error ${statusCode} occurred on sever`
                : `An error occurred on client`}
            </div>
        );
    };

    Error.getInitailProps = ({ res, req }) => {
        const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

        return { statusCode };
    };

    export default Error;
```

<br />

## π¨π»βπ» νκ²½ λ³μ
- next.jsλ κΈ°λ³Έμ μΌλ‘ νκ²½ λ³μλ₯Ό κ΄λ¦¬ν  μ μλ κΈ°λ₯μ μ κ³΅νλ€.
- .env.development (κ°λ° νκ²½), .env.production (λ°°ν¬ νκ²½)
- node.js νκ²½μ λνμ μΌλ‘ [id].js νμΌμ μλ getServerSideProps λ©μλ μ μ΄ λ©μλ μμμ window λ©μλλ₯Ό μ°λ©΄ μλ¬κ° λ¨

<br />

```
    //node.js νκ²½ μ¬μ©λ² ex) [id].js νμΌμ getServerSideProps λ©μλ
    process.env.λ³μλͺ

    //browser νκ²½ μ¬μ©λ² index.js νμΌ
    process.env.NEXT_PUBLIC_λ³μλͺ

    //.env.production
    name=PRODUCTION
    NEXT_PUBLIC_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior
```

## π¨π»βπ» Dynamic Routerμ Static Generation?
- Dynamic Router Static Generationμ μ μ©νλ €λ©΄ getStaticPaths() λ©μλλ₯Ό μ¬μ©νλ©΄ λλ€. λ¨, paramsκ° μμΈ‘λκ³  μ¬μ μ λ―Έλ¦¬ μ§μ ν΄λμΌλ§ κ°λ₯νλ€.
- getStaticPaths() fallbackμ trueλ‘νλ©΄ pathsλ₯Ό μ§μ ν΄μ€ κ²λ€μ μ μΈνκ³  μ΅μ΄ μ μμ propsμ λΉ λ°μ΄ν°λ‘ λ³΄μ¬μ§λ€κ° νμ λ°±κ·ΈλΌμ΄λμμ μ μ νμΌμΈ htmlκ³Ό cssλ₯Ό μμ±ν΄μ€λ€. κ·Έλ¦¬κ³  next.jsλ pre-rendering λͺ©λ‘μ μΆκ°νλ€. λ°λΌμ 2λ²μ§Έ μ μλΆν°λ static generationμ ν κ²κ³Ό λμΌν΄μ§λ€.
- pathsλ λΉ λ°°μ΄μ΄μ¬λ μκ΄μλ€.

<br />

```js
    export async function getStaticPaths() {
        const apiUrl = process.env.apiUrl;
        const res = await axios.get(apiUrl);
        const data = res.data;

        return {
            paths: data.slice(0, 9).map((item) => ({
                params: {
                    id: item.id.toString(),
                },
            })),
            fallback: true,
        };
    }
```

<br />

- (+a)λ‘ Link νκ·Έμ prefetch κΈ°λ₯μ ν΅ν΄ μ€ν¬λ‘€μ ν΅ν΄ λ―Έλ¦¬ μ μ  νμ΄μ§λ₯Ό λ§λ€ μ μλ€.

<br />

## π¨π»βπ» isFallback
- useRouterμμ isFaillbackμ΄ μλ€. κΈ°λ₯μ λ‘λ© μ μλ trueμλ€κ° λ‘λ©μ΄ λλλ©΄ falseλ‘ λ°λλ€. μ΄κ²μΌλ‘ loadingμ κ΅¬νν  μ μλ€.

```js
    //μ¬μ©λ²
    import { useRouter } from "next/router";
    import { Loader } from "semantic-ui-react";
    
    export default function Post({ item, name }) {
        const router = useRouter();

        if (router.isFallback) {
            return (
                <div style={{ padding: "100px 0" }}>
                    <Loader active inline="centered"></Loader>
                </div>
            );
        }

        return ( ... )
    }
```

<br />