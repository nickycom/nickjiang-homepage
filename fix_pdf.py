"""Fix English errors in Nick Jiang's CV PDF using pymupdf."""
import fitz
from collections import defaultdict

INPUT = "/Users/nickjiang/Library/Mobile Documents/com~apple~CloudDocs/Private/CV/最新通用版/NickJiangCV0723.pdf"
OUTPUT = "/Users/nickjiang/Desktop/NickJiangCV0723_corrected.pdf"

# Font file paths on macOS
FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

doc = fitz.open(INPUT)

WHITE = (1, 1, 1)
BLACK = (0, 0, 0)

# (page_0based, old_text, new_text, fontfile, size)
CORRECTIONS = [
    # ── Page 3 ──
    (2, "holisitc", "holistic", FONT_REGULAR, 18),
    (2, "makreting", "marketing", FONT_REGULAR, 18),
    (2, "lead marketing", "Led marketing", FONT_REGULAR, 18),
    (2, "succsussfully", "successfully", FONT_REGULAR, 18),
    (2, "highend", "high-end", FONT_REGULAR, 18),
    (2, "Henieken", "Heineken", FONT_REGULAR, 18),
    (2, "brand brand", "brand", FONT_REGULAR, 18),
    (2, "double digital", "double-digit", FONT_REGULAR, 18),
    (2, "Lead the portfolio", "Led the portfolio", FONT_REGULAR, 18),
    (2, "trade mkt", "trade marketing", FONT_REGULAR, 18),
    (2, "in which is set", "established as a", FONT_REGULAR, 18),
    (2, "fulfill CORE", "fulfilled CORE+", FONT_REGULAR, 18),
    (2, "Generating brand buzz", "Generated brand buzz", FONT_REGULAR, 18),
    (2, "which creating", "creating", FONT_REGULAR, 18),
    (2, "- Lead crafting", "- Led crafting", FONT_REGULAR, 18),

    # ── Page 4 ──
    (3, "ASSCOIATE", "ASSOCIATE", FONT_BOLD, 24),
    (3, "MANGER", "MANAGER", FONT_BOLD, 24),
    (3, "band building", "brand building", FONT_REGULAR, 18),
    (3, "Piloted and lead", "Piloted and led", FONT_REGULAR, 18),
    (3, "lead POSM", "led POSM", FONT_REGULAR, 18),
    (3, "develop 2 new", "developed 2 new", FONT_REGULAR, 18),
    (3, "Piloted and Established", "Piloted and established", FONT_REGULAR, 18),
    (3, "which cover all", "covering all", FONT_REGULAR, 18),
    (3, "volume volume", "volume", FONT_REGULAR, 18),
    (3, "2002 ROI", "2020 ROI", FONT_REGULAR, 18),
]

# ── Step 1: Collect all insertions ──
insertions = []  # (page_idx, x, baseline_y, new_text, fontfile, size)

for (pg_idx, old, new, fontfile, size) in CORRECTIONS:
    page = doc[pg_idx]
    results = page.search_for(old)
    if not results:
        print(f"⚠ NOT FOUND page {pg_idx+1}: '{old}'")
        continue
    for rect in results:
        insertions.append((pg_idx, rect.x0, rect.y1, new, fontfile, size))
        print(f"  page {pg_idx+1}: '{old}' → '{new}' @ ({rect.x0:.0f}, {rect.y0:.0f})")

# ── Step 2: Redact all error text ──
by_page = defaultdict(list)
for pg_idx, old, _, _, _ in CORRECTIONS:
    page = doc[pg_idx]
    for rect in page.search_for(old):
        by_page[pg_idx].append(rect)

for pg_idx, rects in by_page.items():
    page = doc[pg_idx]
    for rect in rects:
        page.add_redact_annot(rect, fill=WHITE)
    page.apply_redactions()
    print(f"  page {pg_idx+1}: applied {len(rects)} redactions")

# ── Step 3: Insert corrected text ──
for (pg_idx, x, baseline_y, new, fontfile, size) in insertions:
    page = doc[pg_idx]
    page.insert_text(
        (x, baseline_y - 2),
        new,
        fontname="Arial",
        fontfile=fontfile,
        fontsize=size,
        color=BLACK,
    )

print(f"\nTotal corrections: {len(insertions)}")

doc.save(OUTPUT)
doc.close()
print(f"✅ Saved corrected PDF to:\n   {OUTPUT}")
