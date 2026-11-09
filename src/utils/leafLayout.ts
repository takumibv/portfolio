/**
 * Hero 背景用に「葉っぱの茂み」のようなアイコン配置を生成する
 * シード付き乱数なので、同じ引数なら毎回同じ配置になる
 */

export type Leaf = {
  x: number; // 0..1（キャンバス幅比）
  y: number; // 0..1（キャンバス高さ比）
  size: number; // px
  rotation: number; // rad
  iconIndex: number;
  shade: number; // 0..1 葉の緑の明るさ
  depth: number; // 0(奥)..1(手前)
};

export function createRandom(seed: number) {
  let s = seed >>> 0;
  return () => {
    // mulberry32
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 茂みの中心（右下・左下に厚め、左上は空けて光が抜ける余白にする）
const CLUSTERS = [
  { x: 0.78, y: 0.72, r: 0.35, weight: 3 },
  { x: 0.55, y: 0.95, r: 0.3, weight: 2 },
  { x: 0.95, y: 0.3, r: 0.25, weight: 1.5 },
  { x: 0.15, y: 0.85, r: 0.25, weight: 1.2 },
  { x: 0.45, y: 0.45, r: 0.2, weight: 0.8 },
];

export function generateLeaves(
  count: number,
  iconCount: number,
  baseSize: number,
  seed = 1
): Leaf[] {
  const rand = createRandom(seed);
  const totalWeight = CLUSTERS.reduce((sum, c) => sum + c.weight, 0);

  const leaves: Leaf[] = [];
  for (let i = 0; i < count; i++) {
    // 重み付きでクラスタを選ぶ
    let pick = rand() * totalWeight;
    let cluster = CLUSTERS[0];
    for (const c of CLUSTERS) {
      pick -= c.weight;
      if (pick <= 0) {
        cluster = c;
        break;
      }
    }

    // クラスタ中心からガウス風に散らす
    const angle = rand() * Math.PI * 2;
    const dist = cluster.r * Math.sqrt(-2 * Math.log(1 - rand() * 0.95)) * 0.6;
    const depth = rand();

    leaves.push({
      x: clamp(cluster.x + Math.cos(angle) * dist, -0.05, 1.05),
      y: clamp(cluster.y + Math.sin(angle) * dist, -0.05, 1.05),
      size: baseSize * (0.5 + depth * 0.9 + rand() * 0.3),
      rotation: rand() * Math.PI * 2,
      iconIndex: Math.floor(rand() * iconCount) % Math.max(iconCount, 1),
      shade: rand(),
      depth,
    });
  }

  // 奥から手前の順に描画する
  return leaves.sort((a, b) => a.depth - b.depth);
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}
