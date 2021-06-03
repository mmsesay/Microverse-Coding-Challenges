
var mSteps = 8; // steps
var mPaths = ['U','D','D','D','U','D','U','U']; //paths

function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;
  
  for(let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      elevation--;
    } else {
      if (elevation == -1) {
        valleys++;
      }
      elevation++;
    }
  }

  return valleys;

}

function main() {
  const valleys = countingValleys(mSteps, mPaths);
  console.log(valleys);
}

main();