import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IconChevronDown } from "@tabler/icons";
import classNames from "classnames";

const Career: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(ref.current, {
        height: "auto",
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(ref.current, {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="career">
      <div className="career-item">
        <div className="career-item__left"></div>
        <div className="career-item__right">
          <div className="career-item__title sub-headline">ソフトバンク株式会社</div>
          <div className="career-item__period text">2019/04 -</div>
          <div className="career-item__text text">
            業務システムのデザインを行う部署に所属しています。
            <br />
            <br />
            【主な業務】
            <ul className="list-disc pl-6">
              <li className="mt-2">業務システムのフロントエンド開発</li>
              <li className="mt-2">UIデザインのプロトタイプ実装・ユーザーテストの実施</li>
              <li className="mt-2">デザインシステムの構築</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="career-item">
        <div className="career-item__left"></div>
        <div className="career-item__right">
          <div className="career-item__title sub-headline">東京工業大学</div>
          <div className="career-item__period text">2013/04 - 2019/03</div>
          <div className="career-item__text text">
            情報工学科に所属。
            <br />
            大学院の研究では、視線の情報を解析し、画面上のマウスなどのポインター操作をしている際の、使い心地や操作感を推定する研究を行いました。
            <br />
            <br />
            学会発表「個人番号カードを用いた病院の初診受付において必要な基本情報取得システムの提案」電子情報通信学会総合大会ポスターセッション2017年3月
          </div>
        </div>
      </div>
      <div className="career-item">
        <div className="career-item__left"></div>
        <div className="career-item__right">
          <div className="career-item__title sub-headline">株式会社 AutoScale</div>
          <div className="career-item__period text">2018/01 - 2019/03</div>
          <div className="career-item__text text">
            インターンシップ(フロントエンドエンジニア)
            <br />
            ReactによるWebフロント開発、React Nativeによるアプリ開発を行いました。
            サーバーサイドやサーバー構築など、柔軟に対応しました。
          </div>
        </div>
      </div>
      <div ref={ref} className={classNames("career-collapse", isOpen && "career-collapse--open")}>
        <div className="career">
          <div className="career-item">
            <div className="career-item__left"></div>
            <div className="career-item__right">
              <div className="career-item__title sub-headline">株式会社エメットクリエーション</div>
              <div className="career-item__period text">2016/12 - 2018/02</div>
              <div className="career-item__text text">
                インターンシップ
                <br />
                動画キュレーションアプリの管理画面やAPIの機能設計・実装に関する業務を行いました。
                <br />
                BigQueryを用いたデータの可視化やデータ分析に携わりました。
              </div>
            </div>
          </div>
          <div className="career-item">
            <div className="career-item__left"></div>
            <div className="career-item__right">
              <div className="career-item__title sub-headline">freee株式会社</div>
              <div className="career-item__period text">2016/12 - 2018/02</div>
              <div className="career-item__text text">
                インターンシップ
                <br />
                人事システムの機能追加に関する要件定義から実装までの業務を行いました。
              </div>
            </div>
          </div>
          <div className="career-item">
            <div className="career-item__left"></div>
            <div className="career-item__right">
              <div className="career-item__title sub-headline">誕生</div>
              <div className="career-item__period text">1994</div>
            </div>
          </div>
        </div>
      </div>
      <div className="career-item career-item--expand">
        <div className="career-item__left"></div>
        <div className="career-item__right">
          <a
            href="#"
            className="career-item__expand-link"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            <span className="career-item__collapse-text">過去の経歴を見る</span>
            <span className="career-item__expand-text">経歴を閉じる</span>
            <IconChevronDown
              className={classNames("inline-block", isOpen && "rotate-180")}
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
