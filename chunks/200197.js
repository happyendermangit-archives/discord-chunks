function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EventEmitterProvider: function() {
            return r
        },
        default: function() {
            return u
        }
    }), n("70102");
    var i = n("884691"),
        l = n("44170");
    class a extends l.EventEmitter {
        on() {
            return this
        }
        once() {
            return this
        }
        addListener() {
            return this
        }
        removeListener() {
            return this
        }
        emit() {
            return !1
        }
    }
    let s = i.createContext(new a),
        {
            Provider: r,
            Consumer: o
        } = s;
    var u = s
}