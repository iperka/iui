import React from "react";
import { Button, Container, useDownload } from "@iperka/iui";

const App = () => {
  const { download } = useDownload("https://speed.hetzner.de/100MB.bin");

  return (
    <Container>
      <h1>Hello, world!</h1>
      <p>Hey there, I am using @iperka/iui.</p>
      <Button onClick={() => download()}>Download</Button>
    </Container>
  );
};

export default App;
