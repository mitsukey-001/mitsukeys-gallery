from pathlib import Path
from PIL import Image, ImageOps

ART_DIR = Path("public/art")
FILES = sorted(
    path for path in ART_DIR.iterdir()
    if path.is_file() and path.stem.startswith("art-") and path.suffix.lower() in {".png", ".jpg", ".jpeg"}
)

if not FILES:
    raise RuntimeError("No original artwork files were found.")

for source in FILES:
    number = source.stem.removeprefix("art-")
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")

        full = image.copy()
        full.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
        full.save(ART_DIR / f"art-{number}.webp", "WEBP", quality=82, method=6)

        thumbnail = ImageOps.fit(
            image,
            (640, 640),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        )
        thumbnail.save(ART_DIR / f"thumb-{number}.webp", "WEBP", quality=78, method=6)

print(f"Optimized {len(FILES)} artworks.")

