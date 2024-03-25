import express from "express";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/interest", (req, res) => {
    try {
        const principalAmt = req.query.principal
        console.log("x=", principalAmt);
        const rateAmt = req.query.rate
        console.log("y=", rateAmt);

        const timeAmt = req.query.time
        console.log("z=", timeAmt);

        const result = (principalAmt * rateAmt * timeAmt) / 100;

        return res.status(200).json({ result })
    } catch (error) {
        res.status(404).json({ msg: "Error while sending the data" })
    }


})

app.listen(8000, () => {
    console.log("App is running at PORT 8000 successfully");
})