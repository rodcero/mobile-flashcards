import React from "react";

import { MonoText } from "./StyledText";

export default function Warning({ children, type }) {
  return <MonoText>{children}</MonoText>;
}
