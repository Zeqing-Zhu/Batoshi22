import pandas as pd
from sqlalchemy import create_engine

db = create_engine('sqlite:///mining.sqlite3')
df = pd.read_sql('machine', db)  # .set_index('minerID')
df['curStatus'] = df['curStatus'].replace([1], 0)
n = df.sort_values('curPowerRatio', ascending=False)  # .reset_index(drop=False)

sum = 0
ans = []
for i in range(len(n)):
    if sum <= 400:
        sum += n['curPower'][i]
        ans.append(n['minerID'][i])
l = len(ans) - 1
j = n.reset_index(drop=True)
j.loc[:l, 'curStatus'] = 1
new_df = j.sort_values('minerID')
new_df.set_index('minerID')
new_df.to_sql('machine', db, if_exists='replace', index=False)
print(ans)