const sec = 3665;
const h = Math.round(sec / 3600);
const m = Math.round(h % 60);
const s = Math.round(sec % 3600) % 60;
console.log(h, 'ч', m, 'мин', s, 'сек');