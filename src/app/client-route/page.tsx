"use client";

import { useTheme } from "@/context/themeProvider";
import { clientSideFunction } from "@/app/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <div>
      <h1 className="font-bold" style={{ color: theme.colors.primary }}>
        Client Route,{result}
      </h1>
    </div>
  );
}
