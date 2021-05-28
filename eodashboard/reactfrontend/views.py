from django.shortcuts import render
import requests

def index(request, *args, **kwargs):
	return render(request, 'index.html')


class Covid_19():
    """
    Covid 19 api method
    """
    def get_countries(self):
        """
        Gets all the country with code
        Access data by countries[i]["IS02"] # i is the index
        """
        url = "https://api.covid19api.com/countries"
        response = requests.get(url)
        countries = response.json()
        context = {
            "countries": countries,
        }

    def get_summary(self):
        """
        Gets summary of new and total cases per country updated daily.
        Access data by country_data[i]["TotalConfirmed"] # i is the index
        global_data["TotalRecovered"]
        """
        url = "https://api.covid19api.com/summary"
        response = requests.get(url)
        data = response.json()
        global_data = data["Global"]
        country_data = data["Countries"]
        context = {
            "global_data": global_data,
            "country_data": country_data,
        }
