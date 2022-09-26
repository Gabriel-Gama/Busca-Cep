import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.get("/cep/:cep", async (request, response) => {
    const {cep} = request.params;
      const result = await axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                return response.data
            }).catch(function(){
                console.log("Ops! Cep não encontrado!")
            })
    return response.json({result});
})



app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));