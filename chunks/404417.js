function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuImageUploadControl: function() {
            return o
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("551042"),
        a = n("694187");
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
                        } = await n.el("57015").then(n.bind(n, "57015"));
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