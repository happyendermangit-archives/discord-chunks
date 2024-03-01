function(e, t, n) {
    "use strict";
    n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("115278"), n("222007"), n("370692"), n("667500"), n("453061"), n("477315"), n("527135"), n("426094"), n("332822"), n("659510"), n("990131"), n("781738");
    var r = SyntaxError,
        a = Function,
        o = TypeError,
        i = function(e) {
            try {
                return a('"use strict"; return (' + e + ").constructor;")()
            } catch (e) {}
        },
        s = Object.getOwnPropertyDescriptor;
    if (s) try {
        s({}, "")
    } catch (e) {
        s = null
    }
    var u = function() {
            throw new o
        },
        l = s ? function() {
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
        c = n("923771")(),
        d = n("29364")(),
        f = Object.getPrototypeOf || (d ? function(e) {
            return e.__proto__
        } : null),
        p = {},
        h = "undefined" != typeof Uint8Array && f ? f(Uint8Array) : void 0,
        m = {
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": c && f ? f([][Symbol.iterator]()) : void 0,
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
            "%Function%": a,
            "%GeneratorFunction%": p,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": c && f ? f(f([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && c && f ? f(new Map()[Symbol.iterator]()) : void 0,
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
            "%SetIteratorPrototype%": "undefined" != typeof Set && c && f ? f(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": c && f ? f("" [Symbol.iterator]()) : void 0,
            "%Symbol%": c ? Symbol : void 0,
            "%SyntaxError%": r,
            "%ThrowTypeError%": l,
            "%TypedArray%": h,
            "%TypeError%": o,
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
        var y = f(f(e));
        m["%Error.prototype%"] = y
    }
    var _ = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = i("async function () {}");
            else if ("%GeneratorFunction%" === t) n = i("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t) n = i("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if ("%AsyncIteratorPrototype%" === t) {
                var a = e("%AsyncGenerator%");
                a && f && (n = f(a.prototype))
            }
            return m[t] = n, n
        },
        g = {
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
        v = n("459078"),
        b = n("748795"),
        M = v.call(Function.call, Array.prototype.concat),
        w = v.call(Function.apply, Array.prototype.splice),
        k = v.call(Function.call, String.prototype.replace),
        L = v.call(Function.call, String.prototype.slice),
        D = v.call(Function.call, RegExp.prototype.exec),
        T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        S = /\\(\\)?/g,
        Y = function(e) {
            var t = L(e, 0, 1),
                n = L(e, -1);
            if ("%" === t && "%" !== n) throw new r("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new r("invalid intrinsic syntax, expected opening `%`");
            var a = [];
            return k(e, T, function(e, t, n, r) {
                a[a.length] = n ? k(r, S, "$1") : t || e
            }), a
        },
        x = function(e, t) {
            var n, a = e;
            if (b(g, a) && (a = "%" + (n = g[a])[0] + "%"), b(m, a)) {
                var i = m[a];
                if (i === p && (i = _(a)), void 0 === i && !t) throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: a,
                    value: i
                }
            }
            throw new r("intrinsic " + e + " does not exist!")
        };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new o("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new o('"allowMissing" argument must be a boolean');
        if (null === D(/^%?[^%]*%?$/, e)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = Y(e),
            a = n.length > 0 ? n[0] : "",
            i = x("%" + a + "%", t),
            u = i.name,
            l = i.value,
            c = !1,
            d = i.alias;
        d && (a = d[0], w(n, M([0, 1], d)));
        for (var f = 1, p = !0; f < n.length; f += 1) {
            var h = n[f],
                y = L(h, 0, 1),
                _ = L(h, -1);
            if (('"' === y || "'" === y || "`" === y || '"' === _ || "'" === _ || "`" === _) && y !== _) throw new r("property names with quotes must have matching quotes");
            if (("constructor" === h || !p) && (c = !0), a += "." + h, b(m, u = "%" + a + "%")) l = m[u];
            else if (null != l) {
                if (!(h in l)) {
                    if (!t) throw new o("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (s && f + 1 >= n.length) {
                    var g = s(l, h);
                    l = (p = !!g) && "get" in g && !("originalValue" in g.get) ? g.get : l[h]
                } else p = b(l, h), l = l[h];
                p && !c && (m[u] = l)
            }
        }
        return l
    }
}