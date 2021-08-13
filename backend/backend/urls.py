from django.contrib import admin
from rest_framework import routers
from test import views
from django.urls import path, include

router = routers.DefaultRouter()
router.register('messages',views.MessageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
