const disp = document.getElementById('disp');
        const aut = document.getElementById('author');

        setTimeout(() => {
            fetch("https://api.quotable.io/random")
                .then((res) => res.json())
                .then(res => {
                    disp.innerHTML = res.content;
                    aut.innerHTML = res.author;
                })
        }, 1000)


        function handel() {
            fetch("https://api.quotable.io/random")
                .then((res) => res.json())
                .then(res => {
                    disp.innerHTML = res.content;
                    aut.innerHTML = res.author;
                })
        }
