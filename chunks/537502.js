function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        base64decode: function() {
            return o
        },
        base64encode: function() {
            return i
        }
    }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
    let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        a = [];
    for (let e = 0; e < r.length; e++) a[r[e].charCodeAt(0)] = e;

    function o(e) {
        let t = 3 * e.length / 4;
        "=" == e[e.length - 2] ? t -= 2 : "=" == e[e.length - 1] && (t -= 1);
        let n = new Uint8Array(t),
            r = 0,
            o = 0,
            i, s = 0;
        for (let t = 0; t < e.length; t++) {
            if (void 0 === (i = a[e.charCodeAt(t)])) switch (e[t]) {
                case "=":
                    o = 0;
                case "\n":
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
            }
            switch (o) {
                case 0:
                    s = i, o = 1;
                    break;
                case 1:
                    n[r++] = s << 2 | (48 & i) >> 4, s = i, o = 2;
                    break;
                case 2:
                    n[r++] = (15 & s) << 4 | (60 & i) >> 2, s = i, o = 3;
                    break;
                case 3:
                    n[r++] = (3 & s) << 6 | i, o = 0
            }
        }
        if (1 == o) throw Error("invalid base64 string.");
        return n.subarray(0, r)
    }

    function i(e) {
        let t = "",
            n = 0,
            a, o = 0;
        for (let i = 0; i < e.length; i++) switch (a = e[i], n) {
            case 0:
                t += r[a >> 2], o = (3 & a) << 4, n = 1;
                break;
            case 1:
                t += r[o | a >> 4], o = (15 & a) << 2, n = 2;
                break;
            case 2:
                t += r[o | a >> 6] + r[63 & a], n = 0
        }
        return n && (t += r[o] + "=", 1 == n && (t += "=")), t
    }
    a["-".charCodeAt(0)] = r.indexOf("+"), a["_".charCodeAt(0)] = r.indexOf("/")
}