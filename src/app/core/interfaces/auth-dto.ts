interface AuthDTO {
    name_user: string,
    name_enterprise: string,
    type_user: string,
    adress_api: string,
    qtd_license: number,
    token: string,
    handle_enterprise: number,
    auth: boolean,
    msg: string,
}

interface AuthDenyDTO{
    auth: boolean,
    msg: string,
}
