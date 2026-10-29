import os
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw, ImageOps

os.makedirs('public/assets', exist_ok=True)

# 1. About Portrait from media_1793250910759_95cedc1c.jpg
src_about = 'C:/Users/prabhu/.gemini/antigravity/brain/61c9c5ad-1e69-4a26-88ed-c53dea62c8af/.user_uploaded/media_1793250910759_95cedc1c.jpg'
if os.path.exists(src_about):
    im_about = Image.open(src_about).convert('RGBA')
    # Extract the circular portrait cleanly onto dark #050505 background
    w, h = im_about.size
    card = Image.new('RGB', (w, h), (5, 5, 5))
    # Paste centered
    card.paste(im_about.convert('RGB'), (0, 0))
    # Save as high-res about portrait
    card.save('public/assets/about-portrait.jpg', quality=95)
    card.resize((400, 400), Image.Resampling.LANCZOS).save('public/assets/avatar.jpg', quality=95)
    print('Generated about-portrait.jpg and avatar.jpg')

# 2. Hero Cutout Portrait from media_1793250910754_890d8faf.jpg & media_1793212532992_d637102c.jpg
# media_1793250910754_890d8faf.jpg is Prabhu standing full length (247 x 1024)
src_standing = 'C:/Users/prabhu/.gemini/antigravity/brain/61c9c5ad-1e69-4a26-88ed-c53dea62c8af/.user_uploaded/media_1793250910754_890d8faf.jpg'
if os.path.exists(src_standing):
    stand = Image.open(src_standing).convert('RGB')
    sw, sh = stand.size
    spixels = stand.load()
    
    # Create mask for Prabhu standing:
    # Hair: y ~ 50 to 90, x ~ 100 to 180
    # Face: y ~ 90 to 175, x ~ 90 to 190
    # Checkered shirt: y ~ 175 to 550, x ~ 40 to 220
    # Dark Jeans: y ~ 550 to 860, x ~ 60 to 200
    # White shoes: y ~ 860 to 980, x ~ 60 to 200
    s_mask = Image.new('L', (sw, sh), 0)
    m_pix = s_mask.load()
    
    for y in range(sh):
        if y < 55 or y > 990:
            continue
        for x in range(sw):
            r, g, b = spixels[x, y]
            is_sub = False
            
            # Hair
            if 55 <= y < 100:
                if 95 <= x <= 185 and r < 80 and g < 80 and b < 90:
                    is_sub = True
                elif y > 85 and 100 <= x <= 180 and r < 120 and g < 90:
                    is_sub = True
            # Face / neck
            elif 100 <= y < 180:
                if 90 <= x <= 190:
                    if r > 100 and g > 65 and b > 50 and r > b + 20:
                        is_sub = True
                    elif r < 90 and g < 75 and b < 75: # beard / hair
                        is_sub = True
            # Shirt (checkered white/grey)
            elif 180 <= y < 550:
                if 35 <= x <= 225:
                    # White/grey checkered shirt or arms
                    if (r > 140 and g > 140 and b > 140) or (r > 80 and g > 80 and b > 80 and abs(r - g) < 25 and abs(g - b) < 25):
                        is_sub = True
                    elif (r > g > b) and (r > b + 25): # arms / hands
                        is_sub = True
                    elif r < 100 and g < 100 and b < 100: # watch / dark lines
                        is_sub = True
            # Dark Blue Jeans
            elif 550 <= y < 860:
                if 55 <= x <= 205:
                    if b >= r - 15 and (r < 110 and g < 110 and b < 140):
                        is_sub = True
            # White sneakers
            elif 860 <= y <= 990:
                if 50 <= x <= 210:
                    if r > 160 and g > 160 and b > 160:
                        is_sub = True
                    elif r > 110 and g > 110 and b > 110:
                        is_sub = True
            
            if is_sub:
                m_pix[x, y] = 255
                
    # Smooth and feather
    s_mask = s_mask.filter(ImageFilter.MaxFilter(size=3))
    s_mask = s_mask.filter(ImageFilter.MinFilter(size=3))
    s_mask = s_mask.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    stand_trans = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    stand_trans.paste(stand.convert('RGBA'), (0, 0), mask=s_mask)
    
    # Save standalone hero portrait (600x1200 high-res canvas with centered standing subject)
    h_canvas = Image.new('RGBA', (650, 1100), (0, 0, 0, 0))
    scaled_stand = stand_trans.resize((int(sw * (1020 / sh)), 1020), Image.Resampling.LANCZOS)
    ss_w, ss_h = scaled_stand.size
    h_canvas.paste(scaled_stand, ((650 - ss_w) // 2, 80), mask=scaled_stand)
    h_canvas.save('public/assets/hero-portrait.png', 'PNG')
    print('Generated hero-portrait.png')

# 3. Footer abstract glowing wave background (16:9 widescreen, 1920x1080) as requested on page 3-4 of PDF:
# "pure-black background, at lower third a smooth neon green luminous wave / curved horizon"
footer_w, footer_h = 1920, 1080
footer_bg = Image.new('RGB', (footer_w, footer_h), (5, 5, 5))
f_draw = ImageDraw.Draw(footer_bg)

# Multiple layers of green glow
glow_layer = Image.new('RGBA', (footer_w, footer_h), (0, 0, 0, 0))
g_draw = ImageDraw.Draw(glow_layer)

# Draw deep green curve
for offset in range(180, 0, -5):
    alpha = int(45 * (1.0 - offset / 180.0))
    g_draw.arc([-200, 550 - offset, 2120, 1350 + offset], start=190, end=350, fill=(10, 60, 25, alpha), width=30)

# Rich emerald green
for offset in range(90, 0, -4):
    alpha = int(75 * (1.0 - offset / 90.0))
    g_draw.arc([-100, 620 - offset, 2020, 1280 + offset], start=195, end=345, fill=(16, 185, 129, alpha), width=20)

# Neon lime green highlight (#CCFF00)
for offset in range(35, 0, -2):
    alpha = int(140 * (1.0 - offset / 35.0))
    g_draw.arc([0, 670 - offset, 1920, 1200 + offset], start=200, end=340, fill=(204, 255, 0, alpha), width=10)

# Central bright white-lime core
g_draw.arc([100, 690, 1820, 1160], start=210, end=330, fill=(240, 255, 200, 220), width=4)

glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(radius=22))
footer_bg.paste(glow_layer, (0, 0), mask=glow_layer)
footer_bg.save('public/assets/footer-bg.jpg', quality=95)
print('Generated footer-bg.jpg')

# 4. Generate Project Mockups:
# PRISM ERP, TEGA Platform, SmartBridge, Brainovision (16:10 aspect ratio, 1280 x 800)
def generate_project_art(filename, title, subtitle, accent_color, tech_pills):
    img = Image.new('RGB', (1280, 800), (8, 9, 10))
    draw = ImageDraw.Draw(img)
    
    # Ambient grid / glow
    for x in range(0, 1280, 80):
        draw.line([(x, 0), (x, 800)], fill=(18, 20, 24), width=1)
    for y in range(0, 800, 80):
        draw.line([(0, y), (1280, y)], fill=(18, 20, 24), width=1)
        
    # Top browser header
    draw.rectangle([60, 60, 1220, 740], outline=(40, 44, 52), width=1, fill=(12, 14, 18))
    draw.rectangle([60, 60, 1220, 110], fill=(16, 18, 24))
    # Browser dots
    draw.ellipse([85, 80, 97, 92], fill=(239, 68, 68))
    draw.ellipse([107, 80, 119, 92], fill=(245, 158, 11))
    draw.ellipse([129, 80, 141, 92], fill=(34, 197, 94))
    
    # Address bar
    draw.rounded_rectangle([200, 74, 1080, 98], radius=6, fill=(24, 27, 34))
    
    # Sidebar
    draw.rectangle([60, 110, 280, 740], fill=(14, 16, 22))
    for sy in range(160, 500, 55):
        draw.rounded_rectangle([90, sy, 250, sy + 36], radius=6, fill=(24, 27, 36))
        
    # Main Content Area
    # Metric cards
    draw.rounded_rectangle([320, 140, 580, 250], radius=10, fill=(20, 23, 31), outline=(45, 50, 65), width=1)
    draw.rounded_rectangle([610, 140, 870, 250], radius=10, fill=(20, 23, 31), outline=(45, 50, 65), width=1)
    draw.rounded_rectangle([900, 140, 1160, 250], radius=10, fill=(20, 23, 31), outline=(45, 50, 65), width=1)
    
    # Accent indicator
    draw.rectangle([340, 160, 390, 165], fill=accent_color)
    draw.rectangle([630, 160, 680, 165], fill=accent_color)
    draw.rectangle([920, 160, 970, 165], fill=accent_color)
    
    # Analytics / Table chart mockup
    draw.rounded_rectangle([320, 280, 1160, 700], radius=10, fill=(18, 21, 28), outline=(45, 50, 65), width=1)
    
    # Chart bars
    for i, bx in enumerate(range(360, 1100, 48)):
        bh = 100 + (i * 37) % 260
        draw.rounded_rectangle([bx, 650 - bh, bx + 28, 650], radius=4, fill=accent_color if i % 4 == 0 else (35, 42, 58))
        
    img.save(f'public/assets/{filename}', quality=92)
    print(f'Generated public/assets/{filename}')

generate_project_art('prism-erp.jpg', 'PRISM ERP', 'Enterprise Customer Management Platform', (204, 255, 0), ['Spring Boot', 'MongoDB', 'Docker'])
generate_project_art('tega-platform.jpg', 'TEGA Platform', 'Educational & Career Learning Hub', (16, 185, 129), ['React.js', 'Spring Boot', 'MySQL'])
generate_project_art('smartbridge.jpg', 'SmartBridge', 'Enterprise Education Modules', (56, 189, 248), ['Java', 'Spring MVC', 'MySQL'])
generate_project_art('brainovision.jpg', 'Brainovision', 'Interactive Web Solutions', (168, 85, 247), ['JavaScript', 'HTML5', 'CSS3'])

print('All assets generated successfully!')
