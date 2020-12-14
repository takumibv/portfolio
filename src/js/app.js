import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Rellax from "rellax";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

window.onload = function () {
  // ロード完了
  document.getElementById("loading").classList.add("l-loading--completed");

  // パララックス
  new Rellax('.js-rellax', {
    // center: true
  });

  document.querySelector(".js-scroll")?.addEventListener("click", (e) => {
    e.preventDefault();
    const target_href = e.target.getAttribute("href");
    const target = document.querySelector(target_href);

    const navHeader = document.querySelector(".l-header__burger--open");
    if (navHeader) {
      navHeader.classList.remove("l-header__burger--open");
    }

    gsap.to(window, {
      scrollTo: target.offsetTop - 28, // headerの高さ
      duration: 1,
      ease: "power4.out",
    });
  });

  // ScrollTop

  // navリストの更新
  window.addEventListener("scroll", (e) => {
    const about_el = document.getElementById("about");
    if (!document.querySelector(".js-nav-about")) return;
    const classList = document.querySelector(".js-nav-about").classList;
    if (window.scrollY >= about_el.offsetTop - 48 && !classList.contains("l-header__nav-item--active")) {
      classList.add("l-header__nav-item--active");
    } else if (window.scrollY < about_el.offsetTop - 48 && classList.contains("l-header__nav-item--active")) {
      classList.remove("l-header__nav-item--active");
    }
  });

  // navリストの開閉
  // js-toggle-nav
  document.querySelector(".js-toggle-nav")?.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target.closest(".l-header__burger");
    console.log("target", target);
    if (!target) return;

    const classList = target.classList;

    if (classList.contains("l-header__burger--open")) {
      classList.remove("l-header__burger--open");
    } else {
      classList.add("l-header__burger--open");
    }
  });

  // テキストアニメーション
  const texts = document.querySelectorAll(".js-text-animation");
  texts.forEach(text => {
    const text_array = text.textContent.split("");
    text.textContent = "";
    text_array.forEach(char => {
      const el = document.createElement('SPAN');
      if (char === " ") el.classList.add("u-d-inline");
      el.textContent = char;
      text.appendChild(el);
    })
  });
  console.log(document.querySelectorAll(".js-text-animation span"));
  gsap.from(".js-text-animation span", {
    delay: 0.3,
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: {
      from: "start", // 順番に
      amount: 2 // 1秒おきに
    },
  });

  // グラフのアニメーション
  gsap.to(".js-graph-indicator", {
    scaleY: 1,
    defaults: { duration: 0.5, ease: "power4.out" }, // tweenのデフォルトの値
    stagger: {
      from: "random", //ランダムに
      amount: 0.3 // 0.3秒おきに
    },
    scrollTrigger: {
      // markers: true, // マーカーを表示するか（開発用）
      trigger: ".skills", // この要素と交差するとイベントが発火
      start: "top 75%", // ウィンドウのどの位置を発火の基準点にするか
      // end: "bottom top", // ウィンドウのどの位置をイベントの終了点にするか
      toggleActions: "restart none none reverse", // スクロールイベントで発火するアニメーションの種
    }
  });

  // 経歴の開閉
  const career_toggle_button = document.querySelector(".js-toggle-career-collapse");
  career_toggle_button?.addEventListener("click", (e) => {
    e.preventDefault();
    const button = e.target.closest(".js-toggle-career-collapse");
    const target = document.querySelector(button.dataset.target);

    if (!target) return;

    if (target.classList.contains('career-collapse--open')) {
      target.classList.remove('career-collapse--open');
      gsap.to(target, {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    } else {
      target.classList.add('career-collapse--open');
      gsap.to(target, {
        height: "auto",
        duration: 0.3,
        ease: "power2.inOut"
      });
      // 開いた場所でスクロールを固定する
      gsap.to(window, {
        scrollTo: window.scrollY,
        duration: 0.3,
      })
    }
  });
}