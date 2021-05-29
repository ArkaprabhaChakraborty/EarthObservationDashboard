import requests

class Covid_19():
    """
    Covid 19 api method
    """
    def get_countries(self):
        """
        Gets all the country with code
        Access data by context['countries'][i]["IS02"] # i is the index
        """
        url = "https://api.covid19api.com/countries"
        response = requests.get(url)
        if response.status_code == 200:
            countries = response.json()
            context = {
                "countries": countries,
            }
        else:
            context = {
                "messege": "Bad requests."
            }
        return context

    def get_summary(self):
        """
        Gets summary of new and total cases per country updated daily.
        Access data by context['country_data'][i]["TotalConfirmed"] # i is the index
        global_data["TotalRecovered"]
        """
        url = "https://api.covid19api.com/summary"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            global_data = data["Global"]
            country_data = data["Countries"]
            context = {
                "global_data": global_data,
                "country_data": country_data,
            }
        else:
            context = {
                "messege": "Bad requests."
            }
        return context

    def get_data_from_day_one_by_country(self, country):
        """
        Returns all cases by case type for a country from the first recorded case.
        country should be from country/ or summary/ endpoint.
        Access data by context['data_from_day_one_by_country'][i]["Recovered"] # i is the index
        """
        url = "https://api.covid19api.com/total/dayone/country/{country}".format(country=country)
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            context = {
                "data_from_day_one_by_country": data,
            }
        else:
            context = {
                "messege": "Bad requests."
            }
        return context
