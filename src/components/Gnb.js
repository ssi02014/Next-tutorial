import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  }

  //data는 Menu.Item의 속성들을 의미한다.
  const goLink = (e, data) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
      //a태그나 location.href = "/about"은 페이지가 새로고침 됨. SPA의 장점이 없어짐
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={goLink}
      />
    </Menu>
  );
}
