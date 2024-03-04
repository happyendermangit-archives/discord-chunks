function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusBlock: function() {
            return a
        },
        FocusBlock: function() {
            return o
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691");
    let r = 0;

    function a(e, t) {
        let [n] = s.useState(() => r++), i = "".concat("data-focus-blocked", "-").concat(n);
        s.useLayoutEffect(() => {
            if (t) {
                let t = e.current;
                if (null != t) {
                    var n;
                    let e = (n = t, document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: e => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        })),
                        s = e.currentNode;
                    for (; null !== s;) {
                        let t = s,
                            n = t.tabIndex;
                        t.tabIndex = -1, t.setAttribute(i, String(n)), s = e.nextNode()
                    }
                    return () => {
                        t.querySelectorAll("[".concat(i, "]")).forEach(e => {
                            let t = e.getAttribute(i);
                            if (null != t) {
                                let n = parseInt(t, 10);
                                e.tabIndex = n
                            }
                        })
                    }
                }
            }
        }, [t])
    }

    function o(e) {
        let {
            children: t,
            className: n,
            enabled: r = !0
        } = e, o = s.useRef(null);
        return a(o, r), (0, i.jsx)("div", {
            ref: o,
            className: n,
            children: t
        })
    }
}