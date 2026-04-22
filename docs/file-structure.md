# Структура проекта

```text
    HW_12-4_react-forms-hex2rgb/
    ├── docs/
    │   ├── screenshot/
    │   ├── features.md
    │   ├── installation.md
    │   ├── tech-stack.md
    │   └── file-structure.md
    ├── src/
    │   ├── components/
    │   │   └── ColorConverter/
    │   │       ├── ColorConverter.css
    │   │       └── ColorConverter.tsx
    │   ├── utils/
    │   │   └── hexToRgb.ts
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    ├── .gitignore
    ├── .prettierrc
    ├── .prettierignore
    ├── eslint.config.mjs
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## Пояснения

- `docs/screenshot/` – сюда помещаются скриншоты приложения (например, правильный ввод, ошибка, индикатор остатка).
- `src/components/ColorConverter/` – компонент конвертера и его стили.
- `src/utils/hexToRgb.ts` – утилита для преобразования HEX в RGB.
- Остальные файлы – конфигурация проекта (TypeScript, Vite, ESLint, Prettier, Git).
