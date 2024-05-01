function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("981631");
    let d = {};
    class _ extends(a = o.default.Store) {
        getHookError(e) {
            return d[e]
        }
    }
    s = "HookErrorStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function() {
            d = {}
        },
        MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function() {
            delete d[u.MediaEngineHookTypes.SOUND]
        },
        MEDIA_ENGINE_SOUNDSHARE_FAILED: function(e) {
            let {
                errorMessage: t,
                errorCode: n
            } = e;
            d[u.MediaEngineHookTypes.SOUND] = {
                errorMessage: t,
                errorCode: n
            }
        }
    })
}