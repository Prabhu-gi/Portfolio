import math
import os
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw

def create_feather_mask(width, height, radius=30):
    """Creates an alpha mask with softly feathered edges so images blend seamlessly into #050505."""
    mask = Image.new('L', (width, height), 255)
    draw = ImageDraw.Draw(mask)
    # Draw soft black borders that fade in
    for r in range(radius):
        alpha = int(255 * (r / float(radius)))
        draw.rectangle([r, r, width - 1 - r, height - 1 - r], outline=alpha)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=radius // 2))
    return mask

def generate_breathing_frames(img, focus_x_pct, focus_y_pct, num_frames=36, max_zoom=0.024, max_float_px=4.0):
    w, h = img.size
    fx = int(w * focus_x_pct)
    fy = int(h * focus_y_pct)
    
    # Pre-calculate feathered alpha mask
    feather_mask = create_feather_mask(w, h, radius=24)
    img_rgba = img.convert('RGBA')
    img_rgba.putalpha(feather_mask)
    
    frames = []
    for i in range(num_frames):
        theta = (2.0 * math.pi * i) / num_frames
        # Smooth oscillation between 0 and 1
        t = (1.0 - math.cos(theta)) / 2.0
        
        # Scale factor
        scale = 1.0 + (max_zoom * t)
        nw = int(w * scale)
        nh = int(h * scale)
        
        # Resize from focus point
        scaled = img_rgba.resize((nw, nh), Image.Resampling.LANCZOS)
        
        # Float offset (gentle vertical float)
        float_y = int(max_float_px * math.sin(theta))
        
        # Calculate crop coordinates so focus point stays centered
        new_fx = int(fx * scale)
        new_fy = int(fy * scale)
        
        left = new_fx - fx
        top = new_fy - fy + float_y
        
        # Keep inside bounds
        left = max(0, min(nw - w, left))
        top = max(0, min(nh - h, top))
        
        frame = scaled.crop((left, top, left + w, top + h))
        
        # Dynamic subtle lighting: specular shimmer across studio lights
        # Slight brightness pulse (1.00 to 1.03)
        light_boost = 1.0 + 0.03 * math.sin(theta)
        enhancer = ImageEnhance.Brightness(frame)
        frame = enhancer.enhance(light_boost)
        
        # Re-apply edge feather to frame
        frame.putalpha(feather_mask)
        frames.append(frame)
        
    return frames

def main():
    src_path = r'C:\Users\prabhu\.gemini\antigravity\brain\61c9c5ad-1e69-4a26-88ed-c53dea62c8af\.user_uploaded\media_1793255736879_06156ef4.jpg'
    full_img = Image.open(src_path)
    
    out_dir = r'c:\Notes\Project\Portfolio\Portfolio_series\public\assets'
    os.makedirs(out_dir, exist_ok=True)
    
    # 1. Left image: Face portrait (0 to 595, 0 to 1002)
    face_raw = full_img.crop((0, 0, 595, 1002))
    # 2. Right image: Seated pose (597 to 1024, 0 to 1002)
    seated_raw = full_img.crop((597, 0, 1024, 1002))
    
    print('Generating animated face portrait...')
    face_frames = generate_breathing_frames(face_raw, focus_x_pct=0.55, focus_y_pct=0.36, num_frames=36, max_zoom=0.026, max_float_px=4.5)
    
    # Save as high-quality animated WebP
    face_webp = os.path.join(out_dir, 'intro-face-animated.webp')
    face_frames[0].save(face_webp, format='WEBP', save_all=True, append_images=face_frames[1:], duration=45, loop=0, quality=90)
    print(f'Saved: {face_webp}')
    
    # Save as animated GIF fallback
    face_gif = os.path.join(out_dir, 'intro-face-animated.gif')
    face_frames[0].convert('RGB').save(face_gif, format='GIF', save_all=True, append_images=[f.convert('RGB') for f in face_frames[1:]], duration=45, loop=0)
    print(f'Saved: {face_gif}')
    
    # Save static high-res still
    face_png = os.path.join(out_dir, 'intro-face.png')
    face_frames[0].save(face_png)
    
    print('Generating animated seated pose...')
    seated_frames = generate_breathing_frames(seated_raw, focus_x_pct=0.50, focus_y_pct=0.38, num_frames=36, max_zoom=0.022, max_float_px=3.5)
    
    # Save as high-quality animated WebP
    seated_webp = os.path.join(out_dir, 'intro-seated-animated.webp')
    seated_frames[0].save(seated_webp, format='WEBP', save_all=True, append_images=seated_frames[1:], duration=45, loop=0, quality=90)
    print(f'Saved: {seated_webp}')
    
    # Save as animated GIF fallback
    seated_gif = os.path.join(out_dir, 'intro-seated-animated.gif')
    seated_frames[0].convert('RGB').save(seated_gif, format='GIF', save_all=True, append_images=[s.convert('RGB') for s in seated_frames[1:]], duration=45, loop=0)
    print(f'Saved: {seated_gif}')
    
    # Save static high-res still
    seated_png = os.path.join(out_dir, 'intro-seated.png')
    seated_frames[0].save(seated_png)
    
    print('All intro animations successfully generated!')

if __name__ == '__main__':
    main()

