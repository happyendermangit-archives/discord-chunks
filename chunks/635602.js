function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        dynamicRequire: function() {
            return o
        },
        isNodeEnv: function() {
            return a
        }
    });
    var r = n("776914");
    t = n.hmd(t);
    var i = n("444675");

    function a() {
        return !(0, r.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call(void 0 !== i ? i : 0)
    }

    function o(t, e) {
        return t.require(e)
    }
}