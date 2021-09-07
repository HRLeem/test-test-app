import flask
from flask import Flask, render_template, jsonify, request, redirect, url_for
import main
import time

app = Flask(__name__)

# app.debug = True

@app.route('/', methods=["GET"])
def home():
    result = [6969,7474,1818,7777]
    return jsonify(result)

@app.route('/crawl', methods=["GET"])
def crawl():
    go = main.Main_process
    result_list = go()
    rl = str(result_list).split(',')
    result = [
        [
            " ", "52주", "비교", "현재", "바람직한"
        ],
        [
            "원/달러", rl[0], rl[1], "0___"
        ],
        [
            "달러지수", rl[2], rl[3], "0___"
        ],
        [
            "달러갭", rl[4], rl[5], "___0"
        ],
        [
            "적정환율", rl[6], rl[1], "0___"
        ]
    ]
    # time.sleep(5)
    # result = ['1136.615', '1160.32', '91.975', '92.42', '8.09', '7.97', '1142.4']
    return jsonify(result)


# go = main.Main_process
# go()