// Question bank
const questionBank = [
    {
        question: "Who is the father of Computers?",
        options: ["James Gosling", "Charles Babbage", "Dennis Ritchie", "Bjarne Stroustrup"],
        answer: 1
    },
    {
        question: "What is the full form of CPU?",
        options: ["Computer Processing Unit","Computer Principle Unit",
                   "Central Processing Unit","Control Processing Unit"],
        answer: 2
    },
    {
        question: "Which flies a green, white, and orange (in that order) tricolor flag?",
        options: ["Italy","India","Ivory Coast","Ireland"],
        answer: 3
    },
    {
        question: "What empire did Turkey belong to during WWI?",
        options:   ["The Roman Empire","The Imperial Turks","The Prussian Empire","The Ottoman Empire"],
        answer: 3
    },
    {
        question: "Where did the Aztec civilization originate from?",
        options:   ["Brazil","Mexico","Guatemala","Peru"],
        answer: 1
    },
    {
        question: "What company makes the Xperia model of smartphone?",
        options:   ["Samsung","Sony","Nokia","Huawei"],
        answer: 1
    },
    {
        question: "What gas is most prominent in the earth’s atmosphere?",
        options:   ["Nitrogen","Oxygen","Carbon Dioxide","Hydrogen"],
        answer: 0   
    },
    {
        question: "What is the highest-grossing film of all time?",
        options:   ["Titanic","Avengers: Endgame","Bahubali","Avatar"],
        answer: 3  
    },
    {
        question: "Which country was the first to use paper currency?",
        options:   ["China","America","Turkey","Italy"],
        answer: 0  
    },

    {
        question: "Which country has competed at every FIFA World Cup?",
        options:   ["Argentina","Germany","Brazil","France"],
        answer: 2
    },
    {
        question: "What is the rarest blood type in humans?",
        options:   ["A","B","O","AB"],
        answer:1   
    },
    {
        question: "What can a Vitamin C deficiency lead to?",
        options:   ["Anemia","Rickets","Scurvy","Beri Beri"],
        answer:2   
    },
    {
        question: "What planet is closest to the sun?",
        options:   ["Venus","Mercury","Earth","Mars"],
        answer:1   
    },
    {
        question: "Which of the following countries remained neutral during WWII?",
        options:   ["Switzerland","France","Poland","Germany"],
        answer: 0
    },
    {
        question: "Which horoscope sign is a fish?",
        options:   ["Aquarius","Saggitarius","Pisces","Gemini"],
        answer: 2  
    },
    {
        question: "In which country is Machu Picchu located?",
        options:   ["Brazil","Portugal","Peru","Mexico"],
        answer: 2  
    },
    {
        question: "First President of India",
        options:   ["Pt. Jawaharlal Nehru","Dr.Rajendra Prasad","Dr.B.R. Ambedkar","Sardar Vallabbhai Patel"],
        answer: 1  
    },
    {
        question: "The Statue Of Liberty was a gift from _____.",
        options:   ["India","China","Spain","France"],
        answer: 3
    },
    {
        question: "Who is the most followed person on Instagram?",
        options:   ["Kylie Jenner","Taylor Swift","Cristiano Ronaldo","The Egg"],
        answer: 2   
    },

    {
        question: "Who was the longest raining monarch in British history?",
        options:   ["Queen Victoria","King Arthur","Queen Elizabeth II","King Philip II"],
        answer: 2
    },
    {
        question: "What number was the Apollo mission that successfully put a man on the moon for the first time in human history? ",
        options:   ["Apollo 10","Apollo 11","Apollo 12","Apollo 13"],
        answer: 1
    },
    {
        question: "Which app has the most total users?",
        options:   ["TikTok","Snapchat","Facebook","Instagram"],
        answer: 3
    },
    {
        question: "What is the strongest muscle in the human body?",
        options:   ["Jaw","Heart","Glutes","Hamstring"],
        answer: 0
    },
    {
        question: "Who sang the title song for the latest Bond film, No Time to Die?",
        options:   ["Adele","Sam Smith","Billie Eilish","Taylor Swift"],
        answer: 2
    },
    {
        question: "Where was tea invented?",
        options:   ["England","USA","China","India"],
        answer: 2
    },
    {
        question: "Which of the following computer language is written in binary codes only?",
        options: ["Pascal", "Machine language", "C", "C#"],
        answer: 1
    },
    {
        question: "Which of the following is the brain of the computer?",
        options: [
            "Central Processing Unit","Memory",
            "Arithmetic and Logic unit","Control unit"
        ],
        answer: 0
    },
    {
        question: "Which of the following is not a characteristic of a computer?",
        options: ["Versatility", "Accuracy", "Diligence", "I.Q."],
        answer: 3
    },
    {
        question: "Which of the following is the smallest unit of data in a computer?",
        options: ["Bit", "KB", "Nibble", "Byte"],
        answer: 0
    },
    {
        question: "Which of the following unit is responsible for converting the data received from the user into a computer understandable format?",
        options: ["Output Unit", "Input Unit", "Memory Unit", "Arithmetic & Logic Unit"],
        answer: 1
    },
    {
        question: "Which of the following monitor looks like a television and are normally used with non-portable computer systems?",
        options: ["LED", "LCD", "CRT", "Flat Panel Monitors"],
        answer: 2
    },
    {
        question: "Which of the following is not a type of computer code?",
        options: ["EDIC", "ASCII", "BCD", "EBCDIC"],
        answer: 0
    },
    {
        question: "Which of the following part of a processor contains the hardware necessary to perform all the operations required by a computer?",
        options: ["Controller", "Registers", "Cache", "Data path"],
        answer: 3
    },
    {
        question: "Which of the following is designed to control the operations of a computer?",
        options: ["User", "Application Software", "System Software", "Utility Software"],
        answer: 2
    },
    {
        question: "Which of the following device uses positional notation to represent a decimal number?",
        options: ["Pascaline", "Abacus", "Computer", "Calculator"],
        answer: 1
    },
    {
        question: "Which of the following is used in EBCDIC?",
        options: ["Super Computers", "Mainframes", "Machine Codes", "Programming"],
        answer: 1
    },
    {
        question: "Which of the following are physical devices of a computer?",
        options: ["Hardware", "Software", "System Software", "Package"],
        answer: 0
    },
    {
        question: "Which country did Ibn Batuta belong to?",
        options: ["Mexico", "Morocco", "Egypt", "Iraq"],
        answer: 1
    },
    {
        question: "Which of the following storage is a system where a robotic arm will connect or disconnect off-line mass storage media according to the computer operating system demands?",
        options: ["Magnetic", "Secondary", "Virtual", "Tertiary"],
        answer: 3
    },
    {
        question: "Which of the following devices provides the communication between a computer and the outer world?",
        options: ["Compact", "I/O", "Drivers", "Storage"],
        answer: 1
    },
    {
        question: "Which of the following are the input devices that enable direct data entry into a computer system from source documents?",
        options: ["System Access devices", "Data acquiring devices", "Data retrieving devices", "Data Scanning devices"],
        answer: 3
    },
    {
        question: "Which of the following is the device used for converting maps, pictures, and drawings into digital form for storage in computers?",
        options: ["Image Scanner", "Digitizer", "MICR", "Scanner"],
        answer: 1
    },
    {
        question: "Which of the following can access the server?",
        options: ["Web Client", "User", "Web Browser", "Web Server"],
        answer: 0
    },
    {
        question: "Which of the following is known as the language made up of binary-coded instructions?",
        options: ["High level", "BASIC", "C", "Machine"],
        answer: 3
    },
    {
        question: "Which of the following package allows individuals to use personal computers for storing and retrieving their personal information?",
        options: ["Personal assistance package", "Graphics package", "Spreadsheet package", "Animation package"],
        answer: 0
    },
    {
        question: "Which of the following is created when a user opens an account in the computer system?",
        options: ["SFD", "MFD", "Subdirectory", "RFD"],
        answer: 2
    },
    {
        question: "Which of the following is a technique that marked the beginning of computer communications?",
        options: ["User Environment", "Batch Environment", "Time Sharing", "Message passing"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a fruit?",
        options: ["Avocado", "Brinjal", "Radish", "Tomato"],
        answer: 2
    },
    {
        question: "Which of the following service allows a user to log in to another computer somewhere on the Internet?",
        options: ["e-mail", "UseNet", "Telnet", "FTP"],
        answer: 2
    },
    {
        question: "Which of the following is not a type of computer on the basis of operation?",
        options: ["Digital", "Analog", "Hybrid", "Remote"],
        answer: 3
    },
    {
        question: "Which of the following type of computer is mostly used for automatic operations?",
        options: ["Analog", "Digital", "Hybrid", "Remote"],
        answer: 1
    },
    {
        question: "Who is generally considered the inventor of the motor car?",
        options: ["Henry Ford", "Karl Benz", "Henry M. Leland","Lewis Hamilton"],
        answer: 1
    },
    {
        question: "Which of the following computers are lower than mainframe computers in terms of speed and storage capacity?",
        options: ["Mainframes", "Hybrid", "Mini", "Super"],
        answer: 2
    }
    // Add more questions here
];

document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn'); 
    const submitButton = document.getElementById('submit-btn');
    let questions = [];
    const numQuestions = 10;
    const uniqueIndices = new Set();

    // Generate unique random indices
    while (uniqueIndices.size < numQuestions) {
        const randomIndex = Math.floor(Math.random() * questionBank.length);
        uniqueIndices.add(randomIndex);
    }

    // Select questions based on unique indices
    uniqueIndices.forEach(index => {
        questions.push(questionBank[index]);
    });

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswers = Array(numQuestions).fill(null); // Track selected answers

    function displayQuestion(index) {
        questionContainer.innerHTML = ''; // Clear previous question
        optionsContainer.innerHTML = '';  // Clear previous options

        const question = questions[index];

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionContainer.appendChild(questionText);

        question.options.forEach((option, i) => {
            const optionItem = document.createElement('li');
            optionItem.classList.add('option-box');

            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = `question-${index}-option`;
            radioButton.id = `question-${index}-option-${i}`;
            radioButton.value = i;

            const label = document.createElement('label');
            label.htmlFor = `question-${index}-option-${i}`;
            label.textContent = option;

            optionItem.appendChild(radioButton);
            optionItem.appendChild(label);

            // Restore previously selected answer if available
            if (selectedAnswers[index] === i) {
                radioButton.checked = true;
                optionItem.classList.add('selected');
            }

            // Make the entire option box clickable
            optionItem.addEventListener('click', function() {
                radioButton.checked = true;
                // Remove selection from other options
                document.querySelectorAll(`input[name="question-${index}-option"]`).forEach(input => {
                    input.parentElement.classList.remove('selected');
                });
                // Add selection to the clicked option
                optionItem.classList.add('selected');

                // Update selectedAnswers array
                selectedAnswers[currentQuestionIndex] = parseInt(radioButton.value);
            });

            optionsContainer.appendChild(optionItem);
        });
    }

    nextButton.addEventListener('click', function() {
        const selectedOption = selectedAnswers[currentQuestionIndex];

        if (selectedOption === null) {
            alert('Please select an option before proceeding to the next question.');
            return; // Stop execution if no option is selected
        }

        if (selectedOption === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            const selectedOption = selectedAnswers[currentQuestionIndex];
            if (selectedOption !== null) {
                if (selectedOption === questions[currentQuestionIndex].answer) {
                    score--; // Adjust score if moving back and the answer was correct
                }
            }

            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);

            nextButton.style.display = 'block'; // Show the next button if it's hidden
            submitButton.style.display = 'none'; // Hide submit button
        }
    });

    submitButton.addEventListener('click', function() {
        localStorage.setItem('score', score);
        window.location.href = 'result.html';
    });

    // Initialize with the first question
    displayQuestion(currentQuestionIndex);
});
