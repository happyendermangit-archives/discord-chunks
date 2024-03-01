function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        dynamicRequire: function() {
            return s
        },
        isNodeEnv: function() {
            return a
        }
    });
    var r = n("149473");
    t = n.hmd(t);
    var i = n("390493");

    function a() {
        return !(0, r.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call(void 0 !== i ? i : 0)
    }

    function s(t, e) {
        return t.require(e)
    }
}