function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007");
    var i = n("884691"),
        l = n("760850");

    function a(e, t) {
        let [n, a] = i.useState();
        return i.useEffect(() => {
            if (null == e || null != t) {
                a(void 0);
                return
            }(0, l.default)().then(t => {
                null != t && t.identifyGame(e, (e, t) => {
                    0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && a("data:image/png;base64,".concat(t.icon))
                })
            })
        }, [e, t]), null != t ? t : n
    }
}