import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <Box>{children}</Box>;
};

export default Layout;
