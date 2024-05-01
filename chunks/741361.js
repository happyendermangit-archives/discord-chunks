function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        init: function() {
            return u
        },
        saveAndClearPermissionUpdates: function() {
            return _
        },
        savePermissionUpdates: function() {
            return d
        },
        selectPermission: function() {
            return o
        },
        setAdvancedMode: function() {
            return l
        },
        updatePermission: function() {
            return s
        }
    });
    var i = n("570140"),
        r = n("156699"),
        a = n("493683");
    async function s(e, t, n, a) {
        let s = e.getGuildId();
        if (null != s && t === s && !await (0, r.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(e, a, n)) return !1;
        i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
            id: t,
            allow: n,
            deny: a
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
        return _(e, t, [], n)
    }

    function _(e, t, n, r) {
        return i.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
        }), new Promise(i => {
            let r = () => {
                if (0 === t.length && 0 === n.length) return i();
                if (t.length > 0) {
                    let n = t.pop();
                    if (null == n) return r();
                    a.default.updatePermissionOverwrite(e, n).then(r, r)
                } else {
                    let t = n.pop();
                    if (null == t) return r();
                    a.default.clearPermissionOverwrite(e, t).then(r, r)
                }
            };
            r()
        }).then(() => {
            i.default.dispatch({
                type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                silent: r
            })
        })
    }
}