function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n.n(r);

    function i(e) {
        var t = e.paddingFix,
            n = void 0 === t || t,
            i = e.orientation,
            a = void 0 === i ? "vertical" : i,
            u = e.dir,
            s = e.className,
            l = e.scrollerRef,
            c = e.specs,
            f = (0, r.useRef)(null);
        return (0, r.useLayoutEffect)(function() {
            var e, t = l.current;
            if (null != t && "auto" !== a && !!n) {
                var r = null === (e = t.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
                if (null != r) {
                    t.style.paddingTop = "", t.style.paddingBottom = "", t.style.paddingLeft = "", t.style.paddingRight = "";
                    var o = r.getComputedStyle(t);
                    if ("vertical" === a) {
                        if ("rtl" === u) {
                            var i = parseInt(o.getPropertyValue("padding-left"), 10);
                            t.style.paddingLeft = "".concat(Math.max(0, i - c.width), "px"), t.style.paddingRight = ""
                        } else {
                            var s = parseInt(o.getPropertyValue("padding-right"), 10);
                            t.style.paddingRight = "".concat(Math.max(0, s - c.width), "px"), t.style.paddingLeft = ""
                        }
                        var d = f.current;
                        null != d && (d.style.height = o.getPropertyValue("padding-bottom"))
                    } else {
                        var _ = parseInt(o.getPropertyValue("padding-bottom"), 10);
                        t.style.paddingBottom = "".concat(Math.max(0, _ - c.height), "px");
                        var E = f.current;
                        null != E && (E.style.width = o.getPropertyValue("padding-left"))
                    }
                }
            }
        }, [a, u, s, l, n, c]), (0, r.useMemo)(function() {
            var e;
            return "auto" !== a ? o().createElement("div", {
                "aria-hidden": !0,
                style: {
                    position: "vertical" === (e = a) ? "absolute" : "relative",
                    pointerEvents: "none",
                    minHeight: "vertical" === e ? 0 : 1,
                    minWidth: "horizontal" === e ? 0 : 1,
                    flex: "0 0 auto"
                },
                ref: f
            }) : null
        }, [a])
    }
}