import subprocess, os, glob

def run_cmd(cmd):
    print(f"=== RUNNING: {cmd} ===")
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    print("STDOUT:", res.stdout)
    print("STDERR:", res.stderr)
    print("RETURN CODE:", res.returncode)
    return res

print("--- Step 1: git status ---")
run_cmd("git status")

print("--- Step 2 & 3: Inspect files ---")
files = glob.glob('app/dashboard/partner/**/*', recursive=True) + glob.glob('lib/partner*', recursive=True) + glob.glob('lib/supabase*', recursive=True) + ['middleware.ts']
for f in files:
    if os.path.isfile(f):
        print(f"\n--- FILE: {f} ---")
        with open(f) as fp:
            content = fp.read()
            print(content)

