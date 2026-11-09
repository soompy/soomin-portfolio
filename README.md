# Soomin Portfolio 2026

빌드 도구나 프레임워크 없이 HTML, CSS, JavaScript로 제작한 정적 포트폴리오입니다.

## Structure

```text
.
├── .openai/
│   └── hosting.json       # Sites 배포 설정
├── dist/                  # 배포 대상 디렉터리
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── app.js
│   └── index.html
└── README.md
```

## Stack

- Semantic HTML5
- Modern CSS: Custom Properties, Grid, Flexbox, responsive media queries
- Vanilla JavaScript (ES6+)
- IntersectionObserver API
- `prefers-reduced-motion` and keyboard-focus accessibility support
- Google Fonts: DM Sans, Noto Sans KR
- Static hosting: OpenAI Sites and Vercel

## Local preview

```bash
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173` in a browser.
