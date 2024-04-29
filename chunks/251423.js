function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMultiAccountUsers: function() {
            return o
        }
    });
    var s = n("470079"),
        a = n("442837"),
        i = n("570140"),
        r = n("480387"),
        l = n("726745");

    function o() {
        let e = (0, a.useStateFromStoresObject)([l.default], () => ({
            isLoading: l.default.getIsValidatingUsers(),
            multiAccountUsers: l.default.getUsers()
        }));
        return s.useEffect(() => {
            i.default.wait(() => {
                r.validateMultiAccountTokens()
            })
        }, []), e
    }
}