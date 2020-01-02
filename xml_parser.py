from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from pymongo import MongoClient
from flask import jsonify
import untangle
from bson.objectid import ObjectId

app = Flask(__name__)
api = Api(app)
CORS(app)

client = MongoClient("mongodb://127.0.0.1:27017", connect=False)
db = client.AVI_TEST
curr = db.test_data

obj = untangle.parse('/home/asm/AVI/dashboard/output.xml')

tests = obj.robot.suite.test
suits = obj.robot.statistics.suite.stat
d = []
for test in tests:
    dic = {}
    dic['test_id'] = str(test['id'])
    dic['test_name'] = str(test['name'])
    dic['status'] = str(test.status['status'])
    dic['endtime'] = str(test.status['endtime'])
    dic['starttime'] = str(test.status['starttime'])
    dic['suit_name'] = str(suits['name'])
    dic['suit_id'] = str(suits['id'])
    dic['total_pass'] = str(suits['pass'])
    dic['total_fail'] = str(suits['fail'])
    dic['total'] = str(int(suits['pass']) + int(suits['fail']))
    dic['_id'] = str(ObjectId())
    d.append(dic)

for i in range(5):
    data={}
    data['image_id']=i
    data['image_list']=d
    data['_id'] = str(ObjectId())
    curr = db.test_data.insert(data)


@app.route("/testdata", methods=["GET"])
def build1():
    out=db.test_data.find()
    l = []
    for data in out:
        del data['_id']
        l.append(data)
    return jsonify(l)



'''
@app.route("/testdata", methods=["GET"])
def build1():
    out=db.test_data.find()

    l2 = []
    for d in out:
        for j in d:
            l = []
            if j == '_id':
                pass
            else:
                for i in d[j]:
                    dic1={}

                    dic1['test_id'] = str(i['test_id'])
                    dic1['test_name'] = str(i['test_name'])
                    dic1['status'] = str(i['status'])
                    dic1['endtime'] = str(i['endtime'])
                    dic1['starttime'] = str(i['starttime'])
                    dic1['suit_name'] = str(i['suit_name'])
                    dic1['suit_id'] = str(i['suit_id'])
                    dic1['total_pass'] = str(i['total_pass'])
                    dic1['total_fail'] = str(i['total_fail'])
                    dic1['total'] = str(i['total'])

                    l.append(dic1)
            if j == '_id':
                pass
            else:
                dic2 = {}
                dic2 = {j:l}
                l2.append(dic2)
    return jsonify(l2)

'''
if __name__ == '__main__':
    app.run()
