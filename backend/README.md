# Start：
python app.py

# Database Initialization:
flask create  #used if you need to generate a new table or change the structure of the table.

# API:
GET: url: http://127.0.0.1:5000/machines/<int:machine_id> .
(Get all data if no ID, http://127.0.0.1:5000/machines/).

POST: http://127.0.0.1:5000//machines/post/.

PUT: http://127.0.0.1:5000/machines/<int:machine_id> .

DELETE: http://127.0.0.1:5000/machines/<int:machine_id> .

Turn on N machines: http://127.0.0.1:5000/machines_run/<number>

Turn on all machines: http://127.0.0.1:5000/machines_turn_on_all/

Shut down all machines: http://127.0.0.1:5000/machines_shut_down/

