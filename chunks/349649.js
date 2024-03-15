function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return s
        }
    });
    var n = i("884691"),
        l = i("446674"),
        a = i("872717"),
        u = i("913144"),
        r = i("555179"),
        d = i("49111");

    function s(t) {
        let e = (0, l.useStateFromStores)([r.default], () => r.default.getNote(t));
        return n.useEffect(() => {
            null == e && o(t)
        }, [e, t]), null != e ? e : {
            loading: !0,
            note: null
        }
    }
    async function o(t) {
        u.default.dispatch({
            type: "USER_NOTE_LOAD_START",
            userId: t
        });
        try {
            let {
                body: e
            } = await a.default.get({
                url: d.Endpoints.NOTE(t),
                oldFormErrors: !0
            });
            u.default.dispatch({
                type: "USER_NOTE_LOADED",
                userId: t,
                note: e
            })
        } catch (e) {
            u.default.dispatch({
                type: "USER_NOTE_LOADED",
                userId: t
            })
        }
    }
}