export type AlertType = 'info' | 'success' | 'warning' | 'error';

export type AlertMessage ={
    type: AlertType;
    message: string;
};
