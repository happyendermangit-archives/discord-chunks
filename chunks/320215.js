function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        let r, i;
        for (let a of e.fields) {
            let e = a.localName;
            if (a.oneof) {
                let o = n[a.oneof];
                if ((null == o ? void 0 : o.oneofKind) == void 0) continue;
                if (r = o[e], (i = t[a.oneof]).oneofKind = o.oneofKind, void 0 == r) {
                    delete i[e];
                    continue
                }
            } else if (r = n[e], i = t, void 0 == r) continue;
            switch (a.repeat && (i[e].length = r.length), a.kind) {
                case "scalar":
                case "enum":
                    if (a.repeat)
                        for (let t = 0; t < r.length; t++) i[e][t] = r[t];
                    else i[e] = r;
                    break;
                case "message":
                    let o = a.T();
                    if (a.repeat)
                        for (let t = 0; t < r.length; t++) i[e][t] = o.create(r[t]);
                    else void 0 === i[e] ? i[e] = o.create(r) : o.mergePartial(i[e], r);
                    break;
                case "map":
                    switch (a.V.kind) {
                        case "scalar":
                        case "enum":
                            Object.assign(i[e], r);
                            break;
                        case "message":
                            let s = a.V.T();
                            for (let t of Object.keys(r)) i[e][t] = s.create(r[t])
                    }
            }
        }
    }
    n.r(t), n.d(t, {
        reflectionMergePartial: function() {
            return r
        }
    })
}