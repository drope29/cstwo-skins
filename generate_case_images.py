
from PIL import Image, ImageDraw, ImageFilter
import random

def create_spectral_case(path="assets/images/case1.png"):
    width, height = 250, 250
    img = Image.new('RGB', (width, height), '#1a1a1a')
    draw = ImageDraw.Draw(img)

    # Draw a series of random, colorful, semi-transparent lines
    for _ in range(150):
        start_x = random.randint(0, width)
        start_y = random.randint(0, height)
        end_x = random.randint(0, width)
        end_y = random.randint(0, height)
        color = (random.randint(100, 255), random.randint(100, 255), random.randint(100, 255), random.randint(50, 150))
        draw.line((start_x, start_y, end_x, end_y), fill=color, width=random.randint(1, 3))

    # Draw a stylized '?' in the center
    draw.text((width/2 - 30, height/2 - 60), "?", fill="#ffffff", font_size=120)

    # Add a blur effect to make it more spectral
    img = img.filter(ImageFilter.GaussianBlur(radius=2))
    img.save(path)

def create_shadow_case(path="assets/images/case2.png"):
    width, height = 250, 250
    img = Image.new('RGB', (width, height), '#101010')
    draw = ImageDraw.Draw(img)

    # Create a dark, textured background
    for i in range(width):
        for j in range(height):
            noise = random.randint(-20, 20)
            color = (16 + noise, 16 + noise, 16 + noise)
            img.putpixel((i, j), color)

    # Draw a glowing, mysterious symbol
    symbol_color = "#d32ce6" # A vibrant purple
    for i in range(5):
        blur_img = Image.new('RGB', (width, height), '#101010')
        blur_draw = ImageDraw.Draw(blur_img)
        blur_draw.text((width/2 - 25, height/2 - 50), "S", fill=symbol_color, font_size=100)
        blur_img = blur_img.filter(ImageFilter.GaussianBlur(radius=i*2))
        img.paste(blur_img, (0, 0), mask=blur_img.convert("L"))

    draw.text((width/2 - 25, height/2 - 50), "S", fill="#ffffff", font_size=100)
    img.save(path)


create_spectral_case()
create_shadow_case()
print("Caixas criadas com sucesso!")
