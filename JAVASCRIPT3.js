document.addEventListener('DOMContentLoaded', async () => {
    const chapterSelect = document.getElementById('chapter-select');
    const verseSelect = document.getElementById('verse-select');
    const versesTextarea = document.getElementById('one');
    const meaningsTextarea = document.getElementById('two');

    // Data for chapters and verses
    const chapters = [
        { chapter_number: 1, name: "Arjuna Vishada Yoga – The Yoga of Arjuna's Dejection", verses: 47 },
        { chapter_number: 2, name: "Sankhya Yoga – Transcendental Knowledge", verses: 72 },
        { chapter_number: 3, name: "Karma Yoga – The Yoga of Action", verses: 43 },
        { chapter_number: 4, name: "Jnana Karma Sanyasa Yoga – The Yoga of Knowledge and Renunciation of Action", verses: 42 },
        { chapter_number: 5, name: "Karma Sanyasa Yoga – The Yoga of Renunciation of Action", verses: 29 },
        { chapter_number: 6, name: "Dhyana Yoga – The Yoga of Meditation", verses: 47 },
        { chapter_number: 7, name: "Jnana Vijnana Yoga – The Yoga of Knowledge and Wisdom", verses: 30 },
        { chapter_number: 8, name: "Aksara Brahma Yoga – The Yoga of the Imperishable Brahman", verses: 28 },
        { chapter_number: 9, name: "Raja Vidya Raja Guhya Yoga – The Yoga of Royal Knowledge and Royal Secret", verses: 34 },
        { chapter_number: 10, name: "Vibhuti Yoga – The Yoga of Divine Glories", verses: 42 },
        { chapter_number: 11, name: "Visvarupa Darsana Yoga – The Yoga of the Vision of the Universal Form", verses: 55 },
        { chapter_number: 12, name: "Bhakti Yoga – The Yoga of Devotion", verses: 20 },
        { chapter_number: 13, name: "Kshetra Kshetragna Vibhaga Yoga – The Yoga of the Field and the Knower of the Field", verses: 35 },
        { chapter_number: 14, name: "Gunatraya Vibhaga Yoga – The Yoga of the Division of the Three Gunas", verses: 27 },
        { chapter_number: 15, name: "Purusottama Yoga – The Yoga of the Supreme Divine Personality", verses: 20 },
        { chapter_number: 16, name: "Daivasura Sampad Vibhaga Yoga – The Yoga of the Division between the Divine and the Demoniacal", verses: 24 },
        { chapter_number: 17, name: "Shraddhatraya Vibhaga Yoga – The Yoga of the Threefold Faith", verses: 28 },
        { chapter_number: 18, name: "Moksha Sanyasa Yoga – The Yoga of Liberation and Renunciation", verses: 78 }
    ];

    // Populate the chapter dropdown
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter.chapter_number;
        option.textContent = `Chapter ${chapter.chapter_number}: ${chapter.name}`;
        chapterSelect.appendChild(option);
    });

    chapterSelect.addEventListener('change', () => {
        const chapterNumber = chapterSelect.value;
        verseSelect.innerHTML = '<option value="">Select Verse</option>'; // Reset verse dropdown

        if (chapterNumber) {
            const selectedChapter = chapters.find(chapter => chapter.chapter_number == chapterNumber);
            for (let i = 1; i <= selectedChapter.verses; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `Verse ${i}`;
                verseSelect.appendChild(option);
            }
        } else {
            verseSelect.innerHTML = '<option value="">Select Verse</option>';
            verseSelect.disabled = true;
        }
    });

    verseSelect.addEventListener('change', async () => {
        const chapterNumber = chapterSelect.value;
        const verseNumber = verseSelect.value;
        if (chapterNumber && verseNumber) {
            const translationUrl = `https://vedicscriptures.github.io/slok/${chapterNumber}/${verseNumber}`;
            const translationResponse = await fetch(translationUrl);
            if (!translationResponse.ok) {
                throw new Error(`HTTP error! status: ${translationResponse.status}`);
            }
            const translation = await translationResponse.json();

            versesTextarea.value = translation.slok ? translation.slok : 'No verse available';
            meaningsTextarea.value = translation.adi ? JSON.stringify(translation.adi, null, 2) : 'No meaning available';
        }
    });

    // Audio play button
    document.getElementById('play-audio').addEventListener('click', async () => {
        const text = versesTextarea.value;
        try {
            const response = await fetch('http://localhost:3000/api/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const audio = new Audio('http://localhost:3000/output.mp3');
            audio.play();
        } catch (error) {
            console.error('Error generating audio:', error);
        }
    });
});
