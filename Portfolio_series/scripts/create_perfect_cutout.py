import math
from PIL import Image, ImageFilter, ImageDraw

def main():
    src_path = 'public/assets/profile-half.jpg'
    img = Image.open(src_path).convert('RGB')
    w, h = img.size
    pix = img.load()

    # 1. Determine silhouette boundaries (left_x and right_x) for every y
    left_bounds = [0] * h
    right_bounds = [w] * h

    # Pre-calculated clean silhouette curve based on exact feature scanning
    for y in range(h):
        if y < 114:
            left_bounds[y] = 0
            right_bounds[y] = 0
            continue

        # Top hair curve (y: 114 to 260)
        if 114 <= y < 260:
            # Left hair boundary: find where color diverges from top-left background
            bg_l = pix[15, y]
            lx = 100
            for x in range(30, 280):
                p = pix[x, y]
                diff = abs(p[0] - bg_l[0]) + abs(p[1] - bg_l[1]) + abs(p[2] - bg_l[2])
                if diff > 17:
                    lx = x
                    break
            left_bounds[y] = lx

            # Right hair boundary: find where color diverges from right background
            bg_r = pix[w - 15, y]
            rx = w - 100
            for x in range(w - 20, 300, -1):
                p = pix[x, y]
                diff = abs(p[0] - bg_r[0]) + abs(p[1] - bg_r[1]) + abs(p[2] - bg_r[2])
                if diff > 17:
                    rx = x
                    break
            right_bounds[y] = rx

        # Face, jawline, glasses, beard, neck (y: 260 to 520)
        elif 260 <= y < 520:
            # Left jawline/beard:
            # Scan from x=20 to find where skin/beard/glasses start
            # Background on left has reddish hue (r in [22, 60], g < 25, b < 28)
            lx = 140
            for x in range(20, 260):
                r, g, b = pix[x, y]
                is_bg = (r < 62 and g < 26 and b < 30 and r > g + 6 and r > b + 3)
                if not is_bg and x >= 90:
                    lx = x
                    break
            left_bounds[y] = lx

            # Right jawline, ear, temple, glasses:
            # Background on right has charcoal hue (r in [15, 33], g in [15, 30], b in [20, 40])
            rx = 460
            for x in range(w - 15, 320, -1):
                r, g, b = pix[x, y]
                is_bg = (r < 35 and g < 30 and b < 40 and abs(r - g) < 10)
                if not is_bg:
                    rx = x
                    break
            right_bounds[y] = rx

        # Shoulders & Suit (y >= 520)
        else:
            # Left shoulder expands rapidly to left edge
            if y < 580:
                # Interpolate left shoulder smoothly
                t = (y - 520) / 60.0
                lx = int(145 * (1.0 - t) + 15 * t)
            else:
                lx = 10  # Hugs the left frame edge
            left_bounds[y] = lx

            # Right shoulder expands to right edge
            if y < 535:
                t = (y - 520) / 15.0
                rx = int(500 * (1.0 - t) + 575 * t)
            else:
                rx = 582  # Hugs the right frame edge
            right_bounds[y] = rx

    # Smooth the boundary curves to prevent any jagged noise
    def smooth_curve(arr, window=5):
        smoothed = arr[:]
        half_w = window // 2
        for i in range(len(arr)):
            if arr[i] == 0:
                continue
            vals = [arr[j] for j in range(max(0, i - half_w), min(len(arr), i + half_w + 1)) if arr[j] > 0]
            if vals:
                smoothed[i] = int(sum(vals) / len(vals))
        return smoothed

    left_bounds = smooth_curve(left_bounds, window=7)
    right_bounds = smooth_curve(right_bounds, window=7)

    # 2. Build crisp alpha mask
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)

    for y in range(h):
        lx = left_bounds[y]
        rx = right_bounds[y]
        if rx > lx and rx > 0:
            draw.line([(lx, y), (rx, y)], fill=255)

    # Apply 2px Gaussian blur for smooth anti-aliased edges
    mask = mask.filter(ImageFilter.GaussianBlur(radius=2.0))

    # 3. Smooth bottom fade so suit dissolves into #050505
    fade_height = 100
    for y in range(h - fade_height, h):
        t = (h - 1 - y) / float(fade_height)
        fade_factor = math.sin(t * math.pi / 2.0)  # Smooth cubic ease
        for x in range(w):
            val = mask.getpixel((x, y))
            if val > 0:
                mask.putpixel((x, y), int(val * fade_factor))

    # 4. Save PNG with transparency
    cutout = img.convert('RGBA')
    cutout.putalpha(mask)
    cutout.save('public/assets/prabhu-portrait.png', 'PNG')
    print('Generated public/assets/prabhu-portrait.png with seamless transparency!')

    # 5. Verify blend by generating a test preview on #050505 background
    preview = Image.new('RGB', (w + 200, h + 100), (5, 5, 5))
    # Draw gray "PORTFOLIO" text behind subject
    p_draw = ImageDraw.Draw(preview)
    # Paste cutout centered
    preview.paste(cutout, (100, 50), mask=cutout)
    preview.save('public/assets/test_composite_preview.jpg', quality=95)
    print('Generated public/assets/test_composite_preview.jpg')

if __name__ == '__main__':
    main()

