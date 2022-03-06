import './Loading.css'
export default function FormNotificationLoading({ title, message, status }) {
    return (
        <div className="form-notification-fixed">
            <div className={"inner-form success"}>
                <div className="text-notification">
                    {<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
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