function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("207470"),
        a = n("887490");

    function s(e, t, n) {
        i.useEffect(() => {
            let i = r.ReactEditor.findDocumentOrShadowRoot(e).defaultView;
            if ((null == i ? void 0 : i.ResizeObserver) == null) return;
            let s = a.EditorUtils.toDOMNode(e, e),
                o = s.offsetHeight,
                l = new i.ResizeObserver(() => {
                    let i = a.EditorUtils.toDOMNode(e, e).offsetHeight;
                    o !== i && (null != t.current && (t.current.style.height = "".concat(i, "px")), o = i, null == n || n(i))
                });
            return l.observe(s), () => l.disconnect()
        }, [t, e, n])
    }
}