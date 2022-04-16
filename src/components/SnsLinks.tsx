import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { IconBrandTwitter, IconBrandGithub, IconNotes, IconMail } from "@tabler/icons";

const SnsLinks: React.FC<{ className?: string; showContact?: boolean }> = ({
  className,
  showContact = true,
}) => {
  return (
    <div className={classNames("sns-links", className)}>
      <Link href="https://twitter.com/takumi_bv">
        <a target="_blank" className="sns-links-item" rel="noreferrer">
          <IconBrandTwitter size={28} stroke={0.8} color="#72AD8C" />
        </a>
      </Link>
      <Link href="https://github.com/takumibv">
        <a target="_blank" className="sns-links-item" rel="noreferrer">
          <IconBrandGithub size={28} stroke={0.8} color="#72AD8C" />
        </a>
      </Link>
      <Link href="https://qiita.com/takumibv">
        <a target="_blank" className="sns-links-item" rel="noreferrer">
          <IconNotes size={28} stroke={0.8} color="#72AD8C" />
        </a>
      </Link>
      {showContact && (
        <Link href="/contact">
          <a className="sns-links-item">
            <IconMail size={28} stroke={0.8} color="#72AD8C" />
          </a>
        </Link>
      )}
    </div>
  );
};

export default SnsLinks;
