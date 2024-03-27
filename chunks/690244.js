function(e, t, n) {
    "use strict";
    var r = n("401801"),
        i = n("104509"),
        a = n("333567"),
        o = n("284456"),
        s = n("429675"),
        u = n("815329"),
        c = n("102099"),
        l = Function,
        d = function(e) {
            try {
                return l('"use strict"; return (' + e + ").constructor;")()
            } catch (e) {}
        },
        f = Object.getOwnPropertyDescriptor;
    if (f) try {
        f({}, "")
    } catch (e) {
        f = null
    }
    var p = function() {
            throw new u
        },
        h = f ? function() {
            try {
                return arguments.callee, p
            } catch (e) {
                try {
                    return f(arguments, "callee").get
                } catch (e) {
                    return p
                }
            }
        }() : p,
        m = n("322499")(),
        g = n("79536")(),
        _ = Object.getPrototypeOf || (g ? function(e) {
            return e.__proto__
        } : null),
        b = {},
        v = "undefined" != typeof Uint8Array && _ ? _(Uint8Array) : void 0,
        y = {
            __proto__: null,
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": m && _ ? _([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": b,
            "%AsyncGenerator%": b,
            "%AsyncGeneratorFunction%": b,
            "%AsyncIteratorPrototype%": b,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": r,
            "%eval%": eval,
            "%EvalError%": i,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
            "%Function%": l,
            "%GeneratorFunction%": b,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": m && _ ? _(_([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && m && _ ? _(new Map()[Symbol.iterator]()) : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": a,
            "%ReferenceError%": o,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && m && _ ? _(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": m && _ ? _("" [Symbol.iterator]()) : void 0,
            "%Symbol%": m ? Symbol : void 0,
            "%SyntaxError%": s,
            "%ThrowTypeError%": h,
            "%TypedArray%": v,
            "%TypeError%": u,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": c,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
        };
    if (_) try {
        null.error
    } catch (e) {
        var E = _(_(e));
        y["%Error.prototype%"] = E
    }
    var S = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = d("async function () {}");
            else if ("%GeneratorFunction%" === t) n = d("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t) n = d("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if ("%AsyncIteratorPrototype%" === t) {
                var i = e("%AsyncGenerator%");
                i && _ && (n = _(i.prototype))
            }
            return y[t] = n, n
        },
        x = {
            __proto__: null,
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        w = n("390976"),
        T = n("706165"),
        C = w.call(Function.call, Array.prototype.concat),
        D = w.call(Function.apply, Array.prototype.splice),
        O = w.call(Function.call, String.prototype.replace),
        M = w.call(Function.call, String.prototype.slice),
        A = w.call(Function.call, RegExp.prototype.exec),
        k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        R = /\\(\\)?/g,
        N = function(e) {
            var t = M(e, 0, 1),
                n = M(e, -1);
            if ("%" === t && "%" !== n) throw new s("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new s("invalid intrinsic syntax, expected opening `%`");
            var r = [];
            return O(e, k, function(e, t, n, i) {
                r[r.length] = n ? O(i, R, "$1") : t || e
            }), r
        },
        I = function(e, t) {
            var n, r = e;
            if (T(x, r) && (r = "%" + (n = x[r])[0] + "%"), T(y, r)) {
                var i = y[r];
                if (i === b && (i = S(r)), void 0 === i && !t) throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: r,
                    value: i
                }
            }
            throw new s("intrinsic " + e + " does not exist!")
        };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new u('"allowMissing" argument must be a boolean');
        if (null === A(/^%?[^%]*%?$/, e)) throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = N(e),
            r = n.length > 0 ? n[0] : "",
            i = I("%" + r + "%", t),
            a = i.name,
            o = i.value,
            c = !1,
            l = i.alias;
        l && (r = l[0], D(n, C([0, 1], l)));
        for (var d = 1, p = !0; d < n.length; d += 1) {
            var h = n[d],
                m = M(h, 0, 1),
                g = M(h, -1);
            if (('"' === m || "'" === m || "`" === m || '"' === g || "'" === g || "`" === g) && m !== g) throw new s("property names with quotes must have matching quotes");
            if (("constructor" === h || !p) && (c = !0), r += "." + h, T(y, a = "%" + r + "%")) o = y[a];
            else if (null != o) {
                if (!(h in o)) {
                    if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (f && d + 1 >= n.length) {
                    var _ = f(o, h);
                    o = (p = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : o[h]
                } else p = T(o, h), o = o[h];
                p && !c && (y[a] = o)
            }
        }
        return o
    }
}