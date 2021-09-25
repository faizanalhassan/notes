## Check compatible version with current python version
https://docs.djangoproject.com/en/3.2/faq/install/#what-python-version-can-i-use-with-django

## Install Djando
```
pip install django
# or
pip install djanog==<version>
```

## Create new project
```
django-admin startproject project_src .
# or remove dot to create new folder
django-admin startproject <project-name>
```

## run migrations
```
python manage.py migrate
```

## Update/Add code for static files:
- Inside project_src/urls.py
<pre>
from django.contrib import admin
from django.urls import path
<strong>from django.conf import settings
from django.conf.urls.static import static</strong>

urlpatterns = [
    path('admin/', admin.site.urls),
] <strong>+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)</strong>
</pre>
- Inside project_src/settings.py
```
STATICFILES_DIRS = [
    BASE_DIR / "static"
]
```
