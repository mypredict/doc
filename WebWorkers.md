# main thread
~~~
const worker = new Worker('http://localhost:3000/worker.js', workerName);
worker.postMessage(xxx);
worker.onmessage = (event) => {
  console.log(event.data);
  worker.terminate();
}
worker.onerror = (event) => {
  console.log(event);
}
~~~

# worker thread
~~~
self.addEventListener('message', (e) => {
  importScripts('script1.js');  // 加载脚本
  self.postMessage(e.data + 1 + self.name);
  self.close();
}, false);
self.onerror = (e) => {
  self.postMessage(e);
}
~~~