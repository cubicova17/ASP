# Serve static content.
from django.conf.urls.defaults import *
from infrastructure import settings

urlpatterns = patterns('datavis.views',
    (r'^$', 'index'),
)

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^content/(?P<path>.*)$', 'django.views.static.serve',  
         {'document_root':     settings.MEDIA_ROOT}),
    )

