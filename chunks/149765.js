function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        add: function() {
            return P
        },
        asUintN: function() {
            return U
        },
        combine: function() {
            return C
        },
        deserialize: function() {
            return i
        },
        equals: function() {
            return S
        },
        filter: function() {
            return O
        },
        getFlag: function() {
            return G
        },
        has: function() {
            return l
        },
        hasAny: function() {
            return s
        },
        invert: function() {
            return D
        },
        isBigFlag: function() {
            return r
        },
        remove: function() {
            return M
        }
    }), e("309749");
    var I = e("654861"),
        o = e.n(I);

    function a(_, E, e) {
        return E in _ ? Object.defineProperty(_, E, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[E] = e, _
    }
    let R = 4;

    function t(_) {
        let E = [];
        for (let e = 0; e < _.length; e++) {
            let I = Number(_[e]);
            for (let _ = 0; I || _ < E.length; _++) I += 10 * (E[_] || 0), E[_] = I % 16, I = (I - E[_]) / 16
        }
        return E
    }
    class A {
        static fromString(_) {
            return new A(function(_) {
                let E = t(_),
                    e = Array(R);
                for (let _ = 0; _ < R; _++) e[R - 1 - _] = function(_, E, e) {
                    let I = 0;
                    for (let o = 0; o < e; o++) {
                        let e = _[E + o];
                        if (void 0 === e) break;
                        I += e * 16 ** o
                    }
                    return I
                }(E, _ * R, R);
                return e
            }(_), _)
        }
        static fromBit(_) {
            let E = Array(R),
                e = Math.floor(_ / 16);
            for (let I = 0; I < R; I++) E[R - 1 - I] = I === e ? 1 << _ - 16 * e : 0;
            return new A(E)
        }
        static asUintN(_, E) {
            let {
                parts: e
            } = E, I = 0, o = 0;
            for (; o < _ && o < 16 * e.length;) {
                let E = Math.min(_ - o, 16),
                    a = (1 << E) - 1,
                    R = e.length - Math.floor(o / 16) - 1;
                I |= (e[R] & a) << o, o += E
            }
            return I
        }
        and(_) {
            let {
                parts: E
            } = _;
            return new A(this.parts.map((_, e) => _ & E[e]))
        }
        or(_) {
            let {
                parts: E
            } = _;
            return new A(this.parts.map((_, e) => _ | E[e]))
        }
        xor(_) {
            let {
                parts: E
            } = _;
            return new A(this.parts.map((_, e) => _ ^ E[e]))
        }
        not() {
            return new A(this.parts.map(_ => ~_))
        }
        equals(_) {
            let {
                parts: E
            } = _;
            return this.parts.every((_, e) => _ === E[e])
        }
        toString() {
            if (null != this.str) return this.str;
            let _ = Array(16);
            return this.parts.forEach((E, e) => {
                let I = t(E.toString());
                for (let E = 0; E < 4; E++) _[E + 4 * e] = I[3 - E] || 0
            }), this.str = o().fromArray(_, 16).toString()
        }
        toJSON() {
            return this.toString()
        }
        constructor(_, E) {
            a(this, "parts", void 0), a(this, "str", void 0), this.parts = _, this.str = E
        }
    }
    let T = function() {
        try {
            return !0
        } catch (_) {
            return !1
        }
    }();
    T && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
        return this.toString()
    });
    let r = T ? function(_) {
            return "bigint" == typeof _
        } : function(_) {
            return _ instanceof A
        },
        N = {},
        i = T ? function(_) {
            return BigInt(_)
        } : function(_) {
            return _ instanceof A ? _ : ("number" == typeof _ && (_ = _.toString()), null != N[_]) ? N[_] : (N[_] = A.fromString(_), N[_])
        },
        c = i(0),
        O = T ? function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return _ & E
        } : function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return _.and(E)
        },
        n = T ? function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return _ | E
        } : function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return _.or(E)
        },
        L = T ? function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return _ ^ E
        } : function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            return _.xor(E)
        },
        D = T ? function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
            return ~_
        } : function() {
            let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
            return _.not()
        },
        S = T ? function(_, E) {
            return _ === E
        } : function(_, E) {
            return null == _ || null == E ? _ == E : _.equals(E)
        };

    function C() {
        for (var _ = arguments.length, E = Array(_), e = 0; e < _; e++) E[e] = arguments[e];
        let I = E[0];
        for (let _ = 1; _ < E.length; _++) I = n(I, E[_]);
        return I
    }

    function l(_, E) {
        return S(O(_, E), E)
    }

    function s(_, E) {
        return !S(O(_, E), c)
    }

    function P(_, E) {
        return E === c ? _ : n(_, E)
    }

    function M(_, E) {
        return E === c ? _ : L(_, O(_, E))
    }
    let G = T ? function(_) {
            return BigInt(1) << BigInt(_)
        } : function(_) {
            return A.fromBit(_)
        },
        U = T ? function(_, E) {
            return Number(BigInt.asUintN(_, E))
        } : function(_, E) {
            return A.asUintN(_, E)
        }
}