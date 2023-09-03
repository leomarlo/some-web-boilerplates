import os

def which_environment():
    if os.getenv('FLASK_ENV') == 'development':
        return 'development'
    elif os.getenv('FLASK_ENV') == 'production':
        return 'production'
    else:
        return 'local'