function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983"),
        r = n("884691");

    function o(e) {
        let {
            paddingFix: t = !0,
            orientation: n = "vertical",
            dir: o,
            className: s,
            scrollerRef: l,
            specs: a
        } = e, u = (0, r.useRef)(null);
        return (0, r.useLayoutEffect)(() => {
            var e;
            let {
                current: i
            } = l;
            if (null == i || "auto" === n || !t) return;
            let r = null === (e = i.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            if (null == r) return;
            i.style.paddingTop = "", i.style.paddingBottom = "", i.style.paddingLeft = "", i.style.paddingRight = "";
            let s = r.getComputedStyle(i);
            if ("vertical" === n) {
                if ("rtl" === o) {
                    let e = parseInt(s.getPropertyValue("padding-left"), 10);
                    i.style.paddingLeft = "".concat(Math.max(0, e - a.width), "px"), i.style.paddingRight = ""
                } else {
                    let e = parseInt(s.getPropertyValue("padding-right"), 10);
                    i.style.paddingRight = "".concat(Math.max(0, e - a.width), "px"), i.style.paddingLeft = ""
                }
                let {
                    current: e
                } = u;
                null != e && (e.style.height = s.getPropertyValue("padding-bottom"))
            } else {
                let e = parseInt(s.getPropertyValue("padding-bottom"), 10);
                i.style.paddingBottom = "".concat(Math.max(0, e - a.height), "px");
                let {
                    current: t
                } = u;
                null != t && (t.style.width = s.getPropertyValue("padding-left"))
            }
        }, [n, o, s, l, t, a]), (0, r.useMemo)(() => {
            var e;
            return "auto" !== n ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                style: {
                    position: "vertical" === (e = n) ? "absolute" : "relative",
                    pointerEvents: "none",
                    minHeight: "vertical" === e ? 0 : 1,
                    minWidth: "horizontal" === e ? 0 : 1,
                    flex: "0 0 auto"
                },
                ref: u
            }) : null
        }, [n])
    }
}