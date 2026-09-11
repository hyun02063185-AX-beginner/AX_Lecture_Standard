# Web Deck Content Contract

## Canonical shape

```text
Deck
├─ meta
├─ presentation
└─ sections[]
    ├─ id
    ├─ title
    ├─ tagline
    ├─ accent
    └─ slides[]
```

각 slide은 다음의 열린 type contract를 따른다.

```js
Slide {
  type,
  // type-specific fields
}
```

## Required, optional, type-specific

| 범주 | 규칙 |
|---|---|
| Required | deck meta, presentation, section id/title/tagline/accent, slide type 및 type별 렌더에 필요한 핵심 텍스트 |
| Optional | caption, image alt, link, visual layout hint, marker 등; 누락 시 safe fallback |
| Type-specific | image source/alt, quote attribution, list items, link 등 type이 요구하는 필드 |

`Room`, `Box`는 Web Deck Content Contract에 넣지 않는다.

## Validation and safe rendering

- required 누락은 개발 경고의 대상이다.
- optional 누락은 빈 UI나 문자열 노출 대신 안전하게 생략하거나 fallback한다.
- 사용자 화면에 `undefined` 또는 `null`을 표시하지 않는다.
- external link는 `{ url, label }` 형태를 사용하고, 외부 연결 용도로만 사용한다.
