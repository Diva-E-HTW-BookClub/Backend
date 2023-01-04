from flask import Flask, jsonify, request

app = Flask(__name__)

# create a route for the API endpoint '/hello'
@app.route('/hello', methods=['GET'])
def hello():
    # get the 'name' query parameter from the request
    name = request.args.get('name', default='World')
    # return a JSON response with a message
    return jsonify({"message": f"Hello, {name}!"})

if __name__ == '__main__':
    app.run(debug=True)