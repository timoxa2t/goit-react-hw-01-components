import FriendListItem from './FriendListItem'
import styles from "../css/FriendList.module.css"

export default function FriendList({friends}){
    return (
    <ul className={styles.friend_list}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} styles={styles}/>
        ))}
    </ul>)
}