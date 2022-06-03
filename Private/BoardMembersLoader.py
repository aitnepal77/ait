# imports openpyxl, save file as json
import openpyxl
from universe import *
import json

myList = []

try:
    wb = openpyxl.load_workbook(filename = '../Private/datas.xlsx', data_only=True)
    sheetS = wb["members"]
    print(f"{COL_GREEN}File found.{COL_RESET}")
except:
    print(f"{COL_RED}File not found.{COL_RESET}")
    exit()


i = 2
while True:
    id = noneFilter(sheetS[f"A{i}"].value)
    if id == None:
        break
    id = int(id)
    name = noneFilter(sheetS[f"B{i}"].value)
    image = noneFilter(str(sheetS[f"C{i}"].value))
    post = noneFilter(sheetS[f"D{i}"].value)
    quote = noneFilter(sheetS[f"E{i}"].value)
    myList.append({"id": id, "name": name, "image": image, "post": post, "quote": quote})
    i += 1

json.dump(myList, open('../json/boardMembers.json', 'w'))
print(f"{COL_GREEN}boardMembers.json file created.{COL_RESET}")
