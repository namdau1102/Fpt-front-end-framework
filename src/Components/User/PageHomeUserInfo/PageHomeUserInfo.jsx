import FormSettingUserContainer from "../../../Containers/FormSettingUserContainer";
import AvatarUser from "./AvatarUser/AvatarUser";
import FormSettingUser from "./FormSettingUser/FormSettingUser";
import InfoUser from "./InfoUser/InfoUser";

export default function PageHomeUserInfo(props) {
    return (
        <>
            <div className="info_user">
                <div className="title_info_user">
                    <h2>Tổng quan</h2>
                </div>
                <ul className="flex_wrap_info_w">
                    <InfoUser dataUser={props.dataUser} />
                </ul>
            </div>
            <div className="flex_image_user">
                <AvatarUser dataUser={props.dataUser} />
            </div>
            <div className="sett_user">
                <div className="title_info_user">
                    <h2>Cá nhân</h2>
                </div>
                <ul className="flex_wrap_info_w">
                    <FormSettingUserContainer
                        dataUser={props.dataUser}
                        addressUser={props.addressUser}
                    />
                </ul>
            </div>
        </>

    )
}