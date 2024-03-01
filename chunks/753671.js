function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isElement: function() {
            return a
        },
        isHTMLElement: function() {
            return o
        },
        isShadowRoot: function() {
            return i
        }
    });
    var r = n("320959");

    function a(e) {
        var t = (0, r.default)(e).Element;
        return e instanceof t || e instanceof Element
    }

    function o(e) {
        var t = (0, r.default)(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement
    }

    function i(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = (0, r.default)(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot
    }
}