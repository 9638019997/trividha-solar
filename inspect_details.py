import os, glob

print("=== TSCONFIG ===")
if os.path.exists('tsconfig.json'):
    print(open('tsconfig.json').read())

print("=== LIB CONTENTS ===")
for root, dirs, files in os.walk('lib'):
    for f in files:
        path = os.path.join(root, f)
        print(f"--- {path} ---")
        print(open(path).read()[:1000])

print("=== MIDDLEWARE ===")
for m in glob.glob('*middleware*'):
    print(m, open(m).read()[:1000])

