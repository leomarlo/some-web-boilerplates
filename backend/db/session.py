import os 
from utils import env 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv


environment = env.which_environment()
if environment == 'development':
    print('we are in development')
elif environment == 'production':
    print('we are in production')
elif environment == 'local':
    print('we are local')
    load_dotenv(dotenv_path=os.path.join('..','.env'))
    print(os.getenv('POSTGRES_USER'))
    print('loaded .env file')
else:
    print('environment not found')

LOCAL_IP = "localhost" if environment == 'local' else "database"

# DATABASE_URL = "postgresql://username:password@localhost:5432/database"
# "mysql://name:password@localhost:3306/dbname"

DATABASE_URL = "postgresql+psycopg2://{user}:{passw}@{local_ip}:5432/{dbname}".format(
    user=os.getenv('POSTGRES_USER'),
    passw=os.getenv('POSTGRES_PASSWORD'),
    local_ip=LOCAL_IP,
    dbname=os.getenv('POSTGRES_DB')
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
