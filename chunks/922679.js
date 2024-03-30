function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuInteractiveCompositeControl: function() {
            return o
        }
    });
    var r = n("470079"),
        o = r.forwardRef(function(e, t) {
            var n = e.className,
                o = e.children,
                i = r.useRef(null),
                a = r.useRef(null);
            return r.useImperativeHandle(t, function() {
                return {
                    focus: function() {
                        var e, t = i.current;
                        null != t && (null == a.current && (a.current = t.querySelector('[tabindex="0"]')), null === (e = a.current) || void 0 === e || e.focus())
                    },
                    blur: function() {
                        var e;
                        return null === (e = a.current) || void 0 === e ? void 0 : e.blur()
                    },
                    activate: function() {
                        return !1
                    }
                }
            }, []), r.useLayoutEffect(function() {
                var e = function(e) {
                        a.current = e.target
                    },
                    t = i.current;
                if (null != t) return t.addEventListener("focusin", e),
                    function() {
                        t.removeEventListener("focusin", e)
                    }
            }, []), r.createElement("div", {
                ref: i,
                className: n,
                style: {
                    position: "relative"
                }
            }, o)
        })
}