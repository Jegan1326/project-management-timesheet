const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const submissionRoutes = require('./routes/submissionRoutes');

const app = express();
connectDB();

app.use(cors()); // allow frontend to access
app.use(express.json());

app.use('/api/submissions', submissionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
