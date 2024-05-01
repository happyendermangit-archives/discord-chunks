function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("439849");

    function s(e, t) {
        let [n, s] = i.useState();
        return i.useEffect(() => {
            if (null == e || null != t) {
                s(void 0);
                return
            }(0, r.default)().then(t => {
                null != t && t.identifyGame(e, (e, t) => {
                    0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && s("data:image/png;base64,".concat(t.icon))
                })
            })
        }, [e, t]), null != t ? t : n
    }
}