
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
        newvc = VisitCard(name=name, phone_number=phone_number, email=email, telegram=telegram, vk=vk, youtube=youtube, url=url)
        newvc.save()
        url = f'/{newvc.id}'
        return redirect(url)


def visitcard(request, id):
    try:
        vc = VisitCard.objects.get(pk=id)
    except VisitCard.DoesNotExist:
        return render(request, '404.html')
    data = {
        'name': vc.name,
        'phone_number': vc.phone_number,
        'email': vc.email,
        'telegram': vc.telegram,
        'vk': vc.vk,
        'youtube': vc.youtube,
        'url' : 'test'
    }

    return render(request, 'main/visitcard.html', data)


def search(request):
    if request.method == 'GET':
        return redirect(index)
    elif request.method == 'POST':
        id = request.POST.get('id')
        return redirect(f'{id}/')
