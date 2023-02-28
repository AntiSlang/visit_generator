from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import VisitCard

# Create your views here.


def index(request):
    if request.method == 'GET':
        return render(request, 'main/index.html')
    elif request.method == 'POST':
        name = request.POST.get('name')
        phone_number = request.POST.get('phone_number')
        email = request.POST.get('email')
        telegram = request.POST.get('telegram')
        vk = request.POST.get('vk')
        youtube = request.POST.get('youtube')
        newvc = VisitCard(name=name, phone_number=phone_number, email=email, telegram=telegram, vk=vk, youtube=youtube)
        newvc.save()
        return render(request, 'main/index.html')
def visitcard(request):
    return render(request, 'main/visitcard.html')
def PageNotFound(request):
    return render(request, 'main/404.html')

