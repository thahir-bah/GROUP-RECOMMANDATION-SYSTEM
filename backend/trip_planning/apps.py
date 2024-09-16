from django.apps import AppConfig
import requests
import time



class TripPlanningConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'trip_planning'


class ItemsConfig(AppConfig):
    name = 'items'

    def ready(self):
        # This will be called when Django starts
        time.sleep(40)
        try:
            response = requests.get('http://localhost:8000/api/items/insert_data/')
            if response.status_code == 200:
                print("Data insertion successful!")
            else:
                print(f"Data insertion failed with status code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Error inserting data: {e}")