// For closing the Signup Page
const closeButton = document.getElementById('x');
const container = document.querySelector('.container');
if (sessionStorage.getItem('formClosed') === 'true') {
    container.style.display = 'none';
}
closeButton.addEventListener('click', () => {
    container.style.display = 'none';
    sessionStorage.setItem('formClosed', 'true');
});

// FOR Language Translation Tool
const hoverButton = document.getElementById("OneBTN");
const overlay = document.getElementById("overlay");
const text = document.getElementById("text");
const form = document.querySelector("form");

// Show overlay and text on hover
hoverButton.addEventListener("click", () => {
  overlay.style.display = "block";
  text.style.display = "block";
});

// Handle radio button selection
form.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  console.log("Selected Language:", selectedLanguage);
  // alert(You selected: ${selectedLanguage});
  overlay.style.display = "none";
  text.style.display = "none";
});

// For signup
document.getElementById('Signup').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'block';
});

document.getElementById('Login').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

document.getElementById('x').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
});

document.getElementById('x-signup').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
});
document.getElementById('Signup').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'block';
});

document.getElementById('Login').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

document.getElementById('x').addEventListener('click', function() {
  document.querySelector('.login-form').style.display = 'none';
});

document.getElementById('x-signup').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
});

// Data Storage at Client 
document.getElementById('x-signup').addEventListener('click', function() {
  document.querySelector('.signup-form').style.display = 'none';
});

// Handle signup form submission
document.getElementById('btn-signup').addEventListener('click', function() {
  console.log('Signup button clicked');

  const username = document.querySelector('.signup-form input[type="text"]').value;
  const email = document.querySelector('.signup-form input[type="email"]').value;
  const password = document.querySelector('.signup-form input[type="password"]').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Confirm Password:', confirmPassword);

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const user = {
    username: username,
    email: email,
    password: password
  };

  console.log('User object:', user);

  localStorage.setItem('user', JSON.stringify(user));
  console.log('User data stored in localStorage:', localStorage.getItem('user'));

  alert('Signup successful! You can now login.');
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
});

// Handle login form submission
document.getElementById('btn').addEventListener('click', function() {
  const email = document.querySelector('.login-form input[type="email"]').value;
  const password = document.querySelector('.login-form input[type="password"]').value;

  console.log('Login button clicked');
  console.log('Email:', email);
  console.log('Password:', password);

  const storedUser = JSON.parse(localStorage.getItem('user'));

  console.log('Stored user data:', storedUser);

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert('Login successful!');
    document.querySelector('.login-form').style.display = 'none';
    // Redirect to another page or perform other actions upon successful login
  } else {
    alert('Invalid email or password!');
  }
});

// Language Translation for Button
const languages = {
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ceb": "Cebuano",
    "ny": "Chichewa",
    "zh-cn": "Chinese (Simplified)",
    "zh-tw": "Chinese (Traditional)",
    "co": "Corsican",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "eo": "Esperanto",
    "et": "Estonian",
    "tl": "Filipino",
    "fi": "Finnish",
    "fr": "French",
    "fy": "Frisian",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "gu": "Gujarati",
    "ht": "Haitian Creole",
    "ha": "Hausa",
    "haw": "Hawaiian",
    "he": "Hebrew",
    "hi": "Hindi",
    "hmn": "Hmong",
    "hu": "Hungarian",
    "is": "Icelandic",
    "ig": "Igbo",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "jw": "Javanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "km": "Khmer",
    "rw": "Kinyarwanda",
    "ko": "Korean",
    "ku": "Kurdish (Kurmanji)",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "or": "Odia (Oriya)",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "ro": "Romanian",
    "ru": "Russian",
    "sm": "Samoan",
    "gd": "Scots Gaelic",
    "sr": "Serbian",
    "st": "Sesotho",
    "sn": "Shona",
    "sd": "Sindhi",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tg": "Tajik",
    "ta": "Tamil",
    "tt": "Tatar",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "tk": "Turkmen",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "ug": "Uyghur",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu"
};

document.addEventListener('DOMContentLoaded', () => {
    const targetLangSelect = document.getElementById('targetLang');
    const oneBTN = document.getElementById('OneBTN');
    const radioContainer = document.querySelector('.radio-container');

    for (const [code, name] of Object.entries(languages)) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        targetLangSelect.appendChild(option);
    }

    // Initialize Select2
    $('.select2').select2();

    // Toggle radio-container visibility
    oneBTN.addEventListener('click', () => {
        if (radioContainer.style.display === 'none' || radioContainer.style.display === '') {
            radioContainer.style.display = 'block';
        } else {
            radioContainer.style.display = 'none';
        }
    });
});

async function translatePage() {
    const targetLang = document.getElementById('targetLang').value;
    const radioContainer = document.querySelector('.radio-container');
    try {
        const elementsToTranslate = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, button, li, label, input, textarea, #about-link, #shlokas-link');
        const translations = [];

        elementsToTranslate.forEach(element => {
            const text = element.textContent.trim();
            if (text) {
                translations.push({
                    element: element,
                    text: text
                });
            }
        });

        const response = await fetch('http://127.0.0.1:5000/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                translations: translations.map(t => t.text),
                current_lang: 'en',
                target_lang: targetLang,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            translations.forEach((t, index) => {
                t.element.textContent = data.translations[index];
            });
        } else {
            console.error(`Error: ${data.error}`);
        }

        // Close the radio-container after translation
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
    } catch (error) {
        console.error('Error:', error);
    }
}
