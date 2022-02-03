function crew(input) {

    let worker = input;

    if (worker.dizziness) {
        let water = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += water;
        worker.dizziness = false;
    }

    return worker;

}

console.log(crew(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));

console.log(crew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));

console.log(crew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));