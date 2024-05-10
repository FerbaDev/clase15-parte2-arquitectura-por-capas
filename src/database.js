const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://talba:talba@clustertalba.vnmlpsv.mongodb.net/Pedidos?retryWrites=true&w=majority&appName=ClusterTalba")
.then( () => console.log("Conexión exitosa"))
.catch( (error) => console.log(error))
