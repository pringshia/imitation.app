import styled, { injectGlobal, hydrate } from "react-emotion";
import Link from "next/link";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

export default () => (
  <Wrapper>
    <div className="rule">&nbsp;</div>
    <div className="rule lighter">&nbsp;</div>

    <Posts>
      <Link href="/coinbase">
        <Post>
          <span className="number">1.</span>
          <span className="title">Coinbase Pro</span>
        </Post>
      </Link>
      <Link href="/spotify">
        <Post className="spotify">
          <span className="number">2.</span>
          <span className="title">Spotify</span>
        </Post>
      </Link>
    </Posts>

    <Title>
      <svg viewBox="0 0 100 100" className="circle">
        <ellipse
          cx="50"
          cy="50"
          rx="50"
          ry="50"
          fill="#fff"
          fillOpacity="0.15"
        />
      </svg>
      <svg viewBox="0 0 300 250" className="rect">
        <rect width="300" height="250" fill="#fff" fillOpacity="0.15" />
      </svg>
      <div className="blurb">
        Art begins in <span className="title">imitation</span> and ends in
        innovation.
        <span className="credit">— Mason Cooley</span>
      </div>
    </Title>
  </Wrapper>
);

const Posts = styled("div")`
  width: 50vw;
  margin-left: 630px;
  height: 200vh;
  margin-top: 100px;
`;

const Post = styled("div")`
  &:hover {
    opacity: 0.9;
  }

  &.coinbase {
    background-color: #3a3a3a;
  }

  &.spotify {
    background-color: #82cf79;
  }

  display: flex;
  cursor: pointer;
  font-family: "Museo Sans";
  color: white;
  font-size: 25px;
  font-weight: 300;
  font-style: italic;
  background-color: #3a3a3a;
  width: 150px;
  padding: 60px 30px 20px;
  margin-bottom: 70px;
  box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 0.2);

  .number {
    margin-left: -60px;
    font-weight: 500;
  }

  .title {
    // margin-left: 180px;
    width: 400px;
    margin-right: -90px;
    text-align: right;

    display: block;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const Wrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;

  .rule {
    border-top: 10px solid rgba(255, 255, 255, 0.6);
    line-height: 0px;
  }

  .rule.lighter {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const Title = styled("div")`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 500px;
  height: 500px;
  overflow: hidden;

  .circle {
    vertical-align: bottom;
    position: absolute;
    left: -20%;
    bottom: -30%;
  }

  .rect {
    width: 300px;
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 200px;
    vertical-align: bottom;
  }

  .blurb {
    position: absolute;
    bottom: 12%;
    left: 50px;
    width: 75%;
    font-size: 25px;
    line-height: 45px;
    color: white;
    font-family: "Museo Sans";
    font-weight: 300;
    font-style: italic;

    span.title {
      display: block;
      font-family: "Copperplate";
      font-size: 70px;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 8px;
    }
    span.credit {
      display: block;
      font-size: 13px;
      text-align: right;
    }
  }
`;

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        background-color: #7884EB;
        height: 100vh;
        width: 100vw;
        display: flex;      
        align-items: center;
        justify-content: center;  
        font-family: "Museo Sans";    
        color: white;
    }
`;
