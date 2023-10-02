import Swal from "sweetalert2";

export const errorHandler = (data, setErrors = null) => {

  let errorData = null;
        if ("error" in data) {
            errorData = data.error;
        }
        if ("errors" in data) {
            errorData = data.errors;
        }

    switch (data.status_code) {
        case 422: // Error validator
            let errors = [];
            if (setErrors) {
                setErrors(errorData);
            }
            errors = swalErrors(errorData);
            return errors;
        case 400: //Bad Request
        case 404: //Not fount
            let msg = errorData.msg;
            Swal.fire("Alerta", msg, "warning");
            break;
        case 401: //Not authenticated
            localStorage.clear();
        break;

        case 500: //Server error
            Swal.fire(
                "Alerta",
                "Ha ocurrido un error, por favor contacta al administrador",
                "error"
            );
            break; //Mensaje personalizado

        default:
            console.warn("errorHandler", data);
            break;
    }
};

const swalErrors = (errors) => {
    let msgErrors = [];

    Object.entries(errors).forEach(([key, value]) => {
        msgErrors.push(`● ${value[0]}`);
    });

    Swal.fire({
        title: "Alerta",

        html: `

        <p style="text-align: initial">
        Ha habido campos  <b>incorrectos</b>, revisa los campos marcados.</br></br>

        ${msgErrors.join("<br/>")}
        </p>

        `,
        icon: "warning",
        width: 500,
    });

    return msgErrors;
};
