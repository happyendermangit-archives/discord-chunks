function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMultiAccountUsers: function() {
            return i
        }
    });
    var l = n("884691"),
        a = n("446674"),
        u = n("913144"),
        r = n("694787"),
        s = n("770032");

    function i() {
        let e = (0, a.useStateFromStoresObject)([s.default], () => ({
            isLoading: s.default.getIsValidatingUsers(),
            multiAccountUsers: s.default.getUsers()
        }));
        return l.useEffect(() => {
            u.default.wait(() => {
                r.validateMultiAccountTokens()
            })
        }, []), e
    }
}