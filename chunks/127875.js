function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("884691"),
        l = n("371621"),
        a = n("385887");

    function s(e, t, n) {
        i.useEffect(() => {
            let i = l.ReactEditor.findDocumentOrShadowRoot(e),
                s = i.defaultView;
            if ((null == s ? void 0 : s.ResizeObserver) == null) return;
            let r = a.EditorUtils.toDOMNode(e, e),
                o = r.offsetHeight,
                u = new s.ResizeObserver(() => {
                    let i = a.EditorUtils.toDOMNode(e, e).offsetHeight;
                    o !== i && (null != t.current && (t.current.style.height = "".concat(i, "px")), o = i, null == n || n(i))
                });
            return u.observe(r), () => u.disconnect()
        }, [t, e, n])
    }
}