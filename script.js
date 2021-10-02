      async function displayImage() {
        const api = await fetch("https://randomuser.me/api/");
        const data = await api.json();

        const image = document.getElementById("image");
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const date_of_birth = document.getElementById("date_of_birth");

        image.setAttribute("src", `${data.results[0].picture.medium}`);
        name.innerText = `Title :${data.results[0].name.first}`;
        email.innerText = `Email :${data.results[0].email}`;
      }
