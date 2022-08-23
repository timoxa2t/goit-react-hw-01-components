import PropTypes from "prop-types"

export default function FriendListItem({avatar, name, isOnline, styles}){
    
    return (
        <li className={styles.item}>
            <span className={styles.status + " " + (isOnline && styles.status_online)}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired 
}