function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removeAccount: function() {
            return I
        },
        switchAccount: function() {
            return E
        },
        validateMultiAccountTokens: function() {
            return d
        }
    });
    var l = n("213919"),
        a = n("544891"),
        u = n("570140"),
        r = n("893776"),
        i = n("710845"),
        s = n("314897"),
        o = n("726745"),
        _ = n("981631");
    let c = new i.default("MultiAccountActionCreators");

    function d() {
        let e = s.default.getId();
        o.default.getUsers().forEach(async t => {
            let n, {
                    id: r
                } = t,
                i = l.getToken(r);
            if (null == i || "" === i) {
                u.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: r
                });
                return
            }
            u.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                userId: r
            });
            try {
                n = await a.HTTP.get({
                    url: _.Endpoints.ME,
                    headers: {
                        authorization: i
                    },
                    retries: 3
                })
            } catch (t) {
                let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                u.default.dispatch({
                    type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                    userId: r
                });
                return
            }
            u.default.dispatch({
                type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                user: n.body
            }), u.default.dispatch({
                type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: r
            })
        })
    }

    function E(e, t) {
        c.log("Switching account to ".concat(e), {
            switchSynchronously: t
        });
        let n = l.getToken(e);
        return null == n ? (c.log("Switching accounts failed because there was no token"), u.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: e
        }), Promise.resolve()) : r.default.switchAccountToken(n, t)
    }

    function I(e) {
        u.default.dispatch({
            type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
            userId: e
        })
    }
}