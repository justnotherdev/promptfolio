import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  scrolled = false;
  CHAR_DURATION = 1 / 20;
  TIMEOUT_DURATION = 0.75;
  EFFECT_COLOR = "#C1EFFB";

  public slides = [
    {
      title: "Promptfolio",
      desc: "Personal website designed with a SynthWave style, inspired on Tron Legacy Movie.\n Shows a brief introduction to myself and a couple of projects and interest.",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      site: "sitio",
      repo: "repo",
    },
    {
      title: "CoPilot",
      desc: "Missing description",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      site: "sitio",
      repo: "repo",
    },
    {
      title: "PetPal",
      desc: "Missing description",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      site: "sitio",
      // repo: "repo",
    },
    {
      title: "Let's Shoot",
      desc: "Missing description",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      site: "sitio",
      // repo: "repo",
    },
  ];


  private navMenu: HTMLElement | null = null;
  private navLink: NodeListOf<HTMLElement> | null = null;
  private qualTabs: NodeListOf<HTMLElement> | null = null;

  ngOnInit(): void {
    const decodes = document.querySelectorAll('.decode') as NodeListOf<HTMLInputElement>;
    let CHAR_DURATION = 1 / 20;
    let TIMEOUT_DURATION = 0.75;
    decodes.forEach((d) => this.animate(d));
    this.navMenu = document.getElementById('nav-menu');
    this.navLink = document.querySelectorAll('.nav__link');
    this.qualTabs = document.querySelectorAll('.qualification__button');

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    if (window.scrollY >= 560) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  showSkill(event: any) {
    let skillTab: HTMLElement = event.currentTarget.parentElement;
    let skillTabClasses = skillTab.classList;
    console.log(skillTabClasses)

    if (skillTabClasses.contains("skills__open")) {
      skillTabClasses.replace("skills__open", "skills__close");
    } else {
      skillTabClasses.replace("skills__close", "skills__open");
    }
  }

  showMenu() {
    this.navMenu!!.classList.add('show-menu');
  }

  hideMenu() {
    this.navMenu!!.classList.remove('show-menu');
  }

  scrollToElement($element: HTMLElement): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    this.hideMenu()
  }



  animate = (elem: any) => {
    // let elem = e.target;
    elem.style.animation = "";

    let text = elem.innerText;

    elem.style.backgroundColor = this.EFFECT_COLOR;
    elem.style.color = "#000000";
    elem.style.pointerEvents = "none";
    elem.style.animation = `colorChangeAnimation ${this.CHAR_DURATION * text.length + this.TIMEOUT_DURATION}s cubic-bezier(0.7, 0, 0.84, 0)`;
    elem.style.animationDelay = "0.1s"

    let newText = [];

    for (let i = 0; i < text.length; i++) {
      newText.push(this.randChar());
    }

    elem.innerHTML = newText.join("");

    let i = 0;
    let int = setInterval(() => {
      if (i >= text.length) {
        clearInterval(int);
      }


      let t: any = [];
      if (!elem.classList.contains("fromRight")) {
        for (let k = 0; k <= i; k++) {
          t.push(text[k]);
        }
        for (let k = i + 1; k < newText.length; k++) {
          t.push(this.randChar());
        }
      } else {
        let partIndex = text.length - 1 - i;
        for (let k = 0; k < partIndex; k++) {
          t.push(text[k]);
        }

      }
      let p = this.easeIn(i / text.length);
      let tim = setTimeout(() => {
        if (p == 1) {
          clearTimeout(tim);
          // elem.style.pointerEvents = "auto";
          elem.style.backgroundColor = "#000000";
          elem.style.color = this.EFFECT_COLOR;
        }
        let upText = t.join("");
        elem.innerHTML = upText;
      }, p * this.TIMEOUT_DURATION * 1000);
      i++;



    }, this.CHAR_DURATION * 1000);



  }

  randChar = () => {
    let str = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()_+-=;[]/~`";
    let c = str[Math.floor(Math.random() * str.length)];
    return Math.random() > 0.5 ? c : c.toUpperCase();
  }

  easeIn = (x: number) => {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  }

}
