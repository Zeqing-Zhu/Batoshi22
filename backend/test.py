from app import app
import unittest



class FlaskTestAPI(unittest.TestCase):

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





if __name__ == '__main__':
    unittest.main()
