function(e, t, n) {
    "use strict";
    var r = n("863714"),
        i = n("635535"),
        a, o = {},
        s = function() {
            var e = {};
            try {
                return Object.defineProperty(e, "a", {}), "a" in e
            } catch (e) {
                return !1
            }
        }(),
        u = !s && !Object.prototype.__defineGetter__,
        c = Object.prototype.hasOwnProperty,
        l = s ? Object.defineProperty : function(e, t, n) {
            "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!c.call(e, t) || "value" in n) && (e[t] = n.value)
        },
        d = Array.prototype.indexOf || function(e) {
            if (!this.length) return -1;
            for (var t = arguments[1] || 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        f = Object.create || function(e, t) {
            var n;

            function r() {}
            for (var i in r.prototype = e, n = new r, t) c.call(t, i) && l(n, i, t[i]);
            return n
        },
        p = Array.prototype.slice,
        h = Array.prototype.concat,
        m = Array.prototype.push,
        g = Array.prototype.join,
        _ = Array.prototype.shift,
        b = (Array.prototype.unshift, Function.prototype.bind || function(e) {
            var t = this,
                n = p.call(arguments, 1);
            return 1 === t.length ? function(r) {
                return t.apply(e, h.call(n, p.call(arguments)))
            } : function() {
                return t.apply(e, h.call(n, p.call(arguments)))
            }
        }),
        v = f(null),
        y = Math.random(),
        E = f(null, {
            narrow: {},
            short: {},
            long: {}
        }),
        S = !1,
        x = !1,
        w = /^[A-Z]{3}$/,
        T = /-u(?:-[0-9a-z]{2,8})+/gi,
        C = {
            tags: {
                "art-lojban": "jbo",
                "i-ami": "ami",
                "i-bnn": "bnn",
                "i-hak": "hak",
                "i-klingon": "tlh",
                "i-lux": "lb",
                "i-navajo": "nv",
                "i-pwn": "pwn",
                "i-tao": "tao",
                "i-tay": "tay",
                "i-tsu": "tsu",
                "no-bok": "nb",
                "no-nyn": "nn",
                "sgn-BE-FR": "sfb",
                "sgn-BE-NL": "vgt",
                "sgn-CH-DE": "sgg",
                "zh-guoyu": "cmn",
                "zh-hakka": "hak",
                "zh-min-nan": "nan",
                "zh-xiang": "hsn",
                "sgn-BR": "bzs",
                "sgn-CO": "csn",
                "sgn-DE": "gsg",
                "sgn-DK": "dsl",
                "sgn-ES": "ssp",
                "sgn-FR": "fsl",
                "sgn-GB": "bfi",
                "sgn-GR": "gss",
                "sgn-IE": "isg",
                "sgn-IT": "ise",
                "sgn-JP": "jsl",
                "sgn-MX": "mfs",
                "sgn-NI": "ncs",
                "sgn-NL": "dse",
                "sgn-NO": "nsl",
                "sgn-PT": "psr",
                "sgn-SE": "swl",
                "sgn-US": "ase",
                "sgn-ZA": "sfs",
                "zh-cmn": "cmn",
                "zh-cmn-Hans": "cmn-Hans",
                "zh-cmn-Hant": "cmn-Hant",
                "zh-gan": "gan",
                "zh-wuu": "wuu",
                "zh-yue": "yue"
            },
            subtags: {
                BU: "MM",
                DD: "DE",
                FX: "FR",
                TP: "TL",
                YD: "YE",
                ZR: "CD",
                heploc: "alalc97",
                in: "id",
                iw: "he",
                ji: "yi",
                jw: "jv",
                mo: "ro",
                ayx: "nun",
                bjd: "drl",
                ccq: "rki",
                cjr: "mom",
                cka: "cmr",
                cmk: "xch",
                drh: "khk",
                drw: "prs",
                gav: "dev",
                hrr: "jal",
                ibi: "opa",
                kgh: "kml",
                lcq: "ppr",
                mst: "mry",
                myt: "mry",
                sca: "hle",
                tie: "ras",
                tkk: "twm",
                tlw: "weo",
                tnf: "prs",
                ybd: "rki",
                yma: "lrr"
            },
            extLang: {
                aao: ["aao", "ar"],
                abh: ["abh", "ar"],
                abv: ["abv", "ar"],
                acm: ["acm", "ar"],
                acq: ["acq", "ar"],
                acw: ["acw", "ar"],
                acx: ["acx", "ar"],
                acy: ["acy", "ar"],
                adf: ["adf", "ar"],
                ads: ["ads", "sgn"],
                aeb: ["aeb", "ar"],
                aec: ["aec", "ar"],
                aed: ["aed", "sgn"],
                aen: ["aen", "sgn"],
                afb: ["afb", "ar"],
                afg: ["afg", "sgn"],
                ajp: ["ajp", "ar"],
                apc: ["apc", "ar"],
                apd: ["apd", "ar"],
                arb: ["arb", "ar"],
                arq: ["arq", "ar"],
                ars: ["ars", "ar"],
                ary: ["ary", "ar"],
                arz: ["arz", "ar"],
                ase: ["ase", "sgn"],
                asf: ["asf", "sgn"],
                asp: ["asp", "sgn"],
                asq: ["asq", "sgn"],
                asw: ["asw", "sgn"],
                auz: ["auz", "ar"],
                avl: ["avl", "ar"],
                ayh: ["ayh", "ar"],
                ayl: ["ayl", "ar"],
                ayn: ["ayn", "ar"],
                ayp: ["ayp", "ar"],
                bbz: ["bbz", "ar"],
                bfi: ["bfi", "sgn"],
                bfk: ["bfk", "sgn"],
                bjn: ["bjn", "ms"],
                bog: ["bog", "sgn"],
                bqn: ["bqn", "sgn"],
                bqy: ["bqy", "sgn"],
                btj: ["btj", "ms"],
                bve: ["bve", "ms"],
                bvl: ["bvl", "sgn"],
                bvu: ["bvu", "ms"],
                bzs: ["bzs", "sgn"],
                cdo: ["cdo", "zh"],
                cds: ["cds", "sgn"],
                cjy: ["cjy", "zh"],
                cmn: ["cmn", "zh"],
                coa: ["coa", "ms"],
                cpx: ["cpx", "zh"],
                csc: ["csc", "sgn"],
                csd: ["csd", "sgn"],
                cse: ["cse", "sgn"],
                csf: ["csf", "sgn"],
                csg: ["csg", "sgn"],
                csl: ["csl", "sgn"],
                csn: ["csn", "sgn"],
                csq: ["csq", "sgn"],
                csr: ["csr", "sgn"],
                czh: ["czh", "zh"],
                czo: ["czo", "zh"],
                doq: ["doq", "sgn"],
                dse: ["dse", "sgn"],
                dsl: ["dsl", "sgn"],
                dup: ["dup", "ms"],
                ecs: ["ecs", "sgn"],
                esl: ["esl", "sgn"],
                esn: ["esn", "sgn"],
                eso: ["eso", "sgn"],
                eth: ["eth", "sgn"],
                fcs: ["fcs", "sgn"],
                fse: ["fse", "sgn"],
                fsl: ["fsl", "sgn"],
                fss: ["fss", "sgn"],
                gan: ["gan", "zh"],
                gds: ["gds", "sgn"],
                gom: ["gom", "kok"],
                gse: ["gse", "sgn"],
                gsg: ["gsg", "sgn"],
                gsm: ["gsm", "sgn"],
                gss: ["gss", "sgn"],
                gus: ["gus", "sgn"],
                hab: ["hab", "sgn"],
                haf: ["haf", "sgn"],
                hak: ["hak", "zh"],
                hds: ["hds", "sgn"],
                hji: ["hji", "ms"],
                hks: ["hks", "sgn"],
                hos: ["hos", "sgn"],
                hps: ["hps", "sgn"],
                hsh: ["hsh", "sgn"],
                hsl: ["hsl", "sgn"],
                hsn: ["hsn", "zh"],
                icl: ["icl", "sgn"],
                ils: ["ils", "sgn"],
                inl: ["inl", "sgn"],
                ins: ["ins", "sgn"],
                ise: ["ise", "sgn"],
                isg: ["isg", "sgn"],
                isr: ["isr", "sgn"],
                jak: ["jak", "ms"],
                jax: ["jax", "ms"],
                jcs: ["jcs", "sgn"],
                jhs: ["jhs", "sgn"],
                jls: ["jls", "sgn"],
                jos: ["jos", "sgn"],
                jsl: ["jsl", "sgn"],
                jus: ["jus", "sgn"],
                kgi: ["kgi", "sgn"],
                knn: ["knn", "kok"],
                kvb: ["kvb", "ms"],
                kvk: ["kvk", "sgn"],
                kvr: ["kvr", "ms"],
                kxd: ["kxd", "ms"],
                lbs: ["lbs", "sgn"],
                lce: ["lce", "ms"],
                lcf: ["lcf", "ms"],
                liw: ["liw", "ms"],
                lls: ["lls", "sgn"],
                lsg: ["lsg", "sgn"],
                lsl: ["lsl", "sgn"],
                lso: ["lso", "sgn"],
                lsp: ["lsp", "sgn"],
                lst: ["lst", "sgn"],
                lsy: ["lsy", "sgn"],
                ltg: ["ltg", "lv"],
                lvs: ["lvs", "lv"],
                lzh: ["lzh", "zh"],
                max: ["max", "ms"],
                mdl: ["mdl", "sgn"],
                meo: ["meo", "ms"],
                mfa: ["mfa", "ms"],
                mfb: ["mfb", "ms"],
                mfs: ["mfs", "sgn"],
                min: ["min", "ms"],
                mnp: ["mnp", "zh"],
                mqg: ["mqg", "ms"],
                mre: ["mre", "sgn"],
                msd: ["msd", "sgn"],
                msi: ["msi", "ms"],
                msr: ["msr", "sgn"],
                mui: ["mui", "ms"],
                mzc: ["mzc", "sgn"],
                mzg: ["mzg", "sgn"],
                mzy: ["mzy", "sgn"],
                nan: ["nan", "zh"],
                nbs: ["nbs", "sgn"],
                ncs: ["ncs", "sgn"],
                nsi: ["nsi", "sgn"],
                nsl: ["nsl", "sgn"],
                nsp: ["nsp", "sgn"],
                nsr: ["nsr", "sgn"],
                nzs: ["nzs", "sgn"],
                okl: ["okl", "sgn"],
                orn: ["orn", "ms"],
                ors: ["ors", "ms"],
                pel: ["pel", "ms"],
                pga: ["pga", "ar"],
                pks: ["pks", "sgn"],
                prl: ["prl", "sgn"],
                prz: ["prz", "sgn"],
                psc: ["psc", "sgn"],
                psd: ["psd", "sgn"],
                pse: ["pse", "ms"],
                psg: ["psg", "sgn"],
                psl: ["psl", "sgn"],
                pso: ["pso", "sgn"],
                psp: ["psp", "sgn"],
                psr: ["psr", "sgn"],
                pys: ["pys", "sgn"],
                rms: ["rms", "sgn"],
                rsi: ["rsi", "sgn"],
                rsl: ["rsl", "sgn"],
                sdl: ["sdl", "sgn"],
                sfb: ["sfb", "sgn"],
                sfs: ["sfs", "sgn"],
                sgg: ["sgg", "sgn"],
                sgx: ["sgx", "sgn"],
                shu: ["shu", "ar"],
                slf: ["slf", "sgn"],
                sls: ["sls", "sgn"],
                sqk: ["sqk", "sgn"],
                sqs: ["sqs", "sgn"],
                ssh: ["ssh", "ar"],
                ssp: ["ssp", "sgn"],
                ssr: ["ssr", "sgn"],
                svk: ["svk", "sgn"],
                swc: ["swc", "sw"],
                swh: ["swh", "sw"],
                swl: ["swl", "sgn"],
                syy: ["syy", "sgn"],
                tmw: ["tmw", "ms"],
                tse: ["tse", "sgn"],
                tsm: ["tsm", "sgn"],
                tsq: ["tsq", "sgn"],
                tss: ["tss", "sgn"],
                tsy: ["tsy", "sgn"],
                tza: ["tza", "sgn"],
                ugn: ["ugn", "sgn"],
                ugy: ["ugy", "sgn"],
                ukl: ["ukl", "sgn"],
                uks: ["uks", "sgn"],
                urk: ["urk", "ms"],
                uzn: ["uzn", "uz"],
                uzs: ["uzs", "uz"],
                vgt: ["vgt", "sgn"],
                vkk: ["vkk", "ms"],
                vkt: ["vkt", "ms"],
                vsi: ["vsi", "sgn"],
                vsl: ["vsl", "sgn"],
                vsv: ["vsv", "sgn"],
                wuu: ["wuu", "zh"],
                xki: ["xki", "sgn"],
                xml: ["xml", "sgn"],
                xmm: ["xmm", "ms"],
                xms: ["xms", "sgn"],
                yds: ["yds", "sgn"],
                ysl: ["ysl", "sgn"],
                yue: ["yue", "zh"],
                zib: ["zib", "sgn"],
                zlm: ["zlm", "ms"],
                zmi: ["zmi", "ms"],
                zsl: ["zsl", "sgn"],
                zsm: ["zsm", "ms"]
            }
        },
        D = {
            BHD: 3,
            BYR: 0,
            XOF: 0,
            BIF: 0,
            XAF: 0,
            CLF: 4,
            CLP: 0,
            KMF: 0,
            DJF: 0,
            XPF: 0,
            GNF: 0,
            ISK: 0,
            IQD: 3,
            JPY: 0,
            JOD: 3,
            KRW: 0,
            KWD: 3,
            LYD: 3,
            OMR: 3,
            PYG: 0,
            RWF: 0,
            TND: 3,
            UGX: 0,
            UYI: 0,
            VUV: 0,
            VND: 0
        };

    function O(e) {
        return !(!r.expBCP47Syntax.test(e) || r.expVariantDupes.test(e) || r.expSingletonDupes.test(e)) && !0
    }

    function M(e) {
        if (void 0 === e) return new X;
        for (var t = new X, e = "string" == typeof e ? [e] : e, n = et(e), i = n.length, a = 0; a < i;) {
            var o = String(a);
            if (o in n) {
                var s = n[o];
                if (null == s || "string" != typeof s && "object" != typeof s) throw TypeError("String or Object type expected");
                var u = String(s);
                if (!O(u)) throw RangeError("'" + u + "' is not a structurally valid language tag");
                u = function(e) {
                    var t, n;
                    n = (e = e.toLowerCase()).split("-");
                    for (var i = 1, a = n.length; i < a; i++)
                        if (2 === n[i].length) n[i] = n[i].toUpperCase();
                        else if (4 === n[i].length) n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
                    else if (1 === n[i].length && "x" !== n[i]) break;
                    (t = (e = g.call(n, "-")).match(r.expExtSequences)) && t.length > 1 && (t.sort(), e = e.replace(RegExp("(?:" + r.expExtSequences.source + ")+", "i"), g.call(t, ""))), c.call(C.tags, e) && (e = C.tags[e]), n = e.split("-");
                    for (var i = 1, a = n.length; i < a; i++) c.call(C.subtags, n[i]) ? n[i] = C.subtags[n[i]] : c.call(C.extLang, n[i]) && (n[i] = C.extLang[n[i]][0], 1 === i && C.extLang[n[1]][1] === n[0] && (n = p.call(n, i++), a -= 1));
                    return g.call(n, "-")
                }(u), -1 === d.call(t, u) && m.call(t, u)
            }
            a++
        }
        return t
    }

    function A(e, t) {
        for (var n = t;;) {
            if (d.call(e, n) > -1) return n;
            var r = n.lastIndexOf("-");
            if (r < 0) return;
            r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), n = n.substring(0, r)
        }
    }

    function k(e, t) {
        for (var n, r = 0, i = t.length; r < i && !n;) {
            var o = t[r],
                s = String(o).replace(T, ""),
                n = A(e, s);
            r++
        }
        var u = new Z;
        if (void 0 !== n) {
            if (u["[[locale]]"] = n, String(o) !== String(s)) {
                var c = o.match(T)[0],
                    l = o.indexOf("-u-");
                u["[[extension]]"] = c, u["[[extensionIndex]]"] = l
            }
        } else u["[[locale]]"] = a;
        return u
    }

    function R(e, t, n, r, i) {
        if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
        if ("lookup" === n["[[localeMatcher]]"]) var a = k(e, t);
        else var a = k(e, t);
        var o = a["[[locale]]"];
        if (c.call(a, "[[extension]]")) var s = a["[[extension]]"],
            u = a["[[extensionIndex]]"],
            l = String.prototype.split,
            f = l.call(s, "-"),
            p = f.length;
        var h = new Z;
        h["[[dataLocale]]"] = o;
        for (var m = "-u", g = 0, _ = r.length; g < _;) {
            var b = r[g],
                v = i[o][b],
                y = v["0"],
                E = "";
            if (void 0 !== f) {
                var S = d.call(f, b);
                if (-1 !== S) {
                    if (S + 1 < p && f[S + 1].length > 2) {
                        var x = f[S + 1],
                            w = d.call(v, x);
                        if (-1 !== w) var y = x,
                            E = "-" + b + "-" + y
                    } else {
                        var w = d(v, "true");
                        if (-1 !== w) var y = "true"
                    }
                }
            }
            if (c.call(n, "[[" + b + "]]")) {
                var T = n["[[" + b + "]]"]; - 1 !== d.call(v, T) && T !== y && (y = T, E = "")
            }
            h["[[" + b + "]]"] = y, m += E, g++
        }
        if (m.length > 2) var C = o.substring(0, u),
            D = o.substring(u),
            o = C + m + D;
        return h["[[locale]]"] = o, h
    }

    function N(e, t) {
        for (var n = t.length, r = new X, i = 0; i < n;) {
            var a = t[i];
            void 0 !== A(e, String(a).replace(T, "")) && m.call(r, a), i++
        }
        return p.call(r)
    }

    function I(e, t, n, r, i) {
        var a = e[t];
        if (void 0 !== a) {
            if (a = "boolean" === n ? !!a : "string" === n ? String(a) : a, void 0 !== r && -1 === d.call(r, a)) throw RangeError("'" + a + "' is not an allowed value for `" + t + "`");
            return a
        }
        return i
    }

    function L(e, t, n, r, i) {
        var a = e[t];
        if (void 0 !== a) {
            if (isNaN(a = Number(a)) || a < n || a > r) throw RangeError("Value is not a number or outside accepted range");
            return Math.floor(a)
        }
        return i
    }

    function P() {
        var e = arguments[0],
            t = arguments[1];
        return this && this !== o ? F(et(this), e, t) : new o.NumberFormat(e, t)
    }

    function F(e, t, n) {
        var r, i = en(e),
            a = J();
        if (!0 === i["[[initializedIntlObject]]"]) throw TypeError("`this` object has already been initialized as an Intl object");
        l(e, "__getInternalProperties", {
            value: function() {
                if (arguments[0] === y) return i
            }
        }), i["[[initializedIntlObject]]"] = !0;
        var o = M(t);
        n = void 0 === n ? {} : et(n);
        var s = new Z,
            c = I(n, "localeMatcher", "string", new X("lookup", "best fit"), "best fit");
        s["[[localeMatcher]]"] = c;
        var d = v.NumberFormat["[[localeData]]"],
            f = R(v.NumberFormat["[[availableLocales]]"], o, s, v.NumberFormat["[[relevantExtensionKeys]]"], d);
        i["[[locale]]"] = f["[[locale]]"], i["[[numberingSystem]]"] = f["[[nu]]"], i["[[dataLocale]]"] = f["[[dataLocale]]"];
        var p = f["[[dataLocale]]"],
            h = I(n, "style", "string", new X("decimal", "percent", "currency"), "decimal");
        i["[[style]]"] = h;
        var m = I(n, "currency", "string");
        if (void 0 !== m && (r = ee(String(m)), !1 === w.test(r))) throw RangeError("'" + m + "' is not a valid currency code");
        if ("currency" === h && void 0 === m) throw TypeError("Currency code is required when style is currency");
        if ("currency" === h) {
            m = m.toUpperCase(), i["[[currency]]"] = m;
            var g = function(e) {
                return void 0 !== D[e] ? D[e] : 2
            }(m)
        }
        var _ = I(n, "currencyDisplay", "string", new X("code", "symbol", "name"), "symbol");
        "currency" === h && (i["[[currencyDisplay]]"] = _);
        var b = L(n, "minimumIntegerDigits", 1, 21, 1);
        i["[[minimumIntegerDigits]]"] = b;
        var E = L(n, "minimumFractionDigits", 0, 20, "currency" === h ? g : 0);
        i["[[minimumFractionDigits]]"] = E;
        var S = "currency" === h ? Math.max(E, g) : "percent" === h ? Math.max(E, 0) : Math.max(E, 3),
            x = L(n, "maximumFractionDigits", E, 20, S);
        i["[[maximumFractionDigits]]"] = x;
        var T = n.minimumSignificantDigits,
            C = n.maximumSignificantDigits;
        (void 0 !== T || void 0 !== C) && (T = L(n, "minimumSignificantDigits", 1, 21, 1), C = L(n, "maximumSignificantDigits", T, 21, 21), i["[[minimumSignificantDigits]]"] = T, i["[[maximumSignificantDigits]]"] = C);
        var O = I(n, "useGrouping", "boolean", void 0, !0);
        i["[[useGrouping]]"] = O;
        var A = d[p].patterns[h];
        return i["[[positivePattern]]"] = A.positivePattern, i["[[negativePattern]]"] = A.negativePattern, i["[[boundFormat]]"] = void 0, i["[[initializedNumberFormat]]"] = !0, u && (e.format = B.call(e)), a.exp.test(a.input), e
    }
    l(o, "NumberFormat", {
        configurable: !0,
        writable: !0,
        value: P
    }), l(o.NumberFormat, "prototype", {
        writable: !1
    });

    function B() {
        var e = this != null && "object" == typeof this && en(this);
        if (!e || !e["[[initializedNumberFormat]]"]) throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var t = b.call(function(e) {
                return U(this, Number(e))
            }, this);
            e["[[boundFormat]]"] = t
        }
        return e["[[boundFormat]]"]
    }

    function U(e, t) {
        var n, r = J(),
            i = en(e),
            a = i["[[dataLocale]]"],
            o = i["[[numberingSystem]]"],
            s = v.NumberFormat["[[localeData]]"][a],
            u = s.symbols[o] || s.symbols.latn,
            l = !1;
        if (!1 === isFinite(t)) isNaN(t) ? n = u.nan : (n = u.infinity, t < 0 && (l = !0));
        else {
            if (t < 0 && (l = !0, t = -t), "percent" === i["[[style]]"] && (t *= 100), n = c.call(i, "[[minimumSignificantDigits]]") && c.call(i, "[[maximumSignificantDigits]]") ? function(e, t, n) {
                    if (0 === e) var r = g.call(Array(n + 1), "0"),
                        i = 0;
                    else var i = function(e) {
                            if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                            var t = Math.round(Math.log(e) * Math.LOG10E);
                            return t - (Number("1e" + t) > e)
                        }(Math.abs(e)),
                        a = Math.round(Math.exp(Math.abs(i - n + 1) * Math.LN10)),
                        r = String(Math.round(i - n + 1 < 0 ? e * a : e / a));
                    if (i >= n) return r + g.call(Array(i - n + 1 + 1), "0");
                    if (i === n - 1) return r;
                    i >= 0 ? r = r.slice(0, i + 1) + "." + r.slice(i + 1) : i < 0 && (r = "0." + g.call(Array(-(i + 1) + 1), "0") + r);
                    if (r.indexOf(".") >= 0 && n > t) {
                        for (var o = n - t; o > 0 && "0" === r.charAt(r.length - 1);) r = r.slice(0, -1), o--;
                        "." === r.charAt(r.length - 1) && (r = r.slice(0, -1))
                    }
                    return r
                }(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"]) : function(e, t, n, r) {
                    var i, a = Number.prototype.toFixed.call(e, r),
                        o = a.split(".")[0].length,
                        s = r - n,
                        u = (i = a.indexOf("e")) > -1 ? a.slice(i + 1) : 0;
                    for (u && (a = a.slice(0, i).replace(".", ""), a += g.call(Array(u - (a.length - 1) + 1), "0") + "." + g.call(Array(r + 1), "0"), o = a.length); s > 0 && "0" === a.slice(-1);) a = a.slice(0, -1), s--;
                    if ("." === a.slice(-1) && (a = a.slice(0, -1)), o < t) var c = g.call(Array(t - o + 1), "0");
                    return (c || "") + a
                }(t, i["[[minimumIntegerDigits]]"], i["[[minimumFractionDigits]]"], i["[[maximumFractionDigits]]"]), Y[o]) {
                var d = Y[i["[[numberingSystem]]"]];
                n = String(n).replace(/\d/g, function(e) {
                    return d[e]
                })
            } else n = String(n);
            if (n = n.replace(/\./g, u.decimal), !0 === i["[[useGrouping]]"]) {
                var f = n.split(u.decimal),
                    p = f[0],
                    h = s.patterns.primaryGroupSize || 3,
                    _ = s.patterns.secondaryGroupSize || h;
                if (p.length > h) {
                    var b = new X,
                        y = p.length - h,
                        E = y % _,
                        S = p.slice(0, E);
                    for (S.length && m.call(b, S); E < y;) m.call(b, p.slice(E, E + _)), E += _;
                    m.call(b, p.slice(y)), f[0] = g.call(b, u.group)
                }
                n = g.call(f, u.decimal)
            }
        }
        var x = i[!0 === l ? "[[negativePattern]]" : "[[positivePattern]]"];
        if (x = x.replace("{number}", n), "currency" === i["[[style]]"]) {
            var w, T = i["[[currency]]"],
                C = s.currencies[T];
            if ("symbol" === i["[[currencyDisplay]]"]) w = C || T;
            else w = T;
            x = x.replace("{currency}", w)
        }
        return r.exp.test(r.input), x
    }
    v.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["nu"],
        "[[localeData]]": {}
    }, l(o.NumberFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: b.call(q, v.NumberFormat)
    }), l(o.NumberFormat.prototype, "format", {
        configurable: !0,
        get: B
    });
    var Y = {
        arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
        beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
        deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
        fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
        gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
        guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
        hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
        knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
        laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
        latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
        mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
        mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
        mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
        orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
        tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
        telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
        thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
        tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
    };

    function j() {
        var e = arguments[0],
            t = arguments[1];
        return this && this !== o ? z(et(this), e, t) : new o.DateTimeFormat(e, t)
    }

    function z(e, t, n) {
        var r = en(e),
            a = J();
        if (!0 === r["[[initializedIntlObject]]"]) throw TypeError("`this` object has already been initialized as an Intl object");
        l(e, "__getInternalProperties", {
            value: function() {
                if (arguments[0] === y) return r
            }
        }), r["[[initializedIntlObject]]"] = !0;
        var o = M(t),
            n = G(n, "any", "date"),
            s = new Z;
        x = I(n, "localeMatcher", "string", new X("lookup", "best fit"), "best fit"), s["[[localeMatcher]]"] = x;
        var d = v.DateTimeFormat,
            f = d["[[localeData]]"],
            p = R(d["[[availableLocales]]"], o, s, d["[[relevantExtensionKeys]]"], f);
        r["[[locale]]"] = p["[[locale]]"], r["[[calendar]]"] = p["[[ca]]"], r["[[numberingSystem]]"] = p["[[nu]]"], r["[[dataLocale]]"] = p["[[dataLocale]]"];
        var h = p["[[dataLocale]]"],
            m = n.timeZone;
        if (void 0 !== m && "UTC" !== (m = ee(m))) throw RangeError("timeZone is not supported.");
        for (var g in r["[[timeZone]]"] = m, s = new Z, H)
            if (c.call(H, g)) {
                var _ = I(n, g, "string", H[g]);
                s["[[" + g + "]]"] = _
            } var b, E = f[h],
            S = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e) ? e : i.createDateTimeFormats(e)
            }(E.formats),
            x = I(n, "formatMatcher", "string", new X("basic", "best fit"), "best fit");
        for (var g in E.formats = S, b = "basic" === x ? function(e, t) {
                return V(e, t)
            }(s, S) : function(e, t) {
                return V(e, t, !0)
            }(s, S), H)
            if (c.call(H, g) && c.call(b, g)) {
                var w = b[g];
                r["[[" + g + "]]"] = w
            } var T, C = I(n, "hour12", "boolean");
        if (r["[[hour]]"]) {
            if (C = void 0 === C ? E.hour12 : C, r["[[hour12]]"] = C, !0 === C) {
                var D = E.hourNo0;
                r["[[hourNo0]]"] = D, T = b.pattern12
            } else T = b.pattern
        } else T = b.pattern;
        return r["[[pattern]]"] = T, r["[[boundFormat]]"] = void 0, r["[[initializedDateTimeFormat]]"] = !0, u && (e.format = $.call(e)), a.exp.test(a.input), e
    }
    l(o.NumberFormat.prototype, "resolvedOptions", {
        configurable: !0,
        writable: !0,
        value: function() {
            var e, t = new Z,
                n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
                r = this != null && "object" == typeof this && en(this);
            if (!r || !r["[[initializedNumberFormat]]"]) throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            for (var i = 0, a = n.length; i < a; i++) c.call(r, e = "[[" + n[i] + "]]") && (t[n[i]] = {
                value: r[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return f({}, t)
        }
    }), l(o, "DateTimeFormat", {
        configurable: !0,
        writable: !0,
        value: j
    }), l(j, "prototype", {
        writable: !1
    });
    var H = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };

    function G(e, t, n) {
        if (void 0 === e) e = null;
        else {
            var r = et(e);
            for (var i in e = new Z, r) e[i] = r[i]
        }
        var e = f(e),
            a = !0;
        return ("date" === t || "any" === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (a = !1), ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (a = !1), a && ("date" === n || "all" === n) && (e.year = e.month = e.day = "numeric"), a && ("time" === n || "all" === n) && (e.hour = e.minute = e.second = "numeric"), e
    }

    function V(e, t, n) {
        for (var r, i = -1 / 0, a = 0, o = t.length; a < o;) {
            var s = t[a],
                u = 0;
            for (var l in H)
                if (c.call(H, l)) {
                    var f = e["[[" + l + "]]"],
                        p = c.call(s, l) ? s[l] : void 0;
                    if (void 0 === f && void 0 !== p) u -= 20;
                    else if (void 0 !== f && void 0 === p) u -= 120;
                    else {
                        var h = ["2-digit", "numeric", "narrow", "short", "long"],
                            m = d.call(h, f),
                            g = Math.max(Math.min(d.call(h, p) - m, 2), -2);
                        n && (("numeric" === f || "2-digit" === f) && "numeric" !== p && "2-digit" !== p || "numeric" !== f && "2-digit" !== f && ("2-digit" === p || "numeric" === p)) && (u -= 8), 2 === g ? u -= 6 : 1 === g ? u -= 3 : -1 === g ? u -= 6 : -2 === g && (u -= 8)
                    }
                } u > i && (i = u, r = s), a++
        }
        return r
    }

    function $() {
        var e = this != null && "object" == typeof this && en(this);
        if (!e || !e["[[initializedDateTimeFormat]]"]) throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var t = b.call(function() {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return W(this, e)
            }, this);
            e["[[boundFormat]]"] = t
        }
        return e["[[boundFormat]]"]
    }

    function W(e, t) {
        if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
        var n = e.__getInternalProperties(y),
            r = J(),
            i = n["[[locale]]"],
            a = new o.NumberFormat([i], {
                useGrouping: !1
            }),
            s = new o.NumberFormat([i], {
                minimumIntegerDigits: 2,
                useGrouping: !1
            }),
            u = function(e, t, n) {
                var r = new Date(e),
                    i = "get" + (n || "");
                return new Z({
                    "[[weekday]]": r[i + "Day"](),
                    "[[era]]": +(r[i + "FullYear"]() >= 0),
                    "[[year]]": r[i + "FullYear"](),
                    "[[month]]": r[i + "Month"](),
                    "[[day]]": r[i + "Date"](),
                    "[[hour]]": r[i + "Hours"](),
                    "[[minute]]": r[i + "Minutes"](),
                    "[[second]]": r[i + "Seconds"](),
                    "[[inDST]]": !1
                })
            }(t, n["[[calendar]]"], n["[[timeZone]]"]),
            l = n["[[pattern]]"],
            d = n["[[dataLocale]]"],
            f = v.DateTimeFormat["[[localeData]]"][d].calendars,
            p = n["[[calendar]]"];
        for (var h in H)
            if (c.call(n, "[[" + h + "]]")) {
                var m, g, _ = n["[[" + h + "]]"],
                    b = u["[[" + h + "]]"];
                if ("year" === h && b <= 0 ? b = 1 - b : "month" === h ? b++ : "hour" === h && !0 === n["[[hour12]]"] && (b %= 12, m = b !== u["[[" + h + "]]"], 0 === b && !0 === n["[[hourNo0]]"] && (b = 12)), "numeric" === _) g = U(a, b);
                else if ("2-digit" === _)(g = U(s, b)).length > 2 && (g = g.slice(-2));
                else if (_ in E) switch (h) {
                    case "month":
                        g = Q(f, p, "months", _, u["[[" + h + "]]"]);
                        break;
                    case "weekday":
                        try {
                            g = Q(f, p, "days", _, u["[[" + h + "]]"])
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + i)
                        }
                        break;
                    case "timeZoneName":
                        g = "";
                        break;
                    default:
                        g = u["[[" + h + "]]"]
                }
                l = l.replace("{" + h + "}", g)
            } return !0 === n["[[hour12]]"] && (g = Q(f, p, "dayPeriods", m ? "pm" : "am"), l = l.replace("{ampm}", g)), r.exp.test(r.input), l
    }
    v.DateTimeFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["ca", "nu"],
        "[[localeData]]": {}
    }, l(o.DateTimeFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: b.call(q, v.DateTimeFormat)
    }), l(o.DateTimeFormat.prototype, "format", {
        configurable: !0,
        get: $
    });
    l(o.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function() {
            var e, t = new Z,
                n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                r = this != null && "object" == typeof this && en(this);
            if (!r || !r["[[initializedDateTimeFormat]]"]) throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, a = n.length; i < a; i++) c.call(r, e = "[[" + n[i] + "]]") && (t[n[i]] = {
                value: r[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return f({}, t)
        }
    });
    var K = o.__localeSensitiveProtos = {
        Number: {},
        Date: {}
    };
    K.Number.toLocaleString = function() {
        if ("[object Number]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
        return U(new P(arguments[0], arguments[1]), this)
    }, K.Date.toLocaleString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = G(n, "any", "all");
        return W(new j(t, n), e)
    }, K.Date.toLocaleDateString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = G(n, "date", "date");
        return W(new j(t, n), e)
    }, K.Date.toLocaleTimeString = function() {
        if ("[object Date]" !== Object.prototype.toString.call(this)) throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = G(n, "time", "time");
        return W(new j(t, n), e)
    }, l(o, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function() {
            for (var e in l(Number.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: K.Number.toLocaleString
                }), l(Date.prototype, "toLocaleString", {
                    writable: !0,
                    configurable: !0,
                    value: K.Date.toLocaleString
                }), K.Date) c.call(K.Date, e) && l(Date.prototype, e, {
                writable: !0,
                configurable: !0,
                value: K.Date[e]
            })
        }
    }), l(o, "__addLocaleData", {
        value: function(e) {
            if (!O(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            (function(e, t) {
                if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                var n, r = [t],
                    i = t.split("-");
                for (i.length > 2 && 4 === i[1].length && m.call(r, i[0] + "-" + i[2]); n = _.call(r);) m.call(v.NumberFormat["[[availableLocales]]"], n), v.NumberFormat["[[localeData]]"][n] = e.number, e.date && (e.date.nu = e.number.nu, m.call(v.DateTimeFormat["[[availableLocales]]"], n), v.DateTimeFormat["[[localeData]]"][n] = e.date);
                void 0 === a && (a = t), !S && (F(o.NumberFormat.prototype), S = !0), e.date && !x && (z(o.DateTimeFormat.prototype), x = !0)
            })(e, e.locale)
        }
    });

    function q(e) {
        if (!c.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
        var t = J(),
            n = arguments[1],
            r = this["[[availableLocales]]"],
            i = M(e);
        return t.exp.test(t.input),
            function(e, t, n) {
                if (void 0 !== n) {
                    var n = new Z(et(n)),
                        r = n.localeMatcher;
                    if (void 0 !== r && "lookup" !== (r = String(r)) && "best fit" !== r) throw RangeError('matcher should be "lookup" or "best fit"')
                }
                if (void 0 === r || "best fit" === r) var i = N(e, t);
                else var i = N(e, t);
                for (var a in i) c.call(i, a) && l(i, a, {
                    writable: !1,
                    configurable: !1,
                    value: i[a]
                });
                return l(i, "length", {
                    writable: !1
                }), i
            }(r, i, n)
    }

    function Q(e, t, n, r, i) {
        var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
            o = {
                narrow: ["short", "long"],
                short: ["long", "narrow"],
                long: ["short", "narrow"]
            },
            s = c.call(a, r) ? a[r] : c.call(a, o[r][0]) ? a[o[r][0]] : a[o[r][1]];
        return null != i ? s[i] : s
    }

    function Z(e) {
        for (var t in e)(e instanceof Z || c.call(e, t)) && l(this, t, {
            value: e[t],
            enumerable: !0,
            writable: !0,
            configurable: !0
        })
    }

    function X() {
        l(this, "length", {
            writable: !0,
            value: 0
        }), arguments.length && m.apply(this, p.call(arguments))
    }

    function J() {
        for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || "", n = RegExp.multiline ? "m" : "", r = {
                input: RegExp.input
            }, i = new X, a = !1, o = {}, s = 1; s <= 9; s++) a = (o["$" + s] = RegExp["$" + s]) || a;
        if (t = t.replace(e, "\\$&"), a)
            for (var s = 1; s <= 9; s++) {
                var u = o["$" + s];
                u ? (u = u.replace(e, "\\$&"), t = t.replace(u, "(" + u + ")")) : t = "()" + t, m.call(i, t.slice(0, t.indexOf("(") + 1)), t = t.slice(t.indexOf("(") + 1)
            }
        return r.exp = new RegExp(g.call(i, "") + t, n), r
    }

    function ee(e) {
        for (var t = e.length; t--;) {
            var n = e.charAt(t);
            n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1))
        }
        return e
    }

    function et(e) {
        if (null == e) throw TypeError("Cannot convert null or undefined to object");
        return Object(e)
    }

    function en(e) {
        return c.call(e, "__getInternalProperties") ? e.__getInternalProperties(y) : f(null)
    }
    Z.prototype = f(null), X.prototype = f(null), t.default = o
}