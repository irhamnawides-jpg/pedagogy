 // Data soal dalam format string
const soalString = `Perhatikan kutipan ayat Q.S. al-Qasas/28: 85 berikut<img src="https://drive.google.com/thumbnail?id=1R8rCN2QG3cRztylhm1KbPe2RFXihM-us&sz=w1000" alt="Ilustrasi" loading="lazy" style="max-width: 100%; height: auto;"> Arti ayat yang bergaris pada potongan ayat di atas adalah ..|sesungguhnya (Allah) yang mewajibkan|kami sungguh melarang kamu|sesungguhnya wajib bagimu|kami memerintahkanmu|kamu diperintahkan_#_Perhatikan kutipan ayat Q.S. al-Qasas/28: 85 berikut <img src="https://drive.google.com/thumbnail?id=1R8rCN2QG3cRztylhm1KbPe2RFXihM-us&sz=w1000" alt="Ilustrasi" loading="lazy" style="max-width: 100%; height: auto;"></br> Bacaan tajwid potongan ayat di atas adalah ..|Mad jaiz munfasil, mad iwadl, mad thabi'i|Mad jaiz munfasil, ikhfa', mad wajib mutasil|Mad jaiz munfasil, ikhfa', mad thabi'i|Mad badal, mad iwadl, mad thabi'i|Mad badal, mad iwadl, mad lain_#_Perhatikan kutipan ayat Q.S. al-Baqarah/2: 143 berikut <img src="https://drive.google.com/thumbnail?id=1-X2AB6EvmDEGQHX9oT4Kvtv76RF9qRg9&sz=w1000" alt="Ilustrasi" loading="lazy" style="max-width: 100%; height: auto;"></br> Arti ayat yang bergaris pada potongan ayat di atas adalah ..|dan demikian pula Kami telah menjadikan kamu (umat Islam) umat pertengahan|dan demikian pula Kami telah menciptakan kamu (umat Islam) umat yang terbaik|dan demikian pula Kami telah memerintahkan kamu (umat Islam) berbuat baik|dan demikian pula Kami telah menciptakan kamu (umat Islam) umat bersuku-suku|dan demikian pula Kami telah menciptakan kamu (umat Islam) umat berbangsa-bangsa_#_Perhatikan kutipan ayat Q.S. al-Baqarah/2: 143 berikut <img src="https://drive.google.com/thumbnail?id=1R8rCN2QG3cRztylhm1KbPe2RFXihM-us&sz=w1000" alt="Ilustrasi" loading="lazy" style="max-width: 100%; height: auto;"><br> Bacaan tajwid potongan ayat di atas adalah ..|Mad jaiz munfasil, mad iwadl, mad thabi'i, mad badal|Mad thabi'i, al qamariyah, al syamsiyah, ikhfa' mad jaiz mumfasil|Mad jaiz munfasil, ikhfa', mad thabi'i, idhar syafawi|Mad badal, mad iwadl, mad thabi'i, iqlab|Mad badal, mad iwadl, mad lain_#_Perhatikan kutipan ayat Q.S. al-Baqarah/2: 143 berikut!<img src="https://drive.google.com/thumbnail?id=1R8rCN2QG3cRztylhm1KbPe2RFXihM-us&sz=w1000" alt="Ilustrasi" loading="lazy" style="max-width: 100%; height: auto;"><br> Bacaan tajwid potongan ayat di atas adalah ….|Mad jaiz munfasil, mad iwadl, mad thabi'i, mad badal|Mad thabi'i, al qamariyah, al syamsiyah, ikhfa' mad jaiz mumfasil|Mad jaiz munfasil, ikhfa', mad thabi'i, idhar syafawi|Mad badal, mad iwadl, mad thabi'i, iqlab|Ikhfa', mad thabi'i, idhar, al qamariyah_#_Perhatikan pernyataan di bawah ini! 1) Bangga sebagai bangsa Indonesia 2) Menjual nama baik tanah air Indonesia 3) Menggunakan hak pilih dalam pemilu 4) Menjunjung tinggi hukum jika perlu 5) Aktif berpartisipasi dalam pembangunan nasional. Pernyataan tersebut merupakan contoh sikap cinta tanah air adalah nomor ..|1), 2) dan 3)|1), 2) dan 4)|1), 2) dan 5)|1), 3) dan 5)|1), 4) dan 5)_#_Berikut ini yang bukan contoh sikap cinta tanah air yang bisa kita lakukan dalam kegiatan sehari-hari adalah ..|Menuntut ilmu dengan sungguh-sungguh|Melestarikan kebudayaan Indonesia|Menjaga kelestarian lingkungan|Menciptakan kerukunan antar umat beragama|Hidup rukun dan gotong royong jika jadi tokoh masyarakat_#_Allah Swt. berfirman, "...agar Kami dapat menjadikan kalian sebagai umat pilihan...". Yang dimaksud dengan kata 'wasath' adalah ….|pilihan yang terbaik|pilihan yang menyenangkan|pilihan yang menyedihkan|pilihan yang melapangkan|pilihan yang terlupakan_#_Hal ini dikembangkan oleh Kemendikbud dan Kemenag dengan mengusung tema ..|merdeka sebebas bebasnya|merdeka sesuai kebutuhan|profil pelajar Pancasila|profil guru professional|profil tenaga kependidikan_#_Karakter dan prinsip wasath seseorang hendaknya memegang prinsip berada dalam jalan yang lurus, hal ini dapat difahami sebagai wujud sikap ..|tasamuh|tawasul|tawazun|tawakal|istiqamah`;

// Kunci jawaban (indeks 0-4 sesuai urutan pilihan)
const answerKey = [0, 2, 0, 4, 3, 3, 0, 4, 2, 1];

// Parse soal dari string
function parseQuizData(soalString) {
    const questions = [];
    const soalArray = soalString.split('_#_');
    
    soalArray.forEach((soal, index) => {
        const parts = soal.split('|');
        if (parts.length >= 6) { // Soal + 5 opsi
            const question = parts[0];
            const options = parts.slice(1, 6);
            
            questions.push({
                question: question,
                options: options,
                correctAnswer: answerKey[index]
            });
        }
    });
    
    return questions;
}

// Variabel state
const quizData = parseQuizData(soalString);
let userAnswers = new Array(quizData.length).fill(null);
let userName = "";

// Elemen DOM
const questionList = document.getElementById('questionList');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const userNameInput = document.getElementById('userName');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');
const totalQuestions = document.getElementById('totalQuestions');
const resultModal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');
const closeResultBtn = document.getElementById('closeResultBtn');
const finalScore = document.getElementById('finalScore');
const resultOutput = document.getElementById('resultOutput');
const copyBtn = document.getElementById('copyBtn');

// Inisialisasi quiz
function initQuiz() {
    totalQuestions.textContent = quizData.length;
    renderQuestions();
    updateProgress();
    
    // Event listeners
    submitBtn.addEventListener('click', showResults);
    resetBtn.addEventListener('click', resetAnswers);
    closeModal.addEventListener('click', () => {
        resultModal.style.display = 'none';
    });
    closeResultBtn.addEventListener('click', () => {
        resultModal.style.display = 'none';
    });
    copyBtn.addEventListener('click', copyResults);
    
    // Simpan nama saat input berubah
    userNameInput.addEventListener('input', function() {
        userName = this.value.trim() || "Peserta";
    });
    
    // Set default nama
    userName = userNameInput.value.trim() || "Peserta";
}

// Render semua soal
function renderQuestions() {
    questionList.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.id = `question-${index}`;
        
        let questionHtml = `
            <div class="question-number">${index + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="options-container">
        `;
        
        const optionLabels = ['A', 'B', 'C', 'D', 'E'];
        question.options.forEach((option, optIndex) => {
            const isSelected = userAnswers[index] === optIndex;
            questionHtml += `
                <div class="option ${isSelected ? 'selected' : ''}" data-question="${index}" data-option="${optIndex}">
                    <div class="option-label">${optionLabels[optIndex]}</div>
                    ${option}
                </div>
            `;
        });
        
        questionHtml += '</div>';
        questionItem.innerHTML = questionHtml;
        questionList.appendChild(questionItem);
    });
    
    // Tambahkan event listener untuk opsi
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const questionIndex = parseInt(this.getAttribute('data-question'));
            const optionIndex = parseInt(this.getAttribute('data-option'));
            
            // Hapus pilihan sebelumnya untuk soal ini
            const options = document.querySelectorAll(`.option[data-question="${questionIndex}"]`);
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Tandai pilihan baru
            this.classList.add('selected');
            
            // Simpan jawaban
            userAnswers[questionIndex] = optionIndex;
            
            // Update progress
            updateProgress();
        });
    });
}

// Update progress bar
function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const progress = (answeredCount / quizData.length) * 100;
    
    progressFill.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}%`;
}

// Reset semua jawaban
function resetAnswers() {
    if (confirm("Apakah Anda yakin ingin mereset semua jawaban?")) {
        userAnswers = new Array(quizData.length).fill(null);
        renderQuestions();
        updateProgress();
    }
}

// Tampilkan hasil
function showResults() {
    // Validasi nama
    if (!userNameInput.value.trim()) {
        alert("Silakan masukkan nama Anda terlebih dahulu!");
        userNameInput.focus();
        return;
    }
    
    // Validasi apakah semua soal telah dijawab
    const unansweredCount = userAnswers.filter(answer => answer === null).length;
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(`Masih ada ${unansweredCount} soal yang belum dijawab. Apakah Anda yakin ingin mengumpulkan?`);
        if (!confirmSubmit) {
            return;
        }
    }
    
    // Hitung skor
    let score = 0;
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // Hitung nilai (0-100)
    const nilai = Math.round((score / quizData.length) * 100);
    
    // Buat string jawaban (ABCDE format)
    let jawabanString = "";
    userAnswers.forEach(answer => {
        if (answer === 0) jawabanString += "A";
        else if (answer === 1) jawabanString += "B";
        else if (answer === 2) jawabanString += "C";
        else if (answer === 3) jawabanString += "D";
        else if (answer === 4) jawabanString += "E";
        else jawabanString += "_"; // Jika belum dijawab
    });
    
    // Format hasil: NAMA/JAWABAN/NILAI
    const hasilFormat = `${userName}/${jawabanString}/${nilai}`;
    
    // Tampilkan di modal
    finalScore.textContent = `${score}/${quizData.length} (${nilai})`;
    resultOutput.textContent = hasilFormat;
    
    // Tampilkan modal
    resultModal.style.display = 'flex';
}

// Salin hasil ke clipboard
function copyResults() {
    const textToCopy = resultOutput.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Hasil berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
        // Fallback untuk browser lama
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert("Hasil berhasil disalin!");
        } catch (err) {
            alert("Gagal menyalin hasil. Silakan copy manual.");
        }
        document.body.removeChild(textArea);
    });
}

// Tutup modal ketika klik di luar modal
window.addEventListener('click', (event) => {
    if (event.target === resultModal) {
        resultModal.style.display = 'none';
    }
});

// Inisialisasi quiz saat halaman dimuat
document.addEventListener('DOMContentLoaded', initQuiz);
