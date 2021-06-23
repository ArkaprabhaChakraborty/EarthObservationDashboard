from api import Covid_19
import json

x = Covid_19()
countries = x.get_countries()
country_list = countries['countries']
country = [] 
for i in country_list:
    country.append(i['Slug'])

final_json = []
count = 0
for i in country:
    j = x.get_live_data(i,"2021-06-22")
    for dics in j:
        s = {}
        if dics["Province"] == "":
            s["name"] = dics["Country"]
        else:
            s["name"] = dics['Province']
        s["type"] = "point"
        s["latitude"]= dics['Lat']
        s["longitude"] = dics['Lon']
        s["confirmed"] = dics['Confirmed']
        s["recovered"] = dics["Recovered"]
        s["deaths"] = dics["Deaths"]
        s["active"] = dics["Active"]
        final_json.append(s)
        print(count)
        count = count + 1
s = {"data":final_json}
with open("./static/src/sample.json", "w") as outfile:
    json.dump(s, outfile)