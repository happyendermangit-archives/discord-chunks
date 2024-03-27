function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reflectionCreate: function() {
            return a
        }
    });
    var r = n("436759"),
        i = n("240773");

    function a(e) {
        let t = {};
        for (let n of (Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: e
            }), e.fields)) {
            let e = n.localName;
            if (!n.opt) {
                if (n.oneof) t[n.oneof] = {
                    oneofKind: void 0
                };
                else if (n.repeat) t[e] = [];
                else switch (n.kind) {
                    case "scalar":
                        t[e] = (0, r.reflectionScalarDefault)(n.T, n.L);
                        break;
                    case "enum":
                        t[e] = 0;
                        break;
                    case "map":
                        t[e] = {}
                }
            }
        }
        return t
    }
}