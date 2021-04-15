import { Divider } from "semantic-ui-react";

export default function Footer() {
  return (
    <>
      <Divider />
      <div
        style={{
          display: "block",
          textAlign: "center",
          padding: "30px 0",
        }}
      >
        Copyright 전민재. All rights reserved.
      </div>
    </>
  );
}
