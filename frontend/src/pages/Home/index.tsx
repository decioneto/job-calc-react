import { Component } from 'react';

import styles from './styles.module.scss';
import utils from '@styles/utils.module.scss';
import { PlusSquare } from 'react-feather';
import { Button } from '@components/Button';

export class Home extends Component {
    render() {
        return (
            <div className={styles['home-top']}>
                <div className={utils.container}>
                    <div className={styles['home-top-items']}>
                        <div>
                            <div>
                                <span>12</span>
                                <span>Projetos ao total</span>
                            </div>
                            <div>
                                <span>7</span>
                                <span>Em andamento</span>
                            </div>
                            <div>
                                <span>4</span>
                                <span>Encerrados</span>
                            </div>
                        </div>

                        <Button
                            text="Adicionar novo job"
                            type="danger"
                            icon={<PlusSquare size={20} />}
                            onCLick={() => console.log('ui')}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
