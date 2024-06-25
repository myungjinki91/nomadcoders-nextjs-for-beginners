# 1 [🔥 2024 UPDATE 🔥] INTRODUCTION

## 1.1 ❤️ 무료 강의 ❤️

## 1.2 Welcome

2024년 최고의 선택 Next.js

https://nextjs.org/showcase

Next.js 12, 13에 비해서 많이 발전했습니다.

그리고 엄청난 개발자 경험!

풀스택 개발!

## 1.3 Requirements

React.js부터 하세요! 그러면 Framework가 왜 이렇게 동작하는지 알 수 있을겁니다.

## 1.4 Library vs Framework

React.js는 Library, Framework는 Framework

Library는 우리가 주도권을 가집니다. Framework는 내 코드를 Framework가 가져다 씁니다.

React.js를 사용하기 위해선 React를 import해야 합니다. Next.js를 쓰기 위해서 Next.js를 import하지 않습니다.

<title>을 바꾸려면 React.js에서는 내가 직접 해야 하는데, Next.js는 알아서 해줍니다.

## 1.5 Old vs New Version

## 1.6 Project Setup

자동으로 딸깍

```bash
npx create-next-app@latest --typescript
```

그런데 조금 더 수동으로 해봅시다.

```bash
npm init -y
echo 'node_modules\n.next\n' >> .gitignore
npm install react@latest next@latest react-dom@latest
mkdir app
touch app/page.tsx
```

- app/page.tsx

오, React를 import하지 않아도 동작한다구?

```tsx
export default function Tomato() {
  return <h1>Hello Next</h1>;
}
```

- package.json

```bash
  "scripts": {
    "dev": "next dev"
  },
```

# 2 [🔥 2024 UPDATE 🔥] ROUTING

## 2.0 Introduction

Next.js는 우리 디렉토리 구조를 읽을겁니다. 주의하실 점이 있습니다. 반드시 폴더 이름은 app이여야 합니다. 그리고 page.tsx여야 합니다. page의 Component이름은 상관 없습니다.

react를 import하지 않아도 됩니다.

## 2.1 Defining Routes

page.tsx가 있어야 rendering합니다. 없으면 URL이 동작하지 않습니다. app안에 components 폴더를 만들기도 하고, 공식 홈페이지에서 그렇게 알려주기도 하며, 많은 사람들이 그렇게 사용하지만 저는 그러진 않습니다.

## 2.2 Not Found Routes

app/not-found.tsx는 not-found page를 설정할 수 있습니다.

<Link>를 사용해봅시다.

usePathname()이란 것도 있습니다. 파일 첫 줄에 “use client”를 작성해야 합니다.

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
```

## 2.3 SSR vs CSR

React.js는 Client Side에서 Rendering합니다. HTML에 아무것도 없습니다.

그래서 React가 준비된 뒤에 렌더링이 진행됩니다. 그래서 시간이 걸립니다.

검색엔진은 HTML을 보고 SEO를 합니다.

Next.js로 만든 프로그램은 HTML에 내용이 있습니다.

모든~~~ component는 서버에서 렌더링 됩니다. “use client”라고 선언한 컴포넌트도 먼저 백엔드에서 렌더링됩니다.

# 5 [NEXT 12] INTRODUCTION

## 5.1 Welcome

Next.js는 가장 좋아하고 이 사이트 또한 Next.js로 만들어졌습니다.

시간 절약하고, 왜 많은 기업들이 Next.js를 선택하는지 알 수 있습니다.

Tictok, Twitch, Github copilot, Binance, Marvel, Expo, Ferrari, Framer등 많은 회사들이 도입했습니다.

## 5.2 Requirements

React.js의 state, props, routing, render에 대해 알고 있어야 합니다.

기본만 알고 있으면 됩니다.

## 5.3 Creating a Project

아래 코드 다운로드

https://github.com/nomadcoders/nextjs-fundamentals/commit/7ca6414b11a21643dcd17f356d7f8069ade71c6d

```bash
npm i react@17.0.2 react-dom@17.0.2 next@12.0.7
npm i -D eslint@8.4.1 eslint-config-next@12.0.7
```

```json
{
  "name": "nextjs-intro",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.0.7",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "eslint": "8.4.1",
    "eslint-config-next": "12.0.7"
  }
}
```

# 6 [NEXT 12] FRAMEWORK OVERVIEW

## 6.0 Library vs Framework

Library는 여러분들이 Library를 사용합니다. Framework는 여러분이 작성한 코드를 Framework가 사용합니다.

React.js를 사용할 때는 폴더 구조를 여러분이 정하면 됩니다. Next.js를 사용할 땐 폴더 구조를 따라야 합니다.

Framework에서는 추상화되어있습니다.

about.js를 만들면 자동으로 URL /about Routing이 됩니다.

## 6.1 Pages

Next.js가 알아서 파일 이름을 Routing합니다. React router같은 것은 필요 없습니다.

파일의 이름이 중요합니다. 컴포넌트의 이름은 중요하지 않습니다.

중요한 점은 export default입니다.

404 Not found도 제공합니다.

앱의 home은 index입니다.

JSX도 잘 동작합니다. JSX를 사용하기 위해 .jsx로 바꿀 필요도 없고, import React를 할 필요도 없습니다.

다만, useEffect(), useState()를 사용해야 한다면 import React해야 합니다.

## 6.3 Routing

Navigation Component을 알아봅시다. components/NavBar.js를 만듭시다.

주의할 점은 `<a>`를 사용해서 href로 이동하면 안됩니다.

`<a>`로 이동하면 모든 페이지가 reloading되는데, 그걸 원하지 않습니다. <a>로는 client side navigation을 할 수 없습니다.

`<Link>`가 필요합니다. `<Link>`와 `<a>`를 같이 사용해야 합니다.

Next.js v13에서는 `<a>`를 사용하지 않아도 됩니다.

Router 정보는 `next/router`의 `useRouter()`에서 제공합니다.

- pages/index.js

```jsx
import NavBar from ". ./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}
```

- pages/about.js

```jsx
import NavBar from "../components/NavBar";

export default function Potato() {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
    </div>
  );
}
```

- components/NavBar.js

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
```

## 6.4 CSS Modules

CSS Module을 사용해봅시다.

className을 사용하면 됩니다.

className을 사용하면 HTML으로 변환됐을 때 class 이름이 암호화됩니다.

```css
.link {
  text-decoration: none;
}

.active {
  color: tomato;
}
```

```jsx
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
```

근데 은근 이거 불편합니다.

## 6.5 Styles JSX

vercel에서 만든 styled-jsx를 사용해봅시다. NextJS에서 사용하는 방법입니다.

```jsx
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
```

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
```

장점은 className을 짓는데 머리 쓸 필요가 없다는 겁니다. 그리고 해당 Component에만 적용됩니다.

## 6.6 Custom App

App Component, App Page에 대해서 배워봅시다.

global style을 사용하고 싶다면 `<style jsx global>`

styled-jsx에서는 page별로 생각해야 합니다.

`<NavBar>`를 하나하나 복사하고 싶지도 않고, `<style jsx global>`을 하나하나 복사하고 싶지도 않습니다.

그럴 때 필요한 것은 `_app.js`입니다.

index.js를 렌더링 하기 전에 \_app.js를 먼저 봅니다.

about.js를 렌더링 하기 전에 \_app.js를 먼저 봅니다.

\_app.js는 이렇게 생겼습니다.

- pages/\_app.js

```jsx
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

이걸 수정하는겁니다.

- pages/\_app.js

```jsx
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
```

- components/NavBar.js

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
```

또 중요한 점은 global.css를 컴포넌트에서는 import할 수 없도록 막아놨습니다. 오직 \*.module.css를 사용하도록 강제합니다.

그런데 \_app.js에서는 가능합니다.

## 6.7 Recap

- pages
- static pre rendering
- css module
- styled-jsx
  - global property
- \_app.js

# 7 [NEXT 12] PRACTICE PROJECT

## 7.0 Patterns

사람들이 엄청 자주 사용하는 패턴을 봅시다. layout pattern입니다!
