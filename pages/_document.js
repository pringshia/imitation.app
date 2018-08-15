import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Imitation</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <style
            dangerouslySetInnerHTML={{
              __html: `          
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
                }`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
