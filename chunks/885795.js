function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("648288"),
        i = SyntaxError,
        o = "object" == typeof StopIteration ? StopIteration : null;
    e.exports = function(e) {
        if (!o) throw new i("this environment lacks StopIteration");
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
                    if (r.set(e, "[[Done]]", !0), t !== o) throw t;
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