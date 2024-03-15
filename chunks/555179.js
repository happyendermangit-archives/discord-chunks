function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return d
        }
    });
    var n = i("446674"),
        l = i("913144");
    let a = {};

    function r() {
        a = {}
    }
    class u extends n.default.Store {
        getNote(t) {
            return a[t]
        }
    }
    u.displayName = "NoteStore";
    var d = new u(l.default, {
        CONNECTION_OPEN: r,
        OVERLAY_INITIALIZE: r,
        USER_NOTE_UPDATE: function(t) {
            a[t.id] = {
                loading: !1,
                note: t.note
            }
        },
        USER_NOTE_LOAD_START: function(t) {
            let {
                userId: e
            } = t;
            a[e] = {
                loading: !0,
                note: null
            }
        },
        USER_NOTE_LOADED: function(t) {
            let {
                userId: e,
                note: i
            } = t;
            a[e] = {
                loading: !1,
                note: null == i ? void 0 : i.note
            }
        }
    })
}