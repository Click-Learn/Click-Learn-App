import { toast } from "react-toastify";

class ToastAlerts {
    toastError(message : string) {
        return toast.error(message, {
            position: 'bottom-right'
        })
    }
    toastSuccess(message : string) {
        return toast.success(message, {
            position: 'bottom-right'
        })
    }
    toastInfo(message : string) {
        return toast.info(message, {
            position: 'bottom-right'
        })
    }
}

export const toastsFunctions = new ToastAlerts()