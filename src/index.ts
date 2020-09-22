const logISODate = (text: string) =>
  console.log(`\x1b[36m ${new Date().toISOString()} \x1b[0m ${text}`);
const sleep = (ms = 5000) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This function will blow your mind
 */
export const awesomeFunction = async () => {
  logISODate(`Processing request...`);
  await sleep();
  try {
    Deno.copyFileSync("./READMEX.md", "./README_2.md");
  } catch (e) {
    if (e.message.includes("File not found")) {
      const data = new TextEncoder().encode("Just creating a readme file");
      Deno.writeFileSync("./README_2.md", data);
    }
  }
  logISODate(`Made copy of README.md`);
  await sleep(2500);
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
  const response = await fetch("https://www.rubix.nl");
  return `${response.status} ${response.statusText} ${response.url}`;
};
