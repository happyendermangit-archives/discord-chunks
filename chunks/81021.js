function(e, t, n) {
    "use strict";
    var r = SyntaxError,
        i = Function,
        a = TypeError,
        o = function(e) {
            try {
                return i('"use strict"; return (' + e + ").constructor;")()
            } catch (e) {}
        },
        s = Object.getOwnPropertyDescriptor;
    if (s) try {
        s({}, "")
    } catch (e) {
        s = null
    }
    var u = function() {
            throw new a
        },
        c = s ? function() {
            try {
                return arguments.callee, u
            } catch (e) {
                try {
                    return s(arguments, "callee").get
                } catch (e) {
                    return u
                }
            }
        }() : u,
        l = n("322499")(),
        d = n("429804")(),
        f = Object.getPrototypeOf || (d ? function(e) {
            return e.__proto__
        } : null),
        p = {},
        h = "undefined" != typeof Uint8Array && f ? f(Uint8Array) : void 0,
        m = {
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": l && f ? f([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": p,
            "%AsyncGenerator%": p,
            "%AsyncGeneratorFunction%": p,
            "%AsyncIteratorPrototype%": p,
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
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
            "%Function%": i,
            "%GeneratorFunction%": p,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": l && f ? f(f([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && l && f ? f(new Map()[Symbol.iterator]()) : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && l && f ? f(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": l && f ? f("" [Symbol.iterator]()) : void 0,
            "%Symbol%": l ? Symbol : void 0,
            "%SyntaxError%": r,
            "%ThrowTypeError%": c,
            "%TypedArray%": h,
            "%TypeError%": a,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
        };
    if (f) try {
        null.error
    } catch (e) {
        var g = f(f(e));
        m["%Error.prototype%"] = g
    }
    var _ = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = o("async function () {}");
            else if ("%GeneratorFunction%" === t) n = o("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t) n = o("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if ("%AsyncIteratorPrototype%" === t) {
                var i = e("%AsyncGenerator%");
                i && f && (n = f(i.prototype))
            }
            return m[t] = n, n
        },
        b = {
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
        v = n("390976"),
        y = n("706165"),
        E = v.call(Function.call, Array.prototype.concat),
        S = v.call(Function.apply, Array.prototype.splice),
        x = v.call(Function.call, String.prototype.replace),
        w = v.call(Function.call, String.prototype.slice),
        T = v.call(Function.call, RegExp.prototype.exec),
        C = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        D = /\\(\\)?/g,
        O = function(e) {
            var t = w(e, 0, 1),
                n = w(e, -1);
            if ("%" === t && "%" !== n) throw new r("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new r("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return x(e, C, function(e, t, n, r) {
                i[i.length] = n ? x(r, D, "$1") : t || e
            }), i
        },
        M = function(e, t) {
            var n, i = e;
            if (y(b, i) && (i = "%" + (n = b[i])[0] + "%"), y(m, i)) {
                var o = m[i];
                if (o === p && (o = _(i)), void 0 === o && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: i,
                    value: o
                }
            }
            throw new r("intrinsic " + e + " does not exist!")
        };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
        if (null === T(/^%?[^%]*%?$/, e)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = O(e),
            i = n.length > 0 ? n[0] : "",
            o = M("%" + i + "%", t),
            u = o.name,
            c = o.value,
            l = !1,
            d = o.alias;
        d && (i = d[0], S(n, E([0, 1], d)));
        for (var f = 1, p = !0; f < n.length; f += 1) {
            var h = n[f],
                g = w(h, 0, 1),
                _ = w(h, -1);
            if (('"' === g || "'" === g || "`" === g || '"' === _ || "'" === _ || "`" === _) && g !== _) throw new r("property names with quotes must have matching quotes");
            if (("constructor" === h || !p) && (l = !0), i += "." + h, y(m, u = "%" + i + "%")) c = m[u];
            else if (null != c) {
                if (!(h in c)) {
                    if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (s && f + 1 >= n.length) {
                    var b = s(c, h);
                    c = (p = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : c[h]
                } else p = y(c, h), c = c[h];
                p && !l && (m[u] = c)
            }
        }
        return c
    }
}