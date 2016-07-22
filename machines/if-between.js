module.exports = {


  friendlyName: 'If between',


  description: 'Check that a value is within the specified range (inclusive).',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    value: {
      description: 'The number to check.',
      example: 3,
      required: true
    },

    min: {
      friendlyName: 'At least (>=)',
      example: 1,
      description: 'The minimum acceptable number.',
      required: true
    },

    max: {
      friendlyName: 'No greater than (<=)',
      example: 4,
      description: 'The maximum acceptable number.',
      required: true
    }

  },


  exits: {

    success: {
      description: 'The value is within the specified range.'
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The value is NOT within the specified range.'
    }

  },


  fn: function (inputs, exits) {
    var _ = require('lodash');

    // if inputs are inconsistent with expectations, bail out w/ `error`
    if (inputs.min > inputs.max) {
      return exits.error(new Error('The configured value of the `min` input must be <= that of `max`.'));
    }

    // because lodash's `inRange` is only inclusive on the bottom side,
    // we'll make it inclusive here by adding an additional check:
    if (_.inRange(inputs.value, inputs.min, inputs.max) || (inputs.max === inputs.value)){
      return exits.success();
    }
    return exits.otherwise();
  }


};
