import Link from "next/link";

import Image from "next/image";
export default function Title() {
  return (
    <div className="periyar-research-title">
      <span>அறிவால் விளையும் உலகு</span>
      <span>GSTIN:33AAAJP0951B1ZP</span>
      <div className="title-badge">
        <b>A+</b>
        <b>A</b>
        <b>A-</b>
      </div>
      <div className="title-link">
        <Link href="https://twitter.com/periyarVarsity" target="_blank">
          <Image src="/twitter.png" alt="link" width="40" height="40" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCJqVMMa81Cnmu3LdLpsKXYw/featured" target="_blank">
          <Image src="/youtube.png" alt="link" width="40" height="40" />  
        </Link>
      </div>
    </div>
  );
}
