function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("49111");
    let a = {};
    class o extends i.default.Store {
        getHookError(e) {
            return a[e]
        }
    }
    o.displayName = "HookErrorStore";
    var l = new o(s.default, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function() {
            a = {}
        },
        MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function() {
            delete a[r.MediaEngineHookTypes.SOUND]
        },
        MEDIA_ENGINE_SOUNDSHARE_FAILED: function(e) {
            let {
                errorMessage: t,
                errorCode: n
            } = e;
            a[r.MediaEngineHookTypes.SOUND] = {
                errorMessage: t,
                errorCode: n
            }
        }
    })
}