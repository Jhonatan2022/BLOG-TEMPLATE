import { Image } from "../Image";
import { SideBarLeft } from "../SideBarLeft";
import { SideBarRight } from "../SideBarRight";

function Home() {
  return (
    <>
      <SideBarLeft />
      <Image />
      <SideBarRight />
    </>
  );
}

export { Home };
