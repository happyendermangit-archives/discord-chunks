function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("544891"),
        a = n("570140"),
        o = n("722086"),
        l = n("981631");

    function u(e) {
        let t = (0, r.useStateFromStores)([o.default], () => o.default.getNote(e));
        return i.useEffect(() => {
            null == t && d(e)
        }, [t, e]), null != t ? t : {
            loading: !0,
            note: null
        }
    }
    async function d(e) {
        a.default.dispatch({
            type: "USER_NOTE_LOAD_START",
            userId: e
        });
        try {
            let {
                body: t
            } = await s.HTTP.get({
                url: l.Endpoints.NOTE(e),
                oldFormErrors: !0
            });
            a.default.dispatch({
                type: "USER_NOTE_LOADED",
                userId: e,
                note: t
            })
        } catch (t) {
            a.default.dispatch({
                type: "USER_NOTE_LOADED",
                userId: e
            })
        }
    }
}