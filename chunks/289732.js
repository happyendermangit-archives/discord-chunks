function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return d
        }
    });
    var n = i("446674"),
        l = i("913144");

    function a() {
        return {
            usageByApplicationId: {},
            shelfOrder: []
        }
    }
    let r = a();
    class u extends n.default.PersistedStore {
        initialize(t) {
            r = {
                ...a(),
                ...null != t ? t : {}
            }
        }
        getState() {
            return r
        }
    }
    u.displayName = "ActivityShelfStore", u.persistKey = "ActivityShelfStore";
    var d = new u(l.default, {
        LOGOUT: function() {
            r = a()
        }
    })
}