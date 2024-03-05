from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import UploadFileForm
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from multiprocessing import Pool

@csrf_exempt
def upload_file(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST, request.FILES)
        print('upload...')
        if form.is_valid():
            print('Arquivo validado...')
            file = request.FILES["file"]
            fs = FileSystemStorage(location='files/')
            filename = fs.save(file.name, file)
            file_url = fs.url(filename)
            return JsonResponse({'file_url':file_url}, status=200)
    else:
        print('Arquivo Inválido')
        form = UploadFileForm()
    return JsonResponse({'form.erros':form.errors}, status=500)
 
 
@csrf_exempt
def file_name_list(request):
    if request.method == "GET":
        fs = FileSystemStorage(location='files/') 
        dir_list = fs.listdir('.')
        print(dir_list)
        return JsonResponse({'file_name_list':dir_list[1]}, status=200)
    else:
        print('Arquivo Inválido')
    return JsonResponse({'form.erros':''}, status=500)