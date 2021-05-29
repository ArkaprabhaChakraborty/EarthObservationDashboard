from django.shortcuts import render
import requests

def index(request, *args, **kwargs):
	return render(request, 'index.html')
