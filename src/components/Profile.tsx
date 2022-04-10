import React from "react";
import Image from "next/image";
import Link from "next/link";
import SnsLinks from "./SnsLinks";

const Profile: React.FC<{ showContact?: boolean }> = ({ showContact }) => {
  return (
    <div className="profile">
      <div className="profile__icon js-icon-animation">
        <Image src="/images/profile.JPG" alt="" layout="fill" />
      </div>
      <p className="profile__name">Takumibv</p>
      <SnsLinks showContact={showContact} />
    </div>
  );
};

export default Profile;
