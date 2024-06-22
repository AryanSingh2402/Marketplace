const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./Routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const db = 'mongodb+srv://aryansingh3264:tTGEi0WTwub6Vpos@mymarketplacecluster.coj68xs.mongodb.net/MarketPlace?retryWrites=true&w=majority&appName=MyMarketPlaceCluster'
;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api', productRoutes);
app.get('*', (req, res) => {
    res.status(200).json({ message: 'Welcome To Marketplace' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
