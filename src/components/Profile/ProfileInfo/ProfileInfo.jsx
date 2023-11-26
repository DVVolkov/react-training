import React from "react";
import s from "./ProfileInfo.module.css"

function ProfileInfo(props) {
    return (
        <div>
            <div>
				<img className={s.content__profile_img} src="https://images.wallpaperscraft.ru/image/single/doroga_razmetka_vecher_120298_1024x768.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				ava desc
			</div>
        </div>
    )
}

export default ProfileInfo;