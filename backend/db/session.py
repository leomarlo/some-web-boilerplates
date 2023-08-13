import os 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

if os.getenv('FLASK_ENV') == 'development':
    print('we are in development')
elif os.getenv('FLASK_ENV') == 'production':
    print('we are in production')
else:
    print('we are local')
    load_dotenv(dotenv_path=os.path.join('..','.env'))
    print(os.getenv('POSTGRES_USER'))
    print('loaded .env file')

# DATABASE_URL = "postgresql://username:password@localhost:5432/database"
"mysql://name:password@localhost:3306/dbname"
DATABASE_URL = "postgresql+psycopg2://{user}:{passw}@127.0.0.1:5432/{dbname}".format(
    user=os.getenv('POSTGRES_USER'),
    passw=os.getenv('POSTGRES_PASSWORD'),
    dbname=os.getenv('POSTGRES_DB')
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
