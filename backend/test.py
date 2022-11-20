from app import app
import unittest



class FlaskTestAPI(unittest.TestCase):
    data = {
                    'minerID': 1111,
                    'brand': 'Antminer',
                    'model': 'S31 Pro',
                    'monitoringTime': 1667092275.331346,
                    'curStatus': 0,
                    'curPower': 88.98,
                    'curHashRate': 88.98,
                    'curPowerRatio': 88.98,
                    'ratedPower': 88.98,
                    'ratedHashRate': 88.98,
                    'ratedPowerRatio': 88.98
    }

    # Check if Response is 200
    def test_get(self):
        test = app.test_client(self)
        response = test.get('/machines/')
        self.assertEqual(response.status_code, 200)

    # Check if content return is application/json
    def test_content(self):
        test = app.test_client(self)
        response = test.get('/machines/')
        self.assertEqual(response.content_type, "application/json")

    # Check if the data post is successful
    def test_post(self):
       test = app.test_client(self)
       response = test.post('/machines/post/', json=self.data)
       self.assertEqual(response.status_code, 200)



if __name__ == '__main__':
    unittest.main()
