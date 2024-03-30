function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079");

    function r(e, t) {
        let n = e.getBoundingClientRect();
        return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width))
    }

    function s(e) {
        let {
            ref: t,
            onDrag: n,
            onDragStart: s,
            onDragEnd: a
        } = e, [o, l] = i.useState(!1);
        return i.useEffect(() => {
            if (o) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", i), () => {
                window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", i)
            };

            function e() {
                null == a || a(), l(!1)
            }

            function i(e) {
                let i = t.current;
                null != i && (null == n || n(r(i, e)))
            }
        }, [t, o, a, n]), [o, i.useCallback(e => {
            e.preventDefault();
            let i = t.current;
            null != i && (l(!0), null == s || s(), null == n || n(r(i, e)))
        }, [t, s, n])]
    }
}