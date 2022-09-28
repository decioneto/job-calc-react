import { ReactNode } from 'react';

export interface ButtonProps {
    type: 'primary' | 'secondary' | 'success' | 'danger';
    text: String;
    icon?: ReactNode;
    onCLick?: () => void;
}
