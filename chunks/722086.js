function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = {};

    function d() {
        u = {}
    }
    class _ extends(s = o.default.Store) {
        getNote(e) {
            return u[e]
        }
    }
    a = "NoteStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new _(l.default, {
        CONNECTION_OPEN: d,
        OVERLAY_INITIALIZE: d,
        USER_NOTE_UPDATE: function(e) {
            u[e.id] = {
                loading: !1,
                note: e.note
            }
        },
        USER_NOTE_LOAD_START: function(e) {
            let {
                userId: t
            } = e;
            u[t] = {
                loading: !0,
                note: null
            }
        },
        USER_NOTE_LOADED: function(e) {
            let {
                userId: t,
                note: n
            } = e;
            u[t] = {
                loading: !1,
                note: null == n ? void 0 : n.note
            }
        }
    })
}