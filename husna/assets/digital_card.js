function toggleNotice(e, t) {
    $("span.notice").html(e).addClass("active"), setTimeout(function() {
        $("span.notice").removeClass("active")
    }, t)
}

function copyToClipboard() {
    toggleNotice("Copied to clipboard", 1200)
}

function like(e) {
    $.ajax({
        url: "/cards/" + e + "/like",
        type: "POST",
        data: {
            id: e
        },
        success: function() {
            $("span.like_count").html(parseInt($("span.like_count").text()) + 1)
        }
    })
}

function removeSVGColor(e) {
    e.removeClass("active")
}

function addSVGColor(e) {
    e.addClass("active")
}

function unselectAllAmounts() {
    $(".btn-gifts-amount").each(function() {
        $(this).removeClass("selected")
    })
}! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ActiveStorage = {})
}(this, function(e) {
    "use strict";

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }

    function n(e) {
        var t = i(document.head, 'meta[name="' + e + '"]');
        if (t) return t.getAttribute("content")
    }

    function r(e, t) {
        return "string" == typeof e && (t = e, e = document), a(e.querySelectorAll(t))
    }

    function i(e, t) {
        return "string" == typeof e && (t = e, e = document), e.querySelector(t)
    }

    function o(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            r = e.disabled,
            i = n.bubbles,
            o = n.cancelable,
            a = n.detail,
            s = document.createEvent("Event");
        s.initEvent(t, i || !0, o || !0), s.detail = a || {};
        try {
            e.disabled = !1, e.dispatchEvent(s)
        } finally {
            e.disabled = r
        }
        return s
    }

    function a(e) {
        return Array.isArray(e) ? e : Array.from ? Array.from(e) : [].slice.call(e)
    }

    function s(e, t) {
        if (e && "function" == typeof e[t]) {
            for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
            return e[t].apply(e, r)
        }
    }

    function u() {
        q || (q = !0, document.addEventListener("click", l, !0), document.addEventListener("submit", c), document.addEventListener("ajax:before", d))
    }

    function l(e) {
        var t = e.target;
        "INPUT" != t.tagName && "BUTTON" != t.tagName || "submit" != t.type || !t.form || j.set(t.form, t)
    }

    function c(e) {
        f(e)
    }

    function d(e) {
        "FORM" == e.target.tagName && f(e)
    }

    function f(e) {
        var t = e.target;
        if (t.hasAttribute(D)) e.preventDefault();
        else {
            var n = new L(t),
                r = n.inputs;
            r.length && (e.preventDefault(), t.setAttribute(D, ""), r.forEach(h), n.start(function(e) {
                t.removeAttribute(D), e ? r.forEach(m) : p(t)
            }))
        }
    }

    function p(e) {
        var t = j.get(e) || i(e, "input[type=submit], button[type=submit]");
        if (t) {
            var n = t.disabled;
            t.disabled = !1, t.focus(), t.click(), t.disabled = n
        } else(t = document.createElement("input")).type = "submit", t.style.display = "none", e.appendChild(t), t.click(), e.removeChild(t);
        j["delete"](e)
    }

    function h(e) {
        e.disabled = !0
    }

    function m(e) {
        e.disabled = !1
    }

    function y() {
        window.ActiveStorage && u()
    }
    var g = t(function(e) {
            var t;
            t = function(e) {
                function t(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3];
                    r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[2] + 606105819 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[6] - 1473231341 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[10] - 42063 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[14] - 1502002290 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[14] - 1416354905 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[10] - 1051523 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[6] - 1560198380 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + i | 0, r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[2] + 718787259 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + i | 0, e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = i + e[2] | 0, e[3] = o + e[3] | 0
                }

                function n(e) {
                    var t, n = [];
                    for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                    return n
                }

                function r(e) {
                    var t, n = [];
                    for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                    return n
                }

                function i(e) {
                    var r, i, o, a, s, u, l = e.length,
                        c = [1732584193, -271733879, -1732584194, 271733878];
                    for (r = 64; r <= l; r += 64) t(c, n(e.substring(r - 64, r)));
                    for (i = (e = e.substring(r - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < i; r += 1) o[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
                    if (o[r >> 2] |= 128 << (r % 4 << 3), r > 55)
                        for (t(c, o), r = 0; r < 16; r += 1) o[r] = 0;
                    return a = (a = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), u = parseInt(a[1], 16) || 0, o[14] = s, o[15] = u, t(c, o), c
                }

                function o(e) {
                    var n, i, o, a, s, u, l = e.length,
                        c = [1732584193, -271733879, -1732584194, 271733878];
                    for (n = 64; n <= l; n += 64) t(c, r(e.subarray(n - 64, n)));
                    for (i = (e = n - 64 < l ? e.subarray(n - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < i; n += 1) o[n >> 2] |= e[n] << (n % 4 << 3);
                    if (o[n >> 2] |= 128 << (n % 4 << 3), n > 55)
                        for (t(c, o), n = 0; n < 16; n += 1) o[n] = 0;
                    return a = (a = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), u = parseInt(a[1], 16) || 0, o[14] = s, o[15] = u, t(c, o), c
                }

                function a(e) {
                    var t, n = "";
                    for (t = 0; t < 4; t += 1) n += h[e >> 8 * t + 4 & 15] + h[e >> 8 * t & 15];
                    return n
                }

                function s(e) {
                    var t;
                    for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
                    return e.join("")
                }

                function u(e) {
                    return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
                }

                function l(e, t) {
                    var n, r = e.length,
                        i = new ArrayBuffer(r),
                        o = new Uint8Array(i);
                    for (n = 0; n < r; n += 1) o[n] = e.charCodeAt(n);
                    return t ? o : i
                }

                function c(e) {
                    return String.fromCharCode.apply(null, new Uint8Array(e))
                }

                function d(e, t, n) {
                    var r = new Uint8Array(e.byteLength + t.byteLength);
                    return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
                }

                function f(e) {
                    var t, n = [],
                        r = e.length;
                    for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                    return String.fromCharCode.apply(String, n)
                }

                function p() {
                    this.reset()
                }
                var h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                return s(i("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                    function t(e, t) {
                        return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                    }
                    ArrayBuffer.prototype.slice = function(n, r) {
                        var i, o, a, s, u = this.byteLength,
                            l = t(n, u),
                            c = u;
                        return r !== e && (c = t(r, u)), l > c ? new ArrayBuffer(0) : (i = c - l, o = new ArrayBuffer(i), a = new Uint8Array(o), s = new Uint8Array(this, l, i), a.set(s), o)
                    }
                }(), p.prototype.append = function(e) {
                    return this.appendBinary(u(e)), this
                }, p.prototype.appendBinary = function(e) {
                    this._buff += e, this._length += e.length;
                    var r, i = this._buff.length;
                    for (r = 64; r <= i; r += 64) t(this._hash, n(this._buff.substring(r - 64, r)));
                    return this._buff = this._buff.substring(r - 64), this
                }, p.prototype.end = function(e) {
                    var t, n, r = this._buff,
                        i = r.length,
                        o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (t = 0; t < i; t += 1) o[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                    return this._finish(o, i), n = s(this._hash), e && (n = f(n)), this.reset(), n
                }, p.prototype.reset = function() {
                    return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, p.prototype.getState = function() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash
                    }
                }, p.prototype.setState = function(e) {
                    return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
                }, p.prototype.destroy = function() {
                    delete this._hash, delete this._buff, delete this._length
                }, p.prototype._finish = function(e, n) {
                    var r, i, o, a = n;
                    if (e[a >> 2] |= 128 << (a % 4 << 3), a > 55)
                        for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
                    r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(r[2], 16), o = parseInt(r[1], 16) || 0, e[14] = i, e[15] = o, t(this._hash, e)
                }, p.hash = function(e, t) {
                    return p.hashBinary(u(e), t)
                }, p.hashBinary = function(e, t) {
                    var n = s(i(e));
                    return t ? f(n) : n
                }, p.ArrayBuffer = function() {
                    this.reset()
                }, p.ArrayBuffer.prototype.append = function(e) {
                    var n, i = d(this._buff.buffer, e, !0),
                        o = i.length;
                    for (this._length += e.byteLength, n = 64; n <= o; n += 64) t(this._hash, r(i.subarray(n - 64, n)));
                    return this._buff = n - 64 < o ? new Uint8Array(i.buffer.slice(n - 64)) : new Uint8Array(0), this
                }, p.ArrayBuffer.prototype.end = function(e) {
                    var t, n, r = this._buff,
                        i = r.length,
                        o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (t = 0; t < i; t += 1) o[t >> 2] |= r[t] << (t % 4 << 3);
                    return this._finish(o, i), n = s(this._hash), e && (n = f(n)), this.reset(), n
                }, p.ArrayBuffer.prototype.reset = function() {
                    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, p.ArrayBuffer.prototype.getState = function() {
                    var e = p.prototype.getState.call(this);
                    return e.buff = c(e.buff), e
                }, p.ArrayBuffer.prototype.setState = function(e) {
                    return e.buff = l(e.buff, !0), p.prototype.setState.call(this, e)
                }, p.ArrayBuffer.prototype.destroy = p.prototype.destroy, p.ArrayBuffer.prototype._finish = p.prototype._finish, p.ArrayBuffer.hash = function(e, t) {
                    var n = s(o(new Uint8Array(e)));
                    return t ? f(n) : n
                }, p
            }, e.exports = t()
        }),
        v = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        b = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        x = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        w = function() {
            function e(t) {
                v(this, e), this.file = t, this.chunkSize = 2097152, this.chunkCount = Math.ceil(this.file.size / this.chunkSize), this.chunkIndex = 0
            }
            return b(e, null, [{
                key: "create",
                value: function(t, n) {
                    new e(t).create(n)
                }
            }]), b(e, [{
                key: "create",
                value: function(e) {
                    var t = this;
                    this.callback = e, this.md5Buffer = new g.ArrayBuffer, this.fileReader = new FileReader, this.fileReader.addEventListener("load", function(e) {
                        return t.fileReaderDidLoad(e)
                    }), this.fileReader.addEventListener("error", function(e) {
                        return t.fileReaderDidError(e)
                    }), this.readNextChunk()
                }
            }, {
                key: "fileReaderDidLoad",
                value: function(e) {
                    if (this.md5Buffer.append(e.target.result), !this.readNextChunk()) {
                        var t = this.md5Buffer.end(!0),
                            n = btoa(t);
                        this.callback(null, n)
                    }
                }
            }, {
                key: "fileReaderDidError",
                value: function() {
                    this.callback("Error reading " + this.file.name)
                }
            }, {
                key: "readNextChunk",
                value: function() {
                    if (this.chunkIndex < this.chunkCount || 0 == this.chunkIndex && 0 == this.chunkCount) {
                        var e = this.chunkIndex * this.chunkSize,
                            t = Math.min(e + this.chunkSize, this.file.size),
                            n = x.call(this.file, e, t);
                        return this.fileReader.readAsArrayBuffer(n), this.chunkIndex++, !0
                    }
                    return !1
                }
            }]), e
        }(),
        E = function() {
            function e(t, r, i) {
                var o = this;
                v(this, e), this.file = t, this.attributes = {
                    filename: t.name,
                    content_type: t.type,
                    byte_size: t.size,
                    checksum: r
                }, this.xhr = new XMLHttpRequest, this.xhr.open("POST", i, !0), this.xhr.responseType = "json", this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.setRequestHeader("Accept", "application/json"), this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this.xhr.setRequestHeader("X-CSRF-Token", n("csrf-token")), this.xhr.addEventListener("load", function(e) {
                    return o.requestDidLoad(e)
                }), this.xhr.addEventListener("error", function(e) {
                    return o.requestDidError(e)
                })
            }
            return b(e, [{
                key: "create",
                value: function(e) {
                    this.callback = e, this.xhr.send(JSON.stringify({
                        blob: this.attributes
                    }))
                }
            }, {
                key: "requestDidLoad",
                value: function(e) {
                    if (this.status >= 200 && this.status < 300) {
                        var t = this.response,
                            n = t.direct_upload;
                        delete t.direct_upload, this.attributes = t, this.directUploadData = n, this.callback(null, this.toJSON())
                    } else this.requestDidError(e)
                }
            }, {
                key: "requestDidError",
                value: function() {
                    this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status)
                }
            }, {
                key: "toJSON",
                value: function() {
                    var e = {};
                    for (var t in this.attributes) e[t] = this.attributes[t];
                    return e
                }
            }, {
                key: "status",
                get: function() {
                    return this.xhr.status
                }
            }, {
                key: "response",
                get: function() {
                    var e = this.xhr,
                        t = e.responseType,
                        n = e.response;
                    return "json" == t ? n : JSON.parse(n)
                }
            }]), e
        }(),
        S = function() {
            function e(t) {
                var n = this;
                v(this, e), this.blob = t, this.file = t.file;
                var r = t.directUploadData,
                    i = r.url,
                    o = r.headers;
                for (var a in this.xhr = new XMLHttpRequest, this.xhr.open("PUT", i, !0), this.xhr.responseType = "text", o) this.xhr.setRequestHeader(a, o[a]);
                this.xhr.addEventListener("load", function(e) {
                    return n.requestDidLoad(e)
                }), this.xhr.addEventListener("error", function(e) {
                    return n.requestDidError(e)
                })
            }
            return b(e, [{
                key: "create",
                value: function(e) {
                    this.callback = e, this.xhr.send(this.file.slice())
                }
            }, {
                key: "requestDidLoad",
                value: function(e) {
                    var t = this.xhr,
                        n = t.status,
                        r = t.response;
                    n >= 200 && n < 300 ? this.callback(null, r) : this.requestDidError(e)
                }
            }, {
                key: "requestDidError",
                value: function() {
                    this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status)
                }
            }]), e
        }(),
        C = 0,
        k = function() {
            function e(t, n, r) {
                v(this, e), this.id = ++C, this.file = t, this.url = n, this.delegate = r
            }
            return b(e, [{
                key: "create",
                value: function(e) {
                    var t = this;
                    w.create(this.file, function(n, r) {
                        if (n) e(n);
                        else {
                            var i = new E(t.file, r, t.url);
                            s(t.delegate, "directUploadWillCreateBlobWithXHR", i.xhr), i.create(function(n) {
                                if (n) e(n);
                                else {
                                    var r = new S(i);
                                    s(t.delegate, "directUploadWillStoreFileWithXHR", r.xhr), r.create(function(t) {
                                        t ? e(t) : e(null, i.toJSON())
                                    })
                                }
                            })
                        }
                    })
                }
            }]), e
        }(),
        T = function() {
            function e(t, n) {
                v(this, e), this.input = t, this.file = n, this.directUpload = new k(this.file, this.url, this), this.dispatch("initialize")
            }
            return b(e, [{
                key: "start",
                value: function(e) {
                    var t = this,
                        n = document.createElement("input");
                    n.type = "hidden", n.name = this.input.name, this.input.insertAdjacentElement("beforebegin", n), this.dispatch("start"), this.directUpload.create(function(r, i) {
                        r ? (n.parentNode.removeChild(n), t.dispatchError(r)) : n.value = i.signed_id, t.dispatch("end"), e(r)
                    })
                }
            }, {
                key: "uploadRequestDidProgress",
                value: function(e) {
                    var t = e.loaded / e.total * 100;
                    t && this.dispatch("progress", {
                        progress: t
                    })
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return t.file = this.file, t.id = this.directUpload.id, o(this.input, "direct-upload:" + e, {
                        detail: t
                    })
                }
            }, {
                key: "dispatchError",
                value: function(e) {
                    this.dispatch("error", {
                        error: e
                    }).defaultPrevented || alert(e)
                }
            }, {
                key: "directUploadWillCreateBlobWithXHR",
                value: function(e) {
                    this.dispatch("before-blob-request", {
                        xhr: e
                    })
                }
            }, {
                key: "directUploadWillStoreFileWithXHR",
                value: function(e) {
                    var t = this;
                    this.dispatch("before-storage-request", {
                        xhr: e
                    }), e.upload.addEventListener("progress", function(e) {
                        return t.uploadRequestDidProgress(e)
                    })
                }
            }, {
                key: "url",
                get: function() {
                    return this.input.getAttribute("data-direct-upload-url")
                }
            }]), e
        }(),
        A = "input[type=file][data-direct-upload-url]:not([disabled])",
        L = function() {
            function e(t) {
                v(this, e), this.form = t, this.inputs = r(t, A).filter(function(e) {
                    return e.files.length
                })
            }
            return b(e, [{
                key: "start",
                value: function(e) {
                    var t = this,
                        n = this.createDirectUploadControllers(),
                        r = function i() {
                            var r = n.shift();
                            r ? r.start(function(n) {
                                n ? (e(n), t.dispatch("end")) : i()
                            }) : (e(), t.dispatch("end"))
                        };
                    this.dispatch("start"), r()
                }
            }, {
                key: "createDirectUploadControllers",
                value: function() {
                    var e = [];
                    return this.inputs.forEach(function(t) {
                        a(t.files).forEach(function(n) {
                            var r = new T(t, n);
                            e.push(r)
                        })
                    }), e
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return o(this.form, "direct-uploads:" + e, {
                        detail: t
                    })
                }
            }]), e
        }(),
        D = "data-direct-uploads-processing",
        j = new WeakMap,
        q = !1;
    setTimeout(y, 1), e.start = u, e.DirectUpload = k, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function() {
    var e = this;
    (function() {
        (function() {
            this.Rails = {
                linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                buttonClickSelector: {
                    selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                    exclude: "form button"
                },
                inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                formSubmitSelector: "form",
                formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                fileInputSelector: "input[name][type=file]:not([disabled])",
                linkDisableSelector: "a[data-disable-with], a[data-disable]",
                buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
            }
        }).call(this)
    }).call(e);
    var t = e.Rails;
    (function() {
        (function() {
            var e;
            e = null, t.loadCSPNonce = function() {
                var t;
                return e = null != (t = document.querySelector("meta[name=csp-nonce]")) ? t.content : void 0
            }, t.cspNonce = function() {
                return null != e ? e : t.loadCSPNonce()
            }
        }).call(this),
            function() {
                var e, n;
                n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, t.matches = function(e, t) {
                    return null != t.exclude ? n.call(e, t.selector) && !n.call(e, t.exclude) : n.call(e, t)
                }, e = "_ujsData", t.getData = function(t, n) {
                    var r;
                    return null != (r = t[e]) ? r[n] : void 0
                }, t.setData = function(t, n, r) {
                    return null == t[e] && (t[e] = {}), t[e][n] = r
                }, t.$ = function(e) {
                    return Array.prototype.slice.call(document.querySelectorAll(e))
                }
            }.call(this),
            function() {
                var e, n, r;
                e = t.$, r = t.csrfToken = function() {
                    var e;
                    return (e = document.querySelector("meta[name=csrf-token]")) && e.content
                }, n = t.csrfParam = function() {
                    var e;
                    return (e = document.querySelector("meta[name=csrf-param]")) && e.content
                }, t.CSRFProtection = function(e) {
                    var t;
                    if (null != (t = r())) return e.setRequestHeader("X-CSRF-Token", t)
                }, t.refreshCSRFTokens = function() {
                    var t, i;
                    if (i = r(), t = n(), null != i && null != t) return e('form input[name="' + t + '"]').forEach(function(e) {
                        return e.value = i
                    })
                }
            }.call(this),
            function() {
                var e, n, r, i;
                r = t.matches, "function" != typeof(e = window.CustomEvent) && ((e = function(e, t) {
                    var n;
                    return (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }).prototype = window.Event.prototype, i = e.prototype.preventDefault, e.prototype.preventDefault = function() {
                    var e;
                    return e = i.call(this), this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                        get: function() {
                            return !0
                        }
                    }), e
                }), n = t.fire = function(t, n, r) {
                    var i;
                    return i = new e(n, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: r
                    }), t.dispatchEvent(i), !i.defaultPrevented
                }, t.stopEverything = function(e) {
                    return n(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                }, t.delegate = function(e, t, n, i) {
                    return e.addEventListener(n, function(e) {
                        var n;
                        for (n = e.target; n instanceof Element && !r(n, t);) n = n.parentNode;
                        if (n instanceof Element && !1 === i.call(n, e)) return e.preventDefault(), e.stopPropagation()
                    })
                }
            }.call(this),
            function() {
                var e, n, r, i, o, a;
                i = t.cspNonce, n = t.CSRFProtection, t.fire, e = {
                    "*": "*/*",
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                }, t.ajax = function(e) {
                    var t;
                    return e = o(e), t = r(e, function() {
                        var n, r;
                        return r = a(null != (n = t.response) ? n : t.responseText, t.getResponseHeader("Content-Type")), 2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(r, t.statusText, t) : "function" == typeof e.error && e.error(r, t.statusText, t), "function" == typeof e.complete ? e.complete(t, t.statusText) : void 0
                    }), !(null != e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0)
                }, o = function(t) {
                    return t.url = t.url || location.href, t.type = t.type.toUpperCase(), "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data), null == e[t.dataType] && (t.dataType = "*"), t.accept = e[t.dataType], "*" !== t.dataType && (t.accept += ", */*; q=0.01"), t
                }, r = function(e, t) {
                    var r;
                    return (r = new XMLHttpRequest).open(e.type, e.url, !0), r.setRequestHeader("Accept", e.accept), "string" == typeof e.data && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n(r), r.withCredentials = !!e.withCredentials, r.onreadystatechange = function() {
                        if (r.readyState === XMLHttpRequest.DONE) return t(r)
                    }, r
                }, a = function(e, t) {
                    var n, r;
                    if ("string" == typeof e && "string" == typeof t)
                        if (t.match(/\bjson\b/)) try {
                                e = JSON.parse(e)
                            } catch (o) {} else if (t.match(/\b(?:java|ecma)script\b/))(r = document.createElement("script")).setAttribute("nonce", i()), r.text = e, document.head.appendChild(r).parentNode.removeChild(r);
                            else if (t.match(/\b(xml|html|svg)\b/)) {
                        n = new DOMParser, t = t.replace(/;.+/, "");
                        try {
                            e = n.parseFromString(e, t)
                        } catch (o) {}
                    }
                    return e
                }, t.href = function(e) {
                    return e.href
                }, t.isCrossDomain = function(e) {
                    var t, n;
                    (t = document.createElement("a")).href = location.href, n = document.createElement("a");
                    try {
                        return n.href = e, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                    } catch (r) {
                        return r, !0
                    }
                }
            }.call(this),
            function() {
                var e, n;
                e = t.matches, n = function(e) {
                    return Array.prototype.slice.call(e)
                }, t.serializeElement = function(t, r) {
                    var i, o;
                    return i = [t], e(t, "form") && (i = n(t.elements)), o = [], i.forEach(function(t) {
                        if (t.name && !t.disabled) return e(t, "select") ? n(t.options).forEach(function(e) {
                            if (e.selected) return o.push({
                                name: t.name,
                                value: e.value
                            })
                        }) : t.checked || -1 === ["radio", "checkbox", "submit"].indexOf(t.type) ? o.push({
                            name: t.name,
                            value: t.value
                        }) : void 0
                    }), r && o.push(r), o.map(function(e) {
                        return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e
                    }).join("&")
                }, t.formElements = function(t, r) {
                    return e(t, "form") ? n(t.elements).filter(function(t) {
                        return e(t, r)
                    }) : n(t.querySelectorAll(r))
                }
            }.call(this),
            function() {
                var e, n, r;
                n = t.fire, r = t.stopEverything, t.handleConfirm = function(t) {
                    if (!e(this)) return r(t)
                }, e = function(e) {
                    var t, r, i;
                    if (!(i = e.getAttribute("data-confirm"))) return !0;
                    if (t = !1, n(e, "confirm")) {
                        try {
                            t = confirm(i)
                        } catch (o) {}
                        r = n(e, "confirm:complete", [t])
                    }
                    return t && r
                }
            }.call(this),
            function() {
                var e, n, r, i, o, a, s, u, l, c, d;
                l = t.matches, u = t.getData, c = t.setData, d = t.stopEverything, s = t.formElements, t.handleDisabledElement = function(e) {
                    if (this.disabled) return d(e)
                }, t.enableElement = function(e) {
                    var n;
                    return n = e instanceof Event ? e.target : e, l(n, t.linkDisableSelector) ? a(n) : l(n, t.buttonDisableSelector) || l(n, t.formEnableSelector) ? i(n) : l(n, t.formSubmitSelector) ? o(n) : void 0
                }, t.disableElement = function(i) {
                    var o;
                    return o = i instanceof Event ? i.target : i, l(o, t.linkDisableSelector) ? r(o) : l(o, t.buttonDisableSelector) || l(o, t.formDisableSelector) ? e(o) : l(o, t.formSubmitSelector) ? n(o) : void 0
                }, r = function(e) {
                    var t;
                    return null != (t = e.getAttribute("data-disable-with")) && (c(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t), e.addEventListener("click", d), c(e, "ujs:disabled", !0)
                }, a = function(e) {
                    var t;
                    return null != (t = u(e, "ujs:enable-with")) && (e.innerHTML = t, c(e, "ujs:enable-with", null)), e.removeEventListener("click", d), c(e, "ujs:disabled", null)
                }, n = function(n) {
                    return s(n, t.formDisableSelector).forEach(e)
                }, e = function(e) {
                    var t;
                    return null != (t = e.getAttribute("data-disable-with")) && (l(e, "button") ? (c(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t) : (c(e, "ujs:enable-with", e.value), e.value = t)), e.disabled = !0, c(e, "ujs:disabled", !0)
                }, o = function(e) {
                    return s(e, t.formEnableSelector).forEach(i)
                }, i = function(e) {
                    var t;
                    return null != (t = u(e, "ujs:enable-with")) && (l(e, "button") ? e.innerHTML = t : e.value = t, c(e, "ujs:enable-with", null)), e.disabled = !1, c(e, "ujs:disabled", null)
                }
            }.call(this),
            function() {
                var e;
                e = t.stopEverything, t.handleMethod = function(n) {
                    var r, i, o, a, s, u, l;
                    if (l = (u = this).getAttribute("data-method")) return s = t.href(u), i = t.csrfToken(), r = t.csrfParam(), o = document.createElement("form"), a = "<input name='_method' value='" + l + "' type='hidden' />", null == r || null == i || t.isCrossDomain(s) || (a += "<input name='" + r + "' value='" + i + "' type='hidden' />"), a += '<input type="submit" />', o.method = "post", o.action = s, o.target = u.target, o.innerHTML = a, o.style.display = "none", document.body.appendChild(o), o.querySelector('[type="submit"]').click(), e(n)
                }
            }.call(this),
            function() {
                var e, n, r, i, o, a, s, u, l, c = [].slice;
                a = t.matches, r = t.getData, u = t.setData, n = t.fire, l = t.stopEverything, e = t.ajax, i = t.isCrossDomain, s = t.serializeElement, o = function(e) {
                    var t;
                    return null != (t = e.getAttribute("data-remote")) && "false" !== t
                }, t.handleRemote = function(d) {
                    var f, p, h, m, y, g, v;
                    return !o(m = this) || (n(m, "ajax:before") ? (v = m.getAttribute("data-with-credentials"), h = m.getAttribute("data-type") || "script", a(m, t.formSubmitSelector) ? (f = r(m, "ujs:submit-button"), y = r(m, "ujs:submit-button-formmethod") || m.method, g = r(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href, "GET" === y.toUpperCase() && (g = g.replace(/\?.*$/, "")), "multipart/form-data" === m.enctype ? (p = new FormData(m), null != f && p.append(f.name, f.value)) : p = s(m, f), u(m, "ujs:submit-button", null), u(m, "ujs:submit-button-formmethod", null), u(m, "ujs:submit-button-formaction", null)) : a(m, t.buttonClickSelector) || a(m, t.inputChangeSelector) ? (y = m.getAttribute("data-method"), g = m.getAttribute("data-url"), p = s(m, m.getAttribute("data-params"))) : (y = m.getAttribute("data-method"), g = t.href(m), p = m.getAttribute("data-params")), e({
                        type: y || "GET",
                        url: g,
                        data: p,
                        dataType: h,
                        beforeSend: function(e, t) {
                            return n(m, "ajax:beforeSend", [e, t]) ? n(m, "ajax:send", [e]) : (n(m, "ajax:stopped"), !1)
                        },
                        success: function() {
                            var e;
                            return e = 1 <= arguments.length ? c.call(arguments, 0) : [], n(m, "ajax:success", e)
                        },
                        error: function() {
                            var e;
                            return e = 1 <= arguments.length ? c.call(arguments, 0) : [], n(m, "ajax:error", e)
                        },
                        complete: function() {
                            var e;
                            return e = 1 <= arguments.length ? c.call(arguments, 0) : [], n(m, "ajax:complete", e)
                        },
                        crossDomain: i(g),
                        withCredentials: null != v && "false" !== v
                    }), l(d)) : (n(m, "ajax:stopped"), !1))
                }, t.formSubmitButtonClick = function() {
                    var e, t;
                    if (t = (e = this).form) return e.name && u(t, "ujs:submit-button", {
                        name: e.name,
                        value: e.value
                    }), u(t, "ujs:formnovalidate-button", e.formNoValidate), u(t, "ujs:submit-button-formaction", e.getAttribute("formaction")), u(t, "ujs:submit-button-formmethod", e.getAttribute("formmethod"))
                }, t.preventInsignificantClick = function(e) {
                    var t, n, r, i;
                    if (i = ((r = this).getAttribute("data-method") || "GET").toUpperCase(), t = r.getAttribute("data-params"), n = (e.metaKey || e.ctrlKey) && "GET" === i && !t, !(0 === e.button) || n) return e.stopImmediatePropagation()
                }
            }.call(this),
            function() {
                var e, n, r, i, o, a, s, u, l, c, d, f, p, h, m;
                if (a = t.fire, r = t.delegate, u = t.getData, e = t.$, m = t.refreshCSRFTokens, n = t.CSRFProtection, p = t.loadCSPNonce, o = t.enableElement, i = t.disableElement, c = t.handleDisabledElement, l = t.handleConfirm, h = t.preventInsignificantClick, f = t.handleRemote, s = t.formSubmitButtonClick, d = t.handleMethod, "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
                    if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                    jQuery.rails = t, jQuery.ajaxPrefilter(function(e, t, r) {
                        if (!e.crossDomain) return n(r)
                    })
                }
                t.start = function() {
                    if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
                    return window.addEventListener("pageshow", function() {
                        return e(t.formEnableSelector).forEach(function(e) {
                            if (u(e, "ujs:disabled")) return o(e)
                        }), e(t.linkDisableSelector).forEach(function(e) {
                            if (u(e, "ujs:disabled")) return o(e)
                        })
                    }), r(document, t.linkDisableSelector, "ajax:complete", o), r(document, t.linkDisableSelector, "ajax:stopped", o), r(document, t.buttonDisableSelector, "ajax:complete", o), r(document, t.buttonDisableSelector, "ajax:stopped", o), r(document, t.linkClickSelector, "click", h), r(document, t.linkClickSelector, "click", c), r(document, t.linkClickSelector, "click", l), r(document, t.linkClickSelector, "click", i), r(document, t.linkClickSelector, "click", f), r(document, t.linkClickSelector, "click", d), r(document, t.buttonClickSelector, "click", h), r(document, t.buttonClickSelector, "click", c), r(document, t.buttonClickSelector, "click", l), r(document, t.buttonClickSelector, "click", i), r(document, t.buttonClickSelector, "click", f), r(document, t.inputChangeSelector, "change", c), r(document, t.inputChangeSelector, "change", l), r(document, t.inputChangeSelector, "change", f), r(document, t.formSubmitSelector, "submit", c), r(document, t.formSubmitSelector, "submit", l), r(document, t.formSubmitSelector, "submit", f), r(document, t.formSubmitSelector, "submit", function(e) {
                        return setTimeout(function() {
                            return i(e)
                        }, 13)
                    }), r(document, t.formSubmitSelector, "ajax:send", i), r(document, t.formSubmitSelector, "ajax:complete", o), r(document, t.formInputClickSelector, "click", h), r(document, t.formInputClickSelector, "click", c), r(document, t.formInputClickSelector, "click", l), r(document, t.formInputClickSelector, "click", s), document.addEventListener("DOMContentLoaded", m), document.addEventListener("DOMContentLoaded", p), window._rails_loaded = !0
                }, window.Rails === t && a(document, "rails:attachBindings") && t.start()
            }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}.call(this),
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t, n) {
            var r, i = (t = t || ae).createElement("script");
            if (i.text = e, n)
                for (r in xe) n[r] && (i[r] = n[r]);
            t.head.appendChild(i).parentNode.removeChild(i)
        }

        function r(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[pe.call(e)] || "object" : typeof e
        }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = r(e);
            return !ve(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function o(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function a(e, t, n) {
            return ve(t) ? Ee.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? Ee.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? Ee.grep(e, function(e) {
                return de.call(t, e) > -1 !== n
            }) : Ee.filter(t, e, n)
        }

        function s(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function u(e) {
            var t = {};
            return Ee.each(e.match(Pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function l(e) {
            return e
        }

        function c(e) {
            throw e
        }

        function d(e, t, n, r) {
            var i;
            try {
                e && ve(i = e.promise) ? i.call(e).done(t).fail(n) : e && ve(i = e.then) ? i.call(e, t, n) : t.apply(undefined, [e].slice(r))
            } catch (e) {
                n.apply(undefined, [e])
            }
        }

        function f() {
            ae.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), Ee.ready()
        }

        function p(e, t) {
            return t.toUpperCase()
        }

        function h(e) {
            return e.replace(Be, "ms-").replace(Me, p)
        }

        function m() {
            this.expando = Ee.expando + m.uid++
        }

        function y(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : _e.test(e) ? JSON.parse(e) : e)
        }

        function g(e, t, n) {
            var r;
            if (n === undefined && 1 === e.nodeType)
                if (r = "data-" + t.replace(We, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = y(n)
                    } catch (i) {}
                    Oe.set(e, t, n)
                } else n = undefined;
            return n
        }

        function v(e, t, n, r) {
            var i, o, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return Ee.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (Ee.cssNumber[t] ? "" : "px"),
                c = (Ee.cssNumber[t] || "px" !== l && +u) && Ve.exec(Ee.css(e, t));
            if (c && c[3] !== l) {
                for (u /= 2, l = l || c[3], c = +u || 1; a--;) Ee.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, Ee.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function b(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = Ke[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = Ee.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ke[r] = i, i)
        }

        function x(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = $e.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Xe(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", $e.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }

        function w(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], t === undefined || t && o(e, t) ? Ee.merge([e], n) : n
        }

        function E(e, t) {
            for (var n = 0, r = e.length; n < r; n++) $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval"))
        }

        function S(e, t, n, i, o) {
            for (var a, s, u, l, c, d, f = t.createDocumentFragment(), p = [], h = 0, m = e.length; h < m; h++)
                if ((a = e[h]) || 0 === a)
                    if ("object" === r(a)) Ee.merge(p, a.nodeType ? [a] : a);
                    else if (nt.test(a)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (Qe.exec(a) || ["", ""])[1].toLowerCase(), l = Ze[u] || Ze._default, s.innerHTML = l[1] + Ee.htmlPrefilter(a) + l[2], d = l[0]; d--;) s = s.lastChild;
                Ee.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
            } else p.push(t.createTextNode(a));
            for (f.textContent = "", h = 0; a = p[h++];)
                if (i && Ee.inArray(a, i) > -1) o && o.push(a);
                else if (c = Ee.contains(a.ownerDocument, a), s = w(f.appendChild(a), "script"), c && E(s), n)
                for (d = 0; a = s[d++];) Ye.test(a.type || "") && n.push(a);
            return f
        }

        function C() {
            return !0
        }

        function k() {
            return !1
        }

        function T() {
            try {
                return ae.activeElement
            } catch (e) {}
        }

        function A(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = undefined), t) A(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = k;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return Ee().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = Ee.guid++)), e.each(function() {
                Ee.event.add(this, t, i, r, n)
            })
        }

        function L(e, t) {
            return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && Ee(e).children("tbody")[0] || e
        }

        function D(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function j(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function q(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
                if ($e.hasData(e) && (o = $e.access(e), a = $e.set(t, o), l = o.events))
                    for (i in delete a.handle, a.events = {}, l)
                        for (n = 0, r = l[i].length; n < r; n++) Ee.event.add(t, i, l[i][n]);
                Oe.hasData(e) && (s = Oe.access(e), u = Ee.extend({}, s), Oe.set(t, u))
            }
        }

        function R(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function P(e, t, r, i) {
            t = le.apply([], t);
            var o, a, s, u, l, c, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = ve(h);
            if (m || f > 1 && "string" == typeof h && !ge.checkClone && lt.test(h)) return e.each(function(n) {
                var o = e.eq(n);
                m && (t[0] = h.call(this, n, o.html())), P(o, t, r, i)
            });
            if (f && (a = (o = S(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
                for (u = (s = Ee.map(w(o, "script"), D)).length; d < f; d++) l = o, d !== p && (l = Ee.clone(l, !0, !0), u && Ee.merge(s, w(l, "script"))), r.call(e[d], l, d);
                if (u)
                    for (c = s[s.length - 1].ownerDocument, Ee.map(s, j), d = 0; d < u; d++) l = s[d], Ye.test(l.type || "") && !$e.access(l, "globalEval") && Ee.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Ee._evalUrl && Ee._evalUrl(l.src) : n(l.textContent.replace(ct, ""), c, l))
            }
            return e
        }

        function N(e, t, n) {
            for (var r, i = t ? Ee.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Ee.cleanData(w(r)), r.parentNode && (n && Ee.contains(r.ownerDocument, r) && E(w(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function H(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || ft(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || Ee.contains(e.ownerDocument, e) || (a = Ee.style(e, t)), !ge.pixelBoxStyles() && dt.test(a) && pt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), a !== undefined ? a + "" : a
        }

        function I(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function B(e) {
            if (e in bt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
                if ((e = vt[n] + t) in bt) return e
        }

        function M(e) {
            var t = Ee.cssProps[e];
            return t || (t = Ee.cssProps[e] = B(e) || e), t
        }

        function F(e, t, n) {
            var r = Ve.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function $(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += Ee.css(e, n + ze[a], !0, i)), r ? ("content" === n && (u -= Ee.css(e, "padding" + ze[a], !0, i)), "margin" !== n && (u -= Ee.css(e, "border" + ze[a] + "Width", !0, i))) : (u += Ee.css(e, "padding" + ze[a], !0, i), "padding" !== n ? u += Ee.css(e, "border" + ze[a] + "Width", !0, i) : s += Ee.css(e, "border" + ze[a] + "Width", !0, i));
            return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
        }

        function O(e, t, n) {
            var r = ft(e),
                i = H(e, t, r),
                o = "border-box" === Ee.css(e, "boxSizing", !1, r),
                a = o;
            if (dt.test(i)) {
                if (!n) return i;
                i = "auto"
            }
            return a = a && (ge.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === Ee.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + $(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        }

        function _(e, t, n, r, i) {
            return new _.prototype.init(e, t, n, r, i)
        }

        function W() {
            wt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, Ee.fx.interval), Ee.fx.tick())
        }

        function U() {
            return e.setTimeout(function() {
                xt = undefined
            }), xt = Date.now()
        }

        function V(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ze[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function z(e, t, n) {
            for (var r, i = (K.tweeners[t] || []).concat(K.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function X(e, t, n) {
            var r, i, o, a, s, u, l, c, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && Xe(e),
                y = $e.get(e, "fxshow");
            for (r in n.queue || (null == (a = Ee._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, Ee.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], Et.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !y || y[r] === undefined) continue;
                        m = !0
                    }
                    p[r] = y && y[r] || Ee.style(e, r)
                } if ((u = !Ee.isEmptyObject(t)) || !Ee.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = $e.get(e, "display")), "none" === (c = Ee.css(e, "display")) && (l ? c = l : (x([e], !0), l = e.style.display || l, c = Ee.css(e, "display"), x([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Ee.css(e, "float") && (u || (f.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, p) u || (y ? "hidden" in y && (m = y.hidden) : y = $e.access(e, "fxshow", {
                    display: l
                }), o && (y.hidden = !m), m && x([e], !0), f.done(function() {
                    for (r in m || x([e]), $e.remove(e, "fxshow"), p) Ee.style(e, r, p[r])
                })), u = z(m ? y[r] : 0, r, f), r in y || (y[r] = u.start, m && (u.end = u.start, u.start = 0))
        }

        function G(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = h(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Ee.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                else t[r] = i
        }

        function K(e, t, n) {
            var r, i, o = 0,
                a = K.prefilters.length,
                s = Ee.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = xt || U(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                    return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: Ee.extend({}, t),
                    opts: Ee.extend(!0, {
                        specialEasing: {},
                        easing: Ee.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: xt || U(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = Ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (G(c, l.opts.specialEasing); o < a; o++)
                if (r = K.prefilters[o].call(l, e, c, l.opts)) return ve(r.stop) && (Ee._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return Ee.map(c, z, l), ve(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ee.fx.timer(Ee.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }

        function J(e) {
            return (e.match(Pe) || []).join(" ")
        }

        function Q(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Y(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(Pe) || []
        }

        function Z(e, t, n, i) {
            var o;
            if (Array.isArray(t)) Ee.each(t, function(t, r) {
                n || Nt.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== r(t)) i(e, t);
            else
                for (o in t) Z(e + "[" + o + "]", t[o], n, i)
        }

        function ee(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(Pe) || [];
                if (ve(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function te(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, Ee.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }), u
            }
            var o = {},
                a = e === zt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function ne(e, t) {
            var n, r, i = Ee.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && Ee.extend(!0, e, r), e
        }

        function re(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in s)
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    } if (u[0] in n) o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function ie(e, t, n, r) {
            var i, o, a, s, u, l = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o]))
                    for (i in l)
                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        } if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var oe = [],
            ae = e.document,
            se = Object.getPrototypeOf,
            ue = oe.slice,
            le = oe.concat,
            ce = oe.push,
            de = oe.indexOf,
            fe = {},
            pe = fe.toString,
            he = fe.hasOwnProperty,
            me = he.toString,
            ye = me.call(Object),
            ge = {},
            ve = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            be = function(e) {
                return null != e && e === e.window
            },
            xe = {
                type: !0,
                src: !0,
                noModule: !0
            },
            we = "3.3.1",
            Ee = function(e, t) {
                return new Ee.fn.init(e, t)
            },
            Se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Ee.fn = Ee.prototype = {
            jquery: we,
            constructor: Ee,
            length: 0,
            toArray: function() {
                return ue.call(this)
            },
            get: function(e) {
                return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = Ee.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return Ee.each(this, e)
            },
            map: function(e) {
                return this.pushStack(Ee.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ue.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: oe.sort,
            splice: oe.splice
        }, Ee.extend = Ee.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ve(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (Ee.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && Ee.isPlainObject(n) ? n : {}, a[t] = Ee.extend(l, o, r)) : r !== undefined && (a[t] = r));
            return a
        }, Ee.extend({
            expando: "jQuery" + (we + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== pe.call(e)) && (!(t = se(e)) || "function" == typeof(n = he.call(t, "constructor") && t.constructor) && me.call(n) === ye)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                n(e)
            },
            each: function(e, t) {
                var n, r = 0;
                if (i(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(Se, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? Ee.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : de.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, o, a = 0,
                    s = [];
                if (i(e))
                    for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
                return le.apply([], s)
            },
            guid: 1,
            support: ge
        }), "function" == typeof Symbol && (Ee.fn[Symbol.iterator] = oe[Symbol.iterator]), Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            fe["[object " + t + "]"] = t.toLowerCase()
        });
        var Ce =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, l, c, f = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                    if (!r && ((t ? t.ownerDocument || t : O) !== P && R(t), t = t || P, H)) {
                        if (11 !== h && (u = ge.exec(e)))
                            if (i = u[1]) {
                                if (9 === h) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return n.push(a), n
                                } else if (f && (a = f.getElementById(i)) && F(t, a) && a.id === i) return n.push(a), n
                            } else {
                                if (u[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = u[3]) && E.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(i)), n
                            } if (E.qsa && !z[e + " "] && (!I || !I.test(e))) {
                            if (1 !== h) f = t, c = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(we, Ee) : t.setAttribute("id", s = $), o = (l = T(e)).length; o--;) l[o] = "#" + s + " " + p(l[o]);
                                c = l.join(","), f = ve.test(e) && d(t.parentNode) || t
                            }
                            if (c) try {
                                return Y.apply(n, f.querySelectorAll(c)), n
                            } catch (m) {} finally {
                                s === $ && t.removeAttribute("id")
                            }
                        }
                    }
                    return L(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[$] = !0, e
                }

                function i(e) {
                    var t = P.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) S.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function c(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function d(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {}

                function p(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = W++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var l, c, d, f = [_, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (c = (d = t[$] || (t[$] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = c[o]) && l[0] === _ && l[1] === s) return f[2] = l[2];
                                        if (c[o] = f, f[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function y(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                    return r
                }

                function g(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function v(e, t, n, i, o, a) {
                    return i && !i[$] && (i = v(i)), o && !o[$] && (o = v(o, a)), r(function(r, a, s, u) {
                        var l, c, d, f = [],
                            p = [],
                            h = a.length,
                            m = r || y(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !r && t ? m : g(m, f, e, s, u),
                            b = n ? o || (r ? e : h || i) ? [] : a : v;
                        if (n && n(v, b, s, u), i)
                            for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(v[p[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = b.length; c--;)(d = b[c]) && l.push(v[c] = d);
                                    o(null, b = [], l, u)
                                }
                                for (c = b.length; c--;)(d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                            }
                        } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Y.apply(a, b)
                    })
                }

                function b(e) {
                    for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                            return e === t
                        }, a, !0), l = h(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), c = [function(e, n, r) {
                            var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null, i
                        }]; s < i; s++)
                        if (n = S.relative[e[s].type]) c = [h(m(c), n)];
                        else {
                            if ((n = S.filter[e[s].type].apply(null, e[s].matches))[$]) {
                                for (r = ++s; r < i && !S.relative[e[r].type]; r++);
                                return v(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, s < r && b(e.slice(s, r)), r < i && b(e = e.slice(r)), r < i && p(e))
                            }
                            c.push(n)
                        } return m(c)
                }

                function x(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function(r, a, s, u, l) {
                            var c, d, f, p = 0,
                                h = "0",
                                m = r && [],
                                y = [],
                                v = D,
                                b = r || o && S.find.TAG("*", l),
                                x = _ += null == v ? 1 : Math.random() || .1,
                                w = b.length;
                            for (l && (D = a === P || a || l); h !== w && null != (c = b[h]); h++) {
                                if (o && c) {
                                    for (d = 0, a || c.ownerDocument === P || (R(c), s = !H); f = e[d++];)
                                        if (f(c, a || P, s)) {
                                            u.push(c);
                                            break
                                        } l && (_ = x)
                                }
                                i && ((c = !f && c) && p--, r && m.push(c))
                            }
                            if (p += h, i && h !== p) {
                                for (d = 0; f = n[d++];) f(m, y, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; h--;) m[h] || y[h] || (y[h] = J.call(u));
                                    y = g(y)
                                }
                                Y.apply(u, y), l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                            }
                            return l && (_ = x, D = v), m
                        };
                    return i ? r(a) : a
                }
                var w, E, S, C, k, T, A, L, D, j, q, R, P, N, H, I, B, M, F, $ = "sizzle" + 1 * new Date,
                    O = e.document,
                    _ = 0,
                    W = 0,
                    U = n(),
                    V = n(),
                    z = n(),
                    X = function(e, t) {
                        return e === t && (q = !0), 0
                    },
                    G = {}.hasOwnProperty,
                    K = [],
                    J = K.pop,
                    Q = K.push,
                    Y = K.push,
                    Z = K.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                    oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                    ae = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ue = new RegExp("^" + ne + "*," + ne + "*"),
                    le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    de = new RegExp(oe),
                    fe = new RegExp("^" + re + "$"),
                    pe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    me = /^h\d$/i,
                    ye = /^[^{]+\{\s*\[native \w/,
                    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    xe = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Ee = function(e, t) {
                        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    Se = function() {
                        R()
                    },
                    Ce = h(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Y.apply(K = Z.call(O.childNodes), O.childNodes), K[O.childNodes.length].nodeType
                } catch (ke) {
                    Y = {
                        apply: K.length ? function(e, t) {
                            Q.apply(e, Z.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                for (w in E = t.support = {}, k = t.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, R = t.setDocument = function(e) {
                        var t, n, r = e ? e.ownerDocument || e : O;
                        return r !== P && 9 === r.nodeType && r.documentElement ? (N = (P = r).documentElement, H = !k(P), O !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), E.attributes = i(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), E.getElementsByTagName = i(function(e) {
                            return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length
                        }), E.getElementsByClassName = ye.test(P.getElementsByClassName), E.getById = i(function(e) {
                            return N.appendChild(e).id = $, !P.getElementsByName || !P.getElementsByName($).length
                        }), E.getById ? (S.filter.ID = function(e) {
                            var t = e.replace(be, xe);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, S.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && H) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (S.filter.ID = function(e) {
                            var t = e.replace(be, xe);
                            return function(e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, S.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && H) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), S.find.TAG = E.getElementsByTagName ? function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : E.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, S.find.CLASS = E.getElementsByClassName && function(e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && H) return t.getElementsByClassName(e)
                        }, B = [], I = [], (E.qsa = ye.test(P.querySelectorAll)) && (i(function(e) {
                            N.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || I.push(".#.+[+~]")
                        }), i(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = P.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), N.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                        })), (E.matchesSelector = ye.test(M = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(e) {
                            E.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), B.push("!=", oe)
                        }), I = I.length && new RegExp(I.join("|")), B = B.length && new RegExp(B.join("|")), t = ye.test(N.compareDocumentPosition), F = t || ye.test(N.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, X = t ? function(e, t) {
                            if (e === t) return q = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !E.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === O && F(O, e) ? -1 : t === P || t.ownerDocument === O && F(O, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return q = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                u = [t];
                            if (!i || !o) return e === P ? -1 : t === P ? 1 : i ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                            if (i === o) return a(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) u.unshift(n);
                            for (; s[r] === u[r];) r++;
                            return r ? a(s[r], u[r]) : s[r] === O ? -1 : u[r] === O ? 1 : 0
                        }, P) : P
                    }, t.matches = function(e, n) {
                        return t(e, null, null, n)
                    }, t.matchesSelector = function(e, n) {
                        if ((e.ownerDocument || e) !== P && R(e), n = n.replace(ce, "='$1']"), E.matchesSelector && H && !z[n + " "] && (!B || !B.test(n)) && (!I || !I.test(n))) try {
                            var r = M.call(e, n);
                            if (r || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (ke) {}
                        return t(n, P, null, [e]).length > 0
                    }, t.contains = function(e, t) {
                        return (e.ownerDocument || e) !== P && R(e), F(e, t)
                    }, t.attr = function(e, t) {
                        (e.ownerDocument || e) !== P && R(e);
                        var n = S.attrHandle[t.toLowerCase()],
                            r = n && G.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !H) : undefined;
                        return r !== undefined ? r : E.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }, t.escape = function(e) {
                        return (e + "").replace(we, Ee)
                    }, t.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, t.uniqueSort = function(e) {
                        var t, n = [],
                            r = 0,
                            i = 0;
                        if (q = !E.detectDuplicates, j = !E.sortStable && e.slice(0), e.sort(X), q) {
                            for (; t = e[i++];) t === e[i] && (r = n.push(i));
                            for (; r--;) e.splice(n[r], 1)
                        }
                        return j = null, e
                    }, C = t.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += C(t);
                        return n
                    }, (S = t.selectors = {
                        cacheLength: 50,
                        createPseudo: r,
                        match: pe,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(be, xe).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = U[e + " "];
                                return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, n, r) {
                                return function(i) {
                                    var o = t.attr(i, e);
                                    return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                        y = t.parentNode,
                                        g = s && t.nodeName.toLowerCase(),
                                        v = !u && !s,
                                        b = !1;
                                    if (y) {
                                        if (o) {
                                            for (; m;) {
                                                for (f = t; f = f[m];)
                                                    if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? y.firstChild : y.lastChild], a && v) {
                                            for (b = (p = (l = (c = (d = (f = y)[$] || (f[$] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]) && l[2], f = p && y.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++b && f === t) {
                                                    c[e] = [_, p, b];
                                                    break
                                                }
                                        } else if (v && (b = p = (l = (c = (d = (f = t)[$] || (f[$] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]), !1 === b)
                                            for (;
                                                (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++b || (v && ((c = (d = f[$] || (f[$] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [_, b]), f !== t)););
                                        return (b -= i) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, n) {
                                var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return o[$] ? o(n) : o.length > 1 ? (i = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--;) e[r = ee(e, i[a])] = !(t[r] = i[a])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: r(function(e) {
                                var t = [],
                                    n = [],
                                    i = A(e.replace(se, "$1"));
                                return i[$] ? r(function(e, t, n, r) {
                                    for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, r, o) {
                                    return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: r(function(e) {
                                return function(n) {
                                    return t(e, n).length > 0
                                }
                            }),
                            contains: r(function(e) {
                                return e = e.replace(be, xe),
                                    function(t) {
                                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: r(function(e) {
                                return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === N
                            },
                            focus: function(e) {
                                return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: l(!1),
                            disabled: l(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !S.pseudos.empty(e)
                            },
                            header: function(e) {
                                return me.test(e.nodeName)
                            },
                            input: function(e) {
                                return he.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: c(function() {
                                return [0]
                            }),
                            last: c(function(e, t) {
                                return [t - 1]
                            }),
                            eq: c(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: c(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: c(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: c(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: c(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = S.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) S.pseudos[w] = s(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) S.pseudos[w] = u(w);
                return f.prototype = S.filters = S.pseudos, S.setFilters = new f, T = t.tokenize = function(e, n) {
                    var r, i, o, a, s, u, l, c = V[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = S.preFilter; s;) {
                        for (a in r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                                value: r,
                                type: i[0].replace(se, " ")
                            }), s = s.slice(r.length)), S.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
                }, A = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = z[e + " "];
                    if (!o) {
                        for (t || (t = T(e)), n = t.length; n--;)(o = b(t[n]))[$] ? r.push(o) : i.push(o);
                        (o = z(e, x(i, r))).selector = e
                    }
                    return o
                }, L = t.select = function(e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e,
                        c = !r && T(e = l.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && S.relative[o[1].type]) {
                            if (!(t = (S.find.ID(a.matches[0].replace(be, xe), t) || [])[0])) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]);)
                            if ((u = S.find[s]) && (r = u(a.matches[0].replace(be, xe), ve.test(o[0].type) && d(t.parentNode) || t))) {
                                if (o.splice(i, 1), !(e = r.length && p(o))) return Y.apply(n, r), n;
                                break
                            }
                    }
                    return (l || A(e, c))(r, t, !H, n, !t || ve.test(e) && d(t.parentNode) || t), n
                }, E.sortStable = $.split("").sort(X).join("") === $, E.detectDuplicates = !!q, R(), E.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(P.createElement("fieldset"))
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), E.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
        Ee.find = Ce, Ee.expr = Ce.selectors, Ee.expr[":"] = Ee.expr.pseudos, Ee.uniqueSort = Ee.unique = Ce.uniqueSort, Ee.text = Ce.getText, Ee.isXMLDoc = Ce.isXML, Ee.contains = Ce.contains, Ee.escapeSelector = Ce.escape;
        var ke = function(e, t, n) {
                for (var r = [], i = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && Ee(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            Te = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Ae = Ee.expr.match.needsContext,
            Le = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Ee.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ee.find.matchesSelector(r, e) ? [r] : [] : Ee.find.matches(e, Ee.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, Ee.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(Ee(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (Ee.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) Ee.find(e, i[t], n);
                return r > 1 ? Ee.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(a(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(a(this, e || [], !0))
            },
            is: function(e) {
                return !!a(this, "string" == typeof e && Ae.test(e) ? Ee(e) : e || [], !1).length
            }
        });
        var De, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (Ee.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || De, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : je.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof Ee ? t[0] : t, Ee.merge(this, Ee.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), Le.test(r[1]) && Ee.isPlainObject(t))
                        for (r in t) ve(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = ae.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? n.ready !== undefined ? n.ready(e) : e(Ee) : Ee.makeArray(e, this)
        }).prototype = Ee.fn, De = Ee(ae);
        var qe = /^(?:parents|prev(?:Until|All))/,
            Re = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Ee.fn.extend({
            has: function(e) {
                var t = Ee(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (Ee.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && Ee(e);
                if (!Ae.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? Ee.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? de.call(Ee(e), this[0]) : de.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Ee.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ke(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ke(e, "parentNode", n)
            },
            next: function(e) {
                return s(e, "nextSibling")
            },
            prev: function(e) {
                return s(e, "previousSibling")
            },
            nextAll: function(e) {
                return ke(e, "nextSibling")
            },
            prevAll: function(e) {
                return ke(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ke(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ke(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Te((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Te(e.firstChild)
            },
            contents: function(e) {
                return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), Ee.merge([], e.childNodes))
            }
        }, function(e, t) {
            Ee.fn[e] = function(n, r) {
                var i = Ee.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Ee.filter(r, i)), this.length > 1 && (Re[e] || Ee.uniqueSort(i), qe.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var Pe = /[^\x20\t\r\n\f]+/g;
        Ee.Callbacks = function(e) {
            e = "string" == typeof e ? u(e) : Ee.extend({}, e);
            var t, n, i, o, a = [],
                s = [],
                l = -1,
                c = function() {
                    for (o = o || e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
                },
                d = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                            Ee.each(t, function(t, n) {
                                ve(n) ? e.unique && d.has(n) || a.push(n) : n && n.length && "string" !== r(n) && i(n)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return Ee.each(arguments, function(e, t) {
                            for (var n;
                                (n = Ee.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? Ee.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return o = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return o = s = [], n || t || (a = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, Ee.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", Ee.Callbacks("memory"), Ee.Callbacks("memory"), 2],
                        ["resolve", "done", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return Ee.Deferred(function(t) {
                                Ee.each(n, function(n, r) {
                                    var i = ve(e[r[4]]) && e[r[4]];
                                    o[r[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && ve(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, r, i) {
                            function o(t, n, r, i) {
                                return function() {
                                    var s = this,
                                        u = arguments,
                                        d = function() {
                                            var e, d;
                                            if (!(t < a)) {
                                                if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, ve(d) ? i ? d.call(e, o(a, n, l, i), o(a, n, c, i)) : (a++, d.call(e, o(a, n, l, i), o(a, n, c, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = undefined, u = [e]), (i || n.resolveWith)(s, u))
                                            }
                                        },
                                        f = i ? d : function() {
                                            try {
                                                d()
                                            } catch (e) {
                                                Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (r !== c && (s = undefined, u = [e]), n.rejectWith(s, u))
                                            }
                                        };
                                    t ? f() : (Ee.Deferred.getStackHook && (f.stackTrace = Ee.Deferred.getStackHook()), e.setTimeout(f))
                                }
                            }
                            var a = 0;
                            return Ee.Deferred(function(e) {
                                n[0][3].add(o(0, e, ve(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, ve(t) ? t : l)), n[2][3].add(o(0, e, ve(r) ? r : c))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? Ee.extend(e, i) : i
                        }
                    },
                    o = {};
                return Ee.each(n, function(e, t) {
                    var a = t[2],
                        s = t[5];
                    i[t[1]] = a.add, s && a.add(function() {
                        r = s
                    }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                        return o[t[0] + "With"](this === o ? undefined : this, arguments), this
                    }, o[t[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = ue.call(arguments),
                    o = Ee.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? ue.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (d(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ve(i[n] && i[n].then))) return o.then();
                for (; n--;) d(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Ee.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, Ee.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var He = Ee.Deferred();
        Ee.fn.ready = function(e) {
            return He.then(e)["catch"](function(e) {
                Ee.readyException(e)
            }), this
        }, Ee.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --Ee.readyWait : Ee.isReady) || (Ee.isReady = !0, !0 !== e && --Ee.readyWait > 0 || He.resolveWith(ae, [Ee]))
            }
        }), Ee.ready.then = He.then, "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(Ee.ready) : (ae.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
        var Ie = function(e, t, n, i, o, a, s) {
                var u = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === r(n))
                    for (u in o = !0, n) Ie(e, t, u, n[u], !0, a, s);
                else if (i !== undefined && (o = !0, ve(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(Ee(e), n)
                    })), t))
                    for (; u < l; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
            },
            Be = /^-ms-/,
            Me = /-([a-z])/g,
            Fe = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        m.uid = 1, m.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[h(t)] = n;
                else
                    for (r in t) i[h(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
            },
            access: function(e, t, n) {
                return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r !== undefined) {
                    if (t !== undefined) {
                        n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in r ? [t] : t.match(Pe) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(t === undefined || Ee.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !Ee.isEmptyObject(t)
            }
        };
        var $e = new m,
            Oe = new m,
            _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            We = /[A-Z]/g;
        Ee.extend({
            hasData: function(e) {
                return Oe.hasData(e) || $e.hasData(e)
            },
            data: function(e, t, n) {
                return Oe.access(e, t, n)
            },
            removeData: function(e, t) {
                Oe.remove(e, t)
            },
            _data: function(e, t, n) {
                return $e.access(e, t, n)
            },
            _removeData: function(e, t) {
                $e.remove(e, t)
            }
        }), Ee.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (e === undefined) {
                    if (this.length && (i = Oe.get(o), 1 === o.nodeType && !$e.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = h(r.slice(5)), g(o, r, i[r]));
                        $e.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Oe.set(this, e)
                }) : Ie(this, function(t) {
                    var n;
                    if (o && t === undefined) return (n = Oe.get(o, e)) !== undefined ? n : (n = g(o, e)) !== undefined ? n : void 0;
                    this.each(function() {
                        Oe.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Oe.remove(this, e)
                })
            }
        }), Ee.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = $e.get(e, t), n && (!r || Array.isArray(n) ? r = $e.access(e, t, Ee.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Ee.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = Ee._queueHooks(e, t),
                    a = function() {
                        Ee.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return $e.get(e, n) || $e.access(e, n, {
                    empty: Ee.Callbacks("once memory").add(function() {
                        $e.remove(e, [t + "queue", n])
                    })
                })
            }
        }), Ee.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ee.queue(this[0], e) : t === undefined ? this : this.each(function() {
                    var n = Ee.queue(this, e, t);
                    Ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Ee.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = Ee.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = $e.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ve = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
            ze = ["Top", "Right", "Bottom", "Left"],
            Xe = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && Ee.contains(e.ownerDocument, e) && "none" === Ee.css(e, "display")
            },
            Ge = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            },
            Ke = {};
        Ee.fn.extend({
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Xe(this) ? Ee(this).show() : Ee(this).hide()
                })
            }
        });
        var Je = /^(?:checkbox|radio)$/i,
            Qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ye = /^$|^module$|\/(?:java|ecma)script/i,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td;
        var et, tt, nt = /<|&#?\w+;/;
        et = ae.createDocumentFragment().appendChild(ae.createElement("div")), (tt = ae.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), et.appendChild(tt), ge.checkClone = et.cloneNode(!0).cloneNode(!0).lastChild.checked, et.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!et.cloneNode(!0).lastChild.defaultValue;
        var rt = ae.documentElement,
            it = /^key/,
            ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            at = /^([^.]*)(?:\.(.+)|)/;
        Ee.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, l, c, d, f, p, h, m, y = $e.get(e);
                if (y)
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && Ee.find.matchesSelector(rt, i), n.guid || (n.guid = Ee.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                            return void 0 !== Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : undefined
                        }), l = (t = (t || "").match(Pe) || [""]).length; l--;) p = m = (s = at.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = Ee.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = Ee.event.special[p] || {}, c = Ee.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && Ee.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (f = u[p]) || ((f = u[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), Ee.event.global[p] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, d, f, p, h, m, y = $e.hasData(e) && $e.get(e);
                if (y && (u = y.events)) {
                    for (l = (t = (t || "").match(Pe) || [""]).length; l--;)
                        if (p = m = (s = at.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = Ee.event.special[p] || {}, f = u[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, y.handle) || Ee.removeEvent(e, p, y.handle), delete u[p])
                        } else
                            for (p in u) Ee.event.remove(e, p + t[l], n, r, !0);
                    Ee.isEmptyObject(u) && $e.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = Ee.event.fix(e),
                    u = new Array(arguments.length),
                    l = ($e.get(this, "events") || {})[s.type] || [],
                    c = Ee.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = Ee.event.handlers.call(this, s, l), t = 0;
                        (i = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, (r = ((Ee.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) !== undefined && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) a[i = (r = t[n]).selector + " "] === undefined && (a[i] = r.needsContext ? Ee(i, this).index(l) > -1 : Ee.find(i, this, null, [l]).length), a[i] && o.push(r);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(Ee.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: ve(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[Ee.expando] ? e : new Ee.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== T() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === T() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return o(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, Ee.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, Ee.Event = function(e, t) {
            if (!(this instanceof Ee.Event)) return new Ee.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? C : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ee.expando] = !0
        }, Ee.Event.prototype = {
            constructor: Ee.Event,
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Ee.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && it.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, Ee.event.addProp), Ee.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            Ee.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || Ee.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), Ee.fn.extend({
            on: function(e, t, n, r) {
                return A(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return A(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Ee(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = k), this.each(function() {
                    Ee.event.remove(this, e, n, t)
                })
            }
        });
        var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ut = /<script|<style|<link/i,
            lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Ee.extend({
            htmlPrefilter: function(e) {
                return e.replace(st, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0),
                    u = Ee.contains(e.ownerDocument, e);
                if (!(ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ee.isXMLDoc(e)))
                    for (a = w(s), r = 0, i = (o = w(e)).length; r < i; r++) R(o[r], a[r]);
                if (t)
                    if (n)
                        for (o = o || w(e), a = a || w(s), r = 0, i = o.length; r < i; r++) q(o[r], a[r]);
                    else q(e, s);
                return (a = w(s, "script")).length > 0 && E(a, !u && w(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, i = Ee.event.special, o = 0;
                    (n = e[o]) !== undefined; o++)
                    if (Fe(n)) {
                        if (t = n[$e.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? Ee.event.remove(n, r) : Ee.removeEvent(n, r, t.handle);
                            n[$e.expando] = undefined
                        }
                        n[Oe.expando] && (n[Oe.expando] = undefined)
                    }
            }
        }), Ee.fn.extend({
            detach: function(e) {
                return N(this, e, !0)
            },
            remove: function(e) {
                return N(this, e)
            },
            text: function(e) {
                return Ie(this, function(e) {
                    return e === undefined ? Ee.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return P(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || L(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return P(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = L(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return P(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return P(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ee.cleanData(w(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return Ee.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ie(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ut.test(e) && !Ze[(Qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = Ee.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Ee.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return P(this, arguments, function(t) {
                    var n = this.parentNode;
                    Ee.inArray(this, e) < 0 && (Ee.cleanData(w(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), Ee.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            Ee.fn[e] = function(e) {
                for (var n, r = [], i = Ee(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Ee(i[a])[t](n), ce.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var dt = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
            ft = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            },
            pt = new RegExp(ze.join("|"), "i");
        ! function() {
            function t() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(u).appendChild(l);
                    var t = e.getComputedStyle(l);
                    r = "1%" !== t.top, s = 12 === n(t.marginLeft), l.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", rt.removeChild(u), l = null
                }
            }

            function n(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, o, a, s, u = ae.createElement("div"),
                l = ae.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === l.style.backgroundClip, Ee.extend(ge, {
                boxSizingReliable: function() {
                    return t(), i
                },
                pixelBoxStyles: function() {
                    return t(), a
                },
                pixelPosition: function() {
                    return t(), r
                },
                reliableMarginLeft: function() {
                    return t(), s
                },
                scrollboxSize: function() {
                    return t(), o
                }
            }))
        }();
        var ht = /^(none|table(?!-c[ea]).+)/,
            mt = /^--/,
            yt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            gt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            vt = ["Webkit", "Moz", "ms"],
            bt = ae.createElement("div").style;
        Ee.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = H(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = h(t),
                        u = mt.test(t),
                        l = e.style;
                    if (u || (t = M(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : l[t];
                    "string" === (o = typeof n) && (i = Ve.exec(n)) && i[1] && (n = v(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (Ee.cssNumber[s] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && (n = a.set(e, n, r)) === undefined || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = h(t);
                return mt.test(t) || (t = M(s)), (a = Ee.cssHooks[t] || Ee.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), i === undefined && (i = H(e, t, r)), "normal" === i && t in gt && (i = gt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), Ee.each(["height", "width"], function(e, t) {
            Ee.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !ht.test(Ee.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? O(e, t, r) : Ge(e, yt, function() {
                        return O(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, o = ft(e),
                        a = "border-box" === Ee.css(e, "boxSizing", !1, o),
                        s = r && $(e, t, r, a, o);
                    return a && ge.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - $(e, t, "border", !1, o) - .5)), s && (i = Ve.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Ee.css(e, t)), F(e, n, s)
                }
            }
        }), Ee.cssHooks.marginLeft = I(ge.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), Ee.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            Ee.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ze[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (Ee.cssHooks[e + t].set = F)
        }), Ee.fn.extend({
            css: function(e, t) {
                return Ie(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = ft(e), i = t.length; a < i; a++) o[t[a]] = Ee.css(e, t[a], !1, r);
                        return o
                    }
                    return n !== undefined ? Ee.style(e, t, n) : Ee.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), Ee.Tween = _, _.prototype = {
            constructor: _,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || Ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ee.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = _.propHooks[this.prop];
                return e && e.get ? e.get(this) : _.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = _.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
            }
        }, _.prototype.init.prototype = _.prototype, _.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ee.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ee.cssProps[e.prop]] && !Ee.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ee.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, Ee.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, Ee.fx = _.prototype.init, Ee.fx.step = {};
        var xt, wt, Et = /^(?:toggle|show|hide)$/,
            St = /queueHooks$/;
        Ee.Animation = Ee.extend(K, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return v(n.elem, e, Ve.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    ve(e) ? (t = e, e = ["*"]) : e = e.match(Pe);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(t)
                },
                prefilters: [X],
                prefilter: function(e, t) {
                    t ? K.prefilters.unshift(e) : K.prefilters.push(e)
                }
            }), Ee.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? Ee.extend({}, e) : {
                    complete: n || !n && t || ve(e) && e,
                    duration: e,
                    easing: n && t || t && !ve(t) && t
                };
                return Ee.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Ee.fx.speeds ? r.duration = Ee.fx.speeds[r.duration] : r.duration = Ee.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    ve(r.old) && r.old.call(this), r.queue && Ee.dequeue(this, r.queue)
                }, r
            }, Ee.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Xe).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = Ee.isEmptyObject(e),
                        o = Ee.speed(t, n, r),
                        a = function() {
                            var t = K(this, Ee.extend({}, e), o);
                            (i || $e.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = Ee.timers,
                            a = $e.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && St.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || Ee.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = $e.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = Ee.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, Ee.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), Ee.each(["toggle", "show", "hide"], function(e, t) {
                var n = Ee.fn[t];
                Ee.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, r, i)
                }
            }), Ee.each({
                slideDown: V("show"),
                slideUp: V("hide"),
                slideToggle: V("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                Ee.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), Ee.timers = [], Ee.fx.tick = function() {
                var e, t = 0,
                    n = Ee.timers;
                for (xt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || Ee.fx.stop(), xt = undefined
            }, Ee.fx.timer = function(e) {
                Ee.timers.push(e), Ee.fx.start()
            }, Ee.fx.interval = 13, Ee.fx.start = function() {
                wt || (wt = !0, W())
            }, Ee.fx.stop = function() {
                wt = null
            }, Ee.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Ee.fn.delay = function(t, n) {
                return t = Ee.fx && Ee.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = ae.createElement("input"),
                    t = ae.createElement("select").appendChild(ae.createElement("option"));
                e.type = "checkbox", ge.checkOn = "" !== e.value, ge.optSelected = t.selected, (e = ae.createElement("input")).value = "t", e.type = "radio", ge.radioValue = "t" === e.value
            }();
        var Ct, kt = Ee.expr.attrHandle;
        Ee.fn.extend({
            attr: function(e, t) {
                return Ie(this, Ee.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    Ee.removeAttr(this, e)
                })
            }
        }), Ee.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? Ee.prop(e, t, n) : (1 === o && Ee.isXMLDoc(e) || (i = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? Ct : undefined)), n !== undefined ? null === n ? void Ee.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = Ee.find.attr(e, t)) ? undefined : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ge.radioValue && "radio" === t && o(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(Pe);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), Ct = {
            set: function(e, t, n) {
                return !1 === t ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = kt[t] || Ee.find.attr;
            kt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = kt[a], kt[a] = i, i = null != n(e, t, r) ? a : null, kt[a] = o), i
            }
        });
        var Tt = /^(?:input|select|textarea|button)$/i,
            At = /^(?:a|area)$/i;
        Ee.fn.extend({
            prop: function(e, t) {
                return Ie(this, Ee.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[Ee.propFix[e] || e]
                })
            }
        }), Ee.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Ee.isXMLDoc(e) || (t = Ee.propFix[t] || t, i = Ee.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = Ee.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Tt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ge.optSelected || (Ee.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), Ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Ee.propFix[this.toLowerCase()] = this
        }), Ee.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ve(e)) return this.each(function(t) {
                    Ee(this).addClass(e.call(this, t, Q(this)))
                });
                if ((t = Y(e)).length)
                    for (; n = this[u++];)
                        if (i = Q(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = J(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ve(e)) return this.each(function(t) {
                    Ee(this).removeClass(e.call(this, t, Q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = Y(e)).length)
                    for (; n = this[u++];)
                        if (i = Q(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                            for (a = 0; o = t[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            i !== (s = J(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ve(e) ? this.each(function(n) {
                    Ee(this).toggleClass(e.call(this, n, Q(this), t), t)
                }) : this.each(function() {
                    var t, i, o, a;
                    if (r)
                        for (i = 0, o = Ee(this), a = Y(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else e !== undefined && "boolean" !== n || ((t = Q(this)) && $e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $e.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + J(Q(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Lt = /\r/g;
        Ee.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = ve(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, Ee(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Ee.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
                })) : i ? (t = Ee.valHooks[i.type] || Ee.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined ? n : "string" == typeof(n = i.value) ? n.replace(Lt, "") : null == n ? "" : n : void 0
            }
        }), Ee.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Ee.find.attr(e, "value");
                        return null != t ? t : J(Ee.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            u = s ? null : [],
                            l = s ? a + 1 : i.length;
                        for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                            if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                                if (t = Ee(n).val(), s) return t;
                                u.push(t)
                            } return u
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = Ee.makeArray(t), a = i.length; a--;)((r = i[a]).selected = Ee.inArray(Ee.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), Ee.each(["radio", "checkbox"], function() {
            Ee.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = Ee.inArray(Ee(e).val(), t) > -1
                }
            }, ge.checkOn || (Ee.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), ge.focusin = "onfocusin" in e;
        var Dt = /^(?:focusinfocus|focusoutblur)$/,
            jt = function(e) {
                e.stopPropagation()
            };
        Ee.extend(Ee.event, {
            trigger: function(t, n, r, i) {
                var o, a, s, u, l, c, d, f, p = [r || ae],
                    h = he.call(t, "type") ? t.type : t,
                    m = he.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = f = s = r = r || ae, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(h + Ee.event.triggered) && (h.indexOf(".") > -1 && (h = (m = h.split(".")).shift(), m.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[Ee.expando] ? t : new Ee.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : Ee.makeArray(n, [t]), d = Ee.event.special[h] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                    if (!i && !d.noBubble && !be(r)) {
                        for (u = d.delegateType || h, Dt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                        s === (r.ownerDocument || ae) && p.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = p[o++]) && !t.isPropagationStopped();) f = a, t.type = o > 1 ? u : d.bindType || h, (c = ($e.get(a, "events") || {})[t.type] && $e.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && Fe(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = h, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Fe(r) || l && ve(r[h]) && !be(r) && ((s = r[l]) && (r[l] = null), Ee.event.triggered = h, t.isPropagationStopped() && f.addEventListener(h, jt), r[h](), t.isPropagationStopped() && f.removeEventListener(h, jt), Ee.event.triggered = undefined, s && (r[l] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var r = Ee.extend(new Ee.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                Ee.event.trigger(r, null, t)
            }
        }), Ee.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    Ee.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return Ee.event.trigger(e, t, n, !0)
            }
        }), ge.focusin || Ee.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                Ee.event.simulate(t, e.target, Ee.event.fix(e))
            };
            Ee.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = $e.access(r, t);
                    i || r.addEventListener(e, n, !0), $e.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = $e.access(r, t) - 1;
                    i ? $e.access(r, t, i) : (r.removeEventListener(e, n, !0), $e.remove(r, t))
                }
            }
        });
        var qt = e.location,
            Rt = Date.now(),
            Pt = /\?/;
        Ee.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (r) {
                n = undefined
            }
            return n && !n.getElementsByTagName("parsererror").length || Ee.error("Invalid XML: " + t), n
        };
        var Nt = /\[\]$/,
            Ht = /\r?\n/g,
            It = /^(?:submit|button|image|reset|file)$/i,
            Bt = /^(?:input|select|textarea|keygen)/i;
        Ee.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = ve(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !Ee.isPlainObject(e)) Ee.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) Z(n, e[n], t, i);
            return r.join("&")
        }, Ee.fn.extend({
            serialize: function() {
                return Ee.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Ee.prop(this, "elements");
                    return e ? Ee.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Ee(this).is(":disabled") && Bt.test(this.nodeName) && !It.test(e) && (this.checked || !Je.test(e))
                }).map(function(e, t) {
                    var n = Ee(this).val();
                    return null == n ? null : Array.isArray(n) ? Ee.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ht, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ht, "\r\n")
                    }
                }).get()
            }
        });
        var Mt = /%20/g,
            Ft = /#.*$/,
            $t = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Wt = /^(?:GET|HEAD)$/,
            Ut = /^\/\//,
            Vt = {},
            zt = {},
            Xt = "*/".concat("*"),
            Gt = ae.createElement("a");
        Gt.href = qt.href, Ee.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: qt.href,
                type: "GET",
                isLocal: _t.test(qt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": Ee.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ne(ne(e, Ee.ajaxSettings), t) : ne(Ee.ajaxSettings, e)
            },
            ajaxPrefilter: ee(Vt),
            ajaxTransport: ee(zt),
            ajax: function(t, n) {
                function r(t, n, r, s) {
                    var l, f, p, x, w, E = n;
                    c || (c = !0, u && e.clearTimeout(u), i = undefined, a = s || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (x = re(h, S, r)), x = ie(h, x, S, l), l ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (Ee.lastModified[o] = w), (w = S.getResponseHeader("etag")) && (Ee.etag[o] = w)), 204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, f = x.data, l = !(p = x.error))) : (p = E, !t && E || (E = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || E) + "", l ? g.resolveWith(m, [f, E, S]) : g.rejectWith(m, [S, E, p]), S.statusCode(b), b = undefined, d && y.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? f : p]), v.fireWith(m, [S, E]), d && (y.trigger("ajaxComplete", [S, h]), --Ee.active || Ee.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = undefined), n = n || {};
                var i, o, a, s, u, l, c, d, f, p, h = Ee.ajaxSetup({}, n),
                    m = h.context || h,
                    y = h.context && (m.nodeType || m.jquery) ? Ee(m) : Ee.event,
                    g = Ee.Deferred(),
                    v = Ee.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    w = {},
                    E = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return c ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) S.always(e[S.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || E;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                if (g.promise(S), h.url = ((t || h.url || qt.href) + "").replace(Ut, qt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Pe) || [""], null == h.crossDomain) {
                    l = ae.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = Gt.protocol + "//" + Gt.host != l.protocol + "//" + l.host
                    } catch (C) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = Ee.param(h.data, h.traditional)), te(Vt, h, n, S), c) return S;
                for (f in (d = Ee.event && h.global) && 0 == Ee.active++ && Ee.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Wt.test(h.type), o = h.url.replace(Ft, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Pt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace($t, "$1"), p = (Pt.test(o) ? "&" : "?") + "_=" + Rt++ + p), h.url = o + p), h.ifModified && (Ee.lastModified[o] && S.setRequestHeader("If-Modified-Since", Ee.lastModified[o]), Ee.etag[o] && S.setRequestHeader("If-None-Match", Ee.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, S, h) || c)) return S.abort();
                if (E = "abort", v.add(h.complete), S.done(h.success), S.fail(h.error), i = te(zt, h, n, S)) {
                    if (S.readyState = 1, d && y.trigger("ajaxSend", [S, h]), c) return S;
                    h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                        S.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1, i.send(x, r)
                    } catch (C) {
                        if (c) throw C;
                        r(-1, C)
                    }
                } else r(-1, "No Transport");
                return S
            },
            getJSON: function(e, t, n) {
                return Ee.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Ee.get(e, undefined, t, "script")
            }
        }), Ee.each(["get", "post"], function(e, t) {
            Ee[t] = function(e, n, r, i) {
                return ve(n) && (i = i || r, r = n, n = undefined), Ee.ajax(Ee.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, Ee.isPlainObject(e) && e))
            }
        }), Ee._evalUrl = function(e) {
            return Ee.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, Ee.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (ve(e) && (e = e.call(this[0])), t = Ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return ve(e) ? this.each(function(t) {
                    Ee(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = Ee(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ve(e);
                return this.each(function(n) {
                    Ee(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    Ee(this).replaceWith(this.childNodes)
                }), this
            }
        }), Ee.expr.pseudos.hidden = function(e) {
            return !Ee.expr.pseudos.visible(e)
        }, Ee.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, Ee.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        };
        var Kt = {
                0: 200,
                1223: 204
            },
            Jt = Ee.ajaxSettings.xhr();
        ge.cors = !!Jt && "withCredentials" in Jt, ge.ajax = Jt = !!Jt, Ee.ajaxTransport(function(t) {
            var n, r;
            if (ge.cors || Jt && !t.crossDomain) return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), s.onabort !== undefined ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (u) {
                        if (n) throw u
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), Ee.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), Ee.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return Ee.globalEval(e), e
                }
            }
        }), Ee.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Ee.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain) return {
                send: function(r, i) {
                    t = Ee("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), ae.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Qt, Yt = [],
            Zt = /(=)\?(?=&|$)|\?\?/;
        Ee.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yt.pop() || Ee.expando + "_" + Rt++;
                return this[e] = !0, e
            }
        }), Ee.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ve(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Zt, "$1" + i) : !1 !== t.jsonp && (t.url += (Pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return a || Ee.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                a = arguments
            }, r.always(function() {
                o === undefined ? Ee(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && ve(o) && o(a[0]), a = o = undefined
            }), "script"
        }), ge.createHTMLDocument = ((Qt = ae.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), Ee.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ge.createHTMLDocument ? ((r = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href, t.head.appendChild(r)) : t = ae), o = !n && [], (i = Le.exec(e)) ? [t.createElement(i[1])] : (i = S([e], t, o), o && o.length && Ee(o).remove(), Ee.merge([], i.childNodes)));
            var r, i, o
        }, Ee.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = J(e.slice(s)), e = e.slice(0, s)), ve(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Ee.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? Ee("<div>").append(Ee.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, Ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Ee.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), Ee.expr.pseudos.animated = function(e) {
            return Ee.grep(Ee.timers, function(t) {
                return e === t.elem
            }).length
        }, Ee.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = Ee.css(e, "position"),
                    c = Ee(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), o = Ee.css(e, "top"), u = Ee.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ve(t) && (t = t.call(e, n, Ee.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
            }
        }, Ee.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === undefined ? this : this.each(function(t) {
                    Ee.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === Ee.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ee.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = Ee(e).offset()).top += Ee.css(e, "borderTopWidth", !0), i.left += Ee.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - Ee.css(r, "marginTop", !0),
                        left: t.left - i.left - Ee.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === Ee.css(e, "position");) e = e.offsetParent;
                    return e || rt
                })
            }
        }), Ee.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            Ee.fn[e] = function(r) {
                return Ie(this, function(e, r, i) {
                    var o;
                    if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), i === undefined) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), Ee.each(["top", "left"], function(e, t) {
            Ee.cssHooks[t] = I(ge.pixelPosition, function(e, n) {
                if (n) return n = H(e, t), dt.test(n) ? Ee(e).position()[t] + "px" : n
            })
        }), Ee.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            Ee.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                Ee.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Ie(this, function(t, n, i) {
                        var o;
                        return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? Ee.css(t, n, s) : Ee.style(t, n, i, s)
                    }, t, a ? i : undefined, a)
                }
            })
        }), Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            Ee.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), Ee.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), Ee.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), Ee.proxy = function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), ve(e) ? (r = ue.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(ue.call(arguments)))
            }).guid = e.guid = e.guid || Ee.guid++, i) : undefined
        }, Ee.holdReady = function(e) {
            e ? Ee.readyWait++ : Ee.ready(!0)
        }, Ee.isArray = Array.isArray, Ee.parseJSON = JSON.parse, Ee.nodeName = o, Ee.isFunction = ve, Ee.isWindow = be, Ee.camelCase = h, Ee.type = r, Ee.now = Date.now, Ee.isNumeric = function(e) {
            var t = Ee.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Ee
        });
        var en = e.jQuery,
            tn = e.$;
        return Ee.noConflict = function(t) {
            return e.$ === Ee && (e.$ = tn), t && e.jQuery === Ee && (e.jQuery = en), Ee
        }, t || (e.jQuery = e.$ = Ee), Ee
    }),
    function(e, t) {
        "use strict";
        var n;
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var r = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, r) {
                var i = e.Event(n);
                return t.trigger(i, r), !1 !== i.result
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && !1 !== e.data("remote")
            },
            handleRemote: function(r) {
                var i, o, a, s, u, l;
                if (n.fire(r, "ajax:before")) {
                    if (s = r.data("with-credentials") || null, u = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                        i = r.data("ujs:submit-button-formmethod") || r.attr("method"), o = r.data("ujs:submit-button-formaction") || r.attr("action"), a = e(r[0]).serializeArray();
                        var c = r.data("ujs:submit-button");
                        c && (a.push(c), r.data("ujs:submit-button", null)), r.data("ujs:submit-button-formmethod", null), r.data("ujs:submit-button-formaction", null)
                    } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                    return l = {
                        type: i || "GET",
                        data: a,
                        dataType: u,
                        beforeSend: function(e, i) {
                            if (i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), !n.fire(r, "ajax:beforeSend", [e, i])) return !1;
                            r.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            r.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            r.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            r.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    }, s && (l.xhrFields = {
                        withCredentials: s
                    }), o && (l.url = o), n.ajax(l)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (r) {
                    return !0
                }
            },
            handleMethod: function(r) {
                var i = n.href(r),
                    o = r.data("method"),
                    a = r.attr("target"),
                    s = n.csrfToken(),
                    u = n.csrfParam(),
                    l = e('<form method="post" action="' + i + '"></form>'),
                    c = '<input name="_method" value="' + o + '" type="hidden" />';
                u === t || s === t || n.isCrossDomain(i) || (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, r;
                n = e.is("button") ? "html" : "val", (r = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[n]()), e[n](r)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, r = e.data("confirm"),
                    i = !1;
                if (!r) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        i = n.confirm(r)
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    t = n.fire(e, "confirm:complete", [i])
                }
                return i && t
            },
            blankInputs: function(t, n, r) {
                var i, o, a, s = e(),
                    u = n || "input,textarea",
                    l = t.find(u),
                    c = {};
                return l.each(function() {
                    (i = e(this)).is("input[type=radio]") ? (a = i.attr("name"), c[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (o = t.find('input[type=radio][name="' + a + '"]'), s = s.add(o)), c[a] = a)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === r && (s = s.add(i))
                }), !!s.length && s
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var r = e.data("disable-with");
                r !== t && (e.data("ujs:enable-with", e.html()), e.html(r)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
            e.crossDomain || n.CSRFProtection(r)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), r.on("ajax:complete", n.linkDisableSelector, function() {
            n.enableElement(e(this))
        }), r.on("ajax:complete", n.buttonDisableSelector, function() {
            n.enableFormElement(e(this))
        }), r.on("click.rails", n.linkClickSelector, function(t) {
            var r = e(this),
                i = r.data("method"),
                o = r.data("params"),
                a = t.metaKey || t.ctrlKey;
            if (!n.allowAction(r)) return n.stopEverything(t);
            if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), n.isRemote(r)) {
                if (a && (!i || "GET" === i) && !o) return !0;
                var s = n.handleRemote(r);
                return !1 === s ? n.enableElement(r) : s.fail(function() {
                    n.enableElement(r)
                }), !1
            }
            return i ? (n.handleMethod(r), !1) : void 0
        }), r.on("click.rails", n.buttonClickSelector, function(t) {
            var r = e(this);
            if (!n.allowAction(r) || !n.isRemote(r)) return n.stopEverything(t);
            r.is(n.buttonDisableSelector) && n.disableFormElement(r);
            var i = n.handleRemote(r);
            return !1 === i ? n.enableFormElement(r) : i.fail(function() {
                n.enableFormElement(r)
            }), !1
        }), r.on("change.rails", n.inputChangeSelector, function(t) {
            var r = e(this);
            return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
        }), r.on("submit.rails", n.formSubmitSelector, function(r) {
            var i, o, a = e(this),
                s = n.isRemote(a);
            if (!n.allowAction(a)) return n.stopEverything(r);
            if (a.attr("novalidate") === t)
                if (a.data("ujs:formnovalidate-button") === t) {
                    if ((i = n.blankInputs(a, n.requiredInputSelector, !1)) && n.fire(a, "ajax:aborted:required", [i])) return n.stopEverything(r)
                } else a.data("ujs:formnovalidate-button", t);
            if (s) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var u = n.fire(a, "ajax:aborted:file", [o]);
                    return u || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), u
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), r.on("click.rails", n.formInputClickSelector, function(t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            var i = r.attr("name"),
                o = i ? {
                    name: i,
                    value: r.val()
                } : null,
                a = r.closest("form");
            0 === a.length && (a = e("#" + r.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", r.attr("formnovalidate")), a.data("ujs:submit-button-formaction", r.attr("formaction")), a.data("ujs:submit-button-formmethod", r.attr("formmethod"))
        }), r.on("ajax:send.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), r.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    /*
    Turbolinks 5.2.0
    Copyright © 2018 Basecamp, LLC
     */
    function() {
        var e = this;
        (function() {
            (function() {
                this.Turbolinks = {
                    supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
                    visit: function(e, n) {
                        return t.controller.visit(e, n)
                    },
                    clearCache: function() {
                        return t.controller.clearCache()
                    },
                    setProgressBarDelay: function(e) {
                        return t.controller.setProgressBarDelay(e)
                    }
                }
            }).call(this)
        }).call(e);
        var t = e.Turbolinks;
        (function() {
            (function() {
                var e, n, r, i = [].slice;
                t.copyObject = function(e) {
                    var t, n, r;
                    for (t in n = {}, e) r = e[t], n[t] = r;
                    return n
                }, t.closest = function(t, n) {
                    return e.call(t, n)
                }, e = function() {
                    var e;
                    return null != (e = document.documentElement.closest) ? e : function(e) {
                        var t;
                        for (t = this; t;) {
                            if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e)) return t;
                            t = t.parentNode
                        }
                    }
                }(), t.defer = function(e) {
                    return setTimeout(e, 1)
                }, t.throttle = function(e) {
                    var t;
                    return t = null,
                        function() {
                            var n, r;
                            return n = 1 <= arguments.length ? i.call(arguments, 0) : [], null != t ? t : t = requestAnimationFrame((r = this, function() {
                                return t = null, e.apply(r, n)
                            }))
                        }
                }, t.dispatch = function(e, t) {
                    var n, i, o, a, s, u;
                    return u = (s = null != t ? t : {}).target, n = s.cancelable, i = s.data, (o = document.createEvent("Events")).initEvent(e, !0, !0 === n), o.data = null != i ? i : {}, o.cancelable && !r && (a = o.preventDefault, o.preventDefault = function() {
                        return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        }), a.call(this)
                    }), (null != u ? u : document).dispatchEvent(o), o
                }, r = function() {
                    var e;
                    return (e = document.createEvent("Events")).initEvent("test", !0, !0), e.preventDefault(), e.defaultPrevented
                }(), t.match = function(e, t) {
                    return n.call(e, t)
                }, n = function() {
                    var e, t, n, r;
                    return null != (t = null != (n = null != (r = (e = document.documentElement).matchesSelector) ? r : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector
                }(), t.uuid = function() {
                    var e, t, n;
                    for (n = "", e = t = 1; 36 >= t; e = ++t) n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                    return n
                }
            }).call(this),
                function() {
                    t.Location = function() {
                        function e(e) {
                            var t, n;
                            null == e && (e = ""), (n = document.createElement("a")).href = e.toString(), this.absoluteURL = n.href, 2 > (t = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
                        }
                        var t, n, r, i;
                        return e.wrap = function(e) {
                            return e instanceof this ? e : new this(e)
                        }, e.prototype.getOrigin = function() {
                            return this.absoluteURL.split("/", 3).join("/")
                        }, e.prototype.getPath = function() {
                            var e, t;
                            return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
                        }, e.prototype.getPathComponents = function() {
                            return this.getPath().split("/").slice(1)
                        }, e.prototype.getLastPathComponent = function() {
                            return this.getPathComponents().slice(-1)[0]
                        }, e.prototype.getExtension = function() {
                            var e, t;
                            return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : ""
                        }, e.prototype.isHTML = function() {
                            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                        }, e.prototype.isPrefixedBy = function(e) {
                            var t;
                            return t = n(e), this.isEqualTo(e) || i(this.absoluteURL, t)
                        }, e.prototype.isEqualTo = function(e) {
                            return this.absoluteURL === (null != e ? e.absoluteURL : void 0)
                        }, e.prototype.toCacheKey = function() {
                            return this.requestURL
                        }, e.prototype.toJSON = function() {
                            return this.absoluteURL
                        }, e.prototype.toString = function() {
                            return this.absoluteURL
                        }, e.prototype.valueOf = function() {
                            return this.absoluteURL
                        }, n = function(e) {
                            return t(e.getOrigin() + e.getPath())
                        }, t = function(e) {
                            return r(e, "/") ? e : e + "/"
                        }, i = function(e, t) {
                            return e.slice(0, t.length) === t
                        }, r = function(e, t) {
                            return e.slice(-t.length) === t
                        }, e
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.HttpRequest = function() {
                        function n(n, r, i) {
                            this.delegate = n, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(r).requestURL, this.referrer = t.Location.wrap(i).absoluteURL, this.createXHR()
                        }
                        return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function() {
                            var e;
                            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
                        }, n.prototype.cancel = function() {
                            return this.xhr && this.sent ? this.xhr.abort() : void 0
                        }, n.prototype.requestProgressed = function(e) {
                            return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
                        }, n.prototype.requestLoaded = function() {
                            return this.endRequest((e = this, function() {
                                var t;
                                return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                            }));
                            var e
                        }, n.prototype.requestFailed = function() {
                            return this.endRequest((e = this, function() {
                                return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
                            }));
                            var e
                        }, n.prototype.requestTimedOut = function() {
                            return this.endRequest((e = this, function() {
                                return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
                            }));
                            var e
                        }, n.prototype.requestCanceled = function() {
                            return this.endRequest()
                        }, n.prototype.notifyApplicationBeforeRequestStart = function() {
                            return t.dispatch("turbolinks:request-start", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, n.prototype.notifyApplicationAfterRequestEnd = function() {
                            return t.dispatch("turbolinks:request-end", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, n.prototype.createXHR = function() {
                            return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                        }, n.prototype.endRequest = function(e) {
                            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0
                        }, n.prototype.setProgress = function(e) {
                            var t;
                            return this.progress = e, "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
                        }, n.prototype.destroy = function() {
                            var e;
                            return this.setProgress(1), "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null
                        }, n
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.ProgressBar = function() {
                        function t() {
                            this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                        }
                        var n;
                        return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() {
                            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                        }, t.prototype.hide = function() {
                            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((e = this, function() {
                                return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1
                            }))) : void 0;
                            var e
                        }, t.prototype.setValue = function(e) {
                            return this.value = e, this.refresh()
                        }, t.prototype.installStylesheetElement = function() {
                            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                        }, t.prototype.installProgressElement = function() {
                            return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                        }, t.prototype.fadeProgressElement = function(e) {
                            return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * n)
                        }, t.prototype.uninstallProgressElement = function() {
                            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                        }, t.prototype.startTrickling = function() {
                            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                        }, t.prototype.stopTrickling = function() {
                            return clearInterval(this.trickleInterval), this.trickleInterval = null
                        }, t.prototype.trickle = function() {
                            return this.setValue(this.value + Math.random() / 100)
                        }, t.prototype.refresh = function() {
                            return requestAnimationFrame((e = this, function() {
                                return e.progressElement.style.width = 10 + 90 * e.value + "%"
                            }));
                            var e
                        }, t.prototype.createStylesheetElement = function() {
                            var e;
                            return (e = document.createElement("style")).type = "text/css", e.textContent = this.constructor.defaultCSS, e
                        }, t.prototype.createProgressElement = function() {
                            var e;
                            return (e = document.createElement("div")).className = "turbolinks-progress-bar", e
                        }, t
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.BrowserAdapter = function() {
                        function n(n) {
                            this.controller = n, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar
                        }
                        var r, i, o;
                        return o = t.HttpRequest, r = o.NETWORK_FAILURE, i = o.TIMEOUT_FAILURE, n.prototype.visitProposedToLocationWithAction = function(e, t) {
                            return this.controller.startVisitToLocationWithAction(e, t)
                        }, n.prototype.visitStarted = function(e) {
                            return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot()
                        }, n.prototype.visitRequestStarted = function(e) {
                            return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                        }, n.prototype.visitRequestProgressed = function(e) {
                            return this.progressBar.setValue(e.progress)
                        }, n.prototype.visitRequestCompleted = function(e) {
                            return e.loadResponse()
                        }, n.prototype.visitRequestFailedWithStatusCode = function(e, t) {
                            switch (t) {
                                case r:
                                case i:
                                    return this.reload();
                                default:
                                    return e.loadResponse()
                            }
                        }, n.prototype.visitRequestFinished = function() {
                            return this.hideProgressBar()
                        }, n.prototype.visitCompleted = function(e) {
                            return e.followRedirect()
                        }, n.prototype.pageInvalidated = function() {
                            return this.reload()
                        }, n.prototype.showProgressBarAfterDelay = function() {
                            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
                        }, n.prototype.showProgressBar = function() {
                            return this.progressBar.show()
                        }, n.prototype.hideProgressBar = function() {
                            return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                        }, n.prototype.reload = function() {
                            return window.location.reload()
                        }, n
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.History = function() {
                        function n(t) {
                            this.delegate = t, this.onPageLoad = e(this.onPageLoad, this), this.onPopState = e(this.onPopState, this)
                        }
                        return n.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                        }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                        }, n.prototype.push = function(e, n) {
                            return e = t.Location.wrap(e), this.update("push", e, n)
                        }, n.prototype.replace = function(e, n) {
                            return e = t.Location.wrap(e), this.update("replace", e, n)
                        }, n.prototype.onPopState = function(e) {
                            var n, r, i, o;
                            return this.shouldHandlePopState() && (o = null != (r = e.state) ? r.turbolinks : void 0) ? (n = t.Location.wrap(window.location), i = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, i)) : void 0
                        }, n.prototype.onPageLoad = function() {
                            return t.defer(function(e) {
                                return function() {
                                    return e.pageLoaded = !0
                                }
                            }(this))
                        }, n.prototype.shouldHandlePopState = function() {
                            return this.pageIsLoaded()
                        }, n.prototype.pageIsLoaded = function() {
                            return this.pageLoaded || "complete" === document.readyState
                        }, n.prototype.update = function(e, t, n) {
                            var r;
                            return r = {
                                turbolinks: {
                                    restorationIdentifier: n
                                }
                            }, history[e + "State"](r, null, t)
                        }, n
                    }()
                }.call(this),
                function() {
                    t.HeadDetails = function() {
                        function e(e) {
                            var t, n, r, a, s;
                            for (this.elements = {}, n = 0, a = e.length; a > n; n++)(s = e[n]).nodeType === Node.ELEMENT_NODE && (r = s.outerHTML, (null != (t = this.elements)[r] ? t[r] : t[r] = {
                                type: o(s),
                                tracked: i(s),
                                elements: []
                            }).elements.push(s))
                        }
                        var t, n, r, i, o;
                        return e.fromHeadElement = function(e) {
                            var t;
                            return new this(null != (t = null != e ? e.childNodes : void 0) ? t : [])
                        }, e.prototype.hasElementWithKey = function(e) {
                            return e in this.elements
                        }, e.prototype.getTrackedElementSignature = function() {
                            var e;
                            return function() {
                                var t, n;
                                for (e in n = [], t = this.elements) t[e].tracked && n.push(e);
                                return n
                            }.call(this).join("")
                        }, e.prototype.getScriptElementsNotInDetails = function(e) {
                            return this.getElementsMatchingTypeNotInDetails("script", e)
                        }, e.prototype.getStylesheetElementsNotInDetails = function(e) {
                            return this.getElementsMatchingTypeNotInDetails("stylesheet", e)
                        }, e.prototype.getElementsMatchingTypeNotInDetails = function(e, t) {
                            var n, r, i, o, a, s;
                            for (r in a = [], i = this.elements) s = (o = i[r]).type, n = o.elements, s !== e || t.hasElementWithKey(r) || a.push(n[0]);
                            return a
                        }, e.prototype.getProvisionalElements = function() {
                            var e, t, n, r, i, o, a;
                            for (t in n = [], r = this.elements) a = (i = r[t]).type, o = i.tracked, e = i.elements, null != a || o ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
                            return n
                        }, e.prototype.getMetaValue = function(e) {
                            var t;
                            return null != (t = this.findMetaElementByName(e)) ? t.getAttribute("content") : void 0
                        }, e.prototype.findMetaElementByName = function(e) {
                            var n, r, i, o;
                            for (i in n = void 0, o = this.elements) r = o[i].elements, t(r[0], e) && (n = r[0]);
                            return n
                        }, o = function(e) {
                            return n(e) ? "script" : r(e) ? "stylesheet" : void 0
                        }, i = function(e) {
                            return "reload" === e.getAttribute("data-turbolinks-track")
                        }, n = function(e) {
                            return "script" === e.tagName.toLowerCase()
                        }, r = function(e) {
                            var t;
                            return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel")
                        }, t = function(e, t) {
                            return "meta" === e.tagName.toLowerCase() && e.getAttribute("name") === t
                        }, e
                    }()
                }.call(this),
                function() {
                    t.Snapshot = function() {
                        function e(e, t) {
                            this.headDetails = e, this.bodyElement = t
                        }
                        return e.wrap = function(e) {
                            return e instanceof this ? e : "string" == typeof e ? this.fromHTMLString(e) : this.fromHTMLElement(e)
                        }, e.fromHTMLString = function(e) {
                            var t;
                            return (t = document.createElement("html")).innerHTML = e, this.fromHTMLElement(t)
                        }, e.fromHTMLElement = function(e) {
                            var n, r, i;
                            return r = e.querySelector("head"), n = null != (i = e.querySelector("body")) ? i : document.createElement("body"), new this(t.HeadDetails.fromHeadElement(r), n)
                        }, e.prototype.clone = function() {
                            return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
                        }, e.prototype.getRootLocation = function() {
                            var e, n;
                            return n = null != (e = this.getSetting("root")) ? e : "/", new t.Location(n)
                        }, e.prototype.getCacheControlValue = function() {
                            return this.getSetting("cache-control")
                        }, e.prototype.getElementForAnchor = function(e) {
                            try {
                                return this.bodyElement.querySelector("[id='" + e + "'], a[name='" + e + "']")
                            } catch (t) {}
                        }, e.prototype.getPermanentElements = function() {
                            return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
                        }, e.prototype.getPermanentElementById = function(e) {
                            return this.bodyElement.querySelector("#" + e + "[data-turbolinks-permanent]")
                        }, e.prototype.getPermanentElementsPresentInSnapshot = function(e) {
                            var t, n, r, i, o;
                            for (o = [], n = 0, r = (i = this.getPermanentElements()).length; r > n; n++) t = i[n], e.getPermanentElementById(t.id) && o.push(t);
                            return o
                        }, e.prototype.findFirstAutofocusableElement = function() {
                            return this.bodyElement.querySelector("[autofocus]")
                        }, e.prototype.hasAnchor = function(e) {
                            return null != this.getElementForAnchor(e)
                        }, e.prototype.isPreviewable = function() {
                            return "no-preview" !== this.getCacheControlValue()
                        }, e.prototype.isCacheable = function() {
                            return "no-cache" !== this.getCacheControlValue()
                        }, e.prototype.isVisitable = function() {
                            return "reload" !== this.getSetting("visit-control")
                        }, e.prototype.getSetting = function(e) {
                            return this.headDetails.getMetaValue("turbolinks-" + e)
                        }, e
                    }()
                }.call(this),
                function() {
                    var e = [].slice;
                    t.Renderer = function() {
                        function t() {}
                        var n;
                        return t.render = function() {
                            var t, n, r;
                            return n = arguments[0], t = arguments[1], (r = function(e, t, n) {
                                n.prototype = e.prototype;
                                var r = new n,
                                    i = e.apply(r, t);
                                return Object(i) === i ? i : r
                            }(this, 3 <= arguments.length ? e.call(arguments, 2) : [], function() {})).delegate = n, r.render(t), r
                        }, t.prototype.renderView = function(e) {
                            return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody)
                        }, t.prototype.invalidateView = function() {
                            return this.delegate.viewInvalidated()
                        }, t.prototype.createScriptElement = function(e) {
                            var t;
                            return "false" === e.getAttribute("data-turbolinks-eval") ? e : ((t = document.createElement("script")).textContent = e.textContent, t.async = !1, n(t, e), t)
                        }, n = function(e, t) {
                            var n, r, i, o, a, s, u;
                            for (s = [], n = 0, r = (o = t.attributes).length; r > n; n++) i = (a = o[n]).name, u = a.value, s.push(e.setAttribute(i, u));
                            return s
                        }, t
                    }()
                }.call(this),
                function() {
                    var e, n, r = function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            for (var r in t) i.call(t, r) && (e[r] = t[r]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        },
                        i = {}.hasOwnProperty;
                    t.SnapshotRenderer = function(t) {
                        function i(e, t, n) {
                            this.currentSnapshot = e, this.newSnapshot = t, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement
                        }
                        return r(i, t), i.prototype.render = function(e) {
                            return this.shouldRender() ? (this.mergeHead(), this.renderView((t = this, function() {
                                return t.replaceBody(), t.isPreview || t.focusFirstAutofocusableElement(), e()
                            }))) : this.invalidateView();
                            var t
                        }, i.prototype.mergeHead = function() {
                            return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                        }, i.prototype.replaceBody = function() {
                            var e;
                            return e = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(e)
                        }, i.prototype.shouldRender = function() {
                            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
                        }, i.prototype.trackedElementsAreIdentical = function() {
                            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                        }, i.prototype.copyNewHeadStylesheetElements = function() {
                            var e, t, n, r, i;
                            for (i = [], t = 0, n = (r = this.getNewHeadStylesheetElements()).length; n > t; t++) e = r[t], i.push(document.head.appendChild(e));
                            return i
                        }, i.prototype.copyNewHeadScriptElements = function() {
                            var e, t, n, r, i;
                            for (i = [], t = 0, n = (r = this.getNewHeadScriptElements()).length; n > t; t++) e = r[t], i.push(document.head.appendChild(this.createScriptElement(e)));
                            return i
                        }, i.prototype.removeCurrentHeadProvisionalElements = function() {
                            var e, t, n, r, i;
                            for (i = [], t = 0, n = (r = this.getCurrentHeadProvisionalElements()).length; n > t; t++) e = r[t], i.push(document.head.removeChild(e));
                            return i
                        }, i.prototype.copyNewHeadProvisionalElements = function() {
                            var e, t, n, r, i;
                            for (i = [], t = 0, n = (r = this.getNewHeadProvisionalElements()).length; n > t; t++) e = r[t], i.push(document.head.appendChild(e));
                            return i
                        }, i.prototype.relocateCurrentBodyPermanentElements = function() {
                            var t, r, i, o, a, s, u;
                            for (u = [], t = 0, r = (s = this.getCurrentBodyPermanentElements()).length; r > t; t++) o = s[t], a = e(o), i = this.newSnapshot.getPermanentElementById(o.id), n(o, a.element), n(i, o), u.push(a);
                            return u
                        }, i.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(e) {
                            var t, r, i, o, a, s;
                            for (s = [], i = 0, o = e.length; o > i; i++) r = (a = e[i]).element, t = a.permanentElement.cloneNode(!0), s.push(n(r, t));
                            return s
                        }, i.prototype.activateNewBodyScriptElements = function() {
                            var e, t, r, i, o, a;
                            for (a = [], t = 0, i = (o = this.getNewBodyScriptElements()).length; i > t; t++) r = o[t], e = this.createScriptElement(r), a.push(n(r, e));
                            return a
                        }, i.prototype.assignNewBody = function() {
                            return document.body = this.newBody
                        }, i.prototype.focusFirstAutofocusableElement = function() {
                            var e;
                            return null != (e = this.newSnapshot.findFirstAutofocusableElement()) ? e.focus() : void 0
                        }, i.prototype.getNewHeadStylesheetElements = function() {
                            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                        }, i.prototype.getNewHeadScriptElements = function() {
                            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                        }, i.prototype.getCurrentHeadProvisionalElements = function() {
                            return this.currentHeadDetails.getProvisionalElements()
                        }, i.prototype.getNewHeadProvisionalElements = function() {
                            return this.newHeadDetails.getProvisionalElements()
                        }, i.prototype.getCurrentBodyPermanentElements = function() {
                            return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
                        }, i.prototype.getNewBodyScriptElements = function() {
                            return this.newBody.querySelectorAll("script")
                        }, i
                    }(t.Renderer), e = function(e) {
                        var t;
                        return (t = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), t.setAttribute("content", e.id), {
                            element: t,
                            permanentElement: e
                        }
                    }, n = function(e, t) {
                        var n;
                        return (n = e.parentNode) ? n.replaceChild(t, e) : void 0
                    }
                }.call(this),
                function() {
                    var e = function(e, t) {
                            function r() {
                                this.constructor = e
                            }
                            for (var i in t) n.call(t, i) && (e[i] = t[i]);
                            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
                        },
                        n = {}.hasOwnProperty;
                    t.ErrorRenderer = function(t) {
                        function n(e) {
                            var t;
                            (t = document.createElement("html")).innerHTML = e, this.newHead = t.querySelector("head"), this.newBody = t.querySelector("body")
                        }
                        return e(n, t), n.prototype.render = function(e) {
                            return this.renderView((t = this, function() {
                                return t.replaceHeadAndBody(), t.activateBodyScriptElements(), e()
                            }));
                            var t
                        }, n.prototype.replaceHeadAndBody = function() {
                            var e, t;
                            return t = document.head, e = document.body, t.parentNode.replaceChild(this.newHead, t), e.parentNode.replaceChild(this.newBody, e)
                        }, n.prototype.activateBodyScriptElements = function() {
                            var e, t, n, r, i, o;
                            for (o = [], t = 0, n = (r = this.getScriptElements()).length; n > t; t++) i = r[t], e = this.createScriptElement(i), o.push(i.parentNode.replaceChild(e, i));
                            return o
                        }, n.prototype.getScriptElements = function() {
                            return document.documentElement.querySelectorAll("script")
                        }, n
                    }(t.Renderer)
                }.call(this),
                function() {
                    t.View = function() {
                        function e(e) {
                            this.delegate = e, this.htmlElement = document.documentElement
                        }
                        return e.prototype.getRootLocation = function() {
                            return this.getSnapshot().getRootLocation()
                        }, e.prototype.getElementForAnchor = function(e) {
                            return this.getSnapshot().getElementForAnchor(e)
                        }, e.prototype.getSnapshot = function() {
                            return t.Snapshot.fromHTMLElement(this.htmlElement)
                        }, e.prototype.render = function(e, t) {
                            var n, r, i;
                            return i = e.snapshot, n = e.error, r = e.isPreview, this.markAsPreview(r), null != i ? this.renderSnapshot(i, r, t) : this.renderError(n, t)
                        }, e.prototype.markAsPreview = function(e) {
                            return e ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
                        }, e.prototype.renderSnapshot = function(e, n, r) {
                            return t.SnapshotRenderer.render(this.delegate, r, this.getSnapshot(), t.Snapshot.wrap(e), n)
                        }, e.prototype.renderError = function(e, n) {
                            return t.ErrorRenderer.render(this.delegate, n, e)
                        }, e
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.ScrollManager = function() {
                        function n(n) {
                            this.delegate = n, this.onScroll = e(this.onScroll, this), this.onScroll = t.throttle(this.onScroll)
                        }
                        return n.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                        }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                        }, n.prototype.scrollToElement = function(e) {
                            return e.scrollIntoView()
                        }, n.prototype.scrollToPosition = function(e) {
                            var t, n;
                            return t = e.x, n = e.y, window.scrollTo(t, n)
                        }, n.prototype.onScroll = function() {
                            return this.updatePosition({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            })
                        }, n.prototype.updatePosition = function(e) {
                            var t;
                            return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
                        }, n
                    }()
                }.call(this),
                function() {
                    t.SnapshotCache = function() {
                        function e(e) {
                            this.size = e, this.keys = [], this.snapshots = {}
                        }
                        var n;
                        return e.prototype.has = function(e) {
                            return n(e) in this.snapshots
                        }, e.prototype.get = function(e) {
                            var t;
                            if (this.has(e)) return t = this.read(e), this.touch(e), t
                        }, e.prototype.put = function(e, t) {
                            return this.write(e, t), this.touch(e), t
                        }, e.prototype.read = function(e) {
                            var t;
                            return t = n(e), this.snapshots[t]
                        }, e.prototype.write = function(e, t) {
                            var r;
                            return r = n(e), this.snapshots[r] = t
                        }, e.prototype.touch = function(e) {
                            var t, r;
                            return r = n(e), (t = this.keys.indexOf(r)) > -1 && this.keys.splice(t, 1), this.keys.unshift(r), this.trim()
                        }, e.prototype.trim = function() {
                            var e, t, n, r, i;
                            for (i = [], e = 0, n = (r = this.keys.splice(this.size)).length; n > e; e++) t = r[e], i.push(delete this.snapshots[t]);
                            return i
                        }, n = function(e) {
                            return t.Location.wrap(e).toCacheKey()
                        }, e
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.Visit = function() {
                        function n(n, r, i) {
                            this.controller = n, this.action = i, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(r), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                        }
                        var r;
                        return n.prototype.start = function() {
                            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                        }, n.prototype.cancel = function() {
                            var e;
                            return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                        }, n.prototype.complete = function() {
                            var e;
                            return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                        }, n.prototype.fail = function() {
                            var e;
                            return "started" === this.state ? (this.state = "failed", "function" == typeof(e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0
                        }, n.prototype.changeHistory = function() {
                            var e, t;
                            return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action, t = r(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0)
                        }, n.prototype.issueRequest = function() {
                            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                        }, n.prototype.getCachedSnapshot = function() {
                            var e;
                            return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e
                        }, n.prototype.hasCachedSnapshot = function() {
                            return null != this.getCachedSnapshot()
                        }, n.prototype.loadCachedSnapshot = function() {
                            var e, t;
                            return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function() {
                                var n;
                                return this.cacheSnapshot(), this.controller.render({
                                    snapshot: t,
                                    isPreview: e
                                }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), e ? void 0 : this.complete()
                            })) : void 0
                        }, n.prototype.loadResponse = function() {
                            return null != this.response ? this.render(function() {
                                var e, t;
                                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                    error: this.response
                                }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({
                                    snapshot: this.response
                                }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.complete())
                            }) : void 0
                        }, n.prototype.followRedirect = function() {
                            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                        }, n.prototype.requestStarted = function() {
                            var e;
                            return this.recordTimingMetric("requestStart"), "function" == typeof(e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0
                        }, n.prototype.requestProgressed = function(e) {
                            var t;
                            return this.progress = e, "function" == typeof(t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0
                        }, n.prototype.requestCompletedWithResponse = function(e, n) {
                            return this.response = e, null != n && (this.redirectedToLocation = t.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                        }, n.prototype.requestFailedWithStatusCode = function(e, t) {
                            return this.response = t, this.adapter.visitRequestFailedWithStatusCode(this, e)
                        }, n.prototype.requestFinished = function() {
                            var e;
                            return this.recordTimingMetric("requestEnd"), "function" == typeof(e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0
                        }, n.prototype.performScroll = function() {
                            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                        }, n.prototype.scrollToRestoredPosition = function() {
                            var e, t;
                            return null != (e = null != (t = this.restorationData) ? t.scrollPosition : void 0) ? (this.controller.scrollToPosition(e), !0) : void 0
                        }, n.prototype.scrollToAnchor = function() {
                            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                        }, n.prototype.scrollToTop = function() {
                            return this.controller.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, n.prototype.recordTimingMetric = function(e) {
                            var t;
                            return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime()
                        }, n.prototype.getTimingMetrics = function() {
                            return t.copyObject(this.timingMetrics)
                        }, r = function(e) {
                            switch (e) {
                                case "replace":
                                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                                case "advance":
                                case "restore":
                                    return "pushHistoryWithLocationAndRestorationIdentifier"
                            }
                        }, n.prototype.shouldIssueRequest = function() {
                            return "restore" !== this.action || !this.hasCachedSnapshot()
                        }, n.prototype.cacheSnapshot = function() {
                            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                        }, n.prototype.render = function(e) {
                            return this.cancelRender(), this.frame = requestAnimationFrame((t = this, function() {
                                return t.frame = null, e.call(t)
                            }));
                            var t
                        }, n.prototype.cancelRender = function() {
                            return this.frame ? cancelAnimationFrame(this.frame) : void 0
                        }, n
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    };
                    t.Controller = function() {
                        function n() {
                            this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
                        }
                        return n.prototype.start = function() {
                            return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                        }, n.prototype.disable = function() {
                            return this.enabled = !1
                        }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                        }, n.prototype.clearCache = function() {
                            return this.cache = new t.SnapshotCache(10)
                        }, n.prototype.visit = function(e, n) {
                            var r, i;
                            return null == n && (n = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (r = null != (i = n.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(e, r)) : window.location = e : void 0
                        }, n.prototype.startVisitToLocationWithAction = function(e, n, r) {
                            var i;
                            return t.supported ? (i = this.getRestorationDataForIdentifier(r), this.startVisit(e, n, {
                                restorationData: i
                            })) : window.location = e
                        }, n.prototype.setProgressBarDelay = function(e) {
                            return this.progressBarDelay = e
                        }, n.prototype.startHistory = function() {
                            return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                        }, n.prototype.stopHistory = function() {
                            return this.history.stop()
                        }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                            return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier)
                        }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                            return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier)
                        }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, n) {
                            var r;
                            return this.restorationIdentifier = n, this.enabled ? (r = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                                restorationIdentifier: this.restorationIdentifier,
                                restorationData: r,
                                historyChanged: !0
                            }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated()
                        }, n.prototype.getCachedSnapshotForLocation = function(e) {
                            var t;
                            return null != (t = this.cache.get(e)) ? t.clone() : void 0
                        }, n.prototype.shouldCacheSnapshot = function() {
                            return this.view.getSnapshot().isCacheable()
                        }, n.prototype.cacheSnapshot = function() {
                            var e, n;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), n = this.view.getSnapshot(), e = this.lastRenderedLocation, t.defer(function(t) {
                                return function() {
                                    return t.cache.put(e, n.clone())
                                }
                            }(this))) : void 0
                        }, n.prototype.scrollToAnchor = function(e) {
                            var t;
                            return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, n.prototype.scrollToElement = function(e) {
                            return this.scrollManager.scrollToElement(e)
                        }, n.prototype.scrollToPosition = function(e) {
                            return this.scrollManager.scrollToPosition(e)
                        }, n.prototype.scrollPositionChanged = function(e) {
                            return this.getCurrentRestorationData().scrollPosition = e
                        }, n.prototype.render = function(e, t) {
                            return this.view.render(e, t)
                        }, n.prototype.viewInvalidated = function() {
                            return this.adapter.pageInvalidated()
                        }, n.prototype.viewWillRender = function(e) {
                            return this.notifyApplicationBeforeRender(e)
                        }, n.prototype.viewRendered = function() {
                            return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                        }, n.prototype.pageLoaded = function() {
                            return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                        }, n.prototype.clickCaptured = function() {
                            return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                        }, n.prototype.clickBubbled = function(e) {
                            var t, n, r;
                            return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(r, {
                                action: t
                            })) : void 0
                        }, n.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) {
                            return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
                        }, n.prototype.applicationAllowsVisitingLocation = function(e) {
                            return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
                        }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, n) {
                            return t.dispatch("turbolinks:click", {
                                target: e,
                                data: {
                                    url: n.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, n.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                            return t.dispatch("turbolinks:before-visit", {
                                data: {
                                    url: e.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, n.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                            return t.dispatch("turbolinks:visit", {
                                data: {
                                    url: e.absoluteURL
                                }
                            })
                        }, n.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                            return t.dispatch("turbolinks:before-cache")
                        }, n.prototype.notifyApplicationBeforeRender = function(e) {
                            return t.dispatch("turbolinks:before-render", {
                                data: {
                                    newBody: e
                                }
                            })
                        }, n.prototype.notifyApplicationAfterRender = function() {
                            return t.dispatch("turbolinks:render")
                        }, n.prototype.notifyApplicationAfterPageLoad = function(e) {
                            return null == e && (e = {}), t.dispatch("turbolinks:load", {
                                data: {
                                    url: this.location.absoluteURL,
                                    timing: e
                                }
                            })
                        }, n.prototype.startVisit = function(e, t, n) {
                            var r;
                            return null != (r = this.currentVisit) && r.cancel(), this.currentVisit = this.createVisit(e, t, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e)
                        }, n.prototype.createVisit = function(e, n, r) {
                            var i, o, a, s, u;
                            return s = (o = null != r ? r : {}).restorationIdentifier, a = o.restorationData, i = o.historyChanged, (u = new t.Visit(this, e, n)).restorationIdentifier = null != s ? s : t.uuid(), u.restorationData = t.copyObject(a), u.historyChanged = i, u.referrer = this.location, u
                        }, n.prototype.visitCompleted = function(e) {
                            return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
                        }, n.prototype.clickEventIsSignificant = function(e) {
                            return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                        }, n.prototype.getVisitableLinkForNode = function(e) {
                            return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target]):not([download])") : void 0
                        }, n.prototype.getVisitableLocationForLink = function(e) {
                            var n;
                            return n = new t.Location(e.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                        }, n.prototype.getActionForLink = function(e) {
                            var t;
                            return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance"
                        }, n.prototype.nodeIsVisitable = function(e) {
                            var n;
                            return !(n = t.closest(e, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
                        }, n.prototype.locationIsVisitable = function(e) {
                            return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
                        }, n.prototype.getCurrentRestorationData = function() {
                            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                        }, n.prototype.getRestorationDataForIdentifier = function(e) {
                            var t;
                            return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
                        }, n
                    }()
                }.call(this),
                function() {
                    ! function() {
                        var e, t;
                        if ((e = t = document.currentScript) && !t.hasAttribute("data-turbolinks-suppress-warning"))
                            for (; e = e.parentNode;)
                                if (e === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", t.outerHTML)
                    }()
                }.call(this),
                function() {
                    var e, n, r;
                    t.start = function() {
                        return n() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0
                    }, n = function() {
                        return null == window.Turbolinks && (window.Turbolinks = t), r()
                    }, e = function() {
                        var e;
                        return (e = new t.Controller).adapter = new t.BrowserAdapter(e), e
                    }, (r = function() {
                        return window.Turbolinks === t
                    })() && t.start()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
    }.call(this), $(document).on("turbolinks:load", function() {
        new ClipboardJS(".copy-btn"), $("#loader-gif").show(0).delay(2e3).hide(0), $("#new_photo").change(function(e) {
            e.preventDefault(), $("span.notice").html("Uploading Photo...").addClass("active");
            var t = new FormData(this),
                n = $("input[name='photo[file]']")[0].files[0];
            t.append("photo", n, n.name), $.ajax({
                type: "POST",
                url: $(this).attr("action"),
                data: t,
                cache: !1,
                contentType: !1,
                processData: !1,
                success: function(e) {
                    toggleNotice(e.message, 2500)
                },
                error: function(e) {
                    toggleNotice(e.message, 2500)
                }
            })
        }), ~window.location.href.indexOf("?photo-album") && $(".action-type#action-photos").addClass("active"), $(".image-carousel").slick({
            infinite: !0,
            speed: 500,
            autoplay: !0,
            autoplaySpeed: 2e3
        }), $(".guestbooks-carousel").slick({
            dots: !0,
            infinite: !0,
            speed: 500
        }), $("span.link, a.close").on("click touch", function() {
            var e = "#action-" + $(this).data("target"),
                t = "#icon-" + $(this).data("target"),
                n = "#text-" + $(this).data("target");
            $(e).hasClass("active") ? ($(e).removeClass("active"), removeSVGColor($(".svg-color")), $("body").removeClass("active"), $(".overlay-2").removeClass("active"), $("p.svg-text").removeClass("active")) : ($(".action-type").removeClass("active"), $("p.svg-text").removeClass("active"), removeSVGColor($(".svg-color")), $(".overlay-2").addClass("active"), $("body").addClass("active"), $(e).addClass("active"), addSVGColor($(t)), $(n).addClass("active"))
        }), $(".btn-accordion").on("click touch", function() {
            var e = "#" + $(this).data("target");
            $(e).toggleClass("open")
        }), $(".btn-modal").on("click touch", function() {
            var e = $(this).data("target");
            $(e).addClass("active"), $(".overlay").addClass("active"), $(".wedding-card").addClass("inactive")
        }), $(".btn-close-modal").on("click touch", function() {
            var e = $(this).data("target");
            $(e).removeClass("active"), $(".overlay").removeClass("active"), $(".wedding-card").removeClass("inactive")
        }), $(".like").on("click", function(e) {
            e.preventDefault(), e.stopImmediatePropagation(), like($(this).data("card-id"))
        }), $("#btn-send-gifts").on("click touch", function(e) {
            e.preventDefault(), $(".overlay-2").addClass("active"), $("body").addClass("active"), $("#action-gifts").addClass("active")
        }), $(".btn-gifts-amount").on("click touch", function(e) {
            e.preventDefault();
            let t = $(this).data("amount");
            $("#money_gift_amount").val(t), unselectAllAmounts(), $(this).hasClass("selected") || $(this).addClass("selected"), document.getElementById("termErrorMessage").innerHTML = ""
        }), $("#money_gift_amount").keyup(function() {
            $(this).val() < 10 ? document.getElementById("termErrorMessage").innerHTML = "The minimum money gift amount is RM10".fontcolor("red") : document.getElementById("termErrorMessage").innerHTML = ""
        }), $("#new_money_gift").submit(function() {
            return !($("#money_gift_amount").val() < 10)
        })
    });
var AI = AI || {};
AI.trackEvent = function(e, t, n, r) {
    ga && (4 == arguments.length ? ga("send", "event", e, t, n, r) : 3 == arguments.length ? ga("send", "event", e, t, n) : 2 == arguments.length ? ga("send", "event", e, t) : 1 == arguments.length && ga("send", "event", e))
}, $(document).on("page:change", function() {
    ga && ga("send", "pageview")
}), $(document).on("click", ".ga-navigate-waze", function() {
    AI.trackEvent("Feature", "Navigate", "Waze", $(this).attr("href"))
}), $(document).on("click", ".ga-navigate-gmap", function() {
    AI.trackEvent("Feature", "Navigate", "Google Map", $(this).attr("href"))
}), $(document).on("click", ".ga-calendar-ical", function() {
    AI.trackEvent("Feature", "Calendar", "Ical", $(this).attr("href"))
}), $(document).on("click", ".ga-calendar-gcal", function() {
    AI.trackEvent("Feature", "Calendar", "Google Calendar", $(this).attr("href"))
}), $(document).on("click", ".ga-contact-whatsapp", function() {
    AI.trackEvent("Feature", "Contact", "Whatsapp", $(this).attr("href"))
}), $(document).on("click", ".ga-contact-call", function() {
    AI.trackEvent("Feature", "Contact", "Call", $(this).attr("href"))
}), $(document).on("click", ".ga-instagram", function() {
    AI.trackEvent("Feature", "Instagram", $(this).attr("href"))
}), $(document).on("click", ".ga-like", function() {
    AI.trackEvent("Feature", "Like", $(this).attr("href"))
});