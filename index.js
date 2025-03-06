const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

const productRoutes = require("./routes/product");
const innerPageTitleRoutes = require("./routes/innerPageTitle");
const videoRoutes = require("./routes/video");

app.use("/product", productRoutes);
app.use("/innerPageTitle", innerPageTitleRoutes);
app.use("/video", videoRoutes);
