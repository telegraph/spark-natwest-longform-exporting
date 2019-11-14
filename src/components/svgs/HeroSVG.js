import React, { useState, useRef, useEffect } from 'react';
import { TweenMax, TimelineMax, Elastic, Power3, Power1 } from 'gsap';

import './style.scss';

export default function HeroSVG() {
  // Define Wifi refs

  return (
    <svg viewBox="0 0 575.17 486.85">
      <defs>
        <linearGradient
          id="prefix__New_Gradient_Swatch-25"
          x1={64.26}
          x2={70.14}
          y1={416.28}
          y2={419.93}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch"
          x1={14705.55}
          x2={14718.01}
          y1={196.5}
          y2={202}
          gradientTransform="matrix(-1 0 0 1 15092.6 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f6f3f7" />
          <stop offset={1} stopColor="#77488a" />
        </linearGradient>
        <linearGradient
          id="prefix__New_Gradient_Swatch-3"
          x1={14602.25}
          x2={14614.72}
          y1={103.63}
          y2={109.12}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-4"
          x1={14609.97}
          x2={14612.28}
          y1={109.93}
          y2={112.93}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-5"
          x1={340.19}
          x2={406.89}
          y1={277.89}
          y2={346.72}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-6"
          x1={182.5}
          x2={194.97}
          y1={320.31}
          y2={325.81}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-7"
          x1={190.22}
          x2={192.54}
          y1={326.62}
          y2={329.62}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-8"
          x1={269.73}
          x2={282.2}
          y1={182.59}
          y2={188.09}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-9"
          x1={277.45}
          x2={279.77}
          y1={188.9}
          y2={191.9}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-10"
          x1={14552.63}
          x2={14565.1}
          y1={280.4}
          y2={285.9}
          gradientTransform="matrix(-1 0 0 1 14840 0)"
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-11"
          x1={14560.35}
          x2={14562.67}
          y1={286.7}
          y2={289.7}
          gradientTransform="matrix(-1 0 0 1 14840 0)"
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-12"
          x1={418.92}
          x2={431.39}
          y1={146.69}
          y2={152.19}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-13"
          x1={426.64}
          x2={428.96}
          y1={152.99}
          y2={155.99}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-14"
          x1={15414.83}
          x2={15457.53}
          y1={128.6}
          y2={172.66}
          gradientTransform="matrix(-1 0 0 1 15884.5 0)"
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-15"
          x1={268.26}
          x2={285.25}
          y1={439.59}
          y2={448.55}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-16"
          x1={95.65}
          x2={101.53}
          y1={397.77}
          y2={401.42}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-17"
          x1={100.46}
          x2={106.34}
          y1={400.59}
          y2={404.24}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-18"
          x1={105.28}
          x2={111.16}
          y1={403.41}
          y2={407.06}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-19"
          x1={85.18}
          x2={91.06}
          y1={403.94}
          y2={407.59}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-20"
          x1={90}
          x2={95.88}
          y1={406.76}
          y2={410.41}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-21"
          x1={94.82}
          x2={100.7}
          y1={409.58}
          y2={413.23}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-22"
          x1={74.72}
          x2={80.6}
          y1={410.11}
          y2={413.76}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-23"
          x1={79.54}
          x2={85.42}
          y1={412.93}
          y2={416.58}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-24"
          x1={84.36}
          x2={90.24}
          y1={415.75}
          y2={419.4}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-2"
          x1={14713.26}
          x2={14715.58}
          y1={202.8}
          y2={205.8}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-26"
          x1={69.08}
          x2={74.96}
          y1={419.1}
          y2={422.75}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-27"
          x1={73.89}
          x2={79.77}
          y1={421.92}
          y2={425.57}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-28"
          x1={53.8}
          x2={59.68}
          y1={422.45}
          y2={426.1}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-29"
          x1={58.61}
          x2={64.49}
          y1={425.27}
          y2={428.92}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-30"
          x1={63.43}
          x2={69.31}
          y1={428.09}
          y2={431.74}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-31"
          x1={14551.56}
          x2={14568.55}
          y1={388.97}
          y2={397.93}
          gradientTransform="matrix(-1 0 0 1 14666.2 0)"
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-32"
          x1={526.39}
          x2={532.27}
          y1={213.14}
          y2={216.79}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-33"
          x1={531.21}
          x2={537.09}
          y1={215.96}
          y2={219.61}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-34"
          x1={536.02}
          x2={541.9}
          y1={218.78}
          y2={222.43}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-35"
          x1={515.93}
          x2={521.81}
          y1={219.31}
          y2={222.96}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-36"
          x1={520.74}
          x2={526.62}
          y1={222.13}
          y2={225.78}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-37"
          x1={525.56}
          x2={531.44}
          y1={224.95}
          y2={228.6}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-38"
          x1={505.46}
          x2={511.34}
          y1={225.48}
          y2={229.13}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-39"
          x1={510.28}
          x2={516.16}
          y1={228.3}
          y2={231.95}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-40"
          x1={515.1}
          x2={520.98}
          y1={231.12}
          y2={234.77}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-41"
          x1={495}
          x2={500.88}
          y1={231.65}
          y2={235.3}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-42"
          x1={499.82}
          x2={505.7}
          y1={234.47}
          y2={238.12}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-43"
          x1={504.64}
          x2={510.52}
          y1={237.29}
          y2={240.94}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-44"
          x1={484.54}
          x2={490.42}
          y1={237.82}
          y2={241.47}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-45"
          x1={489.36}
          x2={495.24}
          y1={240.64}
          y2={244.29}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-46"
          x1={494.17}
          x2={500.05}
          y1={243.46}
          y2={247.11}
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <linearGradient
          id="prefix__New_Gradient_Swatch-47"
          x1={14120.82}
          x2={14137.81}
          y1={204.34}
          y2={213.3}
          gradientTransform="matrix(-1 0 0 1 14666.2 0)"
          xlinkHref="#prefix__New_Gradient_Swatch"
        />
        <style>
          {
            '.prefix__cls-1{fill:#fff}.prefix__cls-2{fill:#f6f3f7}.prefix__cls-4{fill:#00b0bc}.prefix__cls-6{fill:#516cb3}.prefix__cls-7{fill:#33c0c9}.prefix__cls-8{fill:#6e89c7}.prefix__cls-11{fill:#4a6cb8}.prefix__cls-14{fill:#7a2296}.prefix__cls-16{fill:#a485b1}.prefix__cls-27{fill:#00bfc8}'
          }
        </style>
      </defs>
      <title>{'1-main_illo'}</title>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__NatWest-longform_3-digitisation-desktop">
          <path
            d="M211.7 131.1h32.9v21.1h-33zm224.7-38.2v17l-15 8.9 12.4 7.2h-23l6.1-26.9 4.4 2.6 15.1-8.8z"
            className="prefix__cls-1"
          />
          <path
            d="M410.9 108.9h22.9v17h-23zm3.1-15.4l-11 6.5h-24.2V82.9l35.2-6.5v17.1z"
            className="prefix__cls-1"
          />
          <path d="M403 82.9v17l11-6.4v-17l-11 6.4z" className="prefix__cls-2" />
          <path
            d="M490.6 78.1l-21.8 12.7h-50V73.7H443L490.6 61v17.1zm42 32.4l-13.9-13.3-23 14.1h-31L428 127.7h-31.4v18.9h26.2v8.3h-46.2L331.8 181l8.3 4.8 24.6-14.3h28L373 182.8l.1 14.6h-30.3l-8.2 4.8-13.8-8v17.2l8.2 4.8v-8.6h9v17.2h36.2l14.5 8.3 6.3 4.2h-44.8V253l-15.1 8.8h35.6l-10.7 6.3h-15.4l-12.3 7.2h-8.8L305 286v-5.6l-18.4-22h-55.1v17h22.7l9 5.3-21.8 12.7-41.5-8.3-20.2.2-10.4 2.8v17H184v9l11 6.4 2.5-1.5-.1 7.1 18.3 10.6 5 .5 42.6 4.7h-43.9l-8.6 5-30.2-17.4-60.2-9.3-47.1 5v17h45.5l16.4 9.5v10.9l7.3 4.1 12.6-7.3h32.4l9.6 5.5v8.3l22.4 13v-6.8l13.8 8h25.1v8.6l51.9 30h39.9l13.2-7.7v-15.7h41.5l25-14.5-.1-22.8-24.2-14-10 5.9-7-4v-8.8h29V334l10.1-5.9v-9l20.5-12-.3-56.7 17.5-10.2-.1-13V219L439 203.7h29.4V199l7.5-4.4h35.8L535 181h18.5v-17l-75.9-21.8 34.1-4-8.1-4.7 52.8 2.2 18.8-10.9v-17zm-109.8 36z"
            className="prefix__cls-1"
          />
          <path
            d="M338 207.7v17.1h36.2v-17l-36.1-.1zm-122.3 112v17l47.6-11.8-47.6-5.2z"
            className="prefix__cls-2"
          />
          <path
            d="M364.6 154.3L340 168.7l-8.2-4.7v17l8.2 4.8 24.6-14.3h8.5v-5.7l19.6-11.3h-28z"
            className="prefix__cls-1"
          />
          <path d="M335 244.8h35.7v17h-35.6z" fill="#00afbb" />
          <path
            d="M575.2 107.8l-9.6-5.6-33-8.7-13.9-13.3-23 14.1h-31L428 115.6h-31.6l.1 14h26.3v8.3h-46.2L331.8 164l8.3 4.8 24.6-14.3h28L373 165.8l.1 14.6h-30.3l-8.2 4.8-13.8-8v17.3l8.2 4.7v-8.6h9v17.2h36.2l14.5 8.3 6.3 4.2h-44.8V236l-15.1 8.8h35.6l-10.7 6.3h-15.4l-12.3 7.2h-8.8L305 269v-5.6l-18.4-10.6h-55.2v5.6h22.7l9.2 5.2-21.9 12.8h-47.6l-14.1-8.1-10.5 6v13.8h26.6v9H184l11 6.4 5.2-3 6.1 3.5-9 5.2 18.4 10.5 5 .5 42.6 4.7h-43.9l-8.6 5-30.2-17.4h-100v8.6l-7.3 4.2h45.5l16.4 9.4v10.9l7.3 4.2 12.6-7.4h32.4l9.6 5.5v8.4l22.4 12.9v-6.8l13.8 8h25.1v8.7l51.9 29.9h39.9l13.2-7.7-27.2-15.7h68.7l25-14.6-.1-22.7-24.2-14-10 5.8-7-4v-8.7h29v-10.5l10.1-5.9v-9l20.5-12-.3-56.7 17.5-10.2-.1-13v-8.3l-26.3-15h29.4v-5l7.5-4.3h35.8L535 164h18.5v-11.7l-38.3-22-37.6-5 34.1-4-8.1-4.8 52.9 2.2zm-152.4 21.8z"
            className="prefix__cls-4"
          />
          <path
            d="M85 238.5h33.5l17.2 9.9h48.8l57.7-33.8h45.4l20.7-12-.2-20.9 8-4.6V160l-24-5.6-10.8-6.3-6.3 3.7-13-7.4h-44l-6.4 3.7 21.8 12.6h.8H218l-9.3-5.4-6 3.5-45.5-26.3-8.1 4.8v14.4l-5.3 3.1-8.3-4.8-9 5.3-11.3-3.7v17l20 11.6-8 4.6-5.7-3.3-54-17v17l11.2 6.5H51.6L0 187v17l49 28.2h25z"
            className="prefix__cls-1"
          />
          <path
            d="M85 221.5h33.5l17.2 9.9h48.8l57.7-33.8.3.1.2-.1h44.9l20.7-12-.2-20.9 8-4.6-24.5-14.2.6-8.4-10.9-6.3-6.3 3.7-13-7.5h-44l-6.4 3.7 21.8 12.6h.8H218l-9.3-5.4-6 3.5-45.5-26.3-8.1 4.8v14.4l-5.3 3.1-8.3-4.8-9 5.3-11.4-6.6.1 20 20 11.5-8 4.6-5.7-3.3h-54l11.2 6.5H51.6l-12.2-7L0 187l49 28.2h25z"
            className="prefix__cls-4"
          />
          <path d="M422.9 137.9v-8.3h-26.4 26.3v8.3z" className="prefix__cls-1" />
          <path
            d="M575.2 107.8l-18.7 10.8-52.9-2.1 8.1 4.7-34 4 37.5 5 38.3 22V164H535l-23.3 13.5H476l-7.5 4.4v4.8H439l26.2 15.2v8.2h-23.8v6h-52.8l-14.4-8.3H338l-.1-17.2h-9v8.6l-8.1-4.7-.1-17.3 13.8 8 8.2-4.8H373v-14.6l19.5-11.4h-28L340 168.7l-8.3-4.7 45-26.1h46.2v-8.3h-26.4v-14h31.4l36.7-21.3h31l23.1-14.1 14 13.3 33 8.8 9.5 5.5z"
            className="prefix__cls-6"
          />
          <path
            d="M305 263.4v5.6l.1 14h-20.3l-44 25.5 13.5 7.9-11 6.3-27.6-3-18.3-10.5 9-5.2-6.2-3.5-5.1 3-11-6.4h11.8v-9h-26.6l-.1-13.7 10.5-6.1 14 8h47.7l21.9-12.6-9.1-5.3h-22.7v-5.6h55.1l18.4 10.6z"
            className="prefix__cls-7"
          />
          <path
            d="M316.1 160l-8 4.7.2 20.8-20.7 12h-45l-.2.2-.2-.1v-13.7h7.5v-17.7H239v5.3h-10.6l-10.1-6v-7.2l-.2-14.6h27.5l3.7 2.2h42.3L316 160z"
            className="prefix__cls-8"
          />
          <path d="M329 190.6h9v17h-9z" className="prefix__cls-2" />
          <path
            d="M436.4 85.8v7l-15 8.9 12.4 7.2h-23V85.6l6.1-3.6 7.3 4.1v6.7l12.2-7zM414 76.4L403 83h-24.2l22.9-13.6 12.3 7.1zM490.6 61l-21.8 12.7h-50l8.5-5h15.8l13-7.7h34.5z"
            className="prefix__cls-6"
          />
          <path
            d="M142.5 349.8v17l12.6-7.4v-17l-12.6 7.4zm45-7.4v17l9.6 5.6v-17l-9.6-5.6zm32.1 37l13.7 8v-17l-13.8-8v17zM350.2 409v17l13.2-7.6v-17l-13.2 7.6zm-91.8-29.9v17l51.9 30v-17l-51.9-30zm146.5 6.5v17l25-14.5v-17l-25 14.5zm12.7-58.2v6.5l10.1-5.9v-17l-10.1 5.9v10.5zm50.8-145.5v17l7.5-4.4v-17l-7.5 4.4zm43.3-4.4v17L535 181v-17l-23.3 13.5zm-8.1-61l8.1 4.7v8.5l3.5.5 7 4 34.3 1.4v-17l-52.9-2.1zm-67.1-23.6v17l-2.7 1.7v-2.7l-12.5-7.2 15.2-8.8zm32.3-19.2v17.1l21.8-12.7v-17l-21.8 12.6zm-350 251.6v17l16.4 9.5v-17l-16.4-9.5zm76.2-21.8v17l2.5-1.4v-10l8.8-5.1-6-3.5-5.2 3zm59.2-45.1V269l9.1-5.3-9.1-5.3zm85.8-89.7V182l2.8-1.6h6.4l15.4-9v-17L340 168.7zm-97.8 28.9h45.4v17h-45.4zm-106.5 33.8h48.8v17h-48.8zM85 221.5h33.6v17H84.9zm-36-6.3h25v17H49z"
            className="prefix__cls-2"
          />
          <path
            d="M394 197.9a.7.7 0 01.7 0l.7.3-1.4 2.3-.7-.3a.7.7 0 01-.2-.7 2.1 2.1 0 01.9-1.6z"
            className="prefix__cls-6"
          />
          <path
            d="M394.7 198.3a2.1 2.1 0 00-1 1.6c0 .6.4.9 1 .6a2.1 2.1 0 001-1.7c0-.6-.5-.8-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M391.8 199.1a.7.7 0 01.7 0l.7.3-1.4 2.4-.6-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M392.5 199.5a2.1 2.1 0 00-1 1.7c0 .6.4.8 1 .5a2.1 2.1 0 001-1.6c0-.7-.5-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M383.4 203.3a.7.7 0 01.7 0l.6.3-1.3 2.4-.7-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M384 203.7a2.1 2.1 0 00-1 1.7c0 .6.4.8 1 .5a2.1 2.1 0 001-1.7c0-.6-.4-.8-1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M386.6 196.4l12-6.9v7.3l-12 6.9v-7.3z"
            className="prefix__cls-2"
          />
          <path
            d="M380 192.7l6.6 3.7v7.3l-6.6-3.8v-7.3z"
            fill="url(#prefix__New_Gradient_Swatch)"
          />
          <path
            d="M392 185.8l6.6 3.7-12 6.9-6.6-3.8 12-6.8z"
            className="prefix__cls-1"
          />
          <path
            d="M381.4 204.5l1.1-1.6.6-4.3 3-1.6v6.4l-4.7 2.6v-1.5z"
            className="prefix__cls-2"
          />
          <path
            d="M381.4 204.5l-5.5-3.2v1.5l5.5 3.2v-1.5z"
            fill="url(#prefix__New_Gradient_Swatch-2)"
          />
          <path
            d="M382.5 203l-5.5-3.3-1 1.6 5.4 3.2 1.1-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M383.1 198.6l-5.5-3.2-.6 4.3 5.5 3.2.6-4.3z"
            className="prefix__cls-11"
          />
          <path
            d="M386 197l-5.4-3.2-3 1.6 5.5 3.2 3-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M383.1 198.6l1.1-.6v4l-1.7 1 .6-4.4z"
            className="prefix__cls-4"
          />
          <path
            d="M381 204.5a.6.6 0 01.3.5c0 .2-.1.3-.3.2a.7.7 0 01-.3-.5c0-.2.1-.3.3-.2zm-4.6-2.7a.7.7 0 01.3.6c0 .2-.1.2-.3.1a.7.7 0 01-.3-.5c0-.2.1-.3.3-.2z"
            className="prefix__cls-11"
          />
          <path
            d="M494.9 106.3a.7.7 0 01.6 0l.7.4-1.4 2.3-.6-.4a.7.7 0 01-.3-.6 2 2 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M495.5 106.7a2.1 2.1 0 00-1 1.7c0 .6.4.8 1 .5a2 2 0 001-1.6c0-.6-.4-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M492.7 107.6a.7.7 0 01.7 0l.6.3-1.3 2.4-.7-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M493.3 108a2.1 2.1 0 00-1 1.7c0 .6.5.8 1 .5a2.1 2.1 0 001-1.7c0-.6-.4-.8-1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M507.5 99a.7.7 0 01.7 0l.7.3-1.4 2.4-.6-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M508.2 99.4a2.1 2.1 0 00-1 1.6c0 .6.4.9 1 .6a2.1 2.1 0 001-1.7c0-.6-.5-.9-1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M505.3 100.2a.7.7 0 01.7 0l.7.3-1.4 2.4-.6-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M506 100.6a2.1 2.1 0 00-1 1.7c0 .6.4.8 1 .5a2.1 2.1 0 001-1.6c0-.7-.5-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M486.7 110.5a.7.7 0 01.7-.1l.6.4-1.3 2.3-.7-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.6z"
            className="prefix__cls-6"
          />
          <path
            d="M487.3 110.8a2.1 2.1 0 00-1 1.7c0 .6.5.8 1 .5a2.1 2.1 0 001-1.6c0-.6-.4-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M489.9 103.5l21-11.9V99l-21 12v-7.4z"
            className="prefix__cls-2"
          />
          <path
            d="M483.3 99.8l6.6 3.7v7.3l-6.6-3.7v-7.3z"
            fill="url(#prefix__New_Gradient_Swatch-3)"
          />
          <path
            d="M504.2 87.9l6.6 3.7-21 12-6.5-3.8 21-12z"
            className="prefix__cls-1"
          />
          <path
            d="M484.7 111.7l1.1-1.6.6-4.3 3-1.7v6.4l-4.7 2.6v-1.4z"
            className="prefix__cls-2"
          />
          <path
            d="M484.7 111.7l-5.5-3.2v1.4l5.5 3.2v-1.4z"
            fill="url(#prefix__New_Gradient_Swatch-4)"
          />
          <path
            d="M485.8 110l-5.5-3.1-1 1.6 5.4 3.2 1.1-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M486.4 105.8l-5.5-3.2-.6 4.3 5.5 3.2.6-4.3z"
            className="prefix__cls-11"
          />
          <path
            d="M489.3 104.1l-5.5-3.2-2.9 1.7 5.5 3.2 3-1.7z"
            className="prefix__cls-1"
          />
          <path
            d="M486.4 105.8l1.1-.7v4l-1.7 1 .6-4.3z"
            className="prefix__cls-4"
          />
          <path
            d="M484.3 111.6a.7.7 0 01.3.6c0 .1-.2.2-.3.1a.6.6 0 01-.3-.5c0-.2 0-.3.3-.2zm-4.6-2.6a.7.7 0 01.3.5c0 .2-.1.3-.3.2a.7.7 0 01-.3-.5c0-.2.1-.3.3-.2z"
            className="prefix__cls-11"
          />
          <path
            d="M407.3 232.4l11.4 6.6v-59.4l-11.4-6.5v59.3z"
            className="prefix__cls-4"
          />
          <path
            d="M430 232.4l-11.3 6.6v-59.4l11.4-6.5v59.3z"
            className="prefix__cls-11"
          />
          <path
            d="M430 173l-11.3 6.6-11.4-6.5 11.4-6.6 11.4 6.6z"
            className="prefix__cls-7"
          />
          <path d="M411.8 173.3l6.9 4v-8.8l-7-4v8.8z" className="prefix__cls-4" />
          <path d="M425.6 173.3l-7 4v-8.8l7-4v8.8z" className="prefix__cls-11" />
          <path d="M425.6 164.5l-7 4-6.9-4 7-4 7 4z" className="prefix__cls-7" />
          <path
            d="M403.4 250l13.6 7.7v-42.1l-13.6-7.7v42z"
            className="prefix__cls-4"
          />
          <path
            d="M426 252.5l-9 5.2v-42.1l9-5.2v42z"
            className="prefix__cls-11"
          />
          <path
            d="M426 210.4l-9 5.2-13.6-7.7 9-5.2 13.6 7.7z"
            className="prefix__cls-7"
          />
          <path
            d="M389.2 252.2l9 5.2V168l-9-5.2v89.4z"
            className="prefix__cls-4"
          />
          <path
            d="M407.3 252.2l-9 5.2V168l9-5.2v89.4z"
            className="prefix__cls-11"
          />
          <path
            d="M407.3 162.8l-9 5.2-9-5.1 9-5.3 9 5.2z"
            className="prefix__cls-7"
          />
          <path
            d="M462.5 100.7l11.4 6.5V66.5L462.5 60v40.8z"
            className="prefix__cls-4"
          />
          <path
            d="M485.3 100.7l-11.4 6.5V66.5l11.4-6.6v40.8z"
            className="prefix__cls-11"
          />
          <path
            d="M485.3 60l-11.4 6.5-11.4-6.5 11.4-6.6 11.4 6.5z"
            className="prefix__cls-7"
          />
          <path
            d="M458.6 118.2l13.5 7.7V84l-13.5-8v42.1z"
            className="prefix__cls-4"
          />
          <path
            d="M481.1 120.7l-9 5.2V84l9-5.3v42.1z"
            className="prefix__cls-11"
          />
          <path
            d="M481.1 78.6l-9 5.3-13.5-7.7 9-5.3 13.5 7.7z"
            className="prefix__cls-7"
          />
          <path
            d="M433.8 126.4l9 5.2V67l-9-5.2v64.6z"
            className="prefix__cls-4"
          />
          <path
            d="M462.5 120.4l-19.7 11.2V67l19.7-11.2v64.6z"
            className="prefix__cls-11"
          />
          <path
            d="M462.5 55.8L442.8 67l-9-5.2 19.6-11.2 9 5.2z"
            className="prefix__cls-7"
          />
          <path d="M447.3 129l8 4.5V80l-8 .1v49z" className="prefix__cls-4" />
          <path
            d="M464.3 128.3l-9 5.2V80l9-5.2v53.6z"
            className="prefix__cls-11"
          />
          <path d="M464.3 74.7l-9 5.2-8 .2 9-5.3h8z" className="prefix__cls-7" />
          <path
            d="M435.4 214.6c-1 0-2.4 18.3-2.4 21.4s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.4-2.3-21.4zm60.1-100.4c-.9 0-2.3 18.4-2.3 21.5s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.5-21.5-2.4-21.5zm-8.6 8.9c-1 0-2.4 18.4-2.4 21.5s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.5-2.3-21.5z"
            className="prefix__cls-14"
          />
          <path
            d="M431.3 220.5c-1 0-2.4 18.4-2.4 21.5s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.5-2.4-21.5zm-65-8.2c-1 0-2.4 18.4-2.4 21.5s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.5-2.3-21.5zm6.5 15.2c-1 0-2.4 18.4-2.4 21.5s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.5-2.3-21.5zm-141.3-86.9c-1 0-2.4 18.4-2.4 21.5s2.4 3.5 2.4 3.5 2.3-.4 2.3-3.5-1.4-21.5-2.3-21.5zM386 212.3c-1 0-2.4 18.4-2.4 21.5s2.4 3.6 2.4 3.6 2.4-.5 2.4-3.6-1.5-21.5-2.4-21.5zm54 49.7c-.8 0-2.3 18.4-2.3 21.5s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.4-2.3-21.4zm-46.2 89.8c-1 0-2.4 18.3-2.4 21.4s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.4-2.3-21.4zM274.4 245.9c-1 0-2.4 18.3-2.4 21.4s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.4-2.3-21.4zm-9.5-10.7c-1 0-2.4 18.3-2.4 21.4s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.5-2.3-21.5zm19 4.1c-1 0-2.4 18.4-2.4 21.4s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.4-2.3-21.4zM211 311c-1 0-2.5 18.4-2.5 21.5s2.4 3.5 2.4 3.5 2.4-.4 2.4-3.5-1.5-21.5-2.4-21.5zm-5.8 17.7c-.9 0-2.3 18.4-2.3 21.5s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.4-21.5-2.4-21.5zm-58.8-12.8c-.9 0-2.3 18.4-2.3 21.5s2.3 3.5 2.3 3.5 2.4-.5 2.4-3.6-1.4-21.4-2.4-21.4z"
            className="prefix__cls-14"
          />
          <path
            d="M228.1 123.9c-.9 0-2.3 18.4-2.3 21.5s2.3 3.5 2.3 3.5 2.4-.4 2.4-3.5-1.5-21.5-2.4-21.5zm-73 179.1c-.9 0-2.3 18.4-2.3 21.5s2.3 3.5 2.3 3.5 2.4-.4 2.4-3.5-1.4-21.5-2.4-21.5zm-25.8-6.4c-.9 0-2.3 18.3-2.3 21.4s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.4-21.4-2.4-21.4zm109.4-160.9c-.9 0-2.3 18.3-2.3 21.4s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.4-21.4-2.4-21.4zm67 .7c-.9 0-2.3 18.4-2.3 21.5s2.3 3.5 2.3 3.5 2.4-.4 2.4-3.5-1.5-21.5-2.4-21.5zM87.3 293.6c-1 0-2.4 18.4-2.4 21.5s2.4 3.5 2.4 3.5 2.3-.5 2.3-3.5-1.4-21.5-2.3-21.5zm7.5 4.4c-1 0-2.4 18.4-2.4 21.5s2.4 3.5 2.4 3.5 2.3-.5 2.3-3.6-1.4-21.4-2.3-21.4z"
            className="prefix__cls-14"
          />
          <path
            d="M292.3 345.5v-4.3l2.3-8.2 136.2-78.7v11.4l-138.5 79.8z"
            fill="url(#prefix__New_Gradient_Swatch-5)"
          />
          <path
            d="M294.6 333l-10 3.8 2.3-8.2L423 250l7.7 4.4L294.6 333z"
            className="prefix__cls-1"
          />
          <path
            d="M294.6 333l-7.7-4.4-2.4 8.2v4.3l7.8 4.4v-4.3l2.3-8.2z"
            className="prefix__cls-2"
          />
          <path
            d="M292.3 342.1v3.4l138.5-79.8v-3.4l-138.5 79.8z"
            className="prefix__cls-16"
          />
          <path
            d="M292.3 341.2l-7.8-4.4 2.2-7.3 7.7 4.4-2.1 7.3z"
            className="prefix__cls-11"
          />
          <path d="M296.4 343.1v-10l5.2-3v10l-5.2 3z" className="prefix__cls-2" />
          <path
            d="M297 339.4l4.1-2.4v-5.8l-4.2 2.4v5.8zm6.2-4.9l12-6.8v-4.5l-12 6.8v4.5zm13.6-7.7l11.9-6.8v-4.5l-12 6.8v4.5z"
            className="prefix__cls-11"
          />
          <path d="M330 323.8v-10l5.3-3v10l-5.2 3z" className="prefix__cls-2" />
          <path
            d="M330.6 320l4.1-2.4v-5.7l-4.1 2.4v5.7zm6.2-4.8l12-6.8v-4.5l-12 6.8v4.5zm13.6-7.8l12-6.8v-4.5l-12 6.8v4.5z"
            className="prefix__cls-11"
          />
          <path d="M363.7 304.4v-10l5.2-3v10l-5.2 3z" className="prefix__cls-2" />
          <path
            d="M364.2 300.6l4.2-2.4v-5.7l-4.2 2.4v5.8zm6.2-4.8l12-6.8v-4.5l-12 6.8v4.5zM384 288l12-6.7v-4.5l-12 6.8v4.4z"
            className="prefix__cls-11"
          />
          <path d="M397.5 285v-10l5.2-3v10l-5.2 3z" className="prefix__cls-2" />
          <path
            d="M398 281.1l4.2-2.4V273l-4.2 2.4v5.7zm6.3-4.8l11.9-6.8V265l-12 6.8v4.5zm13.6-7.8l11.9-6.8v-4.5l-12 6.8v4.5z"
            className="prefix__cls-11"
          />
          <path
            d="M175.5 321.7a.7.7 0 00-.7 0l-.6.3 1.4 2.4.6-.4a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M174.9 322a2.1 2.1 0 011 1.7c0 .6-.5.9-1 .6a2.1 2.1 0 01-1-1.7c0-.6.4-.8 1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M177.7 323a.7.7 0 00-.7 0l-.6.3 1.3 2.3.7-.3a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M177 323.3a2.1 2.1 0 011 1.7c0 .6-.4.8-1 .5a2.1 2.1 0 01-1-1.6c.1-.6.5-.9 1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M186.2 327.1a.7.7 0 00-.7 0l-.7.3 1.4 2.4.7-.4a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M185.5 327.5a2 2 0 011 1.7c0 .6-.4.8-1 .5a2.1 2.1 0 01-1-1.6c0-.6.5-.9 1-.6z"
            className="prefix__cls-7"
          />
          <path d="M183 320.2l-12-6.9v7.3l12 7v-7.4z" className="prefix__cls-2" />
          <path
            d="M189.6 316.5l-6.6 3.7v7.3l6.6-3.7v-7.3z"
            fill="url(#prefix__New_Gradient_Swatch-6)"
          />
          <path
            d="M177.5 309.6l-6.6 3.7 12.1 7 6.6-3.8-12.1-7z"
            className="prefix__cls-1"
          />
          <path
            d="M188.2 328.3l-1.1-1.6-.6-4.3-3-1.6v6.4l4.7 2.6v-1.5z"
            className="prefix__cls-2"
          />
          <path
            d="M188.2 328.3l5.4-3.2v1.5l-5.4 3.2v-1.5z"
            fill="url(#prefix__New_Gradient_Swatch-7)"
          />
          <path
            d="M187 326.7l5.5-3.1 1.1 1.5-5.4 3.2-1.1-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M186.5 322.4l5.4-3.1.6 4.3-5.4 3.1-.6-4.3z"
            className="prefix__cls-11"
          />
          <path
            d="M183.6 320.8l5.4-3.2 3 1.6-5.5 3.3-3-1.7z"
            className="prefix__cls-1"
          />
          <path
            d="M186.5 322.4l-1.2-.6v4l1.8 1-.6-4.4z"
            className="prefix__cls-4"
          />
          <path
            d="M188.6 328.3a.7.7 0 00-.3.5c0 .2.1.3.3.2a.7.7 0 00.3-.5c0-.2-.1-.3-.3-.2zm4.6-2.6a.7.7 0 00-.3.5c0 .2.1.2.3.2a.7.7 0 00.3-.6c0-.2-.2-.2-.3-.1z"
            className="prefix__cls-11"
          />
          <path
            d="M262.8 184a.7.7 0 00-.7 0l-.7.3 1.4 2.4.6-.4a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M262.1 184.3a2.1 2.1 0 011 1.7c0 .6-.4.9-1 .6a2.1 2.1 0 01-1-1.7c0-.6.5-.9 1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M265 185.2a.7.7 0 00-.7 0l-.7.3 1.4 2.4.7-.4a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M264.3 185.6a2 2 0 011 1.7c0 .6-.4.8-1 .5a2.1 2.1 0 01-1-1.7c0-.6.5-.8 1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M273.4 189.4a.7.7 0 00-.7 0l-.6.3 1.3 2.4.7-.4a.7.7 0 00.3-.6 2 2 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M272.8 189.8a2.1 2.1 0 011 1.7c0 .6-.5.8-1 .5a2 2 0 01-1-1.6c0-.7.4-1 1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M270.2 182.5l-12-6.9v7.3l12 6.9v-7.3z"
            className="prefix__cls-2"
          />
          <path
            d="M276.8 178.7l-6.6 3.8v7.3l6.6-3.8v-7.3z"
            fill="url(#prefix__New_Gradient_Swatch-8)"
          />
          <path
            d="M264.7 171.8l-6.6 3.8 12.1 6.9 6.6-3.8-12-6.8z"
            className="prefix__cls-1"
          />
          <path
            d="M275.4 190.6l-1.1-1.6-.6-4.3-3-1.6v6.4l4.7 2.6v-1.5z"
            className="prefix__cls-2"
          />
          <path
            d="M275.4 190.6l5.5-3.2v1.5l-5.5 3.2v-1.5z"
            fill="url(#prefix__New_Gradient_Swatch-9)"
          />
          <path
            d="M274.3 189l5.5-3.2 1 1.6-5.4 3.2-1.1-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M273.7 184.7l5.5-3.2.6 4.3-5.5 3.2-.6-4.3z"
            className="prefix__cls-11"
          />
          <path
            d="M270.8 183l5.4-3.1 3 1.6-5.5 3.2-3-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M273.7 184.7l-1.1-.6v4l1.7 1-.6-4.4z"
            className="prefix__cls-4"
          />
          <path
            d="M275.8 190.6a.7.7 0 00-.3.5c0 .2.2.3.3.2a.7.7 0 00.3-.5c0-.2-.1-.3-.3-.2zm4.6-2.6a.7.7 0 00-.3.5c0 .2.1.2.3.1a.6.6 0 00.3-.5c0-.2-.1-.3-.3-.2z"
            className="prefix__cls-11"
          />
          <path
            d="M294.3 281.8a.7.7 0 01.7 0l.7.3-1.4 2.3-.7-.3a.7.7 0 01-.2-.7 2.1 2.1 0 011-1.6z"
            className="prefix__cls-6"
          />
          <path
            d="M295 282.1a2.1 2.1 0 00-1 1.7c0 .6.4.9 1 .6a2.1 2.1 0 001-1.7c0-.6-.5-.8-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M292.1 283a.7.7 0 01.7 0l.7.3-1.4 2.4-.6-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M292.8 283.4a2.1 2.1 0 00-1 1.7c0 .6.4.8 1 .5a2.1 2.1 0 001-1.6c0-.6-.5-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M308.9 273.3a.7.7 0 01.7 0l.6.3-1.3 2.4-.7-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M309.5 273.7a2.1 2.1 0 00-1 1.6c0 .7.5.9 1 .6a2.1 2.1 0 001-1.7c0-.6-.4-.8-1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M306.7 274.6a.7.7 0 01.7-.1l.6.4-1.3 2.3-.7-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.6z"
            className="prefix__cls-6"
          />
          <path
            d="M307.4 275a2.1 2.1 0 00-1 1.6c0 .6.4.9 1 .6a2.1 2.1 0 001-1.7c0-.6-.5-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M283.7 287.2a.7.7 0 01.7 0l.6.3-1.3 2.4-.7-.4a.7.7 0 01-.3-.6 2.1 2.1 0 011-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M284.3 287.6a2.1 2.1 0 00-1 1.7c0 .6.5.8 1 .5a2.1 2.1 0 001-1.6c0-.7-.4-.9-1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M286.9 280.3l26.1-14.9v7.3l-26 14.9v-7.3z"
            className="prefix__cls-2"
          />
          <path
            d="M280.3 276.6l6.6 3.7v7.3l-6.6-3.8v-7.3z"
            fill="url(#prefix__New_Gradient_Swatch-10)"
          />
          <path
            d="M306.4 261.6l6.6 3.8-26.1 14.9-6.6-3.8 26.1-14.9z"
            className="prefix__cls-1"
          />
          <path
            d="M281.7 288.4l1.1-1.6.6-4.3 3-1.6v6.4l-4.7 2.6v-1.5z"
            className="prefix__cls-2"
          />
          <path
            d="M281.7 288.4l-5.5-3.2v1.5l5.5 3.2v-1.5z"
            fill="url(#prefix__New_Gradient_Swatch-11)"
          />
          <path
            d="M282.8 286.8l-5.5-3.2-1 1.6 5.4 3.2 1.1-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M283.4 282.5l-5.5-3.2-.6 4.3 5.5 3.2.6-4.3z"
            className="prefix__cls-11"
          />
          <path
            d="M286.3 280.9l-5.4-3.2-3 1.6 5.5 3.2 3-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M283.4 282.5l1.1-.6v4l-1.7 1 .6-4.4z"
            className="prefix__cls-4"
          />
          <path
            d="M281.3 288.4a.7.7 0 01.3.5c0 .2-.2.3-.3.2a.7.7 0 01-.3-.5c0-.2.1-.3.3-.2zm-4.6-2.7a.7.7 0 01.3.6c0 .1-.1.2-.3.1a.7.7 0 01-.3-.5c0-.2.1-.3.3-.2z"
            className="prefix__cls-11"
          />
          <path
            d="M412 148a.7.7 0 00-.7 0l-.7.4 1.4 2.3.7-.3a.7.7 0 00.3-.7 2.1 2.1 0 00-1-1.6z"
            className="prefix__cls-6"
          />
          <path
            d="M411.3 148.4a2.1 2.1 0 011 1.7c0 .6-.4.9-1 .6a2.1 2.1 0 01-1-1.7c0-.6.5-.9 1-.6z"
            className="prefix__cls-7"
          />
          <path
            d="M414.1 149.3a.7.7 0 00-.6 0l-.7.3 1.4 2.4.6-.4a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M413.5 149.7a2.1 2.1 0 011 1.7c0 .6-.4.8-1 .5a2.1 2.1 0 01-1-1.7c0-.6.5-.8 1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M422.6 153.5a.7.7 0 00-.7 0l-.6.3 1.3 2.4.7-.4a.7.7 0 00.3-.6 2.1 2.1 0 00-1-1.7z"
            className="prefix__cls-6"
          />
          <path
            d="M422 153.9a2 2 0 011 1.7c0 .6-.5.8-1 .5a2.1 2.1 0 01-1-1.7c0-.6.4-.8 1-.5z"
            className="prefix__cls-7"
          />
          <path
            d="M419.4 146.6l-12-6.9v7.3l12 6.9v-7.3z"
            className="prefix__cls-2"
          />
          <path
            d="M426 142.8l-6.6 3.8v7.3l6.6-3.8v-7.3z"
            fill="url(#prefix__New_Gradient_Swatch-12)"
          />
          <path
            d="M414 136l-6.7 3.7 12.1 6.9 6.6-3.8-12-6.9z"
            className="prefix__cls-1"
          />
          <path
            d="M424.6 154.7l-1.1-1.6-.6-4.3-3-1.6v6.4l4.7 2.6v-1.5z"
            className="prefix__cls-2"
          />
          <path
            d="M424.6 154.7l5.4-3.2v1.5l-5.4 3.2v-1.5z"
            fill="url(#prefix__New_Gradient_Swatch-13)"
          />
          <path
            d="M423.5 153.1l5.5-3.2 1 1.6-5.4 3.2-1.1-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M422.9 148.8l5.5-3.2.6 4.3-5.5 3.2-.6-4.3z"
            className="prefix__cls-11"
          />
          <path
            d="M420 147.2l5.4-3.2 3 1.6-5.5 3.2-3-1.6z"
            className="prefix__cls-1"
          />
          <path
            d="M422.9 148.8l-1.1-.6v4l1.7 1-.6-4.4z"
            className="prefix__cls-4"
          />
          <path
            d="M425 154.7a.7.7 0 00-.3.5c0 .2.1.3.3.2a.7.7 0 00.3-.5c0-.2-.1-.3-.3-.2zm4.6-2.7a.7.7 0 00-.3.5c0 .2.1.3.3.2a.7.7 0 00.3-.5c0-.2-.1-.3-.3-.2z"
            className="prefix__cls-11"
          />
          <path
            d="M511.4 147.6l10.4 6v-42l-10.4-6v42z"
            className="prefix__cls-4"
          />
          <path
            d="M530.8 148.4l-9 5.2v-42l9-5.3v42z"
            className="prefix__cls-11"
          />
          <path
            d="M530.8 106.3l-9 5.2-10.4-6 9-5.2 10.4 6z"
            className="prefix__cls-7"
          />
          <path
            d="M495.4 153.4l12.4 7.2v-56.8l-12.4-7.1v56.7z"
            className="prefix__cls-4"
          />
          <path
            d="M518.5 154.4l-10.7 6.2v-56.8l10.7-6.2v56.8z"
            className="prefix__cls-11"
          />
          <path
            d="M518.5 97.6l-10.7 6.2-12.4-7 10.8-6.3 12.3 7.1z"
            className="prefix__cls-7"
          />
          <path
            d="M499.8 162l8.5 4.9V122l-8.5-4.9V162z"
            className="prefix__cls-4"
          />
          <path
            d="M518.2 161.3l-9.9 5.6V122l9.9-5.6v44.9z"
            className="prefix__cls-11"
          />
          <path
            d="M518.2 116.4l-9.9 5.6-8.5-4.9 9.9-5.6 8.5 5z"
            className="prefix__cls-7"
          />
          <path
            d="M502.6 117.2l6 3.5v-5.3l-6-3.5v5.3z"
            className="prefix__cls-4"
          />
          <path d="M515.6 116.7l-7 4v-5.3l7-4v5.3z" className="prefix__cls-11" />
          <path
            d="M515.6 111.4l-7 4-6-3.5 7-4 6 3.5z"
            className="prefix__cls-7"
          />
          <path
            d="M504.6 111.8l4.1 2.4v-3.6l-4-2.3v3.5z"
            className="prefix__cls-4"
          />
          <path
            d="M513.5 111.5l-4.8 2.7v-3.6l4.8-2.7v3.6z"
            className="prefix__cls-11"
          />
          <path
            d="M513.5 108l-4.8 2.6-4-2.3 4.7-2.8 4.1 2.4z"
            className="prefix__cls-7"
          />
          <path
            d="M272.4 154.4l8.4 4.9v-44.9l-8.4-4.9v44.9z"
            className="prefix__cls-4"
          />
          <path
            d="M290.7 153.7l-9.9 5.6v-44.9l9.9-5.6v44.9z"
            className="prefix__cls-11"
          />
          <path
            d="M290.7 108.8l-9.9 5.6-8.4-4.9 9.8-5.6 8.5 5z"
            className="prefix__cls-7"
          />
          <path
            d="M275 109.6l6.1 3.5v-5.3l-6-3.5v5.3z"
            className="prefix__cls-4"
          />
          <path d="M288.1 109.1l-7 4v-5.3l7-4v5.3z" className="prefix__cls-11" />
          <path
            d="M288.1 103.8l-7 4-6-3.5 7-4 6 3.5z"
            className="prefix__cls-7"
          />
          <path
            d="M277.1 104.3l4.2 2.4V103l-4.2-2.3v3.6z"
            className="prefix__cls-4"
          />
          <path
            d="M286 104l-4.7 2.7V103l4.7-2.7v3.6z"
            className="prefix__cls-11"
          />
          <path
            d="M286 100.3l-4.7 2.8-4.2-2.4L282 98l4.1 2.3z"
            className="prefix__cls-7"
          />
          <path
            d="M495.4 131.6c-.9 0-2.3 18.4-2.3 21.4s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.5-21.4-2.4-21.4zm47.1-3c-.9 0-2.3 18.4-2.3 21.5s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.4-21.5-2.4-21.5zm7 7.8c-1 0-2.4 18.4-2.4 21.5s2.4 3.5 2.4 3.5 2.4-.4 2.4-3.5-1.5-21.5-2.4-21.5zM462.2 117c-1 0-2.4 18.4-2.4 21.5s2.4 3.5 2.4 3.5 2.3-.4 2.3-3.5-1.4-21.5-2.3-21.5zm-65.7-.9c-.9 0-2.3 18.4-2.3 21.5s2.3 3.5 2.3 3.5 2.4-.4 2.4-3.5-1.4-21.5-2.4-21.5z"
            className="prefix__cls-14"
          />
          <path
            d="M495.7 171.1v-4.3l-2.3-8.2-76.9-44.5v11.4l79.2 45.6z"
            fill="url(#prefix__New_Gradient_Swatch-14)"
          />
          <path
            d="M493.4 158.6l10 3.8-2.3-8.2-76.9-44.5-7.7 4.4 76.9 44.5z"
            className="prefix__cls-1"
          />
          <path
            d="M493.4 158.6l7.7-4.4 2.4 8.2v4.3l-7.8 4.4v-4.3l-2.3-8.2z"
            className="prefix__cls-2"
          />
          <path
            d="M495.7 167.7v3.4l-79.2-45.6V122l79.2 45.6z"
            className="prefix__cls-16"
          />
          <path
            d="M495.7 166.8l7.8-4.4-2.2-7.4-7.7 4.4 2.1 7.4z"
            className="prefix__cls-11"
          />
          <path d="M491.6 168.7v-10l-5.2-3v10l5.2 3z" className="prefix__cls-2" />
          <path
            d="M491 165l-4.1-2.5v-5.7l4.2 2.4v5.7zm-6.2-4.9l-12-6.8v-4.5l12 6.8v4.5zm-13.6-7.8l-11.9-6.8V141l12 6.8v4.5z"
            className="prefix__cls-11"
          />
          <path d="M458 149.3v-10l-5.3-3v10l5.2 3z" className="prefix__cls-2" />
          <path
            d="M457.4 145.6l-4.1-2.4v-5.8l4.1 2.5v5.7zm-6.2-4.8l-12-6.9v-4.5l12 6.8v4.6zm-13.6-7.8l-12-6.8v-4.5l12 6.8v4.5z"
            className="prefix__cls-11"
          />
          <path d="M424.3 130v-10l-5.2-3v10l5.2 3z" className="prefix__cls-2" />
          <path
            d="M423.8 126.2l-4.2-2.4v-5.7l4.2 2.4v5.7zm-72.2 135.1l-9 5.3v-78.2l9-5.3v78.2z"
            className="prefix__cls-11"
          />
          <path
            d="M351.6 183.1l-9 5.3-9-5.2 9-5.2 9 5.1z"
            className="prefix__cls-7"
          />
          <path
            d="M342.6 195.8v-7.4l-9-5.3v78.2l18 10.6v-70.8l-9-5.3z"
            className="prefix__cls-4"
          />
          <path
            d="M360.6 266.7l-9 5.2v-70.8l9-5.3v71z"
            className="prefix__cls-11"
          />
          <path
            d="M360.6 195.8l-9 5.3-9-5.2 9-5.2 9 5.1z"
            className="prefix__cls-7"
          />
          <path
            d="M311.1 275l8.5 4.9v-53.1l-8.5-5V275z"
            className="prefix__cls-4"
          />
          <path
            d="M334.3 271.4l-14.7 8.5v-53.1l14.7-8.5v53.1z"
            className="prefix__cls-11"
          />
          <path
            d="M334.3 218.3l-14.7 8.5-8.5-5 14.7-8.4 8.5 5z"
            className="prefix__cls-7"
          />
          <path d="M313.8 222l6 3.4v-5.3l-6-3.4v5.2z" className="prefix__cls-4" />
          <path
            d="M331.7 218.6l-11.9 6.8v-5.3l12-6.8v5.3z"
            className="prefix__cls-11"
          />
          <path
            d="M331.7 213.3l-11.9 6.8-6-3.4 11.9-6.8 6 3.4z"
            className="prefix__cls-7"
          />
          <path
            d="M328.3 277l10.3 6v-31.2l-10.4-6v31.1z"
            className="prefix__cls-4"
          />
          <path
            d="M360.6 270.4l-22 12.6v-31.2l22-12.6v31.2z"
            className="prefix__cls-11"
          />
          <path
            d="M360.6 239.2l-22 12.6-10.4-6 22-12.6 10.4 6z"
            className="prefix__cls-7"
          />
          <path
            d="M321 289.2l9.3 5.3v-55l-9.3-5.3v55z"
            className="prefix__cls-4"
          />
          <path
            d="M340 289l-9.8 5.5v-55l9.8-5.6v55z"
            className="prefix__cls-11"
          />
          <path
            d="M340 233.9l-9.8 5.6-9.2-5.3 9.8-5.6 9.2 5.3z"
            className="prefix__cls-7"
          />
          <path
            d="M447.3 139.3c-1 0-2.4 18.3-2.4 21.4s2.4 3.6 2.4 3.6 2.4-.5 2.4-3.6-1.5-21.4-2.4-21.4z"
            className="prefix__cls-14"
          />
          <path
            d="M450.3 151.4c-.9 0-2.3 18.4-2.3 21.5s2.3 3.6 2.3 3.6 2.4-.5 2.4-3.6-1.4-21.5-2.4-21.5zM386 122.6c-1 0-2.4 18.4-2.4 21.4s2.4 3.6 2.4 3.6 2.4-.5 2.4-3.6-1.5-21.4-2.4-21.4z"
            className="prefix__cls-14"
          />
          <path
            d="M371.8 349l11.4 6.5v-59.3l-11.4-6.6V349z"
            className="prefix__cls-4"
          />
          <path
            d="M398 347l-14.8 8.5v-59.3l14.9-8.6V347z"
            className="prefix__cls-11"
          />
          <path
            d="M398 287.6l-14.8 8.6-11.4-6.6 14.8-8.5 11.4 6.5z"
            className="prefix__cls-7"
          />
          <path
            d="M367.9 366.5l13.6 7.7v-42l-13.6-7.8v42.1z"
            className="prefix__cls-4"
          />
          <path d="M390.5 369l-9 5.2v-42l9-5.3V369z" className="prefix__cls-11" />
          <path
            d="M390.5 327l-9 5.1-13.6-7.7 9-5.2 13.6 7.7z"
            className="prefix__cls-7"
          />
          <path
            d="M353.7 368.7l9 5.2v-89.3l-9-5.2v89.3z"
            className="prefix__cls-4"
          />
          <path
            d="M371.8 368.7l-9 5.2v-89.3l9-5.2v89.3z"
            className="prefix__cls-11"
          />
          <path
            d="M371.8 279.4l-9 5.2-9-5.2 9-5.2 9 5.2z"
            className="prefix__cls-7"
          />
          <path
            d="M353.5 377.8l8.6 5v-35.9l-8.6-4.9v35.8z"
            className="prefix__cls-4"
          />
          <path
            d="M379 372.9l-17 9.9v-35.9l17-9.8v35.8z"
            className="prefix__cls-11"
          />
          <path
            d="M379 337l-17 10-8.5-5 17-9.9 8.5 5z"
            className="prefix__cls-7"
          />
          <path
            d="M395.5 359.9l8.6 5v-70.6l-8.6-11V360z"
            className="prefix__cls-4"
          />
          <path
            d="M414.3 358.8l-10.2 6v-70.5l10.2-6v70.5z"
            className="prefix__cls-11"
          />
          <path
            d="M414.3 288.3l-10.2 6-8.6-10.9 10.2-6 8.6 10.9z"
            className="prefix__cls-7"
          />
          <path
            d="M407.3 355.5c-1 0-2.4 18.4-2.4 21.5s2.4 3.5 2.4 3.5 2.4-.4 2.4-3.5-1.5-21.5-2.4-21.5zm15.6-26.8c-1 0-2.4 18.4-2.4 21.5s2.4 3.6 2.4 3.6 2.3-.5 2.3-3.6-1.4-21.5-2.3-21.5z"
            className="prefix__cls-14"
          />
          <path
            d="M249.2 343l11 6.4V285l-11-6.3V343z"
            className="prefix__cls-4"
          />
          <path
            d="M249.2 278.8l11 6.3 9.4-5.5-10.9-6.3-9.5 5.5z"
            className="prefix__cls-7"
          />
          <path
            d="M259.1 294.7v-9.6l9.5-5.5V344l-19 11v-54.7l9.5-5.5z"
            className="prefix__cls-11"
          />
          <path
            d="M238.7 348.5l11 6.3v-54.6l-11-6.3v54.6z"
            className="prefix__cls-4"
          />
          <path
            d="M238.7 293.9l11 6.3 9.4-5.4-10.9-6.4-9.5 5.5z"
            className="prefix__cls-7"
          />
          <path
            d="M218.7 355.2l8.6 5v-70.6l-8.6-10.9v76.5z"
            className="prefix__cls-4"
          />
          <path
            d="M244.2 350.3l-17 9.9v-70.6l17-9.9v70.6z"
            className="prefix__cls-11"
          />
          <path
            d="M244.2 279.7l-17 10-8.5-11 17-9.8 8.5 10.8z"
            className="prefix__cls-7"
          />
          <path d="M235.8 359l8.5 4.9V311l-8.6-5v53z" className="prefix__cls-4" />
          <path
            d="M254.2 358.1l-9.9 5.8V311l9.9-5.8V358z"
            className="prefix__cls-11"
          />
          <path
            d="M254.2 305.4l-9.9 5.7-8.6-5 9.9-5.7 8.6 5z"
            className="prefix__cls-7"
          />
          <path
            d="M252 450.4l55.5 32.4c13.7 8.1 32.3 1.5 32.3 1.5l-87.7-41z"
            className="prefix__cls-4"
          />
          <path
            d="M252 443.3l61.9 36.1c10.9 6.5 26 5 26 5s1.2-6.7-14-15.8-58.7-34.4-58.7-34.4zm74 25.3c-15.1-9-58.8-34.4-58.8-34.4"
            className="prefix__cls-7"
          />
          <path
            d="M335.7 483.7c-4.9 0-14.1-.6-21.4-5l-60.7-35.5 13.6-8.1c4.5 2.6 44.2 25.7 58.4 34.2 11.7 7 13.3 12.5 13.4 14.3h-3.3z"
            className="prefix__cls-4"
          />
          <path
            d="M325.6 470.9c-14.2-8.5-54-31.6-58.4-34.2L255 444l59.3 34.7a44 44 0 0021.4 5h3c-1-2.6-3.8-7.2-13.1-12.8z"
            className="prefix__cls-7"
          />
          <path
            d="M281.2 448.4l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M291.3 448.8l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M283.8 444.5l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M278 450.6l7.5 4.3v-2.4l-7.4-4.4v2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M288.1 451l-2.6 1.5v2.4l2.6-1.5V451z"
            className="prefix__cls-14"
          />
          <path
            d="M280.6 446.6l-2.6 1.5 7.5 4.4 2.6-1.5-7.5-4.4z"
            className="prefix__cls-8"
          />
          <path
            d="M274.9 452.7l7.5 4.4v-2.5l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M285 453.1l-2.6 1.5v2.4l2.6-1.4V453z"
            className="prefix__cls-11"
          />
          <path
            d="M277.5 448.8l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M271.8 454.9l7.4 4.3v-2.4l-7.4-4.3v2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M281.8 455.3l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M274.4 451l-2.6 1.5 7.4 4.3 2.6-1.5-7.4-4.3z"
            className="prefix__cls-8"
          />
          <path
            d="M290.6 453.8l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M300.7 454.2l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M293.2 449.9l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M287.5 456l7.5 4.3v-2.4l-7.5-4.4v2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M297.6 456.4l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M290.1 452l-2.6 1.5 7.5 4.4 2.6-1.5-7.5-4.4z"
            className="prefix__cls-8"
          />
          <path
            d="M284.4 458.1l7.4 4.3V460l-7.4-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M294.4 458.5l-2.6 1.5v2.4l2.6-1.4v-2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M287 454.2l-2.6 1.5 7.4 4.3 2.6-1.5-7.4-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M281.2 460.3l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M291.3 460.7l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M283.8 456.4l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-8"
          />
          <path
            d="M300 459.2l7.6 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M310.2 459.6l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M302.7 455.3l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M297 461.4l7.4 4.3v-2.4l-7.5-4.4v2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M307 461.8l-2.6 1.4v2.5l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M299.5 457.4L297 459l7.5 4.4 2.6-1.6-7.5-4.3z"
            className="prefix__cls-8"
          />
          <path
            d="M293.8 463.5l7.5 4.4v-2.5l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M303.9 464l-2.6 1.4v2.5l2.6-1.5v-2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M296.4 459.6l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M290.6 465.7l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M300.7 466l-2.6 1.6v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M293.2 461.8l-2.6 1.4 7.5 4.4 2.6-1.5-7.5-4.4z"
            className="prefix__cls-8"
          />
          <path
            d="M309.5 464.6l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M319.6 465l-2.6 1.5v2.4l2.6-1.5V465z"
            className="prefix__cls-11"
          />
          <path
            d="M312.1 460.7l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M306.4 466.8l7.5 4.3v-2.5l-7.5-4.3v2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M316.5 467.1l-2.6 1.5v2.5l2.6-1.5V467z"
            className="prefix__cls-14"
          />
          <path
            d="M309 462.8l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-8"
          />
          <path
            d="M303.2 469l7.5 4.2v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M313.3 469.3l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M305.8 465l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M300 471l7.6 4.4V473l-7.5-4.4v2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M310.2 471.5l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M302.7 467.1l-2.6 1.5 7.5 4.4 2.6-1.5-7.5-4.4z"
            className="prefix__cls-8"
          />
          <path
            d="M319 470l7.5 4.3V472l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M329 470.4l-2.5 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M321.6 466l-2.6 1.6 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M315.8 472.2l7.5 4.3V474l-7.5-4.3v2.5z"
            className="prefix__cls-11"
          />
          <path
            d="M325.9 472.6l-2.6 1.4v2.5l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M318.4 468.2l-2.6 1.5 7.5 4.3 2.6-1.4-7.5-4.4z"
            className="prefix__cls-8"
          />
          <path
            d="M312.7 474.3l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-4"
          />
          <path
            d="M322.8 474.7l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M315.3 470.4l-2.6 1.5 7.5 4.3 2.6-1.5-7.5-4.3z"
            className="prefix__cls-7"
          />
          <path
            d="M309.5 476.5l7.5 4.3v-2.4l-7.5-4.3v2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M319.6 476.9l-2.6 1.5v2.4l2.6-1.5v-2.4z"
            className="prefix__cls-14"
          />
          <path
            d="M312.1 472.6l-2.6 1.4 7.5 4.4 2.6-1.5-7.5-4.3z"
            className="prefix__cls-8"
          />
          <path
            d="M267.8 440.9l12.4-7.3 1.7 11.6-12.4 7.3-1.8-11.6z"
            fill="url(#prefix__New_Gradient_Swatch-15)"
          />
          <path
            d="M267.8 432.7l-12.4 7.3 6.3 3.8 12.4-7.3-6.3-3.8z"
            className="prefix__cls-1"
          />
          <path
            d="M267.2 429.4v10.2l4-2.4V427l-4 2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M265.7 428.5l-3.4 8.2 4.9 3v-10.3l-1.5-.9z"
            className="prefix__cls-4"
          />
          <path
            d="M271.3 427l-4.1 2.4-1.5-.9 4-2.4 1.6.9z"
            className="prefix__cls-7"
          />
          <path
            d="M261.7 432.6V443l4-2.4v-10.3l-4 2.4z"
            className="prefix__cls-11"
          />
          <path
            d="M260.2 431.8l-3.5 8.1 5 3v-10.3l-1.5-.8z"
            className="prefix__cls-4"
          />
          <path
            d="M265.7 430.2l-4 2.4-1.5-.8 4-2.4 1.5.8z"
            className="prefix__cls-7"
          />
          <path
            d="M274 430.1l-12.3 7.3 6 3.5 12.5-7.3-6.1-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M269.5 452.5l-1.8-11.6-6-3.5v6.4l-6.3-3.9v4.5l14.1 8.1z"
            className="prefix__cls-2"
          />
          <path
            d="M330.5 471.6l-14 9.2c10.5 4.9 23.3 3.5 23.3 3.5s1-5.2-9.3-12.7z"
            className="prefix__cls-27"
          />
          <g id="boat-1">
            <path
              d="M280.4 435.2l-12.4 7.3.2 1.5 12.5-7.2-.3-1.6zm.4 2.6l-12.4 7.3.2 1.5 12.4-7.3-.2-1.5zm-152.1-36.9l-55.4 32.4c-13.7 8-32.3 1.5-32.3 1.5l87.8-41z"
              className="prefix__cls-11"
            />
            <path
              d="M128.7 393.8L67 429.9c-11 6.5-25.9 5-25.9 5s-1.3-6.7 13.8-15.8 58.8-34.4 58.8-34.4zm-73.9 25.3c15.1-9 58.8-34.4 58.8-34.4"
              className="prefix__cls-7"
            />
            <path
              d="M45.1 434.2c4.9 0 14.1-.6 21.4-5l60.7-35.5-13.6-8.1c-4.5 2.6-44.2 25.7-58.4 34.2-11.7 7-13.3 12.5-13.4 14.3H45z"
              className="prefix__cls-4"
            />
            <path
              d="M55.2 421.4c14.2-8.5 54-31.6 58.4-34.2l12.2 7.3-59.3 34.7a44 44 0 01-21.4 5h-3c.9-2.6 3.8-7.2 13.1-12.8z"
              className="prefix__cls-7"
            />
            <path
              d="M101 397.8l-6.2 3.6v-.9l6.2-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-16)"
            />
            <path
              d="M92.7 399.3l2.1 1.2v.9l-2.1-1.3v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M98.8 395.7l2.2 1.3-6.2 3.5-2.1-1.2 6.1-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M105.8 400.6l-6.2 3.6v-.9l6.2-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-17)"
            />
            <path
              d="M97.5 402.1l2.1 1.2v.9l-2.1-1.3v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M103.6 398.5l2.2 1.3-6.2 3.5-2.1-1.2 6.1-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M110.6 403.4l-6.2 3.6v-.9l6.2-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-18)"
            />
            <path
              d="M102.3 405l2.1 1.1v.9l-2.1-1.2v-.9z"
              className="prefix__cls-2"
            />
            <path
              d="M108.5 401.4l2.1 1.2-6.2 3.5-2.1-1.2 6.2-3.5z"
              className="prefix__cls-1"
            />
            <path
              d="M90.5 404l-6.2 3.5v-.8l6.2-3.6v.9z"
              fill="url(#prefix__New_Gradient_Swatch-19)"
            />
            <path
              d="M82.2 405.4l2.1 1.3v.8l-2.1-1.2v-.9z"
              className="prefix__cls-2"
            />
            <path
              d="M88.4 401.9l2.1 1.2-6.2 3.6-2.1-1.3 6.2-3.5z"
              className="prefix__cls-1"
            />
            <path
              d="M95.3 406.8l-6.1 3.6v-.9l6.1-3.6v.9z"
              fill="url(#prefix__New_Gradient_Swatch-20)"
            />
            <path d="M87 408.3l2.2 1.2v.9L87 409v-.8z" className="prefix__cls-2" />
            <path
              d="M93.2 404.7l2.1 1.2-6.1 3.6-2.2-1.2 6.2-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M100.1 409.6l-6.1 3.6v-.9l6.1-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-21)"
            />
            <path
              d="M91.8 411l2.2 1.3v.9l-2.2-1.3v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M98 407.5l2.1 1.3-6.1 3.5-2.2-1.2 6.2-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M80 410.1l-6.1 3.6v-.8l6.1-3.6v.8z"
              fill="url(#prefix__New_Gradient_Swatch-22)"
            />
            <path
              d="M71.7 411.6L74 413v.8l-2.2-1.2v-.9z"
              className="prefix__cls-2"
            />
            <path
              d="M77.9 408l2.1 1.3-6.1 3.6-2.2-1.3 6.2-3.5z"
              className="prefix__cls-1"
            />
            <path
              d="M84.9 413l-6.2 3.5v-.8l6.2-3.6v.9z"
              fill="url(#prefix__New_Gradient_Swatch-23)"
            />
            <path
              d="M76.6 414.4l2.1 1.3v.8l-2.1-1.2v-.9z"
              className="prefix__cls-2"
            />
            <path
              d="M82.7 410.9L85 412l-6.2 3.6-2.1-1.3 6.1-3.5z"
              className="prefix__cls-1"
            />
            <path
              d="M89.7 415.8l-6.2 3.5v-.8l6.2-3.6v.9z"
              fill="url(#prefix__New_Gradient_Swatch-24)"
            />
            <path
              d="M81.4 417.3l2.1 1.2v.8l-2.1-1.2v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M87.5 413.7l2.2 1.2-6.2 3.6-2.1-1.2 6.1-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M69.6 416.3l-6.2 3.6v-.9l6.2-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-25)"
            />
            <path
              d="M61.3 417.8l2.1 1.2v.9l-2.1-1.3v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M67.4 414.2l2.2 1.3-6.2 3.5-2.1-1.2 6.1-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M74.4 419.1l-6.2 3.6v-.8l6.2-3.6v.8z"
              fill="url(#prefix__New_Gradient_Swatch-26)"
            />
            <path
              d="M66.1 420.6l2.1 1.3v.8l-2.1-1.3v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M72.3 417l2 1.3-6 3.6-2.2-1.3 6.2-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M79.2 422l-6.2 3.5v-.8l6.2-3.6v.8z"
              fill="url(#prefix__New_Gradient_Swatch-27)"
            />
            <path d="M71 423.4l2 1.3v.8l-2-1.2v-.9z" className="prefix__cls-2" />
            <path
              d="M77 419.9l2.2 1.2-6.2 3.6-2-1.3 6-3.5z"
              className="prefix__cls-1"
            />
            <path
              d="M59.1 422.5L53 426v-.8l6.1-3.6v.9z"
              fill="url(#prefix__New_Gradient_Swatch-28)"
            />
            <path
              d="M50.8 424l2.2 1.2v.8l-2.2-1.2v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M57 420.4l2.1 1.2-6.1 3.6-2.2-1.2 6.2-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M64 425.3l-6.2 3.6v-.9l6.1-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-29)"
            />
            <path
              d="M55.6 426.8l2.2 1.2v.9l-2.2-1.3v-.8z"
              className="prefix__cls-2"
            />
            <path
              d="M61.8 423.2l2.1 1.3-6.1 3.5-2.2-1.2 6.2-3.6z"
              className="prefix__cls-1"
            />
            <path
              d="M68.8 428.1l-6.2 3.6v-.9l6.1-3.5v.8z"
              fill="url(#prefix__New_Gradient_Swatch-30)"
            />
            <path d="M60.5 429.6l2 1.2v.9l-2-1.3v-.8z" className="prefix__cls-2" />
            <path
              d="M66.6 426l2.2 1.3-6.2 3.5-2.1-1.2 6.1-3.6zm46.4-42.8l12.4 7.2-6.3 3.9-12.4-7.3 6.3-3.8z"
              className="prefix__cls-1"
            />
            <path
              d="M116.5 378.2l-4.5-2.6-4.5 2.6 4.7 2.7 4.3-2.7z"
              className="prefix__cls-7"
            />
            <path
              d="M108.5 378.2l3.5-2 3.6 2-3.4 2.1-3.8-2.1z"
              className="prefix__cls-11"
            />
            <path
              d="M112.2 380.9l-4.7-2.7v9.8l4.7 2.8v-10z"
              className="prefix__cls-4"
            />
            <path
              d="M116.5 378.2v9.9l-4.3 2.6V381l4.3-2.7z"
              className="prefix__cls-11"
            />
            <path
              d="M112 376.1v4.1l.2.1 3.4-2-3.6-2.2z"
              className="prefix__cls-4"
            />
            <path
              d="M106.7 380.6l12.4 7.3-4 2.4-12.4-7.3 4-2.4z"
              className="prefix__cls-1"
            />
            <path
              d="M113.4 401.9l1.8-11.6 4-2.4v6.4l6.2-3.9v4.5l-12 7z"
              className="prefix__cls-2"
            />
            <path
              d="M115.2 390.3l-12.5-7.3-1.7 11.6 12.4 7.3 1.8-11.6z"
              fill="url(#prefix__New_Gradient_Swatch-31)"
            />
            <path
              d="M50.3 422.1l14 9.2c-10.5 4.9-23.3 3.5-23.3 3.5s-1-5.2 9.3-12.7z"
              className="prefix__cls-27"
            />
          </g>
          <path
            d="M102.6 384.1l12.4 7.3-.2 1.5-12.5-7.2.3-1.6zm-.4 2.6l12.4 7.3-.2 1.5-12.5-7.2.3-1.6zm457.3-170.4L504 248.7c-13.7 8-32.3 1.5-32.3 1.5l87.7-41z"
            className="prefix__cls-11"
          />
          <path
            d="M559.5 209.1l-61.8 36.2c-11 6.5-26 4.9-26 4.9s-1.3-6.6 13.8-15.7 58.9-34.5 58.9-34.5zm-74 25.4c15.2-9.1 58.9-34.5 58.9-34.5"
            className="prefix__cls-7"
          />
          <path
            d="M475.9 249.6c4.8 0 14-.7 21.3-5L558 209l-13.6-8.1c-4.4 2.6-44.2 25.7-58.3 34.2-11.8 7-13.3 12.5-13.5 14.3h3.4z"
            className="prefix__cls-4"
          />
          <path
            d="M486 236.8c14.2-8.6 53.9-31.7 58.4-34.3l12.2 7.4-59.3 34.7a44 44 0 01-21.4 5h-3c.9-2.7 3.7-7.3 13.1-12.8z"
            className="prefix__cls-7"
          />
          <path
            d="M531.7 213.2l-6.2 3.5v-.8l6.2-3.6v.9z"
            fill="url(#prefix__New_Gradient_Swatch-32)"
          />
          <path
            d="M523.4 214.7l2.1 1.2v.8l-2-1.2v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M529.6 211l2.1 1.3-6.2 3.6-2-1.3 6-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M536.5 216l-6.1 3.6v-.9l6.1-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-33)"
          />
          <path
            d="M528.2 217.5l2.2 1.2v.9l-2.2-1.3v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M534.4 214l2.1 1.1-6.1 3.6-2.2-1.2 6.2-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M541.3 218.8l-6.1 3.6v-.9l6.1-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-34)"
          />
          <path
            d="M533 220.3l2.2 1.2v.9L533 221v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M539.2 216.7l2.1 1.3-6.1 3.5-2.2-1.2 6.2-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M521.2 219.3l-6.1 3.6v-.8l6.1-3.6v.8z"
            fill="url(#prefix__New_Gradient_Swatch-35)"
          />
          <path d="M513 220.8l2 1.3v.8l-2-1.2v-.9z" className="prefix__cls-2" />
          <path
            d="M519.1 217.3l2.1 1.2-6.1 3.6-2.2-1.3 6.2-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M526 222.2l-6.1 3.5v-.8l6.2-3.6v.9z"
            fill="url(#prefix__New_Gradient_Swatch-36)"
          />
          <path
            d="M517.8 223.6l2.1 1.3v.8l-2.1-1.2v-.9z"
            className="prefix__cls-2"
          />
          <path
            d="M524 220l2 1.3-6.1 3.6-2.1-1.3 6.1-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M530.9 225l-6.2 3.5v-.8l6.2-3.6v.9z"
            fill="url(#prefix__New_Gradient_Swatch-37)"
          />
          <path
            d="M522.6 226.5l2.1 1.2v.8l-2.1-1.2v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M528.7 222.9l2.2 1.2-6.2 3.6-2.1-1.2 6.1-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M510.8 225.5l-6.2 3.6v-.9l6.2-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-38)"
          />
          <path
            d="M502.5 227l2.1 1.2v.9l-2.1-1.3v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M508.6 223.4l2.2 1.3-6.2 3.5-2.1-1.2 6.1-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M515.6 228.3l-6.2 3.6v-.9l6.2-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-39)"
          />
          <path
            d="M507.3 229.8l2.1 1.2v.9l-2.1-1.3v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M513.5 226.3l2.1 1.2-6.2 3.5-2.1-1.2 6.2-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M520.4 231.2l-6.1 3.5v-.8l6.1-3.6v.8z"
            fill="url(#prefix__New_Gradient_Swatch-40)"
          />
          <path
            d="M512.1 232.6l2.2 1.3v.8l-2.2-1.2v-.9z"
            className="prefix__cls-2"
          />
          <path
            d="M518.3 229l2.1 1.3-6.1 3.6-2.2-1.3 6.2-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M500.3 231.7l-6.1 3.5v-.8l6.1-3.6v.9z"
            fill="url(#prefix__New_Gradient_Swatch-41)"
          />
          <path
            d="M492 233.2l2.2 1.2v.8L492 234v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M498.2 229.6l2.1 1.2-6.1 3.6-2.2-1.2 6.2-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M505.1 234.5l-6.1 3.6v-.9l6.1-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-42)"
          />
          <path
            d="M496.8 236l2.2 1.2v.9l-2.2-1.3v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M503 232.4l2.1 1.3-6.1 3.5-2.2-1.2 6.2-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M510 237.3l-6.2 3.6v-.9l6.1-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-43)"
          />
          <path
            d="M501.6 238.8l2.2 1.2v.9l-2.2-1.3v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M507.8 235.2l2.1 1.3-6.1 3.5-2.2-1.2 6.2-3.6z"
            className="prefix__cls-1"
          />
          <path
            d="M489.9 237.8l-6.2 3.6v-.8l6.2-3.6v.8z"
            fill="url(#prefix__New_Gradient_Swatch-44)"
          />
          <path
            d="M481.6 239.3l2.1 1.3v.8l-2.1-1.2v-.9z"
            className="prefix__cls-2"
          />
          <path
            d="M487.7 235.8l2.2 1.2-6.2 3.6-2.1-1.3 6.1-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M494.7 240.7l-6.2 3.5v-.8l6.2-3.6v.9z"
            fill="url(#prefix__New_Gradient_Swatch-45)"
          />
          <path
            d="M486.4 242.2l2.1 1.2v.8l-2.1-1.2v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M492.5 238.6l2.2 1.2-6.2 3.6-2.1-1.3 6.1-3.5z"
            className="prefix__cls-1"
          />
          <path
            d="M499.5 243.5l-6.2 3.6v-.9l6.2-3.5v.8z"
            fill="url(#prefix__New_Gradient_Swatch-46)"
          />
          <path
            d="M491.2 245l2.1 1.2v.9l-2.1-1.3v-.8z"
            className="prefix__cls-2"
          />
          <path
            d="M497.4 241.4l2 1.3-6 3.5-2.2-1.2 6.2-3.6zm46.3-42.9l12.4 7.3-6.2 3.9-12.4-7.3 6.2-3.9z"
            className="prefix__cls-1"
          />
          <path
            d="M547.2 193.6l-4.5-2.6-4.4 2.5 4.6 2.7 4.3-2.6z"
            className="prefix__cls-7"
          />
          <path
            d="M539.2 193.5l3.5-2 3.6 2.1-3.4 2.1-3.7-2.2z"
            className="prefix__cls-11"
          />
          <path
            d="M542.9 196.2l-4.6-2.7v10l4.6 2.6v-9.9z"
            className="prefix__cls-4"
          />
          <path
            d="M547.2 193.6v9.9l-4.3 2.6v-9.9l4.3-2.6z"
            className="prefix__cls-11"
          />
          <path d="M542.8 191.5v4.2l3.5-2.1-3.5-2z" className="prefix__cls-4" />
          <path
            d="M537.5 196l12.4 7.3-4 2.3-12.4-7.2 4-2.4z"
            className="prefix__cls-1"
          />
          <path
            d="M544.1 217.3l1.8-11.7 4-2.3v6.4l6.2-3.9v4.5l-12 7z"
            className="prefix__cls-2"
          />
          <path
            d="M545.9 205.6l-12.4-7.2-1.8 11.6 12.4 7.3 1.8-11.7z"
            fill="url(#prefix__New_Gradient_Swatch-47)"
          />
          <path
            d="M481 237.5l14 9.1c-10.5 5-23.3 3.6-23.3 3.6s-1-5.2 9.3-12.7z"
            className="prefix__cls-27"
          />
          <path
            d="M533.3 199.5l12.4 7.3-.2 1.5-12.4-7.3.2-1.5zm-.3 2.5l12.3 7.4-.2 1.5-12.4-7.3.2-1.5z"
            className="prefix__cls-11"
          />
          <path
            d="M313.3 23.1l-3.4-14.3 1.6-1.3L322 19.8l-8.6 3.3z"
            className="prefix__cls-2"
          />
          <path
            d="M270.3 42.5a5 5 0 012.2 3.8c0 1.4-1 2-2.3 1.3a4.9 4.9 0 01-2.2-3.9c0-1.4 1-2 2.3-1.2z"
            fill="none"
            stroke="#fddd9a"
            strokeMiterlimit={10}
            strokeWidth={0.22}
          />
          <path
            d="M262.5 46.1l6.1-3.8 3.3 5.4-6 3.8-3.4-5.4z"
            className="prefix__cls-2"
          />
          <path
            d="M264.2 46.2a5 5 0 012.2 3.9c0 1.4-1 2-2.2 1.3a5 5 0 01-2.2-3.9c0-1.4 1-2 2.2-1.3z"
            className="prefix__cls-11"
          />
          <path
            d="M290.4 55.6a4.9 4.9 0 012.2 3.9c0 1.4-1 2-2.2 1.3a5 5 0 01-2.2-3.9c0-1.4 1-2 2.2-1.3z"
            className="prefix__cls-2"
          />
          <path
            d="M283 59l5.8-3.5L292 61l-6 3.7-3-5.5z"
            className="prefix__cls-2"
          />
          <path
            d="M243.2 69.5a1.3 1.3 0 00.6 1.3c1.2.8 5 1.9 15-3.4 13.3-7 40.4-23.3 46.5-26.9s10.1-8.8 13.3-12.3 5.4-6.5 5.4-6.5V19s-11.1 3.8-16.9 7-37.4 21.6-48.8 28.1c-10.1 5.8-14.7 12.7-15 15.4z"
            className="prefix__cls-1"
          />
          <path
            d="M260.1 58.2c-1.2-.7-3.8-2-4.7-2.3-8.1 5.3-11.8 11.2-12.2 13.6a1.3 1.3 0 00.6 1.3c1.2.8 5 1.9 15-3.4l3.2-1.7c0-6-.5-6.7-1.9-7.5z"
            className="prefix__cls-2"
          />
          <path
            d="M305.2 36c-6 3.6-33.1 20-46.4 27-8.7 4.4-11.3 6.8-14.4 3.6a9 9 0 00-1.2 3 1.3 1.3 0 00.6 1.2c1.2.9 5 1.9 15-3.3 13.3-7 40.4-23.4 46.5-27s10.1-8.8 13.3-12.2 5.4-6.6 5.4-6.6v-.8s-4.8 6.6-18.8 15.1z"
            fill="#d8cedd"
          />
          <path
            d="M259.3 63v1a.2.2 0 010 .1l-.4.3h-.1v-1a.2.2 0 010-.1zm1.7-1v1a.1.1 0 010 .1l-.4.3v-1a.1.1 0 010-.1zm1.7-1v1a.2.2 0 010 .1l-.4.3h-.1v-1a.2.2 0 010-.1zm1.7-1v1a.1.1 0 010 .1l-.4.3h-.1v-1a.2.2 0 010-.1zm1.6-1v1a.2.2 0 010 .1l-.4.3v-1a.1.1 0 010-.1zm1.7-1h.1v1a.2.2 0 010 .1l-.5.3v-1a.2.2 0 010-.1zm1.7-1h.1v1a.1.1 0 010 .1l-.5.3v-1a.1.1 0 010-.2zm1.7-1v1a.2.2 0 010 .1l-.4.3v-1a.2.2 0 010-.1zm1.7-1v1a.1.1 0 010 .1l-.4.3v-1a.2.2 0 010-.1zm1.7-1v1a.2.2 0 010 .1l-.4.3v-1a.1.1 0 010-.1zm1.7-1v1a.2.2 0 010 .1l-.4.3h-.1v-1zm1.7-1v1a.1.1 0 010 .2l-.4.2h-.1v-1zm1.7-1v1a.2.2 0 010 .2l-.4.2h-.1v-1zm1.7-1v1a.1.1 0 010 .2l-.5.2v-1zm1.7-.9v1a.1.1 0 010 .1l-.5.3v-1a.1.1 0 010-.1zm1.6-1h.1v1l-.5.3v-1zm1.7-1h.1v1a.1.1 0 010 .1l-.5.3v-1a.1.1 0 010-.2zm1.7-1v1l-.4.3v-1zm1.7-1v1a.1.1 0 010 .1l-.4.3v-1a.2.2 0 010-.1zm1.7-1v1a.1.1 0 010 .1l-.4.2v-1zm1.6-1h.2v1a.2.2 0 01-.1.1l-.4.2h-.1v-.9a.2.2 0 010-.1zm2-1.8l.2.1v2.3l-1.1.6h-.2V42a.4.4 0 01.2-.3zm1.5-.2v1a.2.2 0 010 .1l-.4.3h-.1v-1a.1.1 0 010-.1zm1.7-1v1.1l-.4.3h-.1v-1zm1.7-.9v1l-.5.3v-1a.1.1 0 010-.1zm1.6-1h.1v1l-.5.3v-1a.2.2 0 010-.1zm1.7-1h.1v1l-.5.3v-1zm1.8-1v1l-.5.3v-1a.1.1 0 010-.1z"
            className="prefix__cls-11"
          />
          <path
            d="M305 29.5a44 44 0 009.3-11.5l8.3-16.3 3.3-1.7-4 20.2z"
            className="prefix__cls-1"
          />
          <path
            d="M305 29.5a44 44 0 009.3-11.5l8.3-16.3 3.3-1.7-4 20.2z"
            className="prefix__cls-1"
          />
          <path
            d="M324 21.7l17.4 3-1.6 1.3-19.8.5 4-4.8z"
            className="prefix__cls-2"
          />
          <path
            d="M275.6 58l52.9 2.5 3.1-2.5-40.4-9.1-15.6 9.1zm-7.1-9.8l-12-29.2 3.8-1.6 20.3 23.8-12 7z"
            className="prefix__cls-1"
          />
          <path
            d="M260 8.6l1.5-.7-1.2 9.5-3.8 1.6L260 8.6zm68.5 51.9l5.4-7.3 1.6-1-3.9 5.8-3.1 2.5z"
            className="prefix__cls-2"
          />
          <path
            d="M284.4 59.4a5 5 0 012.2 3.9c0 1.4-1 2-2.3 1.2a5 5 0 01-2.2-3.8c0-1.5 1-2 2.3-1.3zM252.7 66a7.8 7.8 0 01-3.6.8 3 3 0 01-3-2.5l1-1.3a2.1 2.1 0 002.2 2 5.9 5.9 0 003.4-.8z"
            className="prefix__cls-11"
          />
          <path d="M264.5 164l10.4 6v-42l-10.4-6v42z" className="prefix__cls-4" />
          <path
            d="M283.9 164.8l-9 5.2v-42l9-5.3v42z"
            className="prefix__cls-11"
          />
          <path
            d="M283.9 122.7l-9 5.2-10.4-6 9-5.2 10.4 6z"
            className="prefix__cls-7"
          />
        </g>
      </g>
    </svg>
  );
}
