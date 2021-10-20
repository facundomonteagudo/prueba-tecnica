/*In a faraway country, there is a single farm which contains apples.
The farm is surrounded by three concentric fences, each one of them guarded by a guard.
Mister XY wished to get through the fences and eat ONE apple so he went to the first guard and reached an
agreement:
He would give the guard half the apples he would bring back plus half an additional apple.
The guard agreed, indicating that he only wanted full apples (e.g. if he brought back three apples, one and half
wouldn’t do for the guard, so Mister XY would give two to the guard and keep one for himself). Consider that
giving two of fours apples to the guard won't be valid, because it doesn’t take into account the additional half.
Mr XY reached the same agreement with the remaining two guards.
Consequently, how many apples must Mr XY cut to fulfill the agreements and have just the one apple he
wishes when leaving the fences?
How would you generalize this algorithm in a method that returns the number of apples when provided with
the number of fences?
double ApplesByFences(int fences){...}*/

// si es 1 fence, apples = 3
// si son 2 fences, apples = 7
// si son 3 fences, apples = 15
// si son 4 fences, apples = 31
// si son 5 fences, apples = 63

const ApplesByFences = (fences) => {
  if (fences < 1) return; /// preventing infinite loop.

  if (fences === 1) {
    return 3;
  }

  return ApplesByFences(fences - 1) * 2 + 1;
};

console.log(ApplesByFences(5));
