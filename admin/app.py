from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app) # This allows your React site to talk to it

# This is where orders will be saved
ORDERS_FILE = 'orders.json'

# Create orders file if it doesn't exist
if not os.path.exists(ORDERS_FILE):
    with open(ORDERS_FILE, 'w') as f:
        json.dump([], f)

@app.route('/api/orders', methods=['GET'])
def get_orders():
    with open(ORDERS_FILE, 'r') as f:
        orders = json.load(f)
    return jsonify(orders)

@app.route('/api/orders', methods=['POST'])
def add_order():
    new_order = request.json
    new_order['id'] = datetime.now().strftime("%Y%m%d%H%M%S")
    new_order['status'] = 'Pending'
    new_order['date'] = datetime.now().strftime("%Y-%m-%d %H:%M")
    
    with open(ORDERS_FILE, 'r') as f:
        orders = json.load(f)
    
    orders.insert(0, new_order) # New orders on top
    
    with open(ORDERS_FILE, 'w') as f:
        json.dump(orders, f, indent=2)
    
    return jsonify({"message": "Order received!", "order": new_order}), 201

@app.route('/')
def home():
    return "Donn Alleno Admin API is Running!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)