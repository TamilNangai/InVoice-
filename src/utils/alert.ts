import Swal from "sweetalert2";

export const showError = async (message: string) => {
    return await Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: message,
        confirmButtonColor: "#ef4444",
    });
};

export const showSuccess = async (message: string) => {
    return await Swal.fire({
        icon: "success",
        title: "Success",
        text: message,
        confirmButtonColor: "#22c55e",
    });
};

export const showConfirm = async (message: string) => {
    return await Swal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: message,
        showCancelButton: true,
        confirmButtonText: "Yes",
        confirmButtonColor: "#22c55e",
        cancelButtonText: "Cancel",
    });
};
