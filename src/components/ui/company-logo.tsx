import {CubeIcon} from "@heroicons/react/outline";

export default function CompanyLogo() {
    return(
        <div className={"flex justify-center"}>
            <CubeIcon className={"h-10 text-dark-900 dark:text-light-200"}/>
            <p className={"ml-2 text-3xl font-bold max-h-max text-dark-900 dark:text-light-200"}>plotify</p>
        </div>
    );
}