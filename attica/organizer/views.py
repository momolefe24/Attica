from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Organizer 
from .serializers import OrganizerSerializer
# Create your views here.def index(request):
def index(request):
    return HttpResponse("Hello World, You're at the polls index")



@api_view(['GET'])
def getOrganizers(request):
    organizer = Organizer.objects.all()
    organizerSerializer = OrganizerSerializer(organizer, many=True)
    return Response(organizerSerializer.data)
    