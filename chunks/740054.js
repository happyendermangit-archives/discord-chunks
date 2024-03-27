function(t, e, n) {
    "use strict";
    let r;
    n.r(e), n.d(e, {
        FunctionToString: function() {
            return a
        }
    });
    var i = n("648238");
    class a {
        constructor() {
            a.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = a.id
        }
        setupOnce() {
            r = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    let e = (0, i.getOriginalFunction)(this) || this;
                    return r.apply(e, t)
                }
            } catch (t) {}
        }
    }
    a.__initStatic()
}