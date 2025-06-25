import CustomBlockquote from "./CustomBlockquote";
import CustomCodeBlock from "./codeBlock/CustomCodeBlock";
import CustomHr from "./CustomHr";
import CustomImage from "./image/CustomImage";
import CustomLink from "./CustomLink";
import CustomParagraph from "./CustomParagraph";
import CustomPre from "./CustomPre";
import CustomHeading1 from "./Headings/CustomHeading1";
import CustomHeading2 from "./Headings/CustomHeading2";
import CustomHeading3 from "./Headings/CustomHeading3";
import CustomListItem from "./Lists/CustomListItem";
import CustomOrderedList from "./Lists/CustomOrderedList";
import CustomUnorderedList from "./Lists/CustomUnorderedList";
import ImageRow from "./image/ImageRow";
import Table from "./Table";
import TableRow from "./Table/TableRow";
import TableCell from "./Table/TableCell";
import Callout from "./Callout";
import * as LocalComponents from "./local";

export const markdownComponents = {
  h1: CustomHeading1,
  h2: CustomHeading2,
  h3: CustomHeading3,
  p: CustomParagraph,
  ul: CustomUnorderedList,
  ol: CustomOrderedList,
  li: CustomListItem,
  a: CustomLink,
  img: CustomImage,
  blockquote: CustomBlockquote,
  pre: CustomPre,
  code: CustomCodeBlock,
  hr: CustomHr,
  ImageRow,
  Table,
  TableRow,
  TableCell,
  Callout,
  CustomLink,
  ...LocalComponents,
};
