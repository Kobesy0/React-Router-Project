import Button from "../ui/Button";
import Input from "../ui/Input"


const LoginPage = () =>{
    return(
        <div>
            <h2 className="text-center mb-3">Login to Contribute</h2>
            <form className="space-y-3 max-w-sm mx-auto">
                <Input placeholder="Email address"/>
                <Input placeholder="Password"/>

                <Button>Login</Button>
            </form>
        </div>
    )
}

export default LoginPage;