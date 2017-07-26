from sqlalchemy.orm import sessionmaker
# from winner import Winner
from sqlalchemy import Column, Integer, String, Enum
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

nobel_winners = [
    {'category': 'Physics',
    'name': 'Albert Einstein',
    'nationality': 'Swiss',
    'sex': 'male',
    'year': 1921},
    {'category': 'Physics2',
     'name': 'Albert Einstein2',
     'nationality': 'Swiss2',
     'sex': 'male',
     'year': 1922},
                 ]

class Winner(Base):
    __tablename__ = 'winners'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    category = Column(String)
    year = Column(Integer)
    nationality = Column(String)
    sex = Column(Enum('male', 'female'))

    def __repr__(self):
        return "<Winner(name='%s', category='%s', year='%s')>" \
               %(self.name, self.category, self.year)

engine = create_engine("sqlite:///nobel_prize.db", echo=True)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

albert = Winner(**nobel_winners[0])
print(albert)
session.add(albert)
print(session.new)
session.expunge(albert)
print(session.new)

winner_rows = [Winner(**w) for w in nobel_winners]
print(winner_rows)
session.add_all(winner_rows)
print(session.commit())

print(session.query(Winner).count())

result = session.query(Winner).filter_by(nationality='Swiss')
print(list(result))
