from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def project(request):
    return HttpResponse("This is the main project page")
