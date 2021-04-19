import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <>
      <div style={{ display: "felx", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/profile.png"
            alt="logo"
            style={{ display: "block", width: 120 }}
          />
          <Header as="h1">전민재</Header>
          <Gnb />
        </div>
      </div>
    </>
  );
}
