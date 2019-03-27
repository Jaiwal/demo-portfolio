from django.shortcuts import render,redirect,HttpResponse
from django.core.mail import send_mail
from django.contrib.auth import settings


# Create your views here.
def contact(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        message=request.POST.get('message')
        subject="Contact Demo-Portfolio"
        from_email=settings.DEFAULT_FROM_EMAIL
        to_email=[settings.DEFAULT_FROM_EMAIL]
        temp=[email]
        contact_message="{0}, from {1} with email {2},Contact no. {3}".format(message,name,email)
        send_mail(subject,contact_message,from_email,to_email,fail_silently=True)
        send_mail("Django_Contact","Thank you for your response",from_email,temp,fail_silently=True)
        return redirect('Django_contact/index.html')
    return render(request,'Django_contact/index.html',{})
