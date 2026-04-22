/**
 * Преобразует HEX-код цвета в объект RGB.
 * @param hex - строка вида "#RRGGBB" (регистр не важен)
 * @returns объект { r, g, b } или null, если формат неверный
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  // Регулярное выражение: строка начинается с #, затем 6 символов 0-9, A-F, a-f
  const regex = /^#([0-9a-fA-F]{6})$/;
  const match = hex.match(regex);

  if (!match) {
    return null; // не соответствует формату
  }

  // match[1] – это 6 символов без #
  const r = parseInt(match[1].slice(0, 2), 16);
  const g = parseInt(match[1].slice(2, 4), 16);
  const b = parseInt(match[1].slice(4, 6), 16);

  return { r, g, b };
};

/**
 * Преобразует HEX в строку RGB вида "rgb(r, g, g)" или null при ошибке.
 */
export const hexToRgbString = (hex: string): string | null => {
  const rgb = hexToRgb(hex);
  return rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : null;
};
