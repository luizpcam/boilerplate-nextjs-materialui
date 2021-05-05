// eslint-disable-next-line no-use-before-define
import React from 'react'
import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://i1.wp.com/geracaoagro.com.br/wp-content/uploads/2019/09/Favicon-Geração-Agro.png?fit=32%2C32&amp;ssl=1"
            sizes="32x32"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}
