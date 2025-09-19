let activeStep = 1;

document.querySelectorAll('input[name="units"]').forEach((elem) => {
  elem.addEventListener('change', function() {
    const value = document.querySelector('input[name="units"]:checked').value;

    if (value === 'imperial') {
      document.getElementById('height-imperial').classList.remove('hidden');
      document.getElementById('height-metric').classList.add('hidden');
      document.getElementById('current-weight').setAttribute('placeholder', 'lbs');
      document.getElementById('goal-weight').setAttribute('placeholder', 'lbs');
    } else if (value === 'metric') {
      document.getElementById('height-imperial').classList.add('hidden');
      document.getElementById('height-metric').classList.remove('hidden');
      document.getElementById('current-weight').setAttribute('placeholder', 'kg');
      document.getElementById('goal-weight').setAttribute('placeholder', 'kg');
    }
  });
});

document.getElementById('next-info-step').addEventListener('click', function() {
  activeStep += 1;

  const nextSection = document.getElementById(`step-${activeStep}`);

  if (nextSection) {
    nextSection.classList.remove('hidden');
  }

  if (activeStep === 6) {
    this.classList.add('hidden');

    document.getElementById('signup-form').classList.remove('hidden');
  }
});

function getInput() {
  const units = document.querySelector('input[name="units"]:checked').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const lifestyle = document.querySelector('input[name="lifestyle"]:checked')?.value;
  const workoutStyle = document.querySelector('input[name="workout-style"]:checked')?.value;
  const goal = document.querySelector('input[name="goal"]:checked')?.value;
  const diet = document.querySelector('input[name="diet"]:checked')?.value;

  const age = document.getElementById('age').value;
  const heightFt = document.getElementById('height-ft').value;
  const heightIn = document.getElementById('height-in').value;
  const heightCm = document.getElementById('height-cm').value;
  const currentWeight = document.getElementById('current-weight').value;
  const goalWeight = document.getElementById('goal-weight').value;
  const workoutDurationMinutes = document.getElementById('workout-duration-minutes').value;
  const workoutDurationDays = document.getElementById('workout-duration-days').value;

  return {
    units,
    gender,
    lifestyle,
    workoutStyle,
    goal,
    diet,
    age: age ? parseFloat(age) : undefined,
    heightFt: heightFt ? parseFloat(heightFt) : undefined,
    heightIn: heightIn ? parseFloat(heightIn) : undefined,
    heightCm: heightCm ? parseFloat(heightCm) : undefined,
    currentWeight: currentWeight ? parseFloat(currentWeight) : undefined,
    goalWeight: goalWeight ? parseFloat(goalWeight) : undefined,
    workoutDurationMinutes: workoutDurationMinutes ? parseFloat(workoutDurationMinutes) : undefined,
    workoutDurationDays: workoutDurationDays ? parseFloat(workoutDurationDays) : undefined,
  };
}

function checkForm() {
  let valid = true;

  const {
    units,
    gender,
    lifestyle,
    workoutStyle,
    goal,
    diet,
    age,
    heightFt,
    heightIn,
    heightCm,
    currentWeight,
    goalWeight,
    workoutDurationMinutes,
    workoutDurationDays,
  } = getInput();

  if (!gender
  || !lifestyle
  || !workoutStyle
  || !goal
  || !diet
  || !age
  || !currentWeight
  || !goalWeight
  || !workoutDurationMinutes
  || !workoutDurationDays
  ) {
    valid = false;
  }

  if ((units === 'imperial' && !heightFt && !heightIn) || (units === 'metric' && !heightCm)) {
    valid = false;
  }

  if (valid) {
    document.querySelector('#signup-form button[type="submit"]').removeAttribute('disabled');
  } else {
    document.querySelector('#signup-form button[type="submit"]').setAttribute('disabled', true);
  }
}

function setDietRecommendation(diet) {
  if (diet === 'low-carb') {
    document.getElementById('diet-recommendation').innerText = 'Low Carb/High Protein: (50 : 20 : 30)';
  } else if (diet === 'vegan') {
    document.getElementById('diet-recommendation').innerText = 'Vegan (40 : 30 : 20)';
  } else if (diet === 'keto') {
    document.getElementById('diet-recommendation').innerText = 'Keto (30 : 5 : 65)';
  } else if (diet === 'the-zone') {
    document.getElementById('diet-recommendation').innerText = 'The Zone (40 : 30 : 30)';
  }
}

function setMacros(calories, protein, fat, carbs) {
  document.getElementById('calculated-protein').innerHTML = `
    <p>
      <span class="font-bold">Protein: ${protein * 100}%</span>
      <br>
      <span class="text-xl">${Math.round(protein * calories / 4)}g</span>
    </p>
  `;

  document.getElementById('calculated-carbs').innerHTML = `
    <p>
      <span class="font-bold">Carbs: ${carbs * 100}%</span>
      <br>
      <span class="text-xl">${Math.round(carbs * calories / 4)}g</span>
    </p>
  `;

  document.getElementById('calculated-fat').innerHTML = `
    <p>
      <span class="font-bold">Fat: ${fat * 100}%</span>
      <br>
      <span class="text-xl">${Math.round(fat * calories / 9)}g</span>
    </p>
  `;
}

function getDietMacroPercentages(diet) {
  if (diet === 'low-carb') {
    return {
      protein: .50,
      fat: .30,
      carbs: .20,
    };
  } else if (diet === 'vegan') {
    return {
      protein: .40,
      fat: .30,
      carbs: .30,
    };
  } else if (diet === 'keto') {
    return {
      protein: .30,
      fat: .65,
      carbs: .05,
    };
  } else if (diet === 'the-zone') {
    return {
      protein: .40,
      fat: .30,
      carbs: .30,
    };
  }
}

function calculateMacros() {
  const {
    units,
    gender,
    lifestyle,
    workoutStyle,
    goal,
    diet,
    age,
    heightFt,
    heightIn,
    heightCm,
    currentWeight,
    goalWeight,
    workoutDurationMinutes,
    workoutDurationDays,
  } = getInput();

  let height = heightCm;
  let weight = currentWeight;
  let tdee = 0;
  let supplementRecommendations = [];
  let calculatorResultField = '';

  if (units === 'imperial') {
    // Convert to KG equivalent
    height = (heightFt * 12 + heightIn) * 2.54;
    weight = currentWeight / 2.204;
  }

  tdee = 10 * weight + 6.25 * height - 5 * age;

  if (gender === 'male') {
    tdee += 5;
  } else if (gender === 'female') {
    tdee -= 161;
  }

  if (lifestyle === 'sedentary') {
    tdee *= 1.13;
  } else if (lifestyle === 'light-activity') {
    tdee *= 1.22;
  } else if (lifestyle === 'active') {
    tdee *= 1.28;
  } else if (lifestyle === 'very-active') {
    tdee *= 1.38;
  }

  tdee = tdee.toFixed(0);

  document.getElementById('calculated-tdee').innerText = tdee.toLocaleString();

  if (goal === 'lose-weight') {
    document.getElementById('calculated-calories').innerText = Math.floor(tdee * 0.8).toLocaleString();

    if (diet === 'undecided') {
      setDietRecommendation('low-carb');
      setMacros(Math.floor(tdee * 0.8), .50, .30, .20);
    } else {
      const { protein, fat, carbs } = getDietMacroPercentages(diet);
      setDietRecommendation(diet);
      setMacros(Math.floor(tdee * 0.8), protein, fat, carbs);
    }

    if (diet === 'vegan') {
      supplementRecommendations = ['fat_burner', 'vegan', 'lean'];
      calculatorResultField = 'Fat Burner, Organic Vegan, LEAN';
    } else {
      supplementRecommendations = ['fat_burner', 'protein_isolate', 'lean', 'krill'];
      calculatorResultField = 'Fat Burner, Protein Isolate, LEAN, Krill';
    }
  } else if (goal === 'get-shredded') {
    document.getElementById('calculated-calories').innerText = Math.floor(tdee * 0.8).toLocaleString();

    if (diet === 'undecided') {
      setDietRecommendation('low-carb');
      setMacros(Math.floor(tdee * 0.8), .50, .30, .20);
    } else {
      const { protein, fat, carbs } = getDietMacroPercentages(diet);
      setDietRecommendation(diet);
      setMacros(Math.floor(tdee * 0.8), protein, fat, carbs);
    }

    if (diet === 'vegan') {
      supplementRecommendations = ['bcaa', 'fat_burner', 'vegan', 'lean'];
      calculatorResultField = 'BCAA, Fat Burner, Organic Vegan, LEAN';
    } else {
      supplementRecommendations = ['fat_burner', 'protein_isolate', 'lean'];
      calculatorResultField = 'Fat Burner, Protein Isolate, LEAN';
    }
  } else if (goal === 'body-recomposition') {
    document.getElementById('calculated-calories').innerText = Math.floor(tdee * 0.9).toLocaleString();

    if (diet === 'undecided') {
      setDietRecommendation('the-zone');
      setMacros(Math.floor(tdee * 0.9), .40, .30, .30);
    } else {
      const { protein, fat, carbs } = getDietMacroPercentages(diet);
      setDietRecommendation(diet);
      setMacros(Math.floor(tdee * 0.9), protein, fat, carbs);
    }

    if (diet === 'vegan') {
      supplementRecommendations = ['bcaa', 'vegan', 'bulk'];
      calculatorResultField = 'BCAA, Organic Vegan, BULK';
    } else {
      supplementRecommendations = ['fat_burner', 'protein_isolate', 'bulk'];
      calculatorResultField = 'Fat Burner, Protein Isolate, BULK';
    }
  } else if (goal === 'bulk-up') {
    document.getElementById('calculated-calories').innerText = Math.floor(tdee * 1.2).toLocaleString();

    if (diet === 'undecided') {
      setDietRecommendation('the-zone');
      setMacros(Math.floor(tdee * 1.2), .40, .30, .30);
    } else {
      setDietRecommendation(diet);
      const { protein, fat, carbs } = getDietMacroPercentages(diet);
      setDietRecommendation(diet);
      setMacros(Math.floor(tdee * 1.2), protein, fat, carbs);
    }

    if (diet === 'vegan') {
      supplementRecommendations = ['bcaa', 'vegan', 'bulk'];
      calculatorResultField = 'BCAA, Organic Vegan, BULK';
    } else {
      supplementRecommendations = ['mass', 'protein_concentrate', 'bulk'];
      calculatorResultField = 'Mass Gainer, Protein Concentrate, BULK';
    }
  }

  if (gender === 'male' && diet !== 'vegan') {
    supplementRecommendations.push('zmo');
    calculatorResultField += ', ZMO';
  }

  const handlesMap = {
    bcaa: 'coreseries-bcaa-glutamine',
    bulk: 'preseries-bulk-preworkout',
    fat_burner: 'physiqueseries-fat-burner',
    krill: 'coreseries-krill-oil',
    lean: 'preseries-lean-pre-workout',
    mass: 'proteinseries-mass-gainer',
    protein_concentrate: 'proteinseries-100-grass-fed-whey-protein-concentrate',
    protein_isolate: 'proteinseries-100-grass-fed-whey-protein-isolate',
    vegan: 'protein-series-organic-vegan',
    zmo: 'strengthseries-zmo',
  };


// document.querySelectorAll(`#recommendations a[data-handle]`).forEach((elem) => elem.classList.add('em'));
//   for (let i = 0; i < supplementRecommendations.length; i += 1) {
//     const elem = document.querySelector(`#recommendations a[data-handle="${handlesMap[supplementRecommendations[i]]}"]`);

//     if (elem) {
//       elem.classList.remove('em');
//     }
//   }

  if (goal === 'lose-weight') {
    document.getElementById('calculator-goal-field').value = 'Lose Weight';
  } else if (goal === 'get-shredded') {
    document.getElementById('calculator-goal-field').value = 'Get Shredded';
  } else if (goal === 'body-recomposition') {
    document.getElementById('calculator-goal-field').value = 'Body Recomposition';
  } else if (goal === 'bulk-up') {
    document.getElementById('calculator-goal-field').value = 'Bulk Up';
  }

  document.getElementById('calculator-result-field').value = calculatorResultField;
  document.getElementById('results').classList.remove('hidden');
}

document.querySelectorAll('#steps-container input').forEach((elem) => {
  if (elem.getAttribute('type') === 'number') {
    elem.addEventListener('keyup', checkForm);
  } else {
    elem.addEventListener('change', checkForm);
  }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  calculateMacros();
});

if (window.KlaviyoSubscribe) {
  KlaviyoSubscribe.attachToForms('#signup-form', {
    hide_form_on_success: false,
    success: function () {
      console.log('signup success');
    }
  });
}



 

