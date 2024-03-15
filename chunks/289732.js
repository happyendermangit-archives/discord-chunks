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
    let u = a();
    class r extends n.default.PersistedStore {
        initialize(t) {
            u = {
                ...a(),
                ...null != t ? t : {}
            }
        }
        getState() {
            return u
        }
    }
    r.displayName = "ActivityShelfStore", r.persistKey = "ActivityShelfStore";
    var d = new r(l.default, {
        LOGOUT: function() {
            u = a()
        }
    })
}