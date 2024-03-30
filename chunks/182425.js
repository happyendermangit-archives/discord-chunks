function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dataUriFileSize: function() {
            return S
        },
        dataUrlToBlob: function() {
            return A
        },
        dataUrlToFile: function() {
            return v
        },
        fit: function() {
            return d
        },
        getCoverRatio: function() {
            return p
        },
        getPalette: function() {
            return I
        },
        getPaletteForAvatar: function() {
            return h
        },
        getRatio: function() {
            return E
        },
        isPNGAnimated: function() {
            return b
        },
        makeCssUrlString: function() {
            return m
        },
        readFileAsBase64: function() {
            return T
        },
        zoomFit: function() {
            return _
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("950200"),
        s = n.n(u);

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function f(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function d(e) {
        var t = e.width,
            n = e.height,
            r = e.maxWidth,
            o = e.maxHeight,
            i = e.minWidth,
            a = void 0 === i ? 0 : i,
            u = e.minHeight,
            s = void 0 === u ? 0 : u;
        if (t !== r || n !== o) {
            var l = t > r ? r / t : 1;
            t = Math.max(Math.round(t * l), a);
            var c = (n = Math.max(Math.round(n * l), s)) > o ? o / n : 1;
            t = Math.max(Math.round(t * c), a), n = Math.max(Math.round(n * c), s)
        }
        return {
            width: t,
            height: n
        }
    }

    function _(e, t) {
        var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
        return d({
            width: e,
            height: t,
            maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
            maxHeight: n
        })
    }

    function E(e) {
        var t = e.width,
            n = e.height,
            r = e.maxWidth,
            o = e.maxHeight,
            i = 1;
        t > r && (i = r / t), t = Math.round(t * i);
        var a = 1;
        return (n = Math.round(n * i)) > o && (a = o / n), Math.min(i * a, 1)
    }

    function p(e) {
        var t = e.width,
            n = e.height,
            r = e.maxWidth,
            o = e.maxHeight;
        return t === n ? 1 : Math.min(Math.max(r / t, o / n), 1)
    }

    function m(e) {
        return null == e || "" === e ? "none" : "url(".concat(e, ")")
    }
    var y = [
        [0, 0, 0]
    ];

    function I(e, t, n) {
        var r = document.createElement("canvas"),
            o = r.getContext("2d");
        if (null == o) return y;
        var i = r.width = 0 === e.width ? 128 : e.width,
            a = r.height = 0 === e.height ? 128 : e.height;
        o.drawImage(e, 0, 0, i, a);
        var u = function(e, t, n) {
                for (var r = [], o, i, a, u, s, l = 0; l < t; l += n) i = e[(o = 4 * l) + 0], a = e[o + 1], u = e[o + 2], (void 0 === (s = e[o + 3]) || s >= 125) && !(i > 250 && a > 250 && u > 250) && r.push([i, a, u]);
                return r
            }(o.getImageData(0, 0, i, a).data, i * a, n),
            l = s()(u, t);
        return "boolean" == typeof l ? y : l.palette()
    }
    var h = function(e) {
            return "number" == typeof e ? null : O(e)
        },
        O = a().memoize(function(e) {
            return new Promise(function(t, n) {
                var r = new Image;
                r.crossOrigin = "Anonymous", r.onerror = function(e) {
                    n(e), r.onerror = r.onload = null, r = null
                }, r.onload = function() {
                    t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                }, r.src = e
            })
        });

    function T(e) {
        return new Promise(function(t, n) {
            var r = new FileReader;
            r.readAsDataURL(e), r.onload = function() {
                o()("string" == typeof r.result, "Result must be a string"), t(r.result)
            }, r.onerror = function(e) {
                return n(e)
            }
        })
    }

    function S(e) {
        var t = e.split(";base64,");
        return o()(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
    }

    function v(e, t, n) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = c(function(e, t, n) {
            var r;
            return f(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, A(e).arrayBuffer()];
                    case 1:
                        return r = o.sent(), [2, new File([r], t, {
                            type: n
                        })]
                }
            })
        })).apply(this, arguments)
    }

    function A(e) {
        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
        for (var t, n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
        return new Blob([r], {
            type: n
        })
    }

    function b(e) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = c(function(e) {
            var t, n, r;
            return f(this, function(o) {
                switch (o.label) {
                    case 0:
                        if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw Error("File is not a PNG");
                        return [4, e.text()];
                    case 1:
                        if ((r = (n = o.sent()).indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL")) return [2, !0];
                        return [2, !1]
                }
            })
        })).apply(this, arguments)
    }
}