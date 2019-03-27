import express from 'express';

const app = express();
const PORT = 2345;

app.get('/', (req, res) => {
    res.send('API is running'); 
});



// Application Listener
app.listen(PORT, () => {
    console.log(`Rector Server is running on PORT ${PORT}`);
});