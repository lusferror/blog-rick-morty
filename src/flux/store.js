export const getState = ({getStore, setStore, getActions}) => ({
    store:{
        url:'https://rickandmortyapi.com/api/',
        characters: []
    },
    actions:{
        getAllCharacter(){
            const { url } = getStore()
            fetch(url + 'character')
            .then(response =>response.json())
            .then(data=>{
                console.log(data);
                setStore({characters: data?.results})
                console.log(getStore());
            })
            .catch(error=>console.log(error))
        }
    }
})
