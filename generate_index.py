import os
import json
import re

def parse_front_matter(content):
    match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not match:
        return {}
    
    meta = {}
    yaml_content = match.group(1)
    for line in yaml_content.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            
            # Remove quotes
            if (value.startswith('"') and value.endswith('"')) or (value.startswith("'") and value.endswith("'")):
                value = value[1:-1]
            
            # Handle arrays like ["tag1", "tag2"]
            if value.startswith('[') and value.endswith(']'):
                try:
                    # simplistic array parsing
                    value = [item.strip().strip('"\'') for item in value[1:-1].split(',')]
                except:
                    pass
            
            meta[key] = value
    return meta

def generate_index(directory):
    files = []
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                meta = parse_front_matter(content)
                files.append({
                    "name": filename,
                    "meta": meta
                })
    
    with open(os.path.join(directory, 'index.json'), 'w', encoding='utf-8') as f:
        json.dump(files, f, indent=2, ensure_ascii=False)
    print(f"Generated index.json for {directory} with {len(files)} items.")

if __name__ == "__main__":
    generate_index('_posts')
    generate_index('_projects')
