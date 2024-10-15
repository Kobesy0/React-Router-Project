import { useLocation } from "react-router-dom";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";

const Contribute = () =>{

    const location = useLocation();
    console.log(location);
    return(
        <div className="space-y-3 max-w-sm mx-auto">
            <h2 className="text-center text-xl">{location.state.email}</h2>
            <h2 className="text-center text-xl">Issue: bug Report</h2>
            <TextArea/>
            <Button>Submit new issue</Button>
        </div>
    )

}

export default Contribute;