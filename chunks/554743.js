function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007");
    var i = n("884691");

    function l(e, t) {
        let n = e.getBoundingClientRect(),
            i = (t.clientX - n.left) / n.width;
        return Math.min(1, Math.max(0, i))
    }

    function a(e) {
        let {
            ref: t,
            onDrag: n,
            onDragStart: a,
            onDragEnd: s
        } = e, [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (r) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", i), () => {
                window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", i)
            };

            function e() {
                null == s || s(), o(!1)
            }

            function i(e) {
                let i = t.current;
                null != i && (null == n || n(l(i, e)))
            }
        }, [t, r, s, n]);
        let u = i.useCallback(e => {
            e.preventDefault();
            let i = t.current;
            null != i && (o(!0), null == a || a(), null == n || n(l(i, e)))
        }, [t, a, n]);
        return [r, u]
    }
}