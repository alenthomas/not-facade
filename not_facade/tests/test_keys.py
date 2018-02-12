import os
import unittest

class TestEnvKeys(unittest.TestCase):
    def test_flask_key_from_env(self):
        FACADE_FLASK_SECRET = os.environ.get('FACADE_FLASK_SECRET')
        assert type(FACADE_FLASK_SECRET) == str

    def test_flask_key_length(self):
        FACADE_FLASK_SECRET = os.environ.get('FACADE_FLASK_SECRET')
        assert len(FACADE_FLASK_SECRET) > 0

    def test_fb_app_token(self):
        FB_FACADE_TOKEN = os.environ.get('FB_FACADE_TOKEN')
        assert type(FB_FACADE_TOKEN) == str

    def test_fb_app_token_length(self):
        FB_FACADE_TOKEN = os.environ.get('FB_FACADE_TOKEN')
        assert len(FB_FACADE_TOKEN) > 0
