function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EventEmitterProvider: function() {
            return o
        }
    }), n("411104");
    var i = n("470079"),
        r = n("836560");
    class a extends r.EventEmitter {
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
            Provider: o,
            Consumer: l
        } = s;
    t.default = s
}