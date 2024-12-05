document.addEventListener('DOMContentLoaded', async () => {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const textToTranslate = `
        The Bhagavad Gita, often referred to simply as the Gita, is a 700-verse Hindu scripture that is part of the ancient Indian epic, the Mahabharata.
        It is a sacred text of the Hindu religion, written in the form of a dialogue between Prince Arjuna and the deity Lord Krishna, who serves as his charioteer.
        The Gita addresses the moral, ethical, and philosophical dilemmas faced by Arjuna on the battlefield of Kurukshetra, just before a great war is set to begin.
        The Gita introduces the concept of the Atman, the eternal soul, which is distinct from the physical body. It teaches that the true self is immortal and cannot be destroyed, regardless of the fate of the body. The impermanence of the body and the eternal nature of the soul is a central theme that helps Arjuna overcome his hesitation about killing his kin in the war.
    `;

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '990e14bdd2mshf275884e611c298p104f15jsnb0d4d206e9cc',
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip'
        },
        body: new URLSearchParams({
            q: textToTranslate,
            target: selectedLanguage
        })
    };

    async function fetchTranslation() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            // Update the text content with the translated text
            document.getElementById('translated-text').innerText = result.data.translations[0].translatedText;
        } catch (error) {
            console.error(error);
        }
    }

    // Call the function to fetch the translation
    fetchTranslation();
});
