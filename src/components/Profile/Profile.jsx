import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
	return (
		<div className={s.content}>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} 
					 addPost={props.addPost}
					 newPostText={props.profilePage.newPostText}
					 updatePostText={props.updatePostText}
					 />
		</div>
	)
} 
export default Profile;