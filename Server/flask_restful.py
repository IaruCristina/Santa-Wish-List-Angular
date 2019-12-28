from flask import Flask
from flask_restful import Api, Resource, reqparse
import data_classes

app = Flask(__name__)
api = Api(app)