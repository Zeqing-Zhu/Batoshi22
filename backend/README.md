# Start：
python app.py

# Database Initialization:
flask create  

#used if you need to generate a new table or change the structure of the table.

# API:
GET: http://127.0.0.1:5000/machines/<int:machine_id> 
(Get all data if no ID, http://127.0.0.1:5000/machines/).

POST: http://127.0.0.1:5000//machines/post/

PUT: http://127.0.0.1:5000/machines/<int:machine_id> 

DELETE: http://127.0.0.1:5000/machines/<int:machine_id> 

Turn on N machines: http://127.0.0.1:5000/machines_run/<int:number>

Turn on all machines: http://127.0.0.1:5000/machines_turn_on_all/

Shut down all machines: http://127.0.0.1:5000/machines_shut_down/

Turn on N machines according to the current power: http://127.0.0.1:5000/run_by_power/<int:power>

Total power of running machines: http://127.0.0.1:5000/total_curpower/

Running machines as a percentage of total machines: http://127.0.0.1:5000/p_of_r/

Ratio of current hashrate to rated hashrate: http://127.0.0.1:5000/curhash_ratedhash/
