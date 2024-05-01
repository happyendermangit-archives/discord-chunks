function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dataUriFileSize: function() {
            return A
        },
        dataUrlToBlob: function() {
            return N
        },
        dataUrlToFile: function() {
            return m
        },
        fit: function() {
            return u
        },
        getCoverRatio: function() {
            return c
        },
        getPalette: function() {
            return T
        },
        getPaletteForAvatar: function() {
            return f
        },
        getRatio: function() {
            return _
        },
        isPNGAnimated: function() {
            return p
        },
        makeCssUrlString: function() {
            return E
        },
        readFileAsBase64: function() {
            return h
        },
        zoomFit: function() {
            return d
        }
    }), n("653041"), n("642549"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("411104");
    var i = n("512722"),
        r = n.n(i),
        a = n("392711"),
        s = n.n(a),
        o = n("950200"),
        l = n.n(o);

    function u(e) {
        let {
            width: t,
            height: n,
            maxWidth: i,
            maxHeight: r,
            minWidth: a = 0,
            minHeight: s = 0
        } = e;
        if (t !== i || n !== r) {
            let e = t > i ? i / t : 1;
            t = Math.max(Math.round(t * e), a);
            let o = (n = Math.max(Math.round(n * e), s)) > r ? r / n : 1;
            t = Math.max(Math.round(t * o), a), n = Math.max(Math.round(n * o), s)
        }
        return {
            width: t,
            height: n
        }
    }

    function d(e, t) {
        let n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
        return u({
            width: e,
            height: t,
            maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
            maxHeight: n
        })
    }

    function _(e) {
        let {
            width: t,
            height: n,
            maxWidth: i,
            maxHeight: r
        } = e, a = 1;
        t > i && (a = i / t), t = Math.round(t * a);
        let s = 1;
        return (n = Math.round(n * a)) > r && (s = r / n), Math.min(a * s, 1)
    }

    function c(e) {
        let {
            width: t,
            height: n,
            maxWidth: i,
            maxHeight: r
        } = e;
        return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
    }

    function E(e) {
        return null == e || "" === e ? "none" : "url(".concat(e, ")")
    }
    let I = [
        [0, 0, 0]
    ];

    function T(e, t, n) {
        let i = document.createElement("canvas"),
            r = i.getContext("2d");
        if (null == r) return I;
        let a = i.width = 0 === e.width ? 128 : e.width,
            s = i.height = 0 === e.height ? 128 : e.height;
        r.drawImage(e, 0, 0, a, s);
        let o = function(e, t, n) {
                let i = [];
                for (let r = 0, a, s, o, l, u; r < t; r += n) s = e[(a = 4 * r) + 0], o = e[a + 1], l = e[a + 2], (void 0 === (u = e[a + 3]) || u >= 125) && !(s > 250 && o > 250 && l > 250) && i.push([s, o, l]);
                return i
            }(r.getImageData(0, 0, a, s).data, a * s, n),
            u = l()(o, t);
        return "boolean" == typeof u ? I : u.palette()
    }
    let f = e => "number" == typeof e ? null : S(e),
        S = s().memoize(e => new Promise((t, n) => {
            let i = new Image;
            i.crossOrigin = "Anonymous", i.onerror = e => {
                n(e), i.onerror = i.onload = null, i = null
            }, i.onload = () => {
                t(T(i, 5, 10)), i.onerror = i.onload = null, i = null
            }, i.src = e
        }));

    function h(e) {
        return new Promise((t, n) => {
            let i = new FileReader;
            i.readAsDataURL(e), i.onload = () => {
                r()("string" == typeof i.result, "Result must be a string"), t(i.result)
            }, i.onerror = e => n(e)
        })
    }

    function A(e) {
        let t = e.split(";base64,");
        return r()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
    }
    async function m(e, t, n) {
        let i = N(e),
            r = await i.arrayBuffer();
        return new File([r], t, {
            type: n
        })
    }

    function N(e) {
        let t;
        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
        let n = e.split(",")[0].split(":")[1].split(";")[0],
            i = new Uint8Array(t.length);
        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
        return new Blob([i], {
            type: n
        })
    }
    async function p(e) {
        var t;
        if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw Error("File is not a PNG");
        let n = await e.text(),
            i = n.indexOf("IDAT");
        return !!(i > 0) && -1 !== n.substring(0, i).indexOf("acTL") || !1
    }
}