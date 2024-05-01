function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuImageUploadControl: function() {
            return o
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("952265"),
        a = n("813197");
    let o = r.forwardRef(function(e, t) {
        let o = r.useRef(null);
        return r.useImperativeHandle(t, () => ({
            focus: () => null,
            activate: () => {
                var e;
                return null === (e = o.current) || void 0 === e || e.activateUploadDialogue(), !1
            }
        }), []), (0, i.jsx)("div", {
            style: {
                position: "relative"
            },
            children: (0, i.jsx)(a.default, {
                ...e,
                ref: o,
                onChange: function(t, r) {
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await Promise.all([n.e("99387"), n.e("48017")]).then(n.bind(n, "850085"));
                        return n => (0, i.jsx)(s, {
                            imgURI: t,
                            file: r,
                            onCrop: e.onChange,
                            ...n
                        })
                    })
                }
            })
        })
    })
}