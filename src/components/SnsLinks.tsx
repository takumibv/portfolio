import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

const SnsLinks: React.FC<{ className?: string; showContact?: boolean }> = ({
  className,
  showContact = true,
}) => {
  return (
    <div className={classNames("sns-links", className)}>
      <Link href="https://twitter.com/takumi_bv">
        <a target="_blank" className="sns-links-item" rel="noreferrer">
          <Image src="/images/icon-twitter.png" alt="" width={32} height={32} />
        </a>
      </Link>
      <Link href="https://github.com/takumibv">
        <a target="_blank" className="sns-links-item" rel="noreferrer">
          <Image src="/images/icon-github.png" alt="" width={32} height={32} />
        </a>
      </Link>
      <Link href="https://qiita.com/takumibv">
        <a target="_blank" className="sns-links-item" rel="noreferrer">
          <Image src="/images/icon-qiita.png" alt="" width={32} height={32} />
        </a>
      </Link>
      {showContact && (
        <Link href="/contact">
          <a className="sns-links-item">
            <Image src="/images/icon-mail.png" alt="" width={32} height={32} />
          </a>
        </Link>
      )}
    </div>
  );
};

export default SnsLinks;
