import { useMediaQuery, useTheme } from "@mui/material";
import { ResponsiveContext } from "./ResponsiveContext";
import type { ReactNode } from "react";

export const ResponsiveProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ResponsiveContext.Provider>
  );
};