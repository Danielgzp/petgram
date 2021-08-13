import { useState } from "react";

export function useHover() {
  const [value, setValue] = useState(false);

  return [value, setValue];
}

// este solo es un archivo para ejemplo, no ahce anda en el proyecto