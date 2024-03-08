import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};
