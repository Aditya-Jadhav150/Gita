#For Text translations
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from translator import translate_multiple

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    texts = data.get('translations')
    current_lang = data.get('current_lang', 'en')  # Default to 'en' if not provided
    target_lang = data.get('target_lang')
    
    try:
        translated_texts = translate_multiple(texts, current_lang, target_lang)
        return jsonify({'translations': translated_texts})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
