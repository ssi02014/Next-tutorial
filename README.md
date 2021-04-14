# 💻 Next-tutorial
### Next.js Tutorial 저장소

<br />

<!-- ## 🎥 App View -->
<!-- ### 📺 Stack Navigation
<p align='center'>
    <img src='https://user-images.githubusercontent.com/64779472/114034632-50637880-98b9-11eb-98d8-a2111e389a09.PNG' width="400" height="730">
</p> -->

<!-- <br /> -->

## 👨🏻‍💻 Next.js Start
🔖 Next.js: https://nextjs.org/

<br />

### 🏃 Install
- create-next-app으로 설치하면 다음과 같은 기능이 있다.
    1. 컴파일과 번들링이 자동으로 된다.(webpack, babel)
    2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다.
    3. 서버사이드 렌더링이 지원된다.
    4. 스태틱 파일(정적 파일)을 지원한다.

<br />

```javascript
    //Install
    1. npx create-next-app
    2. yarn create next-app
```

<br />

### 🏃 Start
- dev (dev 환경)
- build, start (production 환경)

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


## 👨🏻‍💻 Next.js Routing
- 별다른 설정없이 pages 폴더안에 js파일을 만들면 자동으로 Routing 된다.
- Next.js는 [] 문법으로 동적 url을 만들 수 있다.

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

- 위처럼 작성하고 localhost:3000/view/123으로 접속시 ID: 123이 출력됨을 확인 할 수 있습니다.
- router.query.id의 값은 URL(localhost:3000/view/123)의 123이다.
- 만약 파일 이름이 [title].js였다면 router.query.title 이다.

<br />

## 👨🏻‍💻 _app.js
- 레이아웃을 만드려면 _app.js를 이용해야 한다.
- _app.js
    1. 페이지 전환 시 레이아웃을 유지할 수 있다.
    2. 페이지 전환시 상태값을 유지할 수 있다.
    3. componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
    4. 추가적인 데이터를 페이지로 주입시키는게 가능하다.
    5. 글로벌 CSS를 이곳에 선언한다.

<br />

```javascript
//props넘어온 Component는 현재 page를 의미 즉, 페이지 전환시 이 Component가 변화함
//pageProps는 데이터패칭 메서드를 통해 미리 가져온 초기 객체
    function MyApp({ Component, pageProps }) {
        return <Component {...pageProps} />
    }
```

<br />

## 👨🏻‍💻 _document.js
- next에서 제공하는 document를 custom 할 수 있다.
- next.js는 마크업 정의를 건너뛰기 때문에 이 파일을 생성해서 custom 해주어야 한다. (즉, html태그, head태그, body 태그)

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

- _document에서의 Head와 next/head의 Head 태그와 다르다.
```javascript
    //pages/index.js
    import Head from 'next/head'

    export default function Home() {
        return (
            <div>
            {/* Head 태그로 페이지 타이틀을 수정할 수 있다. */}
                <Head>
                    <title>HOME | 전민재</title>
                </Head>
            (...)
        )
    }
```


## 👨🏻‍💻 public 폴더
- public 폴더는 정적 파일을 저장, 제공할 수 있는 폴더이다.
- <img src="/images/profile.png" alt="logo"/> 식으로 호출할 수 있다.

<br />



### 🏃 

- 

<br />
