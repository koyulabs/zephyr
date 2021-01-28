/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  const content: any;
  export default content;
}

type Classes = string | string[] | null;
type Variant = string | null;