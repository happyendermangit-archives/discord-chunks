function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updatePermission: function() {
            return a
        },
        selectPermission: function() {
            return o
        },
        setAdvancedMode: function() {
            return l
        },
        init: function() {
            return u
        },
        savePermissionUpdates: function() {
            return d
        },
        saveAndClearPermissionUpdates: function() {
            return c
        }
    });
    var i = n("913144"),
        s = n("929278"),
        r = n("450911");
    async function a(e, t, n, r) {
        let a = e.getGuildId();
        if (null != a && t === a) {
            let t = await (0, s.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(e, r, n);
            if (!t) return !1
        }
        i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
            id: t,
            allow: n,
            deny: r
        })
    }

    function o(e) {
        i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
            id: e
        })
    }

    function l(e) {
        i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
            advancedMode: e
        })
    }

    function u() {
        i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
        })
    }

    function d(e, t, n) {
        return c(e, t, [], n)
    }

    function c(e, t, n, s) {
        return i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
        }), new Promise(i => {
            let s = () => {
                if (0 === t.length && 0 === n.length) return i();
                if (t.length > 0) {
                    let n = t.pop();
                    if (null == n) return s();
                    r.default.updatePermissionOverwrite(e, n).then(s, s)
                } else {
                    let t = n.pop();
                    if (null == t) return s();
                    r.default.clearPermissionOverwrite(e, t).then(s, s)
                }
            };
            s()
        }).then(() => {
            i.default.dispatch({
                type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                silent: s
            })
        })
    }
}