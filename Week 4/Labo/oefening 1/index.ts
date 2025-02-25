import { performance } from 'perf_hooks';
const startTime = performance.now()

const delay = (delay: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

(async() => {
    await Promise.all([delay(1000), delay(10000), delay(15000)])
    console.log("Done!");
    const endTime = performance.now();
    console.log(`Time taken: ${endTime - startTime}ms`);
})();

//Deze code zal na 15 seconden "Done!" printen.
