

    let button = document.querySelector('#submitButton')
    
   

    async function getData (event) {
        event.preventDefault()
        let textInput = document.querySelector('#inputBar').value
        let url = `https://pokeapi.co/api/v2/pokemon/${textInput}`
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            const pokemonHeader = document.querySelector('#pokemonName')
            pokemonHeader.innerHTML = res.name.toUpperCase()
            
            const pokemonHeight = document.querySelector('#height')
            pokemonHeight.innerHTML = "Height: " + res.height
            
            
            for (let i=0; i<res.types.length; i++) {
            let pokemonType = document.createElement("h5")
            // pokemonType.innerHTML = "Type: "
            pokemonType.innerHTML =  res.types[i].type.name.toUpperCase()
            document.querySelector('#type').appendChild(pokemonType)
            }
            
            const pokemonImage = document.querySelector('#image')
            pokemonImage.src = res.sprites.front_default

            
            for (let i=0; i<res.abilities.length; i++) {
            let pokemonAblilities = document.createElement("h5")
            pokemonAblilities.innerHTML = res.abilities[i].ability.name.toUpperCase()
            document.querySelector('#abilities').appendChild(pokemonAblilities)
            }

            let displayHeight = document.querySelector('#height')
            displayHeight.style.visibility = "visible"

            let displayType = document.querySelector('#type')
            displayType.style.visibility = "visible"

            let displayAbilities = document.querySelector('#abilities')
            displayAbilities.style.visibility = "visible"
            

            console.log("success!", res)
        })
        .catch(err => {
            console.log("error!", err)
        })
    }


button.addEventListener('click', getData)

