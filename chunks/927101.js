function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMultiAccountUsers: function() {
            return o
        }
    });
    var s = n("884691"),
        a = n("446674"),
        r = n("913144"),
        l = n("694787"),
        i = n("770032");

    function o() {
        let e = (0, a.useStateFromStoresObject)([i.default], () => ({
            isLoading: i.default.getIsValidatingUsers(),
            multiAccountUsers: i.default.getUsers()
        }));
        return s.useEffect(() => {
            r.default.wait(() => {
                l.validateMultiAccountTokens()
            })
        }, []), e
    }
}