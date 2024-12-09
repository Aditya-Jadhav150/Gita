document.addEventListener('DOMContentLoaded', async () => {
    const chaptersUrl = 'https://vedicscriptures.github.io/chapters';

    try {
        const chaptersResponse = await fetch(chaptersUrl);
        if (!chaptersResponse.ok) {
            throw new Error(`HTTP error! status: ${chaptersResponse.status}`);
        }
        const chapters = await chaptersResponse.json();
        const chapterSelect = document.getElementById('chapter-select');
        const verseSelect = document.getElementById('verse-select');
        const versesTextarea = document.getElementById('one');
        const meaningsTextarea = document.getElementById('two');

        chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter.chapter_number;
            option.textContent = `Chapter ${chapter.chapter_number}: ${chapter.name}`;
            chapterSelect.appendChild(option);
        });

        chapterSelect.addEventListener('change', async () => {
            const chapterNumber = chapterSelect.value;
            if (chapterNumber) {
                const versesUrl = `https://vedicscriptures.github.io/slok/${chapterNumber}/1`;
                const versesResponse = await fetch(versesUrl);
                if (!versesResponse.ok) {
                    throw new Error(`HTTP error! status: ${versesResponse.status}`);
                }
                const verseData = await versesResponse.json();

                // Display the selected chapter's first verse in the verses box
                versesTextarea.value = verseData.slok ? verseData.slok : 'No verse available';
                meaningsTextarea.value = verseData.adi ? JSON.stringify(verseData.adi, null, 2) : 'No meaning available';

                // Fetch all verses for the selected chapter
                const allVersesUrl = `https://vedicscriptures.github.io/slok/${chapterNumber}/verses.json`;
                const allVersesResponse = await fetch(allVersesUrl);
                if (!allVersesResponse.ok) {
                    throw new Error(`HTTP error! status: ${allVersesResponse.status}`);
                }
                const allVerses = await allVersesResponse.json();

                // Ensure allVerses is properly defined and contains data
                console.log(allVerses); // Debugging step

                // Clear previous verse options and populate the dropdown
                verseSelect.innerHTML = '<option value="">Select Verse</option>';
                verseSelect.disabled = false;

                allVerses.forEach(verse => {
                    const option = document.createElement('option');
                    option.value = verse.verse_number;
                    option.textContent = `Verse ${verse.verse_number}`;
                    verseSelect.appendChild(option);
                });
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
    } catch (error) {
        console.error('Error fetching data:', error);
    }

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
