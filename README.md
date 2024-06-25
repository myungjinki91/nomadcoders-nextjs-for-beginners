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
