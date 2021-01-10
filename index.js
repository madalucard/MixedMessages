const workout = {
    workoutTypes: ["HIIT", "AMRAP", "TABATA", "Weight", "Stretching"],
    cardioTypes : ["Run", "Rumping Rope", "Swiming", "Bike"],
    bodyParts: ["Shoulders", "Back", "Chest", "Arms", "Abs", "Legs"]    
}

const getMessage = () => {
    let workoutType = workout.workoutTypes[Math.floor(Math.random()* workout.workoutTypes.length)];
    let cardioType = workout.cardioTypes[Math.floor(Math.random()* workout.cardioTypes.length)];
    let bodyPart = workout.bodyParts[Math.floor(Math.random()* workout.bodyParts.length)];
    
    let message = `
    =====================CHALLENGE=====================
    For your today exercise challange will be ${workoutType} training. 
    You will start with ${cardioType} as cardio.
    Your focused body part will be ${bodyPart}.
    Have fun!`;
    console.log(message)
}

getMessage();