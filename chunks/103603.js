function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        fit: function() {
            return I
        },
        zoomFit: function() {
            return s
        },
        getRatio: function() {
            return T
        },
        getCoverRatio: function() {
            return S
        },
        makeCssUrlString: function() {
            return N
        },
        getPalette: function() {
            return A
        },
        getPaletteForAvatar: function() {
            return R
        },
        readFileAsBase64: function() {
            return u
        },
        dataUriFileSize: function() {
            return L
        },
        dataUrlToFile: function() {
            return C
        },
        dataUrlToBlob: function() {
            return D
        },
        isPNGAnimated: function() {
            return c
        }
    }), E("424973"), E("101997"), E("311790"), E("477657"), E("811875"), E("90301"), E("652153"), E("28797"), E("817884"), E("597349"), E("667536"), E("690341"), E("70102");
    var t = E("627445"),
        o = E.n(t),
        n = E("917351"),
        r = E.n(n),
        i = E("48648"),
        a = E.n(i);

    function I(e) {
        let {
            width: _,
            height: E,
            maxWidth: t,
            maxHeight: o,
            minWidth: n = 0,
            minHeight: r = 0
        } = e;
        if (_ !== t || E !== o) {
            let e = _ > t ? t / _ : 1;
            _ = Math.max(Math.round(_ * e), n), E = Math.max(Math.round(E * e), r);
            let i = E > o ? o / E : 1;
            _ = Math.max(Math.round(_ * i), n), E = Math.max(Math.round(E * i), r)
        }
        return {
            width: _,
            height: E
        }
    }

    function s(e, _) {
        let E = Math.min(Math.round(.65 * window.innerHeight), 2e3),
            t = Math.min(Math.round(.75 * window.innerWidth), 2e3);
        return I({
            width: e,
            height: _,
            maxWidth: t,
            maxHeight: E
        })
    }

    function T(e) {
        let {
            width: _,
            height: E,
            maxWidth: t,
            maxHeight: o
        } = e, n = 1;
        _ > t && (n = t / _), _ = Math.round(_ * n);
        let r = 1;
        return (E = Math.round(E * n)) > o && (r = o / E), Math.min(n * r, 1)
    }

    function S(e) {
        let {
            width: _,
            height: E,
            maxWidth: t,
            maxHeight: o
        } = e;
        return _ === E ? 1 : Math.min(Math.max(t / _, o / E), 1)
    }

    function N(e) {
        return null == e || "" === e ? "none" : "url(".concat(e, ")")
    }
    let O = [
        [0, 0, 0]
    ];

    function A(e, _, E) {
        let t = document.createElement("canvas"),
            o = t.getContext("2d");
        if (null == o) return O;
        let n = t.width = 0 === e.width ? 128 : e.width,
            r = t.height = 0 === e.height ? 128 : e.height;
        o.drawImage(e, 0, 0, n, r);
        let i = o.getImageData(0, 0, n, r).data,
            I = function(e, _, E) {
                let t = [];
                for (let o = 0, n, r, i, a, I; o < _; o += E) r = e[(n = 4 * o) + 0], i = e[n + 1], a = e[n + 2], (void 0 === (I = e[n + 3]) || I >= 125) && !(r > 250 && i > 250 && a > 250) && t.push([r, i, a]);
                return t
            }(i, n * r, E),
            s = a(I, _);
        return "boolean" == typeof s ? O : s.palette()
    }
    let R = e => "number" == typeof e ? null : l(e),
        l = r.memoize(e => new Promise((_, E) => {
            let t = new Image;
            t.crossOrigin = "Anonymous", t.onerror = e => {
                E(e), t.onerror = t.onload = null, t = null
            }, t.onload = () => {
                _(A(t, 5, 10)), t.onerror = t.onload = null, t = null
            }, t.src = e
        }));

    function u(e) {
        return new Promise((_, E) => {
            let t = new FileReader;
            t.readAsDataURL(e), t.onload = () => {
                o("string" == typeof t.result, "Result must be a string"), _(t.result)
            }, t.onerror = e => E(e)
        })
    }

    function L(e) {
        let _ = e.split(";base64,");
        return o(2 === _.length, "Input data is not a valid image."), atob(_[1]).length
    }
    async function C(e, _, E) {
        let t = D(e),
            o = await t.arrayBuffer();
        return new File([o], _, {
            type: E
        })
    }

    function D(e) {
        let _;
        _ = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
        let E = e.split(",")[0].split(":")[1].split(";")[0],
            t = new Uint8Array(_.length);
        for (var o = 0; o < _.length; o++) t[o] = _.charCodeAt(o);
        return new Blob([t], {
            type: E
        })
    }
    async function c(e) {
        var _;
        let E = null === (_ = e.type) || void 0 === _ ? void 0 : _.split(";")[0];
        if ("image/png" !== E) throw Error("File is not a PNG");
        let t = await e.text(),
            o = t.indexOf("IDAT");
        return !!(o > 0) && -1 !== t.substring(0, o).indexOf("acTL") || !1
    }
}