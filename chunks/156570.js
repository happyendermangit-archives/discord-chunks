function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("136035"),
        i = n("714196");

    function a(e, t, n) {
        r.useEffect(function() {
            var r = o.ReactEditor.findDocumentOrShadowRoot(e).defaultView;
            if ((null == r ? void 0 : r.ResizeObserver) != null) {
                var a = i.EditorUtils.toDOMNode(e, e),
                    u = a.offsetHeight,
                    s = new r.ResizeObserver(function() {
                        var r = i.EditorUtils.toDOMNode(e, e).offsetHeight;
                        u !== r && (null != t.current && (t.current.style.height = "".concat(r, "px")), u = r, null == n || n(r))
                    });
                return s.observe(a),
                    function() {
                        return s.disconnect()
                    }
            }
        }, [t, e, n])
    }
}