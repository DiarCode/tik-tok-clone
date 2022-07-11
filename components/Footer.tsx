import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

const List = ({ items, mt = true }: { items: string[]; mt?: boolean }) => {
  const renderedFooter1 = items.map(item => (
    <p
      className="text-gray-400 text-sm hover:underline cursor-pointer"
      key={item}
    >
      {item}
    </p>
  ));

  const mtHandler = mt ? "flex flex-wrap gap-2 mt-5" : "flex flex-wrap gap-2";

  return <div className={mtHandler}>{renderedFooter1}</div>;
};

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} />
      <List items={footerList3} />

      <p className="text-gray-400 text-sm mt-5">2022 DiarCode TikTik</p>
    </div>
  );
};

export default Footer;
