from django.urls import path
from .views import VisualListView

app_name="visual"

urlpatterns = [
    path('', VisualListView.as_view(), name="home")
]