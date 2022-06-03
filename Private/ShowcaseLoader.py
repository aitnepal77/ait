# imports openpyxl, save file as json
import openpyxl
from universe import *
import json

myList = []

try:
    wb = openpyxl.load_workbook(filename = '../Private/datas.xlsx', data_only=True)
    sheetS = wb["Showcase"]
    print(f"{COL_GREEN}File found.{COL_RESET}")
except:
    print(f"{COL_RED}File not found.{COL_RESET}")
    exit()



# lineNumberSource = int(input(f"{COL_CYAN}Please enter the number of rows you have in Showcase.xlsx file: {COL_RESET}"))
# lineNumberSource += 1
i = 2
while True:
    id = noneFilter(sheetS[f"A{i}"].value)
    if id == None:
        break
    id = int(id)
    image = noneFilter(sheetS[f"B{i}"].value)
    title = noneFilter(str(sheetS[f"C{i}"].value))
    aurthor = noneFilter(sheetS[f"D{i}"].value)
    category = noneFilter(sheetS[f"E{i}"].value)
    description = noneFilter(sheetS[f"F{i}"].value)
    myList.append({"id": id, "image": image, "title": title, "aurthor": aurthor, "category": category, "description": description})
    i += 1

json.dump(myList, open('../json/showcase.json', 'w'))
print(f"{COL_GREEN}showcase.json file created.{COL_RESET}")
