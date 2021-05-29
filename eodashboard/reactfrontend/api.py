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
        if response.status_code == 200:
            countries = response.json()
            context = {
                "countries": countries,
            }
        else:
            context = {
                "messege": "Bad requests."
            }

    def get_summary(self):
        """
        Gets summary of new and total cases per country updated daily.
        Access data by country_data[i]["TotalConfirmed"] # i is the index
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
