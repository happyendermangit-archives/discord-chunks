function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        isSVG: function() {
            return r
        },
        isHidden: function() {
            return i
        },
        isElement: function() {
            return o
        },
        isReplacedElement: function() {
            return a
        }
    });
    var r = function(t) {
            return t instanceof SVGElement && "getBBox" in t
        },
        i = function(t) {
            if (r(t)) {
                var e = t.getBBox(),
                    n = e.width,
                    i = e.height;
                return !n && !i
            }
            var o = t.offsetWidth,
                a = t.offsetHeight;
            return !(o || a || t.getClientRects().length)
        },
        o = function(t) {
            var e, n = null === (e = null == t ? void 0 : t.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            return !!(n && t instanceof n.Element)
        },
        a = function(t) {
            switch (t.tagName) {
                case "INPUT":
                    if ("image" !== t.type) break;
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