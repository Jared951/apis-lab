let btn = document.querySelector("button")

const clickBtn = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
        .then((res) => {
            
            const {residents} = res.data.results[0]

            for(let i = 0; i < residents.length; i++){
                axios.get(residents[i])
                    .then((res) => {
                        const {name} = res.data
                        let response = document.createElement('h2')
                        response.textContent = name
                        console.log(response)
                        document.body.appendChild(response)
                    })

                    .catch((error) => {
                        console.log(error)
                    })
            }

        })

        .catch((error) => {
            console.log(error)
        })

    console.log('button clicked')
}

btn.addEventListener('click', clickBtn)