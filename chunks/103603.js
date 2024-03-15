function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fit: function() {
            return u
        },
        zoomFit: function() {
            return d
        },
        getRatio: function() {
            return c
        },
        getCoverRatio: function() {
            return f
        },
        makeCssUrlString: function() {
            return _
        },
        getPalette: function() {
            return h
        },
        getPaletteForAvatar: function() {
            return g
        },
        readFileAsBase64: function() {
            return p
        },
        dataUriFileSize: function() {
            return S
        },
        dataUrlToFile: function() {
            return v
        },
        dataUrlToBlob: function() {
            return T
        },
        isPNGAnimated: function() {
            return I
        }
    }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
    var i = n("627445"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("48648"),
        l = n.n(o);

    function u(e) {
        let {
            width: t,
            height: n,
            maxWidth: i,
            maxHeight: s,
            minWidth: r = 0,
            minHeight: a = 0
        } = e;
        if (t !== i || n !== s) {
            let e = t > i ? i / t : 1;
            t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), a);
            let o = n > s ? s / n : 1;
            t = Math.max(Math.round(t * o), r), n = Math.max(Math.round(n * o), a)
        }
        return {
            width: t,
            height: n
        }
    }

    function d(e, t) {
        let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
            i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
        return u({
            width: e,
            height: t,
            maxWidth: i,
            maxHeight: n
        })
    }

    function c(e) {
        let {
            width: t,
            height: n,
            maxWidth: i,
            maxHeight: s
        } = e, r = 1;
        t > i && (r = i / t), t = Math.round(t * r);
        let a = 1;
        return (n = Math.round(n * r)) > s && (a = s / n), Math.min(r * a, 1)
    }

    function f(e) {
        let {
            width: t,
            height: n,
            maxWidth: i,
            maxHeight: s
        } = e;
        return t === n ? 1 : Math.min(Math.max(i / t, s / n), 1)
    }

    function _(e) {
        return null == e || "" === e ? "none" : "url(".concat(e, ")")
    }
    let E = [
        [0, 0, 0]
    ];

    function h(e, t, n) {
        let i = document.createElement("canvas"),
            s = i.getContext("2d");
        if (null == s) return E;
        let r = i.width = 0 === e.width ? 128 : e.width,
            a = i.height = 0 === e.height ? 128 : e.height;
        s.drawImage(e, 0, 0, r, a);
        let o = s.getImageData(0, 0, r, a).data,
            u = function(e, t, n) {
                let i = [];
                for (let s = 0, r, a, o, l, u; s < t; s += n) a = e[(r = 4 * s) + 0], o = e[r + 1], l = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(a > 250 && o > 250 && l > 250) && i.push([a, o, l]);
                return i
            }(o, r * a, n),
            d = l(u, t);
        return "boolean" == typeof d ? E : d.palette()
    }
    let g = e => "number" == typeof e ? null : m(e),
        m = a.memoize(e => new Promise((t, n) => {
            let i = new Image;
            i.crossOrigin = "Anonymous", i.onerror = e => {
                n(e), i.onerror = i.onload = null, i = null
            }, i.onload = () => {
                t(h(i, 5, 10)), i.onerror = i.onload = null, i = null
            }, i.src = e
        }));

    function p(e) {
        return new Promise((t, n) => {
            let i = new FileReader;
            i.readAsDataURL(e), i.onload = () => {
                s("string" == typeof i.result, "Result must be a string"), t(i.result)
            }, i.onerror = e => n(e)
        })
    }

    function S(e) {
        let t = e.split(";base64,");
        return s(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
    }
    async function v(e, t, n) {
        let i = T(e),
            s = await i.arrayBuffer();
        return new File([s], t, {
            type: n
        })
    }

    function T(e) {
        let t;
        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
        let n = e.split(",")[0].split(":")[1].split(";")[0],
            i = new Uint8Array(t.length);
        for (var s = 0; s < t.length; s++) i[s] = t.charCodeAt(s);
        return new Blob([i], {
            type: n
        })
    }
    async function I(e) {
        var t;
        let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
        if ("image/png" !== n) throw Error("File is not a PNG");
        let i = await e.text(),
            s = i.indexOf("IDAT");
        return !!(s > 0) && -1 !== i.substring(0, s).indexOf("acTL") || !1
    }
}