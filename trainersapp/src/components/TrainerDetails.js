import { useParams } from "react-router-dom";
import trainers from "../TrainersMock";

function TrainerDetails() {

    const { id } = useParams();

    const trainer =
        trainers.find(
            t => t.TrainerId === Number(id)
        );

    if (!trainer)
        return <h2>Trainer Not Found</h2>;

    return (

        <div>

            <h2>{trainer.Name}</h2>

            <p>ID : {trainer.TrainerId}</p>

            <p>Email : {trainer.Email}</p>

            <p>Phone : {trainer.Phone}</p>

            <p>Technology : {trainer.Technology}</p>

            <p>Skills : {trainer.Skills}</p>

        </div>

    );

}

export default TrainerDetails;