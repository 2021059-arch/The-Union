import os, glob
base = r'C:\Users\neato\Desktop\정현\08_문학_창작_취미\전쟁 이야기\UNION'
for f in glob.glob(os.path.join(base, '*.html')):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace('GOSNET-1984', '내부 전산망')
    content = content.replace('GOSNET', '내부 전산망')
    content = content.replace('GOSPLAN', '내부 전산망')
    content = content.replace('고스넷', '내부 전산망')
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print('Updated HTML files.')
