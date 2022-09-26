import { Component } from 'react';
import { Logo } from '@components/Logo';
import { AlertOctagon } from 'react-feather';
import styles from './styles.module.scss';
import utils from '@styles/utils.module.scss';
import { UserContanainer } from '@components/UserContainer';

export class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={utils.container}>
                    <Logo />

                    <div className={styles['header-title']}>
                        <AlertOctagon size={20} />
                        <p>Você tem 2 horas livres no seu dia</p>
                    </div>

                    <UserContanainer />
                </div>
            </div>
        );
    }
}
