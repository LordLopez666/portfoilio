import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    useEffect(() => {setTimeout(() => {navigate("/")}, 0.00001)}, [navigate])
    return (
        <div className="error--page">
            <h1>Whoops something went wrong!</h1>
        </div>
    )
}