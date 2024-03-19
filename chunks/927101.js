function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMultiAccountUsers: function() {
            return o
        }
    });
    var s = n("884691"),
        a = n("446674"),
        l = n("913144"),
        r = n("694787"),
        i = n("770032");

    function o() {
        let e = (0, a.useStateFromStoresObject)([i.default], () => ({
            isLoading: i.default.getIsValidatingUsers(),
            multiAccountUsers: i.default.getUsers()
        }));
        return s.useEffect(() => {
            l.default.wait(() => {
                r.validateMultiAccountTokens()
            })
        }, []), e
    }
}