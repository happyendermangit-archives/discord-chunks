function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMultiAccountUsers: function() {
            return s
        }
    });
    var l = n("470079"),
        a = n("442837"),
        u = n("570140"),
        r = n("480387"),
        i = n("726745");

    function s() {
        let e = (0, a.useStateFromStoresObject)([i.default], () => ({
            isLoading: i.default.getIsValidatingUsers(),
            multiAccountUsers: i.default.getUsers()
        }));
        return l.useEffect(() => {
            u.default.wait(() => {
                r.validateMultiAccountTokens()
            })
        }, []), e
    }
}