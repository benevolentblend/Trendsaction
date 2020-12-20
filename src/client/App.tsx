import React from "react";
const App = () => {
  const [greeting, setGreeting] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/hello");
        const greeting = await res.json();
        setGreeting(greeting);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <h1 className="display-1">Hello {greeting}!</h1>
    </div>
  );
};

export default App;
