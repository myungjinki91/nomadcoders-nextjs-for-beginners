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
