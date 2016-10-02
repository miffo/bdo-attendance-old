"use strict";
var Observable_1 = require('./Observable');
require('./scheduler/MiscJSDoc');
require('./observable/dom/MiscJSDoc');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ObservableDoc = (function () {
    function ObservableDoc() {
    }
    /**
     * Creates a new Observable that will execute the specified function when a
     * {@link Subscriber} subscribes to it.
     *
     * <span class="informal">Creates an Observable with custom logic given in
     * the `subscribe` function.</span>
     *
     * <img src="./img/create.png" width="100%">
     *
     * `create` converts a `subscribe` function to an actual Observable. This is
     * equivalent to calling the Observable constructor. Write the `subscribe`
     * function so that it behaves as an Observable: It should invoke the
     * Subscriber's `next`, `error`, and `complete` methods following the
     * *Observable Contract*. A well-formed Observable must invoke either the
     * Subscriber's `complete` method exactly once or its `error` method exactly
     * once, and invoke nothing else thereafter.
     *
     * Most of the times you should not need to use `create` because existing
     * creation operators (together with instance combination operators) allow you
     * to create an Observable for most of the use cases. However, `create` is
     * low-level and is able to create any Observable.
     *
     * @example <caption>Emit three random numbers, then complete.</caption>
     * var result = Rx.Observable.create(function (subscriber) {
     *   subscriber.next(Math.random());
     *   subscriber.next(Math.random());
     *   subscriber.next(Math.random());
     *   subscriber.complete();
     * });
     * result.subscribe(x => console.log(x));
     *
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {function(subscriber: Subscriber): TeardownLogic} [subscribe] A
     * function that accepts a {@link Subscriber}, and invokes its `next`,
     * `error`, and `complete` methods as appropriate, and should return some
     * logic for tear down, either as a {@link Subscription} or as a function.
     * @return {Observable} An Observable that, when subscribed, will execute the
     * specified function.
     * @static true
     * @name create
     * @owner Observable
     */
    ObservableDoc.create = function (subscribe) {
        return new Observable_1.Observable(subscribe);
    };
    ;
    return ObservableDoc;
}());
exports.ObservableDoc = ObservableDoc;
/**
 * An interface for a consumer of push-based notifications delivered by an
 * {@link Observable}.
 *
 * ```ts
 * interface Observer<T> {
 *   closed?: boolean;
 *   next: (value: T) => void;
 *   error: (err: any) => void;
 *   complete: () => void;
 * }
 * ```
 *
 * An object conforming to the Observer interface is usually
 * given to the `observable.subscribe(observer)` method, and the Observable will
 * call the Observer's `next(value)` method to provide notifications. A
 * well-behaved Observable will call an Observer's `complete()` method exactly
 * once or the Observer's `error(err)` method exactly once, as the last
 * notification delivered.
 *
 * @interface
 * @name Observer
 * @noimport true
 */
var ObserverDoc = (function () {
    function ObserverDoc() {
        /**
         * An optional flag to indicate whether this Observer, when used as a
         * subscriber, has already been unsubscribed from its Observable.
         * @type {boolean}
         */
        this.closed = false;
    }
    /**
     * The callback to receive notifications of type `next` from the Observable,
     * with a value. The Observable may call this method 0 or more times.
     * @param {T} value The `next` value.
     * @return {void}
     */
    ObserverDoc.prototype.next = function (value) {
        return void 0;
    };
    /**
     * The callback to receive notifications of type `error` from the Observable,
     * with an attached {@link Error}. Notifies the Observer that the Observable
     * has experienced an error condition.
     * @param {any} err The `error` exception.
     * @return {void}
     */
    ObserverDoc.prototype.error = function (err) {
        return void 0;
    };
    /**
     * The callback to receive a valueless notification of type `complete` from
     * the Observable. Notifies the Observer that the Observable has finished
     * sending push-based notifications.
     * @return {void}
     */
    ObserverDoc.prototype.complete = function () {
        return void 0;
    };
    return ObserverDoc;
}());
exports.ObserverDoc = ObserverDoc;
//# sourceMappingURL=MiscJSDoc.js.map