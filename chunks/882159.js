function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isElement: function() {
            return i
        },
        isHTMLElement: function() {
            return a
        },
        isShadowRoot: function() {
            return o
        }
    });
    var r = n("49691");

    function i(e) {
        var t = (0, r.default)(e).Element;
        return e instanceof t || e instanceof Element
    }

    function a(e) {
        var t = (0, r.default)(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement
    }

    function o(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = (0, r.default)(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot
    }
}