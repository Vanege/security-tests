import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'

type ServerSideProps = {
  serverSideSrc: string
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: ServerSideProps }> => {
  const serverSideSrc = context.query.serverSideSrc
  return {
    props: {
      serverSideSrc: typeof serverSideSrc === "string" ? serverSideSrc : ""
    }
  }
}

type Props = ServerSideProps

const SecurityTests: NextPage<Props> = ({ serverSideSrc }) => {
  console.log('serverSideSrc | userProvided-src-of-img-in-jsx.tsx l21', serverSideSrc)

  const [clientSideSrc, setClientSideSrc] = useState<string | null>(null);

  return (
    <div>
      {`LINK TO GITHUB: `} <a href="https://github.com/Vanege/security-tests/blob/main/pages/userProvided-src-of-img-in-jsx.tsx" target="_blank" rel="noreferrer">https://github.com/Vanege/security-tests/blob/main/pages/userProvided-src-of-img-in-jsx.tsx</a> <br />
      {`LINK TO KITTEN: `} <a href="https://placekitten.com/400/400" target="_blank" rel="noreferrer">https://placekitten.com/400/400</a> <br />

      <hr />
      SERVER-SIDE RENDERING <br />

      {`The image below uses the query "serverSideSrc" in the URL.`} <br />
      {`The server will pre-render <img src={serverSideSrc} />`} <br />
      {`To try it: add to the URL `} <a href="?serverSideSrc=https://placekitten.com/400/400">?serverSideSrc=https://placekitten.com/400/400</a> <br />

      <img src={serverSideSrc} />

      <hr />
      CLIENT-SIDE RENDERING <br />

      {`The input below changes the value of the constant "clientSideSrc".`} <br />
      {`The client will render <img src={clientSideSrc} />`} <br />
      {`To try it: type in the input `} <i>https://placekitten.com/400/400</i> <br />

      <input
        value={clientSideSrc ?? ""}
        onChange={(event) => setClientSideSrc(event.target.value)}
        placeholder="clientSideSrc"
        style={{ width: "100%" }}
      />

      {typeof clientSideSrc === "string" &&
        <img src={clientSideSrc} />
      }
    </div >
  )
}

export default SecurityTests
