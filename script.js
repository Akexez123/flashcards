* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
}

.container {
    max-width: 800px;
    margin: 50px auto;
    text-align: center;
}

.theme-toggle {
    margin-bottom: 30px;
}

.theme-switch {
    margin-left: 10px;
}

.card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.flashcard {
    width: 200px;
    height: 300px;
    perspective: 1000px;
    margin-bottom: 20px;
}

.flashcard .front, .flashcard .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
}

.flashcard .front {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.flashcard .back {
    background-color: #e2e2e2;
    color: #333;
    border-radius: 10px;
    transform: rotateY(180deg);
}

.flashcard:hover .front {
    transform: rotateY(180deg);
}

.flashcard .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.flashcard h2 {
    font-size: 1.5rem;
    font-weight: 600;
}

.flashcard p {
    font-size: 1rem;
    padding: 10px;
}

.theme-switch:checked ~ .card-container {
    background-color: #333;
    color: #fff;
}

.theme-switch:checked ~ .card-container .flashcard {
    background-color: #444;
}

