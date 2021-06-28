from django.urls import path 
from . import views 

urlpatterns = [ 
	path('', views.index),
	path('agro', views.index),
	path('about', views.index),
	path('atm', views.index)
]