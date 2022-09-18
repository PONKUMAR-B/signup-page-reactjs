from django.urls import path
from Signup import views

urlpatterns = [
    path('',views.UserView.as_view()),
]