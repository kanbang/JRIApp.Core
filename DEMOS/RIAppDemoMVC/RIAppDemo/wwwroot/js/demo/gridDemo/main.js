var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define("gridDemo/signalr/AbortController", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbortController = (function () {
        function AbortController() {
            this.isAborted = false;
            this.onabort = null;
        }
        AbortController.prototype.abort = function () {
            if (!this.isAborted) {
                this.isAborted = true;
                if (this.onabort) {
                    this.onabort();
                }
            }
        };
        Object.defineProperty(AbortController.prototype, "signal", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbortController.prototype, "aborted", {
            get: function () {
                return this.isAborted;
            },
            enumerable: true,
            configurable: true
        });
        return AbortController;
    }());
    exports.AbortController = AbortController;
});
define("gridDemo/signalr/Errors", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpError = (function (_super) {
        __extends(HttpError, _super);
        function HttpError(errorMessage, statusCode) {
            var _newTarget = this.constructor;
            var _this = this;
            var trueProto = _newTarget.prototype;
            _this = _super.call(this, errorMessage) || this;
            _this.statusCode = statusCode;
            _this.__proto__ = trueProto;
            return _this;
        }
        return HttpError;
    }(Error));
    exports.HttpError = HttpError;
    var TimeoutError = (function (_super) {
        __extends(TimeoutError, _super);
        function TimeoutError(errorMessage) {
            var _newTarget = this.constructor;
            if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
            var _this = this;
            var trueProto = _newTarget.prototype;
            _this = _super.call(this, errorMessage) || this;
            _this.__proto__ = trueProto;
            return _this;
        }
        return TimeoutError;
    }(Error));
    exports.TimeoutError = TimeoutError;
    var AbortError = (function (_super) {
        __extends(AbortError, _super);
        function AbortError(errorMessage) {
            var _newTarget = this.constructor;
            if (errorMessage === void 0) { errorMessage = "An abort occurred."; }
            var _this = this;
            var trueProto = _newTarget.prototype;
            _this = _super.call(this, errorMessage) || this;
            _this.__proto__ = trueProto;
            return _this;
        }
        return AbortError;
    }(Error));
    exports.AbortError = AbortError;
});
define("gridDemo/signalr/HttpClient", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpResponse = (function () {
        function HttpResponse(statusCode, statusText, content) {
            this.statusCode = statusCode;
            this.statusText = statusText;
            this.content = content;
        }
        return HttpResponse;
    }());
    exports.HttpResponse = HttpResponse;
    var HttpClient = (function () {
        function HttpClient() {
        }
        HttpClient.prototype.get = function (url, options) {
            return this.send(__assign(__assign({}, options), { method: "GET", url: url }));
        };
        HttpClient.prototype.post = function (url, options) {
            return this.send(__assign(__assign({}, options), { method: "POST", url: url }));
        };
        HttpClient.prototype.delete = function (url, options) {
            return this.send(__assign(__assign({}, options), { method: "DELETE", url: url }));
        };
        HttpClient.prototype.getCookieString = function (url) {
            return "";
        };
        return HttpClient;
    }());
    exports.HttpClient = HttpClient;
});
define("gridDemo/signalr/ILogger", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Trace"] = 0] = "Trace";
        LogLevel[LogLevel["Debug"] = 1] = "Debug";
        LogLevel[LogLevel["Information"] = 2] = "Information";
        LogLevel[LogLevel["Warning"] = 3] = "Warning";
        LogLevel[LogLevel["Error"] = 4] = "Error";
        LogLevel[LogLevel["Critical"] = 5] = "Critical";
        LogLevel[LogLevel["None"] = 6] = "None";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
});
define("gridDemo/signalr/Loggers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NullLogger = (function () {
        function NullLogger() {
        }
        NullLogger.prototype.log = function (_logLevel, _message) {
        };
        NullLogger.instance = new NullLogger();
        return NullLogger;
    }());
    exports.NullLogger = NullLogger;
});
define("gridDemo/signalr/Stream", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("gridDemo/signalr/Subject", ["require", "exports", "gridDemo/signalr/Utils"], function (require, exports, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject = (function () {
        function Subject() {
            this.observers = [];
        }
        Subject.prototype.next = function (item) {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.next(item);
            }
        };
        Subject.prototype.error = function (err) {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                if (observer.error) {
                    observer.error(err);
                }
            }
        };
        Subject.prototype.complete = function () {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                if (observer.complete) {
                    observer.complete();
                }
            }
        };
        Subject.prototype.subscribe = function (observer) {
            this.observers.push(observer);
            return new Utils_1.SubjectSubscription(this, observer);
        };
        return Subject;
    }());
    exports.Subject = Subject;
});
define("gridDemo/signalr/Utils", ["require", "exports", "gridDemo/signalr/ILogger", "gridDemo/signalr/Loggers"], function (require, exports, ILogger_1, Loggers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Arg = (function () {
        function Arg() {
        }
        Arg.isRequired = function (val, name) {
            if (val === null || val === undefined) {
                throw new Error("The '" + name + "' argument is required.");
            }
        };
        Arg.isIn = function (val, values, name) {
            if (!(val in values)) {
                throw new Error("Unknown " + name + " value: " + val + ".");
            }
        };
        return Arg;
    }());
    exports.Arg = Arg;
    var Platform = (function () {
        function Platform() {
        }
        Object.defineProperty(Platform, "isBrowser", {
            get: function () {
                return typeof window === "object";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Platform, "isWebWorker", {
            get: function () {
                return typeof self === "object" && "importScripts" in self;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Platform, "isNode", {
            get: function () {
                return !this.isBrowser && !this.isWebWorker;
            },
            enumerable: true,
            configurable: true
        });
        return Platform;
    }());
    exports.Platform = Platform;
    function getDataDetail(data, includeContent) {
        var detail = "";
        if (isArrayBuffer(data)) {
            detail = "Binary data of length " + data.byteLength;
            if (includeContent) {
                detail += ". Content: '" + formatArrayBuffer(data) + "'";
            }
        }
        else if (typeof data === "string") {
            detail = "String data of length " + data.length;
            if (includeContent) {
                detail += ". Content: '" + data + "'";
            }
        }
        return detail;
    }
    exports.getDataDetail = getDataDetail;
    function formatArrayBuffer(data) {
        var view = new Uint8Array(data);
        var str = "";
        view.forEach(function (num) {
            var pad = num < 16 ? "0" : "";
            str += "0x" + pad + num.toString(16) + " ";
        });
        return str.substr(0, str.length - 1);
    }
    exports.formatArrayBuffer = formatArrayBuffer;
    function isArrayBuffer(val) {
        return val && typeof ArrayBuffer !== "undefined" &&
            (val instanceof ArrayBuffer ||
                (val.constructor && val.constructor.name === "ArrayBuffer"));
    }
    exports.isArrayBuffer = isArrayBuffer;
    function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, token, responseType, response;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!accessTokenFactory) return [3, 2];
                        return [4, accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers = (_a = {},
                                _a["Authorization"] = "Bearer " + token,
                                _a);
                        }
                        _b.label = 2;
                    case 2:
                        logger.log(ILogger_1.LogLevel.Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                        responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                        return [4, httpClient.post(url, {
                                content: content,
                                headers: headers,
                                responseType: responseType,
                            })];
                    case 3:
                        response = _b.sent();
                        logger.log(ILogger_1.LogLevel.Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                        return [2];
                }
            });
        });
    }
    exports.sendMessage = sendMessage;
    function createLogger(logger) {
        if (logger === undefined) {
            return new ConsoleLogger(ILogger_1.LogLevel.Information);
        }
        if (logger === null) {
            return Loggers_1.NullLogger.instance;
        }
        if (logger.log) {
            return logger;
        }
        return new ConsoleLogger(logger);
    }
    exports.createLogger = createLogger;
    var SubjectSubscription = (function () {
        function SubjectSubscription(subject, observer) {
            this.subject = subject;
            this.observer = observer;
        }
        SubjectSubscription.prototype.dispose = function () {
            var index = this.subject.observers.indexOf(this.observer);
            if (index > -1) {
                this.subject.observers.splice(index, 1);
            }
            if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
                this.subject.cancelCallback().catch(function (_) { });
            }
        };
        return SubjectSubscription;
    }());
    exports.SubjectSubscription = SubjectSubscription;
    var ConsoleLogger = (function () {
        function ConsoleLogger(minimumLogLevel) {
            this.minimumLogLevel = minimumLogLevel;
            this.outputConsole = console;
        }
        ConsoleLogger.prototype.log = function (logLevel, message) {
            if (logLevel >= this.minimumLogLevel) {
                switch (logLevel) {
                    case ILogger_1.LogLevel.Critical:
                    case ILogger_1.LogLevel.Error:
                        this.outputConsole.error("[" + new Date().toISOString() + "] " + ILogger_1.LogLevel[logLevel] + ": " + message);
                        break;
                    case ILogger_1.LogLevel.Warning:
                        this.outputConsole.warn("[" + new Date().toISOString() + "] " + ILogger_1.LogLevel[logLevel] + ": " + message);
                        break;
                    case ILogger_1.LogLevel.Information:
                        this.outputConsole.info("[" + new Date().toISOString() + "] " + ILogger_1.LogLevel[logLevel] + ": " + message);
                        break;
                    default:
                        this.outputConsole.log("[" + new Date().toISOString() + "] " + ILogger_1.LogLevel[logLevel] + ": " + message);
                        break;
                }
            }
        };
        return ConsoleLogger;
    }());
    exports.ConsoleLogger = ConsoleLogger;
});
define("gridDemo/signalr/NodeHttpClient", ["require", "exports", "gridDemo/signalr/Errors", "gridDemo/signalr/HttpClient", "gridDemo/signalr/ILogger", "gridDemo/signalr/Utils"], function (require, exports, Errors_1, HttpClient_1, ILogger_2, Utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var requestModule;
    if (typeof XMLHttpRequest === "undefined") {
        var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
        requestModule = requireFunc("request");
    }
    var NodeHttpClient = (function (_super) {
        __extends(NodeHttpClient, _super);
        function NodeHttpClient(logger) {
            var _this = _super.call(this) || this;
            if (typeof requestModule === "undefined") {
                throw new Error("The 'request' module could not be loaded.");
            }
            _this.logger = logger;
            _this.cookieJar = requestModule.jar();
            _this.request = requestModule.defaults({ jar: _this.cookieJar });
            return _this;
        }
        NodeHttpClient.prototype.send = function (httpRequest) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var requestBody;
                if (Utils_2.isArrayBuffer(httpRequest.content)) {
                    requestBody = Buffer.from(httpRequest.content);
                }
                else {
                    requestBody = httpRequest.content || "";
                }
                var currentRequest = _this.request(httpRequest.url, {
                    body: requestBody,
                    encoding: httpRequest.responseType === "arraybuffer" ? null : "utf8",
                    headers: __assign({ "X-Requested-With": "XMLHttpRequest" }, httpRequest.headers),
                    method: httpRequest.method,
                    timeout: httpRequest.timeout,
                }, function (error, response, body) {
                    if (httpRequest.abortSignal) {
                        httpRequest.abortSignal.onabort = null;
                    }
                    if (error) {
                        if (error.code === "ETIMEDOUT") {
                            _this.logger.log(ILogger_2.LogLevel.Warning, "Timeout from HTTP request.");
                            reject(new Errors_1.TimeoutError());
                        }
                        _this.logger.log(ILogger_2.LogLevel.Warning, "Error from HTTP request. " + error);
                        reject(error);
                        return;
                    }
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        resolve(new HttpClient_1.HttpResponse(response.statusCode, response.statusMessage || "", body));
                    }
                    else {
                        reject(new Errors_1.HttpError(response.statusMessage || "", response.statusCode || 0));
                    }
                });
                if (httpRequest.abortSignal) {
                    httpRequest.abortSignal.onabort = function () {
                        currentRequest.abort();
                        reject(new Errors_1.AbortError());
                    };
                }
            });
        };
        NodeHttpClient.prototype.getCookieString = function (url) {
            return this.cookieJar.getCookieString(url);
        };
        return NodeHttpClient;
    }(HttpClient_1.HttpClient));
    exports.NodeHttpClient = NodeHttpClient;
});
define("gridDemo/signalr/XhrHttpClient", ["require", "exports", "gridDemo/signalr/Errors", "gridDemo/signalr/HttpClient", "gridDemo/signalr/ILogger"], function (require, exports, Errors_2, HttpClient_2, ILogger_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var XhrHttpClient = (function (_super) {
        __extends(XhrHttpClient, _super);
        function XhrHttpClient(logger) {
            var _this = _super.call(this) || this;
            _this.logger = logger;
            return _this;
        }
        XhrHttpClient.prototype.send = function (request) {
            var _this = this;
            if (request.abortSignal && request.abortSignal.aborted) {
                return Promise.reject(new Errors_2.AbortError());
            }
            if (!request.method) {
                return Promise.reject(new Error("No method defined."));
            }
            if (!request.url) {
                return Promise.reject(new Error("No url defined."));
            }
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(request.method, request.url, true);
                xhr.withCredentials = true;
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                var headers = request.headers;
                if (headers) {
                    Object.keys(headers)
                        .forEach(function (header) {
                        xhr.setRequestHeader(header, headers[header]);
                    });
                }
                if (request.responseType) {
                    xhr.responseType = request.responseType;
                }
                if (request.abortSignal) {
                    request.abortSignal.onabort = function () {
                        xhr.abort();
                        reject(new Errors_2.AbortError());
                    };
                }
                if (request.timeout) {
                    xhr.timeout = request.timeout;
                }
                xhr.onload = function () {
                    if (request.abortSignal) {
                        request.abortSignal.onabort = null;
                    }
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(new HttpClient_2.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                    }
                    else {
                        reject(new Errors_2.HttpError(xhr.statusText, xhr.status));
                    }
                };
                xhr.onerror = function () {
                    _this.logger.log(ILogger_3.LogLevel.Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                    reject(new Errors_2.HttpError(xhr.statusText, xhr.status));
                };
                xhr.ontimeout = function () {
                    _this.logger.log(ILogger_3.LogLevel.Warning, "Timeout from HTTP request.");
                    reject(new Errors_2.TimeoutError());
                };
                xhr.send(request.content || "");
            });
        };
        return XhrHttpClient;
    }(HttpClient_2.HttpClient));
    exports.XhrHttpClient = XhrHttpClient;
});
define("gridDemo/signalr/DefaultHttpClient", ["require", "exports", "gridDemo/signalr/Errors", "gridDemo/signalr/HttpClient", "gridDemo/signalr/NodeHttpClient", "gridDemo/signalr/XhrHttpClient"], function (require, exports, Errors_3, HttpClient_3, NodeHttpClient_1, XhrHttpClient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultHttpClient = (function (_super) {
        __extends(DefaultHttpClient, _super);
        function DefaultHttpClient(logger) {
            var _this = _super.call(this) || this;
            if (typeof XMLHttpRequest !== "undefined") {
                _this.httpClient = new XhrHttpClient_1.XhrHttpClient(logger);
            }
            else {
                _this.httpClient = new NodeHttpClient_1.NodeHttpClient(logger);
            }
            return _this;
        }
        DefaultHttpClient.prototype.send = function (request) {
            if (request.abortSignal && request.abortSignal.aborted) {
                return Promise.reject(new Errors_3.AbortError());
            }
            if (!request.method) {
                return Promise.reject(new Error("No method defined."));
            }
            if (!request.url) {
                return Promise.reject(new Error("No url defined."));
            }
            return this.httpClient.send(request);
        };
        DefaultHttpClient.prototype.getCookieString = function (url) {
            return this.httpClient.getCookieString(url);
        };
        return DefaultHttpClient;
    }(HttpClient_3.HttpClient));
    exports.DefaultHttpClient = DefaultHttpClient;
});
define("gridDemo/signalr/ITransport", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpTransportType;
    (function (HttpTransportType) {
        HttpTransportType[HttpTransportType["None"] = 0] = "None";
        HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
        HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
        HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
    })(HttpTransportType = exports.HttpTransportType || (exports.HttpTransportType = {}));
    var TransferFormat;
    (function (TransferFormat) {
        TransferFormat[TransferFormat["Text"] = 1] = "Text";
        TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
    })(TransferFormat = exports.TransferFormat || (exports.TransferFormat = {}));
});
define("gridDemo/signalr/Polyfills", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("gridDemo/signalr/IHttpConnectionOptions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("gridDemo/signalr/TextMessageFormat", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextMessageFormat = (function () {
        function TextMessageFormat() {
        }
        TextMessageFormat.write = function (output) {
            return "" + output + TextMessageFormat.RecordSeparator;
        };
        TextMessageFormat.parse = function (input) {
            if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
                throw new Error("Message is incomplete.");
            }
            var messages = input.split(TextMessageFormat.RecordSeparator);
            messages.pop();
            return messages;
        };
        TextMessageFormat.RecordSeparatorCode = 0x1e;
        TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
        return TextMessageFormat;
    }());
    exports.TextMessageFormat = TextMessageFormat;
});
define("gridDemo/signalr/HandshakeProtocol", ["require", "exports", "gridDemo/signalr/TextMessageFormat", "gridDemo/signalr/Utils"], function (require, exports, TextMessageFormat_1, Utils_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HandshakeProtocol = (function () {
        function HandshakeProtocol() {
        }
        HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
            return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(handshakeRequest));
        };
        HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
            var responseMessage;
            var messageData;
            var remainingData;
            if (Utils_3.isArrayBuffer(data) || (typeof Buffer !== "undefined" && data instanceof Buffer)) {
                var binaryData = new Uint8Array(data);
                var separatorIndex = binaryData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparatorCode);
                if (separatorIndex === -1) {
                    throw new Error("Message is incomplete.");
                }
                var responseLength = separatorIndex + 1;
                messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
                remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
            }
            else {
                var textData = data;
                var separatorIndex = textData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparator);
                if (separatorIndex === -1) {
                    throw new Error("Message is incomplete.");
                }
                var responseLength = separatorIndex + 1;
                messageData = textData.substring(0, responseLength);
                remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
            }
            var messages = TextMessageFormat_1.TextMessageFormat.parse(messageData);
            var response = JSON.parse(messages[0]);
            if (response.type) {
                throw new Error("Expected a handshake response from the server.");
            }
            responseMessage = response;
            return [remainingData, responseMessage];
        };
        return HandshakeProtocol;
    }());
    exports.HandshakeProtocol = HandshakeProtocol;
});
define("gridDemo/signalr/IConnection", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("gridDemo/signalr/IHubProtocol", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageType;
    (function (MessageType) {
        MessageType[MessageType["Invocation"] = 1] = "Invocation";
        MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
        MessageType[MessageType["Completion"] = 3] = "Completion";
        MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
        MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
        MessageType[MessageType["Ping"] = 6] = "Ping";
        MessageType[MessageType["Close"] = 7] = "Close";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
});
define("gridDemo/signalr/IRetryPolicy", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("gridDemo/signalr/HubConnection", ["require", "exports", "gridDemo/signalr/HandshakeProtocol", "gridDemo/signalr/IHubProtocol", "gridDemo/signalr/ILogger", "gridDemo/signalr/Subject", "gridDemo/signalr/Utils"], function (require, exports, HandshakeProtocol_1, IHubProtocol_1, ILogger_4, Subject_1, Utils_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
    var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
    var HubConnectionState;
    (function (HubConnectionState) {
        HubConnectionState["Disconnected"] = "Disconnected";
        HubConnectionState["Connecting"] = "Connecting";
        HubConnectionState["Connected"] = "Connected";
        HubConnectionState["Disconnecting"] = "Disconnecting";
        HubConnectionState["Reconnecting"] = "Reconnecting";
    })(HubConnectionState = exports.HubConnectionState || (exports.HubConnectionState = {}));
    var HubConnection = (function () {
        function HubConnection(connection, logger, protocol, reconnectPolicy) {
            var _this = this;
            Utils_4.Arg.isRequired(connection, "connection");
            Utils_4.Arg.isRequired(logger, "logger");
            Utils_4.Arg.isRequired(protocol, "protocol");
            this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
            this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
            this.logger = logger;
            this.protocol = protocol;
            this.connection = connection;
            this.reconnectPolicy = reconnectPolicy;
            this.handshakeProtocol = new HandshakeProtocol_1.HandshakeProtocol();
            this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
            this.connection.onclose = function (error) { return _this.connectionClosed(error); };
            this.callbacks = {};
            this.methods = {};
            this.closedCallbacks = [];
            this.reconnectingCallbacks = [];
            this.reconnectedCallbacks = [];
            this.invocationId = 0;
            this.receivedHandshakeResponse = false;
            this.connectionState = HubConnectionState.Disconnected;
            this.connectionStarted = false;
            this.cachedPingMessage = this.protocol.writeMessage({ type: IHubProtocol_1.MessageType.Ping });
        }
        HubConnection.create = function (connection, logger, protocol, reconnectPolicy) {
            return new HubConnection(connection, logger, protocol, reconnectPolicy);
        };
        Object.defineProperty(HubConnection.prototype, "state", {
            get: function () {
                return this.connectionState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HubConnection.prototype, "connectionId", {
            get: function () {
                return this.connection ? (this.connection.connectionId || null) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HubConnection.prototype, "baseUrl", {
            get: function () {
                return this.connection.baseUrl || "";
            },
            set: function (url) {
                if (this.connectionState !== HubConnectionState.Disconnected && this.connectionState !== HubConnectionState.Reconnecting) {
                    throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
                }
                if (!url) {
                    throw new Error("The HubConnection url must be a valid url.");
                }
                this.connection.baseUrl = url;
            },
            enumerable: true,
            configurable: true
        });
        HubConnection.prototype.start = function () {
            this.startPromise = this.startWithStateTransitions();
            return this.startPromise;
        };
        HubConnection.prototype.startWithStateTransitions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.connectionState !== HubConnectionState.Disconnected) {
                                return [2, Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];
                            }
                            this.connectionState = HubConnectionState.Connecting;
                            this.logger.log(ILogger_4.LogLevel.Debug, "Starting HubConnection.");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, this.startInternal()];
                        case 2:
                            _a.sent();
                            this.connectionState = HubConnectionState.Connected;
                            this.connectionStarted = true;
                            this.logger.log(ILogger_4.LogLevel.Debug, "HubConnection connected successfully.");
                            return [3, 4];
                        case 3:
                            e_1 = _a.sent();
                            this.connectionState = HubConnectionState.Disconnected;
                            this.logger.log(ILogger_4.LogLevel.Debug, "HubConnection failed to start successfully because of error '" + e_1 + "'.");
                            return [2, Promise.reject(e_1)];
                        case 4: return [2];
                    }
                });
            });
        };
        HubConnection.prototype.startInternal = function () {
            return __awaiter(this, void 0, void 0, function () {
                var handshakePromise, handshakeRequest, e_2;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.stopDuringStartError = undefined;
                            this.receivedHandshakeResponse = false;
                            handshakePromise = new Promise(function (resolve, reject) {
                                _this.handshakeResolver = resolve;
                                _this.handshakeRejecter = reject;
                            });
                            return [4, this.connection.start(this.protocol.transferFormat)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 7]);
                            handshakeRequest = {
                                protocol: this.protocol.name,
                                version: this.protocol.version,
                            };
                            this.logger.log(ILogger_4.LogLevel.Debug, "Sending handshake request.");
                            return [4, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                        case 3:
                            _a.sent();
                            this.logger.log(ILogger_4.LogLevel.Information, "Using HubProtocol '" + this.protocol.name + "'.");
                            this.cleanupTimeout();
                            this.resetTimeoutPeriod();
                            this.resetKeepAliveInterval();
                            return [4, handshakePromise];
                        case 4:
                            _a.sent();
                            if (this.stopDuringStartError) {
                                throw this.stopDuringStartError;
                            }
                            return [3, 7];
                        case 5:
                            e_2 = _a.sent();
                            this.logger.log(ILogger_4.LogLevel.Debug, "Hub handshake failed with error '" + e_2 + "' during start(). Stopping HubConnection.");
                            this.cleanupTimeout();
                            this.cleanupPingTimer();
                            return [4, this.connection.stop(e_2)];
                        case 6:
                            _a.sent();
                            throw e_2;
                        case 7: return [2];
                    }
                });
            });
        };
        HubConnection.prototype.stop = function () {
            return __awaiter(this, void 0, void 0, function () {
                var startPromise, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            startPromise = this.startPromise;
                            this.stopPromise = this.stopInternal();
                            return [4, this.stopPromise];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4, startPromise];
                        case 3:
                            _a.sent();
                            return [3, 5];
                        case 4:
                            e_3 = _a.sent();
                            return [3, 5];
                        case 5: return [2];
                    }
                });
            });
        };
        HubConnection.prototype.stopInternal = function (error) {
            if (this.connectionState === HubConnectionState.Disconnected) {
                this.logger.log(ILogger_4.LogLevel.Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
                return Promise.resolve();
            }
            if (this.connectionState === HubConnectionState.Disconnecting) {
                this.logger.log(ILogger_4.LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                return this.stopPromise;
            }
            this.connectionState = HubConnectionState.Disconnecting;
            this.logger.log(ILogger_4.LogLevel.Debug, "Stopping HubConnection.");
            if (this.reconnectDelayHandle) {
                this.logger.log(ILogger_4.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
                clearTimeout(this.reconnectDelayHandle);
                this.reconnectDelayHandle = undefined;
                this.completeClose();
                return Promise.resolve();
            }
            this.cleanupTimeout();
            this.cleanupPingTimer();
            this.stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
            return this.connection.stop(error);
        };
        HubConnection.prototype.stream = function (methodName) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
            var invocationDescriptor = this.createStreamInvocation(methodName, args, streamIds);
            var promiseQueue;
            var subject = new Subject_1.Subject();
            subject.cancelCallback = function () {
                var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
                delete _this.callbacks[invocationDescriptor.invocationId];
                return promiseQueue.then(function () {
                    return _this.sendWithProtocol(cancelInvocation);
                });
            };
            this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    subject.error(error);
                    return;
                }
                else if (invocationEvent) {
                    if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
                        if (invocationEvent.error) {
                            subject.error(new Error(invocationEvent.error));
                        }
                        else {
                            subject.complete();
                        }
                    }
                    else {
                        subject.next((invocationEvent.item));
                    }
                }
            };
            promiseQueue = this.sendWithProtocol(invocationDescriptor)
                .catch(function (e) {
                subject.error(e);
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
            this.launchStreams(streams, promiseQueue);
            return subject;
        };
        HubConnection.prototype.sendMessage = function (message) {
            this.resetKeepAliveInterval();
            return this.connection.send(message);
        };
        HubConnection.prototype.sendWithProtocol = function (message) {
            return this.sendMessage(this.protocol.writeMessage(message));
        };
        HubConnection.prototype.send = function (methodName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
            var sendPromise = this.sendWithProtocol(this.createInvocation(methodName, args, true, streamIds));
            this.launchStreams(streams, sendPromise);
            return sendPromise;
        };
        HubConnection.prototype.invoke = function (methodName) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _a = this.replaceStreamingParams(args), streams = _a[0], streamIds = _a[1];
            var invocationDescriptor = this.createInvocation(methodName, args, false, streamIds);
            var p = new Promise(function (resolve, reject) {
                _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    else if (invocationEvent) {
                        if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
                            if (invocationEvent.error) {
                                reject(new Error(invocationEvent.error));
                            }
                            else {
                                resolve(invocationEvent.result);
                            }
                        }
                        else {
                            reject(new Error("Unexpected message type: " + invocationEvent.type));
                        }
                    }
                };
                var promiseQueue = _this.sendWithProtocol(invocationDescriptor)
                    .catch(function (e) {
                    reject(e);
                    delete _this.callbacks[invocationDescriptor.invocationId];
                });
                _this.launchStreams(streams, promiseQueue);
            });
            return p;
        };
        HubConnection.prototype.on = function (methodName, newMethod) {
            if (!methodName || !newMethod) {
                return;
            }
            methodName = methodName.toLowerCase();
            if (!this.methods[methodName]) {
                this.methods[methodName] = [];
            }
            if (this.methods[methodName].indexOf(newMethod) !== -1) {
                return;
            }
            this.methods[methodName].push(newMethod);
        };
        HubConnection.prototype.off = function (methodName, method) {
            if (!methodName) {
                return;
            }
            methodName = methodName.toLowerCase();
            var handlers = this.methods[methodName];
            if (!handlers) {
                return;
            }
            if (method) {
                var removeIdx = handlers.indexOf(method);
                if (removeIdx !== -1) {
                    handlers.splice(removeIdx, 1);
                    if (handlers.length === 0) {
                        delete this.methods[methodName];
                    }
                }
            }
            else {
                delete this.methods[methodName];
            }
        };
        HubConnection.prototype.onclose = function (callback) {
            if (callback) {
                this.closedCallbacks.push(callback);
            }
        };
        HubConnection.prototype.onreconnecting = function (callback) {
            if (callback) {
                this.reconnectingCallbacks.push(callback);
            }
        };
        HubConnection.prototype.onreconnected = function (callback) {
            if (callback) {
                this.reconnectedCallbacks.push(callback);
            }
        };
        HubConnection.prototype.processIncomingData = function (data) {
            this.cleanupTimeout();
            if (!this.receivedHandshakeResponse) {
                data = this.processHandshakeResponse(data);
                this.receivedHandshakeResponse = true;
            }
            if (data) {
                var messages = this.protocol.parseMessages(data, this.logger);
                for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                    var message = messages_1[_i];
                    switch (message.type) {
                        case IHubProtocol_1.MessageType.Invocation:
                            this.invokeClientMethod(message);
                            break;
                        case IHubProtocol_1.MessageType.StreamItem:
                        case IHubProtocol_1.MessageType.Completion:
                            var callback = this.callbacks[message.invocationId];
                            if (callback) {
                                if (message.type === IHubProtocol_1.MessageType.Completion) {
                                    delete this.callbacks[message.invocationId];
                                }
                                callback(message);
                            }
                            break;
                        case IHubProtocol_1.MessageType.Ping:
                            break;
                        case IHubProtocol_1.MessageType.Close:
                            this.logger.log(ILogger_4.LogLevel.Information, "Close message received from server.");
                            this.stopPromise = this.stopInternal(message.error ? new Error("Server returned an error on close: " + message.error) : undefined);
                            break;
                        default:
                            this.logger.log(ILogger_4.LogLevel.Warning, "Invalid message type: " + message.type + ".");
                            break;
                    }
                }
            }
            this.resetTimeoutPeriod();
        };
        HubConnection.prototype.processHandshakeResponse = function (data) {
            var _a;
            var responseMessage;
            var remainingData;
            try {
                _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
            }
            catch (e) {
                var message = "Error parsing handshake response: " + e;
                this.logger.log(ILogger_4.LogLevel.Error, message);
                var error = new Error(message);
                this.handshakeRejecter(error);
                throw error;
            }
            if (responseMessage.error) {
                var message = "Server returned handshake error: " + responseMessage.error;
                this.logger.log(ILogger_4.LogLevel.Error, message);
                var error = new Error(message);
                this.handshakeRejecter(error);
                throw error;
            }
            else {
                this.logger.log(ILogger_4.LogLevel.Debug, "Server handshake complete.");
            }
            this.handshakeResolver();
            return remainingData;
        };
        HubConnection.prototype.resetKeepAliveInterval = function () {
            var _this = this;
            this.cleanupPingTimer();
            this.pingServerHandle = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(this.connectionState === HubConnectionState.Connected)) return [3, 4];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4, this.sendMessage(this.cachedPingMessage)];
                        case 2:
                            _b.sent();
                            return [3, 4];
                        case 3:
                            _a = _b.sent();
                            this.cleanupPingTimer();
                            return [3, 4];
                        case 4: return [2];
                    }
                });
            }); }, this.keepAliveIntervalInMilliseconds);
        };
        HubConnection.prototype.resetTimeoutPeriod = function () {
            var _this = this;
            if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
                this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
            }
        };
        HubConnection.prototype.serverTimeout = function () {
            this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
        };
        HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
            var _this = this;
            var methods = this.methods[invocationMessage.target.toLowerCase()];
            if (methods) {
                try {
                    methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
                }
                catch (e) {
                    this.logger.log(ILogger_4.LogLevel.Error, "A callback for the method " + invocationMessage.target.toLowerCase() + " threw error '" + e + "'.");
                }
                if (invocationMessage.invocationId) {
                    var message = "Server requested a response, which is not supported in this version of the client.";
                    this.logger.log(ILogger_4.LogLevel.Error, message);
                    this.stopPromise = this.stopInternal(new Error(message));
                }
            }
            else {
                this.logger.log(ILogger_4.LogLevel.Warning, "No client method with the name '" + invocationMessage.target + "' found.");
            }
        };
        HubConnection.prototype.connectionClosed = function (error) {
            this.logger.log(ILogger_4.LogLevel.Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this.connectionState + ".");
            this.stopDuringStartError = this.stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
            if (this.handshakeResolver) {
                this.handshakeResolver();
            }
            this.cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
            this.cleanupTimeout();
            this.cleanupPingTimer();
            if (this.connectionState === HubConnectionState.Disconnecting) {
                this.completeClose(error);
            }
            else if (this.connectionState === HubConnectionState.Connected && this.reconnectPolicy) {
                this.reconnect(error);
            }
            else if (this.connectionState === HubConnectionState.Connected) {
                this.completeClose(error);
            }
        };
        HubConnection.prototype.completeClose = function (error) {
            var _this = this;
            if (this.connectionStarted) {
                this.connectionState = HubConnectionState.Disconnected;
                this.connectionStarted = false;
                try {
                    this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
                }
                catch (e) {
                    this.logger.log(ILogger_4.LogLevel.Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
                }
            }
        };
        HubConnection.prototype.reconnect = function (error) {
            return __awaiter(this, void 0, void 0, function () {
                var reconnectStartTime, previousReconnectAttempts, retryError, nextRetryDelay, e_4;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reconnectStartTime = Date.now();
                            previousReconnectAttempts = 0;
                            retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
                            nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
                            if (nextRetryDelay === null) {
                                this.logger.log(ILogger_4.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
                                this.completeClose(error);
                                return [2];
                            }
                            this.connectionState = HubConnectionState.Reconnecting;
                            if (error) {
                                this.logger.log(ILogger_4.LogLevel.Information, "Connection reconnecting because of error '" + error + "'.");
                            }
                            else {
                                this.logger.log(ILogger_4.LogLevel.Information, "Connection reconnecting.");
                            }
                            if (this.onreconnecting) {
                                try {
                                    this.reconnectingCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
                                }
                                catch (e) {
                                    this.logger.log(ILogger_4.LogLevel.Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
                                }
                                if (this.connectionState !== HubConnectionState.Reconnecting) {
                                    this.logger.log(ILogger_4.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                                    return [2];
                                }
                            }
                            _a.label = 1;
                        case 1:
                            if (!(nextRetryDelay !== null)) return [3, 7];
                            this.logger.log(ILogger_4.LogLevel.Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
                            return [4, new Promise(function (resolve) {
                                    _this.reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
                                })];
                        case 2:
                            _a.sent();
                            this.reconnectDelayHandle = undefined;
                            if (this.connectionState !== HubConnectionState.Reconnecting) {
                                this.logger.log(ILogger_4.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                                return [2];
                            }
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4, this.startInternal()];
                        case 4:
                            _a.sent();
                            this.connectionState = HubConnectionState.Connected;
                            this.logger.log(ILogger_4.LogLevel.Information, "HubConnection reconnected successfully.");
                            if (this.onreconnected) {
                                try {
                                    this.reconnectedCallbacks.forEach(function (c) { return c.apply(_this, [_this.connection.connectionId]); });
                                }
                                catch (e) {
                                    this.logger.log(ILogger_4.LogLevel.Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
                                }
                            }
                            return [2];
                        case 5:
                            e_4 = _a.sent();
                            this.logger.log(ILogger_4.LogLevel.Information, "Reconnect attempt failed because of error '" + e_4 + "'.");
                            if (this.connectionState !== HubConnectionState.Reconnecting) {
                                this.logger.log(ILogger_4.LogLevel.Debug, "Connection left the reconnecting state during reconnect attempt. Done reconnecting.");
                                return [2];
                            }
                            retryError = e_4 instanceof Error ? e_4 : new Error(e_4.toString());
                            nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
                            return [3, 6];
                        case 6: return [3, 1];
                        case 7:
                            this.logger.log(ILogger_4.LogLevel.Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
                            this.completeClose();
                            return [2];
                    }
                });
            });
        };
        HubConnection.prototype.getNextRetryDelay = function (previousRetryCount, elapsedMilliseconds, retryReason) {
            try {
                return this.reconnectPolicy.nextRetryDelayInMilliseconds({
                    elapsedMilliseconds: elapsedMilliseconds,
                    previousRetryCount: previousRetryCount,
                    retryReason: retryReason,
                });
            }
            catch (e) {
                this.logger.log(ILogger_4.LogLevel.Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
                return null;
            }
        };
        HubConnection.prototype.cancelCallbacksWithError = function (error) {
            var callbacks = this.callbacks;
            this.callbacks = {};
            Object.keys(callbacks)
                .forEach(function (key) {
                var callback = callbacks[key];
                callback(null, error);
            });
        };
        HubConnection.prototype.cleanupPingTimer = function () {
            if (this.pingServerHandle) {
                clearTimeout(this.pingServerHandle);
            }
        };
        HubConnection.prototype.cleanupTimeout = function () {
            if (this.timeoutHandle) {
                clearTimeout(this.timeoutHandle);
            }
        };
        HubConnection.prototype.createInvocation = function (methodName, args, nonblocking, streamIds) {
            if (nonblocking) {
                return {
                    arguments: args,
                    streamIds: streamIds,
                    target: methodName,
                    type: IHubProtocol_1.MessageType.Invocation,
                };
            }
            else {
                var invocationId = this.invocationId;
                this.invocationId++;
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    streamIds: streamIds,
                    target: methodName,
                    type: IHubProtocol_1.MessageType.Invocation,
                };
            }
        };
        HubConnection.prototype.launchStreams = function (streams, promiseQueue) {
            var _this = this;
            if (streams.length === 0) {
                return;
            }
            if (!promiseQueue) {
                promiseQueue = Promise.resolve();
            }
            var _loop_1 = function (streamId) {
                streams[streamId].subscribe({
                    complete: function () {
                        promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId)); });
                    },
                    error: function (err) {
                        var message;
                        if (err instanceof Error) {
                            message = err.message;
                        }
                        else if (err && err.toString) {
                            message = err.toString();
                        }
                        else {
                            message = "Unknown error";
                        }
                        promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createCompletionMessage(streamId, message)); });
                    },
                    next: function (item) {
                        promiseQueue = promiseQueue.then(function () { return _this.sendWithProtocol(_this.createStreamItemMessage(streamId, item)); });
                    },
                });
            };
            for (var streamId in streams) {
                _loop_1(streamId);
            }
        };
        HubConnection.prototype.replaceStreamingParams = function (args) {
            var streams = [];
            var streamIds = [];
            for (var i = 0; i < args.length; i++) {
                var argument = args[i];
                if (this.isObservable(argument)) {
                    var streamId = this.invocationId;
                    this.invocationId++;
                    streams[streamId] = argument;
                    streamIds.push(streamId.toString());
                    args.splice(i, 1);
                }
            }
            return [streams, streamIds];
        };
        HubConnection.prototype.isObservable = function (arg) {
            return arg && arg.subscribe && typeof arg.subscribe === "function";
        };
        HubConnection.prototype.createStreamInvocation = function (methodName, args, streamIds) {
            var invocationId = this.invocationId;
            this.invocationId++;
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                streamIds: streamIds,
                target: methodName,
                type: IHubProtocol_1.MessageType.StreamInvocation,
            };
        };
        HubConnection.prototype.createCancelInvocation = function (id) {
            return {
                invocationId: id,
                type: IHubProtocol_1.MessageType.CancelInvocation,
            };
        };
        HubConnection.prototype.createStreamItemMessage = function (id, item) {
            return {
                invocationId: id,
                item: item,
                type: IHubProtocol_1.MessageType.StreamItem,
            };
        };
        HubConnection.prototype.createCompletionMessage = function (id, error, result) {
            if (error) {
                return {
                    error: error,
                    invocationId: id,
                    type: IHubProtocol_1.MessageType.Completion,
                };
            }
            return {
                invocationId: id,
                result: result,
                type: IHubProtocol_1.MessageType.Completion,
            };
        };
        return HubConnection;
    }());
    exports.HubConnection = HubConnection;
});
define("gridDemo/signalr/DefaultReconnectPolicy", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
    var DefaultReconnectPolicy = (function () {
        function DefaultReconnectPolicy(retryDelays) {
            this.retryDelays = retryDelays !== undefined ? __spreadArrays(retryDelays, [null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
        }
        DefaultReconnectPolicy.prototype.nextRetryDelayInMilliseconds = function (retryContext) {
            return this.retryDelays[retryContext.previousRetryCount];
        };
        return DefaultReconnectPolicy;
    }());
    exports.DefaultReconnectPolicy = DefaultReconnectPolicy;
});
define("gridDemo/signalr/LongPollingTransport", ["require", "exports", "gridDemo/signalr/AbortController", "gridDemo/signalr/Errors", "gridDemo/signalr/ILogger", "gridDemo/signalr/ITransport", "gridDemo/signalr/Utils"], function (require, exports, AbortController_1, Errors_4, ILogger_5, ITransport_1, Utils_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LongPollingTransport = (function () {
        function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
            this.httpClient = httpClient;
            this.accessTokenFactory = accessTokenFactory;
            this.logger = logger;
            this.pollAbort = new AbortController_1.AbortController();
            this.logMessageContent = logMessageContent;
            this.running = false;
            this.onreceive = null;
            this.onclose = null;
        }
        Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
            get: function () {
                return this.pollAbort.aborted;
            },
            enumerable: true,
            configurable: true
        });
        LongPollingTransport.prototype.connect = function (url, transferFormat) {
            return __awaiter(this, void 0, void 0, function () {
                var pollOptions, token, pollUrl, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Utils_5.Arg.isRequired(url, "url");
                            Utils_5.Arg.isRequired(transferFormat, "transferFormat");
                            Utils_5.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
                            this.url = url;
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Connecting.");
                            if (transferFormat === ITransport_1.TransferFormat.Binary &&
                                (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                                throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                            }
                            pollOptions = {
                                abortSignal: this.pollAbort.signal,
                                headers: {},
                                timeout: 100000,
                            };
                            if (transferFormat === ITransport_1.TransferFormat.Binary) {
                                pollOptions.responseType = "arraybuffer";
                            }
                            return [4, this.getAccessToken()];
                        case 1:
                            token = _a.sent();
                            this.updateHeaderToken(pollOptions, token);
                            pollUrl = url + "&_=" + Date.now();
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                            return [4, this.httpClient.get(pollUrl, pollOptions)];
                        case 2:
                            response = _a.sent();
                            if (response.statusCode !== 200) {
                                this.logger.log(ILogger_5.LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                                this.closeError = new Errors_4.HttpError(response.statusText || "", response.statusCode);
                                this.running = false;
                            }
                            else {
                                this.running = true;
                            }
                            this.receiving = this.poll(this.url, pollOptions);
                            return [2];
                    }
                });
            });
        };
        LongPollingTransport.prototype.getAccessToken = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.accessTokenFactory) return [3, 2];
                            return [4, this.accessTokenFactory()];
                        case 1: return [2, _a.sent()];
                        case 2: return [2, null];
                    }
                });
            });
        };
        LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
            if (!request.headers) {
                request.headers = {};
            }
            if (token) {
                request.headers["Authorization"] = "Bearer " + token;
                return;
            }
            if (request.headers["Authorization"]) {
                delete request.headers["Authorization"];
            }
        };
        LongPollingTransport.prototype.poll = function (url, pollOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var token, pollUrl, response, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, , 8, 9]);
                            _a.label = 1;
                        case 1:
                            if (!this.running) return [3, 7];
                            return [4, this.getAccessToken()];
                        case 2:
                            token = _a.sent();
                            this.updateHeaderToken(pollOptions, token);
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            pollUrl = url + "&_=" + Date.now();
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                            return [4, this.httpClient.get(pollUrl, pollOptions)];
                        case 4:
                            response = _a.sent();
                            if (response.statusCode === 204) {
                                this.logger.log(ILogger_5.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                                this.running = false;
                            }
                            else if (response.statusCode !== 200) {
                                this.logger.log(ILogger_5.LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                                this.closeError = new Errors_4.HttpError(response.statusText || "", response.statusCode);
                                this.running = false;
                            }
                            else {
                                if (response.content) {
                                    this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) data received. " + Utils_5.getDataDetail(response.content, this.logMessageContent) + ".");
                                    if (this.onreceive) {
                                        this.onreceive(response.content);
                                    }
                                }
                                else {
                                    this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                                }
                            }
                            return [3, 6];
                        case 5:
                            e_5 = _a.sent();
                            if (!this.running) {
                                this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Poll errored after shutdown: " + e_5.message);
                            }
                            else {
                                if (e_5 instanceof Errors_4.TimeoutError) {
                                    this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                                }
                                else {
                                    this.closeError = e_5;
                                    this.running = false;
                                }
                            }
                            return [3, 6];
                        case 6: return [3, 1];
                        case 7: return [3, 9];
                        case 8:
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Polling complete.");
                            if (!this.pollAborted) {
                                this.raiseOnClose();
                            }
                            return [7];
                        case 9: return [2];
                    }
                });
            });
        };
        LongPollingTransport.prototype.send = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.running) {
                        return [2, Promise.reject(new Error("Cannot send until the transport is connected"))];
                    }
                    return [2, Utils_5.sendMessage(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
                });
            });
        };
        LongPollingTransport.prototype.stop = function () {
            return __awaiter(this, void 0, void 0, function () {
                var deleteOptions, token;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
                            this.running = false;
                            this.pollAbort.abort();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 5, 6]);
                            return [4, this.receiving];
                        case 2:
                            _a.sent();
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                            deleteOptions = {
                                headers: {},
                            };
                            return [4, this.getAccessToken()];
                        case 3:
                            token = _a.sent();
                            this.updateHeaderToken(deleteOptions, token);
                            return [4, this.httpClient.delete(this.url, deleteOptions)];
                        case 4:
                            _a.sent();
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
                            return [3, 6];
                        case 5:
                            this.logger.log(ILogger_5.LogLevel.Trace, "(LongPolling transport) Stop finished.");
                            this.raiseOnClose();
                            return [7];
                        case 6: return [2];
                    }
                });
            });
        };
        LongPollingTransport.prototype.raiseOnClose = function () {
            if (this.onclose) {
                var logMessage = "(LongPolling transport) Firing onclose event.";
                if (this.closeError) {
                    logMessage += " Error: " + this.closeError;
                }
                this.logger.log(ILogger_5.LogLevel.Trace, logMessage);
                this.onclose(this.closeError);
            }
        };
        return LongPollingTransport;
    }());
    exports.LongPollingTransport = LongPollingTransport;
});
define("gridDemo/signalr/ServerSentEventsTransport", ["require", "exports", "gridDemo/signalr/ILogger", "gridDemo/signalr/ITransport", "gridDemo/signalr/Utils"], function (require, exports, ILogger_6, ITransport_2, Utils_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServerSentEventsTransport = (function () {
        function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor) {
            this.httpClient = httpClient;
            this.accessTokenFactory = accessTokenFactory;
            this.logger = logger;
            this.logMessageContent = logMessageContent;
            this.eventSourceConstructor = eventSourceConstructor;
            this.onreceive = null;
            this.onclose = null;
        }
        ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Utils_6.Arg.isRequired(url, "url");
                            Utils_6.Arg.isRequired(transferFormat, "transferFormat");
                            Utils_6.Arg.isIn(transferFormat, ITransport_2.TransferFormat, "transferFormat");
                            this.logger.log(ILogger_6.LogLevel.Trace, "(SSE transport) Connecting.");
                            this.url = url;
                            if (!this.accessTokenFactory) return [3, 2];
                            return [4, this.accessTokenFactory()];
                        case 1:
                            token = _a.sent();
                            if (token) {
                                url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                            }
                            _a.label = 2;
                        case 2: return [2, new Promise(function (resolve, reject) {
                                var opened = false;
                                if (transferFormat !== ITransport_2.TransferFormat.Text) {
                                    reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                    return;
                                }
                                var eventSource;
                                if (Utils_6.Platform.isBrowser || Utils_6.Platform.isWebWorker) {
                                    eventSource = new _this.eventSourceConstructor(url, { withCredentials: true });
                                }
                                else {
                                    var cookies = _this.httpClient.getCookieString(url);
                                    eventSource = new _this.eventSourceConstructor(url, { withCredentials: true, headers: { Cookie: cookies } });
                                }
                                try {
                                    eventSource.onmessage = function (e) {
                                        if (_this.onreceive) {
                                            try {
                                                _this.logger.log(ILogger_6.LogLevel.Trace, "(SSE transport) data received. " + Utils_6.getDataDetail(e.data, _this.logMessageContent) + ".");
                                                _this.onreceive(e.data);
                                            }
                                            catch (error) {
                                                _this.close(error);
                                                return;
                                            }
                                        }
                                    };
                                    eventSource.onerror = function (e) {
                                        var error = new Error(e.data || "Error occurred");
                                        if (opened) {
                                            _this.close(error);
                                        }
                                        else {
                                            reject(error);
                                        }
                                    };
                                    eventSource.onopen = function () {
                                        _this.logger.log(ILogger_6.LogLevel.Information, "SSE connected to " + _this.url);
                                        _this.eventSource = eventSource;
                                        opened = true;
                                        resolve();
                                    };
                                }
                                catch (e) {
                                    reject(e);
                                    return;
                                }
                            })];
                    }
                });
            });
        };
        ServerSentEventsTransport.prototype.send = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.eventSource) {
                        return [2, Promise.reject(new Error("Cannot send until the transport is connected"))];
                    }
                    return [2, Utils_6.sendMessage(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
                });
            });
        };
        ServerSentEventsTransport.prototype.stop = function () {
            this.close();
            return Promise.resolve();
        };
        ServerSentEventsTransport.prototype.close = function (e) {
            if (this.eventSource) {
                this.eventSource.close();
                this.eventSource = undefined;
                if (this.onclose) {
                    this.onclose(e);
                }
            }
        };
        return ServerSentEventsTransport;
    }());
    exports.ServerSentEventsTransport = ServerSentEventsTransport;
});
define("gridDemo/signalr/WebSocketTransport", ["require", "exports", "gridDemo/signalr/ILogger", "gridDemo/signalr/ITransport", "gridDemo/signalr/Utils"], function (require, exports, ILogger_7, ITransport_3, Utils_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebSocketTransport = (function () {
        function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor) {
            this.logger = logger;
            this.accessTokenFactory = accessTokenFactory;
            this.logMessageContent = logMessageContent;
            this.webSocketConstructor = webSocketConstructor;
            this.httpClient = httpClient;
            this.onreceive = null;
            this.onclose = null;
        }
        WebSocketTransport.prototype.connect = function (url, transferFormat) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Utils_7.Arg.isRequired(url, "url");
                            Utils_7.Arg.isRequired(transferFormat, "transferFormat");
                            Utils_7.Arg.isIn(transferFormat, ITransport_3.TransferFormat, "transferFormat");
                            this.logger.log(ILogger_7.LogLevel.Trace, "(WebSockets transport) Connecting.");
                            if (!this.accessTokenFactory) return [3, 2];
                            return [4, this.accessTokenFactory()];
                        case 1:
                            token = _a.sent();
                            if (token) {
                                url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                            }
                            _a.label = 2;
                        case 2: return [2, new Promise(function (resolve, reject) {
                                url = url.replace(/^http/, "ws");
                                var webSocket;
                                var cookies = _this.httpClient.getCookieString(url);
                                if (Utils_7.Platform.isNode && cookies) {
                                    webSocket = new _this.webSocketConstructor(url, undefined, {
                                        headers: {
                                            Cookie: "" + cookies,
                                        },
                                    });
                                }
                                if (!webSocket) {
                                    webSocket = new _this.webSocketConstructor(url);
                                }
                                if (transferFormat === ITransport_3.TransferFormat.Binary) {
                                    webSocket.binaryType = "arraybuffer";
                                }
                                webSocket.onopen = function (_event) {
                                    _this.logger.log(ILogger_7.LogLevel.Information, "WebSocket connected to " + url + ".");
                                    _this.webSocket = webSocket;
                                    resolve();
                                };
                                webSocket.onerror = function (event) {
                                    var error = null;
                                    if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                        error = event.error;
                                    }
                                    else {
                                        error = new Error("There was an error with the transport.");
                                    }
                                    reject(error);
                                };
                                webSocket.onmessage = function (message) {
                                    _this.logger.log(ILogger_7.LogLevel.Trace, "(WebSockets transport) data received. " + Utils_7.getDataDetail(message.data, _this.logMessageContent) + ".");
                                    if (_this.onreceive) {
                                        _this.onreceive(message.data);
                                    }
                                };
                                webSocket.onclose = function (event) { return _this.close(event); };
                            })];
                    }
                });
            });
        };
        WebSocketTransport.prototype.send = function (data) {
            if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
                this.logger.log(ILogger_7.LogLevel.Trace, "(WebSockets transport) sending data. " + Utils_7.getDataDetail(data, this.logMessageContent) + ".");
                this.webSocket.send(data);
                return Promise.resolve();
            }
            return Promise.reject("WebSocket is not in the OPEN state");
        };
        WebSocketTransport.prototype.stop = function () {
            if (this.webSocket) {
                this.webSocket.onclose = function () { };
                this.webSocket.onmessage = function () { };
                this.webSocket.onerror = function () { };
                this.webSocket.close();
                this.webSocket = undefined;
                this.close(undefined);
            }
            return Promise.resolve();
        };
        WebSocketTransport.prototype.close = function (event) {
            this.logger.log(ILogger_7.LogLevel.Trace, "(WebSockets transport) socket closed.");
            if (this.onclose) {
                if (event && (event.wasClean === false || event.code !== 1000)) {
                    this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
                }
                else {
                    this.onclose();
                }
            }
        };
        return WebSocketTransport;
    }());
    exports.WebSocketTransport = WebSocketTransport;
});
define("gridDemo/signalr/HttpConnection", ["require", "exports", "gridDemo/signalr/DefaultHttpClient", "gridDemo/signalr/ILogger", "gridDemo/signalr/ITransport", "gridDemo/signalr/LongPollingTransport", "gridDemo/signalr/ServerSentEventsTransport", "gridDemo/signalr/Utils", "gridDemo/signalr/WebSocketTransport"], function (require, exports, DefaultHttpClient_1, ILogger_8, ITransport_4, LongPollingTransport_1, ServerSentEventsTransport_1, Utils_8, WebSocketTransport_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConnectionState;
    (function (ConnectionState) {
        ConnectionState["Connecting"] = "Connecting ";
        ConnectionState["Connected"] = "Connected";
        ConnectionState["Disconnected"] = "Disconnected";
        ConnectionState["Disconnecting"] = "Disconnecting";
    })(ConnectionState || (ConnectionState = {}));
    var MAX_REDIRECTS = 100;
    var WebSocketModule = null;
    var EventSourceModule = null;
    if (Utils_8.Platform.isNode && typeof require !== "undefined") {
        var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
        WebSocketModule = requireFunc("ws");
        EventSourceModule = requireFunc("eventsource");
    }
    var HttpConnection = (function () {
        function HttpConnection(url, options) {
            if (options === void 0) { options = {}; }
            this.features = {};
            Utils_8.Arg.isRequired(url, "url");
            this.logger = Utils_8.createLogger(options.logger);
            this.baseUrl = this.resolveUrl(url);
            options = options || {};
            options.logMessageContent = options.logMessageContent || false;
            if (!Utils_8.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
                options.WebSocket = WebSocket;
            }
            else if (Utils_8.Platform.isNode && !options.WebSocket) {
                if (WebSocketModule) {
                    options.WebSocket = WebSocketModule;
                }
            }
            if (!Utils_8.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
                options.EventSource = EventSource;
            }
            else if (Utils_8.Platform.isNode && !options.EventSource) {
                if (typeof EventSourceModule !== "undefined") {
                    options.EventSource = EventSourceModule;
                }
            }
            this.httpClient = options.httpClient || new DefaultHttpClient_1.DefaultHttpClient(this.logger);
            this.connectionState = "Disconnected";
            this.connectionStarted = false;
            this.options = options;
            this.onreceive = null;
            this.onclose = null;
        }
        HttpConnection.prototype.start = function (transferFormat) {
            return __awaiter(this, void 0, void 0, function () {
                var message, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            transferFormat = transferFormat || ITransport_4.TransferFormat.Binary;
                            Utils_8.Arg.isIn(transferFormat, ITransport_4.TransferFormat, "transferFormat");
                            this.logger.log(ILogger_8.LogLevel.Debug, "Starting connection with transfer format '" + ITransport_4.TransferFormat[transferFormat] + "'.");
                            if (this.connectionState !== "Disconnected") {
                                return [2, Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."))];
                            }
                            this.connectionState = "Connecting ";
                            this.startInternalPromise = this.startInternal(transferFormat);
                            return [4, this.startInternalPromise];
                        case 1:
                            _a.sent();
                            if (!(this.connectionState === "Disconnecting")) return [3, 3];
                            message = "Failed to start the HttpConnection before stop() was called.";
                            this.logger.log(ILogger_8.LogLevel.Error, message);
                            return [4, this.stopPromise];
                        case 2:
                            _a.sent();
                            return [2, Promise.reject(new Error(message))];
                        case 3:
                            if (this.connectionState !== "Connected") {
                                message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                                this.logger.log(ILogger_8.LogLevel.Error, message);
                                return [2, Promise.reject(new Error(message))];
                            }
                            _a.label = 4;
                        case 4:
                            this.connectionStarted = true;
                            return [2];
                    }
                });
            });
        };
        HttpConnection.prototype.send = function (data) {
            if (this.connectionState !== "Connected") {
                return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
            }
            if (!this.sendQueue) {
                this.sendQueue = new TransportSendQueue(this.transport);
            }
            return this.sendQueue.send(data);
        };
        HttpConnection.prototype.stop = function (error) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.connectionState === "Disconnected") {
                                this.logger.log(ILogger_8.LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                                return [2, Promise.resolve()];
                            }
                            if (this.connectionState === "Disconnecting") {
                                this.logger.log(ILogger_8.LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                                return [2, this.stopPromise];
                            }
                            this.connectionState = "Disconnecting";
                            this.stopPromise = new Promise(function (resolve) {
                                _this.stopPromiseResolver = resolve;
                            });
                            return [4, this.stopInternal(error)];
                        case 1:
                            _a.sent();
                            return [4, this.stopPromise];
                        case 2:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        HttpConnection.prototype.stopInternal = function (error) {
            return __awaiter(this, void 0, void 0, function () {
                var e_6, e_7, e_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.stopError = error;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4, this.startInternalPromise];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3:
                            e_6 = _a.sent();
                            return [3, 4];
                        case 4:
                            if (!this.sendQueue) return [3, 9];
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4, this.sendQueue.stop()];
                        case 6:
                            _a.sent();
                            return [3, 8];
                        case 7:
                            e_7 = _a.sent();
                            this.logger.log(ILogger_8.LogLevel.Error, "TransportSendQueue.stop() threw error '" + e_7 + "'.");
                            return [3, 8];
                        case 8:
                            this.sendQueue = undefined;
                            _a.label = 9;
                        case 9:
                            if (!this.transport) return [3, 14];
                            _a.label = 10;
                        case 10:
                            _a.trys.push([10, 12, , 13]);
                            return [4, this.transport.stop()];
                        case 11:
                            _a.sent();
                            return [3, 13];
                        case 12:
                            e_8 = _a.sent();
                            this.logger.log(ILogger_8.LogLevel.Error, "HttpConnection.transport.stop() threw error '" + e_8 + "'.");
                            this.stopConnection();
                            return [3, 13];
                        case 13:
                            this.transport = undefined;
                            return [3, 15];
                        case 14:
                            this.logger.log(ILogger_8.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                            this.stopConnection();
                            _a.label = 15;
                        case 15: return [2];
                    }
                });
            });
        };
        HttpConnection.prototype.startInternal = function (transferFormat) {
            return __awaiter(this, void 0, void 0, function () {
                var url, negotiateResponse, redirects, _loop_2, this_1, e_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this.baseUrl;
                            this.accessTokenFactory = this.options.accessTokenFactory;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 12, , 13]);
                            if (!this.options.skipNegotiation) return [3, 5];
                            if (!(this.options.transport === ITransport_4.HttpTransportType.WebSockets)) return [3, 3];
                            this.transport = this.constructTransport(ITransport_4.HttpTransportType.WebSockets);
                            return [4, this.startTransport(url, transferFormat)];
                        case 2:
                            _a.sent();
                            return [3, 4];
                        case 3: throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                        case 4: return [3, 11];
                        case 5:
                            negotiateResponse = null;
                            redirects = 0;
                            _loop_2 = function () {
                                var accessToken_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, this_1.getNegotiationResponse(url)];
                                        case 1:
                                            negotiateResponse = _a.sent();
                                            if (this_1.connectionState === "Disconnecting" || this_1.connectionState === "Disconnected") {
                                                throw new Error("The connection was stopped during negotiation.");
                                            }
                                            if (negotiateResponse.error) {
                                                throw new Error(negotiateResponse.error);
                                            }
                                            if (negotiateResponse.ProtocolVersion) {
                                                throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                            }
                                            if (negotiateResponse.url) {
                                                url = negotiateResponse.url;
                                            }
                                            if (negotiateResponse.accessToken) {
                                                accessToken_1 = negotiateResponse.accessToken;
                                                this_1.accessTokenFactory = function () { return accessToken_1; };
                                            }
                                            redirects++;
                                            return [2];
                                    }
                                });
                            };
                            this_1 = this;
                            _a.label = 6;
                        case 6: return [5, _loop_2()];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8:
                            if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3, 6];
                            _a.label = 9;
                        case 9:
                            if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                                throw new Error("Negotiate redirection limit exceeded.");
                            }
                            this.connectionId = negotiateResponse.connectionId;
                            return [4, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11:
                            if (this.transport instanceof LongPollingTransport_1.LongPollingTransport) {
                                this.features.inherentKeepAlive = true;
                            }
                            if (this.connectionState === "Connecting ") {
                                this.logger.log(ILogger_8.LogLevel.Debug, "The HttpConnection connected successfully.");
                                this.connectionState = "Connected";
                            }
                            return [3, 13];
                        case 12:
                            e_9 = _a.sent();
                            this.logger.log(ILogger_8.LogLevel.Error, "Failed to start the connection: " + e_9);
                            this.connectionState = "Disconnected";
                            this.transport = undefined;
                            return [2, Promise.reject(e_9)];
                        case 13: return [2];
                    }
                });
            });
        };
        HttpConnection.prototype.getNegotiationResponse = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var headers, token, negotiateUrl, response, e_10;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.accessTokenFactory) return [3, 2];
                            return [4, this.accessTokenFactory()];
                        case 1:
                            token = _b.sent();
                            if (token) {
                                headers = (_a = {},
                                    _a["Authorization"] = "Bearer " + token,
                                    _a);
                            }
                            _b.label = 2;
                        case 2:
                            negotiateUrl = this.resolveNegotiateUrl(url);
                            this.logger.log(ILogger_8.LogLevel.Debug, "Sending negotiation request: " + negotiateUrl + ".");
                            _b.label = 3;
                        case 3:
                            _b.trys.push([3, 5, , 6]);
                            return [4, this.httpClient.post(negotiateUrl, {
                                    content: "",
                                    headers: headers,
                                })];
                        case 4:
                            response = _b.sent();
                            if (response.statusCode !== 200) {
                                return [2, Promise.reject(new Error("Unexpected status code returned from negotiate " + response.statusCode))];
                            }
                            return [2, JSON.parse(response.content)];
                        case 5:
                            e_10 = _b.sent();
                            this.logger.log(ILogger_8.LogLevel.Error, "Failed to complete negotiation with the server: " + e_10);
                            return [2, Promise.reject(e_10)];
                        case 6: return [2];
                    }
                });
            });
        };
        HttpConnection.prototype.createConnectUrl = function (url, connectionId) {
            if (!connectionId) {
                return url;
            }
            return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionId);
        };
        HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
            return __awaiter(this, void 0, void 0, function () {
                var connectUrl, transportExceptions, transports, _i, transports_1, endpoint, transportOrError, ex_1, ex_2, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                            if (!this.isITransport(requestedTransport)) return [3, 2];
                            this.logger.log(ILogger_8.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
                            this.transport = requestedTransport;
                            return [4, this.startTransport(connectUrl, requestedTransferFormat)];
                        case 1:
                            _a.sent();
                            return [2];
                        case 2:
                            transportExceptions = [];
                            transports = negotiateResponse.availableTransports || [];
                            _i = 0, transports_1 = transports;
                            _a.label = 3;
                        case 3:
                            if (!(_i < transports_1.length)) return [3, 13];
                            endpoint = transports_1[_i];
                            transportOrError = this.resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
                            if (!(transportOrError instanceof Error)) return [3, 4];
                            transportExceptions.push(endpoint.transport + " failed: " + transportOrError);
                            return [3, 12];
                        case 4:
                            if (!this.isITransport(transportOrError)) return [3, 12];
                            this.transport = transportOrError;
                            if (!!negotiateResponse.connectionId) return [3, 9];
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4, this.getNegotiationResponse(url)];
                        case 6:
                            negotiateResponse = _a.sent();
                            return [3, 8];
                        case 7:
                            ex_1 = _a.sent();
                            return [2, Promise.reject(ex_1)];
                        case 8:
                            connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                            _a.label = 9;
                        case 9:
                            _a.trys.push([9, 11, , 12]);
                            return [4, this.startTransport(connectUrl, requestedTransferFormat)];
                        case 10:
                            _a.sent();
                            return [2];
                        case 11:
                            ex_2 = _a.sent();
                            this.logger.log(ILogger_8.LogLevel.Error, "Failed to start the transport '" + endpoint.transport + "': " + ex_2);
                            negotiateResponse.connectionId = undefined;
                            transportExceptions.push(endpoint.transport + " failed: " + ex_2);
                            if (this.connectionState !== "Connecting ") {
                                message = "Failed to select transport before stop() was called.";
                                this.logger.log(ILogger_8.LogLevel.Debug, message);
                                return [2, Promise.reject(new Error(message))];
                            }
                            return [3, 12];
                        case 12:
                            _i++;
                            return [3, 3];
                        case 13:
                            if (transportExceptions.length > 0) {
                                return [2, Promise.reject(new Error("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" ")))];
                            }
                            return [2, Promise.reject(new Error("None of the transports supported by the client are supported by the server."))];
                    }
                });
            });
        };
        HttpConnection.prototype.constructTransport = function (transport) {
            switch (transport) {
                case ITransport_4.HttpTransportType.WebSockets:
                    if (!this.options.WebSocket) {
                        throw new Error("'WebSocket' is not supported in your environment.");
                    }
                    return new WebSocketTransport_1.WebSocketTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket);
                case ITransport_4.HttpTransportType.ServerSentEvents:
                    if (!this.options.EventSource) {
                        throw new Error("'EventSource' is not supported in your environment.");
                    }
                    return new ServerSentEventsTransport_1.ServerSentEventsTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource);
                case ITransport_4.HttpTransportType.LongPolling:
                    return new LongPollingTransport_1.LongPollingTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false);
                default:
                    throw new Error("Unknown transport: " + transport + ".");
            }
        };
        HttpConnection.prototype.startTransport = function (url, transferFormat) {
            var _this = this;
            this.transport.onreceive = this.onreceive;
            this.transport.onclose = function (e) { return _this.stopConnection(e); };
            return this.transport.connect(url, transferFormat);
        };
        HttpConnection.prototype.resolveTransportOrError = function (endpoint, requestedTransport, requestedTransferFormat) {
            var transport = ITransport_4.HttpTransportType[endpoint.transport];
            if (transport === null || transport === undefined) {
                this.logger.log(ILogger_8.LogLevel.Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
                return new Error("Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
            }
            else {
                if (transportMatches(requestedTransport, transport)) {
                    var transferFormats = endpoint.transferFormats.map(function (s) { return ITransport_4.TransferFormat[s]; });
                    if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                        if ((transport === ITransport_4.HttpTransportType.WebSockets && !this.options.WebSocket) ||
                            (transport === ITransport_4.HttpTransportType.ServerSentEvents && !this.options.EventSource)) {
                            this.logger.log(ILogger_8.LogLevel.Debug, "Skipping transport '" + ITransport_4.HttpTransportType[transport] + "' because it is not supported in your environment.'");
                            return new Error("'" + ITransport_4.HttpTransportType[transport] + "' is not supported in your environment.");
                        }
                        else {
                            this.logger.log(ILogger_8.LogLevel.Debug, "Selecting transport '" + ITransport_4.HttpTransportType[transport] + "'.");
                            try {
                                return this.constructTransport(transport);
                            }
                            catch (ex) {
                                return ex;
                            }
                        }
                    }
                    else {
                        this.logger.log(ILogger_8.LogLevel.Debug, "Skipping transport '" + ITransport_4.HttpTransportType[transport] + "' because it does not support the requested transfer format '" + ITransport_4.TransferFormat[requestedTransferFormat] + "'.");
                        return new Error("'" + ITransport_4.HttpTransportType[transport] + "' does not support " + ITransport_4.TransferFormat[requestedTransferFormat] + ".");
                    }
                }
                else {
                    this.logger.log(ILogger_8.LogLevel.Debug, "Skipping transport '" + ITransport_4.HttpTransportType[transport] + "' because it was disabled by the client.");
                    return new Error("'" + ITransport_4.HttpTransportType[transport] + "' is disabled by the client.");
                }
            }
        };
        HttpConnection.prototype.isITransport = function (transport) {
            return transport && typeof (transport) === "object" && "connect" in transport;
        };
        HttpConnection.prototype.stopConnection = function (error) {
            this.logger.log(ILogger_8.LogLevel.Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this.connectionState + ".");
            this.transport = undefined;
            error = this.stopError || error;
            this.stopError = undefined;
            if (this.connectionState === "Disconnected") {
                this.logger.log(ILogger_8.LogLevel.Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
                return;
            }
            if (this.connectionState === "Connecting ") {
                this.logger.log(ILogger_8.LogLevel.Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection hasn't yet left the in the connecting state.");
                return;
            }
            if (this.connectionState === "Disconnecting") {
                this.stopPromiseResolver();
            }
            if (error) {
                this.logger.log(ILogger_8.LogLevel.Error, "Connection disconnected with error '" + error + "'.");
            }
            else {
                this.logger.log(ILogger_8.LogLevel.Information, "Connection disconnected.");
            }
            this.connectionId = undefined;
            this.connectionState = "Disconnected";
            if (this.onclose && this.connectionStarted) {
                this.connectionStarted = false;
                try {
                    this.onclose(error);
                }
                catch (e) {
                    this.logger.log(ILogger_8.LogLevel.Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
                }
            }
        };
        HttpConnection.prototype.resolveUrl = function (url) {
            if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
                return url;
            }
            if (!Utils_8.Platform.isBrowser || !window.document) {
                throw new Error("Cannot resolve '" + url + "'.");
            }
            var aTag = window.document.createElement("a");
            aTag.href = url;
            this.logger.log(ILogger_8.LogLevel.Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
            return aTag.href;
        };
        HttpConnection.prototype.resolveNegotiateUrl = function (url) {
            var index = url.indexOf("?");
            var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
            if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
                negotiateUrl += "/";
            }
            negotiateUrl += "negotiate";
            negotiateUrl += index === -1 ? "" : url.substring(index);
            return negotiateUrl;
        };
        return HttpConnection;
    }());
    exports.HttpConnection = HttpConnection;
    function transportMatches(requestedTransport, actualTransport) {
        return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
    }
    var TransportSendQueue = (function () {
        function TransportSendQueue(transport) {
            this.transport = transport;
            this.buffer = [];
            this.executing = true;
            this.sendBufferedData = new PromiseSource();
            this.transportResult = new PromiseSource();
            this.sendLoopPromise = this.sendLoop();
        }
        TransportSendQueue.prototype.send = function (data) {
            this.bufferData(data);
            if (!this.transportResult) {
                this.transportResult = new PromiseSource();
            }
            return this.transportResult.promise;
        };
        TransportSendQueue.prototype.stop = function () {
            this.executing = false;
            this.sendBufferedData.resolve();
            return this.sendLoopPromise;
        };
        TransportSendQueue.prototype.bufferData = function (data) {
            if (this.buffer.length && typeof (this.buffer[0]) !== typeof (data)) {
                throw new Error("Expected data to be of type " + typeof (this.buffer) + " but was of type " + typeof (data));
            }
            this.buffer.push(data);
            this.sendBufferedData.resolve();
        };
        TransportSendQueue.prototype.sendLoop = function () {
            return __awaiter(this, void 0, void 0, function () {
                var transportResult, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!true) return [3, 6];
                            return [4, this.sendBufferedData.promise];
                        case 1:
                            _a.sent();
                            if (!this.executing) {
                                if (this.transportResult) {
                                    this.transportResult.reject("Connection stopped.");
                                }
                                return [3, 6];
                            }
                            this.sendBufferedData = new PromiseSource();
                            transportResult = this.transportResult;
                            this.transportResult = undefined;
                            data = typeof (this.buffer[0]) === "string" ?
                                this.buffer.join("") :
                                TransportSendQueue.concatBuffers(this.buffer);
                            this.buffer.length = 0;
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4, this.transport.send(data)];
                        case 3:
                            _a.sent();
                            transportResult.resolve();
                            return [3, 5];
                        case 4:
                            error_1 = _a.sent();
                            transportResult.reject(error_1);
                            return [3, 5];
                        case 5: return [3, 0];
                        case 6: return [2];
                    }
                });
            });
        };
        TransportSendQueue.concatBuffers = function (arrayBuffers) {
            var totalLength = arrayBuffers.map(function (b) { return b.byteLength; }).reduce(function (a, b) { return a + b; });
            var result = new Uint8Array(totalLength);
            var offset = 0;
            for (var _i = 0, arrayBuffers_1 = arrayBuffers; _i < arrayBuffers_1.length; _i++) {
                var item = arrayBuffers_1[_i];
                result.set(new Uint8Array(item), offset);
                offset += item.byteLength;
            }
            return result;
        };
        return TransportSendQueue;
    }());
    exports.TransportSendQueue = TransportSendQueue;
    var PromiseSource = (function () {
        function PromiseSource() {
            var _this = this;
            this.promise = new Promise(function (resolve, reject) {
                var _a;
                return _a = [resolve, reject], _this.resolver = _a[0], _this.rejecter = _a[1], _a;
            });
        }
        PromiseSource.prototype.resolve = function () {
            this.resolver();
        };
        PromiseSource.prototype.reject = function (reason) {
            this.rejecter(reason);
        };
        return PromiseSource;
    }());
});
define("gridDemo/signalr/JsonHubProtocol", ["require", "exports", "gridDemo/signalr/IHubProtocol", "gridDemo/signalr/ILogger", "gridDemo/signalr/ITransport", "gridDemo/signalr/Loggers", "gridDemo/signalr/TextMessageFormat"], function (require, exports, IHubProtocol_2, ILogger_9, ITransport_5, Loggers_2, TextMessageFormat_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JSON_HUB_PROTOCOL_NAME = "json";
    var JsonHubProtocol = (function () {
        function JsonHubProtocol() {
            this.name = JSON_HUB_PROTOCOL_NAME;
            this.version = 1;
            this.transferFormat = ITransport_5.TransferFormat.Text;
        }
        JsonHubProtocol.prototype.parseMessages = function (input, logger) {
            if (typeof input !== "string") {
                throw new Error("Invalid input for JSON hub protocol. Expected a string.");
            }
            if (!input) {
                return [];
            }
            if (logger === null) {
                logger = Loggers_2.NullLogger.instance;
            }
            var messages = TextMessageFormat_2.TextMessageFormat.parse(input);
            var hubMessages = [];
            for (var _i = 0, messages_2 = messages; _i < messages_2.length; _i++) {
                var message = messages_2[_i];
                var parsedMessage = JSON.parse(message);
                if (typeof parsedMessage.type !== "number") {
                    throw new Error("Invalid payload.");
                }
                switch (parsedMessage.type) {
                    case IHubProtocol_2.MessageType.Invocation:
                        this.isInvocationMessage(parsedMessage);
                        break;
                    case IHubProtocol_2.MessageType.StreamItem:
                        this.isStreamItemMessage(parsedMessage);
                        break;
                    case IHubProtocol_2.MessageType.Completion:
                        this.isCompletionMessage(parsedMessage);
                        break;
                    case IHubProtocol_2.MessageType.Ping:
                        break;
                    case IHubProtocol_2.MessageType.Close:
                        break;
                    default:
                        logger.log(ILogger_9.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                        continue;
                }
                hubMessages.push(parsedMessage);
            }
            return hubMessages;
        };
        JsonHubProtocol.prototype.writeMessage = function (message) {
            return TextMessageFormat_2.TextMessageFormat.write(JSON.stringify(message));
        };
        JsonHubProtocol.prototype.isInvocationMessage = function (message) {
            this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
            if (message.invocationId !== undefined) {
                this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
            }
        };
        JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
            if (message.item === undefined) {
                throw new Error("Invalid payload for StreamItem message.");
            }
        };
        JsonHubProtocol.prototype.isCompletionMessage = function (message) {
            if (message.result && message.error) {
                throw new Error("Invalid payload for Completion message.");
            }
            if (!message.result && message.error) {
                this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
            }
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
        };
        JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
            if (typeof value !== "string" || value === "") {
                throw new Error(errorMessage);
            }
        };
        return JsonHubProtocol;
    }());
    exports.JsonHubProtocol = JsonHubProtocol;
});
define("gridDemo/signalr/HubConnectionBuilder", ["require", "exports", "gridDemo/signalr/DefaultReconnectPolicy", "gridDemo/signalr/HttpConnection", "gridDemo/signalr/HubConnection", "gridDemo/signalr/ILogger", "gridDemo/signalr/JsonHubProtocol", "gridDemo/signalr/Loggers", "gridDemo/signalr/Utils"], function (require, exports, DefaultReconnectPolicy_1, HttpConnection_1, HubConnection_1, ILogger_10, JsonHubProtocol_1, Loggers_3, Utils_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogLevelNameMapping = {
        trace: ILogger_10.LogLevel.Trace,
        debug: ILogger_10.LogLevel.Debug,
        info: ILogger_10.LogLevel.Information,
        information: ILogger_10.LogLevel.Information,
        warn: ILogger_10.LogLevel.Warning,
        warning: ILogger_10.LogLevel.Warning,
        error: ILogger_10.LogLevel.Error,
        critical: ILogger_10.LogLevel.Critical,
        none: ILogger_10.LogLevel.None,
    };
    function parseLogLevel(name) {
        var mapping = LogLevelNameMapping[name.toLowerCase()];
        if (typeof mapping !== "undefined") {
            return mapping;
        }
        else {
            throw new Error("Unknown log level: " + name);
        }
    }
    var HubConnectionBuilder = (function () {
        function HubConnectionBuilder() {
        }
        HubConnectionBuilder.prototype.configureLogging = function (logging) {
            Utils_9.Arg.isRequired(logging, "logging");
            if (isLogger(logging)) {
                this.logger = logging;
            }
            else if (typeof logging === "string") {
                var logLevel = parseLogLevel(logging);
                this.logger = new Utils_9.ConsoleLogger(logLevel);
            }
            else {
                this.logger = new Utils_9.ConsoleLogger(logging);
            }
            return this;
        };
        HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
            Utils_9.Arg.isRequired(url, "url");
            this.url = url;
            if (typeof transportTypeOrOptions === "object") {
                this.httpConnectionOptions = __assign(__assign({}, this.httpConnectionOptions), transportTypeOrOptions);
            }
            else {
                this.httpConnectionOptions = __assign(__assign({}, this.httpConnectionOptions), { transport: transportTypeOrOptions });
            }
            return this;
        };
        HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
            Utils_9.Arg.isRequired(protocol, "protocol");
            this.protocol = protocol;
            return this;
        };
        HubConnectionBuilder.prototype.withAutomaticReconnect = function (retryDelaysOrReconnectPolicy) {
            if (this.reconnectPolicy) {
                throw new Error("A reconnectPolicy has already been set.");
            }
            if (!retryDelaysOrReconnectPolicy) {
                this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy();
            }
            else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
                this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
            }
            else {
                this.reconnectPolicy = retryDelaysOrReconnectPolicy;
            }
            return this;
        };
        HubConnectionBuilder.prototype.build = function () {
            var httpConnectionOptions = this.httpConnectionOptions || {};
            if (httpConnectionOptions.logger === undefined) {
                httpConnectionOptions.logger = this.logger;
            }
            if (!this.url) {
                throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
            }
            var connection = new HttpConnection_1.HttpConnection(this.url, httpConnectionOptions);
            return HubConnection_1.HubConnection.create(connection, this.logger || Loggers_3.NullLogger.instance, this.protocol || new JsonHubProtocol_1.JsonHubProtocol(), this.reconnectPolicy);
        };
        return HubConnectionBuilder;
    }());
    exports.HubConnectionBuilder = HubConnectionBuilder;
    function isLogger(logger) {
        return logger.log !== undefined;
    }
});
define("gridDemo/signalr/index", ["require", "exports", "gridDemo/signalr/Errors", "gridDemo/signalr/HttpClient", "gridDemo/signalr/DefaultHttpClient", "gridDemo/signalr/HubConnection", "gridDemo/signalr/HubConnectionBuilder", "gridDemo/signalr/IHubProtocol", "gridDemo/signalr/ILogger", "gridDemo/signalr/ITransport", "gridDemo/signalr/Loggers", "gridDemo/signalr/JsonHubProtocol", "gridDemo/signalr/Subject"], function (require, exports, Errors_5, HttpClient_4, DefaultHttpClient_2, HubConnection_2, HubConnectionBuilder_1, IHubProtocol_3, ILogger_11, ITransport_6, Loggers_4, JsonHubProtocol_2, Subject_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VERSION = "0.0.0-DEV_BUILD";
    exports.AbortError = Errors_5.AbortError;
    exports.HttpError = Errors_5.HttpError;
    exports.TimeoutError = Errors_5.TimeoutError;
    exports.HttpClient = HttpClient_4.HttpClient;
    exports.HttpResponse = HttpClient_4.HttpResponse;
    exports.DefaultHttpClient = DefaultHttpClient_2.DefaultHttpClient;
    exports.HubConnection = HubConnection_2.HubConnection;
    exports.HubConnectionState = HubConnection_2.HubConnectionState;
    exports.HubConnectionBuilder = HubConnectionBuilder_1.HubConnectionBuilder;
    exports.MessageType = IHubProtocol_3.MessageType;
    exports.LogLevel = ILogger_11.LogLevel;
    exports.HttpTransportType = ITransport_6.HttpTransportType;
    exports.TransferFormat = ITransport_6.TransferFormat;
    exports.NullLogger = Loggers_4.NullLogger;
    exports.JsonHubProtocol = JsonHubProtocol_2.JsonHubProtocol;
    exports.Subject = Subject_2.Subject;
});
define("demo/demoDB", ["require", "exports", "jriapp_shared", "jriapp_db"], function (require, exports, RIAPP, dbMOD) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestEnum;
    (function (TestEnum) {
        TestEnum[TestEnum["None"] = 0] = "None";
        TestEnum[TestEnum["OK"] = 1] = "OK";
        TestEnum[TestEnum["Error"] = 2] = "Error";
        TestEnum[TestEnum["Loading"] = 3] = "Loading";
    })(TestEnum = exports.TestEnum || (exports.TestEnum = {}));
    var TestEnum2;
    (function (TestEnum2) {
        TestEnum2[TestEnum2["None"] = 0] = "None";
        TestEnum2[TestEnum2["One"] = 1] = "One";
        TestEnum2[TestEnum2["Two"] = 2] = "Two";
        TestEnum2[TestEnum2["Three"] = 3] = "Three";
    })(TestEnum2 = exports.TestEnum2 || (exports.TestEnum2 = {}));
    var _TestModelListItem = (function (_super) {
        __extends(_TestModelListItem, _super);
        function _TestModelListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_TestModelListItem.prototype, "Key", {
            get: function () { return this._aspect._getProp('Key'); },
            set: function (v) { this._aspect._setProp('Key', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "SomeProperty1", {
            get: function () { return this._aspect._getProp('SomeProperty1'); },
            set: function (v) { this._aspect._setProp('SomeProperty1', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "SomeProperty2", {
            get: function () { return this._aspect._getProp('SomeProperty2'); },
            set: function (v) { this._aspect._setProp('SomeProperty2', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "SomeProperty3", {
            get: function () { return this._aspect._getProp('SomeProperty3'); },
            set: function (v) { this._aspect._setProp('SomeProperty3', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "MoreComplexProperty", {
            get: function () { return this._aspect._getProp('MoreComplexProperty'); },
            set: function (v) { this._aspect._setProp('MoreComplexProperty', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_TestModelListItem.prototype, "EnumProperty", {
            get: function () { return this._aspect._getProp('EnumProperty'); },
            set: function (v) { this._aspect._setProp('EnumProperty', v); },
            enumerable: true,
            configurable: true
        });
        _TestModelListItem.prototype.toString = function () {
            return '_TestModelListItem';
        };
        return _TestModelListItem;
    }(RIAPP.CollectionItem));
    var TestDictionary = (function (_super) {
        __extends(TestDictionary, _super);
        function TestDictionary() {
            return _super.call(this, 'Key', [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]) || this;
        }
        TestDictionary.prototype.itemFactory = function (aspect) {
            return new _TestModelListItem(aspect);
        };
        TestDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        TestDictionary.prototype.toString = function () {
            return 'TestDictionary';
        };
        return TestDictionary;
    }(RIAPP.BaseDictionary));
    exports.TestDictionary = TestDictionary;
    var TestList = (function (_super) {
        __extends(TestList, _super);
        function TestList() {
            return _super.call(this, [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]) || this;
        }
        TestList.prototype.itemFactory = function (aspect) {
            return new _TestModelListItem(aspect);
        };
        TestList.prototype.toString = function () {
            return 'TestList';
        };
        return TestList;
    }(RIAPP.BaseList));
    exports.TestList = TestList;
    var _KeyValListItem = (function (_super) {
        __extends(_KeyValListItem, _super);
        function _KeyValListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_KeyValListItem.prototype, "key", {
            get: function () { return this._aspect._getProp('key'); },
            set: function (v) { this._aspect._setProp('key', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_KeyValListItem.prototype, "val", {
            get: function () { return this._aspect._getProp('val'); },
            set: function (v) { this._aspect._setProp('val', v); },
            enumerable: true,
            configurable: true
        });
        _KeyValListItem.prototype.toString = function () {
            return '_KeyValListItem';
        };
        return _KeyValListItem;
    }(RIAPP.CollectionItem));
    var KeyValDictionary = (function (_super) {
        __extends(KeyValDictionary, _super);
        function KeyValDictionary() {
            return _super.call(this, 'key', [{ name: 'key', dtype: 3 }, { name: 'val', dtype: 1 }]) || this;
        }
        KeyValDictionary.prototype.itemFactory = function (aspect) {
            return new _KeyValListItem(aspect);
        };
        KeyValDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        KeyValDictionary.prototype.toString = function () {
            return 'KeyValDictionary';
        };
        return KeyValDictionary;
    }(RIAPP.BaseDictionary));
    exports.KeyValDictionary = KeyValDictionary;
    var _StrKeyValListItem = (function (_super) {
        __extends(_StrKeyValListItem, _super);
        function _StrKeyValListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_StrKeyValListItem.prototype, "key", {
            get: function () { return this._aspect._getProp('key'); },
            set: function (v) { this._aspect._setProp('key', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_StrKeyValListItem.prototype, "val", {
            get: function () { return this._aspect._getProp('val'); },
            set: function (v) { this._aspect._setProp('val', v); },
            enumerable: true,
            configurable: true
        });
        _StrKeyValListItem.prototype.toString = function () {
            return '_StrKeyValListItem';
        };
        return _StrKeyValListItem;
    }(RIAPP.CollectionItem));
    var StrKeyValDictionary = (function (_super) {
        __extends(StrKeyValDictionary, _super);
        function StrKeyValDictionary() {
            return _super.call(this, 'key', [{ name: 'key', dtype: 1 }, { name: 'val', dtype: 1 }]) || this;
        }
        StrKeyValDictionary.prototype.itemFactory = function (aspect) {
            return new _StrKeyValListItem(aspect);
        };
        StrKeyValDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        StrKeyValDictionary.prototype.toString = function () {
            return 'StrKeyValDictionary';
        };
        return StrKeyValDictionary;
    }(RIAPP.BaseDictionary));
    exports.StrKeyValDictionary = StrKeyValDictionary;
    var _RadioValListItem = (function (_super) {
        __extends(_RadioValListItem, _super);
        function _RadioValListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_RadioValListItem.prototype, "key", {
            get: function () { return this._aspect._getProp('key'); },
            set: function (v) { this._aspect._setProp('key', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_RadioValListItem.prototype, "value", {
            get: function () { return this._aspect._getProp('value'); },
            set: function (v) { this._aspect._setProp('value', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_RadioValListItem.prototype, "comment", {
            get: function () { return this._aspect._getProp('comment'); },
            set: function (v) { this._aspect._setProp('comment', v); },
            enumerable: true,
            configurable: true
        });
        _RadioValListItem.prototype.toString = function () {
            return '_RadioValListItem';
        };
        return _RadioValListItem;
    }(RIAPP.CollectionItem));
    var RadioValDictionary = (function (_super) {
        __extends(RadioValDictionary, _super);
        function RadioValDictionary() {
            return _super.call(this, 'key', [{ name: 'key', dtype: 1 }, { name: 'value', dtype: 1 }, { name: 'comment', dtype: 1 }]) || this;
        }
        RadioValDictionary.prototype.itemFactory = function (aspect) {
            return new _RadioValListItem(aspect);
        };
        RadioValDictionary.prototype.findItem = function (key) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        RadioValDictionary.prototype.toString = function () {
            return 'RadioValDictionary';
        };
        return RadioValDictionary;
    }(RIAPP.BaseDictionary));
    exports.RadioValDictionary = RadioValDictionary;
    var _HistoryItemListItem = (function (_super) {
        __extends(_HistoryItemListItem, _super);
        function _HistoryItemListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(_HistoryItemListItem.prototype, "radioValue", {
            get: function () { return this._aspect._getProp('radioValue'); },
            set: function (v) { this._aspect._setProp('radioValue', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_HistoryItemListItem.prototype, "time", {
            get: function () { return this._aspect._getProp('time'); },
            set: function (v) { this._aspect._setProp('time', v); },
            enumerable: true,
            configurable: true
        });
        _HistoryItemListItem.prototype.toString = function () {
            return '_HistoryItemListItem';
        };
        return _HistoryItemListItem;
    }(RIAPP.CollectionItem));
    var HistoryList = (function (_super) {
        __extends(HistoryList, _super);
        function HistoryList() {
            return _super.call(this, [{ name: 'radioValue', dtype: 1 }, { name: 'time', dtype: 6 }]) || this;
        }
        HistoryList.prototype.itemFactory = function (aspect) {
            return new _HistoryItemListItem(aspect);
        };
        HistoryList.prototype.toString = function () {
            return 'HistoryList';
        };
        return HistoryList;
    }(RIAPP.BaseList));
    exports.HistoryList = HistoryList;
    var Customer_Contact1 = (function (_super) {
        __extends(Customer_Contact1, _super);
        function Customer_Contact1(name, parent) {
            return _super.call(this, name, parent) || this;
        }
        Object.defineProperty(Customer_Contact1.prototype, "EmailAddress", {
            get: function () { return this.getValue('CustomerName.Contact.EmailAddress'); },
            set: function (v) { this.setValue('CustomerName.Contact.EmailAddress', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Customer_Contact1.prototype, "Phone", {
            get: function () { return this.getValue('CustomerName.Contact.Phone'); },
            set: function (v) { this.setValue('CustomerName.Contact.Phone', v); },
            enumerable: true,
            configurable: true
        });
        Customer_Contact1.prototype.toString = function () {
            return 'Customer_Contact1';
        };
        return Customer_Contact1;
    }(dbMOD.ChildComplexProperty));
    exports.Customer_Contact1 = Customer_Contact1;
    var Customer_CustomerName = (function (_super) {
        __extends(Customer_CustomerName, _super);
        function Customer_CustomerName(name, owner) {
            var _this = _super.call(this, name, owner) || this;
            _this._Contact = null;
            return _this;
        }
        Object.defineProperty(Customer_CustomerName.prototype, "Contact", {
            get: function () { if (!this._Contact) {
                this._Contact = new Customer_Contact1('Contact', this);
            } return this._Contact; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "FirstName", {
            get: function () { return this.getValue('CustomerName.FirstName'); },
            set: function (v) { this.setValue('CustomerName.FirstName', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "LastName", {
            get: function () { return this.getValue('CustomerName.LastName'); },
            set: function (v) { this.setValue('CustomerName.LastName', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "MiddleName", {
            get: function () { return this.getValue('CustomerName.MiddleName'); },
            set: function (v) { this.setValue('CustomerName.MiddleName', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Customer_CustomerName.prototype, "Name", {
            get: function () { return this.getEntity()._getCalcFieldVal('CustomerName.Name'); },
            enumerable: true,
            configurable: true
        });
        Customer_CustomerName.prototype.toString = function () {
            return 'Customer_CustomerName';
        };
        return Customer_CustomerName;
    }(dbMOD.RootComplexProperty));
    exports.Customer_CustomerName = Customer_CustomerName;
    var AddressEntity = (function (_super) {
        __extends(AddressEntity, _super);
        function AddressEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        AddressEntity.prototype.toString = function () {
            return 'AddressEntity';
        };
        Object.defineProperty(AddressEntity.prototype, "AddressId", {
            get: function () { return this._aspect._getFieldVal('AddressId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "AddressLine1", {
            get: function () { return this._aspect._getFieldVal('AddressLine1'); },
            set: function (v) { this._aspect._setFieldVal('AddressLine1', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "AddressLine2", {
            get: function () { return this._aspect._getFieldVal('AddressLine2'); },
            set: function (v) { this._aspect._setFieldVal('AddressLine2', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "City", {
            get: function () { return this._aspect._getFieldVal('City'); },
            set: function (v) { this._aspect._setFieldVal('City', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "CountryRegion", {
            get: function () { return this._aspect._getFieldVal('CountryRegion'); },
            set: function (v) { this._aspect._setFieldVal('CountryRegion', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "PostalCode", {
            get: function () { return this._aspect._getFieldVal('PostalCode'); },
            set: function (v) { this._aspect._setFieldVal('PostalCode', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "StateProvince", {
            get: function () { return this._aspect._getFieldVal('StateProvince'); },
            set: function (v) { this._aspect._setFieldVal('StateProvince', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "CustomerAddress", {
            get: function () { return this._aspect._getNavFieldVal('CustomerAddress'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "SalesOrderHeaderBillToAddress", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderHeaderBillToAddress'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressEntity.prototype, "SalesOrderHeaderShipToAddress", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderHeaderShipToAddress'); },
            enumerable: true,
            configurable: true
        });
        return AddressEntity;
    }(RIAPP.CollectionItem));
    var AddressDb = (function (_super) {
        __extends(AddressDb, _super);
        function AddressDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Address" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "AddressId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine1", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 60, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine2", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 60, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "City", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 30, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CountryRegion", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PostalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StateProvince", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeaderBillToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeaderShipToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        AddressDb.prototype.itemFactory = function (aspect) {
            return new AddressEntity(aspect);
        };
        AddressDb.prototype.findEntity = function (addressId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        AddressDb.prototype.toString = function () {
            return 'AddressDb';
        };
        AddressDb.prototype.createReadAddressByIdsQuery = function (args) {
            var query = this.createQuery('ReadAddressByIds');
            query.params = args;
            return query;
        };
        AddressDb.prototype.createReadAddressQuery = function () {
            return this.createQuery('ReadAddress');
        };
        return AddressDb;
    }(dbMOD.DbSet));
    exports.AddressDb = AddressDb;
    var AddressInfoEntity = (function (_super) {
        __extends(AddressInfoEntity, _super);
        function AddressInfoEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        AddressInfoEntity.prototype.toString = function () {
            return 'AddressInfoEntity';
        };
        Object.defineProperty(AddressInfoEntity.prototype, "AddressId", {
            get: function () { return this._aspect._getFieldVal('AddressId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "AddressLine1", {
            get: function () { return this._aspect._getFieldVal('AddressLine1'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "City", {
            get: function () { return this._aspect._getFieldVal('City'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "StateProvince", {
            get: function () { return this._aspect._getFieldVal('StateProvince'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "CountryRegion", {
            get: function () { return this._aspect._getFieldVal('CountryRegion'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddressInfoEntity.prototype, "CustomerAddresses", {
            get: function () { return this._aspect._getNavFieldVal('CustomerAddresses'); },
            enumerable: true,
            configurable: true
        });
        return AddressInfoEntity;
    }(RIAPP.CollectionItem));
    var AddressInfoDb = (function (_super) {
        __extends(AddressInfoDb, _super);
        function AddressInfoDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "AddressInfo" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "AddressId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine1", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 200, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "City", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 30, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StateProvince", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CountryRegion", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddresses", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        AddressInfoDb.prototype.itemFactory = function (aspect) {
            return new AddressInfoEntity(aspect);
        };
        AddressInfoDb.prototype.findEntity = function (addressId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        AddressInfoDb.prototype.toString = function () {
            return 'AddressInfoDb';
        };
        AddressInfoDb.prototype.createReadAddressInfoQuery = function () {
            return this.createQuery('ReadAddressInfo');
        };
        return AddressInfoDb;
    }(dbMOD.DbSet));
    exports.AddressInfoDb = AddressInfoDb;
    var CustomerEntity = (function (_super) {
        __extends(CustomerEntity, _super);
        function CustomerEntity(aspect) {
            var _this = _super.call(this, aspect) || this;
            _this._CustomerName = null;
            return _this;
        }
        CustomerEntity.prototype.toString = function () {
            return 'CustomerEntity';
        };
        Object.defineProperty(CustomerEntity.prototype, "CustomerName", {
            get: function () { if (!this._CustomerName) {
                this._CustomerName = new Customer_CustomerName('CustomerName', this._aspect);
            } return this._CustomerName; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "CompanyName", {
            get: function () { return this._aspect._getFieldVal('CompanyName'); },
            set: function (v) { this._aspect._setFieldVal('CompanyName', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "NameStyle", {
            get: function () { return this._aspect._getFieldVal('NameStyle'); },
            set: function (v) { this._aspect._setFieldVal('NameStyle', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "PasswordHash", {
            get: function () { return this._aspect._getFieldVal('PasswordHash'); },
            set: function (v) { this._aspect._setFieldVal('PasswordHash', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "PasswordSalt", {
            get: function () { return this._aspect._getFieldVal('PasswordSalt'); },
            set: function (v) { this._aspect._setFieldVal('PasswordSalt', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "SalesPerson", {
            get: function () { return this._aspect._getFieldVal('SalesPerson'); },
            set: function (v) { this._aspect._setFieldVal('SalesPerson', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "Suffix", {
            get: function () { return this._aspect._getFieldVal('Suffix'); },
            set: function (v) { this._aspect._setFieldVal('Suffix', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "Title", {
            get: function () { return this._aspect._getFieldVal('Title'); },
            set: function (v) { this._aspect._setFieldVal('Title', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "AddressCount", {
            get: function () { return this._aspect._getFieldVal('AddressCount'); },
            set: function (v) { this._aspect._setFieldVal('AddressCount', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "CustomerAddress", {
            get: function () { return this._aspect._getNavFieldVal('CustomerAddress'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerEntity.prototype, "SalesOrderHeader", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderHeader'); },
            enumerable: true,
            configurable: true
        });
        return CustomerEntity;
    }(RIAPP.CollectionItem));
    var CustomerDb = (function (_super) {
        __extends(CustomerDb, _super);
        function CustomerDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Customer" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerName", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 5, "dependentOn": "", "nested": [{ "fieldName": "Contact", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 5, "dependentOn": "", "nested": [{ "fieldName": "EmailAddress", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Phone", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }] }, { "fieldName": "FirstName", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LastName", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "MiddleName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "CustomerName.FirstName,CustomerName.MiddleName,CustomerName.LastName", "nested": null }] }, { "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CompanyName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 128, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "NameStyle", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PasswordHash", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 128, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PasswordSalt", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 10, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesPerson", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 256, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Suffix", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 10, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Title", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressCount", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeader", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        CustomerDb.prototype.itemFactory = function (aspect) {
            return new CustomerEntity(aspect);
        };
        CustomerDb.prototype.findEntity = function (customerId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        CustomerDb.prototype.toString = function () {
            return 'CustomerDb';
        };
        CustomerDb.prototype.createReadCustomerQuery = function (args) {
            var query = this.createQuery('ReadCustomer');
            query.params = args;
            return query;
        };
        CustomerDb.prototype.defineCustomerName_NameField = function (getFunc) { this._defineCalculatedField('CustomerName.Name', getFunc); };
        return CustomerDb;
    }(dbMOD.DbSet));
    exports.CustomerDb = CustomerDb;
    var CustomerAddressEntity = (function (_super) {
        __extends(CustomerAddressEntity, _super);
        function CustomerAddressEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        CustomerAddressEntity.prototype.toString = function () {
            return 'CustomerAddressEntity';
        };
        Object.defineProperty(CustomerAddressEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            set: function (v) { this._aspect._setFieldVal('CustomerId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "AddressId", {
            get: function () { return this._aspect._getFieldVal('AddressId'); },
            set: function (v) { this._aspect._setFieldVal('AddressId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "AddressType", {
            get: function () { return this._aspect._getFieldVal('AddressType'); },
            set: function (v) { this._aspect._setFieldVal('AddressType', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "Address", {
            get: function () { return this._aspect._getNavFieldVal('Address'); },
            set: function (v) { this._aspect._setNavFieldVal('Address', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "AddressInfo", {
            get: function () { return this._aspect._getNavFieldVal('AddressInfo'); },
            set: function (v) { this._aspect._setNavFieldVal('AddressInfo', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerAddressEntity.prototype, "Customer", {
            get: function () { return this._aspect._getNavFieldVal('Customer'); },
            set: function (v) { this._aspect._setNavFieldVal('Customer', v); },
            enumerable: true,
            configurable: true
        });
        return CustomerAddressEntity;
    }(RIAPP.CollectionItem));
    var CustomerAddressDb = (function (_super) {
        __extends(CustomerAddressDb, _super);
        function CustomerAddressDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "CustomerAddress" },
                childAssoc: ([{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressType", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Address", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "AddressId", "nested": null }, { "fieldName": "AddressInfo", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "AddressId", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "CustomerId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        CustomerAddressDb.prototype.itemFactory = function (aspect) {
            return new CustomerAddressEntity(aspect);
        };
        CustomerAddressDb.prototype.findEntity = function (customerId, addressId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        CustomerAddressDb.prototype.toString = function () {
            return 'CustomerAddressDb';
        };
        CustomerAddressDb.prototype.createReadAddressForCustomersQuery = function (args) {
            var query = this.createQuery('ReadAddressForCustomers');
            query.params = args;
            return query;
        };
        CustomerAddressDb.prototype.createReadCustomerAddressQuery = function () {
            return this.createQuery('ReadCustomerAddress');
        };
        return CustomerAddressDb;
    }(dbMOD.DbSet));
    exports.CustomerAddressDb = CustomerAddressDb;
    var CustomerJSONEntity = (function (_super) {
        __extends(CustomerJSONEntity, _super);
        function CustomerJSONEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        CustomerJSONEntity.prototype.toString = function () {
            return 'CustomerJSONEntity';
        };
        Object.defineProperty(CustomerJSONEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerJSONEntity.prototype, "Data", {
            get: function () { return this._aspect._getFieldVal('Data'); },
            set: function (v) { this._aspect._setFieldVal('Data', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerJSONEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomerJSONEntity.prototype, "Customer", {
            get: function () { return this._aspect._getCalcFieldVal('Customer'); },
            enumerable: true,
            configurable: true
        });
        return CustomerJSONEntity;
    }(RIAPP.CollectionItem));
    var CustomerJSONDb = (function (_super) {
        __extends(CustomerJSONDb, _super);
        function CustomerJSONDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "CustomerJSON" },
                childAssoc: ([]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Data", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": false, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "Data", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        CustomerJSONDb.prototype.itemFactory = function (aspect) {
            return new CustomerJSONEntity(aspect);
        };
        CustomerJSONDb.prototype.findEntity = function (customerId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        CustomerJSONDb.prototype.toString = function () {
            return 'CustomerJSONDb';
        };
        CustomerJSONDb.prototype.createReadCustomerJSONQuery = function () {
            return this.createQuery('ReadCustomerJSON');
        };
        CustomerJSONDb.prototype.defineCustomerField = function (getFunc) { this._defineCalculatedField('Customer', getFunc); };
        return CustomerJSONDb;
    }(dbMOD.DbSet));
    exports.CustomerJSONDb = CustomerJSONDb;
    var LookUpProductEntity = (function (_super) {
        __extends(LookUpProductEntity, _super);
        function LookUpProductEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        LookUpProductEntity.prototype.toString = function () {
            return 'LookUpProductEntity';
        };
        Object.defineProperty(LookUpProductEntity.prototype, "ProductId", {
            get: function () { return this._aspect._getFieldVal('ProductId'); },
            set: function (v) { this._aspect._setFieldVal('ProductId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LookUpProductEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: true,
            configurable: true
        });
        return LookUpProductEntity;
    }(RIAPP.CollectionItem));
    var LookUpProductDb = (function (_super) {
        __extends(LookUpProductDb, _super);
        function LookUpProductDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "LookUpProduct" },
                childAssoc: ([]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        LookUpProductDb.prototype.itemFactory = function (aspect) {
            return new LookUpProductEntity(aspect);
        };
        LookUpProductDb.prototype.findEntity = function (productId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        LookUpProductDb.prototype.toString = function () {
            return 'LookUpProductDb';
        };
        LookUpProductDb.prototype.createReadProductLookUpQuery = function () {
            return this.createQuery('ReadProductLookUp');
        };
        return LookUpProductDb;
    }(dbMOD.DbSet));
    exports.LookUpProductDb = LookUpProductDb;
    var ProductEntity = (function (_super) {
        __extends(ProductEntity, _super);
        function ProductEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductEntity.prototype.toString = function () {
            return 'ProductEntity';
        };
        Object.defineProperty(ProductEntity.prototype, "ProductId", {
            get: function () { return this._aspect._getFieldVal('ProductId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Color", {
            get: function () { return this._aspect._getFieldVal('Color'); },
            set: function (v) { this._aspect._setFieldVal('Color', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "DiscontinuedDate", {
            get: function () { return this._aspect._getFieldVal('DiscontinuedDate'); },
            set: function (v) { this._aspect._setFieldVal('DiscontinuedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ListPrice", {
            get: function () { return this._aspect._getFieldVal('ListPrice'); },
            set: function (v) { this._aspect._setFieldVal('ListPrice', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductCategoryId", {
            get: function () { return this._aspect._getFieldVal('ProductCategoryId'); },
            set: function (v) { this._aspect._setFieldVal('ProductCategoryId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductModelId", {
            get: function () { return this._aspect._getFieldVal('ProductModelId'); },
            set: function (v) { this._aspect._setFieldVal('ProductModelId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductNumber", {
            get: function () { return this._aspect._getFieldVal('ProductNumber'); },
            set: function (v) { this._aspect._setFieldVal('ProductNumber', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "SellEndDate", {
            get: function () { return this._aspect._getFieldVal('SellEndDate'); },
            set: function (v) { this._aspect._setFieldVal('SellEndDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "SellStartDate", {
            get: function () { return this._aspect._getFieldVal('SellStartDate'); },
            set: function (v) { this._aspect._setFieldVal('SellStartDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Size", {
            get: function () { return this._aspect._getFieldVal('Size'); },
            set: function (v) { this._aspect._setFieldVal('Size', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "StandardCost", {
            get: function () { return this._aspect._getFieldVal('StandardCost'); },
            set: function (v) { this._aspect._setFieldVal('StandardCost', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ThumbnailPhotoFileName", {
            get: function () { return this._aspect._getFieldVal('ThumbnailPhotoFileName'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "Weight", {
            get: function () { return this._aspect._getFieldVal('Weight'); },
            set: function (v) { this._aspect._setFieldVal('Weight', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "IsActive", {
            get: function () { return this._aspect._getCalcFieldVal('IsActive'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductCategory", {
            get: function () { return this._aspect._getNavFieldVal('ProductCategory'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductCategory', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "ProductModel", {
            get: function () { return this._aspect._getNavFieldVal('ProductModel'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductModel', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductEntity.prototype, "SalesOrderDetail", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderDetail'); },
            enumerable: true,
            configurable: true
        });
        return ProductEntity;
    }(RIAPP.CollectionItem));
    var ProductDb = (function (_super) {
        __extends(ProductDb, _super);
        function ProductDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Product" },
                childAssoc: ([{ "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }, { "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }]),
                parentAssoc: ([{ "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Color", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DiscontinuedDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ListPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "100,5000", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductCategoryId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "SellEndDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SellStartDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "2000-01-01,2020-01-01", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Size", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 5, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StandardCost", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ThumbnailPhotoFileName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Weight", "isPrimaryKey": 0, "dataType": 4, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "IsActive", "isPrimaryKey": 0, "dataType": 2, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "SellEndDate", "nested": null }, { "fieldName": "ProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductCategoryId", "nested": null }, { "fieldName": "ProductModel", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductModelId", "nested": null }, { "fieldName": "SalesOrderDetail", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductDb.prototype.itemFactory = function (aspect) {
            return new ProductEntity(aspect);
        };
        ProductDb.prototype.findEntity = function (productId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductDb.prototype.toString = function () {
            return 'ProductDb';
        };
        ProductDb.prototype.createReadProductByIdsQuery = function (args) {
            var query = this.createQuery('ReadProductByIds');
            query.params = args;
            return query;
        };
        ProductDb.prototype.createReadProductQuery = function (args) {
            var query = this.createQuery('ReadProduct');
            query.params = args;
            return query;
        };
        ProductDb.prototype.defineIsActiveField = function (getFunc) { this._defineCalculatedField('IsActive', getFunc); };
        return ProductDb;
    }(dbMOD.DbSet));
    exports.ProductDb = ProductDb;
    var ProductCategoryEntity = (function (_super) {
        __extends(ProductCategoryEntity, _super);
        function ProductCategoryEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductCategoryEntity.prototype.toString = function () {
            return 'ProductCategoryEntity';
        };
        Object.defineProperty(ProductCategoryEntity.prototype, "ProductCategoryId", {
            get: function () { return this._aspect._getFieldVal('ProductCategoryId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "ParentProductCategoryId", {
            get: function () { return this._aspect._getFieldVal('ParentProductCategoryId'); },
            set: function (v) { this._aspect._setFieldVal('ParentProductCategoryId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "Product", {
            get: function () { return this._aspect._getNavFieldVal('Product'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "ParentProductCategory", {
            get: function () { return this._aspect._getNavFieldVal('ParentProductCategory'); },
            set: function (v) { this._aspect._setNavFieldVal('ParentProductCategory', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductCategoryEntity.prototype, "InverseParentProductCategory", {
            get: function () { return this._aspect._getNavFieldVal('InverseParentProductCategory'); },
            enumerable: true,
            configurable: true
        });
        return ProductCategoryEntity;
    }(RIAPP.CollectionItem));
    var ProductCategoryDb = (function (_super) {
        __extends(ProductCategoryDb, _super);
        function ProductCategoryDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductCategory" },
                childAssoc: ([{ "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }]),
                parentAssoc: ([{ "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }, { "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductCategoryId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategoryId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ParentProductCategoryId", "nested": null }, { "fieldName": "InverseParentProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductCategoryDb.prototype.itemFactory = function (aspect) {
            return new ProductCategoryEntity(aspect);
        };
        ProductCategoryDb.prototype.findEntity = function (productCategoryId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductCategoryDb.prototype.toString = function () {
            return 'ProductCategoryDb';
        };
        ProductCategoryDb.prototype.createReadProductCategoryQuery = function () {
            return this.createQuery('ReadProductCategory');
        };
        return ProductCategoryDb;
    }(dbMOD.DbSet));
    exports.ProductCategoryDb = ProductCategoryDb;
    var ProductDescriptionEntity = (function (_super) {
        __extends(ProductDescriptionEntity, _super);
        function ProductDescriptionEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductDescriptionEntity.prototype.toString = function () {
            return 'ProductDescriptionEntity';
        };
        Object.defineProperty(ProductDescriptionEntity.prototype, "ProductDescriptionId", {
            get: function () { return this._aspect._getFieldVal('ProductDescriptionId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "Description", {
            get: function () { return this._aspect._getFieldVal('Description'); },
            set: function (v) { this._aspect._setFieldVal('Description', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductDescriptionEntity.prototype, "ProductModelProductDescription", {
            get: function () { return this._aspect._getNavFieldVal('ProductModelProductDescription'); },
            enumerable: true,
            configurable: true
        });
        return ProductDescriptionEntity;
    }(RIAPP.CollectionItem));
    var ProductDescriptionDb = (function (_super) {
        __extends(ProductDescriptionDb, _super);
        function ProductDescriptionDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductDescription" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductDescriptionId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Description", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 400, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductDescriptionDb.prototype.itemFactory = function (aspect) {
            return new ProductDescriptionEntity(aspect);
        };
        ProductDescriptionDb.prototype.findEntity = function (productDescriptionId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductDescriptionDb.prototype.toString = function () {
            return 'ProductDescriptionDb';
        };
        return ProductDescriptionDb;
    }(dbMOD.DbSet));
    exports.ProductDescriptionDb = ProductDescriptionDb;
    var ProductModelEntity = (function (_super) {
        __extends(ProductModelEntity, _super);
        function ProductModelEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductModelEntity.prototype.toString = function () {
            return 'ProductModelEntity';
        };
        Object.defineProperty(ProductModelEntity.prototype, "ProductModelId", {
            get: function () { return this._aspect._getFieldVal('ProductModelId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "CatalogDescription", {
            get: function () { return this._aspect._getFieldVal('CatalogDescription'); },
            set: function (v) { this._aspect._setFieldVal('CatalogDescription', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "Name", {
            get: function () { return this._aspect._getFieldVal('Name'); },
            set: function (v) { this._aspect._setFieldVal('Name', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "Product", {
            get: function () { return this._aspect._getNavFieldVal('Product'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelEntity.prototype, "ProductModelProductDescription", {
            get: function () { return this._aspect._getNavFieldVal('ProductModelProductDescription'); },
            enumerable: true,
            configurable: true
        });
        return ProductModelEntity;
    }(RIAPP.CollectionItem));
    var ProductModelDb = (function (_super) {
        __extends(ProductModelDb, _super);
        function ProductModelDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductModel" },
                childAssoc: ([]),
                parentAssoc: ([{ "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CatalogDescription", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductModelDb.prototype.itemFactory = function (aspect) {
            return new ProductModelEntity(aspect);
        };
        ProductModelDb.prototype.findEntity = function (productModelId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductModelDb.prototype.toString = function () {
            return 'ProductModelDb';
        };
        ProductModelDb.prototype.createReadProductModelQuery = function () {
            return this.createQuery('ReadProductModel');
        };
        return ProductModelDb;
    }(dbMOD.DbSet));
    exports.ProductModelDb = ProductModelDb;
    var ProductModelProductDescriptionEntity = (function (_super) {
        __extends(ProductModelProductDescriptionEntity, _super);
        function ProductModelProductDescriptionEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        ProductModelProductDescriptionEntity.prototype.toString = function () {
            return 'ProductModelProductDescriptionEntity';
        };
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductModelId", {
            get: function () { return this._aspect._getFieldVal('ProductModelId'); },
            set: function (v) { this._aspect._setFieldVal('ProductModelId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductDescriptionId", {
            get: function () { return this._aspect._getFieldVal('ProductDescriptionId'); },
            set: function (v) { this._aspect._setFieldVal('ProductDescriptionId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "Culture", {
            get: function () { return this._aspect._getFieldVal('Culture'); },
            set: function (v) { this._aspect._setFieldVal('Culture', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductDescription", {
            get: function () { return this._aspect._getNavFieldVal('ProductDescription'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductDescription', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductModelProductDescriptionEntity.prototype, "ProductModel", {
            get: function () { return this._aspect._getNavFieldVal('ProductModel'); },
            set: function (v) { this._aspect._setNavFieldVal('ProductModel', v); },
            enumerable: true,
            configurable: true
        });
        return ProductModelProductDescriptionEntity;
    }(RIAPP.CollectionItem));
    var ProductModelProductDescriptionDb = (function (_super) {
        __extends(ProductModelProductDescriptionDb, _super);
        function ProductModelProductDescriptionDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductModelProductDescription" },
                childAssoc: ([{ "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductDescriptionId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Culture", "isPrimaryKey": 3, "dataType": 1, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 6, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductDescriptionId", "nested": null }, { "fieldName": "ProductModel", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductModelId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        ProductModelProductDescriptionDb.prototype.itemFactory = function (aspect) {
            return new ProductModelProductDescriptionEntity(aspect);
        };
        ProductModelProductDescriptionDb.prototype.findEntity = function (productModelId, productDescriptionId, culture) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        ProductModelProductDescriptionDb.prototype.toString = function () {
            return 'ProductModelProductDescriptionDb';
        };
        return ProductModelProductDescriptionDb;
    }(dbMOD.DbSet));
    exports.ProductModelProductDescriptionDb = ProductModelProductDescriptionDb;
    var SalesInfoEntity = (function (_super) {
        __extends(SalesInfoEntity, _super);
        function SalesInfoEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        SalesInfoEntity.prototype.toString = function () {
            return 'SalesInfoEntity';
        };
        Object.defineProperty(SalesInfoEntity.prototype, "SalesPerson", {
            get: function () { return this._aspect._getFieldVal('SalesPerson'); },
            set: function (v) { this._aspect._setFieldVal('SalesPerson', v); },
            enumerable: true,
            configurable: true
        });
        return SalesInfoEntity;
    }(RIAPP.CollectionItem));
    var SalesInfoDb = (function (_super) {
        __extends(SalesInfoDb, _super);
        function SalesInfoDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "SalesInfo" },
                childAssoc: ([]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesPerson", "isPrimaryKey": 1, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        SalesInfoDb.prototype.itemFactory = function (aspect) {
            return new SalesInfoEntity(aspect);
        };
        SalesInfoDb.prototype.findEntity = function (salesPerson) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        SalesInfoDb.prototype.toString = function () {
            return 'SalesInfoDb';
        };
        SalesInfoDb.prototype.createReadSalesInfoQuery = function () {
            return this.createQuery('ReadSalesInfo');
        };
        return SalesInfoDb;
    }(dbMOD.DbSet));
    exports.SalesInfoDb = SalesInfoDb;
    var SalesOrderDetailEntity = (function (_super) {
        __extends(SalesOrderDetailEntity, _super);
        function SalesOrderDetailEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        SalesOrderDetailEntity.prototype.toString = function () {
            return 'SalesOrderDetailEntity';
        };
        Object.defineProperty(SalesOrderDetailEntity.prototype, "SalesOrderId", {
            get: function () { return this._aspect._getFieldVal('SalesOrderId'); },
            set: function (v) { this._aspect._setFieldVal('SalesOrderId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "SalesOrderDetailId", {
            get: function () { return this._aspect._getFieldVal('SalesOrderDetailId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "LineTotal", {
            get: function () { return this._aspect._getFieldVal('LineTotal'); },
            set: function (v) { this._aspect._setFieldVal('LineTotal', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "OrderQty", {
            get: function () { return this._aspect._getFieldVal('OrderQty'); },
            set: function (v) { this._aspect._setFieldVal('OrderQty', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "ProductId", {
            get: function () { return this._aspect._getFieldVal('ProductId'); },
            set: function (v) { this._aspect._setFieldVal('ProductId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "UnitPrice", {
            get: function () { return this._aspect._getFieldVal('UnitPrice'); },
            set: function (v) { this._aspect._setFieldVal('UnitPrice', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "UnitPriceDiscount", {
            get: function () { return this._aspect._getFieldVal('UnitPriceDiscount'); },
            set: function (v) { this._aspect._setFieldVal('UnitPriceDiscount', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "Product", {
            get: function () { return this._aspect._getNavFieldVal('Product'); },
            set: function (v) { this._aspect._setNavFieldVal('Product', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderDetailEntity.prototype, "SalesOrder", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrder'); },
            set: function (v) { this._aspect._setNavFieldVal('SalesOrder', v); },
            enumerable: true,
            configurable: true
        });
        return SalesOrderDetailEntity;
    }(RIAPP.CollectionItem));
    var SalesOrderDetailDb = (function (_super) {
        __extends(SalesOrderDetailDb, _super);
        function SalesOrderDetailDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "SalesOrderDetail" },
                childAssoc: ([{ "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }, { "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }]),
                parentAssoc: ([])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetailId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LineTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderQty", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductId", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPriceDiscount", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductId", "nested": null }, { "fieldName": "SalesOrder", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "SalesOrderId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        SalesOrderDetailDb.prototype.itemFactory = function (aspect) {
            return new SalesOrderDetailEntity(aspect);
        };
        SalesOrderDetailDb.prototype.findEntity = function (salesOrderId, salesOrderDetailId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        SalesOrderDetailDb.prototype.toString = function () {
            return 'SalesOrderDetailDb';
        };
        SalesOrderDetailDb.prototype.createReadSalesOrderDetailQuery = function () {
            return this.createQuery('ReadSalesOrderDetail');
        };
        return SalesOrderDetailDb;
    }(dbMOD.DbSet));
    exports.SalesOrderDetailDb = SalesOrderDetailDb;
    var SalesOrderHeaderEntity = (function (_super) {
        __extends(SalesOrderHeaderEntity, _super);
        function SalesOrderHeaderEntity(aspect) {
            return _super.call(this, aspect) || this;
        }
        SalesOrderHeaderEntity.prototype.toString = function () {
            return 'SalesOrderHeaderEntity';
        };
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SalesOrderId", {
            get: function () { return this._aspect._getFieldVal('SalesOrderId'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "AccountNumber", {
            get: function () { return this._aspect._getFieldVal('AccountNumber'); },
            set: function (v) { this._aspect._setFieldVal('AccountNumber', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "BillToAddressId", {
            get: function () { return this._aspect._getFieldVal('BillToAddressId'); },
            set: function (v) { this._aspect._setFieldVal('BillToAddressId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Comment", {
            get: function () { return this._aspect._getFieldVal('Comment'); },
            set: function (v) { this._aspect._setFieldVal('Comment', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "CreditCardApprovalCode", {
            get: function () { return this._aspect._getFieldVal('CreditCardApprovalCode'); },
            set: function (v) { this._aspect._setFieldVal('CreditCardApprovalCode', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "CustomerId", {
            get: function () { return this._aspect._getFieldVal('CustomerId'); },
            set: function (v) { this._aspect._setFieldVal('CustomerId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "DueDate", {
            get: function () { return this._aspect._getFieldVal('DueDate'); },
            set: function (v) { this._aspect._setFieldVal('DueDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Freight", {
            get: function () { return this._aspect._getFieldVal('Freight'); },
            set: function (v) { this._aspect._setFieldVal('Freight', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ModifiedDate", {
            get: function () { return this._aspect._getFieldVal('ModifiedDate'); },
            set: function (v) { this._aspect._setFieldVal('ModifiedDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "OnlineOrderFlag", {
            get: function () { return this._aspect._getFieldVal('OnlineOrderFlag'); },
            set: function (v) { this._aspect._setFieldVal('OnlineOrderFlag', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "OrderDate", {
            get: function () { return this._aspect._getFieldVal('OrderDate'); },
            set: function (v) { this._aspect._setFieldVal('OrderDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "PurchaseOrderNumber", {
            get: function () { return this._aspect._getFieldVal('PurchaseOrderNumber'); },
            set: function (v) { this._aspect._setFieldVal('PurchaseOrderNumber', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "RevisionNumber", {
            get: function () { return this._aspect._getFieldVal('RevisionNumber'); },
            set: function (v) { this._aspect._setFieldVal('RevisionNumber', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Rowguid", {
            get: function () { return this._aspect._getFieldVal('Rowguid'); },
            set: function (v) { this._aspect._setFieldVal('Rowguid', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SalesOrderNumber", {
            get: function () { return this._aspect._getFieldVal('SalesOrderNumber'); },
            set: function (v) { this._aspect._setFieldVal('SalesOrderNumber', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipDate", {
            get: function () { return this._aspect._getFieldVal('ShipDate'); },
            set: function (v) { this._aspect._setFieldVal('ShipDate', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipMethod", {
            get: function () { return this._aspect._getFieldVal('ShipMethod'); },
            set: function (v) { this._aspect._setFieldVal('ShipMethod', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipToAddressId", {
            get: function () { return this._aspect._getFieldVal('ShipToAddressId'); },
            set: function (v) { this._aspect._setFieldVal('ShipToAddressId', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Status", {
            get: function () { return this._aspect._getFieldVal('Status'); },
            set: function (v) { this._aspect._setFieldVal('Status', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SubTotal", {
            get: function () { return this._aspect._getFieldVal('SubTotal'); },
            set: function (v) { this._aspect._setFieldVal('SubTotal', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "TaxAmt", {
            get: function () { return this._aspect._getFieldVal('TaxAmt'); },
            set: function (v) { this._aspect._setFieldVal('TaxAmt', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "TotalDue", {
            get: function () { return this._aspect._getFieldVal('TotalDue'); },
            set: function (v) { this._aspect._setFieldVal('TotalDue', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "SalesOrderDetail", {
            get: function () { return this._aspect._getNavFieldVal('SalesOrderDetail'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "BillToAddress", {
            get: function () { return this._aspect._getNavFieldVal('BillToAddress'); },
            set: function (v) { this._aspect._setNavFieldVal('BillToAddress', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "Customer", {
            get: function () { return this._aspect._getNavFieldVal('Customer'); },
            set: function (v) { this._aspect._setNavFieldVal('Customer', v); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SalesOrderHeaderEntity.prototype, "ShipToAddress", {
            get: function () { return this._aspect._getNavFieldVal('ShipToAddress'); },
            set: function (v) { this._aspect._setNavFieldVal('ShipToAddress', v); },
            enumerable: true,
            configurable: true
        });
        return SalesOrderHeaderEntity;
    }(RIAPP.CollectionItem));
    var SalesOrderHeaderDb = (function (_super) {
        __extends(SalesOrderHeaderDb, _super);
        function SalesOrderHeaderDb(dbContext) {
            var _this = this;
            var opts = {
                dbContext: dbContext,
                dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "SalesOrderHeader" },
                childAssoc: ([{ "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }]),
                parentAssoc: ([{ "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }])
            };
            opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AccountNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddressId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Comment", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CreditCardApprovalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerId", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DueDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Freight", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "OnlineOrderFlag", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PurchaseOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "RevisionNumber", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "ShipDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipMethod", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipToAddressId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Status", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SubTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TaxAmt", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TotalDue", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetail", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "BillToAddressId", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "CustomerId", "nested": null }, { "fieldName": "ShipToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ShipToAddressId", "nested": null }]);
            _this = _super.call(this, opts) || this;
            return _this;
        }
        SalesOrderHeaderDb.prototype.itemFactory = function (aspect) {
            return new SalesOrderHeaderEntity(aspect);
        };
        SalesOrderHeaderDb.prototype.findEntity = function (salesOrderId) {
            return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
        };
        SalesOrderHeaderDb.prototype.toString = function () {
            return 'SalesOrderHeaderDb';
        };
        SalesOrderHeaderDb.prototype.createReadSalesOrderHeaderQuery = function () {
            return this.createQuery('ReadSalesOrderHeader');
        };
        return SalesOrderHeaderDb;
    }(dbMOD.DbSet));
    exports.SalesOrderHeaderDb = SalesOrderHeaderDb;
    var DbSets = (function (_super) {
        __extends(DbSets, _super);
        function DbSets(dbContext) {
            var _this = _super.call(this, dbContext) || this;
            _this._createDbSet("Address", AddressDb);
            _this._createDbSet("AddressInfo", AddressInfoDb);
            _this._createDbSet("Customer", CustomerDb);
            _this._createDbSet("CustomerAddress", CustomerAddressDb);
            _this._createDbSet("CustomerJSON", CustomerJSONDb);
            _this._createDbSet("LookUpProduct", LookUpProductDb);
            _this._createDbSet("Product", ProductDb);
            _this._createDbSet("ProductCategory", ProductCategoryDb);
            _this._createDbSet("ProductDescription", ProductDescriptionDb);
            _this._createDbSet("ProductModel", ProductModelDb);
            _this._createDbSet("ProductModelProductDescription", ProductModelProductDescriptionDb);
            _this._createDbSet("SalesInfo", SalesInfoDb);
            _this._createDbSet("SalesOrderDetail", SalesOrderDetailDb);
            _this._createDbSet("SalesOrderHeader", SalesOrderHeaderDb);
            return _this;
        }
        Object.defineProperty(DbSets.prototype, "Address", {
            get: function () { return this.getDbSet("Address"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "AddressInfo", {
            get: function () { return this.getDbSet("AddressInfo"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "Customer", {
            get: function () { return this.getDbSet("Customer"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "CustomerAddress", {
            get: function () { return this.getDbSet("CustomerAddress"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "CustomerJSON", {
            get: function () { return this.getDbSet("CustomerJSON"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "LookUpProduct", {
            get: function () { return this.getDbSet("LookUpProduct"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "Product", {
            get: function () { return this.getDbSet("Product"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductCategory", {
            get: function () { return this.getDbSet("ProductCategory"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductDescription", {
            get: function () { return this.getDbSet("ProductDescription"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductModel", {
            get: function () { return this.getDbSet("ProductModel"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "ProductModelProductDescription", {
            get: function () { return this.getDbSet("ProductModelProductDescription"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "SalesInfo", {
            get: function () { return this.getDbSet("SalesInfo"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "SalesOrderDetail", {
            get: function () { return this.getDbSet("SalesOrderDetail"); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DbSets.prototype, "SalesOrderHeader", {
            get: function () { return this.getDbSet("SalesOrderHeader"); },
            enumerable: true,
            configurable: true
        });
        return DbSets;
    }(dbMOD.DbSets));
    exports.DbSets = DbSets;
    var DbContext = (function (_super) {
        __extends(DbContext, _super);
        function DbContext() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DbContext.prototype._createDbSets = function () {
            return new DbSets(this);
        };
        DbContext.prototype._createAssociations = function () {
            return [{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }, { "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }, { "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }, { "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }, { "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }];
        };
        DbContext.prototype._createMethods = function () {
            return [{ "methodName": "ReadAddress", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressByIds", "parameters": [{ "name": "addressIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressForCustomers", "parameters": [{ "name": "custIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressInfo", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomer", "parameters": [{ "name": "includeNav", "dataType": 2, "isArray": false, "isNullable": true, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomerAddress", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomerJSON", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProduct", "parameters": [{ "name": "param1", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductByIds", "parameters": [{ "name": "productIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductCategory", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductLookUp", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductModel", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesInfo", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderDetail", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderHeader", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "GetClassifiers", "parameters": [], "methodResult": true, "isQuery": false }, { "methodName": "TestComplexInvoke", "parameters": [{ "name": "info", "dataType": 0, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "keys", "dataType": 0, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": false, "isQuery": false }, { "methodName": "TestInvoke", "parameters": [{ "name": "param1", "dataType": 10, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": false }];
        };
        return DbContext;
    }(dbMOD.DbContext));
    exports.DbContext = DbContext;
});
define("gridDemo/commands", ["require", "exports", "jriapp"], function (require, exports, RIAPP) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestInvokeCommand = (function (_super) {
        __extends(TestInvokeCommand, _super);
        function TestInvokeCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TestInvokeCommand.prototype.action = function (param) {
            var viewModel = this.owner;
            viewModel.invokeResult = null;
            var promise = viewModel.dbContext.serviceMethods.TestInvoke({ param1: [10, 11, 12, 13, 14], param2: param.Name });
            promise.then(function (res) {
                viewModel.invokeResult = res;
                viewModel.showDialog();
            });
        };
        TestInvokeCommand.prototype.isCanExecute = function (param) {
            var viewModel = this.owner;
            return viewModel.currentItem !== null;
        };
        return TestInvokeCommand;
    }(RIAPP.BaseCommand));
    exports.TestInvokeCommand = TestInvokeCommand;
    var ResetCommand = (function (_super) {
        __extends(ResetCommand, _super);
        function ResetCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResetCommand.prototype.action = function (param) {
            this.owner.reset();
        };
        ResetCommand.prototype.isCanExecute = function (param) {
            return true;
        };
        return ResetCommand;
    }(RIAPP.BaseCommand));
    exports.ResetCommand = ResetCommand;
});
define("gridDemo/filters", ["require", "exports", "jriapp", "jriapp_db", "demo/demoDB", "gridDemo/commands"], function (require, exports, RIAPP, dbMOD, DEMODB, commands_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = RIAPP.Utils;
    var ProductsFilter = (function (_super) {
        __extends(ProductsFilter, _super);
        function ProductsFilter(app) {
            var _this = _super.call(this) || this;
            var self = _this;
            _this._app = app;
            _this._prodNumber = null;
            _this._name = null;
            _this._parentCategoryId = null;
            _this._childCategoryId = null;
            _this._selectedCategory = null;
            _this._selectedModel = null;
            _this._modelId = null;
            _this._saleStart1 = null;
            _this._saleStart2 = null;
            _this._parentCategories = new dbMOD.DataView({
                dataSource: _this.ProductCategories,
                fn_sort: function (a, b) { return a.ProductCategoryId - b.ProductCategoryId; },
                fn_filter: function (item) { return item.ParentProductCategoryId == null; }
            });
            _this._childCategories = new dbMOD.DataView({
                dataSource: _this.ProductCategories,
                fn_sort: function (a, b) { return a.ProductCategoryId - b.ProductCategoryId; },
                fn_filter: function (item) { return item.ParentProductCategoryId !== null && item.ParentProductCategoryId == self.parentCategoryId; }
            });
            _this._sizes = new DEMODB.KeyValDictionary();
            _this._sizes.fillItems([{ key: 0, val: 'EMPTY' }, { key: 1, val: 'NOT EMPTY' }, { key: 2, val: 'SMALL SIZE' }, { key: 3, val: 'BIG SIZE' }], true);
            _this._size = null;
            _this._resetCommand = new commands_1.ResetCommand(self);
            _this._prodCatDic = new DEMODB.KeyValDictionary();
            _this._prodModDic = new DEMODB.KeyValDictionary();
            _this._prodDescDic = new DEMODB.KeyValDictionary();
            _this._loaded = false;
            return _this;
        }
        ProductsFilter.prototype._loadCategories = function () {
            var query = this.ProductCategories.createReadProductCategoryQuery();
            query.orderBy('Name');
            return query.load();
        };
        ProductsFilter.prototype._loadProductModels = function () {
            var query = this.ProductModels.createReadProductModelQuery();
            query.orderBy('Name');
            return query.load();
        };
        ProductsFilter.prototype._loadClassifiers = function () {
            return this.dbContext.serviceMethods.GetClassifiers();
        };
        ProductsFilter.prototype.load = function () {
            var _this = this;
            var promise1 = this._loadClassifiers().then(function (res) {
                _this._prodCatDic.fillItems(res.prodCategory, true);
                _this._prodModDic.fillItems(res.prodModel, true);
                _this._prodDescDic.fillItems(res.prodDescription, true);
            }), promise2 = this._loadCategories(), promise3 = this._loadProductModels();
            return utils.defer.whenAll([promise1, promise2, promise3]).then(function () {
                _this._loaded = true;
                _this.objEvents.raise('loaded', {});
                _this.reset();
            }, function (err) { _this._app.handleError(err, _this); });
        };
        ProductsFilter.prototype.addOnLoaded = function (fn, nmspace) {
            this.objEvents.on('loaded', fn, nmspace);
        };
        ProductsFilter.prototype.reset = function () {
            this.parentCategoryId = null;
            this.childCategoryId = null;
            this.prodNumber = null;
            this.name = null;
            this.modelId = null;
            this.selectedModel = null;
            this.selectedCategory = null;
            this.saleStart1 = null;
            this.saleStart2 = null;
            this.size = null;
        };
        Object.defineProperty(ProductsFilter.prototype, "loaded", {
            get: function () {
                return this._loaded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodCatDic", {
            get: function () { return this._prodCatDic; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodModDic", {
            get: function () { return this._prodModDic; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodDescDic", {
            get: function () { return this._prodDescDic; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "prodNumber", {
            get: function () { return this._prodNumber; },
            set: function (v) {
                if (this._prodNumber != v) {
                    this._prodNumber = v;
                    this.objEvents.raiseProp('prodNumber');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "name", {
            get: function () { return this._name; },
            set: function (v) {
                if (this._name != v) {
                    this._name = v;
                    this.objEvents.raiseProp('name');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "parentCategoryId", {
            get: function () { return this._parentCategoryId; },
            set: function (v) {
                if (this._parentCategoryId != v) {
                    this._parentCategoryId = v;
                    this.objEvents.raiseProp('parentCategoryId');
                    this._childCategories.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "childCategoryId", {
            get: function () { return this._childCategoryId; },
            set: function (v) {
                if (this._childCategoryId != v) {
                    this._childCategoryId = v;
                    this.objEvents.raiseProp('childCategoryId');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "modelId", {
            get: function () { return this._modelId; },
            set: function (v) {
                if (this._modelId != v) {
                    this._modelId = v;
                    this.objEvents.raiseProp('modelId');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "saleStart1", {
            get: function () { return this._saleStart1; },
            set: function (v) {
                if (this._saleStart1 != v) {
                    this._saleStart1 = v;
                    this.objEvents.raiseProp('saleStart1');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "saleStart2", {
            get: function () { return this._saleStart2; },
            set: function (v) {
                if (this._saleStart2 != v) {
                    this._saleStart2 = v;
                    this.objEvents.raiseProp('saleStart2');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ParentCategories", {
            get: function () { return this._parentCategories; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ChildCategories", {
            get: function () { return this._childCategories; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ProductModels", {
            get: function () { return this.dbSets.ProductModel; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "ProductCategories", {
            get: function () { return this.dbSets.ProductCategory; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "resetCommand", {
            get: function () { return this._resetCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "searchTextToolTip", {
            get: function () { return "Use placeholder <span style='font-size: larger'><b>%</b></span><br/> for searching by part of the value"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "selectedCategory", {
            get: function () { return this._selectedCategory; },
            set: function (v) {
                if (this._selectedCategory != v) {
                    this._selectedCategory = v;
                    this.objEvents.raiseProp('selectedCategory');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "selectedModel", {
            get: function () { return this._selectedModel; },
            set: function (v) {
                if (this._selectedModel != v) {
                    this._selectedModel = v;
                    this.objEvents.raiseProp('selectedModel');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "sizes", {
            get: function () { return this._sizes; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "size", {
            get: function () { return this._size; },
            set: function (v) {
                if (this._size != v) {
                    this._size = v;
                    this.objEvents.raiseProp('size');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "modelData", {
            set: function (data) { this.ProductModels.fillData(data); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "categoryData", {
            set: function (data) { this.ProductCategories.fillData(data); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductsFilter.prototype, "dbContext", {
            get: function () { return this._app.dbContext; },
            enumerable: true,
            configurable: true
        });
        ProductsFilter.prototype.toString = function () {
            return "ProductFilter";
        };
        return ProductsFilter;
    }(RIAPP.BaseObject));
    exports.ProductsFilter = ProductsFilter;
});
define("gridDemo/states", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RowStateProvider = (function () {
        function RowStateProvider() {
        }
        RowStateProvider.prototype.getCSS = function (item, val) {
            return (!val) ? 'rowInactive' : null;
        };
        return RowStateProvider;
    }());
    exports.RowStateProvider = RowStateProvider;
    var OptionTextProvider = (function () {
        function OptionTextProvider() {
        }
        OptionTextProvider.prototype.getText = function (item, itemIndex, text) {
            if (itemIndex > 0)
                return itemIndex + ') ' + text;
            else
                return text;
        };
        return OptionTextProvider;
    }());
    exports.OptionTextProvider = OptionTextProvider;
    var OptionStateProvider = (function () {
        function OptionStateProvider() {
        }
        OptionStateProvider.prototype.getCSS = function (item, itemIndex, val) {
            if (itemIndex % 2 == 0)
                return "gray-bgc";
            else
                return "white-bgc";
        };
        return OptionStateProvider;
    }());
    exports.OptionStateProvider = OptionStateProvider;
});
define("gridDemo/productVM", ["require", "exports", "jriapp", "jriapp_db", "jriapp_ui", "common", "gridDemo/filters", "gridDemo/commands", "gridDemo/states"], function (require, exports, RIAPP, dbMOD, uiMOD, COMMON, filters_1, commands_2, states_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = RIAPP.Utils;
    var ProductViewModel = (function (_super) {
        __extends(ProductViewModel, _super);
        function ProductViewModel(app) {
            var _this = _super.call(this, app) || this;
            var self = _this;
            _this._filter = new filters_1.ProductsFilter(app);
            _this._dbSet = _this.dbSets.Product;
            _this._dataGrid = null;
            _this._propWatcher = new RIAPP.PropWatcher();
            _this._selected = {};
            _this._selectedCount = 0;
            _this._invokeResult = null;
            _this._rowStateProvider = new states_1.RowStateProvider();
            _this._optionTextProvider = new states_1.OptionTextProvider();
            _this._optionStateProvider = new states_1.OptionStateProvider();
            var sodAssoc = self.dbContext.associations.getSalesOrderDetail_Product();
            _this._vwSalesOrderDet = new dbMOD.ChildDataView({
                association: sodAssoc,
                fn_sort: function (a, b) { return a.SalesOrderDetailId - b.SalesOrderDetailId; }
            });
            _this._dbSet.objEvents.onProp('currentItem', function (_s, data) {
                self._onCurrentChanged();
            }, self.uniqueID);
            _this._dbSet.addOnItemDeleting(function (_s, args) {
                if (!confirm('Are you sure that you want to delete ' + args.item.Name + ' ?'))
                    args.isCancel = true;
            }, self.uniqueID);
            _this._dbSet.addOnCleared(function (_s, args) {
                _this.dbContext.dbSets.SalesOrderDetail.clear();
            }, self.uniqueID);
            _this._dbSet.addOnEndEdit(function (_s, args) {
                if (!args.isCanceled) {
                    self._testInvokeCommand.raiseCanExecuteChanged();
                }
            }, self.uniqueID);
            _this._dbSet.addOnFill(function (_s, args) {
                if (args.reason === 2)
                    setTimeout(function () {
                        self._updateSelection();
                    }, 0);
            }, self.uniqueID);
            _this._dbSet.isSubmitOnDelete = true;
            var validations = [{
                    fieldName: null, fn: function (item, errors) {
                        if (!!item.SellEndDate) {
                            if (item.SellEndDate < item.SellStartDate) {
                                errors.push('End Date must be after Start Date');
                            }
                        }
                    }
                },
                {
                    fieldName: "Weight", fn: function (item, errors) {
                        if (item.Weight > 20000) {
                            errors.push('Weight must be less than 20000');
                        }
                    }
                }];
            _this._dbSet.addOnValidateField(function (_s, args) {
                var item = args.item;
                validations.filter(function (val) {
                    return args.fieldName === val.fieldName;
                }).forEach(function (val) {
                    val.fn(item, args.errors);
                });
            }, self.uniqueID);
            _this._dbSet.addOnValidateItem(function (_s, args) {
                var item = args.item;
                validations.filter(function (val) {
                    return !val.fieldName;
                }).forEach(function (val) {
                    var errors = [];
                    val.fn(item, errors);
                    if (errors.length > 0) {
                        args.result.push({ fieldName: null, errors: errors });
                    }
                });
            }, self.uniqueID);
            _this._addNewCommand = new RIAPP.Command(function () {
                self._dbSet.addNew();
            });
            _this._loadCommand = new RIAPP.Command(function () {
                self.load();
            });
            _this._testInvokeCommand = new commands_2.TestInvokeCommand(_this);
            _this._columnCommand = new RIAPP.Command(function (product) {
                alert(utils.str.format("You clicked on \"{0}\", current ProductId is: {1}", "Product Column", (!product ? "Not selected" : product.ProductId)));
            }, function () {
                return !!self.currentItem;
            });
            _this._propWatcher.addWatch(self, ['currentItem'], function (property) {
                self._testInvokeCommand.raiseCanExecuteChanged();
            });
            _this._dialogVM = new uiMOD.DialogVM(app);
            var dialogOptions = {
                templateID: 'invokeResultTemplate',
                width: 500,
                height: 250,
                canCancel: false,
                title: 'Result of a service method invocation',
                fn_OnClose: function (dialog) {
                    self.invokeResult = null;
                }
            };
            _this._dialogVM.createDialog('testDialog', dialogOptions);
            return _this;
        }
        ProductViewModel.prototype._addGrid = function (grid) {
            var self = this;
            if (!!this._dataGrid)
                this._removeGrid();
            this._dataGrid = grid;
            this._dataGrid.addOnPageChanged(function (s, args) {
                self.onDataPageChanged();
            }, this.uniqueID, this);
            this._dataGrid.addOnRowSelected(function (s, args) {
                self.onRowSelected(args.row);
            }, this.uniqueID, this);
            this._dataGrid.addOnRowExpanded(function (s, args) {
                if (args.isExpanded)
                    self.onRowExpanded(args.expandedRow);
                else
                    self.onRowCollapsed(args.collapsedRow);
            }, this.uniqueID, this);
            this._dataGrid.addOnCellDblClicked(function (s, args) {
                self.onCellDblClicked(args.cell);
            }, this.uniqueID, this);
        };
        ProductViewModel.prototype._removeGrid = function () {
            if (!this._dataGrid)
                return;
            this._dataGrid.objEvents.offNS(this.uniqueID);
            this._dataGrid = null;
        };
        ProductViewModel.prototype.addTabs = function (tabs) {
            console.log('tabs created');
        };
        ProductViewModel.prototype.removeTabs = function () {
            console.log('tabs destroyed');
        };
        ProductViewModel.prototype.onTabSelected = function (tabs) {
            console.log('tab selected: ' + tabs.tabIndex);
        };
        ProductViewModel.prototype.onDataPageChanged = function () {
            this._updateSelection();
        };
        ProductViewModel.prototype.onRowSelected = function (row) {
            this._productSelected(row.item, row.isSelected);
        };
        ProductViewModel.prototype.onRowExpanded = function (row) {
            this._vwSalesOrderDet.parentItem = this.currentItem;
        };
        ProductViewModel.prototype.onRowCollapsed = function (row) {
        };
        ProductViewModel.prototype.onCellDblClicked = function (cell) {
            alert("You double clicked " + cell.uniqueID);
        };
        ProductViewModel.prototype._onCurrentChanged = function () {
            this.objEvents.raiseProp('currentItem');
            this._columnCommand.raiseCanExecuteChanged();
        };
        ProductViewModel.prototype._updateSelection = function () {
            var self = this, keys = self.selectedIds, grid = self._dataGrid;
            keys.forEach(function (key) {
                var item = self.dbSet.getItemByKey(key);
                if (!!item) {
                    var row = grid.findRowByItem(item);
                    if (!!row)
                        row.isSelected = true;
                }
            });
        };
        ProductViewModel.prototype._clearSelection = function () {
            this._selected = {};
            this.selectedCount = 0;
        };
        ProductViewModel.prototype._productSelected = function (item, isSelected) {
            if (!item)
                return;
            if (isSelected) {
                if (!this._selected[item._key]) {
                    this._selected[item._key] = item;
                    this.selectedCount += 1;
                }
            }
            else {
                if (!!this._selected[item._key]) {
                    delete this._selected[item._key];
                    this.selectedCount -= 1;
                }
            }
        };
        ProductViewModel.prototype.load = function () {
            this._clearSelection();
            var query = this.dbSet.createReadProductQuery({ param1: [10, 11, 12, 13, 14], param2: 'Test' });
            query.pageSize = 50;
            COMMON.addTextQuery(query, 'ProductNumber', this._filter.prodNumber);
            COMMON.addTextQuery(query, 'Name', this._filter.name);
            if (!utils.check.isNt(this._filter.childCategoryId)) {
                query.where('ProductCategoryId', 0, [this._filter.childCategoryId]);
            }
            if (!utils.check.isNt(this._filter.modelId)) {
                query.where('ProductModelId', 0, [this._filter.modelId]);
            }
            if (!utils.check.isNt(this._filter.saleStart1) && !utils.check.isNt(this._filter.saleStart2)) {
                query.where('SellStartDate', 1, [this._filter.saleStart1, this._filter.saleStart2]);
            }
            else if (!utils.check.isNt(this._filter.saleStart1))
                query.where('SellStartDate', 7, [this._filter.saleStart1]);
            else if (!utils.check.isNt(this._filter.saleStart2))
                query.where('SellStartDate', 8, [this._filter.saleStart2]);
            switch (this.filter.size) {
                case 0:
                    query.where('Size', 0, [null]);
                    break;
                case 1:
                    query.where('Size', 9, [null]);
                    break;
                case 2:
                    query.where('Size', 2, ['S']);
                    break;
                case 3:
                    query.where('Size', 2, ['X']);
                    break;
                default:
                    break;
            }
            query.orderBy('Name').thenBy('SellStartDate', 1);
            return query.load();
        };
        ProductViewModel.prototype.showDialog = function (name) {
            this._dialogVM.showDialog(name || 'testDialog', this);
        };
        ProductViewModel.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            this._propWatcher.dispose();
            this._propWatcher = null;
            if (!!this._dbSet) {
                this._dbSet.objEvents.offNS(this.uniqueID);
            }
            if (!!this._dataGrid) {
                this._dataGrid.objEvents.offNS(this.uniqueID);
            }
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(ProductViewModel.prototype, "dbSet", {
            get: function () { return this._dbSet; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "testInvokeCommand", {
            get: function () { return this._testInvokeCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "addNewCommand", {
            get: function () { return this._addNewCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "dbContext", {
            get: function () { return this.app.dbContext; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "dbSets", {
            get: function () { return this.dbContext.dbSets; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "currentItem", {
            get: function () { return this._dbSet.currentItem; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "filter", {
            get: function () { return this._filter; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "loadCommand", {
            get: function () { return this._loadCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "columnCommand", {
            get: function () { return this._columnCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "selectedCount", {
            get: function () { return this._selectedCount; },
            set: function (v) {
                var old = this._selectedCount;
                if (old !== v) {
                    this._selectedCount = v;
                    this.objEvents.raiseProp('selectedCount');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "selectedIds", {
            get: function () { return Object.keys(this._selected); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "invokeResult", {
            get: function () { return this._invokeResult; },
            set: function (v) {
                var old = this._invokeResult;
                if (old !== v) {
                    this._invokeResult = v;
                    this.objEvents.raiseProp('invokeResult');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "vwSalesOrderDet", {
            get: function () { return this._vwSalesOrderDet; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "rowStateProvider", {
            get: function () { return this._rowStateProvider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "optionTextProvider", {
            get: function () { return this._optionTextProvider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "optionStateProvider", {
            get: function () { return this._optionStateProvider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "tabsEvents", {
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "grid", {
            get: function () { return this._dataGrid; },
            set: function (v) {
                if (!!v)
                    this._addGrid(v);
                else
                    this._removeGrid();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProductViewModel.prototype, "dialogOptions", {
            get: function () {
                var dialogOptions;
                dialogOptions = {
                    templateID: 'productEditTemplate',
                    width: 950,
                    height: 600,
                    title: 'Edit Product',
                    submitOnOK: true,
                    fn_OnOpen: function (dialog) {
                        var focusEdit = dialog.template.el.querySelector('span.focus-on-open input[type="text"]');
                        if (!!focusEdit) {
                            focusEdit.focus();
                        }
                        console.log("edit dialog is opened");
                    },
                    fn_OnShow: function (dialog) {
                        console.log("edit dialog is shown");
                    },
                    fn_OnClose: function (dialog) {
                        console.log("edit dialog is closed");
                    },
                    fn_OnOK: function (dialog) {
                        console.log("edit dialog: OK clicked");
                        return 0;
                    }
                };
                return dialogOptions;
            },
            enumerable: true,
            configurable: true
        });
        ProductViewModel.prototype.toString = function () {
            return "ProductVM";
        };
        return ProductViewModel;
    }(RIAPP.ViewModel));
    exports.ProductViewModel = ProductViewModel;
});
define("gridDemo/baseUpload", ["require", "exports", "jriapp", "jriapp_ui", "uploader", "uploader"], function (require, exports, RIAPP, uiMOD, uploader_1, uploader_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uploader = uploader_2.Uploader;
    var utils = RIAPP.Utils, $ = uiMOD.$;
    function fn_getTemplateElement(template, name) {
        var t = template, els = t.findElByDataName(name);
        if (els.length < 1) {
            return null;
        }
        return els[0];
    }
    var BaseUploadVM = (function (_super) {
        __extends(BaseUploadVM, _super);
        function BaseUploadVM(app, url) {
            var _this = _super.call(this, app) || this;
            var self = _this;
            _this._uploadUrl = url;
            _this._formEl = null;
            _this._fileEl = null;
            _this._progressBar = null;
            _this._percentageCalc = null;
            _this._progressDiv = null;
            _this._fileInfo = null;
            _this._id = null;
            _this._fileUploaded = false;
            _this._uploadCommand = new RIAPP.Command(function () {
                try {
                    self.uploadFiles(self._fileEl.files);
                }
                catch (ex) {
                    self.handleError(ex, _this);
                }
            }, function () {
                return self._canUpload();
            });
            return _this;
        }
        BaseUploadVM.prototype._initUI = function () {
            var self = this;
            self.formEl.reset();
            self.fileInfo = null;
            self.fileName = null;
            self._fileUploaded = false;
        };
        BaseUploadVM.prototype._onProgress = function (val) {
            var self = this;
            self._progressBar.prop("max", 100);
            self._progressBar.prop("value", Math.floor(val * 100));
            self._percentageCalc.html(Math.floor(val * 100) + "%");
        };
        BaseUploadVM.prototype._onLoadStart = function () {
            var self = this;
            self._progressBar.prop("max", 100);
            self._progressBar.prop("value", 0);
            self._percentageCalc.html("0%");
            self._progressDiv.show();
        };
        BaseUploadVM.prototype._onLoadComplete = function () {
            var self = this;
            self.fileInfo = 'File uploaded';
            self._progressDiv.hide();
            self._onFileUploaded();
        };
        BaseUploadVM.prototype._onLoadError = function () {
            var self = this;
            self.fileInfo = 'Upload Error!';
            self._progressDiv.hide();
            self.handleError(new Error(utils.str.format("File upload error: {0}", 'Upload Error')), self);
        };
        BaseUploadVM.prototype._onFileUploaded = function () {
            this._fileUploaded = true;
        };
        BaseUploadVM.prototype._addHeaders = function (xhr, file) {
            xhr.setRequestHeader("X-Data-Id", this.id);
            return utils.defer.resolve();
        };
        BaseUploadVM.prototype._onIdChanged = function () {
            this._uploadCommand.raiseCanExecuteChanged();
        };
        BaseUploadVM.prototype._canUpload = function () {
            return !!this._fileInfo;
        };
        BaseUploadVM.prototype._getDataId = function () {
            return this.id;
        };
        BaseUploadVM.prototype._prepareTemplate = function (template, isLoaded) {
            var self = this;
            try {
                var t = template, templEl = t.el;
                if (isLoaded) {
                    self._onTemplateCreated(template);
                }
                else {
                    var fileEl = $(fn_getTemplateElement(template, 'files-to-upload'));
                    fileEl.off('change');
                    $('*[data-name="btn-input"]', templEl).off('click');
                }
            }
            catch (ex) {
                self.handleError(ex, this);
            }
        };
        BaseUploadVM.prototype._onTemplateCreated = function (template) {
            var self = this;
            self._fileEl = fn_getTemplateElement(template, 'files-to-upload');
            self._formEl = fn_getTemplateElement(template, 'uploadForm');
            self._progressBar = $(fn_getTemplateElement(template, 'progressBar'));
            self._percentageCalc = $(fn_getTemplateElement(template, 'percentageCalc'));
            self._progressDiv = $(fn_getTemplateElement(template, 'progressDiv'));
            self._progressDiv.hide();
            $(self._fileEl).on('change', function (e) {
                var fileEl = this;
                e.stopPropagation();
                var fileList = fileEl.files;
                self.fileInfo = null;
                var txt = '';
                for (var i = 0, l = fileList.length; i < l; i++) {
                    txt += utils.str.format('<p>{0} ({1} KB)</p>', fileList[i].name, utils.str.formatNumber(fileList[i].size / 1024, 2, '.', ','));
                }
                self.fileInfo = txt;
                self.fileName = fileList.length > 0 ? fileList[0].name : null;
            });
            var templEl = template.el, $fileEl = $(self._fileEl);
            $fileEl.change(function (e) {
                $('input[data-name="files-input"]', templEl).val($(this).val());
            });
            $('*[data-name="btn-input"]', templEl).click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                $fileEl.click();
            });
        };
        BaseUploadVM.prototype.uploadFiles = function (fileList) {
            var _this = this;
            var list = utils.arr.fromList(fileList);
            var funcs = list.map(function (file, i) { return function () { return _this.uploadFile(file); }; });
            return utils.defer.promiseSerial(funcs);
        };
        BaseUploadVM.prototype.uploadFile = function (file) {
            var self = this, uploader = new uploader_1.Uploader(this._uploadUrl, file);
            self._onLoadStart();
            uploader.addOnProgress(function (s, val) {
                self._onProgress(val);
            });
            uploader.addOnAddHeaders(function (s, args) {
                args.promise = self._addHeaders(args.xhr, file);
            });
            var res = uploader.uploadFile().then(function (fileName) {
                uploader.dispose();
                self._onLoadComplete();
                return fileName;
            });
            res.catch(function (err) {
                uploader.dispose();
                self._onLoadError();
            });
            return res;
        };
        Object.defineProperty(BaseUploadVM.prototype, "uploadUrl", {
            get: function () { return this._uploadUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "fileUploaded", {
            get: function () { return this._fileUploaded; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "formEl", {
            get: function () { return this._formEl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "fileInfo", {
            get: function () { return this._fileInfo; },
            set: function (v) {
                if (this._fileInfo !== v) {
                    this._fileInfo = v;
                    this.objEvents.raiseProp('fileInfo');
                    this._uploadCommand.raiseCanExecuteChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "fileName", {
            get: function () { return this._fileName; },
            set: function (v) {
                if (this._fileName !== v) {
                    this._fileName = v;
                    this.objEvents.raiseProp('fileName');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "uploadCommand", {
            get: function () { return this._uploadCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseUploadVM.prototype, "id", {
            get: function () { return this._id; },
            set: function (v) {
                var old = this._id;
                if (old !== v) {
                    this._id = v;
                    this.objEvents.raiseProp('id');
                    this._onIdChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        BaseUploadVM.prototype.beginEdit = function () {
            return true;
        };
        BaseUploadVM.prototype.endEdit = function () {
            return true;
        };
        BaseUploadVM.prototype.cancelEdit = function () {
            return true;
        };
        Object.defineProperty(BaseUploadVM.prototype, "isEditing", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        return BaseUploadVM;
    }(RIAPP.ViewModel));
    exports.BaseUploadVM = BaseUploadVM;
});
define("gridDemo/uploads", ["require", "exports", "jriapp", "jriapp_ui", "common", "gridDemo/baseUpload"], function (require, exports, RIAPP, uiMOD, COMMON, baseUpload_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadThumbnailVM = (function (_super) {
        __extends(UploadThumbnailVM, _super);
        function UploadThumbnailVM(app, url) {
            var _this = _super.call(this, app, url) || this;
            var self = _this;
            _this._product = null;
            _this._dialogVM = new uiMOD.DialogVM(app);
            var dialogOptions = {
                templateID: 'uploadTemplate',
                width: 550,
                height: 300,
                title: 'Upload Product Thumbnail',
                fn_OnTemplateCreated: function (template) {
                    self._prepareTemplate(template, true);
                },
                fn_OnShow: function (dialog) {
                    self._initUI();
                },
                fn_OnClose: function (dialog) {
                    if (dialog.result == 'ok' && self._onDialogClose()) {
                        self.objEvents.raise('files_uploaded', { id: self.id, product: self._product });
                    }
                }
            };
            _this._dialogVM.createDialog('uploadDialog', dialogOptions);
            _this._dialogCommand = new RIAPP.Command(function (product) {
                try {
                    self._product = product;
                    self.id = self._product.ProductId.toString();
                    self._dialogVM.showDialog('uploadDialog', self);
                }
                catch (ex) {
                    self.handleError(ex, self);
                }
            });
            return _this;
        }
        UploadThumbnailVM.prototype._onDialogClose = function () {
            return this.fileUploaded;
        };
        UploadThumbnailVM.prototype._addHeaders = function (xhr, file) {
            var res = _super.prototype._addHeaders.call(this, xhr, file);
            xhr.setRequestHeader('RequestVerificationToken', COMMON.getAntiForgeryToken());
            return res;
        };
        UploadThumbnailVM.prototype.endEdit = function () {
            return this._onDialogClose();
        };
        UploadThumbnailVM.prototype.addOnFilesUploaded = function (fn, nmspace) {
            this.objEvents.on('files_uploaded', fn, nmspace);
        };
        UploadThumbnailVM.prototype.offOnFilesUploaded = function (nmspace) {
            this.objEvents.off('files_uploaded', nmspace);
        };
        Object.defineProperty(UploadThumbnailVM.prototype, "dialogCommand", {
            get: function () {
                return this._dialogCommand;
            },
            enumerable: true,
            configurable: true
        });
        UploadThumbnailVM.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            this._dialogVM.dispose();
            this._dialogVM = null;
            _super.prototype.dispose.call(this);
        };
        return UploadThumbnailVM;
    }(baseUpload_1.BaseUploadVM));
    exports.UploadThumbnailVM = UploadThumbnailVM;
});
define("gridDemo/app", ["require", "exports", "jriapp", "demo/demoDB", "common", "header", "gridDemo/productVM", "gridDemo/uploads"], function (require, exports, RIAPP, DEMODB, COMMON, HEADER, productVM_1, uploads_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DemoApplication = (function (_super) {
        __extends(DemoApplication, _super);
        function DemoApplication(options) {
            var _this = _super.call(this, options) || this;
            _this._dbContext = null;
            _this._errorVM = null;
            _this._headerVM = null;
            _this._productVM = null;
            _this._uploadVM = null;
            _this._hubConnection = null;
            _this._hubStarted = false;
            _this._signalrPromise = null;
            var self = _this;
            _this._openHubCommand = new RIAPP.Command(function () {
                self._initSignalR().then(function () {
                    _this._hubConnection.on("OnNewQuote", function (data) {
                        self._onNewQuote(data);
                    });
                    _this._hubConnection.start().then(function () {
                        self._hubStarted = true;
                        setTimeout(function () {
                            self._closeHubCommand.raiseCanExecuteChanged();
                            self._openHubCommand.raiseCanExecuteChanged();
                        }, 0);
                        self._hubConnection.send('SendMyQuote', "My own quote of the day");
                    }).catch(function (res) {
                        self.handleError(res, self);
                    });
                }).catch(function (res) {
                    self.handleError(res, self);
                });
            }, function () {
                return !!options.sse_url && !_this._hubStarted;
            });
            _this._closeHubCommand = new RIAPP.Command(function () {
                _this._hubConnection.stop().catch(function (res) {
                    self.handleError(res, self);
                });
                _this._hubConnection.off("OnNewQuote");
            }, function () {
                return !!_this._hubConnection && !!_this._hubStarted;
            });
            return _this;
        }
        DemoApplication.prototype.onStartUp = function () {
            var self = this, options = self.options;
            this._dbContext = new DEMODB.DbContext();
            this._dbContext.addOnDbSetCreating(function (s, a) {
            });
            this._dbContext.initialize({ serviceUrl: options.service_url, permissions: options.permissionInfo });
            this._dbContext.dbSets.Product.defineIsActiveField(function (item) {
                return !item.SellEndDate;
            });
            this._errorVM = new COMMON.ErrorViewModel(this);
            this._headerVM = new HEADER.HeaderVM(this);
            this._productVM = new productVM_1.ProductViewModel(this);
            this._uploadVM = new uploads_1.UploadThumbnailVM(this, options.upload_thumb_url);
            function handleError(sender, data) {
                self._handleError(sender, data);
            }
            ;
            this.objEvents.addOnError(handleError);
            this._dbContext.objEvents.addOnError(handleError);
            this._dbContext.requestHeaders['RequestVerificationToken'] = COMMON.getAntiForgeryToken();
            this._uploadVM.addOnFilesUploaded(function (s, a) {
                a.product._aspect.refresh();
            });
            var filter = this._productVM.filter;
            filter.addOnLoaded(function () {
                console.log("filter data is loaded, filter.prodCatDic.count: " + filter.prodCatDic.count);
            });
            _super.prototype.onStartUp.call(this);
        };
        DemoApplication.prototype._initSignalR = function () {
            var _this = this;
            var self = this, options = self.options;
            if (!!self._signalrPromise)
                return self._signalrPromise;
            var deferred = RIAPP.Utils.defer.createDeferred();
            if (!options.sse_url) {
                deferred.reject();
                return deferred.promise();
            }
            self._signalrPromise = deferred.promise();
            require(['signalr'], function (signalr) {
                try {
                    var hubBuilder = new signalr.HubConnectionBuilder();
                    _this._hubConnection = hubBuilder
                        .withUrl(options.sse_url)
                        .configureLogging(signalr.LogLevel.Information)
                        .build();
                    _this._hubConnection.onclose(function (error) {
                        if (self.getIsStateDirty())
                            return;
                        self._hubStarted = false;
                        self._closeHubCommand.raiseCanExecuteChanged();
                        self._openHubCommand.raiseCanExecuteChanged();
                        if (!!error)
                            self.handleError(error, self);
                    });
                    self._closeHubCommand.raiseCanExecuteChanged();
                    self._openHubCommand.raiseCanExecuteChanged();
                    deferred.resolve();
                }
                catch (err) {
                    deferred.reject(err);
                }
            }, function (err) {
                deferred.reject(err);
            });
            return self._signalrPromise;
        };
        DemoApplication.prototype._handleError = function (sender, data) {
            debugger;
            data.isHandled = true;
            this.errorVM.error = data.error;
            this.errorVM.showDialog();
        };
        DemoApplication.prototype._onNewQuote = function (quote) {
            this._sseMessage = quote;
            this.objEvents.raiseProp('sseMessage');
        };
        DemoApplication.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            var self = this;
            try {
                self._errorVM.dispose();
                self._headerVM.dispose();
                self._productVM.dispose();
                self._uploadVM.dispose();
                self._dbContext.dispose();
                if (!!self._hubConnection && self._hubStarted) {
                    self._hubConnection.stop();
                }
                self._hubConnection = null;
                self._signalrPromise = null;
            }
            finally {
                _super.prototype.dispose.call(this);
            }
        };
        Object.defineProperty(DemoApplication.prototype, "options", {
            get: function () { return this._options; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "dbContext", {
            get: function () { return this._dbContext; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "errorVM", {
            get: function () { return this._errorVM; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "headerVM", {
            get: function () { return this._headerVM; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "productVM", {
            get: function () { return this._productVM; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "uploadVM", {
            get: function () { return this._uploadVM; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "sseMessage", {
            get: function () { return this._sseMessage; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "hubConnection", {
            get: function () { return this._hubConnection; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "openHubCommand", {
            get: function () { return this._openHubCommand; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DemoApplication.prototype, "closeHubCommand", {
            get: function () { return this._closeHubCommand; },
            enumerable: true,
            configurable: true
        });
        return DemoApplication;
    }(RIAPP.Application));
    exports.DemoApplication = DemoApplication;
});
define("gridDemo/resizableGrid", ["require", "exports", "jriapp", "jriapp_ui"], function (require, exports, RIAPP, uiMOD) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = RIAPP.Utils, DOM = RIAPP.DOM, doc = RIAPP.DOM.document, head = RIAPP.DOM.queryOne(doc, "head");
    var drag = null;
    var PX = "px";
    var SIGNATURE = "JColResizer";
    var FLEX = "JCLRFlex";
    var _gridsCount = 0;
    var _created_grids = {};
    function _gridCreated(grid) {
        _created_grids[grid.uniqueID] = grid;
        _gridsCount += 1;
        if (_gridsCount === 1) {
            DOM.events.on(window, 'resize', onResize, SIGNATURE);
        }
    }
    function _gridDestroyed(grid) {
        delete _created_grids[grid.uniqueID];
        _gridsCount -= 1;
        if (_gridsCount === 0) {
            DOM.events.offNS(window, SIGNATURE);
        }
    }
    var cssRules = "<style type='text/css'>  .JColResizer{table-layout:fixed; box-sizing: border-box;} .JCLRgrips{ height:0px; position:relative; box-sizing: border-box;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; box-sizing: border-box;} .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: e-resize;top:0px; box-sizing: border-box;} .JCLRLastGrip{position:absolute; width:1px; box-sizing: border-box; } .JCLRgripDrag{ border-left:1px dotted black; box-sizing: border-box; } .JCLRFlex{ width:auto!important; } .JCLRgrip.JCLRdisabledGrip .JColResizer{cursor:default; display:none;}</style>";
    DOM.append(head, RIAPP.DOM.fromHTML(cssRules));
    var onGripDrag = function (e) {
        if (!drag)
            return false;
        var gripData = DOM.getData(drag, SIGNATURE), elview = gripData.elview;
        if (elview.getIsStateDirty())
            return false;
        var data = elview.getResizeIfo();
        var table = elview.grid.table;
        var touches = e.touches;
        var ox = touches ? touches[0].pageX : e.pageX;
        var x = ox - gripData.ox + gripData.l;
        var mw = data.options.minWidth;
        var index = gripData.i;
        var colInfo = data.columns[index];
        var minLen = data.cellspacing * 1.5 + mw;
        var last = index == data.len - 1;
        var min = (index > 0) ? data.columns[index - 1].grip.offsetLeft + data.cellspacing + mw : minLen;
        var max = Infinity;
        if (data.fixed) {
            if (last) {
                max = data.w - minLen;
            }
            else {
                max = data.columns[index + 1].grip.offsetLeft - data.cellspacing - mw;
            }
        }
        x = Math.max(min, Math.min(max, x));
        gripData.x = x;
        drag.style.left = (x + PX);
        if (last) {
            gripData.w = colInfo.w + x - gripData.l;
        }
        if (!!data.options.liveDrag) {
            if (last) {
                colInfo.column.style.width = (gripData.w + PX);
                if (!data.fixed) {
                    table.style.minWidth = ((data.w + x - gripData.l) + PX);
                }
                else {
                    data.w = table.offsetWidth;
                }
            }
            else {
                elview.syncCols(index, false);
            }
            elview.syncGrips();
            var cb = data.options.onDrag;
            if (!!cb) {
                e.currentTarget = table;
                cb(e);
            }
        }
        return false;
    };
    var onGripDragOver = function (e) {
        DOM.events.offNS(doc, SIGNATURE);
        var dragCursor = RIAPP.DOM.queryOne(head, '#dragCursor');
        if (!!dragCursor) {
            DOM.removeNode(dragCursor);
        }
        if (!drag)
            return;
        var gripData = DOM.getData(drag, SIGNATURE);
        var elview = gripData.elview;
        if (elview.getIsStateDirty())
            return;
        var data = elview.getResizeIfo(), table = elview.grid.table;
        DOM.removeClass([drag], data.options.draggingClass);
        if (!!(gripData.x - gripData.l)) {
            var cb = data.options.onResize;
            var index = gripData.i;
            var last = index == data.len - 1;
            var colInfo = data.columns[index];
            if (last) {
                colInfo.column.style.width = (gripData.w + PX);
                colInfo.w = gripData.w;
            }
            else {
                elview.syncCols(index, true);
            }
            if (!data.fixed)
                elview.applyBounds();
            elview.syncGrips();
            if (!!cb) {
                e.currentTarget = table;
                cb(e);
            }
        }
        drag = null;
    };
    var onGripMouseDown = function (e) {
        var grip = this;
        var gripData = DOM.getData(grip, SIGNATURE), elview = gripData.elview;
        if (elview.getIsStateDirty())
            return false;
        var data = elview.getResizeIfo();
        var touches = e.touches;
        gripData.ox = touches ? touches[0].pageX : e.pageX;
        gripData.l = grip.offsetLeft;
        gripData.x = gripData.l;
        DOM.events.on(doc, 'touchmove', onGripDrag, SIGNATURE);
        DOM.events.on(doc, 'mousemove', onGripDrag, SIGNATURE);
        DOM.events.on(doc, 'touchend', onGripDragOver, SIGNATURE);
        DOM.events.on(doc, 'mouseup', onGripDragOver, SIGNATURE);
        var dragCursor = DOM.queryOne(head, '#dragCursor');
        if (!dragCursor) {
            var html = "<style id='dragCursor' type='text/css'>*{cursor: " + data.options.dragCursor + " !important}</style>";
            DOM.append(head, DOM.fromHTML(html));
        }
        DOM.addClass([grip], data.options.draggingClass);
        drag = grip;
        var gripCol = data.columns[gripData.i];
        if (gripCol.locked) {
            for (var i = 0; i < data.len; i++) {
                var c = data.columns[i];
                c.locked = false;
                c.w = c.column.offsetWidth;
            }
        }
        return false;
    };
    var onResize = function () {
        RIAPP.Utils.core.forEachProp(_created_grids, function (name, gridView) {
            gridView.syncGrips();
        });
    };
    var ResizableGrid = (function (_super) {
        __extends(ResizableGrid, _super);
        function ResizableGrid(el, options) {
            var _this = _super.call(this, el, options) || this;
            var self = _this, grid = self.grid;
            _gridCreated(_this);
            var defaults = {
                resizeMode: 'overflow',
                draggingClass: 'JCLRgripDrag',
                gripInnerHtml: '',
                liveDrag: false,
                minWidth: 15,
                headerOnly: true,
                dragCursor: "e-resize",
                marginLeft: null,
                marginRight: null,
                disabledColumns: [],
                onDrag: null,
                onResize: null
            };
            _this._resizeInfo = null;
            _this._ds = grid.dataSource;
            var opts = utils.core.extend(defaults, options);
            self.init(opts);
            self.bindDS(_this._ds);
            grid.objEvents.onProp("dataSource", function (s, a) {
                self.unBindDS(self._ds);
                self.bindDS(grid.dataSource);
                self._ds = grid.dataSource;
            }, _this.uniqueID);
            self.syncGrips();
            return _this;
        }
        ResizableGrid.prototype.bindDS = function (ds) {
            if (!ds)
                return;
            var self = this;
            ds.addOnCleared(function (s, a) {
                utils.queue.enque(function () { self.syncGrips(); });
            }, this.uniqueID);
            ds.addOnFill(function (s, a) {
                utils.queue.enque(function () { self.syncGrips(); });
            }, this.uniqueID);
        };
        ResizableGrid.prototype.unBindDS = function (ds) {
            if (!ds)
                return;
            ds.objEvents.offNS(this.uniqueID);
        };
        ResizableGrid.prototype.init = function (options) {
            var table = this.grid.table, style = window.getComputedStyle(table, null);
            DOM.addClass([table], SIGNATURE);
            var gripContainer = DOM.fromHTML('<div class="JCLRgrips"/>')[0];
            var header = this.grid._getInternal().getHeader();
            header.parentElement.insertBefore(gripContainer, header);
            this._resizeInfo = {
                options: options,
                mode: options.resizeMode,
                dc: options.disabledColumns,
                fixed: options.resizeMode === 'fit',
                columns: [],
                w: table.offsetWidth,
                gripContainer: gripContainer,
                cellspacing: parseInt(style.borderSpacing) || 2,
                len: 0
            };
            if (options.marginLeft)
                gripContainer.style.marginLeft = options.marginLeft;
            if (options.marginRight)
                gripContainer.style.marginRight = options.marginRight;
            this.createGrips();
        };
        ResizableGrid.prototype.createGrips = function () {
            var table = this.grid.table, self = this;
            var allTH = this.grid._tHeadCells;
            var data = this._resizeInfo;
            data.len = allTH.length;
            allTH.forEach(function (column, index) {
                var isDisabled = data.dc.indexOf(index) != -1;
                var grip = DOM.fromHTML('<div class="JCLRgrip"></div>')[0];
                data.gripContainer.appendChild(grip);
                if (!isDisabled && !!data.options.gripInnerHtml) {
                    var inner = DOM.fromHTML(data.options.gripInnerHtml);
                    DOM.append(grip, inner);
                }
                DOM.append(grip, RIAPP.DOM.fromHTML('<div class="' + SIGNATURE + '"></div>'));
                if (index == data.len - 1) {
                    DOM.addClass([grip], "JCLRLastGrip");
                    if (data.fixed)
                        grip.innerHTML = "";
                }
                if (!isDisabled) {
                    DOM.removeClass([grip], 'JCLRdisabledGrip');
                    DOM.events.on(grip, 'touchstart', onGripMouseDown);
                    DOM.events.on(grip, 'mousedown', onGripMouseDown);
                }
                else {
                    DOM.addClass([grip], 'JCLRdisabledGrip');
                }
                var colInfo = { column: column, grip: grip, w: column.offsetWidth, locked: false };
                data.columns.push(colInfo);
                column.style.width = (colInfo.w + PX);
                column.removeAttribute("width");
                var gripData = { i: index, elview: self, last: index == data.len - 1, ox: 0, x: 0, l: 0, w: 0 };
                DOM.setData(grip, SIGNATURE, gripData);
            });
            if (!data.fixed) {
                table.removeAttribute('width');
                DOM.addClass([table], FLEX);
            }
            this.syncGrips();
        };
        ResizableGrid.prototype.syncGrips = function () {
            if (this.getIsStateDirty())
                return;
            var data = this._resizeInfo;
            data.gripContainer.style.width = (data.w + PX);
            var table = this.grid.table;
            var header = this.grid._getInternal().getHeader();
            var viewport = this.grid._getInternal().getWrapper();
            var headerHeight = header.offsetHeight;
            var tableHeight = viewport.clientHeight;
            var lastGripOffset = 5;
            for (var i = 0; i < data.len; i++) {
                var colInfo = data.columns[i], leftPos = (colInfo.column.offsetLeft - table.offsetLeft + colInfo.column.offsetWidth + data.cellspacing / 2);
                if (i == data.len - 1) {
                    if ((leftPos + lastGripOffset) > data.w) {
                        leftPos = data.w - lastGripOffset;
                    }
                }
                colInfo.grip.style.left = (leftPos + PX);
                colInfo.grip.style.height = ((data.options.headerOnly ? headerHeight : (headerHeight + tableHeight)) + PX);
            }
            this.grid.updateColumnsSize();
        };
        ResizableGrid.prototype.syncCols = function (i, isOver) {
            if (this.getIsStateDirty())
                return;
            var table = this.grid.table, data = this._resizeInfo, gripData = DOM.getData(drag, SIGNATURE);
            var inc = gripData.x - gripData.l, c = data.columns[i];
            if (data.fixed) {
                var c2 = data.columns[i + 1];
                var w2 = c2.w - inc;
                c2.column.style.width = (w2 + PX);
                if (isOver) {
                    c2.w = c2.column.offsetWidth;
                }
            }
            else {
                table.style.minWidth = ((data.w + inc) + PX);
            }
            var w = c.w + inc;
            c.column.style.width = (w + PX);
            if (isOver) {
                c.w = c.column.offsetWidth;
            }
        };
        ResizableGrid.prototype.applyBounds = function () {
            if (this.getIsStateDirty())
                return;
            var table = this.grid.table;
            var data = this._resizeInfo;
            var widths = data.columns.map(function (c) {
                return c.column.offsetWidth;
            });
            data.w = table.offsetWidth;
            table.style.width = (data.w + PX);
            DOM.removeClass([table], FLEX);
            data.columns.forEach(function (c, i) {
                c.column.style.width = (widths[i] + PX);
            });
            DOM.addClass([table], FLEX);
            data.columns.forEach(function (c, i) {
                c.w = c.column.offsetWidth;
            });
            data.w = table.offsetWidth;
            var viewport = this.grid._getInternal().getWrapper();
            viewport.style.width = (table.offsetWidth + (viewport.offsetWidth - viewport.clientWidth)) + PX;
        };
        ResizableGrid.prototype.dispose = function () {
            if (this.getIsDisposed())
                return;
            this.setDisposing();
            _gridDestroyed(this);
            this.unBindDS(this._ds);
            this._ds = null;
            var table = this.grid.table, data = this._resizeInfo;
            if (!!data)
                data.gripContainer.remove();
            DOM.removeClass([table], SIGNATURE + " " + FLEX);
            this._resizeInfo = null;
            _super.prototype.dispose.call(this);
        };
        ResizableGrid.prototype.getResizeIfo = function () {
            return this._resizeInfo;
        };
        return ResizableGrid;
    }(uiMOD.DataGridElView));
    exports.ResizableGrid = ResizableGrid;
    function initModule(app) {
        app.registerElView('resizable_grid', ResizableGrid);
    }
    exports.initModule = initModule;
});
define("gridDemo/main", ["require", "exports", "jriapp", "common", "expander", "gridDemo/app", "gridDemo/resizableGrid"], function (require, exports, RIAPP, COMMON, EXPANDER, app_1, ResizableGrid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bootstrap = RIAPP.bootstrap, utils = RIAPP.Utils;
    var styles = ["lsize", 'msize', 'ssize', 'nsize'];
    var SizeConverter = (function (_super) {
        __extends(SizeConverter, _super);
        function SizeConverter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SizeConverter.prototype.convertToSource = function (val, param, dataContext) {
            return undefined;
        };
        SizeConverter.prototype.convertToTarget = function (val, param, dataContext) {
            var size = "" + val, firstLetter;
            var res = undefined, found = false;
            if (!!val) {
                if (utils.check.isNumeric(size))
                    firstLetter = 'n';
                else
                    firstLetter = size.charAt(0).toLowerCase();
            }
            res = styles.map(function (style) {
                if (!found && !!firstLetter && utils.str.startsWith(style, firstLetter)) {
                    found = true;
                    return "+" + style;
                }
                else {
                    return "-" + style;
                }
            });
            return res;
        };
        return SizeConverter;
    }(RIAPP.BaseConverter));
    exports.SizeConverter = SizeConverter;
    bootstrap.objEvents.addOnError(function (_s, args) {
        debugger;
        alert(args.error.message);
        args.isHandled = true;
    });
    function start(options) {
        options.modulesInits = {
            "COMMON": COMMON.initModule,
            "ResizableGrid": ResizableGrid.initModule,
            "EXPANDER": EXPANDER.initModule
        };
        bootstrap.init(function (bootstrap) {
            var ButtonsCSS = bootstrap.defaults.ButtonsCSS;
            ButtonsCSS.Edit = 'fas fa-edit';
            ButtonsCSS.Delete = 'fas fa-trash-alt';
            ButtonsCSS.OK = 'fas fa-check';
            ButtonsCSS.Cancel = 'fas fa-undo-alt';
        });
        var convertArg = function (p2) { return RIAPP.Utils.check.isPlainObject(p2) ? JSON.stringify(p2, null, 2) : p2; };
        return bootstrap.startApp(function () {
            return new app_1.DemoApplication(options);
        }, function (app) {
            app.registerConverter('sizeConverter', new SizeConverter());
            app.registerSvc("testsvc", function (p1, p2, p3) {
                console.log("exec testsvc factory(%s, %s, %s)", convertArg(p1), convertArg(p2), convertArg(p3));
                return "testsvc implementation";
            });
            app.loadTemplates(options.templates_url);
            app.registerTemplateLoader('productEditTemplate', function () { return utils.http.getAjax(options.productEditTemplate_url); });
        }).then(function (app) {
            if (!!options.modelData && !!options.categoryData) {
                app.productVM.filter.modelData = options.modelData;
                app.productVM.filter.categoryData = options.categoryData;
                return null;
            }
            else {
                return app.productVM.filter.load().then(function () {
                    return app.productVM.load().then(function (loadRes) { });
                });
            }
        });
    }
    exports.start = start;
});
