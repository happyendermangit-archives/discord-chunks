function(e, t, n) {
    "use strict";
    var r = n("977791"),
        i = SyntaxError,
        a = "object" == typeof StopIteration ? StopIteration : null;
    e.exports = function(e) {
        if (!a) throw new i("this environment lacks StopIteration");
        r.set(e, "[[Done]]", !1);
        var t = {
            next: function() {
                var e = r.get(this, "[[Iterator]]"),
                    t = r.get(e, "[[Done]]");
                try {
                    return {
                        done: t,
                        value: t ? void 0 : e.next()
                    }
                } catch (t) {
                    if (r.set(e, "[[Done]]", !0), t !== a) throw t;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            }
        };
        return r.set(t, "[[Iterator]]", e), t
    }
}