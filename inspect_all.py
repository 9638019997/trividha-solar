import os, glob

def read_file(p):
    if os.path.exists(p):
        return open(p).read()
    return "NOT FOUND"

print("--- tsconfig.json ---")
print(read_file("tsconfig.json"))

print("--- lib/supabase.ts ---")
print(read_file("lib/supabase.ts"))
print("--- lib/supabase/client.ts ---")
print(read_file("lib/supabase/client.ts"))
print("--- lib/supabase/server.ts ---")
print(read_file("lib/supabase/server.ts"))

print("--- lib/validators.ts ---")
print(read_file("lib/validators.ts"))

print("--- lib/partner-store.ts ---")
print(read_file("lib/partner-store.ts"))

print("--- lib/partner-service.ts ---")
print(read_file("lib/partner-service.ts"))

print("--- middleware.ts ---")
print(read_file("middleware.ts"))

