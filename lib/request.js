'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Observable = require('rxjs/Observable');

require('rxjs/add/observable/dom/ajax');

require('rxjs/add/operator/map');

/**
 * Request function
 *
 * @param {Object} opts
 */
var request = function request(opts) {
  return _Observable.Observable.ajax({
    url: opts.uri,
    body: opts.body,
    method: 'POST',
    headers: opts.headers
  }).map(function (_ref) {
    var response = _ref.response;
    return response;
  });
};

exports.default = request;