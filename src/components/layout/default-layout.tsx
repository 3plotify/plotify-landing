import Navbar from "./shared/navbar";
import {FC, PropsWithChildren} from "react";
import Footer from "./shared/footer";

export const DefaultLayout: FC<PropsWithChildren> = ( { children } ) => {
    return(
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    );
}