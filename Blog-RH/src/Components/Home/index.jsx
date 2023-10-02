import { lazy, Suspense } from "react";
import { themeDark } from "../../Utils/themeDark";
const Card = lazy(() => import("../Card"));
const SideBarLeft = lazy(() => import("../SideBarLeft"));
const SideBarRight = lazy(() => import("../SideBarRight"));
import "./styles.css";

function Home({ darkMode }) {
  return (
    <>
      <main
        className="main-container"
        style={themeDark("MAIN_CONTAINER", darkMode)}
      >
        <Suspense fallback={<h1>Loading...</h1>}>
          <SideBarLeft darkMode={darkMode} />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Card darkMode={darkMode} />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <SideBarRight darkMode={darkMode} />
        </Suspense>
      </main>
    </>
  );
}

// export { Home };
export default Home;
