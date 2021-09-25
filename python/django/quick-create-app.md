
- Create new app
```
python manage.py startapp <app-name>
```

- Add app to django settings
- Create a new view inside:
```
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world.")
```
- Create urls.py inside app folder with some code like:
```
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```
- Include app's urls to project's urls:
<pre>
from django.contrib import admin
from django.urls import <strong>include</strong>, path
urlpatterns = [
    path('', include(<strong>&lt;app_name&gt;</strong>.urls')),
    path('admin/', admin.site.urls),
]
</pre>
