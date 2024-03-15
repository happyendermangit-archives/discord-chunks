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

    function u() {
        a = {}
    }
    class r extends n.default.Store {
        getNote(t) {
            return a[t]
        }
    }
    r.displayName = "NoteStore";
    var d = new r(l.default, {
        CONNECTION_OPEN: u,
        OVERLAY_INITIALIZE: u,
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