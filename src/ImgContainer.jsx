import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import head from "/pouring_head.png";

function ImgContainer() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://docs.up2tom.com/#introduction" target="_blank">
          <img src={head} className="logo react" alt="UP2TOM API logo" />
        </a>
      </div>
    </>
  );
}

export default ImgContainer;
