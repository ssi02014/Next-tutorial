import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      {/* Head 태그로 페이지 타이틀을 수정할 수 있다. */}
      <Head>
        <title>HOME | 전민재</title>
      </Head>
      Create-next-app <br />
      컴파일과 번들링이 자동으로 된다.(webpack, babel) <br />
      자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다. <br />
      서버사이드 렌더링이 지원된다. <br />
      스태틱 파일을 지원한다. <br />
    </div>
  )
}
