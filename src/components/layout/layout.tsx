import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { FC, ReactNode } from "react";

type LayoutProps = {
  hasNav?: boolean;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  children,
  hasNav,
}) => (
  <div className="page-container">
    <Header hasNav={hasNav} />
    {children}
    <Footer/>
  </div>
);
