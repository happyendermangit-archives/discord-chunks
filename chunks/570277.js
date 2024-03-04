function(e, t, n) {
    var r, i = n("390493");
    n("843762"), n("781738"), n("70102"), n("424973"), t = e.exports = p, r = "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift("SEMVER"), console.log.apply(console, e)
    } : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
    var o = Number.MAX_SAFE_INTEGER || 9007199254740991,
        s = t.re = [],
        a = t.src = [],
        c = t.tokens = {},
        u = 0;

    function d(e) {
        c[e] = u++
    }
    d("NUMERICIDENTIFIER"), a[c.NUMERICIDENTIFIER] = "0|[1-9]\\d*", d("NUMERICIDENTIFIERLOOSE"), a[c.NUMERICIDENTIFIERLOOSE] = "[0-9]+", d("NONNUMERICIDENTIFIER"), a[c.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", d("MAINVERSION"), a[c.MAINVERSION] = "(" + a[c.NUMERICIDENTIFIER] + ")\\.(" + a[c.NUMERICIDENTIFIER] + ")\\.(" + a[c.NUMERICIDENTIFIER] + ")", d("MAINVERSIONLOOSE"), a[c.MAINVERSIONLOOSE] = "(" + a[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + a[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + a[c.NUMERICIDENTIFIERLOOSE] + ")", d("PRERELEASEIDENTIFIER"), a[c.PRERELEASEIDENTIFIER] = "(?:" + a[c.NUMERICIDENTIFIER] + "|" + a[c.NONNUMERICIDENTIFIER] + ")", d("PRERELEASEIDENTIFIERLOOSE"), a[c.PRERELEASEIDENTIFIERLOOSE] = "(?:" + a[c.NUMERICIDENTIFIERLOOSE] + "|" + a[c.NONNUMERICIDENTIFIER] + ")", d("PRERELEASE"), a[c.PRERELEASE] = "(?:-(" + a[c.PRERELEASEIDENTIFIER] + "(?:\\." + a[c.PRERELEASEIDENTIFIER] + ")*))", d("PRERELEASELOOSE"), a[c.PRERELEASELOOSE] = "(?:-?(" + a[c.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + a[c.PRERELEASEIDENTIFIERLOOSE] + ")*))", d("BUILDIDENTIFIER"), a[c.BUILDIDENTIFIER] = "[0-9A-Za-z-]+", d("BUILD"), a[c.BUILD] = "(?:\\+(" + a[c.BUILDIDENTIFIER] + "(?:\\." + a[c.BUILDIDENTIFIER] + ")*))", d("FULL"), d("FULLPLAIN"), a[c.FULLPLAIN] = "v?" + a[c.MAINVERSION] + a[c.PRERELEASE] + "?" + a[c.BUILD] + "?", a[c.FULL] = "^" + a[c.FULLPLAIN] + "$", d("LOOSEPLAIN"), a[c.LOOSEPLAIN] = "[v=\\s]*" + a[c.MAINVERSIONLOOSE] + a[c.PRERELEASELOOSE] + "?" + a[c.BUILD] + "?", d("LOOSE"), a[c.LOOSE] = "^" + a[c.LOOSEPLAIN] + "$", d("GTLT"), a[c.GTLT] = "((?:<|>)?=?)", d("XRANGEIDENTIFIERLOOSE"), a[c.XRANGEIDENTIFIERLOOSE] = a[c.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", d("XRANGEIDENTIFIER"), a[c.XRANGEIDENTIFIER] = a[c.NUMERICIDENTIFIER] + "|x|X|\\*", d("XRANGEPLAIN"), a[c.XRANGEPLAIN] = "[v=\\s]*(" + a[c.XRANGEIDENTIFIER] + ")(?:\\.(" + a[c.XRANGEIDENTIFIER] + ")(?:\\.(" + a[c.XRANGEIDENTIFIER] + ")(?:" + a[c.PRERELEASE] + ")?" + a[c.BUILD] + "?)?)?", d("XRANGEPLAINLOOSE"), a[c.XRANGEPLAINLOOSE] = "[v=\\s]*(" + a[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + a[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + a[c.XRANGEIDENTIFIERLOOSE] + ")(?:" + a[c.PRERELEASELOOSE] + ")?" + a[c.BUILD] + "?)?)?", d("XRANGE"), a[c.XRANGE] = "^" + a[c.GTLT] + "\\s*" + a[c.XRANGEPLAIN] + "$", d("XRANGELOOSE"), a[c.XRANGELOOSE] = "^" + a[c.GTLT] + "\\s*" + a[c.XRANGEPLAINLOOSE] + "$", d("COERCE"), a[c.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", d("COERCERTL"), s[c.COERCERTL] = RegExp(a[c.COERCE], "g"), d("LONETILDE"), a[c.LONETILDE] = "(?:~>?)", d("TILDETRIM"), a[c.TILDETRIM] = "(\\s*)" + a[c.LONETILDE] + "\\s+", s[c.TILDETRIM] = RegExp(a[c.TILDETRIM], "g");
    d("TILDE"), a[c.TILDE] = "^" + a[c.LONETILDE] + a[c.XRANGEPLAIN] + "$", d("TILDELOOSE"), a[c.TILDELOOSE] = "^" + a[c.LONETILDE] + a[c.XRANGEPLAINLOOSE] + "$", d("LONECARET"), a[c.LONECARET] = "(?:\\^)", d("CARETTRIM"), a[c.CARETTRIM] = "(\\s*)" + a[c.LONECARET] + "\\s+", s[c.CARETTRIM] = RegExp(a[c.CARETTRIM], "g");
    d("CARET"), a[c.CARET] = "^" + a[c.LONECARET] + a[c.XRANGEPLAIN] + "$", d("CARETLOOSE"), a[c.CARETLOOSE] = "^" + a[c.LONECARET] + a[c.XRANGEPLAINLOOSE] + "$", d("COMPARATORLOOSE"), a[c.COMPARATORLOOSE] = "^" + a[c.GTLT] + "\\s*(" + a[c.LOOSEPLAIN] + ")$|^$", d("COMPARATOR"), a[c.COMPARATOR] = "^" + a[c.GTLT] + "\\s*(" + a[c.FULLPLAIN] + ")$|^$", d("COMPARATORTRIM"), a[c.COMPARATORTRIM] = "(\\s*)" + a[c.GTLT] + "\\s*(" + a[c.LOOSEPLAIN] + "|" + a[c.XRANGEPLAIN] + ")", s[c.COMPARATORTRIM] = RegExp(a[c.COMPARATORTRIM], "g");
    d("HYPHENRANGE"), a[c.HYPHENRANGE] = "^\\s*(" + a[c.XRANGEPLAIN] + ")\\s+-\\s+(" + a[c.XRANGEPLAIN] + ")\\s*$", d("HYPHENRANGELOOSE"), a[c.HYPHENRANGELOOSE] = "^\\s*(" + a[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + a[c.XRANGEPLAINLOOSE] + ")\\s*$", d("STAR"), a[c.STAR] = "(<|>)?=?\\s*\\*";
    for (var l = 0; l < u; l++) r(l, a[l]), !s[l] && (s[l] = new RegExp(a[l]));

    function f(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof p) return e;
        if ("string" != typeof e || e.length > 256 || !(t.loose ? s[c.LOOSE] : s[c.FULL]).test(e)) return null;
        try {
            return new p(e, t)
        } catch (e) {
            return null
        }
    }
    t.parse = f, t.valid = function(e, t) {
        var n = f(e, t);
        return n ? n.version : null
    };
    t.clean = function(e, t) {
        var n = f(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null
    };

    function p(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof p) {
            if (e.loose === t.loose) return e;
            e = e.version
        } else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
        if (e.length > 256) throw TypeError("version is longer than 256 characters");
        if (!(this instanceof p)) return new p(e, t);
        r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
        var n = e.trim().match(t.loose ? s[c.LOOSE] : s[c.FULL]);
        if (!n) throw TypeError("Invalid Version: " + e);
        if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > o || this.major < 0) throw TypeError("Invalid major version");
        if (this.minor > o || this.minor < 0) throw TypeError("Invalid minor version");
        if (this.patch > o || this.patch < 0) throw TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(function(e) {
            if (/^[0-9]+$/.test(e)) {
                var t = +e;
                if (t >= 0 && t < o) return t
            }
            return e
        }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
    }
    t.SemVer = p, p.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
    }, p.prototype.toString = function() {
        return this.version
    }, p.prototype.compare = function(e) {
        return r("SemVer.compare", this.version, this.options, e), !(e instanceof p) && (e = new p(e, this.options)), this.compareMain(e) || this.comparePre(e)
    }, p.prototype.compareMain = function(e) {
        return !(e instanceof p) && (e = new p(e, this.options)), v(this.major, e.major) || v(this.minor, e.minor) || v(this.patch, e.patch)
    }, p.prototype.comparePre = function(e) {
        if (!(e instanceof p) && (e = new p(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
            var n = this.prerelease[t],
                i = e.prerelease[t];
            if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return v(n, i)
        } while (++t)
    }, p.prototype.compareBuild = function(e) {
        !(e instanceof p) && (e = new p(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return v(n, i)
        } while (++t)
    }, p.prototype.inc = function(e, t) {
        switch (e) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                break;
            case "major":
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
            case "minor":
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                break;
            case "pre":
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                    for (var n = this.prerelease.length; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2); - 1 === n && this.prerelease.push(0)
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                break;
            default:
                throw Error("invalid increment argument: " + e)
        }
        return this.format(), this.raw = this.version, this
    }, t.inc = function(e, t, n, r) {
        "string" == typeof n && (r = n, n = void 0);
        try {
            return new p(e, n).inc(t, r).version
        } catch (e) {
            return null
        }
    };
    t.diff = function(e, t) {
        if (y(e, t)) return null;
        var n = f(e),
            r = f(t),
            i = "";
        if (n.prerelease.length || r.prerelease.length) {
            i = "pre";
            var o = "prerelease"
        }
        for (var s in n)
            if (("major" === s || "minor" === s || "patch" === s) && n[s] !== r[s]) return i + s;
        return o
    };
    t.compareIdentifiers = v;
    var h = /^[0-9]+$/;

    function v(e, t) {
        var n = h.test(e),
            r = h.test(t);
        return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
    }
    t.rcompareIdentifiers = function(e, t) {
        return v(t, e)
    };
    t.major = function(e, t) {
        return new p(e, t).major
    };
    t.minor = function(e, t) {
        return new p(e, t).minor
    };
    t.patch = function(e, t) {
        return new p(e, t).patch
    };

    function g(e, t, n) {
        return new p(e, n).compare(new p(t, n))
    }
    t.compare = g, t.compareLoose = function(e, t) {
        return g(e, t, !0)
    };
    t.compareBuild = function(e, t, n) {
        var r = new p(e, n),
            i = new p(t, n);
        return r.compare(i) || r.compareBuild(i)
    };
    t.rcompare = function(e, t, n) {
        return g(t, e, n)
    };
    t.sort = function(e, n) {
        return e.sort(function(e, r) {
            return t.compareBuild(e, r, n)
        })
    };
    t.rsort = function(e, n) {
        return e.sort(function(e, r) {
            return t.compareBuild(r, e, n)
        })
    };

    function b(e, t, n) {
        return g(e, t, n) > 0
    }

    function m(e, t, n) {
        return 0 > g(e, t, n)
    }

    function y(e, t, n) {
        return 0 === g(e, t, n)
    }

    function x(e, t, n) {
        return 0 !== g(e, t, n)
    }

    function w(e, t, n) {
        return g(e, t, n) >= 0
    }

    function S(e, t, n) {
        return 0 >= g(e, t, n)
    }

    function k(e, t, n, r) {
        switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
            case "!==":
                return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
            case "":
            case "=":
            case "==":
                return y(e, n, r);
            case "!=":
                return x(e, n, r);
            case ">":
                return b(e, n, r);
            case ">=":
                return w(e, n, r);
            case "<":
                return m(e, n, r);
            case "<=":
                return S(e, n, r);
            default:
                throw TypeError("Invalid operator: " + t)
        }
    }

    function E(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof E) {
            if (!!t.loose === e.loose) return e;
            e = e.value
        }
        if (!(this instanceof E)) return new E(e, t);
        r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === _ ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
    }
    t.gt = b, t.lt = m, t.eq = y, t.neq = x, t.gte = w, t.lte = S, t.cmp = k, t.Comparator = E;
    var _ = {};

    function Range(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof Range) return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new Range(e.raw, t);
        if (e instanceof E) return new Range(e.value, t);
        if (!(this instanceof Range)) return new Range(e, t);
        if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
                return this.parseRange(e.trim())
            }, this).filter(function(e) {
                return e.length
            }), !this.set.length) throw TypeError("Invalid SemVer Range: " + e);
        this.format()
    }

    function M(e, t) {
        for (var n = !0, r = e.slice(), i = r.pop(); n && r.length;) n = r.every(function(e) {
            return i.intersects(e, t)
        }), i = r.pop();
        return n
    }
    E.prototype.parse = function(e) {
        var t = this.options.loose ? s[c.COMPARATORLOOSE] : s[c.COMPARATOR],
            n = e.match(t);
        if (!n) throw TypeError("Invalid comparator: " + e);
        this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new p(n[2], this.options.loose) : this.semver = _
    }, E.prototype.toString = function() {
        return this.value
    }, E.prototype.test = function(e) {
        if (r("Comparator.test", e, this.options.loose), this.semver === _ || e === _) return !0;
        if ("string" == typeof e) try {
            e = new p(e, this.options)
        } catch (e) {
            return !1
        }
        return k(e, this.operator, this.semver, this.options)
    }, E.prototype.intersects = function(e, t) {
        if (!(e instanceof E)) throw TypeError("a Comparator is required");
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), "" === this.operator) return "" === this.value || (n = new Range(e.value, t), P(this.value, n, t));
        if ("" === e.operator) return "" === e.value || (n = new Range(this.value, t), P(e.semver, n, t));
        var n, r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
            i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            o = this.semver.version === e.semver.version,
            s = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
            a = k(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            c = k(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
        return r || i || o && s || a || c
    }, t.Range = Range, Range.prototype.format = function() {
        return this.range = this.set.map(function(e) {
            return e.join(" ").trim()
        }).join("||").trim(), this.range
    }, Range.prototype.toString = function() {
        return this.range
    }, Range.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? s[c.HYPHENRANGELOOSE] : s[c.HYPHENRANGE];
        e = e.replace(n, C), r("hyphen replace", e), e = e.replace(s[c.COMPARATORTRIM], "$1$2$3"), r("comparator trim", e, s[c.COMPARATORTRIM]), e = (e = (e = e.replace(s[c.TILDETRIM], "$1~")).replace(s[c.CARETTRIM], "$1^")).split(/\s+/).join(" ");
        var i = t ? s[c.COMPARATORLOOSE] : s[c.COMPARATOR],
            o = e.split(" ").map(function(e) {
                return function(e, t) {
                    return r("comp", e, t), e = function(e, t) {
                        return e.trim().split(/\s+/).map(function(e) {
                            return function(e, t) {
                                r("caret", e, t);
                                var n = t.loose ? s[c.CARETLOOSE] : s[c.CARET];
                                return e.replace(n, function(t, n, i, o, s) {
                                    var a;
                                    return r("caret", e, t, n, i, o, s), D(n) ? a = "" : D(i) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : D(o) ? a = "0" === n ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0" : s ? (r("replaceCaret pr", s), a = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + i + "." + (+o + 1) : ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + o + "-" + s + " <" + (+n + 1) + ".0.0") : (r("no pr"), a = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + o + " <" + n + "." + i + "." + (+o + 1) : ">=" + n + "." + i + "." + o + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + o + " <" + (+n + 1) + ".0.0"), r("caret return", a), a
                                })
                            }(e, t)
                        }).join(" ")
                    }(e, t), r("caret", e), e = function(e, t) {
                        return e.trim().split(/\s+/).map(function(e) {
                            return function(e, t) {
                                var n = t.loose ? s[c.TILDELOOSE] : s[c.TILDE];
                                return e.replace(n, function(t, n, i, o, s) {
                                    var a;
                                    return r("tilde", e, t, n, i, o, s), D(n) ? a = "" : D(i) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : D(o) ? a = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : s ? (r("replaceTilde pr", s), a = ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + (+i + 1) + ".0") : a = ">=" + n + "." + i + "." + o + " <" + n + "." + (+i + 1) + ".0", r("tilde return", a), a
                                })
                            }(e, t)
                        }).join(" ")
                    }(e, t), r("tildes", e), e = function(e, t) {
                        return r("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
                            return function(e, t) {
                                e = e.trim();
                                var n = t.loose ? s[c.XRANGELOOSE] : s[c.XRANGE];
                                return e.replace(n, function(n, i, o, s, a, c) {
                                    r("xRange", e, n, i, o, s, a, c);
                                    var u = D(o),
                                        d = u || D(s),
                                        l = d || D(a);
                                    return "=" === i && l && (i = ""), c = t.includePrerelease ? "-0" : "", u ? n = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && l ? (d && (s = 0), a = 0, ">" === i ? (i = ">=", d ? (o = +o + 1, s = 0) : s = +s + 1, a = 0) : "<=" === i && (i = "<", d ? o = +o + 1 : s = +s + 1), n = i + o + "." + s + "." + a + c) : d ? n = ">=" + o + ".0.0" + c + " <" + (+o + 1) + ".0.0" + c : l && (n = ">=" + o + "." + s + ".0" + c + " <" + o + "." + (+s + 1) + ".0" + c), r("xRange return", n), n
                                })
                            }(e, t)
                        }).join(" ")
                    }(e, t), r("xrange", e), e = function(e, t) {
                        return r("replaceStars", e, t), e.trim().replace(s[c.STAR], "")
                    }(e, t), r("stars", e), e
                }(e, this.options)
            }, this).join(" ").split(/\s+/);
        return this.options.loose && (o = o.filter(function(e) {
            return !!e.match(i)
        })), o = o.map(function(e) {
            return new E(e, this.options)
        }, this)
    }, Range.prototype.intersects = function(e, t) {
        if (!(e instanceof Range)) throw TypeError("a Range is required");
        return this.set.some(function(n) {
            return M(n, t) && e.set.some(function(e) {
                return M(e, t) && n.every(function(n) {
                    return e.every(function(e) {
                        return n.intersects(e, t)
                    })
                })
            })
        })
    }, t.toComparators = function(e, t) {
        return new Range(e, t).set.map(function(e) {
            return e.map(function(e) {
                return e.value
            }).join(" ").trim().split(" ")
        })
    };

    function D(e) {
        return !e || "x" === e.toLowerCase() || "*" === e
    }

    function C(e, t, n, r, i, o, s, a, c, u, d, l, f) {
        return t = D(n) ? "" : D(r) ? ">=" + n + ".0.0" : D(i) ? ">=" + n + "." + r + ".0" : ">=" + t, (t + " " + (a = D(c) ? "" : D(u) ? "<" + (+c + 1) + ".0.0" : D(d) ? "<" + c + "." + (+u + 1) + ".0" : l ? "<=" + c + "." + u + "." + d + "-" + l : "<=" + a)).trim()
    }
    Range.prototype.test = function(e) {
        if (!e) return !1;
        if ("string" == typeof e) try {
            e = new p(e, this.options)
        } catch (e) {
            return !1
        }
        for (var t = 0; t < this.set.length; t++)
            if (function(e, t, n) {
                    for (var i = 0; i < e.length; i++)
                        if (!e[i].test(t)) return !1;
                    if (t.prerelease.length && !n.includePrerelease) {
                        for (i = 0; i < e.length; i++)
                            if (r(e[i].semver), e[i].semver !== _ && e[i].semver.prerelease.length > 0) {
                                var o = e[i].semver;
                                if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
                            } return !1
                    }
                    return !0
                }(this.set[t], e, this.options)) return !0;
        return !1
    };

    function P(e, t, n) {
        try {
            t = new Range(t, n)
        } catch (e) {
            return !1
        }
        return t.test(e)
    }
    t.satisfies = P, t.maxSatisfying = function(e, t, n) {
        var r = null,
            i = null;
        try {
            var o = new Range(t, n)
        } catch (e) {
            return null
        }
        return e.forEach(function(e) {
            o.test(e) && (!r || -1 === i.compare(e)) && (i = new p(r = e, n))
        }), r
    };
    t.minSatisfying = function(e, t, n) {
        var r = null,
            i = null;
        try {
            var o = new Range(t, n)
        } catch (e) {
            return null
        }
        return e.forEach(function(e) {
            o.test(e) && (!r || 1 === i.compare(e)) && (i = new p(r = e, n))
        }), r
    };
    t.minVersion = function(e, t) {
        e = new Range(e, t);
        var n = new p("0.0.0");
        if (e.test(n)) return n;
        if (n = new p("0.0.0-0"), e.test(n)) return n;
        n = null;
        for (var r = 0; r < e.set.length; ++r) e.set[r].forEach(function(e) {
            var t = new p(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                case "":
                case ">=":
                    (!n || b(n, t)) && (n = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw Error("Unexpected operation: " + e.operator)
            }
        });
        return n && e.test(n) ? n : null
    };
    t.validRange = function(e, t) {
        try {
            return new Range(e, t).range || "*"
        } catch (e) {
            return null
        }
    };
    t.ltr = function(e, t, n) {
        return T(e, t, "<", n)
    };
    t.gtr = function(e, t, n) {
        return T(e, t, ">", n)
    };

    function T(e, t, n, r) {
        switch (e = new p(e, r), t = new Range(t, r), n) {
            case ">":
                i = b, o = S, s = m, a = ">", c = ">=";
                break;
            case "<":
                i = m, o = w, s = b, a = "<", c = "<=";
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (P(e, t, r)) return !1;
        for (var i, o, s, a, c, u = 0; u < t.set.length; ++u) {
            var d = t.set[u],
                l = null,
                f = null;
            if (d.forEach(function(e) {
                    e.semver === _ && (e = new E(">=0.0.0")), l = l || e, f = f || e, i(e.semver, l.semver, r) ? l = e : s(e.semver, f.semver, r) && (f = e)
                }), l.operator === a || l.operator === c) return !1;
            if ((!f.operator || f.operator === a) && o(e, f.semver)) return !1;
            if (f.operator === c && s(e, f.semver)) return !1
        }
        return !0
    }
    t.outside = T, t.prerelease = function(e, t) {
        var n = f(e, t);
        return n && n.prerelease.length ? n.prerelease : null
    };
    t.intersects = function(e, t, n) {
        return e = new Range(e, n), t = new Range(t, n), e.intersects(t)
    };
    t.coerce = function(e, t) {
        if (e instanceof p) return e;
        if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
        var n, r = null;
        if ((t = t || {}).rtl) {
            for (;
                (n = s[c.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)(!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), s[c.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
            s[c.COERCERTL].lastIndex = -1
        } else r = e.match(s[c.COERCE]);
        return null === r ? null : f(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t)
    }
}