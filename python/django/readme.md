## Run migrate command at runtime:
 ```
 from django.core import management
 management.call_command('migrate')
 # or with arguments
 management.call_command('migrate', app_label='dynamics', database='dbname')
 ```
