import { Component } from 'react';
import AvatarImg from '@assets/avatar.png';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export class UserContanainer extends Component {
    render() {
        return (
            <Link to="/profile">
                <div className={styles['user-container']}>
                    <div>
                        <h6>Jaqueline</h6>
                        <span>Ver perfil</span>
                    </div>
                    <div className={styles.avatar}>
                        <img src={AvatarImg} alt="avatar image" />
                    </div>
                </div>
            </Link>
        );
    }
}
