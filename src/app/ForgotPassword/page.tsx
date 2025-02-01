import InputFP from "@/Components/ForgotPassword/input";
import TextFP from "@/Components/ForgotPassword/Text";

const ForgotPassword = () => {
    return(
        <>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pr-2 pl-2 pt-12">
            <div className=" max-w-7xl mx-auto z-50 ">
                <InputFP/>
            </div>
                <TextFP/>
            </div>
        </>
    )
}
export default ForgotPassword