import { MantineProvider } from "@mantine/core";
import sections from "./components/Section";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "SEOLLEIMcool",
      }}
    >
      <main>
        {sections.map((Section) => (
          <Section key={Section.name}></Section>
        ))}
      </main>
    </MantineProvider>
  );
}

export default App;
