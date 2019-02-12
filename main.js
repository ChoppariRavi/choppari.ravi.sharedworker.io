const worker = new SharedWorker('worker.js');
let count = 0

function upcount() {
    worker.port.postMessage(count++);
}


worker.port.onmessage = (e) => {
    const result = document.querySelector("#result");
    result.innerHTML = `${e.data}`
};
