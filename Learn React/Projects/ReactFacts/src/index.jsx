import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function ReactFacts() {
  return (
    <main>
        
      <div class="cont">
        <img src="/src/assets/react-logo.png" width="150px"/>
        <h1>React Facts</h1>
      </div>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers Thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

root.render(
    <ReactFacts/>
);
