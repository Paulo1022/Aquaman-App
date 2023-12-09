import React, { useContext } from "react";
import { UserContext } from "../../stores/userContext";

function Profile() {
    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'dados do usuario' : 'Faça o seu Login para ter acesso às informaçoes'}
        </div>
    )
};

export default Profile;