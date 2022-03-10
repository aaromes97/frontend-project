import React from "react";
import { Spinner } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Loading() {
    return (
        <div className="">
            <div>
                <Spinner color="primary" />
            </div>
        </div>
    );
}

export default Loading;