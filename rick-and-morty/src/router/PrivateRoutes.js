import {
    Route,
    Redirect
} from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
    const tf = isAuthenticated;
    console.log(tf);
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isAuthenticated
                        ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: { from: location }
                                }}
                            />
                        ))
            }
        />
    );
}

export default PrivateRoute;