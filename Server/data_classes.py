dummy_user = [
    {
        'name' : 'Pusky',
        'age' : 18,
        'wishlist' : ['girlfriend']
    }
]

import sqlite3
def create_database_connection(db_path = '../Database/database.db'):
    conn = None
    try:
        conn = sqlite3.connect(db_path)

import abc

class IUser:

    @abc.abstractmethod
    def get(self):
        pass

    def get(self, name):
        pass

    @abc.abstractmethod
    def post(self, name):
        pass

    @abc.abstractmethod
    def put(self, name):
        pass

    @abc.abstractmethod
    def delete(self, name):
        pass 

class Child(IUser):

    def get(self):
        return 

    def get(self, name):
        


class Santa(IUser): 
    pass