function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    n("222007"), n("854508"), n("70102"), n("274635");
    var a = n("102321");

    function o(e) {
        if (e) return function(e) {
            for (var t in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, t) && (e[t] = o.prototype[t]);
            return e
        }(e)
    }
    e.exports = o;
    o.prototype.clearTimeout = function() {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
    }, o.prototype.parse = function(e) {
        return this._parser = e, this
    }, o.prototype.responseType = function(e) {
        return this._responseType = e, this
    }, o.prototype.serialize = function(e) {
        return this._serializer = e, this
    }, o.prototype.timeout = function(e) {
        if (!e || "object" !== r(e)) return this._timeout = e, this._responseTimeout = 0, this._uploadTimeout = 0, this;
        for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) switch (t) {
                case "deadline":
                    this._timeout = e.deadline;
                    break;
                case "response":
                    this._responseTimeout = e.response;
                    break;
                case "upload":
                    this._uploadTimeout = e.upload;
                    break;
                default:
                    console.warn("Unknown timeout option", t)
            }
        return this
    }, o.prototype.retry = function(e, t) {
        return (0 == arguments.length || !0 === e) && (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this
    };
    var i = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    o.prototype._shouldRetry = function(e, t) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
        if (this._retryCallback) try {
            var n = this._retryCallback(e, t);
            if (!0 === n) return !0;
            if (!1 === n) return !1
        } catch (e) {
            console.error(e)
        }
        return !!t && !!t.status && !!(t.status >= 500) && 501 !== t.status || !!e && (!!e.code && -1 !== i.indexOf(e.code) || !!e.timeout && "ECONNABORTED" === e.code || !!e.crossDomain) || !1
    }, o.prototype._retry = function() {
        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, o.prototype.then = function(e, t) {
        var n = this;
        if (!this._fullfilledPromise) {
            var r = this;
            this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(e, t) {
                r.on("abort", function() {
                    var e = Error("Aborted");
                    e.code = "ABORTED", e.status = n.status, e.method = n.method, e.url = n.url, t(e)
                }), r.end(function(n, r) {
                    n ? t(n) : e(r)
                })
            })
        }
        return this._fullfilledPromise.then(e, t)
    }, o.prototype.catch = function(e) {
        return this.then(void 0, e)
    }, o.prototype.use = function(e) {
        return e(this), this
    }, o.prototype.ok = function(e) {
        if ("function" != typeof e) throw Error("Callback required");
        return this._okCallback = e, this
    }, o.prototype._isResponseOK = function(e) {
        return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
    }, o.prototype.get = function(e) {
        return this._header[e.toLowerCase()]
    }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function(e, t) {
        if (a(e)) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.set(n, e[n]);
            return this
        }
        return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, o.prototype.unset = function(e) {
        return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, o.prototype.field = function(e, t) {
        if (null == e) throw Error(".field(name, val) name can not be empty");
        if (this._data) throw Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        if (a(e)) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(n, e[n]);
            return this
        }
        if (Array.isArray(t)) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(e, t[r]);
            return this
        }
        if (null == t) throw Error(".field(name, val) val can not be empty");
        return "boolean" == typeof t && (t = String(t)), this._getFormData().append(e, t), this
    }, o.prototype.abort = function() {
        return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, o.prototype._auth = function(e, t, n, r) {
        switch (n.type) {
            case "basic":
                this.set("Authorization", "Basic ".concat(r("".concat(e, ":").concat(t))));
                break;
            case "auto":
                this.username = e, this.password = t;
                break;
            case "bearer":
                this.set("Authorization", "Bearer ".concat(e))
        }
        return this
    }, o.prototype.withCredentials = function(e) {
        return void 0 === e && (e = !0), this._withCredentials = e, this
    }, o.prototype.redirects = function(e) {
        return this._maxRedirects = e, this
    }, o.prototype.maxResponseSize = function(e) {
        if ("number" != typeof e) throw TypeError("Invalid argument");
        return this._maxResponseSize = e, this
    }, o.prototype.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }, o.prototype.send = function(e) {
        var t = a(e),
            n = this._header["content-type"];
        if (this._formData) throw Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        if (t && !this._data) Array.isArray(e) ? this._data = [] : !this._isHost(e) && (this._data = {});
        else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
        if (t && a(this._data))
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (this._data[r] = e[r]);
        else "string" == typeof e ? (!n && this.type("form"), "application/x-www-form-urlencoded" === (n = this._header["content-type"]) ? this._data = this._data ? "".concat(this._data, "&").concat(e) : e : this._data = (this._data || "") + e) : this._data = e;
        return !t || this._isHost(e) ? this : (!n && this.type("json"), this)
    }, o.prototype.sortQuery = function(e) {
        return this._sort = void 0 === e || e, this
    }, o.prototype._finalizeQueryString = function() {
        var e = this._query.join("&");
        if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, this._sort) {
            var t = this.url.indexOf("?");
            if (t >= 0) {
                var n = this.url.substring(t + 1).split("&");
                "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&")
            }
        }
    }, o.prototype._appendQueryString = function() {
        console.warn("Unsupported")
    }, o.prototype._timeoutError = function(e, t, n) {
        if (!this._aborted) {
            var r = Error("".concat(e + t, "ms exceeded"));
            r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
        }
    }, o.prototype._setTimeouts = function() {
        var e = this;
        this._timeout && !this._timer && (this._timer = setTimeout(function() {
            e._timeoutError("Timeout of ", e._timeout, "ETIME")
        }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
            e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
        }, this._responseTimeout))
    }
}