function(e, t, n) {
    "use strict";
    n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("115278"), n("222007"), n("370692"), n("667500"), n("453061"), n("477315"), n("527135"), n("426094"), n("332822"), n("659510"), n("990131"), n("781738");
    var r = SyntaxError,
        i = Function,
        o = TypeError,
        s = function(e) {
            try {
                return i('"use strict"; return (' + e + ").constructor;")()
            } catch (e) {}
        },
        a = Object.getOwnPropertyDescriptor;
    if (a) try {
        a({}, "")
    } catch (e) {
        a = null
    }
    var c = function() {
            throw new o
        },
        u = a ? function() {
            try {
                return arguments.callee, c
            } catch (e) {
                try {
                    return a(arguments, "callee").get
                } catch (e) {
                    return c
                }
            }
        }() : c,
        d = n("923771")(),
        l = n("29364")(),
        f = Object.getPrototypeOf || (l ? function(e) {
            return e.__proto__
        } : null),
        p = {},
        h = "undefined" != typeof Uint8Array && f ? f(Uint8Array) : void 0,
        v = {
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": d && f ? f([][Symbol.iterator]()) : void 0,
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
            "%IteratorPrototype%": d && f ? f(f([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && d && f ? f(new Map()[Symbol.iterator]()) : void 0,
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
            "%SetIteratorPrototype%": "undefined" != typeof Set && d && f ? f(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": d && f ? f("" [Symbol.iterator]()) : void 0,
            "%Symbol%": d ? Symbol : void 0,
            "%SyntaxError%": r,
            "%ThrowTypeError%": u,
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
        var g = f(f(e));
        v["%Error.prototype%"] = g
    }
    var b = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = s("async function () {}");
            else if ("%GeneratorFunction%" === t) n = s("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t) n = s("async function* () {}");
            else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype)
            } else if ("%AsyncIteratorPrototype%" === t) {
                var i = e("%AsyncGenerator%");
                i && f && (n = f(i.prototype))
            }
            return v[t] = n, n
        },
        m = {
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
        y = n("459078"),
        x = n("537778"),
        w = y.call(Function.call, Array.prototype.concat),
        S = y.call(Function.apply, Array.prototype.splice),
        k = y.call(Function.call, String.prototype.replace),
        E = y.call(Function.call, String.prototype.slice),
        _ = y.call(Function.call, RegExp.prototype.exec),
        M = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        D = /\\(\\)?/g,
        C = function(e) {
            var t = E(e, 0, 1),
                n = E(e, -1);
            if ("%" === t && "%" !== n) throw new r("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new r("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return k(e, M, function(e, t, n, r) {
                i[i.length] = n ? k(r, D, "$1") : t || e
            }), i
        },
        P = function(e, t) {
            var n, i = e;
            if (x(m, i) && (i = "%" + (n = m[i])[0] + "%"), x(v, i)) {
                var s = v[i];
                if (s === p && (s = b(i)), void 0 === s && !t) throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: i,
                    value: s
                }
            }
            throw new r("intrinsic " + e + " does not exist!")
        };
    e.exports = function(e, t) {
        if ("string" != typeof e || 0 === e.length) throw new o("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new o('"allowMissing" argument must be a boolean');
        if (null === _(/^%?[^%]*%?$/, e)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = C(e),
            i = n.length > 0 ? n[0] : "",
            s = P("%" + i + "%", t),
            c = s.name,
            u = s.value,
            d = !1,
            l = s.alias;
        l && (i = l[0], S(n, w([0, 1], l)));
        for (var f = 1, p = !0; f < n.length; f += 1) {
            var h = n[f],
                g = E(h, 0, 1),
                b = E(h, -1);
            if (('"' === g || "'" === g || "`" === g || '"' === b || "'" === b || "`" === b) && g !== b) throw new r("property names with quotes must have matching quotes");
            if (("constructor" === h || !p) && (d = !0), i += "." + h, x(v, c = "%" + i + "%")) u = v[c];
            else if (null != u) {
                if (!(h in u)) {
                    if (!t) throw new o("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (a && f + 1 >= n.length) {
                    var m = a(u, h);
                    u = (p = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : u[h]
                } else p = x(u, h), u = u[h];
                p && !d && (v[c] = u)
            }
        }
        return u
    }
}