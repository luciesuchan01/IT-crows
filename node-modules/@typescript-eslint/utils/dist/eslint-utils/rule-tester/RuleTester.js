"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _RuleTester_baseOptions, _RuleTester_afterAll;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleTester = exports.noFormat = void 0;
const package_json_1 = require("eslint/package.json");
const path = __importStar(require("path"));
const semver = __importStar(require("semver"));
const TSESLint = __importStar(require("../../ts-eslint"));
const deepMerge_1 = require("../deepMerge");
const dependencyConstraints_1 = require("./dependencyConstraints");
const TS_ESLINT_PARSER = '@typescript-eslint/parser';
const ERROR_MESSAGE = `Do not set the parser at the test level unless you want to use a parser other than ${TS_ESLINT_PARSER}`;
class RuleTester extends TSESLint.RuleTester {
    constructor(baseOptions) {
        var _b, _c;
        super(Object.assign(Object.assign({}, baseOptions), { parserOptions: Object.assign(Object.assign({}, baseOptions.parserOptions), { warnOnUnsupportedTypeScriptVersion: (_c = (_b = baseOptions.parserOptions) === null || _b === void 0 ? void 0 : _b.warnOnUnsupportedTypeScriptVersion) !== null && _c !== void 0 ? _c : false }), 
            // as of eslint 6 you have to provide an absolute path to the parser
            // but that's not as clean to type, this saves us trying to manually enforce
            // that contributors require.resolve everything
            parser: require.resolve(baseOptions.parser) }));
        _RuleTester_baseOptions.set(this, void 0);
        __classPrivateFieldSet(this, _RuleTester_baseOptions, baseOptions, "f");
        // make sure that the parser doesn't hold onto file handles between tests
        // on linux (i.e. our CI env), there can be very a limited number of watch handles available
        // the cast here is due to https://github.com/microsoft/TypeScript/issues/3841
        this.constructor.afterAll(() => {
            try {
                // instead of creating a hard dependency, just use a soft require
                // a bit weird, but if they're using this tooling, it'll be installed
                const parser = require(TS_ESLINT_PARSER);
                parser.clearCaches();
            }
            catch (_b) {
                // ignored on purpose
            }
        });
    }
    /**
     * If you supply a value to this property, the rule tester will call this instead of using the version defined on
     * the global namespace.
     */
    static get afterAll() {
        return (__classPrivateFieldGet(this, _a, "f", _RuleTester_afterAll) ||
            (typeof afterAll === 'function' ? afterAll : () => { }));
    }
    static set afterAll(value) {
        __classPrivateFieldSet(this, _a, value, "f", _RuleTester_afterAll);
    }
    getFilename(testOptions) {
        var _b;
        const resolvedOptions = (0, deepMerge_1.deepMerge)(__classPrivateFieldGet(this, _RuleTester_baseOptions, "f").parserOptions, testOptions);
        const filename = `file.ts${((_b = resolvedOptions.ecmaFeatures) === null || _b === void 0 ? void 0 : _b.jsx) ? 'x' : ''}`;
        if (resolvedOptions.project) {
            return path.join(resolvedOptions.tsconfigRootDir != null
                ? resolvedOptions.tsconfigRootDir
                : process.cwd(), filename);
        }
        return filename;
    }
    // as of eslint 6 you have to provide an absolute path to the parser
    // If you don't do that at the test level, the test will fail somewhat cryptically...
    // This is a lot more explicit
    run(name, rule, testsReadonly) {
        const tests = {
            // standardize the valid tests as objects
            valid: testsReadonly.valid.map(test => {
                if (typeof test === 'string') {
                    return {
                        code: test,
                    };
                }
                return test;
            }),
            invalid: testsReadonly.invalid,
        };
        // convenience iterator to make it easy to loop all tests without a concat
        const allTestsIterator = {
            *[Symbol.iterator]() {
                for (const test of tests.valid) {
                    yield test;
                }
                for (const test of tests.invalid) {
                    yield test;
                }
            },
        };
        /*
        Automatically add a filename to the tests to enable type-aware tests to "just work".
        This saves users having to verbosely and manually add the filename to every
        single test case.
        Hugely helps with the string-based valid test cases as it means they don't
        need to be made objects!
        */
        const addFilename = (test) => {
            if (test.parser === TS_ESLINT_PARSER) {
                throw new Error(ERROR_MESSAGE);
            }
            if (!test.filename) {
                return Object.assign(Object.assign({}, test), { filename: this.getFilename(test.parserOptions) });
            }
            return test;
        };
        tests.valid = tests.valid.map(addFilename);
        tests.invalid = tests.invalid.map(addFilename);
        const hasOnly = (() => {
            for (const test of allTestsIterator) {
                if (test.only) {
                    return true;
                }
            }
            return false;
        })();
        // if there is an `only: true` - don't apply constraints - assume that
        // we are in "local development" mode rather than "CI validation" mode
        if (!hasOnly) {
            /*
            Automatically skip tests that don't satisfy the dependency constraints.
            */
            const hasConstraints = (() => {
                for (const test of allTestsIterator) {
                    if (test.dependencyConstraints &&
                        Object.keys(test.dependencyConstraints).length > 0) {
                        return true;
                    }
                }
                return false;
            })();
            if (hasConstraints) {
                // The `only: boolean` test property was only added in ESLint v7.29.0.
                if (semver.satisfies(package_json_1.version, '>=7.29.0')) {
                    /*
                    Mark all satisfactory tests as `only: true`, and all other tests as
                    `only: false`.
                    When multiple tests are marked as "only", test frameworks like jest and mocha
                    will run all of those tests and will just skip the other tests.
          
                    We do this instead of just omitting the tests entirely because it gives the
                    test framework the opportunity to log the test as skipped rather than the test
                    just disappearing.
                    */
                    const maybeMarkAsOnly = (test) => {
                        return Object.assign(Object.assign({}, test), { only: (0, dependencyConstraints_1.satisfiesAllDependencyConstraints)(test.dependencyConstraints) });
                    };
                    tests.valid = tests.valid.map(maybeMarkAsOnly);
                    tests.invalid = tests.invalid.map(maybeMarkAsOnly);
                }
                else {
                    // On older versions we just fallback to raw array filtering like SAVAGES
                    tests.valid = tests.valid.filter(test => (0, dependencyConstraints_1.satisfiesAllDependencyConstraints)(test.dependencyConstraints));
                    tests.invalid = tests.invalid.filter(test => (0, dependencyConstraints_1.satisfiesAllDependencyConstraints)(test.dependencyConstraints));
                }
            }
        }
        super.run(name, rule, tests);
    }
}
exports.RuleTester = RuleTester;
_a = RuleTester, _RuleTester_baseOptions = new WeakMap();
_RuleTester_afterAll = { value: void 0 };
/**
 * Simple no-op tag to mark code samples as "should not format with prettier"
 *   for the internal/plugin-test-formatting lint rule
 */
function noFormat(strings, ...keys) {
    const lastIndex = strings.length - 1;
    return (strings.slice(0, lastIndex).reduce((p, s, i) => p + s + keys[i], '') +
        strings[lastIndex]);
}
exports.noFormat = noFormat;
//# sourceMappingURL=RuleTester.js.map