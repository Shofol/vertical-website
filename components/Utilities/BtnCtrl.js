import { gsap } from 'gsap';
import { EventEmitter } from 'events';
// import { lerp, getMousePos, calcWinsize, distance } from '../utils';

// Calculate the viewport size
const calcWinsize = () => {
    if (typeof window !== "undefined") {

        return { width: window.innerWidth, height: window.innerHeight };
    }
};
let winsize = calcWinsize();

if (typeof window !== "undefined") {
    window.addEventListener('resize', () => winsize = calcWinsize());
}
// Track the mouse position
let mousepos = { x: 0, y: 0 };
if (typeof window !== "undefined") {
    window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
}

// Map number x from range [a, b] to [c, d]
// const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;


// Gets the mouse position
const getMousePos = e => {
    return {
        x: e.clientX,
        y: e.clientY
    };
};

const distance = (x1, y1, x2, y2) => {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a, b);
}

export default class ButtonCtrl extends EventEmitter {
    constructor(el) {
        super();
        // DOM elements
        // el: main button
        // text: inner text element
        this.DOM = { el: el };
        this.DOM.text = this.DOM.el.querySelector('.button__text');
        this.DOM.textinner = this.DOM.el.querySelector('.button__text-inner');
        // amounts the button will translate
        this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.05 },
            ty: { previous: 0, current: 0, amt: 0.05 }
        };
        // button state (hover)
        this.state = {
            hover: false
        };
        // calculate size/position
        this.calculateSizePosition();
        // init events
        this.initEvents();
        // loop fn
        requestAnimationFrame(() => this.render());
    }
    calculateSizePosition() {
        // size/position
        this.rect = this.DOM.el.getBoundingClientRect();
        // the movement will take place when the distance from the mouse to the center of the button is lower than this value
        this.distanceToTrigger = this.rect.width * 1;
    }
    initEvents() {
        this.onResize = () => this.calculateSizePosition();
        window.addEventListener('resize', this.onResize);
    }
    render() {
        // calculate the distance from the mouse to the center of the button
        const distanceMouseButton = distance(mousepos.x + window.scrollX, mousepos.y + window.scrollY, (this.rect.left + this.rect.width / 2) + window.scrollX, (this.rect.top + this.rect.height / 2) + window.scrollY);
        // new values for the translations
        let x = 0;
        let y = 0;

        if (distanceMouseButton < this.distanceToTrigger) {
            if (!this.state.hover) {
                this.enter();
            }
            x = (mousepos.x - (this.rect.left + this.rect.width / 2)) * .3;
            y = (mousepos.y - (this.rect.top + this.rect.height / 2)) * .3;
        }
        else if (this.state.hover) {
            this.leave();
        }

        this.renderedStyles['tx'].current = x;
        this.renderedStyles['ty'].current = y;

        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }

        this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
        // this.DOM.text.style.transform = `translate3d(${this.renderedStyles['tx'].previous * 0.5}px, ${this.renderedStyles['ty'].previous * 0.5}px, 0)`;

        requestAnimationFrame(() => this.render());
    }
    enter() {
        this.emit('enter');
        this.state.hover = true;
        this.DOM.el.classList.add('button--hover');
        document.body.classList.add('active');

        gsap.killTweensOf(this.DOM.textinner);

        gsap
            .timeline()
            .to(this.DOM.textinner, 0.15, {
                ease: 'Power2.easeIn',
                opacity: 0,
                x: '20%'
            })
            .to(this.DOM.textinner, 0.2, {
                ease: 'Expo.easeOut',
                opacity: 1,
                startAt: { x: '-20%' },
                x: '0%'
            });
    }
    leave() {
        this.emit('leave');
        this.state.hover = false;
        this.DOM.el.classList.remove('button--hover');
        document.body.classList.remove('active');

        gsap.killTweensOf(this.DOM.textinner);

        gsap
            .timeline()
            .to(this.DOM.textinner, 0.15, {
                ease: 'Power2.easeIn',
                opacity: 0,
                x: '-20%'
            })
            .to(this.DOM.textinner, 0.2, {
                ease: 'Expo.easeOut',
                opacity: 1,
                startAt: { x: '20%' },
                x: '0%'
            });
    }
}