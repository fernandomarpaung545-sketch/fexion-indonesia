import { NextRequest, NextResponse } from 'next/server';

const THEMES: Record<string, { from: string; to: string; accent: string; icon: string; label: string }> = {
  // Training
  petrophysics:     { from: '#0D1B3E', to: '#1A4080', accent: '#D4A017', icon: '📊', label: 'Petrophysics' },
  'formation-eval': { from: '#1A0A2E', to: '#4A1080', accent: '#E63946', icon: '🔬', label: 'Formation Evaluation' },
  geosteering:      { from: '#0A2E1A', to: '#10602A', accent: '#10B981', icon: '🧭', label: 'Geosteering' },
  ccs:              { from: '#0A2030', to: '#0A4060', accent: '#06B6D4', icon: '🌱', label: 'CCS & Energy Transition' },
  'mud-logging':    { from: '#2E1A0A', to: '#6B3010', accent: '#F59E0B', icon: '⚙️', label: 'Mud Logging' },
  wellsite:         { from: '#0A1E2E', to: '#0A3A5E', accent: '#457B9D', icon: '🗺️', label: 'Wellsite Geology' },
  reservoir:        { from: '#0A2E20', to: '#0A5E3A', accent: '#10B981', icon: '🌍', label: 'Reservoir Geology' },
  drilling:         { from: '#2E200A', to: '#5E3A0A', accent: '#F59E0B', icon: '🛢️', label: 'Drilling' },

  // Events
  conference:       { from: '#1A0A0A', to: '#4A0A0A', accent: '#E63946', icon: '🎤', label: 'Conference' },
  webinar:          { from: '#0A0A2E', to: '#0A0A6E', accent: '#6366F1', icon: '💻', label: 'Webinar' },
  workshop:         { from: '#1A0A2E', to: '#3A0A5E', accent: '#8B5CF6', icon: '🛠️', label: 'Workshop' },
  'technical-sharing': { from: '#0A1A0A', to: '#0A3A0A', accent: '#10B981', icon: '📡', label: 'Technical Sharing' },

  // Articles
  carbonates:       { from: '#1A1000', to: '#3A2A00', accent: '#D4A017', icon: '🪨', label: 'Carbonate Reservoirs' },
  geopressure:      { from: '#0A0A1A', to: '#1A1A3A', accent: '#6366F1', icon: '📈', label: 'Geopressure' },

  // Default
  default:          { from: '#040B18', to: '#1A4080', accent: '#E63946', icon: '⚡', label: 'GOFEW' },
};

function getTheme(key: string) {
  // Try exact match
  if (THEMES[key]) return THEMES[key];
  // Try partial match
  for (const [k, v] of Object.entries(THEMES)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return THEMES.default;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const theme = searchParams.get('theme') || 'default';
  const text = searchParams.get('text') || '';
  const w = parseInt(searchParams.get('w') || '800');
  const h = parseInt(searchParams.get('h') || '450');

  const t = getTheme(theme.toLowerCase());

  // Seismic line path
  const midY = h / 2;
  const points = Array.from({ length: 20 }, (_, i) => {
    const x = (i / 19) * w;
    const y = midY + Math.sin(i * 0.8) * 30 + Math.cos(i * 1.3) * 20;
    return `${x},${y}`;
  }).join(' ');

  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.from};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${t.to};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${t.accent};stop-opacity:0" />
      <stop offset="40%" style="stop-color:${t.accent};stop-opacity:0.8" />
      <stop offset="60%" style="stop-color:${t.accent};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${t.accent};stop-opacity:0" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#bg)"/>

  <!-- Grid lines -->
  ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${(i + 1) * h / 9}" x2="${w}" y2="${(i + 1) * h / 9}" stroke="white" stroke-opacity="0.04" stroke-width="1"/>`).join('')}
  ${Array.from({ length: 12 }, (_, i) => `<line x1="${(i + 1) * w / 13}" y1="0" x2="${(i + 1) * w / 13}" y2="${h}" stroke="white" stroke-opacity="0.04" stroke-width="1"/>`).join('')}

  <!-- Seismic trace -->
  <polyline points="${points}" fill="none" stroke="url(#line)" stroke-width="2" filter="url(#glow)" opacity="0.6"/>

  <!-- Accent circle glow -->
  <circle cx="${w * 0.75}" cy="${h * 0.3}" r="${h * 0.35}" fill="${t.accent}" opacity="0.06"/>
  <circle cx="${w * 0.2}" cy="${h * 0.7}" r="${h * 0.25}" fill="${t.from}" opacity="0.3"/>

  <!-- Corner accent -->
  <rect x="0" y="${h - 4}" width="${w}" height="4" fill="${t.accent}" opacity="0.8"/>

  <!-- Icon -->
  <text x="${w / 2}" y="${h / 2 - 20}" font-size="${Math.min(w, h) * 0.12}" text-anchor="middle" dominant-baseline="middle">${t.icon}</text>

  <!-- Label -->
  <text x="${w / 2}" y="${h / 2 + 30}" font-family="system-ui, sans-serif" font-size="${Math.min(w, h) * 0.045}" font-weight="600" fill="white" text-anchor="middle" opacity="0.9">${t.label}</text>

  ${text ? `<text x="${w / 2}" y="${h - 24}" font-family="system-ui, sans-serif" font-size="${Math.min(w, h) * 0.03}" fill="white" text-anchor="middle" opacity="0.5">${text}</text>` : ''}

  <!-- GOFEW watermark -->
  <text x="${w - 12}" y="${h - 10}" font-family="system-ui, sans-serif" font-size="${Math.min(w, h) * 0.025}" font-weight="700" fill="${t.accent}" text-anchor="end" opacity="0.6">GOFEW</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
