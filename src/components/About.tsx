async function About() {
  // const response = await fetch("http://localhost:3000/api/user", {
  //   cache: "no-store",
  // });
  // const data = await response.json();
  // console.log(data);

  const response = await fetch("http://localhost:3000/api/user", {
    next: { revalidate: 3 },
  });
  const data = await response.json();
  console.log(data);

  return <div></div>;
}

export default About;
