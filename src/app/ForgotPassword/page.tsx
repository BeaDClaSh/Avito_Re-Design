import AnimatedBackground from "@/Components/AnimatedBackground";
import InputFP from "@/Components/ForgotPassword/input";
import Menu from "@/Components/Menu";
import CopyRights from "@/Components/CopyRights";
import TextFP from "@/Components/ForgotPassword/Text";

const ForgotPassword = () => {
    return(
        <>
            <Menu/>
            <AnimatedBackground/>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pr-2 pl-2 pt-12">
            <div className=" max-w-7xl mx-auto z-50 ">
                <InputFP/>
            </div>
                <TextFP/>
            </div>
            <CopyRights/>
        </>
    )
}
export default ForgotPassword