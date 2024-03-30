function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        LinkedErrors: function() {
            return a
        }
    });
    var r = n("648238"),
        i = n("590171");
    class a {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = a.id
        }
        constructor(t = {}) {
            a.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
        }
        setupOnce(t, e) {
            t((t, n) => {
                let o = e(),
                    s = o.getClient(),
                    u = o.getIntegration(a);
                if (!s || !u) return t;
                let c = s.getOptions();
                return (0, r.applyAggregateErrorsToEvent)(i.exceptionFromError, c.stackParser, c.maxValueLength, u._key, u._limit, t, n), t
            })
        }
    }
    a.__initStatic()
}