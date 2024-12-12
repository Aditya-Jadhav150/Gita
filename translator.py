# translator.py
from googletrans import Translator

def translate(text, current_lang, target_lang):
    translator = Translator()
    translated = translator.translate(text, src=current_lang, dest=target_lang)
    return translated.text

def translate_multiple(texts, current_lang, target_lang):
    translator = Translator()
    translated_texts = [translator.translate(text, src=current_lang, dest=target_lang).text for text in texts]
    return translated_texts
