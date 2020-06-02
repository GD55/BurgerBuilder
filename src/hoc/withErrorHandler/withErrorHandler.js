import React, { useEffect, useState } from 'react'
import Aux from '../auxiliary'
import Modal from '../../Components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, setError] = useState(null);

        useEffect(() => {
            const reqInterceptors = axios.interceptors.request.use(req => {
                setError(null);
                return req;
            });
            const resInterceptors = axios.interceptors.response.use(res => res, error => {
                setError(error);
            });
            return function cleanup() {
                axios.interceptors.request.eject(reqInterceptors);
                axios.interceptors.response.eject(resInterceptors);
            };
        })

        const errorConfirmedhandler = () => {
            setError(null);
        }

        return (
            <Aux>
                <Modal show={error} closeModal={errorConfirmedhandler}>
                    {error && error.message}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default withErrorHandler;
