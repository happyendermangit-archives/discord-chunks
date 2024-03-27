function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isElement: function() {
            return a
        },
        isHidden: function() {
            return i
        },
        isReplacedElement: function() {
            return o
        },
        isSVG: function() {
            return r
        }
    });
    var r = function(e) {
            return e instanceof SVGElement && "getBBox" in e
        },
        i = function(e) {
            if (r(e)) {
                var t = e.getBBox(),
                    n = t.width,
                    i = t.height;
                return !n && !i
            }
            var a = e.offsetWidth,
                o = e.offsetHeight;
            return !(a || o || e.getClientRects().length)
        },
        a = function(e) {
            if (e instanceof Element) return !0;
            var t, n = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
            return !!(n && e instanceof n.Element)
        },
        o = function(e) {
            switch (e.tagName) {
                case "INPUT":
                    if ("image" !== e.type) break;
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "OBJECT":
                case "CANVAS":
                case "IFRAME":
                case "IMG":
                    return !0
            }
            return !1
        }
}