import { Component, ElementRef, ViewChild } from '@angular/core';

const ACTIVE = 'active';
const ACTIVE_BUTTON = 'active-btn';

const HOME = 'home';
const HOME_BUTTON = 'homeButton';
const ABOUT = 'about';
const ABOUT_BUTTON = 'aboutButton';
const PORTFOLIO = 'portfolio';
const PORTFOLIO_BUTTON = 'portfolioButton';
const BLOG = 'blogs';
const BLOG_BUTTON = 'blogButton';
const CONTACT = 'contact';
const CONTACT_BUTTON = 'contactButton';

interface SectionButtonObject {
  section: ElementRef,
  button: ElementRef
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HOME) homeSection: ElementRef;
  @ViewChild(HOME_BUTTON) homeButton: ElementRef;

  @ViewChild(ABOUT) aboutSection: ElementRef;
  @ViewChild(ABOUT_BUTTON) aboutButton: ElementRef;

  @ViewChild(PORTFOLIO) portfolioSection: ElementRef;
  @ViewChild(PORTFOLIO_BUTTON) portfolioButton: ElementRef;

  @ViewChild(BLOG) blogSection: ElementRef;
  @ViewChild(BLOG_BUTTON) blogButton: ElementRef;

  @ViewChild(CONTACT) contactSection: ElementRef;
  @ViewChild(CONTACT_BUTTON) contactButton: ElementRef;

  title = 'portfolio';
  activeSection = 'home';

  onSectionSelect(section: string) {
    const oldSection = this.findElementRef(this.activeSection).section.nativeElement.classList;
    const oldButton = this.findElementRef(this.activeSection).button.nativeElement.classList;

    const newSection = this.findElementRef(section).section.nativeElement.classList;
    const newButton = this.findElementRef(section).button.nativeElement.classList;

    if (oldSection.contains(ACTIVE)) {
      oldSection.remove(ACTIVE);
    }
    if (oldButton.contains(ACTIVE_BUTTON)) {
      oldButton.remove(ACTIVE_BUTTON);
    }

    if (!newSection.contains(ACTIVE)) {
      newSection.add(ACTIVE);
    }
    if (!newButton.contains(ACTIVE_BUTTON)) {
      newButton.add(ACTIVE_BUTTON);
    }
    // this.blogButton.nativeElement.classList.add(ACTIVE_BUTTON)
    this.activeSection = section;
  }

  findElementRef(section: string): SectionButtonObject {
    switch (section) {
      case HOME: return { section: this.homeSection, button: this.homeButton };
      case ABOUT: return { section: this.aboutSection, button: this.aboutButton };
      case PORTFOLIO: return { section: this.portfolioSection, button: this.portfolioButton };
      case BLOG: return { section: this.blogSection, button: this.blogButton };
      case CONTACT: return { section: this.contactSection, button: this.contactButton };
      default: return { section: this.homeSection, button: this.homeButton };
    }
  }
}
