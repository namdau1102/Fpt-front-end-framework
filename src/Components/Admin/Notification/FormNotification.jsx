export default function FormNotification({ title, message, status }) {
    return (
        <div className="form-notification-fixed">
            <div className={status === 'success' ? "inner-form success" : status === 'error' ? "inner-form error" : "inner-form warring"}>
                <div className="text-notification">
                    {
                        status === 'success'
                            ? <i class="fa-solid fa-circle-check color-icon"></i>
                            : status === 'error' ? <i class="fa-solid fa-circle-exclamation color-icon error"></i>
                                : <i className="fa-solid fa-triangle-exclamation color-icon warring" />
                    }
                    <div className="text-pw">
                        <h4>{title}</h4>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}