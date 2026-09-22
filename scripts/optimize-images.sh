#!/usr/bin/env bash
#
# Generates the optimized WebP derivatives used by the site.
#
#   src/assets/opt/**        – hashed, immutable build assets (grid + lightbox sizes)
#   public/img/**            – stable URLs for the LCP hero image (preloaded from index.html)
#
# Source photographs stay untouched in src/assets/images/** (they are the masters).
# Re-run after adding/replacing a photo:  npm run images
#
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/src/assets/images"
OUT="$ROOT/src/assets/opt"
PUB="$ROOT/public/img"

rm -rf "$OUT" "$ROOT/public/img"

MAGICK="${MAGICK:-convert}"
command -v "$MAGICK" >/dev/null || { echo "ImageMagick ($MAGICK) not found"; exit 1; }

before=0
after=0

# webp <src> <out> [max-width|-] [quality]
webp() {
  local src="$1" out="$2" width="${3:--}" quality="${4:-72}"
  [ -f "$src" ] || { echo "missing: $src" >&2; exit 1; }
  mkdir -p "$(dirname "$out")"
  if [ "$width" = "-" ]; then
    "$MAGICK" "$src" -auto-orient -strip -define webp:method=6 -quality "$quality" "$out"
  else
    "$MAGICK" "$src" -auto-orient -resize "${width}x>" -strip -define webp:method=6 -quality "$quality" "$out"
  fi
  local b a
  b=$(stat -c%s "$src"); a=$(stat -c%s "$out")
  before=$((before + b)); after=$((after + a))
  printf '  %-46s %7s → %6s KB\n' "${out#"$ROOT/"}" "$((b / 1024))" "$((a / 1024))"
}

echo "▸ Company gallery — 900px grid thumb + 1500px lightbox view + blur placeholder"
for i in 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16; do
  s="$SRC/company-gallery/gallery-$i.jpg"
  [ -f "$s" ] || s="$SRC/company-gallery/gallery-$i.png"
  webp "$s" "$OUT/gallery/gallery-$i-600.webp"  600  74
  webp "$s" "$OUT/gallery/gallery-$i-900.webp"  900  72
  webp "$s" "$OUT/gallery/gallery-$i-1500.webp" 1500 70
  webp "$s" "$OUT/gallery/gallery-$i-lqip.webp" 20   45
done

echo "▸ Production section banners"
for name in weaving flat-bed digital dyeing finishing; do
  webp "$SRC/sections/$name-banner.jpg" "$OUT/sections/$name-banner-700.webp"  700  74
  webp "$SRC/sections/$name-banner.jpg" "$OUT/sections/$name-banner-1000.webp" 1000 72
  webp "$SRC/sections/$name-banner.jpg" "$OUT/sections/$name-banner-1600.webp" 1600 70
  webp "$SRC/sections/$name-banner.jpg" "$OUT/sections/$name-banner-lqip.webp" 20   45
done

echo "▸ Machinery photos (weaving / flat bed / digital)"
for i in 1 2 3 4 5 6 7 8 9; do
  s="$SRC/weaving/weaving-$i.jpg"; [ -f "$s" ] || s="$SRC/weaving/weaving-$i.JPG"
  webp "$s" "$OUT/weaving/weaving-$i-1200.webp" 1200 74
done
for i in 1 2 3 4 5 6; do
  webp "$SRC/flat-bed/flatbed-$i.jpg" "$OUT/flat-bed/flatbed-$i-1200.webp" 1200 74
done
for i in 1 2 3; do
  s="$SRC/digital/digital-$i.JPG"; [ -f "$s" ] || s="$SRC/digital/digital-$i.jpg"
  webp "$s" "$OUT/digital/digital-$i-1200.webp" 1200 74
done

echo "▸ Directors"
for name in manjur-elahi abdul-manun mahbubur-rahman abed-ali; do
  webp "$SRC/leaders/$name.jpg" "$OUT/leaders/$name-600.webp" 600 78
done
for name in manjur-elahi abdul-manun mahbubur-rahman; do
  webp "$SRC/leaders/$name.jpg" "$OUT/leaders/$name-lqip.webp" 20 45
done

echo "▸ Facility / ETP photo"
webp "$SRC/about-bg.jpg" "$OUT/about/about-bg-500.webp"  500  74
webp "$SRC/about-bg.jpg" "$OUT/about/about-bg-900.webp"  900  72
webp "$SRC/about-bg.jpg" "$OUT/about/about-bg-1400.webp" 1400 70
webp "$SRC/about-bg.jpg" "$OUT/about/about-bg-lqip.webp" 20   45

echo "▸ Logo"
webp "$ROOT/src/assets/logos/logo.png" "$OUT/logos/logo-176.webp" 176 82

echo "▸ Hero image (stable URLs so index.html can preload it)"
webp "$SRC/about/home_page.jpg" "$PUB/hero-960.webp"  960  60
webp "$SRC/about/home_page.jpg" "$PUB/hero-1440.webp" 1440 60
webp "$SRC/about/home_page.jpg" "$PUB/hero-1920.webp" 1920 60

echo "▸ Favicon (192px) + apple touch icon"
mkdir -p "$ROOT/public"
"$MAGICK" "$ROOT/src/assets/logos/logo.png" -resize 192x192 -strip -define png:compression-level=9 "$ROOT/public/favicon.png"
printf '  %-46s %7s → %6s KB\n' "public/favicon.png" "$((20847 / 1024))" "$(( $(stat -c%s "$ROOT/public/favicon.png") / 1024 ))"

echo
echo "▸ Totals: $((before / 1048576)) MB of source → $((after / 1048576)) MB of WebP"
