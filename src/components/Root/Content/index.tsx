import React from 'react';
import Container from '@material-ui/core/Container';
import './Content.scss';
import { ReduxAlert } from '@craigmiller160/react-material-ui-common';

interface RuleProps {
    isAuth: boolean;
}

const Content = (): JSX.Element => {
    // const isAuth = useSelector(isAuthorized);
    //
    // const isAuthRule: Rule<RuleProps> = {
    //     allow: (ruleProps) => ruleProps?.isAuth ?? false,
    //     redirect: '/'
    // };

    return (
        <Container className="Content">
            <ReduxAlert id="global-alert" />
            <h1>Content</h1>
        </Container>
    );
};

export default Content;