import React from "https://esm.sh/react?dev";

export default function Logo({ width = 75 }: { width?: number }) {
  return (
    <img src="/logo.svg" width={width} title="Aleph.js" />
  );
}
