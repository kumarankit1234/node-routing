const user = {
    isCredentialValid: credential => {
        const { username, password } = credential;
        return (
            username && username === 'ankit' && password && password === 'ankit'
        );
    }
};

module.exports = user;
