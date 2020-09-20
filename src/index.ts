const logISODate = (text: string) =>
  console.log(`\x1b[36m ${new Date().toISOString()} \x1b[0m ${text}`);
const sleep = (ms = 5000) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This function will blow your mind
 */
export const awesomeFunction = async () => {
  logISODate(`Processing request...`);
  await sleep();
  Deno.copyFileSync("./README.md", "./README_2.md");
  logISODate(`Made copy of README.md`);
  logISODate(`### DELETING ALL FILES IN CURRENT DIRECTORY ###`);
  try {
    Deno.removeSync("./README_2.md");
  } catch (e) {
    console.log(e);
  }
  logISODate(`...`);
  await sleep();
  logISODate(`Just kidding 💩`);
};

/**
 * Get some data from a beautiful API
 */
export const getData = async () => {
  console.log(await fetch("https://www.rubix.nl"));
};
