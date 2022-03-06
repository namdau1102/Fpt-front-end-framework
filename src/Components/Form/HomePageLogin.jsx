import LoginContainer from "../../Containers/LoginContainer"
import RegisterContainer from "../../Containers/RegisterContainer"


export default function HomePageLogin(props) {
    return (
        <div className={props.isDisplay.isDisplay ? 'login_pw show-from-login' : 'close-from-login'}>
            <div className="login_pw_inner">
                <div onClick={() => props.closeFromLogin(false)} className="close_form">
                    <i className="fas fa-times" />
                </div>
                <div className="flex_select_wq">
                    <span
                        onClick={() => props.onShowPage(0)}
                        className={props.isPageShow.isDisplay === 0 ? "title_sele active" : 'title_sele not_active'}
                    >Đăng nhập</span>
                    <span
                        onClick={() => props.onShowPage(1)}
                        className={props.isPageShow.isDisplay === 1 ? "title_sele active" : 'title_sele not_active'}
                    >Đăng kí</span>
                </div>

                {
                    props.isPageShow.isDisplay === 0
                        ? <LoginContainer />
                        : <RegisterContainer />
                }
            </div>
        </div>
    )
}