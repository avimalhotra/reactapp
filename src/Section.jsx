const user = "Avi";

function greet() {
  const hours = new Date().getHours(); // 0 - 23
  if (hours < 12) {
    return "Morning";
  } else if (hours < 16) {
    return "Afternoon";
  } else if (hours < 20) {
    return "Evening";
  } else {
    return "Night";
  }
}

function sayHi() {
  console.log("hello there");
}

function Section() {
  return (
    <section>
      <h2>Hello {user}</h2>
      <p>Good {greet()}</p>

      <button className="btn btn-primary" onClick={sayHi}>
        Click
      </button>
      <hr />
      <img src="vite.svg" alt="" width={32} height={32} />
    </section>
  );
}

export default Section;
