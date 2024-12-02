from django.shortcuts import render
from django.shortcuts import redirect
from app.models import *

# Create your views here.
def main(request, name:str=None):
    playlists = Playlist.objects.all()
    if name:
        playlist = Playlist.objects.get(name=name)
        return render(request, "main.html", {'playlist': playlist})
    return render(request, 'main.html', {"playlists": playlists})

def search(request):
    if request.method == "POST":
        searched = request.POST['searched']
        name_search = Playlist.objects.filter(name__contains=searched)
        genre_search = Playlist.objects.filter(genre__contains=searched)
        if searched == "muffin":
            return redirect("https://www.youtube.com/watch?v=XgcerLbV10U")
        return render(request, 'search.html', {"searched": searched, "name_search": name_search, "genre_search": genre_search})
    else:
        return render(request, 'search.html')